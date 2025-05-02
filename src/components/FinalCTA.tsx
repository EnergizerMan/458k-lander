
import React from 'react';
import { Button } from "@/components/ui/button";

interface FinalCTAProps {
  scrollToForm: () => void;
}

const FinalCTA = ({ scrollToForm }: FinalCTAProps) => {
  return (
    <div className="bg-navy text-white py-12 px-6 rounded-lg shadow-xl max-w-3xl mx-auto text-center">
      <h3 className="text-3xl font-bold mb-4">Ready to Engineer Your Own $458K Pipeline Surge?</h3>
      <p className="text-lg mb-8 max-w-xl mx-auto">
        Get the free GTM playbook and reverse-engineer the exact system we used to generate $458,000 in qualified pipeline in just 30 days — without the bloat.
      </p>
      <Button 
        onClick={scrollToForm}
        className="bg-cta hover:bg-amber-500 text-white font-bold py-4 px-8 rounded-md shadow-md transition-transform transform hover:scale-105 text-xl"
      >
        📥 Download the Playbook Now
      </Button>
      <p className="mt-3 text-gray-300">
        Get it instantly. No fluff. Just results.
      </p>
      <p className="mt-6 text-sm text-gray-400">
        🧠 Want to see if we can build the same GTM engine inside your company? You'll get a chance to book a free GTM Strategy Call after download.
      </p>
    </div>
  );
};

export default FinalCTA;
