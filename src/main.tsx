// Mock main.tsx until dependencies are installed
// TODO: Replace with actual implementations after running:
// npm install react react-dom @reduxjs/toolkit react-redux react-router-dom
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from './app/routes';
import './styles/index.css';

// Mock Provider component
const MockProvider: React.FC<{ children: React.ReactNode; store: any }> = ({ children }) => {
  return <>{children}</>;
};

// Mock RouterProvider component  
const MockRouterProvider: React.FC<{ router: any }> = ({ router: Router }) => {
  return <Router />;
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MockProvider store={{}}>
      <MockRouterProvider router={Router} />
    </MockProvider>
  </React.StrictMode>
);
