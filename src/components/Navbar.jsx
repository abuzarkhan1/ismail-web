import React from 'react';
import { Gamepad, Target, Heart, Code, Coffee } from 'lucide-react';

const Navbar = ({ activeSection, setActiveSection }) => {
  const NavButton = ({ section, children }) => (
    <button
      onClick={() => setActiveSection(section)}
      className={`
        relative px-6 py-2 font-mono uppercase tracking-wider text-sm
        transition-all duration-300 group overflow-hidden
        ${activeSection === section
          ? 'text-blue-400 bg-[#0A0B0E] shadow-lg shadow-blue-500/20'
          : 'text-blue-400/70 hover:text-blue-400'
        }
      `}
    >
      {/* Button background */}
      <div className={`
        absolute inset-0 opacity-0 group-hover:opacity-100
        transition-opacity duration-300
        ${activeSection === section ? 'opacity-100' : ''}
        bg-[#0A0B0E]/80 backdrop-blur-sm
      `} />
      
      {/* Button content */}
      <span className="relative z-10">{children}</span>
      
      {/* Active indicator */}
      {activeSection === section && (
        <>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-blue-900/30 rounded-full overflow-hidden">
            <div className="h-full w-full bg-blue-400/50 animate-pulse rounded-full" />
          </div>
        </>
      )}
    </button>
  );

  return (
    <nav className="fixed top-0 w-full z-50">
      {/* Background with blur */}
      <div className="absolute inset-0 bg-[#0A0B0E]/80 backdrop-blur-sm" />
      
      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Code className="w-5 h-5 text-blue-400" />
            <span className="text-xl font-mono text-blue-400/70">
              ISMAIL AZAM
            </span>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-1">
            <NavButton section="hero">Home</NavButton>
            <NavButton section="about">About</NavButton>
            <NavButton section="skills">Skills</NavButton>
            <NavButton section="services">Projects</NavButton>
            <NavButton section="contact">Contact</NavButton>
          </div>

          {/* Stats indicator */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-blue-400 animate-pulse" />
              <Coffee className="w-4 h-4 text-blue-400" />
            </div>
            <div className="h-2 w-20 bg-blue-900/30 rounded-full overflow-hidden">
              <div className="h-full w-full bg-blue-400/50 animate-pulse rounded-full" />
            </div>
            <span className="text-blue-400/70 font-mono text-xs">ONLINE</span>
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-blue-500/20" />
      
      <style jsx>{`
        .font-mono {
          font-family: monospace;
          letter-spacing: 0.1em;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;