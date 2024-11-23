import React from 'react';
import { BookOpen, Users, Building2, Award } from 'lucide-react';

const About = () => {
  const qualifications = [
    "Practicing Certificate, Nursing Council of Hong Kong (2007 - present)",
    "Professional Certificate of Teaching and Learning in Higher Education, HKU",
    "Certificate of Merit: Smoking Cessation- Train the Trainer Program (2022)",
    "MSc in PreHospital Emergency Care, CUHK",
    "Bachelor of Nursing, The University of Hong Kong"
  ];

  const expertise = [
    "Clinical Skills Laboratory Teaching",
    "Undergraduate & Postgraduate Supervision",
    "Community-based Nursing Education",
    "Research in Nursing Education",
    "Simulation & Virtual Reality Training",
    "Patient Safety Education"
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-900 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <BookOpen className="text-blue-400 mr-3" />
              <h3 className="text-xl font-semibold">Education Expert</h3>
            </div>
            <p className="text-gray-400">
              Specialized in innovative teaching methodologies including simulation, virtual reality, and interactive hybrid teaching modes.
            </p>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <Users className="text-blue-400 mr-3" />
              <h3 className="text-xl font-semibold">Clinical Mentor</h3>
            </div>
            <p className="text-gray-400">
              Extensive experience in supervising undergraduate and postgraduate students in clinical settings and laboratory sessions.
            </p>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <Building2 className="text-blue-400 mr-3" />
              <h3 className="text-xl font-semibold">Committee Member</h3>
            </div>
            <p className="text-gray-400">
              Active participant in various school committees including International Affairs, Quality & Safety, and Infection Control.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <Award className="text-blue-400 mr-3" />
              <h3 className="text-2xl font-semibold">Qualifications</h3>
            </div>
            <ul className="space-y-3">
              {qualifications.map((qual, index) => (
                <li key={index} className="text-gray-400 flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  {qual}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <BookOpen className="text-blue-400 mr-3" />
              <h3 className="text-2xl font-semibold">Areas of Expertise</h3>
            </div>
            <ul className="space-y-3">
              {expertise.map((exp, index) => (
                <li key={index} className="text-gray-400 flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  {exp}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;