import { NextRequest, NextResponse } from 'next/server';

// ─── In-memory rate limiting ───
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 5; // max requests per window

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const entry = rateLimitMap.get(ip);

    if (!entry || now > entry.resetTime) {
        rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
        return false;
    }

    entry.count++;
    if (entry.count > RATE_LIMIT_MAX) {
        return true;
    }

    return false;
}

// ─── Validation ───
function validateEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

interface ContactPayload {
    name: string;
    email: string;
    message: string;
}

function validatePayload(body: unknown): { valid: true; data: ContactPayload } | { valid: false; error: string } {
    if (!body || typeof body !== 'object') {
        return { valid: false, error: 'Invalid request body.' };
    }

    const { name, email, message } = body as Record<string, unknown>;

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
        return { valid: false, error: 'Name is required and must be at least 2 characters.' };
    }

    if (!email || typeof email !== 'string' || !validateEmail(email)) {
        return { valid: false, error: 'A valid email address is required.' };
    }

    if (!message || typeof message !== 'string' || message.trim().length < 5) {
        return { valid: false, error: 'Message is required and must be at least 5 characters.' };
    }

    if (name.length > 200 || email.length > 320 || message.length > 5000) {
        return { valid: false, error: 'Input exceeds maximum allowed length.' };
    }

    return {
        valid: true,
        data: {
            name: name.trim(),
            email: email.trim().toLowerCase(),
            message: message.trim(),
        },
    };
}

// ─── POST Handler ───
export async function POST(request: NextRequest) {
    try {
        // Rate limiting
        const forwarded = request.headers.get('x-forwarded-for');
        const ip = forwarded?.split(',')[0]?.trim() || 'unknown';

        if (isRateLimited(ip)) {
            return NextResponse.json(
                { success: false, error: 'Too many requests. Please try again later.' },
                { status: 429 }
            );
        }

        // Parse and validate
        let body: unknown;
        try {
            body = await request.json();
        } catch {
            return NextResponse.json(
                { success: false, error: 'Invalid JSON in request body.' },
                { status: 400 }
            );
        }

        const validation = validatePayload(body);
        if (!validation.valid) {
            return NextResponse.json(
                { success: false, error: validation.error },
                { status: 400 }
            );
        }

        const { name, email, message } = validation.data;

        // ─── Process the contact form ───
        // Currently logs to console. Replace with email service (e.g., Resend, SendGrid) when ready.
        console.log('━━━ NEW CONTACT FORM SUBMISSION ━━━');
        console.log(`Name:    ${name}`);
        console.log(`Email:   ${email}`);
        console.log(`Message: ${message}`);
        console.log(`Time:    ${new Date().toISOString()}`);
        console.log(`IP:      ${ip}`);
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

        return NextResponse.json(
            { success: true, message: 'Thank you! Your message has been received.' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { success: false, error: 'An unexpected error occurred. Please try again.' },
            { status: 500 }
        );
    }
}
