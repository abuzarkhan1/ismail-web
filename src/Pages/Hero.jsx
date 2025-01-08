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
  Flame,
  Users,
  Code,
  Star,
  Award
} from 'lucide-react';

// Floating Icons Component
const FloatingIcons = () => {
  const [icons, setIcons] = useState([]);
  
  const iconComponents = [
    { component: Gamepad, color: 'text-purple-400' },
    { component: Sword, color: 'text-red-400' },
    { component: Shield, color: 'text-blue-400' },
    { component: Code, color: 'text-green-400' },
    { component: Star, color: 'text-yellow-400' },
    { component: Heart, color: 'text-pink-400' },
    { component: Zap, color: 'text-yellow-400' },
    { component: Trophy, color: 'text-amber-400' },
    { component: Target, color: 'text-cyan-400' },
    { component: Sparkles, color: 'text-fuchsia-400' },
    { component: Crown, color: 'text-orange-400' },
    { component: Flame, color: 'text-rose-400' }
  ];

  const directions = ['bottom', 'top', 'left', 'right'];

  const createIcon = () => {
    const randomIcon = iconComponents[Math.floor(Math.random() * iconComponents.length)];
    const direction = directions[Math.floor(Math.random() * directions.length)];
    const duration = 7000 + Math.random() * 5000;
    const size = 24 + Math.floor(Math.random() * 24);

    let startPosition;
    let animationName;

    switch (direction) {
      case 'bottom':
        startPosition = { left: `${Math.random() * 100}%`, top: '100%' };
        animationName = 'floatFromBottom';
        break;
      case 'top':
        startPosition = { left: `${Math.random() * 100}%`, top: '-100px' };
        animationName = 'floatFromTop';
        break;
      case 'left':
        startPosition = { left: '-100px', top: `${Math.random() * 100}%` };
        animationName = 'floatFromLeft';
        break;
      case 'right':
        startPosition = { left: '100%', top: `${Math.random() * 100}%` };
        animationName = 'floatFromRight';
        break;
    }

    const newIcon = {
      id: Date.now(),
      Icon: randomIcon.component,
      color: randomIcon.color,
      style: {
        ...startPosition,
        animationDuration: `${duration}ms`,
        width: `${size}px`,
        height: `${size}px`,
        animationName
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
          className={`absolute ${color} opacity-30`}
          style={style}
        >
          <Icon />
        </div>
      ))}
      
      <style jsx>{`
        @keyframes floatFromBottom {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% { opacity: 0.3; }
          90% { opacity: 0.3; }
          100% {
            transform: translateY(-120vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes floatFromTop {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% { opacity: 0.3; }
          90% { opacity: 0.3; }
          100% {
            transform: translateY(120vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes floatFromLeft {
          0% {
            transform: translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% { opacity: 0.3; }
          90% { opacity: 0.3; }
          100% {
            transform: translateX(120vw) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes floatFromRight {
          0% {
            transform: translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% { opacity: 0.3; }
          90% { opacity: 0.3; }
          100% {
            transform: translateX(-120vw) rotate(360deg);
            opacity: 0;
          }
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
        setTimeout(() => {
          currentIndex = 0;
          setDisplayText('');
        }, 1000);
      }
    };

    const startTypingLoop = () => {
      const typingInterval = setInterval(typeNextCharacter, typingDelay);
      
      setTimeout(() => {
        clearInterval(typingInterval);
        setTimeout(startTypingLoop, 3000);
      }, (fullName.length * typingDelay) + 1000);
    };

    startTypingLoop();
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

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
          <Gamepad className="w-12 h-12 text-blue-400" />
        </div>
        <div className="absolute -top-4 -right-4">
          <Code className="w-12 h-12 text-blue-400" />
        </div>
        <div className="absolute -bottom-4 -left-4">
          <Crown className="w-12 h-12 text-blue-400" />
        </div>
        <div className="absolute -bottom-4 -right-4">
          <Target className="w-12 h-12 text-blue-400" />
        </div>

        <div className="relative rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1b2e] to-[#141428]" />
          
          <div className="relative px-8 py-16">
            <div className="text-center mb-16">
              <div className="text-blue-400 text-xl font-mono mb-6 flex items-center justify-center gap-2">
                ✦ // GAME DEVELOPMENT MAESTRO // ✦
              </div>
              <h1 className="text-6xl font-bold text-blue-400 font-mono mb-4 flex items-center justify-center">
                <span>{displayText}</span>
                <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
              </h1>
              <div className="text-blue-500 text-xl font-mono">
                [CRAFTING DIGITAL ADVENTURES]
              </div>
              <div className="text-blue-400/80 mt-8 font-mono">
                MISSION: CREATING IMMERSIVE GAMING EXPERIENCES
              </div>
            </div>

            <div className="grid grid-cols-4 gap-8">
              {[
                { icon: <Code className="w-8 h-8" />, value: '50+', label: 'GAMES DEVELOPED' },
                { icon: <Users className="w-8 h-8" />, value: '1M+', label: 'HAPPY PLAYERS' },
                { icon: <Star className="w-8 h-8" />, value: '4.9', label: 'AVG RATING' },
                { icon: <Award className="w-8 h-8" />, value: '15+', label: 'GAME AWARDS' },
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