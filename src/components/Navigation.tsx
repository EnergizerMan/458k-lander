
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center py-2 px-4 bg-white shadow-sm">
        <Link to="/" className="font-bold text-navy">MariaGTM</Link>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden p-2 text-navy hover:text-blue-700"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-navy hover:text-blue-700">Home</Link>
          <Link to="/strategy-call" className="text-navy hover:text-blue-700">Strategy Call</Link>
          <Link to="/success" className="text-navy hover:text-blue-700">Success</Link>
          <Link to="/webinar" className="text-navy hover:text-blue-700">Webinar</Link>
        </div>
      </div>
      
      {/* Mobile navigation */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md z-50">
          <div className="flex flex-col py-2">
            <Link 
              to="/" 
              className="px-4 py-2 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/strategy-call" 
              className="px-4 py-2 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Strategy Call
            </Link>
            <Link 
              to="/success" 
              className="px-4 py-2 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Success
            </Link>
            <Link 
              to="/webinar" 
              className="px-4 py-2 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Webinar
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
