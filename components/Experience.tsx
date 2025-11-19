
import React, { useRef } from 'react';
import { experienceData } from '../data/mockData';
import type { ExperienceItem } from '../types';
import { useOnScreen } from '../hooks/useOnScreen';

const TimelineItem: React.FC<{ item: ExperienceItem, isLeft: boolean }> = ({ item, isLeft }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);

    const content = (
        <div className="flex-1 glassmorphism p-6 rounded-lg shadow-lg border border-cyan-400/20">
            <p className="text-cyan-400 font-semibold">{item.year}</p>
            <h3 className="text-xl font-bold mt-1">{item.title}</h3>
            <p className="text-sm text-gray-400 mb-3">{item.duration}</p>
            <p className="text-gray-300">{item.details}</p>
        </div>
    );

    const icon = (
        <div className="w-12 h-12 bg-gray-800 border-2 border-cyan-400 rounded-full flex items-center justify-center text-cyan-400 absolute left-1/2 -translate-x-1/2 z-10">
            {item.icon}
        </div>
    );

    return (
        <div ref={ref} className={`flex ${isLeft ? 'justify-start' : 'justify-end'} w-full relative mb-12 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'} ${isLeft ? (isVisible ? 'translate-x-0' : '-translate-x-10') : (isVisible ? 'translate-x-0' : 'translate-x-10')}`}>
            <div className="w-1/2 px-4">{isLeft ? content : null}</div>
            {icon}
            <div className="w-1/2 px-4">{!isLeft ? content : null}</div>
        </div>
    );
};

const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-24 bg-gray-900/50">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center neon-text text-cyan-400">
                    <span className="font-mono">&lt;</span>Experience<span className="font-mono"> /&gt;</span>
                </h2>
                <div className="relative">
                    <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-700/50 transform -translate-x-1/2"></div>
                    {experienceData.map((item, index) => (
                        <TimelineItem key={index} item={item} isLeft={index % 2 === 0} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
