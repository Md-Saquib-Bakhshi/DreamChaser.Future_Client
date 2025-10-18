import { axiosInstance } from '../../../shared/utils/axiosInstance';

export const homeService = {
  getHeroData: async () => {
    try {
      const response = await axiosInstance.get('/api/hero');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch hero data');
    }
  },

  getStats: async () => {
    try {
      const response = await axiosInstance.get('/api/stats');
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch stats');
    }
  },
};