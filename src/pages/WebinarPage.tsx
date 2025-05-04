
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, ExternalLink, Monitor } from "lucide-react";

const WebinarPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-0 px-4">
      <div className="max-w-4xl mx-auto py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Your Elite Sales Playbook & Training
          </h1>
          <p className="text-lg text-gray-700">
            Access your full training webinar and download your playbook below.
          </p>
        </div>

        {/* Video Webinar Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Monitor className="mr-2 h-6 w-6" /> 
              Training Webinar
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full mb-4">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  src="https://www.youtube.com/embed/Yh12Udz8lwc"
                  title="Elite Sales Training Webinar"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
            </div>
            <div className="text-sm bg-blue-50 p-4 rounded-lg">
              <p className="font-medium">Webinar Contents:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Introduction to the Elite Sales Framework (00:00 - 10:15)</li>
                <li>Identifying Your Ideal Customer Profile (10:16 - 22:30)</li>
                <li>Creating Compelling Outreach Messages (22:31 - 37:45)</li>
                <li>Handling Common Objections (37:46 - 52:20)</li>
                <li>Closing Strategies for Complex Sales (52:21 - 1:15:40)</li>
                <li>Q&A and Implementation Tips (1:15:41 - end)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Downloadable Resources */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2 h-6 w-6" /> 
              Your Elite Sales Playbook
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center">
                <FileText className="h-8 w-8 text-navy mr-3" />
                <div>
                  <h3 className="font-bold">Elite Sales Playbook.pdf</h3>
                  <p className="text-sm text-gray-600">67 pages - 4.2 MB</p>
                </div>
              </div>
              <Button className="bg-cta">
                <Download className="mr-2 h-4 w-4" /> Download
              </Button>
            </div>

            <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center">
                <FileText className="h-8 w-8 text-navy mr-3" />
                <div>
                  <h3 className="font-bold">Outreach Templates.docx</h3>
                  <p className="text-sm text-gray-600">15 pages - 1.8 MB</p>
                </div>
              </div>
              <Button className="bg-cta">
                <Download className="mr-2 h-4 w-4" /> Download
              </Button>
            </div>

            <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center">
                <FileText className="h-8 w-8 text-navy mr-3" />
                <div>
                  <h3 className="font-bold">Implementation Checklist.pdf</h3>
                  <p className="text-sm text-gray-600">3 pages - 0.5 MB</p>
                </div>
              </div>
              <Button className="bg-cta">
                <Download className="mr-2 h-4 w-4" /> Download
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Additional Resources */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Additional Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
                <div>
                  <h3 className="font-bold">Book a Follow-Up Call</h3>
                  <p className="text-sm text-gray-600">Questions after implementing? Schedule a quick call.</p>
                </div>
                <Button variant="outline" className="flex items-center">
                  <ExternalLink className="mr-2 h-4 w-4" /> Schedule
                </Button>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
                <div>
                  <h3 className="font-bold">Private Community Access</h3>
                  <p className="text-sm text-gray-600">Join our community of sales professionals.</p>
                </div>
                <Button variant="outline" className="flex items-center">
                  <ExternalLink className="mr-2 h-4 w-4" /> Join Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Return to Success Page */}
        <div className="text-center">
          <Button onClick={() => navigate('/success')} variant="outline" className="mr-4">
            Back to Success Page
          </Button>
          <Button onClick={() => navigate('/')} variant="outline">
            Return to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WebinarPage;
