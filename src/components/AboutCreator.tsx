
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const achievements = [
  "Global GTM strategist and founder of Mamusa AI.",
  "Built and scaled high-performance revenue engines across 15+ ventures",
  "Closed multi-million dollar deals and led 8-figure exits",
  "Drove $458K in new pipeline in 30 days — from zero",
  "Former sales leader at one of the world's largest fitness orgs",
  "Interviewed 55+ top venture capitalists and tech founders",
  "Built one of the fastest-growing investor networks on the planet"
];

const AboutCreator = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-md p-8 max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <div className="md:w-1/4 flex justify-center">
          <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
            <AvatarImage src="/lovable-uploads/6b8c5b41-7141-4c87-8fbe-05b56fd501c8.png" alt="Jacob Vandersteen" />
            <AvatarFallback className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white text-4xl font-bold">
              JV
            </AvatarFallback>
          </Avatar>
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
