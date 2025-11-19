
import React, { useEffect, useRef, useCallback } from 'react';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { DownloadIcon, ArrowRightIcon } from './Icons';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const draw = useCallback((ctx: CanvasRenderingContext2D, frameCount: number, particles: any[]) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > ctx.canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > ctx.canvas.height) p.vy *= -1;
      ctx.fillStyle = 'rgba(0, 245, 255, 0.5)';
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    let particles: any[] = [];
    
    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        particles = [];
        const numParticles = Math.floor(canvas.width / 50);
        for(let i=0; i<numParticles; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 1.5
            });
        }
    }
    
    resizeCanvas();
    
    const render = (frameCount = 0) => {
      draw(ctx, frameCount, particles);
      animationFrameId = window.requestAnimationFrame(() => render(frameCount + 1));
    };
    render();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [draw]);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full opacity-30" />;
};


const Hero: React.FC = () => {
  const roles = ["Developer", "Security Engineer", "AI Builder"];
  const typedRole = useTypingEffect(roles, 150, 100);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center relative">
      <ParticleBackground />
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4">
          Hey, I’m Nemesis
        </h1>
        <p className="font-mono text-lg md:text-2xl text-cyan-400 neon-text">
          {typedRole}
          <span className="inline-block w-1 h-7 md:h-8 bg-cyan-400 animate-pulse ml-1" aria-hidden="true"></span>
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => scrollToSection('projects')}
            className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white bg-gray-800 border-2 border-cyan-400 rounded-lg overflow-hidden transition-all duration-300 hover:bg-cyan-400 hover:text-gray-900 hover-btn-glow"
          >
            <span className="absolute left-0 top-0 w-0 h-full bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            <span className="relative flex items-center">
              View Projects <ArrowRightIcon className="ml-2" />
            </span>
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-cyan-400 bg-transparent border-2 border-cyan-400 rounded-lg overflow-hidden transition-all duration-300 hover:text-white hover-btn-glow"
          >
            <span className="absolute left-0 top-0 w-0 h-full bg-cyan-400/20 transition-all duration-300 group-hover:w-full"></span>
            <span className="relative">Contact Me</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
