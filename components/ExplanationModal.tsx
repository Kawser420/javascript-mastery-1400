
import React, { useEffect, useRef, useState } from 'react';
// FIX: Removed import from non-module script. `getAIExplanation` is globally available.
import { Problem } from '../types';
import { allSolvers, staticExplanations } from '../problems';

interface ExplanationModalProps {
  isOpen: boolean;
  onClose: () => void;
  problem: Problem | null;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

const ExplanationModal: React.FC<ExplanationModalProps> = ({ isOpen, onClose, problem, isLoading, setIsLoading }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [explanation, setExplanation] = useState('');

  const renderMarkdown = (markdown: string) => {
    // Split by code blocks, keeping the code blocks in the result array
    const parts = markdown.split(/(```javascript\n[\s\S]*?```)/g);

    const htmlParts = parts.map(part => {
        if (part.startsWith('```javascript')) {
            // Handle code blocks
            const code = part.replace(/```javascript\n|```/g, '').trim();
            // Escape HTML entities in the code to be safe
            const escapedCode = code.replace(/</g, '&lt;').replace(/>/g, '&gt;');
            return `<div class="mockup-code my-2 text-sm"><pre><code>${escapedCode}</code></pre></div>`;
        } else {
            // Handle regular text
            let html = part.replace(/### (.*)/g, '<h3 class="text-xl font-bold mt-4 mb-2">$1</h3>');
            html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="link link-primary">$1</a>');
            html = html.replace(/`([^`]+)`/g, '<code class="bg-base-300 px-1 rounded-md text-sm">$1</code>');
            html = html.replace(/\n/g, '<br />'); // Only replace newlines in non-code parts
            return html;
        }
    });

    return htmlParts.join('');
  };

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
      if (problem) {
        setExplanation('');
        setIsLoading(true);

        const solverFunction = allSolvers[problem.id];
        if (!solverFunction) {
            setExplanation('<div class="text-error">Could not find solver function for this problem.</div>');
            setIsLoading(false);
            return;
        }
        
        const solutionCode = solverFunction.toString();
        
        getAIExplanation(problem, solutionCode)
          .then(res => {
            setExplanation(renderMarkdown(res));
          })
          .catch(err => {
            console.warn("Live AI explanation failed, falling back to static version. Error:", err.message);
            const fallbackExplanation = staticExplanations[problem.id];
            
            if (fallbackExplanation) {
                const fallbackHtml = renderMarkdown(fallbackExplanation);
                const finalHtml = `
                    ${fallbackHtml}
                    <div class="alert alert-info text-sm mt-6">
                        <div>
                            <span><strong>Note:</strong> A live AI explanation could not be generated (this is expected on local machines). Displaying a high-quality, pre-written explanation instead.</span>
                        </div>
                    </div>
                `;
                setExplanation(finalHtml);
            } else {
                 const errorHtml = `
                    <div class="alert alert-error">
                        <h3 class="font-bold">Explanation Unavailable</h3>
                        <p>A live AI explanation could not be generated, and a pre-written fallback could not be found for this problem.</p>
                        <p class="text-sm mt-2">Error details: ${err.message}</p>
                    </div>`;
                setExplanation(errorHtml);
            }
          })
          .finally(() => setIsLoading(false));
      }
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen, problem, setIsLoading]);

  return (
    <dialog ref={dialogRef} className="modal" onClose={onClose}>
      <div className="modal-box w-11/12 max-w-3xl">
        <button onClick={onClose} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        {problem && <h3 className="font-bold text-2xl">{problem.title}</h3>}
        <div className="py-4">
          {isLoading ? (
            <div className="flex flex-col justify-center items-center h-64">
              <span className="loading loading-lg loading-spinner text-primary"></span>
              <p className="mt-4 text-base-content/70">Attempting to generate live AI explanation...</p>
            </div>
          ) : (
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: explanation }} />
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