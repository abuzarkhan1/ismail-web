import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative w-full bg-[#0A0B0E]/80 backdrop-blur-sm">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-blue-500/20" />
      
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright section */}
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4 text-blue-400" />
            <span className="font-mono text-sm text-blue-400/70">
              © {currentYear} Ismail Azam. All rights reserved.
            </span>
          </div>
          
          {/* Middle section */}
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm text-blue-400/70">Made with</span>
            <Heart className="w-4 h-4 text-blue-400 animate-pulse" />
            <span className="font-mono text-sm text-blue-400/70">and</span>
            <Coffee className="w-4 h-4 text-blue-400" />
          </div>
          
          {/* Right section - Level indicator */}
          <div className="flex items-center gap-2">
            <div className="h-2 w-20 bg-blue-900/30 rounded-full overflow-hidden">
              <div className="h-full w-full bg-blue-400/50 animate-pulse rounded-full" />
            </div>
            <span className="font-mono text-xs text-blue-400/70">SYSTEM ONLINE</span>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .font-mono {
          font-family: monospace;
          letter-spacing: 0.1em;
        }
      `}</style>
    </footer>
  );
};

export default Footer;