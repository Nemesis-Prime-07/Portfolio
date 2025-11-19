
import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

const AnimatedCodeBlock: React.FC = () => {
    const ref = React.useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);

    const lines = [
        { text: 'while(true) {' },
        { text: '   learn();' },
        { text: '   build();' },
        { text: '   evolve();' },
        { text: '}' },
    ];

    return (
        <div ref={ref} className="glassmorphism p-6 rounded-lg font-mono text-sm sm:text-base border-cyan-400/20 border">
            <div className="flex items-center pb-4 mb-4 border-b border-gray-700">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <pre>
                {lines.map((line, index) => (
                    <div
                        key={index}
                        className="opacity-0 transition-opacity duration-500"
                        style={{
                            transitionDelay: `${isVisible ? index * 150 : 0}ms`,
                            opacity: isVisible ? 1 : 0
                        }}
                    >
                        <code>{line.text}</code>
                    </div>
                ))}
                <div
                    className="inline-block w-2 h-4 bg-cyan-400 animate-pulse transition-opacity duration-500"
                    style={{
                        transitionDelay: `${isVisible ? lines.length * 150 : 0}ms`,
                        opacity: isVisible ? 1 : 0
                    }}
                ></div>
            </pre>
        </div>
    );
};

const About: React.FC = () => {
    const ref = React.useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);

    return (
        <section id="about" ref={ref} className={`py-24 container mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center neon-text text-cyan-400">
                <span className="font-mono">&lt;</span>About Me<span className="font-mono"> /&gt;</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-12 items-center">
                <div className="md:col-span-1 flex justify-center">
                    <div className="relative w-48 h-48 md:w-64 md:h-64">
                        <div className="absolute inset-0 bg-cyan-400 rounded-full transform rotate-45 animate-pulse"></div>
                        <img
                            src={`https://picsum.photos/seed/avatar/300/300`}
                            alt="Nemesis Avatar"
                            className="relative w-full h-full rounded-full object-cover border-4 border-gray-800"
                        />
                    </div>
                </div>
                <div className="md:col-span-2">
                    <p className="text-lg mb-6 leading-relaxed">
                        I'm a developer and security engineer driven by a passion for building robust, secure, and intelligent systems. My journey into code began with a fascination for how technology can solve complex problems, which led me to the worlds of cybersecurity and artificial intelligence. My philosophy is simple: constant learning, relentless building, and continuous evolution.
                    </p>
                    <AnimatedCodeBlock />
                </div>
            </div>
        </section>
    );
};

export default About;
