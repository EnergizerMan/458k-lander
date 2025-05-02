
import React from 'react';

const achievements = [
  "Global GTM strategist and founder of Mamusa AI.",
  "Led GTM for 15+ startups. Closed a $3M enterprise deal in 2024.",
  "Orchestrated a $25M lower-middle-market company sale in 2025.",
  "Former global sales leader at LA Fitness.",
  "Interviewed 55+ top VCs and founders."
];

const AboutCreator = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-md p-8 max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <div className="md:w-1/4 flex justify-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white text-4xl font-bold">
            JV
          </div>
        </div>
        <div className="md:w-3/4">
          <h3 className="text-2xl font-bold mb-2">Built by Jacob Vandersteen</h3>
          <ul className="space-y-2 mb-4">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-cta">•</span>
                <span className="text-gray-700">{achievement}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-700 italic">
            You're not just downloading a PDF — you're tapping into battle-tested revenue strategy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCreator;
