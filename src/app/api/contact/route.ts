import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

// ── Rate limiter: máx 3 envíos por IP por hora ──────────────────────────────
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60 * 60 * 1000 });
    return false;
  }

  if (entry.count >= 3) return true;

  entry.count++;
  return false;
}

// ── Cloudflare Turnstile verification ───────────────────────────────────────
async function verifyTurnstile(token: string): Promise<boolean> {
  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: token,
        }),
      }
    );
    const data = await res.json();
    return data.success === true;
  } catch {
    return false;
  }
}

// ── POST handler ─────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  // 1. Rate limiting por IP
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Demasiados intentos. Esperá un momento antes de reintentar." },
      { status: 429 }
    );
  }

  try {
    const { name, email, message, honeypot, turnstileToken } = await req.json();

    // 2. Honeypot — si está relleno es un bot, lo descartamos silenciosamente
    if (honeypot) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // 3. Turnstile — verificación anti-bot de Cloudflare
    if (!turnstileToken || !(await verifyTurnstile(turnstileToken))) {
      return NextResponse.json(
        { error: "Verificación de seguridad fallida. Recargá la página." },
        { status: 403 }
      );
    }

    // 4. Validación básica de campos
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Faltan campos requeridos." },
        { status: 400 }
      );
    }

    // 5. Envío de email con Resend
    const { error } = await resend.emails.send({
      from: "DevHorses Contact <contacto@devhorses.com>",
      to: "devhorses2026@gmail.com",
      replyTo: email,
      subject: `Nuevo mensaje de ${name} — DevHorses Landing`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0A0F1C; color: #fff; padding: 32px; border-radius: 12px;">
          <h2 style="color: #22d3ee; margin-bottom: 8px;">Nuevo mensaje desde devhorses.com</h2>
          <hr style="border-color: #1e293b; margin-bottom: 24px;" />

          <p style="margin: 0 0 4px; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Nombre</p>
          <p style="margin: 0 0 20px; font-size: 16px; font-weight: 600;">${name}</p>

          <p style="margin: 0 0 4px; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</p>
          <p style="margin: 0 0 20px; font-size: 16px;">
            <a href="mailto:${email}" style="color: #22d3ee; text-decoration: none;">${email}</a>
          </p>

          <p style="margin: 0 0 4px; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Mensaje</p>
          <p style="margin: 0; font-size: 15px; line-height: 1.7; background: #0d1829; padding: 16px; border-radius: 8px; border-left: 3px solid #22d3ee;">
            ${message.replace(/\n/g, "<br />")}
          </p>

          <hr style="border-color: #1e293b; margin-top: 32px;" />
          <p style="color: #475569; font-size: 12px; text-align: center; margin: 16px 0 0;">
            Enviado desde <strong style="color: #22d3ee;">devhorses.com</strong>
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Error al enviar el email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json(
      { error: "Error inesperado." },
      { status: 500 }
    );
  }
}
