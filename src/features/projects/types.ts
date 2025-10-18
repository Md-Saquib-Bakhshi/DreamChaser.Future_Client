export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  github?: string;
  category?: string;
  featured?: boolean;
  createdAt: string;
}

export interface ProjectCategory {
  id: string;
  name: string;
  description: string;
}