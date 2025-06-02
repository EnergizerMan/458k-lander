
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const StrategyCall = () => {
  const navigate = useNavigate();
  
  // Load data from localStorage if available, otherwise redirect
  useEffect(() => {
    const savedData = localStorage.getItem('leadData');
    if (!savedData) {
      // If no data, redirect back to main page
      navigate('/');
    }
  }, [navigate]);

  // Load Calendly script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-0 pb-20 px-4">
      <div className="max-w-4xl mx-auto pt-12">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Book Your Free GTM Strategy Session
          </h1>
          <p className="text-lg text-gray-700">
            You're one step away from discovering how to apply the same pipeline-generating system to your business.
          </p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-lg">
          {/* Calendly inline widget */}
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/jacob-gtm/maria-gtm-session" 
            style={{ minWidth: '320px', height: '700px' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default StrategyCall;
