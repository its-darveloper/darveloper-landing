import React from 'react';
import { Instagram, Linkedin, Mail, Code } from 'lucide-react';

export const metadata = {
  title: 'darveloper.her - Coming Soon',
  description: 'Digital solutions portfolio - web development, automation, and design projects',
}

const ComingSoonPage = () => {
  return (
    <div className="min-h-screen bg-stone-50" style={{ backgroundColor: '#FAFAF9' }}>
      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <h1 
              className="text-6xl md:text-7xl font-light tracking-tight mb-4"
              style={{ color: '#2D4A3E' }}
            >
              darveloper.her
            </h1>
            <div 
              className="w-24 h-0.5 mx-auto"
              style={{ backgroundColor: '#52805E' }}
            ></div>
          </div>
          
          <p 
            className="text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto"
            style={{ color: '#5A6B5D' }}
          >
            A curated collection of digital solutions and creative projects
          </p>
        </div>

        {/* Coming Soon Card */}
        <div 
          className="bg-white rounded-lg p-12 mb-16 shadow-sm border border-gray-100"
          style={{ backgroundColor: '#F9F7F4' }}
        >
          <div className="text-center">
            <div className="mb-8">
              <div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
                style={{ backgroundColor: '#254D70' }}
              >
                <Code className="w-8 h-8 text-white" />
              </div>
              
              <h2 
                className="text-3xl font-light mb-4"
                style={{ color: '#2D4A3E' }}
              >
                Coming Soon
              </h2>
              
              <p 
                className="text-lg leading-relaxed max-w-lg mx-auto"
                style={{ color: '#78837B' }}
              >
                Currently crafting a portfolio showcasing development, automation solutions, 
                and design projects in Web2 and Web3. Stay tuned!
              </p>
            </div>
          </div>
        </div>



        {/* Social Links */}
        <div className="text-center">
          <p 
            className="text-sm mb-6"
            style={{ color: '#78837B' }}
          >
            Connect with me
          </p>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="mailto:darveloper@gmail.com"
              className="inline-flex items-center justify-center w-12 h-12 rounded-lg transition-colors hover:opacity-80"
              style={{ backgroundColor: '#254D70' }}
            >
              <Mail className="w-5 h-5 text-white" />
            </a>
            
            <a 
              href="https://instagram.com/darveloper.her" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-lg transition-colors hover:opacity-80"
              style={{ backgroundColor: '#254D70' }}
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/darlyze-calixte-0501a8117/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-lg transition-colors hover:opacity-80"
              style={{ backgroundColor: '#254D70' }}
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <div 
          className="text-center mt-16 pt-8 border-t"
          style={{ borderColor: '#F0EDE7' }}
        >
          <p 
            className="text-sm"
            style={{ color: '#78837B' }}
          >
            © 2025 darveloper.her
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;