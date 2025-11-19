
import React, { useState, useMemo, useEffect } from 'react';
import type { Project } from '../types';
import { GithubIcon, ExternalLinkIcon } from './Icons';
import { useOnScreen } from '../hooks/useOnScreen';

const ProjectCard: React.FC<{ project: Project; isVisible: boolean; index: number }> = ({ project, isVisible, index }) => {
    return (
        <div 
            className="glassmorphism rounded-lg overflow-hidden group transform transition-all duration-500 hover:-translate-y-2"
            style={{
                transitionDelay: `${isVisible ? index * 100 : 0}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
        >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-cyan-400">{project.title}</h3>
                <p className="text-gray-400 mb-4 h-24 overflow-y-auto">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech_stack.map(tech => (
                        <span key={tech} className="bg-gray-700 text-cyan-300 text-xs font-mono px-2 py-1 rounded">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex justify-between items-center mt-auto">
                    <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-cyan-400 transition-all duration-300 hover-text-glow">
                        <ExternalLinkIcon className="mr-2"/> Live Demo
                    </a>
                    <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover-text-glow">
                        <GithubIcon />
                    </a>
                </div>
            </div>
        </div>
    );
};

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [filter, setFilter] = useState('All');
    const ref = React.useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('/api/projects.php');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProjects(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const categories = useMemo(() => ['All', ...Array.from(new Set(projects.map(p => p.category)))], [projects]);

    const filteredProjects = useMemo(() => {
        if (filter === 'All') return projects;
        return projects.filter(p => p.category === filter);
    }, [filter, projects]);

    return (
        <section id="projects" className="py-24">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center neon-text text-cyan-400">
                    <span className="font-mono">&lt;</span>Projects<span className="font-mono"> /&gt;</span>
                </h2>
                
                {loading && <div className="text-center text-cyan-400">Loading projects...</div>}
                {error && <div className="text-center text-red-500">Error: {error}</div>}

                {!loading && !error && (
                    <>
                        <div className="flex justify-center flex-wrap gap-4 mb-12">
                            {categories.map(category => (
                                <button
                                    key={category}
                                    onClick={() => setFilter(category)}
                                    className={`font-mono px-4 py-2 rounded-md transition-all duration-300 border-2 ${filter === category ? 'bg-cyan-400 text-gray-900 border-cyan-400 btn-glow' : 'bg-transparent border-gray-600 hover:border-cyan-400 hover:text-cyan-400 hover-btn-glow'}`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProjects.map((project, index) => (
                                <ProjectCard key={project.id} project={project} isVisible={isVisible} index={index}/>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default Projects;
