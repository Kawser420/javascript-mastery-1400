import React, { useState, useEffect } from "react";
import type { Problem, Category, Theme } from "./types";
import Sidebar from "./src/components/Sidebar";
import Header from "./src/components/Header";
import Hero from "./src/components/Hero";
import Problems from "./src/components/Problems";
import Calculator from "./src/components/Calculator";
import AIAssistant from "./src/components/AIAssistant";
import Footer from "./src/components/Footer";
import LoginModal from "./src/components/LoginModal";
import SignupModal from "./src/components/SignupModal";
import ExplanationModal from "./src/components/ExplanationModal";
import { allProblems } from "./src/problems";

export const availableThemes: Theme[] = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
];

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem("theme") as Theme) || "synthwave"
  );
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);
  const [isExplanationModalOpen, setExplanationModalOpen] = useState(false);
  const [selectedProblem, setSelectedProblem] = useState<Problem | null>(null);
  const [isExplanationLoading, setIsExplanationLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setIsAuthenticated(true);
      setUsername(storedUser);
    }
  }, []);

  const handleLogin = (email: string) => {
    const name = email.split("@")[0];
    setIsAuthenticated(true);
    setUsername(name);
    localStorage.setItem("user", name);
    setLoginModalOpen(false);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername("");
    localStorage.removeItem("user");
  };

  const openLoginModal = () => {
    setSignupModalOpen(false);
    setLoginModalOpen(true);
  };

  const openSignupModal = () => {
    setLoginModalOpen(false);
    setSignupModalOpen(true);
  };

  const openExplanationModal = (problem: Problem) => {
    setSelectedProblem(problem);
    setIsExplanationLoading(true);
    setExplanationModalOpen(true);
  };

  const categoryGroups: Record<string, Category[]> = {
    Fundamentals: [
      "Beginner Basics",
      "Variables and Constants Deep Dive",
      "Operators and Expressions",
      "Control Flow and Loops",
      "Functions and Scope",
      "Arrays and Strings",
      "Objects and Prototypes",
      "Math and Number Challenges",
      "Date and Time Handling",
      "Type and Value Mastery",
      "Error Handling and Debugging",
      "Input/Output and Console Utilities",
    ],
    "Core Concepts": [
      "ES6+ Features",
      "Closures and Lexical Environment",
      "Recursion Techniques",
      "Classes and OOP",
      "Execution Context and Call Stack",
      "Event Loop and Concurrency Model",
      "Iterators and Generators",
      "Memory Management and Performance Patterns",
      "Prototypes and Inheritance Advanced",
      "Modules and Imports/Exports",
      "Advanced JS Features",
      "Design Patterns in JS",
    ],
    "Algorithms and Data Structures": [
      "Sorting and Searching Algorithms",
      "Arrays and Matrix Algorithms",
      "String Algorithms",
      "Linked List Challenges",
      "Stack and Queue Problems",
      "Hash Map and Set Problems",
      "Tree Algorithms",
      "Graph Algorithms",
      "Dynamic Programming",
      "Greedy and Backtracking",
      "Geometry and Computational Math",
      "Bitwise and Low-Level Tricks",
    ],
    "Browser and Front-End APIs": [
      "Web APIs and DOM Manipulation",
      "Event Handling and Propagation",
      "Forms and Validation",
      "Canvas and WebGL Drawing",
      "Web Components and Shadow DOM",
      "Drag and Drop and File API",
      "Web Workers and Multithreading",
      "Service Workers and PWA Offline Patterns",
    ],
    "Asynchronous and Networking": [
      "Asynchronous JS",
      "Fetch and AJAX / REST API Handling",
      "Real-Time and Streaming",
      "Request Caching and Performance",
      "Authentication and Authorization Flows",
      "Error Recovery and Retry Strategies",
    ],
    "Node.js and Ecosystem": [
      "Node.js Core",
      "File System and Streams Deep Dive",
      "HTTP and Express.js",
      "Databases and ORMs",
      "Build Tools and Bundlers",
      "Deployment and DevOps Basics",
    ],
    "Testing, Security and Projects": [
      "Testing and Test-Driven Development",
      "Security and Best Practices",
      "Performance Optimization and Profiling",
      "Mini Projects",
      "Real-World Applications",
    ],
  };

  return (
    <div className="flex min-h-screen bg-base-100">
      <Sidebar
        categoryGroups={categoryGroups}
        totalProblems={allProblems.length}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
      <div className="flex-1 flex flex-col transition-all duration-300 lg:ml-64">
        <Header
          currentTheme={theme}
          setTheme={setTheme}
          availableThemes={availableThemes}
          onLoginClick={openLoginModal}
          onSignupClick={openSignupModal}
          isAuthenticated={isAuthenticated}
          username={username}
          onLogout={handleLogout}
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        <main className="flex-1">
          <Hero />
          <Problems onExplain={openExplanationModal} />
          <Calculator />
          <AIAssistant />
        </main>
        <Footer />
      </div>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onSwitchToSignup={openSignupModal}
        onLogin={handleLogin}
      />
      <SignupModal
        isOpen={isSignupModalOpen}
        onClose={() => setSignupModalOpen(false)}
        onSwitchToLogin={openLoginModal}
      />
      <ExplanationModal
        isOpen={isExplanationModalOpen}
        onClose={() => setExplanationModalOpen(false)}
        problem={selectedProblem}
        isLoading={isExplanationLoading}
        setIsLoading={setIsExplanationLoading}
      />
    </div>
  );
};

export default App;
