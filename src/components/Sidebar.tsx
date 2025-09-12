import React from "react";
import type { Category } from "../types";

interface SidebarProps {
  categoryGroups: Record<string, Category[]>;
  totalProblems: number;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  categoryGroups,
  totalProblems,
  isOpen,
  setIsOpen,
}) => {
  const handleCategoryClick = (category: Category | "All") => {
    const problemsSection = document.getElementById("problems");
    if (problemsSection) {
      problemsSection.scrollIntoView({ behavior: "smooth" });
      const event = new CustomEvent("categoryChange", { detail: category });
      window.dispatchEvent(event);
      setIsOpen(false); // Close sidebar on selection for mobile
    }
  };

  return (
    <>
      {/* Backdrop for mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      <aside
        className={`fixed top-0 left-0 h-full bg-base-200 w-64 transition-transform duration-300 ease-in-out z-40 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="p-4 text-xl font-bold border-b border-base-300 flex items-center justify-between">
            <span>Categories</span>
             <button
                onClick={() => setIsOpen(false)}
                className="btn btn-square btn-ghost lg:hidden"
                aria-label="Close sidebar"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="menu p-0">
              <li>
                <a href="#" className="font-bold" onClick={(e) => { e.preventDefault(); handleCategoryClick("All"); }}>
                  All Problems
                  <span className="badge badge-primary">{totalProblems}+</span>
                </a>
              </li>
            </ul>

            {Object.entries(categoryGroups).map(([groupName, categories]) => (
              <div key={groupName} className="mt-4">
                <h2 className="menu-title text-primary px-4">{groupName}</h2>
                <ul className="menu p-0">
                  {categories.map((category) => (
                    <li key={category}>
                      <a href="#" onClick={(e) => { e.preventDefault(); handleCategoryClick(category); }}>
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
