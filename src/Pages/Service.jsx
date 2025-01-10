import React, { useState, useEffect } from 'react';
import { 
  Gamepad, 
  Trophy,
  Star,
  Users,
  Calendar,
  ArrowRight,
  Clock,
  Target,
  Cpu,
  ChevronLeft
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const GameCard = ({ game, onClick }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    whileHover={{ scale: 1.02, y: -5 }}
    className="relative group cursor-pointer"
    onClick={() => onClick(game)}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-indigo-900/30 group-hover:opacity-80 transition-opacity rounded-xl" />
    
    <div className="relative overflow-hidden rounded-xl border border-blue-500/30 bg-[#0A0B0E]/80 backdrop-blur-sm">
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0B0E]/90 z-10" />
        <img 
          src={game.image} 
          alt={game.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
          <h3 className="text-2xl font-mono text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">
            {game.title}
          </h3>
          <p className="text-blue-100/70 font-mono text-sm line-clamp-2">
            {game.description}
          </p>
        </div>
      </div>
      
      <div className="p-6 pt-0">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-mono">
              {game.genre}
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i}
                  className={`w-4 h-4 ${i < game.rating ? 'text-blue-400' : 'text-blue-900'}`}
                  fill={i < game.rating ? 'currentColor' : 'none'}
                />
              ))}
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-blue-400 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all" />
        </div>
      </div>
    </div>
  </motion.div>
);

const GameDetails = ({ game, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 overflow-y-auto bg-[#0A0B0E]/90 backdrop-blur-md"
  >
    <div className="min-h-screen px-6 py-12">
      <motion.div
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        exit={{ y: 50 }}
        className="max-w-7xl mx-auto"
      >
        {/* Back button */}
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-blue-400 font-mono mb-8 hover:text-blue-300 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          BACK TO GAMES
        </button>

        {/* Main content */}
        <div className="space-y-8">
          {/* Header image */}
          <div className="relative aspect-[21/9] rounded-xl overflow-hidden">
            <img 
              src={game.image} 
              alt={game.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0E] via-transparent to-transparent" />
          </div>

          {/* Game info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h1 className="text-4xl font-mono text-blue-400 mb-4">{game.title}</h1>
                <p className="text-blue-100/80 font-mono leading-relaxed">{game.description}</p>
              </div>

              {/* YouTube embed */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-blue-900/20">
                <iframe
                  src={`https://www.youtube.com/embed/${game.youtubeId}`}
                  title={`${game.title} Gameplay`}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h2 className="text-2xl font-mono text-blue-400">KEY FEATURES</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {game.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 bg-blue-900/20 p-4 rounded-lg">
                      <Target className="w-5 h-5 text-blue-400 shrink-0 mt-1" />
                      <p className="text-blue-100/80 font-mono text-sm">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats sidebar */}
            <div className="space-y-6">
              <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-500/30">
                <h3 className="text-blue-400 font-mono text-xl mb-6">GAME STATS</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-blue-300/70">
                      <Users className="w-4 h-4" />
                      <span className="font-mono text-sm">Players</span>
                    </div>
                    <span className="text-blue-400 font-mono">{game.players}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-blue-300/70">
                      <Clock className="w-4 h-4" />
                      <span className="font-mono text-sm">Playtime</span>
                    </div>
                    <span className="text-blue-400 font-mono">{game.playtime}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-blue-300/70">
                      <Calendar className="w-4 h-4" />
                      <span className="font-mono text-sm">Release Date</span>
                    </div>
                    <span className="text-blue-400 font-mono">{game.releaseDate}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-blue-300/70">
                      <Cpu className="w-4 h-4" />
                      <span className="font-mono text-sm">Platforms</span>
                    </div>
                    <span className="text-blue-400 font-mono">{game.platforms}</span>
                  </div>
                </div>
              </div>

              {/* Rating card */}
              <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-500/30">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-blue-400 font-mono">RATING</h3>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`w-5 h-5 ${i < game.rating ? 'text-blue-400' : 'text-blue-900'}`}
                        fill={i < game.rating ? 'currentColor' : 'none'}
                      />
                    ))}
                  </div>
                </div>
                <div className="text-4xl font-bold text-blue-400 font-mono">
                  {game.rating}.0
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </motion.div>
);

const PortfolioSection = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prev => (prev < 100 ? prev + 1 : prev));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const games = [
    {
      title: "CYBER NEXUS",
      image: "/src/assets/2.jpg",
      description: "A groundbreaking cyberpunk action RPG that pushes the boundaries of character customization and combat mechanics. Dive into a neon-drenched world where every choice matters and your cybernetic augmentations define your gameplay style.",
      genre: "Action RPG",
      platforms: "PC / PS5",
      players: "100K+",
      playtime: "40+ Hours",
      releaseDate: "2024",
      rating: 5,
      youtubeId: "V5bG9jT2bfc",
      features: [
        "Deep character customization with over 100 cybernetic augmentations",
        "Real-time combat system with dynamic environment interaction",
        "Branching narrative with multiple endings",
        "Stunning ray-traced graphics and dynamic weather system"
      ]
    },
    {
      title: "QUANTUM DRIFT",
      image: "/src/assets/2.jpg",
      description: "Experience racing like never before in this quantum mechanics-inspired racing game. Manipulate time and space as you drift through impossible tracks at breakneck speeds.",
      genre: "Racing",
      platforms: "PC / Xbox",
      players: "50K+",
      playtime: "25+ Hours",
      releaseDate: "2023",
      rating: 4,
      youtubeId: "V5bG9jT2bfc",
      features: [
        "Revolutionary quantum mechanics-based racing mechanics",
        "30 unique tracks across multiple dimensions",
        "Advanced vehicle customization system",
        "Competitive multiplayer with rankings"
      ]
    },
    {
      title: "STELLAR SIEGE",
      image: "/src/assets/2.jpg",
      description: "Command massive fleets in epic space battles. Build your empire across the stars in this strategic masterpiece that combines resource management with tactical combat.",
      genre: "Strategy",
      platforms: "All",
      players: "250K+",
      playtime: "100+ Hours",
      releaseDate: "2023",
      rating: 5,
      youtubeId: "V5bG9jT2bfc",
      features: [
        "Vast galaxy with over 1000 explorable star systems",
        "Deep strategic gameplay with real-time fleet battles",
        "Advanced diplomacy system with AI factions",
        "Extensive mod support and Steam Workshop integration"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0B0E] text-blue-100 relative">
      {/* Background grid */}
      <div className="fixed inset-0 grid grid-cols-[repeat(auto-fill,minmax(50px,1fr))] grid-rows-[repeat(auto-fill,minmax(50px,1fr))] opacity-20">
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i} className="border border-blue-500/5" />
        ))}
      </div>

      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-indigo-900/20" />
      
      {/* Main content */}
      <div className="relative">
        {/* Header section */}
        <div className="text-center py-24 px-6">
          <div className="text-blue-400 text-2xl font-mono mb-6 flex items-center justify-center gap-3">
            <Trophy className="w-8 h-8" />
            // MISSION ARCHIVE //
            <Gamepad className="w-8 h-8" />
          </div>
          <h1 className="text-5xl font-mono text-blue-400 mb-8">
            [COMPLETED QUESTS]
          </h1>
        </div>

        {/* Portfolio grid */}
        <div className="max-w-7xl mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <GameCard 
                key={index} 
                game={game} 
                onClick={setSelectedGame}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Game details modal */}
      <AnimatePresence>
        {selectedGame && (
          <GameDetails 
            game={selectedGame} 
            onClose={() => setSelectedGame(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioSection;