import React from 'react';
import { Award, Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      period: "2011 - Present",
      title: "Assistant Lecturer",
      institution: "The University of Hong Kong",
      description: "Leading undergraduate and postgraduate education in nursing, supervising clinical placements, and conducting research in nursing education. Active member of multiple committees including International Affairs and Quality & Safety.",
      highlights: [
        "Teaching Excellence Award (Team) (2024)",
        "Clinical skills and laboratory teaching",
        "Research coordination in nursing education",
        "Committee member for various school initiatives"
      ]
    },
    {
      period: "2017 - 2018",
      title: "Clinical Nurse Educator",
      institution: "HKU ShenZhen Hospital",
      description: "Provided clinical education and training to nursing staff, developed educational materials, and implemented teaching strategies."
    },
    {
      period: "2007 - 2010",
      title: "Registered Nurse",
      institution: "Hong Kong Sanatorium Hospital",
      description: "Worked in intensive care unit providing advanced nursing care, mentored students, conducted staff training, and managed critical care patients.",
      highlights: [
        "Clinical mentorship",
        "Staff training and development",
        "Protocol development",
        "Critical care management"
      ]
    }
  ];

  const teachingAreas = [
    "Health Assessment",
    "Clinical Skills in Practice",
    "Nursing Care of Adult I, II, III",
    "Mental Health Nursing",
    "Advanced Nursing Care",
    "Community and Global Health Nursing",
    "Critical Care and Emergency Nursing"
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Professional Experience</h2>
        
        <div className="space-y-12 mb-16">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              <div className="md:grid md:grid-cols-5 md:gap-8">
                <div className="md:col-span-1">
                  <div className="flex items-center md:justify-end">
                    <Briefcase className="text-blue-400 mr-3 hidden md:block" />
                    <span className="text-blue-400 font-semibold">{exp.period}</span>
                  </div>
                </div>
                
                <div className="md:col-span-4 bg-gray-800 p-6 rounded-xl mt-4 md:mt-0">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-gray-400 mt-1">{exp.institution}</p>
                  <p className="text-gray-300 mt-4">{exp.description}</p>
                  {exp.highlights && (
                    <ul className="mt-4 space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-gray-400 flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-800 p-8 rounded-xl">
          <div className="flex items-center mb-6">
            <GraduationCap className="text-blue-400 mr-3" />
            <h3 className="text-2xl font-semibold">Teaching Areas</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {teachingAreas.map((area, index) => (
              <div key={index} className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                <span className="text-gray-400">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;