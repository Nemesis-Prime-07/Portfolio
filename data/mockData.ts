import type { SkillCategory, ExperienceItem } from '../types';
import { CodeIcon, BriefcaseIcon, GraduationCapIcon } from '../components/Icons';
import React from 'react';

export const skillData: SkillCategory[] = [
    {
      title: "Languages",
      skills: [
        { name: "C++", icon: React.createElement('img', {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', className:'w-8 h-8'}) },
        { name: "Python", icon: React.createElement('img', {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', className:'w-8 h-8'}) },
        { name: "JavaScript", icon: React.createElement('img', {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', className:'w-8 h-8'}) },
        { name: "TypeScript", icon: React.createElement('img', {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', className:'w-8 h-8'}) },
      ],
    },
    {
      title: "Frameworks",
      skills: [
        { name: "React", icon: React.createElement('img', {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', className:'w-8 h-8'}) },
        { name: "Node.js", icon: React.createElement('img', {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', className:'w-8 h-8'}) },
        { name: "Tailwind CSS", icon: React.createElement('img', {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', className:'w-8 h-8'}) },
        { name: "Flask", icon: React.createElement('img', {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg', className:'w-8 h-8'}) },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: React.createElement('img', {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', className:'w-8 h-8'}) },
        { name: "SQLite", icon: React.createElement('img', {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg', className:'w-8 h-8'}) },
        { name: "PostgreSQL", icon: React.createElement('img', {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', className:'w-8 h-8'}) },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: React.createElement('img', {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', className:'w-8 h-8'}) },
        { name: "Docker", icon: React.createElement('img', {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', className:'w-8 h-8'}) },
        { name: "VSCode", icon: React.createElement('img', {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', className:'w-8 h-8'}) },
        { name: "Linux", icon: React.createElement('img', {src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', className:'w-8 h-8'}) },
      ],
    },
];

export const experienceData: ExperienceItem[] = [
  {
    year: '2023 - Present',
    title: 'Senior Security Engineer',
    duration: 'Full-time',
    details: 'Lead vulnerability assessments and penetration testing efforts. Developed custom security tools and automated incident response workflows.',
    icon: React.createElement(BriefcaseIcon),
  },
  {
    year: '2021 - 2023',
    title: 'Full-Stack Developer',
    duration: 'Full-time',
    details: 'Designed and implemented scalable web applications, focusing on backend architecture and API security for a major tech firm.',
    icon: React.createElement(BriefcaseIcon),
  },
  {
    year: '2021',
    title: 'Open Source Contributor',
    duration: 'Side Project',
    details: 'Contributed to several open-source security projects, including a popular static analysis tool and a network monitoring library.',
    icon: React.createElement(CodeIcon),
  },
  {
    year: '2017 - 2021',
    title: 'B.S. in Computer Science',
    duration: 'Education',
    details: 'Graduated with honors, specializing in cybersecurity and artificial intelligence. Published research on adversarial machine learning.',
    icon: React.createElement(GraduationCapIcon),
  },
];
