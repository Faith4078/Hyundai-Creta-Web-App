import { NextResponse } from 'next/server';
import { z } from 'zod';
import { eq } from 'drizzle-orm';
import { db } from '@/db';
import { leads } from '@/db/schema/app-schema';
import { forwardLeadToCrm } from '@/lib/crm';

const leadSchema = z.object({
  fullName: z.string().trim().min(2).max(100),
  email: z.string().trim().email(),
  phone: z
    .string()
    .trim()
    .regex(/^\+?\d[\d\s-]{6,18}$/, 'Invalid phone number'),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: 'Invalid lead payload',
        details: z.flattenError(parsed.error).fieldErrors,
      },
      { status: 400 }
    );
  }

  const { fullName, email, phone } = parsed.data;

  let leadId: string;
  try {
    const [inserted] = await db
      .insert(leads)
      .values({
        full_name: fullName,
        email_address: email,
        phone_number: phone,
      })
      .returning({ id: leads.id });
    leadId = inserted.id;
  } catch (error) {
    console.error('[leads] Failed to persist lead:', error);
    return NextResponse.json(
      { error: 'Failed to save lead' },
      { status: 500 }
    );
  }

  // Forward to the CRM only after the durable write. A CRM failure never
  // fails the user's submission — the sync_status column records the
  // outcome so failed leads can be re-driven later.
  const result = await forwardLeadToCrm({ id: leadId, fullName, email, phone });
  if (result !== 'skipped') {
    try {
      await db
        .update(leads)
        .set({ sync_status: result })
        .where(eq(leads.id, leadId));
    } catch (error) {
      console.error('[leads] Failed to update sync status:', error);
    }
  }

  return NextResponse.json(
    { id: leadId, syncStatus: result === 'skipped' ? 'pending' : result },
    { status: 201 }
  );
}
