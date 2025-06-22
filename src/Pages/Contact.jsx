import React, { useEffect, useState } from 'react';
import { 
  Gamepad, 
  Code,
  Terminal,
  Mail,
  Phone,
  Instagram,
  Linkedin,
  ExternalLink,
  Sparkles,
  Trophy,
  Target
} from 'lucide-react';

const ContactSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const title = 'CONNECT WITH ME';
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(title.substring(0, index));
      index++;
      
      if (index > title.length) {
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

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prev => prev < 100 ? prev + 1 : prev);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      title: "EMAIL",
      value: "iazam84670@gmail.com",
      link: "mailto:iazam84670@gmail.com"
    },
    {
      icon: Phone,
      title: "PHONE",
      value: "+923158802640",
      link: "tel:+923158802640"
    },
    {
      icon: Linkedin,
      title: "LINKEDIN",
      value: "@yourlinkedin",
      link: "https://linkedin.com/in/yourprofile"
    },
    {
      icon: Instagram,
      title: "INSTAGRAM",
      value: "Syed Ismail Azam",
      link: "https://instagram.com/syedis6"
    }
  ];

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
      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen py-24">
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
            <span className="text-blue-400/70 font-mono text-sm">COMMS ACTIVE</span>
          </div>
        </div>

        {/* Contact content */}
        <div className="space-y-12 text-center pt-16">
          {/* Animated title */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-4 text-blue-400/70 font-mono text-lg">
              <Sparkles className="w-5 h-5 animate-pulse" />
              <span>COMMUNICATION CHANNELS</span>
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>

            <h1 className="text-5xl font-bold text-blue-400 font-mono tracking-tight">
              {displayText}
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
            </h1>
          </div>

          {/* Contact grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="relative group transform hover:scale-105 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1b2e] to-[#141428] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative bg-blue-900/20 p-6 rounded-xl border border-blue-500/30 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-950/50 rounded-lg group-hover:scale-110 transition-transform">
                      <info.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    
                    <div className="space-y-2 text-left">
                      <h3 className="font-mono text-blue-400 flex items-center gap-2">
                        <span className="text-xs text-blue-500">[</span>
                        {info.title}
                        <span className="text-xs text-blue-500">]</span>
                      </h3>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-blue-100 hover:text-blue-400 transition-colors group"
                        >
                          <span className="relative">
                            {info.value}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
                          </span>
                          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      ) : (
                        <p className="text-blue-100">{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Response time card */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1b2e] to-[#141428] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative bg-blue-900/20 p-8 rounded-xl border border-blue-500/30 backdrop-blur-sm text-center">
                <h3 className="text-blue-400 font-mono text-xl mb-4 flex items-center justify-center gap-2">
                  <Target className="w-6 h-6 animate-pulse" />
                  RESPONSE TIME
                </h3>
                <p className="text-blue-100/80 font-mono space-y-2">
                  <span className="block">Average response time: 1 hour</span>
                  <span className="block text-green-400">Available for new quests and collaborations</span>
                </p>
              </div>
            </div>
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

export default ContactSection;