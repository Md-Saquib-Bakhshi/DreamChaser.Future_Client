import { useState, useMemo } from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category?: string;
}

export const useProjectFilter = (projects: Project[]) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = useMemo(() => {
    const categorySet = new Set(projects.map(project => project.category).filter(Boolean));
    return ['all', ...Array.from(categorySet)];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.technologies.some(tech => 
                             tech.toLowerCase().includes(searchTerm.toLowerCase())
                           );
      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchTerm]);

  return {
    selectedCategory,
    setSelectedCategory,
    searchTerm,
    setSearchTerm,
    categories,
    filteredProjects,
  };
};