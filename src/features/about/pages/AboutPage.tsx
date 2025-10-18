import React from 'react';
import { AboutCard } from '../components/AboutCard';

export const AboutPage: React.FC = () => {
  const aboutCards = [
    {
      title: 'Our Mission',
      description: 'To empower individuals and organizations to achieve their dreams through innovative technology solutions.',
      icon: '🎯'
    },
    {
      title: 'Our Vision',
      description: 'A world where technology bridges the gap between dreams and reality.',
      icon: '👁️'
    },
    {
      title: 'Our Values',
      description: 'Innovation, integrity, and customer success drive everything we do.',
      icon: '⭐'
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12">
          We are passionate about creating solutions that make a difference. 
          Our team is dedicated to turning your vision into reality.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {aboutCards.map((card, index) => (
            <AboutCard
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};