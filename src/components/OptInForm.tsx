
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

const OptInForm = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsLoading(false);
      // Show success message
      toast({
        title: "Success!",
        description: "Your playbook is on its way to your inbox!",
      });
      
      // Reset form
      setFirstName('');
      setEmail('');
      
      // In a real implementation, you would redirect to Page 2
      // window.location.href = "/strategy-call";
    }, 1500);
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
