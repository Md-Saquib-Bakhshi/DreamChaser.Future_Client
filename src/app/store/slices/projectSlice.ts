// Mock project slice until Redux Toolkit is installed
// TODO: Replace with actual Redux after running: npm install @reduxjs/toolkit

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  github?: string;
}

interface ProjectState {
  projects: Project[];
  loading: boolean;
  error: string | null;
}

const initialState: ProjectState = {
  projects: [],
  loading: false,
  error: null,
};

// Mock actions
export const setProjects = (projects: Project[]) => ({
  type: 'project/setProjects',
  payload: projects
});

export const setLoading = (loading: boolean) => ({
  type: 'project/setLoading',
  payload: loading
});

export const setError = (error: string) => ({
  type: 'project/setError',
  payload: error
});

// Mock reducer
const projectReducer = (state = initialState, action: any): ProjectState => {
  switch (action.type) {
    case 'project/setProjects':
      return {
        ...state,
        projects: action.payload,
        loading: false,
        error: null
      };
    case 'project/setLoading':
      return {
        ...state,
        loading: action.payload
      };
    case 'project/setError':
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default projectReducer;