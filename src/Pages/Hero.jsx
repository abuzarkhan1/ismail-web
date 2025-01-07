import { useEffect, useState, useRef } from 'react';
import { 
  Gamepad, 
  Sword, 
  Shield, 
  Crosshair, 
  Skull, 
  Heart, 
  Zap, 
  Trophy,
  Target,
  Sparkles,
  Crown,
  Flame
} from 'lucide-react';

// Floating Icons Component
const FloatingIcons = () => {
  const [icons, setIcons] = useState([]);
  
  const iconComponents = [
    { component: Gamepad, color: 'text-purple-400'  },
    { component: Sword, color: 'text-red-400'  },
    { component: Shield, color: 'text-blue-400' },
    { component: Crosshair, color: 'text-green-400' },
    { component: Skull, color: 'text-gray-400' },
    { component: Heart, color: 'text-pink-400' },
    { component: Zap, color: 'text-yellow-400' },
    { component: Trophy, color: 'text-amber-400' },
    { component: Target, color: 'text-cyan-400' },
    { component: Sparkles, color: 'text-fuchsia-400' },
    { component: Crown, color: 'text-orange-400' },
    { component: Flame, color: 'text-rose-400' }
  ];

  const createIcon = () => {
    const randomIcon = iconComponents[Math.floor(Math.random() * iconComponents.length)];
    const startX = Math.random() * 100;
    const duration = 7000 + Math.random() * 5000;
    const size = 16 + Math.floor(Math.random() * 16);

    const newIcon = {
      id: Date.now(),
      Icon: randomIcon.component,
      color: randomIcon.color,
      style: {
        left: `${startX}%`,
        animationDuration: `${duration}ms`,
        width: `${size}px`,
        height: `${size}px`
      }
    };

    setIcons(prev => [...prev, newIcon]);

    setTimeout(() => {
      setIcons(prev => prev.filter(icon => icon.id !== newIcon.id));
    }, duration);
  };

  useEffect(() => {
    const interval = setInterval(createIcon, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ id, Icon, color, style }) => (
        <div
          key={id}
          className={`absolute animate-float opacity-30 ${color}`}
          style={style}
        >
          <Icon />
        </div>
      ))}
      
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float linear forwards;
        }
      `}</style>
    </div>
  );
};

// Main Hero Section Component
const HeroSection = ({ setActiveSection }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [powerLevel, setPowerLevel] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const audioRef = useRef(null);
  const fullName = 'ISMAIL AZAM';

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setPowerLevel(prev => (prev < 100 ? prev + 1 : prev));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    const typingDelay = 150;

    const typeNextCharacter = () => {
      if (currentIndex < fullName.length) {
        setDisplayText(fullName.substring(0, currentIndex + 1));
        if (audioRef.current) {
          audioRef.current.currentTime = 0;
          audioRef.current.play().catch(e => console.log('Audio play failed:', e));
        }
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        setShowCursor(false);
      }
    };

    const typingInterval = setInterval(typeNextCharacter, typingDelay);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    if (isTypingComplete) return;

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, [isTypingComplete]);

  return (
    <section className="relative min-h-screen bg-[#0A0B0E] flex items-center justify-center px-4">
      <FloatingIcons />
      
      <audio ref={audioRef} className="hidden">
        <source src="/typing-sound.mp3" type="audio/mpeg" />
      </audio>

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-indigo-900/20" />
      </div>

      <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <Heart className="w-5 h-5 text-red-400" />
            <div className="w-24 h-2 bg-gray-800/50 rounded-full ml-2">
              <div className="h-full bg-red-400 rounded-full w-full" />
            </div>
          </div>
          <div className="flex items-center">
            <Zap className="w-5 h-5 text-yellow-400" />
            <div className="w-24 h-2 bg-gray-800/50 rounded-full ml-2">
              <div 
                className="h-full bg-yellow-400 rounded-full transition-all duration-500"
                style={{ width: `${powerLevel}%` }}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-yellow-400" />
          <span className="text-yellow-400 font-mono">9999</span>
        </div>
      </div>

      <div className="relative w-full max-w-5xl">
        <div className="absolute -top-4 -left-4">
          <Gamepad className="w-8 h-8 text-blue-400" />
        </div>
        <div className="absolute -top-4 -right-4">
          <Sword className="w-8 h-8 text-blue-400" />
        </div>
        <div className="absolute -bottom-4 -left-4">
          <Shield className="w-8 h-8 text-blue-400" />
        </div>
        <div className="absolute -bottom-4 -right-4">
          <Target className="w-8 h-8 text-blue-400" />
        </div>

        <div className="relative rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1b2e] to-[#141428]" />
          
          <div className="relative px-8 py-16">
            <div className="text-center mb-16">
              <div className="text-blue-400 text-xl font-mono mb-6 flex items-center justify-center gap-2">
                ✦ // WELCOME TO THE GAME // ✦
              </div>
              <h1 className="text-6xl font-bold text-blue-400 font-mono mb-4 flex items-center justify-center">
                <span>{displayText}</span>
                <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
              </h1>
              <div className="text-blue-500 text-xl font-mono">
                [MASTER OF DIGITAL REALMS]
              </div>
              <div className="text-blue-400/80 mt-8 font-mono">
                QUEST OBJECTIVE: CREATING LEGENDARY GAMING EXPERIENCES
              </div>
            </div>

            <div className="grid grid-cols-4 gap-8">
              {[
                { icon: <Crosshair className="w-6 h-6" />, value: '100%', label: 'ACCURACY' },
                { icon: <Skull className="w-6 h-6" />, value: '∞', label: 'BOSSES DEFEATED' },
                { icon: <Zap className="w-6 h-6" />, value: 'MAX', label: 'POWER LEVEL' },
                { icon: <Trophy className="w-6 h-6" />, value: 'ALL', label: 'ACHIEVEMENTS' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center group"
                >
                  <div className="text-blue-400 mb-3 transition-transform duration-300 transform group-hover:scale-110">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-blue-400/70 font-mono">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute inset-0 rounded-xl border border-blue-500/20" />
      </div>

      <style jsx>{`
        .font-mono {
          font-family: monospace;
          letter-spacing: 0.1em;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;