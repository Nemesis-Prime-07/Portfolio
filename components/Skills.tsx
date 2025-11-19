
import React from 'react';
import { skillData } from '../data/mockData';
import { useOnScreen } from '../hooks/useOnScreen';
import type { Skill } from '../types';

interface SkillCardProps {
    skill: Skill;
    index: number;
    isVisible: boolean;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index, isVisible }) => {
    return (
        <div
            className="glassmorphism p-4 rounded-lg flex items-center space-x-4 transform transition-all duration-500 hover:scale-110 hover:border-cyan-400 hover-btn-glow"
            style={{
                transitionDelay: `${isVisible ? index * 50 : 0}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
        >
            {skill.icon}
            <span className="font-mono text-gray-200">{skill.name}</span>
        </div>
    );
};

const Skills: React.FC = () => {
    const ref = React.useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);

    return (
        <section id="skills" className="py-24 bg-gray-900/50">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center neon-text text-cyan-400">
                    <span className="font-mono">&lt;</span>Toolkit<span className="font-mono"> /&gt;</span>
                </h2>
                <div ref={ref} className="space-y-12">
                    {skillData.map((category) => (
                        <div key={category.title}>
                            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">{category.title}</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                                {category.skills.map((skill, index) => (
                                    <SkillCard key={skill.name} skill={skill} index={index} isVisible={isVisible} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
