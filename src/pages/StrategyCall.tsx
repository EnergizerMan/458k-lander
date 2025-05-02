
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { CalendarPlus, Mail } from "lucide-react";

const StrategyCall = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    companyName: '',
    currentRevenue: '',
    challenge: '',
    agreeToTerms: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Load data from localStorage if available
  useEffect(() => {
    const savedData = localStorage.getItem('leadData');
    if (savedData) {
      const { firstName, email } = JSON.parse(savedData);
      setFormData(prev => ({ ...prev, firstName, email }));
    } else {
      // If no data, redirect back to main page
      navigate('/');
    }
  }, [navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, agreeToTerms: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms) {
      toast({
        title: "Please agree to the terms",
        description: "You must agree to the terms before booking a call.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Update lead in database with additional info
      const { error } = await supabase
        .from('leads')
        .update({
          company_name: formData.companyName,
          current_revenue: formData.currentRevenue,
          challenge: formData.challenge,
          booked_strategy_call: true
        })
        .eq('email', formData.email);
      
      if (error) throw error;
      
      // Success! Show success modal
      setShowSuccess(true);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-12 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Book Your Free GTM Strategy Session
          </h1>
          <p className="text-lg text-gray-700">
            You're one step away from discovering how to apply the same pipeline-generating system to your business.
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-navy">Your Free Strategy Session Details</h2>
          
          <div className="mb-8 space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <CalendarPlus className="h-6 w-6 text-navy" />
              </div>
              <div>
                <h3 className="font-bold text-lg">30-Minute Zoom Call</h3>
                <p className="text-gray-700">We'll analyze your current GTM strategy and identify key opportunities for immediate pipeline growth.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Mail className="h-6 w-6 text-navy" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Custom Action Plan</h3>
                <p className="text-gray-700">You'll receive a personalized GTM action plan based on our analysis of your business needs.</p>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">First Name</label>
                <Input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  readOnly
                  className="w-full bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  readOnly
                  className="w-full bg-gray-100"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Company Name</label>
              <Input
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                className="w-full"
                placeholder="Your Company Name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Current Annual Revenue</label>
              <Input
                name="currentRevenue"
                value={formData.currentRevenue}
                onChange={handleChange}
                required
                className="w-full"
                placeholder="e.g., $1M - $5M"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Biggest GTM Challenge Right Now</label>
              <Textarea
                name="challenge"
                value={formData.challenge}
                onChange={handleChange}
                required
                className="w-full min-h-[100px]"
                placeholder="What's your biggest challenge with generating qualified pipeline?"
              />
            </div>
            
            <div className="flex items-start space-x-2 pt-2">
              <Checkbox 
                id="terms" 
                checked={formData.agreeToTerms}
                onCheckedChange={handleCheckboxChange}
              />
              <label htmlFor="terms" className="text-sm text-gray-700">
                I understand this is an application for a strategy session. I'm serious about improving my company's GTM and ready to implement.
              </label>
            </div>
            
            <Button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-cta hover:bg-amber-500 text-white font-bold py-4 px-4 rounded-md shadow-md transition-all transform hover:scale-[1.02] text-lg"
            >
              {isLoading ? 'Processing...' : '🗓️ Book My Strategy Call Now'}
            </Button>
            
            <p className="text-center text-xs text-gray-500 mt-2">
              Your information is secure and will not be shared with third parties.
            </p>
          </form>
        </div>
      </div>
      
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Your Strategy Call is Booked!</DialogTitle>
            <DialogDescription>
              We're excited to help you grow your pipeline!
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-6">
            <p className="text-center mb-4">
              Check your email for confirmation and calendar invite. Our team will reach out within 1 business day to schedule your call.
            </p>
            <p className="text-center text-sm text-gray-600">
              (For demo purposes, no actual email will be sent)
            </p>
          </div>
          
          <div className="flex justify-center">
            <Button onClick={() => navigate('/')} className="bg-navy">
              Return to Homepage
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StrategyCall;
