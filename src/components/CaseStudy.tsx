
import React from 'react';

const caseStudyPoints = [
  "We worked with a $1M ARR AI startup that had just 6 clients.",
  "In 30 days, we helped them send 5 new proposals and unlock $458,000 in close-adjusted pipeline.",
  "No extra hires. No new tech stack. No ad spend.",
  "Just smart sequencing, lean execution, and AI-powered GTM."
];

const CaseStudy = () => {
  return (
    <div className="bg-white rounded-lg shadow-xl p-8 max-w-3xl mx-auto">
      <h3 className="text-2xl font-bold text-navy mb-6">
        This System Already Helped a Founder Double Their Opportunity Pipeline
      </h3>
      <div className="space-y-4">
        {caseStudyPoints.map((point, index) => (
          <div key={index} className="flex items-start space-x-3">
            <span className="text-cta text-xl">✅</span>
            <p className="text-gray-700">{point}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <p className="text-xl font-medium text-navy">
          What would $458K in new pipeline do for your business this month?
        </p>
      </div>
    </div>
  );
};

export default CaseStudy;
