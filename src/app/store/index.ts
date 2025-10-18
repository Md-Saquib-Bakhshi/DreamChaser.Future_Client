// Mock store configuration until Redux Toolkit is installed
// TODO: Replace with actual Redux after running: npm install @reduxjs/toolkit react-redux

interface ThemeState {
  mode: 'light' | 'dark';
}

interface ProjectState {
  projects: any[];
  loading: boolean;
  error: string | null;
}

interface ContactState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

export interface RootState {
  theme: ThemeState;
  project: ProjectState;
  contact: ContactState;
}

export interface AppDispatch {
  (action: any): any;
}

// Mock store
export const store = {
  getState: (): RootState => ({
    theme: { mode: 'light' as const },
    project: { projects: [], loading: false, error: null },
    contact: { loading: false, success: false, error: null }
  }),
  dispatch: (action: any) => {
    console.log('Mock dispatch:', action);
    return action;
  },
  subscribe: (_listener: () => void) => {
    console.log('Mock subscribe');
    return () => console.log('Mock unsubscribe');
  }
};