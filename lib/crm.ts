import 'server-only';

export interface CrmLead {
  id: string;
  fullName: string;
  email: string;
  phone: string;
}

export type CrmSyncResult = 'synced' | 'failed' | 'skipped';

const MAX_ATTEMPTS = 3;
const BASE_RETRY_DELAY_MS = 300;

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Forward a lead to Hyundai's CRM webhook. Transient failures (network
 * errors, 5xx responses) are retried a couple of times with a short
 * backoff. Returns 'skipped' when CRM_WEBHOOK_URL is not configured, so
 * callers can leave the lead pending instead of marking it failed.
 */
export async function forwardLeadToCrm(lead: CrmLead): Promise<CrmSyncResult> {
  const url = process.env.CRM_WEBHOOK_URL;
  if (!url) return 'skipped';

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  if (process.env.CRM_WEBHOOK_SECRET) {
    headers.Authorization = `Bearer ${process.env.CRM_WEBHOOK_SECRET}`;
  }

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(lead),
        // A hung CRM must not hold the user's request open.
        signal: AbortSignal.timeout(5000),
      });
      if (response.ok) return 'synced';
      if (response.status < 500) {
        // The CRM rejected the payload — retrying won't change the outcome.
        console.error(
          `[crm] CRM rejected lead ${lead.id} with status ${response.status}`
        );
        return 'failed';
      }
      console.error(
        `[crm] Attempt ${attempt} for lead ${lead.id} got status ${response.status}`
      );
    } catch (error) {
      console.error(`[crm] Attempt ${attempt} for lead ${lead.id} failed:`, error);
    }
    if (attempt < MAX_ATTEMPTS) await delay(BASE_RETRY_DELAY_MS * attempt);
  }
  return 'failed';
}
