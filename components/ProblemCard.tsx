import React, { useState } from "react";
import type { Problem } from "../types";
import { solveProblem } from "../utils/problemSolver";

interface ProblemCardProps {
  problem: Problem;
  onExplain: (problem: Problem) => void;
}

const ProblemCard: React.FC<ProblemCardProps> = ({ problem, onExplain }) => {
  const initialInputs = problem.inputs.reduce((acc, input) => {
    acc[input.id] = input.defaultValue?.toString() ?? "";
    return acc;
  }, {} as Record<string, string>);

  const [inputs, setInputs] = useState<Record<string, string>>(initialInputs);
  const [result, setResult] = useState<{
    message: string;
    isSuccess: boolean;
  } | null>(null);
  const [isSolving, setIsSolving] = useState(false);

  const handleInputChange = (id: string, value: string) => {
    setInputs((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async () => {
    setIsSolving(true);
    setResult(null);
    try {
      // Create a dummy object with default values for all inputs to allow solving without user interaction
      const dummyInputs = problem.inputs.reduce((acc, input) => {
        acc[input.id] =
          input.defaultValue?.toString() ??
          (input.type === "number" ? "0" : "");
        if (input.placeholder?.includes(",")) acc[input.id] = input.placeholder; // A heuristic for array inputs
        return acc;
      }, {} as Record<string, string>);

      const finalInputs = problem.inputs.every(
        (i) => inputs[i.id]?.trim() !== ""
      )
        ? inputs
        : dummyInputs;

      const solution = await solveProblem(problem.id, finalInputs);
      setResult({ message: String(solution), isSuccess: true });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred.";
      setResult({ message: `Error: ${errorMessage}`, isSuccess: false });
    } finally {
      setIsSolving(false);
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="card-body">
        <h3 className="card-title">{problem.title}</h3>
        {problem.inputs.map((input) => (
          <div className="form-control" key={input.id}>
            <label className="label">
              <span className="label-text">{input.label}</span>
            </label>
            {input.type === "textarea" ? (
              <textarea
                id={input.id}
                placeholder={input.placeholder}
                className="textarea textarea-bordered h-24"
                value={inputs[input.id]}
                onChange={(e) => handleInputChange(input.id, e.target.value)}
              />
            ) : (
              <input
                type={input.type}
                id={input.id}
                placeholder={input.placeholder}
                className="input input-bordered"
                value={inputs[input.id]}
                onChange={(e) => handleInputChange(input.id, e.target.value)}
                step={input.step}
                min={input.min}
              />
            )}
          </div>
        ))}
        <div className="card-actions justify-end mt-4">
          <button
            className="btn btn-outline btn-secondary"
            onClick={() => onExplain(problem)}
            disabled={isSolving}
          >
            Explain with AI
          </button>
          <button
            className="btn btn-primary"
            onClick={handleSubmit}
            disabled={isSolving}
          >
            {isSolving ? (
              <span className="loading loading-spinner"></span>
            ) : (
              problem.buttonText
            )}
          </button>
        </div>
        {result && (
          <div
            className={`result-alert mt-4 alert ${
              result.isSuccess ? "alert-success" : "alert-error"
            }`}
          >
            <span className="whitespace-pre-wrap break-words">
              {result.message}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProblemCard;
