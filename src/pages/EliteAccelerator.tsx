
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { CheckCircle, Star, Award, TrendingUp, ArrowRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import ApplicationForm from '@/components/ApplicationForm';

const EliteAccelerator = () => {
  const [showApplication, setShowApplication] = useState(false);
  const navigate = useNavigate();

  const handleApplicationSubmit = () => {
    toast.success("Application submitted successfully!", {
      description: "We'll review your application and contact you within 48 hours."
    });
    
    // After 2 seconds, navigate to a thank you page or back to home
    setTimeout(() => {
      navigate('/');
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-indigo-900 text-white">
      <Toaster />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Award className="h-16 w-16 text-amber-400" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-purple-400">
            Elite GTM Accelerator Program
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Exclusive high-touch partnership for founders ready to scale from $1M to $10M+ in revenue with our proven framework.
          </p>
          <Button 
            onClick={() => setShowApplication(true)}
            className="bg-gradient-to-r from-amber-500 to-purple-500 hover:from-amber-600 hover:to-purple-600 text-white px-8 py-6 text-lg rounded-lg shadow-lg"
            size="lg"
          >
            Apply For Consideration <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-4 md:px-8 bg-opacity-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Results Our Elite Partners Have Achieved
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center">
                  <TrendingUp className="mr-2 text-green-500" />
                  Revenue Growth
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold mb-2">$10M+</p>
                <p className="text-gray-400">Average revenue growth within 12 months of joining our program</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center">
                  <CheckCircle className="mr-2 text-green-500" />
                  Client Acquisition
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold mb-2">50+</p>
                <p className="text-gray-400">New enterprise clients secured through our proven GTM strategy</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center">
                  <Star className="mr-2 text-amber-400" />
                  ROI Multiple
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold mb-2">12x</p>
                <p className="text-gray-400">Average return on investment for program members</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            The Elite Accelerator Experience
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <CheckCircle className="mr-2 text-green-500" /> Custom GTM Strategy
              </h3>
              <p className="text-gray-300 mb-4">
                Work directly with our team to develop a tailored go-to-market strategy aligned with your unique value proposition and market position.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <span>Complete market analysis and competitive positioning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <span>Ideal customer profile development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <span>Customized outreach sequences that convert</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <CheckCircle className="mr-2 text-green-500" /> Executive Access
              </h3>
              <p className="text-gray-300 mb-4">
                Direct access to our executive team and network of industry leaders who have built and exited $100M+ companies.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <span>Monthly 1:1 strategy sessions with our CEO</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <span>Quarterly business review with our advisory board</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <span>Access to our private network of investors and partners</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <CheckCircle className="mr-2 text-green-500" /> Execution Support
              </h3>
              <p className="text-gray-300 mb-4">
                Our team becomes an extension of yours, handling critical aspects of implementation and optimization.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <span>Dedicated account manager and implementation team</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <span>Weekly progress tracking and optimization calls</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <span>Full tech stack implementation and integration</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <CheckCircle className="mr-2 text-green-500" /> Growth Acceleration
              </h3>
              <p className="text-gray-300 mb-4">
                Proven frameworks and resources to rapidly scale your business without the typical growing pains.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <span>Sales team training and enablement</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <span>Scalable hiring and onboarding systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                  <span>Fundraising support and investor connections</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 md:px-8 bg-opacity-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Investment Levels
          </h2>
          <p className="text-xl text-center mb-12 text-gray-300">
            Select the partnership level that aligns with your growth goals
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Standard Partnership</CardTitle>
                <p className="text-3xl font-bold mt-2">$5,000</p>
                <p className="text-gray-400">per month</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span>Custom GTM Strategy</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span>Monthly Strategy Calls</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span>Implementation Support</span>
                  </li>
                </ul>
                <Button 
                  className="w-full mt-6 bg-white text-gray-900 hover:bg-gray-200"
                  onClick={() => setShowApplication(true)}
                >
                  Apply Now
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-b from-amber-600 to-purple-700 border-amber-400 transform scale-105 shadow-xl">
              <div className="absolute -top-4 left-0 right-0 flex justify-center">
                <span className="bg-amber-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </span>
              </div>
              <CardHeader>
                <CardTitle>Premium Partnership</CardTitle>
                <p className="text-3xl font-bold mt-2">$10,000</p>
                <p className="text-gray-200">per month</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-white mr-2 mt-1" />
                    <span>Everything in Standard</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-white mr-2 mt-1" />
                    <span>Weekly Implementation Calls</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-white mr-2 mt-1" />
                    <span>Executive Network Access</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-white mr-2 mt-1" />
                    <span>Dedicated Account Manager</span>
                  </li>
                </ul>
                <Button 
                  className="w-full mt-6 bg-white text-gray-900 hover:bg-gray-200"
                  onClick={() => setShowApplication(true)}
                >
                  Apply Now
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Elite Partnership</CardTitle>
                <p className="text-3xl font-bold mt-2">$25,000</p>
                <p className="text-gray-400">per month</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span>Everything in Premium</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span>Full Team Implementation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span>1:1 Access to CEO</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1" />
                    <span>Investor Introductions</span>
                  </li>
                </ul>
                <Button 
                  className="w-full mt-6 bg-white text-gray-900 hover:bg-gray-200"
                  onClick={() => setShowApplication(true)}
                >
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Social Proof Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Success Stories
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gray-700 mr-4"></div>
                  <div>
                    <h4 className="font-bold">Sarah Johnson</h4>
                    <p className="text-sm text-gray-400">CEO, TechInnovate AI</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  "The Elite Accelerator program helped us go from $800K to $5.2M ARR in just 11 months. The strategies they implemented for our GTM were game-changing, and the network connections alone were worth the investment."
                </p>
                <div className="flex mt-4">
                  <Star className="text-amber-400 h-5 w-5" />
                  <Star className="text-amber-400 h-5 w-5" />
                  <Star className="text-amber-400 h-5 w-5" />
                  <Star className="text-amber-400 h-5 w-5" />
                  <Star className="text-amber-400 h-5 w-5" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gray-700 mr-4"></div>
                  <div>
                    <h4 className="font-bold">Michael Chen</h4>
                    <p className="text-sm text-gray-400">Founder, DataFlow Solutions</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  "We were stuck at $1.2M ARR for two years before joining. Within the first 90 days, we closed more enterprise deals than the previous year. Now at $9M ARR and still growing fast thanks to their framework."
                </p>
                <div className="flex mt-4">
                  <Star className="text-amber-400 h-5 w-5" />
                  <Star className="text-amber-400 h-5 w-5" />
                  <Star className="text-amber-400 h-5 w-5" />
                  <Star className="text-amber-400 h-5 w-5" />
                  <Star className="text-amber-400 h-5 w-5" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Application CTA */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our Elite Accelerator Program is application-only and we only work with founders who are ready to commit to rapid growth.
          </p>
          <Button 
            onClick={() => setShowApplication(true)}
            className="bg-gradient-to-r from-amber-500 to-purple-500 hover:from-amber-600 hover:to-purple-600 text-white px-8 py-6 text-lg rounded-lg shadow-lg"
            size="lg"
          >
            Apply For Consideration <ArrowRight className="ml-2" />
          </Button>
          <p className="text-sm text-gray-400 mt-4">
            We review applications within 48 hours and will contact you to schedule a qualification call if selected.
          </p>
        </div>
      </section>
      
      {/* Application Form Modal */}
      {showApplication && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <Card className="max-w-2xl w-full bg-gray-800 border-gray-700 max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Elite Accelerator Application</CardTitle>
                <Button 
                  variant="ghost" 
                  className="text-gray-400 hover:text-white"
                  onClick={() => setShowApplication(false)}
                >
                  &times;
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <ApplicationForm onSubmit={handleApplicationSubmit} />
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default EliteAccelerator;
