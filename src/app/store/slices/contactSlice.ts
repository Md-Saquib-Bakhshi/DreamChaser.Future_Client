// Mock contact slice until Redux Toolkit is installed
// TODO: Replace with actual Redux after running: npm install @reduxjs/toolkit

interface ContactState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

const initialState: ContactState = {
  loading: false,
  success: false,
  error: null,
};

// Mock actions
export const setLoading = (loading: boolean) => ({
  type: 'contact/setLoading',
  payload: loading
});

export const setSuccess = (success: boolean) => ({
  type: 'contact/setSuccess',
  payload: success
});

export const setError = (error: string) => ({
  type: 'contact/setError',
  payload: error
});

export const resetContact = () => ({
  type: 'contact/resetContact'
});

// Mock reducer
const contactReducer = (state = initialState, action: any): ContactState => {
  switch (action.type) {
    case 'contact/setLoading':
      return {
        ...state,
        loading: action.payload
      };
    case 'contact/setSuccess':
      return {
        ...state,
        success: action.payload,
        loading: false,
        error: null
      };
    case 'contact/setError':
      return {
        ...state,
        error: action.payload,
        loading: false,
        success: false
      };
    case 'contact/resetContact':
      return {
        ...state,
        loading: false,
        success: false,
        error: null
      };
    default:
      return state;
  }
};

export default contactReducer;