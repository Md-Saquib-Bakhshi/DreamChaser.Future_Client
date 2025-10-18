// Mock Navbar component until react-router-dom is installed
// TODO: Replace with actual React Router Links after running: npm install react-router-dom
import React from 'react';

export const Navbar: React.FC = () => {
  const handleNavClick = (path: string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => handleNavClick('/')}
            className="text-xl font-bold text-blue-600"
          >
            DreamChaser
          </button>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => handleNavClick('/')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('/about')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('/projects')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => handleNavClick('/contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </button>
          </div>

          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};