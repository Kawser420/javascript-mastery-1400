import React, { useState, useMemo } from "react";
import { problems } from "../data/problems";
import ProblemCard from "./ProblemCard";
import type { Problem, Category } from "../types";

const problemCategories: Category[] = [
  "Beginner",
  "Intermediate",
  "Synchronous",
  "ES6+",
  "Asynchronous",
  "Web APIs & DOM",
  "Algorithms",
  "Data Structures",
];

const Problems: React.FC<{ onExplain: (problem: Problem) => void }> = ({
  onExplain,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">(
    "All"
  );
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProblems = useMemo(() => {
    let filtered = problems;

    if (selectedCategory !== "All") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (searchTerm.trim() !== "") {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [selectedCategory, searchTerm]);

  const availableCategories = useMemo(() => {
    const categoriesInProblems = new Set(problems.map((p) => p.category));
    return problemCategories.filter((c) => categoriesInProblems.has(c));
  }, []);

  return (
    <section
      id="problems"
      className="py-24 px-4 md:px-8 bg-base-200 scroll-mt-20"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold">
            Interactive JavaScript Problems
          </h2>
          <p className="mt-4 text-lg text-base-content/70">
            Test your knowledge with our library of {problems.length}+
            interactive problems.
          </p>
        </div>

        {/* Search Box */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search problems by title..."
                className="input input-bordered w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-square btn-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex justify-center mb-12">
          <div className="tabs tabs-boxed bg-base-100/50 p-2 flex-nowrap overflow-x-auto">
            <button
              className={`tab tab-lg ${
                selectedCategory === "All" ? "tab-active" : ""
              }`}
              onClick={() => setSelectedCategory("All")}
            >
              All Problems
            </button>
            {availableCategories.map((category) => (
              <button
                key={category}
                className={`tab tab-lg whitespace-nowrap ${
                  selectedCategory === category ? "tab-active" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {filteredProblems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProblems.map((problem) => (
              <ProblemCard
                key={problem.id}
                problem={problem}
                onExplain={onExplain}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-base-content/60">
              No problems found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Problems;
