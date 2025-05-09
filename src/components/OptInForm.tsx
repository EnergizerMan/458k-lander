
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { MariaLeadInsert } from '@/types/supabase-extensions';

const OptInForm = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Store user data in Supabase maria_leads table
      const leadData: MariaLeadInsert = {
        first_name: firstName,
        email,
        source: 'playbook_optin'
      };
      
      const { error } = await supabase
        .from('maria_leads')
        .insert(leadData);
      
      if (error) throw error;
      
      // Show success message
      toast({
        title: "Success!",
        description: "Your playbook is on its way to your inbox!",
      });
      
      // Store form data in localStorage for use on next page
      localStorage.setItem('leadData', JSON.stringify({ firstName, email }));
      
      // Redirect to strategy call page - extending the timeout slightly
      setTimeout(() => {
        console.log('Navigating to /strategy-call');
        navigate('/strategy-call');
      }, 2000);
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
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">Get Instant Access</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="w-full p-3 border rounded-md"
          />
        </div>
        <div>
          <Input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border rounded-md"
          />
        </div>
        <Button 
          type="submit" 
          disabled={isLoading}
          className="w-full bg-cta hover:bg-amber-500 text-white font-bold py-3 px-4 rounded-md shadow-md transition-all transform hover:scale-[1.02] text-lg"
        >
          {isLoading ? 'Sending...' : '🚀 Send Me the Playbook'}
        </Button>
        <p className="text-center text-sm text-gray-600">
          Instant access. No fluff — just what worked.
        </p>
        <p className="text-center text-xs text-gray-500 mt-2">
          🔒 100% secure. We respect your inbox.
        </p>
      </form>
    </div>
  );
};

export default OptInForm;
