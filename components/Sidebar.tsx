import React from 'react';
import { Category } from '../types';

interface SidebarProps {
  categoryGroups: Record<string, Category[]>;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ categoryGroups, isOpen, setIsOpen }) => {

  const handleCategoryClick = (category: Category | 'All') => {
     const problemsSection = document.getElementById('problems');
     if (problemsSection) {
         problemsSection.scrollIntoView({ behavior: 'smooth' });
         const event = new CustomEvent('categoryChange', { detail: category });
         window.dispatchEvent(event);
         setIsOpen(false); // Close sidebar on selection, especially for mobile
     }
  };

  return (
    <>
        {/* Backdrop for mobile */}
        <div 
            className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={() => setIsOpen(false)}
        ></div>

        <aside className={`fixed lg:sticky top-0 h-screen bg-base-200 w-72 lg:w-64 transition-transform duration-300 ease-in-out z-40 lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
           <div className="h-full flex flex-col">
                <div className="p-4 text-xl font-bold border-b border-base-300">
                    Problem Categories
                </div>
                <nav className="flex-1 p-4 overflow-y-auto">
                     <ul className="menu p-0">
                        <li>
                            <a href="#" className="font-bold" onClick={() => handleCategoryClick('All')}>
                                All Problems
                            </a>
                        </li>
                     </ul>

                    {Object.entries(categoryGroups).map(([groupName, categories]) => (
                        <div key={groupName} className="mt-4">
                            <h2 className="menu-title text-primary px-4">{groupName}</h2>
                            <ul className="menu p-0">
                                {categories.map(category => (
                                    <li key={category}>
                                        <a href="#" onClick={() => handleCategoryClick(category)}>
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
