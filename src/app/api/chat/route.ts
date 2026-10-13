import { NextRequest, NextResponse } from "next/server";
import { PORTFOLIO_SYSTEM_PROMPT } from "@/data/portfolioKnowledge";

const MAX_MESSAGE_LENGTH = 800;
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const MODEL = "openai/gpt-oss-20b";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface RequestBody {
  message: string;
  history?: ChatMessage[];
}

/* ── Simple in-memory rate limit (resets on cold start) ── */
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 20;
const RATE_WINDOW_MS = 60_000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a moment and try again." },
      { status: 429 }
    );
  }

  let body: RequestBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  const { message, history = [] } = body;

  if (!message || typeof message !== "string" || message.trim().length === 0) {
    return NextResponse.json(
      { error: "Message is required." },
      { status: 400 }
    );
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json(
      { error: `Message must be ${MAX_MESSAGE_LENGTH} characters or fewer.` },
      { status: 400 }
    );
  }
  if (!Array.isArray(history)) {
    return NextResponse.json(
      { error: "Invalid history format." },
      { status: 400 }
    );
  }

  /* No API key → graceful fallback, never blocks the UI */
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        reply:
          "The portfolio assistant isn't fully configured yet. You can reach Mohammed Rizwan directly at mdrmohammedrizwan@gmail.com or on LinkedIn: https://www.linkedin.com/in/mdmohammedrizwan/",
      },
      { status: 200 }
    );
  }

  const recentHistory: ChatMessage[] = history.slice(-12).map((m) => ({
    role: m.role,
    content: String(m.content).slice(0, MAX_MESSAGE_LENGTH),
  }));

  const messages = [
    { role: "system", content: PORTFOLIO_SYSTEM_PROMPT },
    ...recentHistory,
    { role: "user", content: message.trim() },
  ];

  try {
    const groqRes = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages,
        max_tokens: 400,
        temperature: 0.4,
        stream: false,
      }),
      signal: AbortSignal.timeout(15_000),
    });

    if (!groqRes.ok) {
      const errBody = await groqRes.text();
      console.error("Groq error:", groqRes.status, errBody);
      /* Surface rate-limit errors with a helpful, specific message */
      if (groqRes.status === 429) {
        return NextResponse.json(
          {
            error:
              "The assistant is handling too many requests right now. Please wait a moment and try again.",
          },
          { status: 429 }
        );
      }
      return NextResponse.json(
        {
          error:
            "The assistant is temporarily unavailable. Please try again shortly.",
        },
        { status: 502 }
      );
    }

    const data = await groqRes.json();
    const reply: string =
      data?.choices?.[0]?.message?.content?.trim() ??
      "I couldn't generate a response. Please try again.";

    return NextResponse.json({ reply }, { status: 200 });
  } catch (err) {
    const isTimeout =
      err instanceof Error && err.name === "TimeoutError";
    console.error("Chat route error:", err);
    return NextResponse.json(
      {
        error: isTimeout
          ? "The request timed out. Please try again."
          : "An unexpected error occurred. Please try again.",
      },
      { status: 500 }
    );
  }
}
