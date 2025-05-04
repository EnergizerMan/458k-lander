
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import VideoEmbed from "@/components/VideoEmbed";
import { CheckCircle, ArrowRight } from "lucide-react";

const SuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData || {};
  
  const [agreed, setAgreed] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState({
    name: formData.name || '',
    email: formData.email || '',
    cardNumber: '',
    expiry: '',
    cvc: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process payment here
    navigate('/webinar'); // Navigate to webinar page after successful purchase
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Your Strategy Call is Confirmed!
          </h1>
          <p className="text-lg text-gray-700 mb-2">
            We've sent a confirmation email to: <strong>{formData.email}</strong>
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 max-w-xl mx-auto mt-6">
            <h2 className="text-xl font-bold text-amber-800 mb-2">ONE-TIME OFFER</h2>
            <p className="text-amber-700">
              This special offer is only available right now and won't be offered again.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              Elite Sales Playbook + Fast Implementation Webinar
            </h2>
            <p className="text-gray-700 mb-4">
              Get immediate access to our proven sales system that generated $458k in new pipeline in just 30 days.
            </p>
            
            <VideoEmbed 
              videoId="Yh12Udz8lwc" 
              title="Elite Sales Playbook Preview" 
              description="Watch this preview of what you'll get in the full training"
            />

            <div className="mt-6 bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-navy mb-2">What You'll Get:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Complete Sales Playbook (67-page PDF)</li>
                <li>Proven Outreach Templates</li>
                <li>Fast Implementation Webinar</li>
                <li>Implementation Checklist</li>
                <li>Private Community Access</li>
              </ul>
            </div>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Complete Your Purchase</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={paymentInfo.name} 
                      onChange={handleInputChange} 
                      required 
                      placeholder="Your Full Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={paymentInfo.email} 
                      onChange={handleInputChange} 
                      required 
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="cardNumber" className="block text-sm font-medium mb-1">Card Number</label>
                    <Input 
                      id="cardNumber" 
                      name="cardNumber" 
                      value={paymentInfo.cardNumber} 
                      onChange={handleInputChange} 
                      required 
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="expiry" className="block text-sm font-medium mb-1">Expiry Date</label>
                      <Input 
                        id="expiry" 
                        name="expiry" 
                        value={paymentInfo.expiry} 
                        onChange={handleInputChange} 
                        required 
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label htmlFor="cvc" className="block text-sm font-medium mb-1">CVC</label>
                      <Input 
                        id="cvc" 
                        name="cvc" 
                        value={paymentInfo.cvc} 
                        onChange={handleInputChange} 
                        required 
                        placeholder="123"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 mt-4">
                    <Checkbox 
                      id="terms" 
                      checked={agreed} 
                      onCheckedChange={(checked) => setAgreed(checked === true)}
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the terms and conditions
                    </label>
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      className="w-full bg-green-600 hover:bg-green-700"
                      disabled={!agreed}
                    >
                      Get Instant Access - $49.99 <ArrowRight className="ml-2" />
                    </Button>
                  </div>
                  
                  <p className="text-xs text-gray-500 text-center mt-2">
                    Secure payment processed via SSL encryption
                  </p>
                </form>
              </CardContent>
            </Card>
            
            <div className="mt-4 bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="flex items-start">
                <div className="shrink-0">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-700">
                    <strong>30-Day Money-Back Guarantee:</strong> If you don't see value in our playbook, simply email us for a full refund.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
