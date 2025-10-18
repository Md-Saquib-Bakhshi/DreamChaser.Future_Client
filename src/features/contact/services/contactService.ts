import { axiosInstance } from '../../../shared/utils/axiosInstance';

interface ContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const contactService = {
  sendMessage: async (data: ContactData) => {
    try {
      const response = await axiosInstance.post('/api/contact', data);
      return response.data;
    } catch (error) {
      throw new Error('Failed to send message');
    }
  },

  subscribeNewsletter: async (email: string) => {
    try {
      const response = await axiosInstance.post('/api/newsletter/subscribe', { email });
      return response.data;
    } catch (error) {
      throw new Error('Failed to subscribe to newsletter');
    }
  },
};