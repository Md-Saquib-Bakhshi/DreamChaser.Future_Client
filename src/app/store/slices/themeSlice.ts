// Mock theme slice until Redux Toolkit is installed
// TODO: Replace with actual Redux after running: npm install @reduxjs/toolkit

interface ThemeState {
  mode: 'light' | 'dark';
}

const initialState: ThemeState = {
  mode: 'light',
};

// Mock actions
export const toggleTheme = () => ({
  type: 'theme/toggleTheme'
});

export const setTheme = (mode: 'light' | 'dark') => ({
  type: 'theme/setTheme',
  payload: mode
});

// Mock reducer
const themeReducer = (state = initialState, action: any): ThemeState => {
  switch (action.type) {
    case 'theme/toggleTheme':
      return {
        ...state,
        mode: state.mode === 'light' ? 'dark' : 'light'
      };
    case 'theme/setTheme':
      return {
        ...state,
        mode: action.payload
      };
    default:
      return state;
  }
};

export default themeReducer;