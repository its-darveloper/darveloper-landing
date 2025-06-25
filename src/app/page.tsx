'use client';

import React, { useState } from 'react';
import { Instagram, Linkedin, Mail, Code, Sun, Moon } from 'lucide-react';

const ComingSoonPage = () => {
  const [isDark, setIsDark] = useState(false);
  
  const toggleDarkMode = () => setIsDark(!isDark);
  
  // Color scheme based on modern dark mode best practices
  const colors = {
    // Backgrounds
    bg: isDark ? '#0A0A0A' : '#FAFAF9',
    cardBg: isDark ? '#1A1A1A' : '#F9F7F4',
    
    // Text hierarchy
    primary: isDark ? '#FFFFFF' : '#2D4A3E',
    secondary: isDark ? '#E5E5E5' : '#5A6B5D', 
    tertiary: isDark ? '#A3A3A3' : '#78837B',
    
    // Brand accents
    accent: '#52805E', // Keep brand green consistent
    accentLight: isDark ? '#6B9975' : '#52805E',
    
    // Interactive elements
    buttonBg: isDark ? '#52805E' : '#254D70',
    buttonHover: isDark ? '#6B9975' : '#1E3A56',
    
    // Borders and dividers
    border: isDark ? '#2A2A2A' : '#F0EDE7',
    divider: isDark ? '#333333' : '#F0EDE7',
    
    // Special elements
    toggleBg: isDark ? '#2A2A2A' : '#FFFFFF',
    toggleShadow: isDark ? '0 4px 12px rgba(0, 0, 0, 0.3)' : '0 4px 12px rgba(45, 74, 62, 0.1)'
  };

  return (
    <div className="min-h-screen transition-colors duration-300" style={{ backgroundColor: colors.bg }}>
      {/* Dark Mode Toggle */}
      <div className="absolute top-6 right-6 z-10">
        <button
          onClick={toggleDarkMode}
          className="inline-flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50"
          style={{ 
            backgroundColor: colors.toggleBg,
            boxShadow: colors.toggleShadow,
            color: isDark ? '#A3A3A3' : '#2D4A3E',
            '--tw-ring-color': colors.accent
          } as React.CSSProperties}
          aria-label="Toggle dark mode"
        >
          {isDark ? (
            <Sun className="w-5 h-5 transition-transform duration-300" />
          ) : (
            <Moon className="w-5 h-5 transition-transform duration-300" />
          )}
        </button>
      </div>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <h1 
              className="text-6xl md:text-7xl font-light tracking-tight mb-2 transition-colors duration-300"
              style={{ color: colors.primary }}
            >
              Darveloper
            </h1>
            <p 
              className="text-lg font-light mb-4 transition-colors duration-300"
              style={{ color: colors.tertiary }}
            >
              darveloper.xyz
            </p>
            <div 
              className="w-24 h-0.5 mx-auto transition-colors duration-300"
              style={{ backgroundColor: colors.accentLight }}
            ></div>
          </div>
          
          <p 
            className="text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto transition-colors duration-300"
            style={{ color: colors.secondary }}
          >
            A curated collection of digital solutions and creative projects
          </p>
        </div>

        {/* Coming Soon Card */}
        <div 
          className="rounded-2xl p-12 mb-16 transition-all duration-300"
          style={{ 
            backgroundColor: colors.cardBg,
            border: `1px solid ${colors.border}`,
            boxShadow: isDark 
              ? '0 8px 32px rgba(0, 0, 0, 0.3)' 
              : '0 8px 32px rgba(45, 74, 62, 0.08)'
          }}
        >
          <div className="text-center">
            <div className="mb-8">
              <div 
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-300"
                style={{ 
                  backgroundColor: colors.buttonBg,
                  boxShadow: isDark 
                    ? '0 4px 16px rgba(82, 128, 94, 0.3)' 
                    : '0 4px 16px rgba(37, 77, 112, 0.2)'
                }}
              >
                <Code className="w-8 h-8 text-white" />
              </div>
              
              <h2 
                className="text-3xl font-light mb-4 transition-colors duration-300"
                style={{ color: colors.primary }}
              >
                Coming Soon
              </h2>
              
              <p 
                className="text-lg leading-relaxed max-w-lg mx-auto transition-colors duration-300"
                style={{ color: colors.secondary }}
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
            className="text-sm mb-6 transition-colors duration-300"
            style={{ color: colors.tertiary }}
          >
            Connect with me
          </p>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="mailto:hello@darveloper.xyz"
              className="inline-flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50"
              style={{ 
                backgroundColor: colors.buttonBg,
                '--tw-ring-color': colors.accent
              } as React.CSSProperties}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.buttonHover}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.buttonBg}
            >
              <Mail className="w-5 h-5 text-white" />
            </a>
            
            <a 
              href="https://instagram.com/darveloper.her" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50"
              style={{ 
                backgroundColor: colors.buttonBg,
                '--tw-ring-color': colors.accent
              } as React.CSSProperties}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.buttonHover}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.buttonBg}
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/darlyze-calixte-0501a8117/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50"
              style={{ 
                backgroundColor: colors.buttonBg,
                '--tw-ring-color': colors.accent
              } as React.CSSProperties}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.buttonHover}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.buttonBg}
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <div 
          className="text-center mt-16 pt-8 border-t transition-colors duration-300"
          style={{ borderColor: colors.divider }}
        >
          <p 
            className="text-sm transition-colors duration-300"
            style={{ color: colors.tertiary }}
          >
            © 2025 Darveloper
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;