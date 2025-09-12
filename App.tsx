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
      "Functions & Scope",
      "Arrays & Strings",
      "Objects & Prototypes",
    ],
    "Core Concepts": [
      "ES6+ Features",
      "Closures & Lexical Environment",
      "Recursion",
      "Classes & OOP",
    ],
    "Asynchronous JS": [
      "Asynchronous JS",
      "Web APIs & DOM",
      "Event Handling & Propagation",
    ],
    "Advanced Topics": [
      "Functional Programming",
      "Data Structures",
      "Algorithms",
      "Advanced JS Features",
    ],
    "Ecosystem & Practices": [
      "Error Handling & Debugging",
      "Modules & Imports/Exports",
      "Testing & Performance",
      "Node.js & Backend JS",
      "Mini Projects",
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
