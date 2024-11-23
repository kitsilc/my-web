import React from 'react';
import { GraduationCap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center px-4">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80"
          alt="Medical Education Background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900"></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <GraduationCap size={64} className="text-blue-400" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Edmond Chan
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4">
          Assistant Lecturer at The University of Hong Kong
        </p>
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
          Dedicated nursing educator with over 13 years of experience in clinical supervision, 
          laboratory teaching, and nursing education research
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="#experience"
            className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            View Experience
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;