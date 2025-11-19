
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navLinks = ['about', 'skills', 'projects', 'experience', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'py-2 glassmorphism' : 'py-6'}`}>
      <nav className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-24 flex justify-between items-center">
        <div className="font-mono text-xl font-bold text-cyan-400 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          N<span className="text-gray-300">/</span>S
        </div>
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollToSection(link)}
                className="capitalize font-mono text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group hover-text-glow"
              >
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </li>
          ))}
        </ul>
        {/* Mobile menu could be added here */}
      </nav>
    </header>
  );
};

export default Header;
