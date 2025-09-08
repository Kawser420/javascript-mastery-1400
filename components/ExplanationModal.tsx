import React, { useEffect, useRef, useState } from 'react';
import { getAIExplanation } from '../services/geminiService';
import { Problem } from '../types';
import { solvers } from '../utils/problemSolver';

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

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
      if (problem) {
        setExplanation('');
        setIsLoading(true);

        const solverFunction = solvers[problem.id];
        if (!solverFunction) {
            const errorMsg = `<div class="text-error">Could not find solver function for this problem.</div>`;
            setExplanation(errorMsg);
            setIsLoading(false);
            return;
        }
        
        const solutionCode = solverFunction.toString();
        
        getAIExplanation(problem, solutionCode)
          .then(res => {
            // Simple markdown-to-HTML conversion
            let html = res.replace(/### (.*)/g, '<h3 class="text-xl font-bold mt-4 mb-2">$1</h3>');
            html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="link link-primary">$1</a>');
            html = html.replace(/`([^`]+)`/g, '<code class="bg-base-300 px-1 rounded-md text-sm">$1</code>');
            setExplanation(html);
          })
          .catch(err => setExplanation(`<div class="text-error">Failed to load explanation. ${err.message}</div>`))
          .finally(() => setIsLoading(false));
      }
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen, problem, setIsLoading]);

  return (
    <dialog ref={dialogRef} className="modal" onClose={onClose}>
      <div className="modal-box w-11/12 max-w-2xl">
        <button onClick={onClose} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        {problem && <h3 className="font-bold text-2xl">{problem.title}</h3>}
        <div className="py-4">
          {isLoading ? (
            <div className="flex justify-center items-center h-48">
              <span className="loading loading-lg loading-spinner text-primary"></span>
            </div>
          ) : (
            <div className="prose max-w-none whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: explanation }} />
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
