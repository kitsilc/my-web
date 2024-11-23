import React from 'react';
import { GraduationCap, BookOpen, Award, Users, Mail, FileText, Globe2, Building2 } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Publications from './components/Publications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Publications />
        <Contact />
      </main>
      <footer className="bg-gray-800 py-6 text-center">
        <p className="text-gray-400">© {new Date().getFullYear()} Edmond Chan. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;