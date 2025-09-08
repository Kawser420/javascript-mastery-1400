import React from 'react';

const Hero: React.FC = () => {

  const handleGetStartedClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const problemsSection = document.getElementById('problems');
    if (problemsSection) {
      problemsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero min-h-[60vh] bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-6xl font-bold">Achieve JavaScript Mastery</h1>
          <p className="py-6 text-lg">
            From fundamental concepts to expert-level algorithms, conquer our library of 500+ interactive challenges.
            Sharpen your skills with our scientific calculator and get instant, in-depth explanations from our Gemini-powered AI assistant.
          </p>
          <a href="#problems" className="btn btn-primary btn-lg" onClick={handleGetStartedClick}>Start Solving</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;