// FIX: Import ReactNode type from React to resolve namespace errors.
import type { ReactNode } from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  tech_stack: string[];
  image: string;
  live_link: string;
  github_link: string;
  category: string;
}

export interface Skill {
  name: string;
  // FIX: Use ReactNode type.
  icon: ReactNode;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface ExperienceItem {
  year: string;
  title: string;
  duration: string;
  details: string;
  // FIX: Use ReactNode type.
  icon: ReactNode;
}