import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { CalendarPlus, Mail, Link, Phone } from "lucide-react";

const StrategyCall = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    website: '',
    budget: '',
    timeline: '',
    reason: '',
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

  const handleRadioChange = (value: string, fieldName: string) => {
    setFormData(prev => ({ ...prev, [fieldName]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, agreeToTerms: checked }));
  };

  // Function to send data to GoHighLevel
  const sendToGoHighLevel = async (data) => {
    try {
      // Replace with your GoHighLevel webhook URL
      const ghlWebhookUrl = process.env.GOHIGHLEVEL_WEBHOOK_URL || "https://api.gohighlevel.com/webhook/v1/YOUR_WEBHOOK_ID";
      
      // Format the data according to GoHighLevel's expected structure
      const ghlData = {
        firstName: data.firstName,
        email: data.email,
        phone: data.phone,
        website: data.website,
        customField: {
          budget: data.budget,
          timeline: data.timeline,
          challenge: data.reason
        },
        tags: ["Strategy Call Request"]
      };
      
      // Send data to GoHighLevel
      const response = await fetch(ghlWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(ghlData)
      });
      
      if (!response.ok) {
        console.error('Failed to send data to GoHighLevel:', await response.text());
      } else {
        console.log('Successfully sent data to GoHighLevel');
      }
    } catch (error) {
      console.error('Error sending data to GoHighLevel:', error);
    }
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
        .from('maria_leads')
        .update({
          phone: formData.phone,
          website: formData.website,
          current_revenue: formData.budget,
          challenge: formData.reason,
          timeline: formData.timeline,
          booked_strategy_call: true
        })
        .eq('email', formData.email);
      
      if (error) throw error;
      
      // Send data to GoHighLevel
      await sendToGoHighLevel(formData);
      
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
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <Label htmlFor="firstName" className="block text-sm font-medium mb-1">Name</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                readOnly
                className="w-full bg-gray-100"
                placeholder="Full Name"
              />
            </div>
            
            {/* Work Email Field */}
            <div>
              <Label htmlFor="email" className="block text-sm font-medium mb-1">Work Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                readOnly
                className="w-full bg-gray-100"
                placeholder="Email"
              />
            </div>
            
            {/* Mobile Number Field */}
            <div>
              <Label htmlFor="phone" className="block text-sm font-medium mb-1">Mobile number *</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full pl-10"
                  placeholder="Phone"
                />
              </div>
            </div>
            
            {/* Website Field */}
            <div>
              <Label htmlFor="website" className="block text-sm font-medium mb-1">Website</Label>
              <div className="relative">
                <Link className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                <Input
                  id="website"
                  name="website"
                  type="url"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full pl-10"
                  placeholder="Web URL goes here"
                />
              </div>
            </div>
            
            {/* Budget Field */}
            <div>
              <Label className="block text-sm font-medium mb-3">What is your monthly budget for working with us</Label>
              <RadioGroup 
                value={formData.budget} 
                onValueChange={(value) => handleRadioChange(value, 'budget')}
                className="space-y-3"
                required
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Less than $6,000" id="budget-1" />
                  <Label htmlFor="budget-1">Less than $6,000</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="$6,000 to $20,000" id="budget-2" />
                  <Label htmlFor="budget-2">$6,000 to $20,000</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="$20,000 to $50,000" id="budget-3" />
                  <Label htmlFor="budget-3">$20,000 to $50,000</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="$50,000+" id="budget-4" />
                  <Label htmlFor="budget-4">$50,000+</Label>
                </div>
              </RadioGroup>
            </div>
            
            {/* Timeline Field */}
            <div>
              <Label className="block text-sm font-medium mb-3">When are you hoping to kickoff? (We are usually booked 4-6 weeks)</Label>
              <RadioGroup 
                value={formData.timeline} 
                onValueChange={(value) => handleRadioChange(value, 'timeline')}
                className="space-y-3"
                required
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Want to move as quickly as possible" id="timeline-1" />
                  <Label htmlFor="timeline-1">Want to move as quickly as possible</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Over next 4-6 weeks" id="timeline-2" />
                  <Label htmlFor="timeline-2">Over next 4-6 weeks</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Early in the process, not too urgent" id="timeline-3" />
                  <Label htmlFor="timeline-3">Early in the process, not too urgent</Label>
                </div>
              </RadioGroup>
            </div>
            
            {/* Reason Field */}
            <div>
              <Label htmlFor="reason" className="block text-sm font-medium mb-1">
                A few lines explaining why you reached out will help us understand how we can best help
              </Label>
              <Textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                required
                className="w-full min-h-[120px]"
                placeholder="Tell us about your current challenges and goals..."
              />
            </div>
            
            {/* Terms Checkbox */}
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
            
            {/* Submit Button */}
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
      
      {/* Success Dialog */}
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
