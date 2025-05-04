
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Clock, Calendar, FileText, Video } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import VideoEmbed from "@/components/VideoEmbed";
import { supabase } from "@/integrations/supabase/client";

const SuccessPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [purchaseCompleted, setPurchaseCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const formData = location.state?.formData || {};

  useEffect(() => {
    // If there's no formData, they didn't come from the booking form
    if (!formData || !formData.email) {
      navigate('/');
    }
  }, [formData, navigate]);

  const handlePurchase = async () => {
    setIsLoading(true);
    try {
      // Record purchase in database
      await supabase
        .from('conversions')
        .insert({
          user_id: null, // User is not logged in
          lead_id: null, // Don't have the lead ID in the frontend
          type: 'playbook_purchase',
          value: 44,
          source: 'oto_offer',
          metadata: {
            email: formData.email,
            product: 'Sales Playbook + Webinar'
          }
        });
      
      // Update success state
      setPurchaseCompleted(true);
      
      // In a real app, we would process payment here
      toast({
        title: "Purchase Successful!",
        description: "You'll receive your Elite Sales Playbook via email shortly.",
      });
      
      // Redirect to webinar page after 2 seconds
      setTimeout(() => {
        navigate('/webinar');
      }, 2000);
      
    } catch (error) {
      console.error('Error processing purchase:', error);
      toast({
        title: "Purchase Failed",
        description: "There was an issue processing your purchase. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Confirmation Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
            <CheckCircle2 className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Your Strategy Call is Confirmed!
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We're excited to help you grow your pipeline! Check your email for the calendar invitation.
            Our team will reach out within 1 business day to confirm the details.
          </p>
        </div>

        {/* What to expect section */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">What Happens Next</CardTitle>
              <CardDescription>Here's what you can expect before our strategy call</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-navy" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Calendar Invitation</h3>
                  <p className="text-gray-700">You'll receive a calendar invitation for your 30-minute strategy session within 1 business day.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-navy" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Pre-Call Preparation</h3>
                  <p className="text-gray-700">We'll review your business information before the call to maximize our time together.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FileText className="h-6 w-6 text-navy" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Custom Action Plan</h3>
                  <p className="text-gray-700">During our call, we'll develop a customized GTM strategy specifically for your business.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Video Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Watch While You Wait</h2>
          <VideoEmbed videoId="Yh12Udz8lwc" title="Our Approach to Pipeline Generation" />
        </div>

        {/* OTO Section */}
        {!purchaseCompleted ? (
          <Card className="border-2 border-cta mb-8">
            <CardHeader className="bg-cta text-white">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl md:text-3xl">SPECIAL ONE-TIME OFFER</CardTitle>
                  <CardDescription className="text-white opacity-90">
                    Only available right now, don't miss it!
                  </CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-lg line-through opacity-70">$197</div>
                  <div className="text-3xl font-bold">$44</div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Elite Sales Playbook + Instant Training Webinar</h3>
                  <p className="mb-4">
                    Get immediate access to our proven sales methodology that has generated 
                    millions in pipeline for B2B companies just like yours.
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Complete GTM framework used by top-performing companies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Ready-to-use templates for outreach, follow-ups, and objection handling</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>90-minute training webinar with immediate access</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Delivered instantly to your inbox</span>
                    </li>
                  </ul>
                  
                  <Button 
                    onClick={handlePurchase}
                    disabled={isLoading}
                    className="w-full bg-cta hover:bg-amber-500 text-white font-bold py-4 px-4 rounded-md shadow-md transition-all transform hover:scale-[1.02] text-lg"
                  >
                    {isLoading ? 'Processing...' : 'Get Instant Access for $44'}
                  </Button>
                  
                  <p className="text-center text-xs text-gray-500 mt-2">
                    Secure payment - Instant delivery - 30-day money-back guarantee
                  </p>
                </div>
                
                <div className="flex flex-col justify-center items-center">
                  <div className="bg-gray-100 p-8 rounded-lg w-full">
                    <div className="flex items-center justify-center mb-4">
                      <FileText className="h-16 w-16 text-navy" />
                      <span className="mx-4 text-3xl">+</span>
                      <Video className="h-16 w-16 text-navy" />
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-lg">67-Page Playbook + Full Training</h4>
                      <p className="text-gray-600 mb-4">Start implementing these strategies immediately</p>
                      <div className="text-sm bg-yellow-100 p-3 rounded">
                        <span className="font-bold">Limited Time Offer</span>: This special price is only available right now!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="border-2 border-green-500 mb-8">
            <CardHeader className="bg-green-500 text-white">
              <CardTitle className="text-2xl">Thank You For Your Purchase!</CardTitle>
              <CardDescription className="text-white opacity-90">
                Redirecting you to the webinar...
              </CardDescription>
            </CardHeader>
          </Card>
        )}
        
        {/* Return to Home */}
        <div className="text-center">
          <Button onClick={() => navigate('/')} variant="outline">
            Return to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
