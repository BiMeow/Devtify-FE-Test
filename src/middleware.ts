import { Ratelimit } from '@upstash/ratelimit';
import { kv } from '@vercel/kv';
import { NextRequest, NextResponse } from 'next/server';

// const ratelimit = new Ratelimit({
// 	redis: kv,
// 	// 60 requests from the same IP in 60 seconds
// 	limiter: Ratelimit.slidingWindow(parseInt(process.env.MAX_REQUEST_LIMIT || '60'), '60 s'),
// });

// Define which routes you want to rate limit
export const config = {
	matcher: '/',
};

export default async function middleware(request: NextRequest) {
	// const max: any = process.env.MAX_REQUEST_LIMIT;
	// if (parseInt(max) == 0) {
	// 	return NextResponse.next();
	// } else {
	// 	// You could alternatively limit based on user ID or similar
	// 	const ip = request.ip ?? '127.0.0.1';
	// 	const { success, pending, limit, reset, remaining } = await ratelimit.limit(ip);
	// 	return success ? NextResponse.next() : NextResponse.redirect(new URL('/blocked', request.url));
	// }

	return NextResponse.next();
}
