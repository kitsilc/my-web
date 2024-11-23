import React from 'react';
import { FileText, Award, BookOpen, Search } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: "Using simulated patient to enhance nursing students' awareness regarding patient safety",
      authors: "Chan, M.M.K., Wong, J.Y.H., Chan, C.K.Y., Pang, M.T.H., Chow, D.W.N., Chan, E.C.K., Lee, J.J.J., Cooper, S., Yau, A.T.F.",
      venue: "International Conference on Innovation in Nursing Education and Patient Care, Hong Kong, China",
      year: "2019"
    }
  ];

  const teachingGrants = [
    {
      title: "Interactive Virtual Reality for Cultural Awareness",
      period: "2023",
      description: "Application of interactive, immersive screen-based 360 virtual reality videos with structured 3D debriefing for enhancing student cultural awareness and clinical competence.",
      role: "Co-Investigator"
    },
    {
      title: "Care Prioritization Through Multi-patient Simulation",
      period: "2023",
      description: "Cross-University collaboration using peer-to-peer multi-patient simulation for enhancing care prioritization competency.",
      role: "Co-Investigator"
    },
    {
      title: "Escape Room for Clinical Prioritization",
      period: "2023",
      description: "Using 'Escape room incorporated situational and cultural awareness' to enhance clinical prioritization and cultural competence.",
      role: "Co-Investigator"
    },
    {
      title: "Interactive Hybrid Teaching for Clinical Reasoning",
      period: "2021-present",
      description: "Adopting interactive hybrid teaching mode to promote undergraduate nursing students' clinical reasoning.",
      role: "Co-Investigator"
    },
    {
      title: "Simulation Ward Teaching Innovation",
      period: "2018",
      description: "Technology innovation 'simulation ward' teaching model to promote undergraduate nursing students' clinical performance competence.",
      role: "Co-Investigator"
    }
  ];

  const achievements = [
    {
      title: "Teaching Excellence Award (Team)",
      year: "2024",
      institution: "The University of Hong Kong"
    }
  ];

  return (
    <section id="publications" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Research & Publications</h2>
        
        <div className="space-y-12">
          {/* Publications */}
          <div className="bg-gray-900 p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <BookOpen className="text-blue-400 mr-4" />
              <h3 className="text-2xl font-semibold">Academic Publications</h3>
            </div>
            {publications.map((pub, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <h4 className="font-semibold text-lg mb-2">{pub.title}</h4>
                <p className="text-gray-400 text-sm mb-1">{pub.authors}</p>
                <p className="text-gray-500 text-sm">{pub.venue}, {pub.year}</p>
              </div>
            ))}
          </div>

          {/* Teaching Development Grants */}
          <div className="bg-gray-900 p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <Search className="text-blue-400 mr-4" />
              <h3 className="text-2xl font-semibold">Teaching Development Grants Projects</h3>
            </div>
            <div className="grid gap-6">
              {teachingGrants.map((project, index) => (
                <div key={index} className="border-l-2 border-blue-400 pl-4">
                  <h4 className="font-semibold text-lg">{project.title}</h4>
                  <p className="text-blue-400 text-sm mb-2">{project.period} • {project.role}</p>
                  <p className="text-gray-400">{project.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-gray-900 p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <Award className="text-blue-400 mr-4" />
              <h3 className="text-2xl font-semibold">Academic Achievements</h3>
            </div>
            <div className="grid gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="border-l-2 border-blue-400 pl-4">
                  <h4 className="font-semibold text-white">{achievement.title}</h4>
                  <p className="text-gray-400 text-sm mt-1">{achievement.year}</p>
                  <p className="text-gray-500 text-sm">{achievement.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Discuss Research Opportunities
          </a>
        </div>
      </div>
    </section>
  );
};

export default Publications;