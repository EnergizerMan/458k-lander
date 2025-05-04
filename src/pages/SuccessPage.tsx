
import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Calendar, ArrowRight } from "lucide-react";

const SuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData || {};
  
  return (
    <div className="min-h-screen bg-gray-50 py-0">
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="text-center mb-8">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Congratulations!
          </h1>
          <p className="text-lg text-gray-700">
            Your strategy session has been successfully booked.
          </p>
          <p className="text-gray-700">
            We've sent a confirmation email to: <strong>{formData.email}</strong>
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" /> 
              Next Steps
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Check your email for the calendar invite and details for your strategy session.
              </li>
              <li>
                Prepare any questions or specific challenges you'd like to discuss during the call.
              </li>
              <li>
                Be ready to explore how our GTM system can transform your pipeline generation.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Explore Additional Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Want to dive deeper before our call? Check out these resources:
            </p>
            <Button asChild variant="secondary">
              <Link to="/webinar" className="flex items-center">
                Watch the Full Training Webinar <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Button onClick={() => navigate('/')} variant="outline">
            Return to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
