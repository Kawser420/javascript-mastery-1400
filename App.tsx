import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Problems from "./components/Problems";
import Calculator from "./components/Calculator";
import AIAssistant from "./components/AIAssistant";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import SignupModal from "./components/SignupModal";
import ExplanationModal from "./components/ExplanationModal";
import { Problem } from "./types";

export const availableThemes = [
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
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "synthwave"
  );
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);
  const [isExplanationModalOpen, setExplanationModalOpen] = useState(false);
  const [explanationContent, setExplanationContent] = useState({
    problem: null as Problem | null,
    solution: "",
    explanation: "",
  });
  const [isExplanationLoading, setIsExplanationLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");

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

  // FIX: Removed unused and buggy async call to `solveProblem`.
  // The ExplanationModal component is self-contained and fetches its own explanation.
  const openExplanationModal = (problem: Problem) => {
    setExplanationContent({ problem, solution: "", explanation: "" });
    setIsExplanationLoading(true);
    setExplanationModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-base-100">
      <Header
        currentTheme={theme}
        setTheme={setTheme}
        onLoginClick={openLoginModal}
        onSignupClick={openSignupModal}
        isAuthenticated={isAuthenticated}
        username={username}
        onLogout={handleLogout}
      />
      <main>
        <Hero />
        <Problems onExplain={openExplanationModal} />
        <Calculator />
        <AIAssistant />
      </main>
      <Footer />
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
        problem={explanationContent.problem}
        isLoading={isExplanationLoading}
        setIsLoading={setIsExplanationLoading}
      />
    </div>
  );
};

export default App;
