import React from 'react';
import { availableThemes } from '../App';
import { Category } from '../types';

interface HeaderProps {
  currentTheme: string;
  setTheme: (theme: string) => void;
  onLoginClick: () => void;
  onSignupClick: () => void;
  isAuthenticated: boolean;
  username: string;
  onLogout: () => void;
}

const problemCategories: {name: string, category: Category}[] = [
    { name: 'Beginner', category: 'Beginner' },
    { name: 'Intermediate', category: 'Intermediate' },
    { name: 'ES6+', category: 'ES6+' },
    { name: 'Asynchronous', category: 'Asynchronous' },
    { name: 'Synchronous', category: 'Synchronous' },
    { name: 'Web APIs & DOM', category: 'Web APIs & DOM' },
    { name: 'Algorithms', category: 'Algorithms' },
    { name: 'Data Structures', category: 'Data Structures' },
];


const Header: React.FC<HeaderProps> = ({ currentTheme, setTheme, onLoginClick, onSignupClick, isAuthenticated, username, onLogout }) => {

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <header className="navbar bg-base-100/80 backdrop-blur-sm shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="navbar-start">
         <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a href="#problems" onClick={(e) => handleScroll(e, 'problems')}>Problems</a></li>
            <li><a href="#calculator" onClick={(e) => handleScroll(e, 'calculator')}>Calculator</a></li>
            <li><a href="#ai-assistant" onClick={(e) => handleScroll(e, 'ai-assistant')}>AI Assistant</a></li>
          </ul>
        </div>
        <a href="#" className="btn btn-ghost text-xl normal-case">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
          JS Mastery
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="dropdown dropdown-hover">
            <a href="#problems" onClick={(e) => handleScroll(e, 'problems')}>Problems</a>
             <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-64">
                {problemCategories.map(p => (
                   <li key={p.category}><a>{p.name}</a></li>
                ))}
            </ul>
          </li>
          <li><a href="#calculator" onClick={(e) => handleScroll(e, 'calculator')}>Calculator</a></li>
          <li><a href="#ai-assistant" onClick={(e) => handleScroll(e, 'ai-assistant')}>AI Assistant</a></li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
            <span className="hidden md:inline">Theme</span>
            <svg width="12px" height="12px" className="h-2 w-2 ml-1 hidden md:inline" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.1562 3.125L6 7.28125L1.84375 3.125" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </label>
          <div tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-200 rounded-box w-52 h-96 overflow-y-auto">
            <div className="grid grid-cols-1 gap-4 p-2">
                {availableThemes.map(theme => (
                  <button key={theme} className={`btn text-left ${currentTheme === theme ? 'btn-active btn-primary' : 'btn-ghost'}`} onClick={() => setTheme(theme)}>{theme.charAt(0).toUpperCase() + theme.slice(1)}</button>
                ))}
            </div>
          </div>
        </div>
        {isAuthenticated ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-primary btn-outline">
              Welcome, {username}
            </label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><button onClick={onLogout}>Logout</button></li>
            </ul>
          </div>
        ) : (
          <>
            <button className="btn btn-ghost hidden md:inline-flex" onClick={onLoginClick}>Login</button>
            <button className="btn btn-primary" onClick={onSignupClick}>Sign Up</button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
