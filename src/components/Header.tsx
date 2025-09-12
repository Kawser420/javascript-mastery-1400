import { Theme } from "@/types";
import React from "react";

interface HeaderProps {
  currentTheme: Theme;
  setTheme: (theme: Theme) => void;
  availableThemes: Theme[];
  onLoginClick: () => void;
  onSignupClick: () => void;
  isAuthenticated: boolean;
  username: string;
  onLogout: () => void;
  onToggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({
  currentTheme,
  setTheme,
  availableThemes,
  onLoginClick,
  onSignupClick,
  isAuthenticated,
  username,
  onLogout,
  onToggleSidebar,
}) => {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="navbar bg-base-100/80 backdrop-blur-sm shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="navbar-start">
        <button
          onClick={onToggleSidebar}
          className="btn btn-square btn-ghost lg:hidden"
          aria-label="Open sidebar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>
        <a href="#" className="btn btn-ghost text-xl normal-case">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-primary"
          >
            <path
              fillRule="evenodd"
              d="M14.25 2.25c-.247 0-.495.02-.739.06-1.123.188-2.16.744-2.986 1.568L3.23 11.172c-.781.782-.781 2.047 0 2.828l6.295 6.295c.782.781 2.047.781 2.828 0l7.294-7.294c.824-.825 1.38-1.864 1.568-2.986.04-.244.06-.492.06-.739s-.02-.495-.06-.739c-.188-1.123-.744-2.16-1.568-2.986L14.25 2.25zM15 6.75a.75.75 0 000 1.5h.75a.75.75 0 000-1.5H15zM12 6A.75.75 0 0112.75 6.75v3.5h3.5a.75.75 0 010 1.5h-3.5v3.5a.75.75 0 01-1.5 0v-3.5H7.25a.75.75 0 010-1.5h3.5V6.75A.75.75 0 0112 6z"
              clipRule="evenodd"
            />
          </svg>
          JS Mastery Hub
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#problems" onClick={(e) => handleScroll(e, "problems")}>
              Problems
            </a>
          </li>
          <li>
            <a
              href="#calculator"
              onClick={(e) => handleScroll(e, "calculator")}
            >
              Calculator
            </a>
          </li>
          <li>
            <a
              href="#ai-assistant"
              onClick={(e) => handleScroll(e, "ai-assistant")}
            >
              AI Assistant
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              />
            </svg>
            <span className="hidden md:inline ml-2">Theme</span>
            <svg
              width="12px"
              height="12px"
              className="h-2 w-2 ml-1 hidden md:inline"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.1562 3.125L6 7.28125L1.84375 3.125"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </label>
          <div
            tabIndex={0}
            className="dropdown-content z-[1] p-2 shadow-2xl bg-base-200 rounded-box w-52 h-96 overflow-y-auto"
          >
            <div className="grid grid-cols-1 gap-4 p-2">
              {availableThemes.map((themeOption) => (
                <button
                  key={themeOption}
                  className={`btn text-left ${
                    currentTheme === themeOption
                      ? "btn-active btn-primary"
                      : "btn-ghost"
                  }`}
                  onClick={() => setTheme(themeOption)}
                >
                  {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
        {isAuthenticated ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-primary btn-outline">
              Welcome, {username}
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button onClick={onLogout}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <button
              className="btn btn-ghost hidden md:inline-flex"
              onClick={onLoginClick}
            >
              Login
            </button>
            <button className="btn btn-primary" onClick={onSignupClick}>
              Sign Up
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
