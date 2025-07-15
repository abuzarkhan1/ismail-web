import React, { useState, useEffect } from "react";
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
  ChevronLeft,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
          <h3 className="text-2xl line-clamp-1 font-mono text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">
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
                  className={`w-4 h-4 ${
                    i < game.rating ? "text-blue-400" : "text-blue-900"
                  }`}
                  fill={i < game.rating ? "currentColor" : "none"}
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
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-mono text-blue-400 mb-4">
                {game.title}
              </h1>
              <p className="text-blue-100/80 font-mono leading-relaxed max-w-4xl">
                {game.description}
              </p>
            </div>

            {/* Video and Features Side by Side */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              {/* YouTube embed - Takes 2/3 of the width on xl screens */}
              <div className="xl:col-span-2">
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
              </div>

              {/* Features - Takes 1/3 of the width on xl screens */}
              <div className="xl:col-span-1">
                <div className="space-y-4 h-full">
                  <h2 className="text-2xl font-mono text-blue-400">
                    KEY FEATURES
                  </h2>
                  <div className="space-y-3 h-full">
                    {game.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 bg-blue-900/10 p-4 rounded-lg hover:bg-blue-900/20 transition-colors border border-blue-500/20"
                      >
                        <Target className="w-5 h-5 text-blue-400 shrink-0 mt-1" />
                        <p className="text-blue-100/80 font-mono text-sm leading-relaxed">
                          {feature}
                        </p>
                      </motion.div>
                    ))}
                  </div>
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
      setLoadingProgress((prev) => (prev < 100 ? prev + 1 : prev));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const games = [
    {
      title:
        "Final Year Project - Task force 141: AN FPS shooter game with voice controlled AI squad mates",
      image:
        "https://res.cloudinary.com/diwerulix/image/upload/v1751219876/ismail_gfygxl.jpg",
      description:
        "In the evolving landscape of interactive entertainment, artificial intelligence (AI) is playing an increasingly important role in enhancing immersion and player experience. My final year project, Task Force 141, focuses on building an innovative first-person shooter (FPS) game that incorporates advanced voice-controlled AI squad mates capable of understanding natural language. This project is motivated by the growing demand for deeper human-AI interaction in games, where AI not only responds to player actions but also understands and reacts to voice commands in realtime.The integration of voice-controlled AI introduces new dimensions of challenge and complexity, allowing players to communicate with their squadmates naturally, as if interacting with human teammates",
      genre: "Action/Shooter",
      platforms: "PC",
      players: "2+",
      playtime: "Endless",
      releaseDate: "2025",
      rating: 4,
      youtubeId: "2ZoJS3alzfk",
      features: [
        "Voice-controlled AI squad mates for natural language interaction",
        "Real-time voice command recognition and execution",
        "Immersive first-person shooter (FPS) gameplay",
        "Advanced AI behavior that mimics human teammates",
        "Natural voice communication for in-game coordination",
      ],
    },
    {
      title: "Color Flip Dodge - A Minimalist Reflex-Based Mobile Game",
      image:
        "https://res.cloudinary.com/diwerulix/image/upload/v1752580394/game_dksnw6.jpg",
      description:
        "Color Flip Dodge is a minimalist, fast-paced mobile game I developed solo in Unity.The core mechanic revolves around a color-switching player that must avoid or match incoming obstacles by tapping and dragging. As gameplay progresses, difficulty dynamically increases, requiring quick reflexes and strategic timing",
      genre: "Action/Reflix",
      platforms: "Mobile",
      players: "1",
      playtime: "Endless",
      releaseDate: "2025",
      rating: 4,
      youtubeId: "2ZoJS3alzfk",
      features: [
        "mooth touch-based drag movement optimized for mobile",
        "Dynamic color-switch mechanic with real-time feedback",
        "Randomized obstacle spawner with global difficulty scaling",
        "Custom sound manager with background music and SFX",
        "Polished UI with pause, resume, and game-over screens",
        "Responsive trail effect to enhance player movement",
        "Built and tested for Android (portrait layout 1080x1920)",
      ],
    },
    {
      title: "TAP COUNTER",
      image:
        "https://res.cloudinary.com/diwerulix/image/upload/v1750680763/tap1_ocrbyh.jpg",
      description:
        "A fast-paced reaction-based game that challenges players to tap the screen as quickly as possible within a limited time. Each stage sets a specific number of taps that must be completed before the countdown ends.",
      genre: "Action/Arcade",
      platforms: "Mobile",
      players: "15K+",
      playtime: "Endless",
      releaseDate: "2024",
      rating: 4,
      youtubeId: "SkErFzroQZQ",
      features: [
        "Fast-paced reaction-based gameplay mechanics",
        "Progressive difficulty with increasing tap requirements",
        "Time-based challenges that test speed and precision",
        "Stage progression system with tighter timing constraints",
        "Competitive scoring for all ages",
        "Hand-eye coordination training experience",
      ],
    },
    {
      title: "NINJA CRATES",
      image:
        "https://res.cloudinary.com/diwerulix/image/upload/v1750680763/tp2_tmzj1j.jpg",
      description:
        "An action-packed slicing game inspired by the classic Fruit Ninja mechanic. Instead of fruits, crates are launched onto the screen, each carrying a unique score value. Players must slash the crates mid-air to earn points.",
      genre: "Action/Casual",
      platforms: "Mobile/PC",
      players: "28K+",
      playtime: "10+ Hours",
      releaseDate: "2024",
      rating: 5,
      youtubeId: "xT1aCuHPN70?si",
      features: [
        "Classic slicing mechanics with modern twist",
        "Three difficulty modes: Easy, Medium, Hard",
        "Dynamic crate spawning with unique score values",
        "Bomb avoidance system for strategic gameplay",
        "Score-based progression and achievements",
        "Precision timing and reflex testing challenges",
      ],
    },
    {
      title: "FLYING BALL",
      image:
        "https://res.cloudinary.com/diwerulix/image/upload/v1750680762/tp3_jgavsr.jpg",
      description:
        "A skill-based arcade game inspired by the mechanics of Flappy Bird. In this game, a ball starts suspended in the air and is affected by gravity — it will begin to fall unless the player continuously taps the screen.",
      genre: "Arcade/Casual",
      platforms: "Mobile",
      players: "22K+",
      playtime: "5+ Hours",
      releaseDate: "2023",
      rating: 4,
      youtubeId: "zufgvvjJV8I?si",
      features: [
        "Physics-based gravity mechanics",
        "Continuous tap-to-fly control system",
        "Progressive obstacle difficulty scaling",
        "Precise timing and coordination requirements",
        "Addictive score-chasing gameplay loop",
        "Quick reflexes and reaction time testing",
      ],
    },
    {
      title: "META SENTO",
      image:
        "https://res.cloudinary.com/diwerulix/image/upload/v1750680763/tap4_fjldqr.jpg",
      description:
        "A virtual reality (VR) game project developed to deliver an immersive experience within a stylized digital environment. Key contribution focused on lighting design, crafted meticulously to meet specific aesthetic and performance requirements.",
      genre: "VR/Adventure",
      platforms: "VR Headsets",
      players: "5K+",
      playtime: "8+ Hours",
      releaseDate: "2023",
      rating: 5,
      youtubeId: "GSOOB3-hYrA?si",
      features: [
        "Immersive virtual reality environment design",
        "Meticulously crafted lighting systems",
        "Optimized performance for VR platforms",
        "Stylized digital world aesthetics",
        "Real-time rendering optimization",
        "Professional lighting design implementation",
      ],
    },
    {
      title: "SUPER CAPSULE",
      image:
        "https://res.cloudinary.com/diwerulix/image/upload/v1750680762/tap5_y35ybp.jpg",
      description:
        "My first game developed using Unity, designed as a small platformer project to explore and apply game physics. Players control a capsule character tasked with collecting coins to progress by jumping from platform to platform.",
      genre: "Platformer",
      platforms: "PC",
      players: "8K+",
      playtime: "3+ Hours",
      releaseDate: "2022",
      rating: 3,
      youtubeId: "ipiupwN1PWQ?si",
      features: [
        "Classic platformer mechanics with Unity physics",
        "Coin collection progression system",
        "Enemy defeat mechanics via precision jumping",
        "Platform-to-platform navigation challenges",
        "Physics-based character movement",
        "Foundational game development learning project",
      ],
    },
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
              <GameCard key={index} game={game} onClick={setSelectedGame} />
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
