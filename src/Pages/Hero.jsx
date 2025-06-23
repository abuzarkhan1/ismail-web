import { useEffect, useState, useRef } from 'react';
import { 
  Gamepad, 
  Code,
  Target,
  Sparkles,
  Terminal,
  Trophy,
  Star
} from 'lucide-react';

const HeroSection = ({ setActiveSection }) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const fullName = 'ISMAIL AZAM';
  
  // Typing effect for the name
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullName.substring(0, index));
      index++;
      
      if (index > fullName.length) {
        index = 0;
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(interval);
  }, []);

  // Loading progress effect
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prev => prev < 100 ? prev + 1 : prev);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const handleNavigation = (section) => {
    setActiveSection(section);
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#0A0B0E] overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid grid-cols-[repeat(auto-fill,minmax(50px,1fr))] grid-rows-[repeat(auto-fill,minmax(50px,1fr))] opacity-20">
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i} className="border border-blue-500/5" />
        ))}
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-blue-900/20" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-screen flex flex-col justify-center">
        {/* Top status bar */}
        <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Terminal className="w-5 h-5 text-blue-400" />
            <div className="h-1 w-48 bg-blue-900/30 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-400/50 rounded-full transition-all duration-300"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400/70 font-mono text-sm">SYSTEM ACTIVE</span>
          </div>
        </div>

        {/* Hero content */}
        <div className="space-y-8 text-center">
          {/* Animated title */}
          <div className="inline-flex items-center gap-4 text-blue-400/70 font-mono text-lg">
            <Sparkles className="w-5 h-5 animate-pulse" />
            <span>GAME DEVELOPER & GAME DESIGNER</span>
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>

          {/* Animated name */}
          <h1 className="text-7xl font-bold text-blue-400 font-mono tracking-tight">
            {displayText}
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-blue-400/70 font-mono max-w-2xl mx-auto">
            CRAFTING DIGITAL EXPERIENCES AND INNOVATIVE SOLUTIONS
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
            {[
              { icon: Code, label: "PROJECTS", value: "15+" },
              { icon: Star, label: "SATISFIED CLIENTS", value: "10+" },
              { icon: Trophy, label: "AWARDS", value: "5+" },
              { icon: Target, label: "ACCURACY", value: "99%" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="relative group"
              >
                {/* Stat card background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1b2e] to-[#141428] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Stat content */}
                <div className="relative p-6 flex flex-col items-center gap-2">
                  <stat.icon className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-3xl font-bold text-white">{stat.value}</span>
                  <span className="text-sm text-blue-400/70 font-mono">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex justify-center gap-6 mt-12">
            <button 
              onClick={() => handleNavigation('services')}
              className="px-8 py-3 bg-blue-500/10 border border-blue-400/30 text-blue-400 font-mono rounded-lg hover:bg-blue-400/20 transition-colors duration-300"
            >
              VIEW PROJECTS
            </button>
            <button 
              onClick={() => handleNavigation('contact')}
              className="px-8 py-3 bg-blue-400/10 border border-blue-400/30 text-blue-400 font-mono rounded-lg hover:bg-blue-400/20 transition-colors duration-300"
            >
              CONTACT ME
            </button>
          </div>
        </div>

      </div>

      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s linear infinite`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translate(0, 0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;