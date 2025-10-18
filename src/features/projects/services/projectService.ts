import { axiosInstance } from '../../../shared/utils/axiosInstance';

export const projectService = {
  getAllProjects: async () => {
    try {
      const response = await axiosInstance.get('/api/projects');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch projects');
    }
  },

  getProjectById: async (id: string) => {
    try {
      const response = await axiosInstance.get(`/api/projects/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch project with id: ${id}`);
    }
  },

  getProjectsByCategory: async (category: string) => {
    try {
      const response = await axiosInstance.get(`/api/projects?category=${category}`);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch projects for category: ${category}`);
    }
  },
};