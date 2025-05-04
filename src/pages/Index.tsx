
import React, { useRef } from 'react';
import OptInForm from '@/components/OptInForm';
import VideoEmbed from '@/components/VideoEmbed';
import PlaybookMockup from '@/components/PlaybookMockup';
import BenefitList from '@/components/BenefitList';
import CaseStudy from '@/components/CaseStudy';
import AboutCreator from '@/components/AboutCreator';
import FinalCTA from '@/components/FinalCTA';
import { Toaster } from '@/components/ui/sonner';

const Index = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <Toaster />
      
      {/* Hero Section */}
      <section className="pt-12 pb-8 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-navy">
                Add $458K in Qualified Pipeline in 30 Days — Without Hiring, Paid Ads, or a Sales Team
              </h1>
              <h2 className="text-lg md:text-xl mt-6 text-gray-700">
                This free playbook breaks down exactly how we helped a $1M ARR AI startup with just 6 clients generate $458,000 in new pipeline — and send 5 new client proposals — in just 30 days.
              </h2>
              <p className="mt-4 text-gray-700">
                Using a systemized, AI-powered GTM engine that requires no hires, no complex tooling, and no fluff.
              </p>
            </div>
            <div className="relative" ref={formRef}>
              <PlaybookMockup />
              <div className="mt-6">
                <OptInForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <VideoEmbed videoId="kOkQ4T5WO9E" title="Smooth Operator" />
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-navy mb-12">
            What's Inside the $458K GTM Playbook
          </h2>
          <BenefitList />
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <CaseStudy />
        </div>
      </section>

      {/* About Creator Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <AboutCreator />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <FinalCTA scrollToForm={scrollToForm} />
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg border-t border-gray-200">
        <button 
          onClick={scrollToForm}
          className="w-full bg-cta hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-md shadow-md"
        >
          📥 Get Your Free Playbook
        </button>
      </div>
    </div>
  );
};

export default Index;
