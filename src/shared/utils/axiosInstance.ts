// Mock axios instance until axios is installed
// TODO: Replace with actual axios after running: npm install axios

interface MockAxiosResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
}

interface MockAxiosInstance {
  get: <T = any>(url: string) => Promise<MockAxiosResponse<T>>;
  post: <T = any>(url: string, data?: any) => Promise<MockAxiosResponse<T>>;
  put: <T = any>(url: string, data?: any) => Promise<MockAxiosResponse<T>>;
  delete: <T = any>(url: string) => Promise<MockAxiosResponse<T>>;
}

export const axiosInstance: MockAxiosInstance = {
  get: async <T = any>(url: string): Promise<MockAxiosResponse<T>> => {
    console.log(`Mock GET request to: ${url}`);
    return {
      data: {} as T,
      status: 200,
      statusText: 'OK',
      headers: {}
    };
  },
  post: async <T = any>(url: string, data?: any): Promise<MockAxiosResponse<T>> => {
    console.log(`Mock POST request to: ${url}`, data);
    return {
      data: {} as T,
      status: 200,
      statusText: 'OK',
      headers: {}
    };
  },
  put: async <T = any>(url: string, data?: any): Promise<MockAxiosResponse<T>> => {
    console.log(`Mock PUT request to: ${url}`, data);
    return {
      data: {} as T,
      status: 200,
      statusText: 'OK',
      headers: {}
    };
  },
  delete: async <T = any>(url: string): Promise<MockAxiosResponse<T>> => {
    console.log(`Mock DELETE request to: ${url}`);
    return {
      data: {} as T,
      status: 200,
      statusText: 'OK',
      headers: {}
    };
  }
};