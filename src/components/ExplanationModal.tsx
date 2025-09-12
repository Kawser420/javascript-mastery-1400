import React, { useEffect, useRef, useState } from "react";
import { getAIExplanation } from "../services/geminiService";
import { allSolvers, staticExplanations } from "../problems/index";
import type { Problem } from "../types";

interface ExplanationModalProps {
  isOpen: boolean;
  onClose: () => void;
  problem: Problem | null;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

// Define the component outside of the main component to avoid re-creation on re-renders
const CodeBlock: React.FC<{ code: string }> = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  return (
    <div className="mockup-code my-4 text-sm relative bg-neutral text-neutral-content">
      <button onClick={handleCopy} className="btn btn-ghost btn-sm absolute top-2 right-2">
        {copied ? "Copied!" : "Copy"}
      </button>
      <pre><code>{code}</code></pre>
    </div>
  );
};

const ExplanationModal: React.FC<ExplanationModalProps> = ({
  isOpen,
  onClose,
  problem,
  isLoading,
  setIsLoading,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [explanationParts, setExplanationParts] = useState<React.ReactNode[]>([]);

  const parseAndSetExplanation = (markdown: string) => {
    const parts = markdown.split(/(```javascript\n[\s\S]*?```|```[\s\S]*?```)/g);
    const nodes = parts.map((part, index) => {
      if (part.startsWith("```")) {
        const code = part.replace(/```javascript\n|```/g, "").trim();
        return <CodeBlock key={index} code={code} />;
      } else {
        const html = part
          .replace(/### (.*)/g, '<h3 class="text-xl font-bold mt-4 mb-2">$1</h3>')
          .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
          .replace(/`([^`]+)`/g, '<code class="bg-base-300 px-1 py-0.5 rounded-md text-sm">$1</code>')
          .replace(/\n/g, '<br />');
        return <div key={index} dangerouslySetInnerHTML={{ __html: html }} />;
      }
    });
    setExplanationParts(nodes);
  };
  
  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
      if (problem) {
        setExplanationParts([]);
        setIsLoading(true);

        const solverFunction = allSolvers[problem.id];
        if (!solverFunction) {
          parseAndSetExplanation('<div class="text-error">Could not find solver function for this problem.</div>');
          setIsLoading(false);
          return;
        }

        const solutionCode = solverFunction.toString();

        getAIExplanation(problem, solutionCode)
          .then(parseAndSetExplanation)
          .catch((err) => {
            console.warn("Live AI explanation failed, falling back to static version. Error:", err.message);
            const fallbackExplanation = staticExplanations[problem.id];
            if (fallbackExplanation) {
              const staticContent = `
                <div class="alert alert-info text-sm mb-4">
                    <span><strong>Note:</strong> A live AI explanation could not be generated. Displaying a high-quality, pre-written explanation instead.</span>
                </div>
                ${fallbackExplanation}
              `;
              parseAndSetExplanation(staticContent);
            } else {
              parseAndSetExplanation(`<div class="alert alert-error">Error: AI explanation failed and no fallback is available.</div>`);
            }
          })
          .finally(() => setIsLoading(false));
      }
    } else {
      dialogRef.current?.close();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, problem]);

  return (
    <dialog ref={dialogRef} className="modal" onClose={onClose}>
      <div className="modal-box w-11/12 max-w-4xl">
        <button onClick={onClose} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        {problem && <h3 className="font-bold text-2xl">{problem.title}</h3>}
        <div className="py-4">
          {isLoading ? (
            <div className="flex flex-col justify-center items-center h-64">
              <span className="loading loading-lg loading-spinner text-primary"></span>
              <p className="mt-4 text-base-content/70">Generating live AI explanation...</p>
            </div>
          ) : (
            <div className="prose max-w-none">
              {explanationParts}
            </div>
          )}
        </div>
        <div className="modal-action">
          <button className="btn" onClick={onClose}>Close</button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default ExplanationModal;
