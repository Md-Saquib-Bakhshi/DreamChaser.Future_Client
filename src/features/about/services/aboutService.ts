import { axiosInstance } from '../../../shared/utils/axiosInstance';

export const aboutService = {
  getTeamMembers: async () => {
    try {
      const response = await axiosInstance.get('/api/team');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch team members');
    }
  },

  getCompanyInfo: async () => {
    try {
      const response = await axiosInstance.get('/api/company');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch company info');
    }
  },
};