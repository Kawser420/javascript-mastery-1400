import React, { useState } from "react";
import { allSolvers } from "../problems/index";
import { Problem } from "@/types";

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

  const solveProblem = (
    problemId: string,
    currentInputs: Record<string, string>
  ) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const solver = allSolvers[problemId];
        if (typeof solver === "function") {
          try {
            const result = solver(currentInputs);
            resolve(result);
          } catch (error) {
            reject(
              error instanceof Error
                ? error
                : new Error("An unknown error occurred during solving.")
            );
          }
        } else {
          reject(new Error(`Solver not found for problem ID: ${problemId}`));
        }
      }, 250);
    });
  };

  const handleSubmit = async () => {
    setIsSolving(true);
    setResult(null);
    try {
      const finalInputs = problem.inputs.reduce((acc, input) => {
        acc[input.id] =
          inputs[input.id] || input.defaultValue?.toString() || "";
        return acc;
      }, {} as Record<string, any>);

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
    <div className="card bg-base-100 shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col">
      <div className="card-body flex-grow">
        <h3 className="card-title">{problem.title}</h3>
        <p className="text-base-content/70 text-sm mb-4">
          {problem.description}
        </p>

        <div className="space-y-4">
          {problem.inputs.map((input) => (
            <div className="form-control" key={input.id}>
              <label className="label">
                <span className="label-text">{input.label}</span>
              </label>
              {input.type === "textarea" ? (
                <textarea
                  id={input.id}
                  placeholder={input.placeholder}
                  className="textarea textarea-bordered h-24 font-mono"
                  value={inputs[input.id]}
                  onChange={(e) => handleInputChange(input.id, e.target.value)}
                />
              ) : (
                <input
                  type={input.type}
                  id={input.id}
                  placeholder={input.placeholder}
                  className="input input-bordered font-mono"
                  value={inputs[input.id]}
                  onChange={(e) => handleInputChange(input.id, e.target.value)}
                  step={input.step}
                  min={input.min}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="card-actions justify-end p-4 pt-0">
        {result && (
          <div
            className={`w-full result-alert mt-4 mb-2 p-3 rounded-lg text-sm ${
              result.isSuccess
                ? "bg-success/20 text-success-content"
                : "bg-error/20 text-error-content"
            }`}
          >
            <span className="font-bold">
              {result.isSuccess ? "Result:" : "Error:"}
            </span>
            <span className="whitespace-pre-wrap break-words ml-2 font-mono">
              {result.message}
            </span>
          </div>
        )}
        <div className="flex w-full justify-end items-center gap-2">
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
      </div>
    </div>
  );
};

export default ProblemCard;
