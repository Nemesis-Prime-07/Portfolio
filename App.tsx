
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { useKonamiCode } from './hooks/useKonamiCode';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [konamiActive, setKonamiActive] = useState(false);

  const appRef = useRef<HTMLDivElement>(null);

  const konamiCallback = () => {
    setKonamiActive(true);
    setTimeout(() => setKonamiActive(false), 3000); // Effect lasts for 3 seconds
  };
  useKonamiCode(konamiCallback);

  useEffect(() => {
    console.log("Welcome, fellow developer! You found my secret console!");
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#0a0a0a] flex justify-center items-center z-50">
        <div className="font-mono text-cyan-400 text-2xl flex items-center">
          <span className="animate-pulse">[N]</span>
          <div className="w-4 h-4 border-2 border-cyan-400 border-dashed rounded-full animate-spin mx-4"></div>
          <span className="animate-pulse">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div ref={appRef} className={`bg-[#0a0a0a] text-gray-300 relative ${konamiActive ? 'konami-effect' : ''}`}>
      <CustomCursor />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 z-0"></div>
      <div className="relative z-10">
        <Header />
        <main className="px-4 sm:px-8 md:px-12 lg:px-24">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
