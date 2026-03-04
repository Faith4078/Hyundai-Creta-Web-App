import { auth } from '@/auth';
import { toNextJsHandler } from 'better-auth/next-js';

const handler = toNextJsHandler(auth);

export const GET = handler.GET;
export const POST = async (req: Request) => {
    try {
        return await handler.POST(req);
    } catch (e) {
        console.error("DEBUG: Better Auth POST Error:", e);
        throw e;
    }
};
