"use client";

import {
  useState,
  useRef,
  useEffect,
  useCallback,
  useId,
} from "react";
import Image from "next/image";
import { SUGGESTED_QUESTIONS } from "@/data/portfolioKnowledge";

/* ── Types ─────────────────────────────────────────────────────────────── */
interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

/* ── Robot avatar — used in launcher and chat header ────────────────────── */
function AvatarImg({
  size,
  className = "",
}: {
  size: number;
  className?: string;
}) {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    /* Fallback: clean robot SVG in a dark circle */
    return (
      <div
        className={`relative rounded-full overflow-hidden flex-shrink-0 bg-foreground flex items-center justify-center ${className}`}
        style={{ width: size, height: size }}
        aria-label="Rizwan's AI Portfolio Assistant"
      >
        <svg
          width={size * 0.55}
          height={size * 0.55}
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          <circle cx="12" cy="16" r="1" fill="white" stroke="none" />
        </svg>
      </div>
    );
  }

  return (
    <div
      className={`relative rounded-xl overflow-hidden flex-shrink-0 bg-white ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/assistant-avatar.png"
        alt="Rizwan's AI Portfolio Assistant"
        fill
        sizes={`${size}px`}
        className="object-contain object-center p-0.5"
        priority
        onError={() => setImgError(true)}
      />
    </div>
  );
}

/* ── Loading dots ────────────────────────────────────────────────────────── */
function TypingDots() {
  return (
    <div
      className="flex items-center gap-1 px-4 py-3"
      aria-label="Assistant is typing"
      aria-live="polite"
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-muted animate-bounce"
          style={{ animationDelay: `${i * 150}ms` }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

/* ── Send icon ──────────────────────────────────────────────────────────── */
function SendIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

/* ── Main component ──────────────────────────────────────────────────────── */
export default function FloatingAssistant() {
  const [open, setOpen]         = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput]       = useState("");
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState<string | null>(null);
  const [lastMsg, setLastMsg]   = useState<string | null>(null);
  /* Show tooltip after short delay on first load */
  const [showTooltip, setShowTooltip] = useState(false);
  /* Track if launcher avatar image failed */
  const [launcherImgError, setLauncherImgError] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef  = useRef<HTMLTextAreaElement>(null);
  const panelRef  = useRef<HTMLDivElement>(null);
  const panelId   = useId();
  const launchId  = useId();

  /* Tooltip entrance — appears once after 1.5 s, fades if panel opens */
  useEffect(() => {
    const t = setTimeout(() => setShowTooltip(true), 1500);
    return () => clearTimeout(t);
  }, []);
  useEffect(() => {
    if (open) setShowTooltip(false);
  }, [open]);

  /* Auto-scroll */
  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, loading]);

  /* Focus input on open */
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 80);
  }, [open]);

  /* Escape closes panel */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  /* Click-outside closes panel */
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node))
        setOpen(false);
    };
    const t = setTimeout(
      () => document.addEventListener("mousedown", onClick),
      100
    );
    return () => {
      clearTimeout(t);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  /* Send message */
  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || loading) return;

      setError(null);
      setLastMsg(trimmed);
      setInput("");

      const userMsg: Message = {
        id: crypto.randomUUID(),
        role: "user",
        content: trimmed,
      };
      setMessages((prev) => [...prev, userMsg]);
      setLoading(true);

      try {
        const history = messages.map((m) => ({
          role: m.role,
          content: m.content,
        }));
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: trimmed, history }),
        });
        const data = await res.json();
        if (!res.ok || data.error)
          throw new Error(data.error ?? "Something went wrong.");

        setMessages((prev) => [
          ...prev,
          { id: crypto.randomUUID(), role: "assistant", content: data.reply },
        ]);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unexpected error occurred."
        );
        setMessages((prev) => prev.filter((m) => m.id !== userMsg.id));
      } finally {
        setLoading(false);
      }
    },
    [loading, messages]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const isEmpty = messages.length === 0 && !loading;

  return (
    <>
      {/* ── Chat panel ─────────────────────────────────────────────────── */}
      {open && (
        <div
          ref={panelRef}
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-label="Portfolio assistant"
          className={[
            "fixed z-[9998]",
            /* position: above launcher, anchored bottom-right */
            /* safe-area-inset support via padding */
            "bottom-[5.5rem] right-4 sm:right-6",
            "w-[calc(100vw-2rem)] sm:w-[380px]",
            "h-[520px] max-h-[80dvh]",
            "flex flex-col",
            "bg-background/95 backdrop-blur-xl",
            "border border-border",
            "rounded-2xl shadow-2xl",
            "animate-fade-up",
          ].join(" ")}
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3.5 border-b border-border flex-shrink-0">
            <AvatarImg size={32} />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground leading-tight">
                Rizwan&apos;s Portfolio Assistant
              </p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-green-500"
                  aria-hidden="true"
                />
                <span className="text-[10px] text-muted">Ready to help</span>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-7 h-7 flex items-center justify-center rounded-full text-muted hover:text-foreground hover:bg-surface transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent flex-shrink-0"
              aria-label="Close assistant"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto overscroll-contain px-4 py-3 space-y-3 min-h-0"
            style={{ scrollbarWidth: "thin" }}
            aria-live="polite"
            aria-atomic="false"
          >
            {isEmpty && (
              <div className="flex flex-col h-full items-center justify-center gap-4 py-4">
                <p className="text-xs text-muted text-center leading-relaxed max-w-[240px]">
                  Ask me about Rizwan&apos;s experience, skills, projects, or
                  background.
                </p>
                <div className="flex flex-col gap-2 w-full">
                  {SUGGESTED_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q)}
                      disabled={loading}
                      className="text-left text-xs px-3 py-2 rounded-lg border border-border text-muted hover:text-foreground hover:border-foreground/30 hover:bg-surface transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.role === "assistant" && (
                  <AvatarImg size={24} className="mt-0.5 mr-2" />
                )}
                <div
                  className={[
                    "max-w-[80%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed whitespace-pre-wrap",
                    msg.role === "user"
                      ? "bg-foreground text-background rounded-br-sm"
                      : "bg-surface border border-border text-foreground rounded-bl-sm",
                  ].join(" ")}
                  role={msg.role === "assistant" ? "article" : undefined}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <AvatarImg size={24} className="mt-0.5 mr-2" />
                <div className="bg-surface border border-border rounded-2xl rounded-bl-sm">
                  <TypingDots />
                </div>
              </div>
            )}

            {error && (
              <div className="flex justify-center" role="alert">
                <div className="bg-surface border border-border rounded-xl px-4 py-3 text-center max-w-xs">
                  <p className="text-xs text-red-600 mb-2">{error}</p>
                  <button
                    onClick={() => lastMsg && sendMessage(lastMsg)}
                    className="text-xs font-semibold text-foreground underline hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                  >
                    Try again
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="px-3 pb-3 pt-2 border-t border-border flex-shrink-0"
            aria-label="Send a message"
          >
            <div className="flex items-end gap-2 bg-surface border border-border rounded-xl px-3 py-2 focus-within:border-foreground/30 transition-colors duration-200">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask anything… (Enter to send)"
                maxLength={800}
                rows={1}
                disabled={loading}
                className="flex-1 bg-transparent text-[13px] text-foreground placeholder:text-muted outline-none resize-none py-0.5 max-h-28 overflow-y-auto disabled:cursor-not-allowed"
                aria-label="Type your message"
                style={{ scrollbarWidth: "thin" }}
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                className="w-7 h-7 rounded-full bg-foreground text-background flex items-center justify-center flex-shrink-0 hover:bg-foreground/80 transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Send message"
              >
                <SendIcon />
              </button>
            </div>
            <p className="text-[10px] text-subtle/60 text-center mt-1.5">
              Press Enter to send · Shift+Enter for new line
            </p>
          </form>
        </div>
      )}

      {/* ── Floating launcher ──────────────────────────────────────────── */}
      {/*
        z-[9999] ensures it sits above everything including the navbar (z-50).
        No parent transform or overflow:hidden here — placed directly in
        <body> via layout.tsx so position:fixed is always viewport-relative.
      */}
      <div
        className="fixed z-[9999]"
        style={{
          bottom: "calc(1.5rem + env(safe-area-inset-bottom, 0px))",
          right: "1.5rem",
        }}
      >
        {/* "Ask my AI assistant" tooltip — fades in after 1.5 s, hides when chat opens */}
        <div
          className={[
            "absolute right-full mr-3 top-1/2 -translate-y-1/2",
            "pointer-events-none whitespace-nowrap",
            "transition-all duration-500",
            showTooltip && !open
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-2",
          ].join(" ")}
          aria-hidden="true"
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground bg-background border border-border rounded-full px-3 py-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
            Ask my AI assistant
          </span>
        </div>

        {/* Launcher button */}
        <button
          id={launchId}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={
            open ? "Close portfolio assistant" : "Open portfolio assistant"
          }
          className={[
            "relative w-16 h-16 rounded-2xl overflow-hidden",
            "border-2 border-white/90",
            "shadow-lg hover:shadow-xl",
            "transition-all duration-300",
            "hover:scale-110 active:scale-95",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
            "bg-white",
          ].join(" ")}
        >
          {/* Robot avatar image — shown when panel is closed */}
          <span
            className={`absolute inset-0 transition-all duration-300 ${
              open ? "opacity-0 scale-75" : "opacity-100 scale-100"
            }`}
          >
            {launcherImgError ? (
              <span className="w-full h-full flex items-center justify-center bg-foreground rounded-2xl">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  <circle cx="12" cy="16" r="1" fill="white" stroke="none" />
                </svg>
              </span>
            ) : (
              <Image
                src="/assistant-avatar.png"
                alt="Open portfolio assistant"
                fill
                sizes="64px"
                className="object-contain object-center p-1"
                priority
                onError={() => setLauncherImgError(true)}
              />
            )}
          </span>

          {/* Close X — shown when panel is open */}
          <span
            className={`absolute inset-0 flex items-center justify-center bg-foreground text-background transition-all duration-300 rounded-2xl ${
              open ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
            aria-hidden="true"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </span>
        </button>
      </div>
    </>
  );
}
