
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const EliteAcceleratorCTA = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-indigo-900 text-white p-8 rounded-xl shadow-lg my-8">
      <div className="flex flex-col items-start md:flex-row md:items-center md:justify-between">
        <div className="mb-6 md:mb-0 md:mr-6">
          <h3 className="text-2xl font-bold mb-2">Ready for Accelerated Growth?</h3>
          <p className="text-gray-300">
            Join our exclusive Elite GTM Accelerator Program for founders ready to scale from $1M to $10M+ ARR.
          </p>
        </div>
        <Link to="/elite-accelerator">
          <Button className="bg-cta hover:bg-blue-600 text-white px-6">
            Apply Now <ArrowRight className="ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default EliteAcceleratorCTA;
