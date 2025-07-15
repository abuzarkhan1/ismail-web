import React, { useEffect, useState } from 'react';
import { 
  Gamepad, 
  Code, 
  Trophy,
  Target,
  Sparkles,
  Cpu,
  Brain,
  Rocket,
  Flame,
  Terminal
} from 'lucide-react';

const AboutSection = () => {
  const [powerLevel, setPowerLevel] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPowerLevel(prev => (prev < 100 ? prev + 1 : prev));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0B0E] text-blue-100">
      {/* Background gradients */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-indigo-900/20" />
      </div>
      

      {/* Main content */}
      <div className="relative pt-24 px-6 pb-12">
        {/* Header section */}
        <div className="text-center mb-16 relative">
          <div className="text-blue-400 text-2xl font-mono mb-6 flex items-center justify-center gap-3">
            <Gamepad className="w-8 h-8" />
            // CHARACTER PROFILE //
            <Code className="w-8 h-8" />
          </div>
          <div className="text-blue-500 text-3xl font-mono mb-8">
            [LEVEL 99 GAME DEVELOPER]
          </div>
        </div>

        {/* Three column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Left column */}
          <div className="space-y-8">
            <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-500/30 backdrop-blur-sm">
              <h3 className="text-blue-400 font-mono text-xl mb-4 flex items-center gap-2">
                <Terminal className="w-6 h-6" />
                MAIN QUEST OBJECTIVES
              </h3>
              <p className="text-blue-100/90 leading-relaxed font-mono">
                Specialized in crafting immersive gaming experiences through Unity and C#. 
                On a mission to push the boundaries of interactive entertainment and create 
                memorable digital adventures that captivate players worldwide.
              </p>
            </div>

            <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-500/30 backdrop-blur-sm">
              <h3 className="text-blue-400 font-mono text-xl mb-4 flex items-center gap-2">
                <Target className="w-6 h-6" />
                CURRENT MISSIONS
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  <span className="text-blue-100/90 font-mono">Developing Next-Gen RPG Engine</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  <span className="text-blue-100/90 font-mono">Optimizing Multiplayer Systems</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  <span className="text-blue-100/90 font-mono">Expanding Game Universe</span>
                </div>
              </div>
            </div>
          </div>

          {/* Middle column */}
          <div className="space-y-8">
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-300/20 rounded-xl" />
              <img 
                src="https://res.cloudinary.com/diwerulix/image/upload/v1736514528/1_mkkdve.jpg" 
                alt="Profile" 
                className="rounded-xl w-full relative z-10 mix-blend-overlay opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0E] via-transparent to-transparent" />
            </div>

            <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-500/30 backdrop-blur-sm">
              <h3 className="text-blue-400 font-mono text-xl mb-4 flex items-center gap-2">
                <Trophy className="w-6 h-6" />
                ACHIEVEMENTS UNLOCKED
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-950/50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-400 mb-1">1+</div>
                  <div className="text-sm text-blue-300/70 font-mono">YEARS EXP</div>
                </div>
                <div className="text-center p-4 bg-blue-950/50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-400 mb-1">10+</div>
                  <div className="text-sm text-blue-300/70 font-mono">GAMES</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-8">
            <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-500/30 backdrop-blur-sm">
              <h3 className="text-blue-400 font-mono text-xl mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6" />
                SPECIAL ABILITIES
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Flame className="w-5 h-5 text-orange-400" />
                  <span className="text-blue-100/90 font-mono">Unity Engine Mastery</span>
                </div>
                <div className="flex items-center gap-3">
                  <Code className="w-5 h-5 text-green-400" />
                  <span className="text-blue-100/90 font-mono">Advanced C# Programming</span>
                </div>
                <div className="flex items-center gap-3">
                  <Brain className="w-5 h-5 text-purple-400" />
                  <span className="text-blue-100/90 font-mono">Game Design Architecture</span>
                </div>
                <div className="flex items-center gap-3">
                  <Rocket className="w-5 h-5 text-red-400" />
                  <span className="text-blue-100/90 font-mono">Performance Optimization</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-500/30 backdrop-blur-sm">
              <h3 className="text-blue-400 font-mono text-xl mb-4 flex items-center gap-2">
                <Terminal className="w-6 h-6" />
                TECH STACK
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 bg-blue-950/50 p-3 rounded-lg">
                  <Code className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-100/90 font-mono">Unity</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-950/50 p-3 rounded-lg">
                  <Code className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-100/90 font-mono">C#</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-950/50 p-3 rounded-lg">
                  <Code className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-100/90 font-mono">Git</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-950/50 p-3 rounded-lg">
                  <Code className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-100/90 font-mono">Blender</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;