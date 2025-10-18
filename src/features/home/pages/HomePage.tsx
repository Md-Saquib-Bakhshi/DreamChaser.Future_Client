import React from 'react';
import { HeroSection } from '../components/HeroSection';

export const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Welcome to Our Platform
          </h2>
          <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto">
            Discover amazing features and capabilities that will help you achieve your goals.
          </p>
        </div>
      </section>
    </div>
  );
};