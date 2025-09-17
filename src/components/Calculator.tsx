import React, { useEffect, useMemo, useRef, useState } from "react";
import { evaluate, format } from "mathjs";

/* ---------- Types & LocalStorage keys ---------- */
type HistoryItem = { id: string; expr: string; result: string; ts: number };
const LS = {
  MEMORY: "calc_memory_v1",
  HISTORY: "calc_history_v1",
  ANGLE: "calc_angle_v1",
};

/* ---------- Small helpers ---------- */
const uid = (p = "") => `${p}${Math.random().toString(36).slice(2, 9)}`;
const now = () => Date.now();

const formatResult = (v: unknown) => {
  try {
    return typeof v === "number" || typeof v === "bigint"
      ? format(v as any, { precision: 14 })
      : String(v);
  } catch {
    return String(v);
  }
};

/* ---------- Button component (memo-friendly) ---------- */
const Btn: React.FC<
  React.PropsWithChildren<{
    onClick?: () => void;
    title?: string;
    className?: string;
    span?: number;
    aria?: string;
  }>
> = ({ children, onClick, title, className = "", span = 1, aria }) => (
  <button
    type="button"
    aria-label={aria}
    title={title}
    onClick={onClick}
    className={`btn h-12 text-lg ${className}`}
    style={{ gridColumn: `span ${span}` }}
  >
    {children}
  </button>
);

/* ---------- Main component ---------- */
const Calculator: React.FC = () => {
  const [expr, setExpr] = useState<string>("");
  const [display, setDisplay] = useState<string>("0");
  const [memory, setMemory] = useState<number>(() =>
    Number(localStorage.getItem(LS.MEMORY) ?? 0)
  );
  const [history, setHistory] = useState<HistoryItem[]>(() => {
    try {
      return JSON.parse(localStorage.getItem(LS.HISTORY) || "[]");
    } catch {
      return [];
    }
  });
  const [angleMode, setAngleMode] = useState<"deg" | "rad">(
    () => (localStorage.getItem(LS.ANGLE) as "deg" | "rad") || "rad"
  );

  const displayRef = useRef<HTMLDivElement | null>(null);

  /* Persist memory & history & angle mode */
  useEffect(() => localStorage.setItem(LS.MEMORY, String(memory)), [memory]);
  useEffect(
    () =>
      localStorage.setItem(LS.HISTORY, JSON.stringify(history.slice(0, 200))),
    [history]
  );
  useEffect(() => localStorage.setItem(LS.ANGLE, angleMode), [angleMode]);

  /* Utility: append tokens intelligently (implicit multiplication where appropriate) */
  const append = (s: string) => {
    if (display === "Error") {
      if (/^[0-9.(πe]/.test(s)) {
        setExpr(s);
        setDisplay(s);
        return;
      } else {
        setExpr("");
        setDisplay("0");
      }
    }

    if ((display === "0" || expr === "") && s !== "." && /^[0-9πe(]/.test(s)) {
      setExpr(s);
      setDisplay(s);
      return;
    }

    const last = expr.slice(-1);
    const needMult = /[0-9πe)]/.test(last) && /^[0-9πe(]/.test(s);
    const next = expr + (needMult ? "*" : "") + s;
    setExpr(next);
    setDisplay(next);
  };

  /* Delete/backspace */
  const backspace = () => {
    if (!expr || display === "Error") {
      setExpr("");
      setDisplay("0");
      return;
    }
    const next = expr.slice(0, -1);
    setExpr(next);
    setDisplay(next || "0");
  };

  /* Clear */
  const clearAll = () => {
    setExpr("");
    setDisplay("0");
  };

  /* Prepare expression for mathjs */
  const prepareForEval = (raw: string) => {
    let s = raw;
    s = s.replace(/π/g, "pi");
    s = s.replace(/(\d+(\.\d+)?)%/g, "($1/100)");
    s = s.replace(/×/g, "*").replace(/÷/g, "/").replace(/–/g, "-");

    if (angleMode === "deg") {
      s = s.replace(/\b(sin|cos|tan|asin|acos|atan)\s*\(/g, (m) => {
        return `${m.slice(0, -1)}( (pi/180)*`;
      });
    }

    return s;
  };

  /* Evaluate (mathjs) */
  const evaluateExpr = () => {
    if (!expr) return;
    try {
      const prepared = prepareForEval(expr);
      const raw = evaluate(prepared);
      const resStr = formatResult(raw);

      setDisplay(resStr);
      setExpr(resStr);

      const item: HistoryItem = {
        id: uid("h_"),
        expr,
        result: resStr,
        ts: now(),
      };
      setHistory((h) => [item, ...h].slice(0, 200));
    } catch (err) {
      console.error("Calc error:", err);
      setDisplay("Error");
    }
  };

  /* Memory ops */
  const memoryOp = (op: "MC" | "M+" | "M-" | "MR") => {
    try {
      if (op === "MC") setMemory(0);
      else if (op === "MR") {
        setExpr(String(memory));
        setDisplay(String(memory));
      } else {
        let value = 0;
        const candidate = display === "Error" ? expr : display;
        try {
          const p = prepareForEval(candidate || expr || "0");
          const v = evaluate(p);
          value = typeof v === "number" ? v : Number(String(v));
        } catch {
          value = 0;
        }
        if (!isFinite(value) || Number.isNaN(value)) return;
        if (op === "M+") setMemory((m) => m + value);
        if (op === "M-") setMemory((m) => m - value);
      }
    } catch {
      // swallow memory errors
    }
  };

  /* History actions */
  const useHistory = (h: HistoryItem) => {
    setExpr(h.expr);
    setDisplay(h.result);
  };
  const clearHistory = () => setHistory([]);

  /* Copy result to clipboard */
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(display);
      console.log("Copied result:", display);
    } catch {
      // ignore
    }
  };

  /* Keyboard support (local only; won't cause page scroll) */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // allow copy with ctrl/cmd + c
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "c") return;
      if (/^[0-9]$/.test(e.key)) {
        e.preventDefault();
        append(e.key);
        return;
      }
      if (e.key === ".") {
        e.preventDefault();
        append(".");
        return;
      }
      if (["+", "-", "*", "/", "^", "%"].includes(e.key)) {
        e.preventDefault();
        append(e.key);
        return;
      }
      if (e.key === "Enter" || e.key === "=") {
        e.preventDefault();
        evaluateExpr();
        return;
      }
      if (e.key === "Backspace") {
        e.preventDefault();
        backspace();
        return;
      }
      if (e.key === "Escape") {
        e.preventDefault();
        clearAll();
        return;
      }
      if (e.key === "(" || e.key === ")") {
        e.preventDefault();
        append(e.key);
        return;
      }
      if (e.key.toLowerCase() === "p") {
        e.preventDefault();
        append("π");
        return;
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [expr, display, angleMode, memory]);

  /* scroll display right when updated */
  useEffect(() => {
    displayRef.current?.scrollTo({ left: 99999, behavior: "smooth" });
  }, [display]);

  /* Insert function helper */
  const insertFn = (fn: string) => append(fn + "(");

  const memoryLabel = useMemo(
    () => (memory ? `M=${formatResult(memory)}` : "M"),
    [memory]
  );

  /* ---------- Render ---------- */
  return (
    <section
      id="calculator"
      className="py-12 px-4 md:px-8 bg-base-100 w-full overflow-x-hidden"
    >
      <div className="container mx-auto max-w-6xl w-full">
        {/* ensure flex children can shrink to avoid overflow */}
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-full">
          {/* MAIN CALCULATOR */}
          <div className="flex-1 min-w-0 w-full max-w-full">
            <div className="text-center mb-6">
              <h1 className="text-4xl font-extrabold">
                Pro Scientific Calculator
              </h1>
              <p className="text-sm text-base-content/70 mt-2">
                High-precision calculations powered by mathjs — trig, logs,
                factorials, percentages, constants and more.
              </p>
            </div>

            <div className="card bg-base-200 shadow-lg p-4 min-w-0 w-full max-w-full">
              {/* top controls */}
              <div className="flex items-center justify-between mb-3 gap-3">
                <div className="flex items-center gap-2">
                  <div className="badge badge-outline">{memoryLabel}</div>
                  <div className="badge badge-outline">
                    {angleMode.toUpperCase()}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    className="btn btn-sm btn-ghost"
                    onClick={() =>
                      setAngleMode((a) => (a === "rad" ? "deg" : "rad"))
                    }
                    title="Toggle angle mode (deg/rad)"
                    aria-label="Toggle angle mode"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      className="inline-block"
                    >
                      <path
                        d="M12 2v20M2 12h20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="ml-2 text-sm">Angle</span>
                  </button>

                  <button
                    className="btn btn-sm btn-ghost"
                    onClick={() => copyToClipboard()}
                    title="Copy result"
                    aria-label="Copy result"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      className="inline-block"
                    >
                      <path
                        d="M16 2H6a2 2 0 0 0-2 2v12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <rect
                        x="8"
                        y="6"
                        width="12"
                        height="12"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <span className="ml-2 text-sm">Copy</span>
                  </button>
                </div>
              </div>

              {/* display - allow internal horizontal scroll but not page overflow */}
              <div
                ref={displayRef}
                className="calculator-display bg-base-300 rounded-md p-4 mb-4 text-right text-4xl font-mono overflow-x-auto whitespace-nowrap w-full max-w-full"
                role="region"
                aria-live="polite"
              >
                {display}
              </div>

              {/* keypad grid */}
              <div className="grid grid-cols-5 gap-2 w-full max-w-full">
                <Btn onClick={() => memoryOp("MC")} className="btn-accent">
                  MC
                </Btn>
                <Btn onClick={() => memoryOp("M+")} className="btn-accent">
                  M+
                </Btn>
                <Btn onClick={() => memoryOp("M-")} className="btn-accent">
                  M-
                </Btn>
                <Btn onClick={() => memoryOp("MR")} className="btn-accent">
                  MR
                </Btn>
                <Btn onClick={backspace} className="btn-ghost" aria="backspace">
                  ⌫
                </Btn>

                <Btn onClick={() => insertFn("sin")} className="btn-outline">
                  sin
                </Btn>
                <Btn onClick={() => insertFn("cos")} className="btn-outline">
                  cos
                </Btn>
                <Btn onClick={() => insertFn("tan")} className="btn-outline">
                  tan
                </Btn>
                <Btn onClick={() => insertFn("log10")} className="btn-outline">
                  log
                </Btn>
                <Btn onClick={() => insertFn("log")} className="btn-outline">
                  ln
                </Btn>

                <Btn onClick={() => append("^")} className="btn-outline">
                  xʸ
                </Btn>
                <Btn onClick={() => append("!")} className="btn-outline">
                  x!
                </Btn>
                <Btn onClick={() => insertFn("sqrt")} className="btn-outline">
                  √
                </Btn>
                <Btn onClick={() => append("1/(")} className="btn-outline">
                  1/x
                </Btn>
                <Btn onClick={clearAll} className="btn-secondary">
                  AC
                </Btn>

                <Btn onClick={() => append("(")} className="btn-ghost">
                  (
                </Btn>
                <Btn onClick={() => append(")")} className="btn-ghost">
                  )
                </Btn>
                <Btn onClick={() => append("π")} className="btn-ghost">
                  π
                </Btn>
                <Btn onClick={() => append("e")} className="btn-ghost">
                  e
                </Btn>
                <Btn onClick={() => append("%")} className="btn-ghost">
                  %
                </Btn>

                <Btn onClick={() => append("7")}>7</Btn>
                <Btn onClick={() => append("8")}>8</Btn>
                <Btn onClick={() => append("9")}>9</Btn>
                <Btn onClick={() => append("/")} className="btn-primary">
                  ÷
                </Btn>

                <Btn onClick={() => append("4")}>4</Btn>
                <Btn onClick={() => append("5")}>5</Btn>
                <Btn onClick={() => append("6")}>6</Btn>
                <Btn onClick={() => append("*")} className="btn-primary">
                  ×
                </Btn>

                <Btn onClick={() => append("1")}>1</Btn>
                <Btn onClick={() => append("2")}>2</Btn>
                <Btn onClick={() => append("3")}>3</Btn>
                <Btn onClick={() => append("-")} className="btn-primary">
                  −
                </Btn>

                <Btn onClick={() => append("0")} span={2}>
                  0
                </Btn>
                <Btn onClick={() => append(".")}>.</Btn>
                <Btn onClick={() => append("+")} className="btn-primary">
                  +
                </Btn>

                <Btn
                  onClick={() => evaluateExpr()}
                  className="btn-primary"
                  span={5}
                  aria="equals"
                >
                  =
                </Btn>
              </div>
            </div>
          </div>

          {/* RIGHT: history & extra tools */}
          <aside className="w-full md:w-96 flex-shrink-0 min-w-0 max-w-full">
            <div className="card bg-base-200 shadow p-3 h-full flex flex-col min-w-0 w-full max-w-full">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24">
                    <path d="M3 3h18v4H3zM3 10h18v11H3z" fill="currentColor" />
                  </svg>
                  History
                </h3>
                <div className="flex gap-2">
                  <button
                    className="btn btn-xs btn-ghost"
                    onClick={() => {
                      setExpr("");
                      setDisplay("0");
                    }}
                  >
                    Clear
                  </button>
                  <button
                    className="btn btn-xs btn-ghost"
                    onClick={() => clearHistory()}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24">
                      <path
                        d="M3 6h18"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="overflow-auto flex-1 min-w-0 w-full max-w-full">
                {history.length === 0 ? (
                  <p className="text-sm text-base-content/60">
                    No history yet — try a calculation.
                  </p>
                ) : (
                  <ul className="space-y-2 w-full max-w-full">
                    {history.map((h) => (
                      <li
                        key={h.id}
                        className="p-2 rounded-md hover:bg-base-300 cursor-pointer w-full max-w-full"
                        onClick={() => useHistory(h)}
                        title="Click to reuse"
                      >
                        <div className="flex justify-between w-full max-w-full">
                          <div
                            className="text-sm truncate"
                            style={{ maxWidth: "60%" }}
                          >
                            {h.expr}
                          </div>
                          <div className="text-sm font-medium truncate">
                            {h.result}
                          </div>
                        </div>
                        <div className="text-xs text-base-content/60">
                          {new Date(h.ts).toLocaleString()}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-3 border-t pt-3 flex flex-col gap-2 w-full max-w-full">
                <div className="flex items-center justify-between w-full max-w-full">
                  <div>
                    <div className="text-xs text-base-content/60">Memory</div>
                    <div className="font-medium truncate">
                      {formatResult(memory)}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      className="btn btn-xs"
                      onClick={() => memoryOp("MC")}
                    >
                      MC
                    </button>
                    <button
                      className="btn btn-xs"
                      onClick={() => memoryOp("M+")}
                    >
                      M+
                    </button>
                    <button
                      className="btn btn-xs"
                      onClick={() => memoryOp("M-")}
                    >
                      M-
                    </button>
                    <button
                      className="btn btn-xs"
                      onClick={() => memoryOp("MR")}
                    >
                      MR
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2 w-full max-w-full">
                  <div className="text-xs text-base-content/60">Utilities</div>
                  <div className="flex gap-2">
                    <button
                      className="btn btn-xs btn-ghost"
                      onClick={() => copyToClipboard()}
                    >
                      Copy
                    </button>
                    <button
                      className="btn btn-xs btn-ghost"
                      onClick={() => {
                        setExpr("");
                        setDisplay("0");
                        setHistory([]);
                        setMemory(0);
                        localStorage.removeItem(LS.HISTORY);
                        localStorage.removeItem(LS.MEMORY);
                      }}
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-3 text-xs text-center text-base-content/60 w-full max-w-full">
                Pro Scientific Calculator — mathjs powered • Degrees:{" "}
                <strong>{angleMode}</strong>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
