// Mock router configuration until react-router-dom is installed
// TODO: Replace with actual React Router after running: npm install react-router-dom
import React from 'react';
import { HomePage } from '../features/home';
import { AboutPage } from '../features/about';
import { ProjectsPage } from '../features/projects';
import { ContactPage } from '../features/contact';

// Mock router component
export const Router: React.FC = () => {
  const [currentPath, setCurrentPath] = React.useState(window.location.pathname);

  React.useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage />;
      case '/about':
        return <AboutPage />;
      case '/projects':
        return <ProjectsPage />;
      case '/contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return <>{renderPage()}</>;
};

export const router = Router;