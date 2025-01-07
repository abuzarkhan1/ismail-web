import React from 'react';
import { Gamepad, Target } from 'lucide-react';

const Navbar = ({ activeSection, setActiveSection }) => {
  const NavButton = ({ section, children }) => (
    <button
      onClick={() => setActiveSection(section)}
      className={`
        relative px-6 py-2 font-mono uppercase tracking-wider text-sm
        transition-all duration-300 group overflow-hidden
        ${activeSection === section
          ? 'text-blue-400 bg-[#1a1b2e] shadow-lg shadow-blue-500/20'
          : 'text-blue-400/70 hover:text-blue-400'
        }
      `}
    >
      {/* Button background */}
      <div className={`
        absolute inset-0 opacity-0 group-hover:opacity-100
        transition-opacity duration-300
        ${activeSection === section ? 'opacity-100' : ''}
        bg-gradient-to-r from-[#1a1b2e] to-[#141428]
      `} />
      
      {/* Button content */}
      <span className="relative z-10">{children}</span>
      
      {/* Active indicator */}
      {activeSection === section && (
        <>
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400/30" />
          <div className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-blue-400 animate-pulse" />
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
            <Gamepad className="w-6 h-6 text-blue-400" />
            <span className="text-xl font-bold font-mono text-blue-400">
              ISMAIL AZAM
            </span>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-1">
            <NavButton section="hero">Home</NavButton>
            <NavButton section="about">About</NavButton>
            <NavButton section="skills">Skills</NavButton>
            <NavButton section="services">Services</NavButton>
            <NavButton section="contact">Contact</NavButton>
          </div>

          {/* Stats indicator */}
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-mono text-sm">LEVEL 99</span>
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