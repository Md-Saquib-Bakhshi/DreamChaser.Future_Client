import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to DreamChaser
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Building the future, one dream at a time
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Get Started
        </button>
      </div>
    </section>
  );
};