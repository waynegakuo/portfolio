export type ThemeMode = 'light' | 'dark';

export interface NavLink {
  label: string;
  path: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'linkedin' | 'x' | 'github' | 'email' | 'resume';
}

export interface Practice {
  kicker: string;
  title: string;
  copy: string;
}

export interface MediaFeature {
  id: string;
  title: string;
  source: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  stack: string[];
  description: string;
  current?: boolean;
}

export interface Project {
  title: string;
  description: string;
  href: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

export interface TechItem {
  name: string;
  image: string;
}

export interface Community {
  name: string;
  role: string;
  description: string;
  logo: string;
  logoAlt: string;
  socials: { label: string; href: string }[];
}

export interface Education {
  course: string;
  school: string;
  period: string;
  description: string;
}

export interface SeoConfig {
  title: string;
  description: string;
  path: string;
}
