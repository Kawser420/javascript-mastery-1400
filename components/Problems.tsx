import React, { useState, useMemo, useEffect } from 'react';
import { allProblems } from '../problems';
import ProblemCard from './ProblemCard';
import type { Problem, Category } from '../types';

const Problems: React.FC<{ onExplain: (problem: Problem) => void }> = ({ onExplain }) => {
    const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const handleCategoryChange = (event: Event) => {
            const customEvent = event as CustomEvent<Category | 'All'>;
            setSelectedCategory(customEvent.detail);
            // Clear search when category changes
            setSearchTerm('');
        };

        window.addEventListener('categoryChange', handleCategoryChange);

        return () => {
            window.removeEventListener('categoryChange', handleCategoryChange);
        };
    }, []);

    const filteredProblems = useMemo(() => {
        let filtered = allProblems;

        if (selectedCategory !== 'All') {
            filtered = filtered.filter(p => p.category === selectedCategory);
        }

        if (searchTerm.trim() !== '') {
            const lowerCaseSearchTerm = searchTerm.toLowerCase();
            filtered = filtered.filter(p => 
                p.title.toLowerCase().includes(lowerCaseSearchTerm) ||
                p.description.toLowerCase().includes(lowerCaseSearchTerm)
            );
        }

        return filtered;
    }, [selectedCategory, searchTerm]);

    const currentCategoryTitle = selectedCategory === 'All' ? 'All Problems' : selectedCategory;

    return (
        <section id="problems" className="py-24 px-4 md:px-8 bg-base-200 scroll-mt-20">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold">Interactive JavaScript Problems</h2>
                    <p className="mt-4 text-lg text-base-content/70">Test your knowledge with our library of {allProblems.length}+ interactive problems.</p>
                </div>

                <div className="max-w-7xl mx-auto">
                     <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8 px-4 py-3 bg-base-100/50 rounded-lg shadow-sm sticky top-20 z-30 backdrop-blur-sm">
                        <h3 className="text-2xl font-semibold text-primary">{currentCategoryTitle} <span className="text-base-content/50 font-normal text-lg">({filteredProblems.length} problems)</span></h3>
                        <div className="form-control w-full md:w-auto md:min-w-xs lg:max-w-sm">
                            <div className="input-group">
                            <input
                                type="text"
                                placeholder="Search problems..."
                                className="input input-bordered w-full"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                aria-label="Search problems"
                            />
                            <button className="btn btn-square btn-primary" aria-label="Search">
                                <svg xmlns="http://www.w.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                            </div>
                        </div>
                    </div>

                    {filteredProblems.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {filteredProblems.map(problem => (
                                <ProblemCard key={problem.id} problem={problem} onExplain={onExplain} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16 bg-base-100 rounded-lg">
                            <p className="text-xl text-base-content/60">No problems found matching your criteria.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Problems;
