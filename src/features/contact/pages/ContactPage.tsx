import React from 'react';
import { ContactForm } from '../components/ContactForm';

export const ContactPage: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">Email</h3>
                <p className="text-gray-600">hello@dreamchaser.com</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Address</h3>
                <p className="text-gray-600">
                  123 Innovation Street<br />
                  Tech City, TC 12345
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6">Send Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};