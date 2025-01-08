import React, { useEffect, useState } from 'react';
import { 
  Gamepad, 
  Code,
  Terminal,
  Cpu,
  Brain,
  Trophy,
  Star,
  Users,
  Calendar
} from 'lucide-react';

const PortfolioCard = ({ title, image, description, platforms, players, releaseDate, rating }) => (
  <div className="bg-blue-900/20 rounded-xl border border-blue-500/30 backdrop-blur-sm overflow-hidden group relative">
    {/* Image section */}
    <div className="relative aspect-video overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0B0E]/80 z-10" />
      <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity z-20" />
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    
    {/* Content section */}
    <div className="p-6">
      <h3 className="text-xl font-mono text-blue-400 mb-4">{title}</h3>
      <p className="text-blue-100/80 font-mono text-sm mb-6">{description}</p>
      
      {/* Stats grid */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-950/50 p-3 rounded-lg">
          <div className="flex items-center gap-2 text-blue-400 mb-2">
            <Gamepad className="w-4 h-4" />
            <span className="text-xs font-mono">PLATFORMS</span>
          </div>
          <p className="text-blue-100/80 text-sm font-mono">{platforms}</p>
        </div>
        <div className="bg-blue-950/50 p-3 rounded-lg">
          <div className="flex items-center gap-2 text-blue-400 mb-2">
            <Users className="w-4 h-4" />
            <span className="text-xs font-mono">PLAYERS</span>
          </div>
          <p className="text-blue-100/80 text-sm font-mono">{players}</p>
        </div>
        <div className="bg-blue-950/50 p-3 rounded-lg">
          <div className="flex items-center gap-2 text-blue-400 mb-2">
            <Calendar className="w-4 h-4" />
            <span className="text-xs font-mono">RELEASE</span>
          </div>
          <p className="text-blue-100/80 text-sm font-mono">{releaseDate}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-blue-400' : 'text-blue-900'}`}
            fill={i < rating ? 'currentColor' : 'none'}
          />
        ))}
      </div>
    </div>
  </div>
);

const PortfolioSection = () => {
  const [powerLevel, setPowerLevel] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPowerLevel(prev => (prev < 100 ? prev + 1 : prev));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      title: "CYBER NEXUS",
      image: "/api/placeholder/600/400",
      description: "A cyberpunk action RPG featuring dynamic combat and deep character customization.",
      platforms: "PC / PS5",
      players: "100K+",
      releaseDate: "2024",
      rating: 5
    },
    {
      title: "QUANTUM DRIFT",
      image: "/api/placeholder/600/400",
      description: "High-speed racing game with quantum mechanics-based gameplay mechanics.",
      platforms: "PC / Xbox",
      players: "50K+",
      releaseDate: "2023",
      rating: 4
    },
    {
      title: "STELLAR SIEGE",
      image: "/api/placeholder/600/400",
      description: "Space-based strategy game with real-time fleet battles and resource management.",
      platforms: "All",
      players: "250K+",
      releaseDate: "2023",
      rating: 5
    }
  ];

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
            <Trophy className="w-8 h-8" />
            // MISSION ARCHIVE //
            <Gamepad className="w-8 h-8" />
          </div>
          <div className="text-blue-500 text-3xl font-mono mb-8">
            [COMPLETED QUESTS]
          </div>
        </div>

        {/* Portfolio grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <PortfolioCard key={index} {...project} />
            ))}
          </div>

          {/* Stats section */}
          <div className="mt-16 bg-blue-900/20 p-8 rounded-xl border border-blue-500/30 backdrop-blur-sm">
            <h3 className="text-blue-400 font-mono text-xl mb-8 flex items-center gap-2">
              <Terminal className="w-6 h-6" />
              ACHIEVEMENT STATS
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">400K+</div>
                <div className="text-blue-300/70 font-mono text-sm">TOTAL PLAYERS</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
                <div className="text-blue-300/70 font-mono text-sm">GAME RELEASES</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">4.8</div>
                <div className="text-blue-300/70 font-mono text-sm">AVG RATING</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">3+</div>
                <div className="text-blue-300/70 font-mono text-sm">PLATFORMS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;