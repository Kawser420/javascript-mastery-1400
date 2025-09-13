import React from "react";

const Hero: React.FC = () => {
  const handleGetStartedClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const problemsSection = document.getElementById("problems");
    if (problemsSection) {
      problemsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero min-h-[70vh] bg-base-200 bg-grid-pattern">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-3xl">
          <h1 className="mb-5 text-5xl md:text-7xl font-bold text-shadow-lg">
            Achieve True JavaScript Mastery
          </h1>
          <p className="mb-5 text-lg md:text-xl">
            From fundamental concepts to expert-level algorithms, conquer our
            library of 1400+ interactive challenges. Sharpen your skills with
            our scientific calculator and get instant, in-depth explanations
            from our Gemini-powered AI assistant.
          </p>
          <a
            href="#problems"
            className="btn btn-primary btn-lg"
            onClick={handleGetStartedClick}
          >
            Start Solving Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
