import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-base-200 text-base-content pt-16">
      {/* Top grid */}
      <div className="max-w-7xl mx-auto grid gap-10 px-6 md:grid-cols-4">
        {/* Brand / Newsletter */}
        <div>
          <h2 className="text-2xl font-bold tracking-tight">JS Mastery Hub</h2>
          <p className="mt-2 text-sm opacity-80">
            Master modern JavaScript through 1400+ carefully crafted problems,
            detailed explanations, and interactive solutions.
          </p>
          <form className="mt-5">
            <label className="block text-sm mb-1 font-medium">
              Subscribe to our newsletter
            </label>
            <div className="join w-full">
              <input
                type="email"
                placeholder="you@example.com"
                className="input input-bordered join-item flex-1"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </form>
        </div>

        {/* Problem Categories */}
        <nav aria-label="Problem Categories">
          <h6 className="footer-title">Problem Categories</h6>
          <ul className="space-y-1">
            {[
              "Fundamentals",
              "Core Concepts",
              "Asynchronous JS",
              "Advanced Topics",
              "Ecosystem & Practices",
              ,
            ].map((cat) => (
              <li key={cat}>
                <a href="#problems" className="link link-hover">
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Resources */}
        <nav aria-label="Resources">
          <h6 className="footer-title">Resources</h6>
          <ul className="space-y-1">
            <li>
              <a href="/docs" className="link link-hover">
                Documentation
              </a>
            </li>
            <li>
              <a href="/blog" className="link link-hover">
                Blog & Tutorials
              </a>
            </li>
            <li>
              <a href="/roadmap" className="link link-hover">
                Learning Roadmap
              </a>
            </li>
            <li>
              <a href="/faq" className="link link-hover">
                FAQ
              </a>
            </li>
            <li>
              <a href="/support" className="link link-hover">
                Support & Feedback
              </a>
            </li>
          </ul>
        </nav>

        {/* Company */}
        <nav aria-label="Company">
          <h6 className="footer-title">Company</h6>
          <ul className="space-y-1">
            <li>
              <a href="/about" className="link link-hover">
                About Us
              </a>
            </li>
            <li>
              <a href="/careers" className="link link-hover">
                Careers
              </a>
            </li>
            <li>
              <a href="/contact" className="link link-hover">
                Contact
              </a>
            </li>
            <li>
              <a href="/terms" className="link link-hover">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="/privacy" className="link link-hover">
                Privacy Policy
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Divider */}
      <div className="border-t border-base-300 mt-10"></div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 py-6 px-6">
        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} JS Mastery Hub. All rights reserved.
        </p>

        <div className="flex gap-5 text-xl">
          <a
            href="https://github.com/your-org/your-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/your-handle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="X (Twitter)"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/company/your-company"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://youtube.com/your-channel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
          <a
            href="https://discord.gg/your-invite"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="Discord"
          >
            <FaDiscord />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
