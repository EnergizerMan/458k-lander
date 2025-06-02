
import React from 'react';

const benefits = [
  {
    id: 1,
    text: "The exact week-by-week GTM rollout plan that drove $458K in pipeline"
  },
  {
    id: 2,
    text: "Our AI-powered outbound engine (with message scripts + prompts)"
  },
  {
    id: 3,
    text: "The 5-stage sales flow we used to close deals fast"
  },
  {
    id: 4,
    text: "Offer & pricing tweaks that doubled conversion — without changing the product"
  },
  {
    id: 5,
    text: "How we did it all with zero hires, zero ad spend, and zero fluff"
  }
];

const BenefitList = () => {
  return (
    <div className="space-y-4 max-w-2xl mx-auto">
      {benefits.map((benefit) => (
        <div key={benefit.id} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md">
          <span className="text-cta text-2xl">✅</span>
          <p className="text-gray-800">{benefit.text}</p>
        </div>
      ))}
      <p className="text-center text-gray-700 italic mt-6">
        🧠 Every section includes tactical breakdowns, real scripts, and action-ready systems
      </p>
    </div>
  );
};

export default BenefitList;
