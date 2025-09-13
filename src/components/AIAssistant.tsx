// src/components/AIAssistant.tsx
import React, { useEffect, useRef, useState } from "react";
import { ChatMessage } from "@/types";
import { getAIResponseStream } from "../services/geminiService";

/* ---------- storage keys ---------- */
const LS_KEYS = {
  MESSAGES: "ai_assistant_msgs_v_final",
  CONTEXT_OPT_IN: "ai_assistant_context_v_final",
};

/* ---------- helpers ---------- */
const uid = (p = "") => `${p}${Math.random().toString(36).slice(2, 9)}`;
const saveJSON = (k: string, v: any) => {
  try {
    localStorage.setItem(k, JSON.stringify(v));
  } catch {}
};
const loadJSON = (k: string) => {
  try {
    const v = localStorage.getItem(k);
    return v ? JSON.parse(v) : null;
  } catch {
    return null;
  }
};

/* ---------- small UI primitives ---------- */
const IconCopy = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" className="inline-block">
    <path
      d="M16 2H6a2 2 0 0 0-2 2v12"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="none"
    />
    <rect
      x="8"
      y="6"
      width="12"
      height="12"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="none"
    />
  </svg>
);

const CodeBlock: React.FC<{ code: string; filename?: string }> = ({
  code,
  filename,
}) => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  };

  const download = () => {
    const blob = new Blob([code], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename ?? "snippet.js";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mockup-code bg-neutral text-neutral-content relative rounded-lg my-2 w-full max-w-full overflow-hidden">
      <div className="absolute right-2 top-2 flex gap-2">
        <button className="btn btn-xs btn-ghost" onClick={copy}>
          <IconCopy />{" "}
          <span className="ml-1 text-xs">{copied ? "Copied" : "Copy"}</span>
        </button>
        <button className="btn btn-xs btn-ghost" onClick={download}>
          <svg width="14" height="14" viewBox="0 0 24 24">
            <path
              d="M12 3v12"
              stroke="currentColor"
              strokeWidth="1.2"
              fill="none"
            />
            <path
              d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
              stroke="currentColor"
              strokeWidth="1.2"
              fill="none"
            />
          </svg>
          <span className="ml-1 text-xs">Download</span>
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm w-full max-w-full">
        <code className="break-words whitespace-pre-wrap">{code}</code>
      </pre>
    </div>
  );
};

const MessageBubble: React.FC<{ message: ChatMessage }> = ({ message }) => {
  const parts = message.text.split(/(```[\s\S]*?```)/g);
  return (
    <div
      className={`chat ${
        message.sender === "user" ? "chat-end" : "chat-start"
      }`}
    >
      <div
        className={`chat-bubble prose max-w-full ${
          message.sender === "user"
            ? "chat-bubble-secondary"
            : "chat-bubble-primary"
        }`}
      >
        {parts.map((part, i) => {
          if (part.startsWith("```") && part.endsWith("```")) {
            const inner = part.slice(3, -3);
            const langMatch = inner.match(/^[a-zA-Z0-9_-]+\n/);
            const code = langMatch ? inner.slice(langMatch[0].length) : inner;
            const filename = langMatch
              ? `snippet.${langMatch[0].trim()}`
              : undefined;
            return <CodeBlock key={i} code={code.trim()} filename={filename} />;
          }
          const urlRegex = /(https?:\/\/[^\s]+)/g;
          const tokens = part.split(urlRegex).map((t, idx) =>
            urlRegex.test(t) ? (
              <a
                key={idx}
                href={t}
                target="_blank"
                rel="noreferrer"
                className="link link-primary break-all"
              >
                {t}
              </a>
            ) : (
              <span key={idx}>{t}</span>
            )
          );
          return <span key={i}>{tokens}</span>;
        })}
      </div>
    </div>
  );
};

/* ---------- Main component ---------- */
const AIAssistant: React.FC = () => {
  const persisted =
    (loadJSON(LS_KEYS.MESSAGES) as ChatMessage[] | null) ?? null;

  const [messages, setMessages] = useState<ChatMessage[]>(
    persisted ?? [
      {
        sender: "ai",
        text: "Welcome! I'm Master JS — your AI JavaScript mentor. Ask about the current problem or any JS topic.",
      },
    ]
  );

  const [input, setInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [includeContext, setIncludeContext] = useState<boolean>(() => {
    const v = loadJSON(LS_KEYS.CONTEXT_OPT_IN);
    return v === null ? true : Boolean(v);
  });
  const [problemContext, setProblemContext] = useState<{
    title?: string;
    statement?: string;
    firstCode?: string;
    url?: string;
  } | null>(null);
  const [errorInfo, setErrorInfo] = useState<string | null>(null);
  const [lastStreamHadContent, setLastStreamHadContent] =
    useState<boolean>(true);

  const chatRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    saveJSON(LS_KEYS.MESSAGES, messages);
    if (chatRef.current)
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages]);

  useEffect(() => {
    saveJSON(LS_KEYS.CONTEXT_OPT_IN, includeContext);
  }, [includeContext]);

  /* page context capture */
  useEffect(() => {
    const ctx: any = { url: window.location.href };
    const titleSelectors = [
      "meta[name='og:title']",
      "meta[name='title']",
      ".problem-title",
      "#problem-title",
      "h1",
      "h2",
    ];
    for (const sel of titleSelectors) {
      const el = document.querySelector(sel) as HTMLElement | null;
      if (el) {
        ctx.title =
          (el.getAttribute && el.getAttribute("content")) ||
          el.textContent?.trim();
        if (ctx.title) break;
      }
    }
    const statementSelectors = [
      ".problem-statement",
      "#problem",
      ".statement",
      ".description",
      ".article-content",
    ];
    for (const sel of statementSelectors) {
      const el = document.querySelector(sel) as HTMLElement | null;
      if (el?.textContent?.trim()) {
        ctx.statement = el.textContent!.trim().slice(0, 4000);
        break;
      }
    }
    const codeEl =
      document.querySelector("pre code.language-js") ||
      document.querySelector("pre code") ||
      document.querySelector("pre") ||
      document.querySelector(".solution-code");
    if (codeEl)
      ctx.firstCode = (codeEl.textContent || "").trim().slice(0, 2000);
    setProblemContext(ctx);
  }, []);

  const composePrompt = (userQ: string) => {
    const base = [
      "You are Master JS — a world-class JavaScript problem-solving assistant specialized for JS Mastery Hub.",
      "When given a JS problem or code produce: 1) a short summary, 2) a step-by-step approach, 3) idiomatic runnable JavaScript enclosed in a fenced ```javascript block```, 4) complexity analysis (time & space), 5) test cases and edge-cases.",
      "Be clear, educational, and include comments inside the code. If user asks for hints, provide progressive hints that don't reveal the full solution at once.",
    ].join(" ");

    let ctx = "";
    if (includeContext && problemContext) {
      const parts: string[] = [];
      if (problemContext.title) parts.push(`Title: ${problemContext.title}`);
      if (problemContext.statement)
        parts.push(`Statement (first 1000 chars): ${problemContext.statement}`);
      if (problemContext.firstCode)
        parts.push(
          `Code sample found on page (first 1000 chars):\n${problemContext.firstCode}`
        );
      if (problemContext.url) parts.push(`URL: ${problemContext.url}`);
      if (parts.length) ctx = `\n\nCONTEXT:\n${parts.join("\n\n")}\n\n`;
    }

    return `${base}${ctx}\nUser asked: ${userQ}\n\nRespond as specified above.`;
  };

  /* streaming with optional AbortSignal argument (safe call) */
  const streamAI = async (fullPrompt: string) => {
    if (abortRef.current) {
      try {
        abortRef.current.abort();
      } catch {}
      abortRef.current = null;
    }
    const controller = new AbortController();
    abortRef.current = controller;
    setIsLoading(true);
    setErrorInfo(null);
    setLastStreamHadContent(false);

    setMessages((prev) => [...prev, { sender: "ai", text: "" }]);

    try {
      let stream: AsyncIterable<{ text?: string }>;
      try {
        // try passing signal if supported by your implementation
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        stream = await (getAIResponseStream as any)(fullPrompt, {
          signal: controller.signal,
        });
      } catch {
        // fallback to calling without options
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        stream = await (getAIResponseStream as any)(fullPrompt);
      }

      let gotChunk = false;
      const firstChunkTimer = window.setTimeout(() => {
        if (!gotChunk)
          setErrorInfo(
            "AI is taking longer than expected. You can Stop and Retry."
          );
      }, 7000);

      for await (const chunk of stream) {
        if (controller.signal.aborted) break;
        const chunkText = chunk?.text ?? "";
        if (chunkText) {
          gotChunk = true;
          setLastStreamHadContent(true);
        }
        setMessages((prev) => {
          const last = prev[prev.length - 1];
          if (!last || last.sender !== "ai") return prev;
          const next = [...prev];
          next[next.length - 1] = { sender: "ai", text: last.text + chunkText };
          return next;
        });
      }

      clearTimeout(firstChunkTimer);
      if (!gotChunk) {
        setErrorInfo(
          "AI returned no content. Try again or check your API/connection."
        );
        setMessages((prev) => {
          const next = [...prev];
          const lastIdx = next.length - 1;
          if (
            next[lastIdx] &&
            next[lastIdx].sender === "ai" &&
            !next[lastIdx].text.trim()
          ) {
            next[lastIdx] = {
              sender: "ai",
              text: "**No response from AI.** Try again or verify API/service configuration.",
            };
            return next;
          }
          return prev;
        });
      }
    } catch (err: any) {
      console.error("AI stream error:", err);
      const msg = err?.message ?? String(err);
      setErrorInfo(msg);
      setMessages((prev) => {
        const next = [...prev];
        const lastIdx = next.length - 1;
        if (next[lastIdx] && next[lastIdx].sender === "ai") {
          next[lastIdx] = {
            sender: "ai",
            text: `**Error generating response:** ${msg}`,
          };
          return next;
        }
        next.push({ sender: "ai", text: `**Error:** ${msg}` });
        return next;
      });
    } finally {
      setIsLoading(false);
      abortRef.current = null;
    }
  };

  const handleSend = async (overrideText?: string) => {
    const raw = (overrideText ?? input).trim();
    if (!raw) return;
    if (isLoading) {
      setErrorInfo(
        "Generation in progress — Stop it to send a new query, or wait."
      );
      return;
    }
    const userMsg: ChatMessage = { sender: "user", text: raw };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    const fullPrompt = composePrompt(raw);
    await streamAI(fullPrompt);
  };

  const stopStreaming = () => {
    try {
      abortRef.current?.abort();
      abortRef.current = null;
    } catch {}
    setIsLoading(false);
  };

  const retryLast = async () => {
    const lastUser = [...messages].reverse().find((m) => m.sender === "user");
    if (!lastUser) {
      setErrorInfo("No user message available to retry.");
      return;
    }
    await handleSend(lastUser.text);
  };

  const presets = [
    {
      id: "explain",
      label: "Explain (step-by-step)",
      suffix:
        "Explain the problem step-by-step and provide a clean JavaScript implementation and complexity analysis.",
    },
    {
      id: "hint",
      label: "Give 2 Hints",
      suffix: "Give two progressive hints that don't reveal the full solution.",
    },
    {
      id: "solution",
      label: "Full Solution",
      suffix:
        "Provide a full idiomatic JS solution with comments, complexity analysis, and test cases.",
    },
    {
      id: "opt",
      label: "Optimize Code",
      suffix: "Optimize provided code and explain trade-offs.",
    },
    {
      id: "tests",
      label: "Generate Tests",
      suffix:
        "Generate unit tests (Jest style) covering normal and edge cases.",
    },
    {
      id: "debug",
      label: "Debug Code",
      suffix:
        "Find bugs in the provided code and return corrected code with explanations and tests.",
    },
  ];

  const sendPreset = (suffix: string) => {
    if (isLoading) {
      setErrorInfo("Stop the running generation to use a preset.");
      return;
    }
    const promptBase =
      includeContext && problemContext?.title
        ? `Using the page problem (${problemContext.title}), ${suffix}`
        : suffix;
    handleSend(promptBase);
  };

  const clearConversation = () => {
    const starter: ChatMessage = {
      sender: "ai",
      text: "Welcome! I'm Master JS — your AI JavaScript mentor. Ask about the current problem or any JS topic.",
    };
    setMessages([starter]);
    saveJSON(LS_KEYS.MESSAGES, [starter]);
    setInput("");
    setErrorInfo(null);
  };

  const exportConversation = () => {
    const md = messages
      .map((m) => `### ${m.sender === "user" ? "User" : "AI"}\n\n${m.text}\n\n`)
      .join("\n---\n");
    const blob = new Blob([md], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `jsmastery_conversation_${new Date().toISOString()}.md`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  /* Focus input on mount */
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  /* Click-to-focus: clicking the assistant container focuses the input */
  const containerClickFocus = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target) return;
    const tag = target.tagName.toLowerCase();
    if (["button", "a", "input", "textarea", "select", "label"].includes(tag))
      return;
    inputRef.current?.focus();
  };

  /* Global key routing to allow typing/backspace when input not focused and prevent page scroll */
  useEffect(() => {
    const isEditableElement = (el: Element | null) => {
      if (!el) return false;
      const tag = el.tagName.toLowerCase();
      if (
        tag === "input" ||
        tag === "textarea" ||
        (el as HTMLElement).isContentEditable
      )
        return true;
      const role = (el as HTMLElement).getAttribute?.("role") || "";
      if (role === "textbox") return true;
      return false;
    };

    const handler = (e: KeyboardEvent) => {
      try {
        if (e.ctrlKey || e.metaKey || e.altKey) return;
        if ((e as any).isComposing) return;

        const active = document.activeElement;
        const editable = isEditableElement(active);

        if (editable) return;

        if (e.key.length === 1) {
          e.preventDefault();
          setInput((prev) => prev + e.key);
          inputRef.current?.focus();
          return;
        }

        if (e.key === "Backspace") {
          e.preventDefault();
          setInput((prev) => prev.slice(0, -1));
          inputRef.current?.focus();
          return;
        }

        if (e.key === "Enter") {
          e.preventDefault();
          if (!isLoading) handleSend();
          else
            setErrorInfo(
              "Stop the running generation to send a new message, or wait."
            );
          return;
        }

        if (e.key === "Escape") {
          e.preventDefault();
          setInput("");
          inputRef.current?.focus();
          return;
        }
      } catch (err) {
        console.error("key routing error", err);
      }
    };

    window.addEventListener("keydown", handler, { passive: false });
    return () => window.removeEventListener("keydown", handler);
  }, [isLoading, input, messages]);

  return (
    // avoid page-level horizontal overflow
    <section
      id="ai-assistant"
      className="py-24 px-4 md:px-8 bg-base-100 w-full overflow-x-hidden"
    >
      <div className="container mx-auto max-w-6xl w-full">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold">AI JavaScript Assistant</h2>
          <p className="mt-2 text-base-content/70">
            World-class JS problem-solving — explanations, solutions, tests,
            optimizations, and more.
          </p>
        </div>

        <div
          className="bg-base-200 p-6 rounded-2xl shadow-xl w-full max-w-full overflow-x-hidden"
          onClick={containerClickFocus}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
            <div className="flex items-center gap-3 min-w-0">
              <span className="badge badge-outline">Master JS</span>
              <div className="min-w-0">
                {problemContext?.title ? (
                  <div className="font-semibold truncate">
                    {problemContext.title}
                  </div>
                ) : (
                  <div className="text-sm text-base-content/60">
                    No page problem detected
                  </div>
                )}
                {problemContext?.url && (
                  <div className="text-xs text-base-content/60 truncate">
                    {problemContext.url}
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={includeContext}
                  onChange={(e) => setIncludeContext(e.target.checked)}
                  className="checkbox checkbox-sm"
                />
                Include page context
              </label>
              <button
                className="btn btn-outline btn-sm"
                onClick={clearConversation}
              >
                Clear
              </button>
              <button
                className="btn btn-ghost btn-sm"
                onClick={exportConversation}
              >
                Export
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {presets.map((p) => (
              <button
                key={p.id}
                className="btn btn-sm btn-outline"
                onClick={() => sendPreset(p.suffix)}
              >
                {p.label}
              </button>
            ))}
          </div>

          <div
            className="h-96 overflow-y-auto mb-4 p-4 bg-base-100 rounded-lg space-y-4 w-full max-w-full overflow-x-hidden"
            ref={chatRef}
          >
            {messages.map((m, i) => (
              <MessageBubble key={i} message={m} />
            ))}

            {!lastStreamHadContent && errorInfo && (
              <div className="alert alert-warning">
                <div>
                  <span>{errorInfo}</span>
                  <div className="mt-2 flex gap-2">
                    <button
                      className="btn btn-xs btn-primary"
                      onClick={retryLast}
                    >
                      Retry
                    </button>
                    <button
                      className="btn btn-xs btn-ghost"
                      onClick={() => setErrorInfo(null)}
                    >
                      Dismiss
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="w-full max-w-full">
            <div className="form-control">
              <div className="input-group">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder={
                    problemContext?.title
                      ? "Ask about this problem or type a JS question..."
                      : "Ask a JavaScript question..."
                  }
                  className="input input-bordered w-full max-w-full"
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    setErrorInfo(null);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      if (!isLoading) handleSend();
                      else
                        setErrorInfo(
                          "Stop the running generation or wait before sending a new question."
                        );
                    } else if (e.key === "Escape") {
                      setInput("");
                    }
                  }}
                />

                <div className="flex items-center gap-2">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleSend()}
                    disabled={isLoading}
                    title={isLoading ? "Generating... stop to send" : "Send"}
                  >
                    {isLoading ? "Generating..." : "Send"}
                  </button>

                  {isLoading ? (
                    <button className="btn btn-ghost" onClick={stopStreaming}>
                      Stop
                    </button>
                  ) : (
                    <button
                      className="btn btn-ghost"
                      onClick={() =>
                        setInput(
                          "Explain the optimal approach and provide a clean JavaScript implementation with tests."
                        )
                      }
                    >
                      Sample
                    </button>
                  )}
                </div>
              </div>
            </div>

            {errorInfo && (
              <div className="mt-2 flex items-center justify-between gap-2">
                <div className="text-sm text-error">{errorInfo}</div>
                <div className="flex gap-2">
                  <button
                    className="btn btn-xs btn-primary"
                    onClick={retryLast}
                  >
                    Retry
                  </button>
                  <button
                    className="btn btn-xs btn-ghost"
                    onClick={() => setErrorInfo(null)}
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            )}

            <div className="mt-3 flex items-center justify-between text-sm text-base-content/60">
              <div>
                Tip: Input stays editable while AI generates. Use Stop to cancel
                and try another query.
              </div>
              <div>
                <a
                  className="link link-primary"
                  href="https://github.com/your-org/js-mastery-hub"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-xs text-center text-base-content/60">
          Built for JS Mastery Hub — tuned for step-by-step explanations,
          high-quality solutions, and tests.
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
