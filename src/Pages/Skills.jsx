import  { useState, useEffect } from 'react';
import {
  Code2,
  Cpu,
  Brain,
  Terminal,
  Gamepad,
  Code,
  Headphones,
  GitBranch,
  Monitor,
  Glasses,
  Bot,
  Users,
  Lock,
} from 'lucide-react';

const SkillMatrix = () => {
  const [activeCategory, setActiveCategory] = useState('core');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const categories = {
    core: {
      title: "CORE SYSTEMS",
      skills: [
        { name: "C++ Development", level: 95, icon: Code2, description: "Advanced game systems & engine development" },
        { name: "C# Mastery", level: 92, icon: Code2, description: "Unity development & tool creation" },
        { name: "Engine Architecture", level: 90, icon: Cpu, description: "Unity & Unreal Engine expertise" },
        { name: "Mathematics", level: 88, icon: Brain, description: "3D graphics & physics simulation" }
      ]
    },
    gameplay: {
      title: "GAMEPLAY MATRIX",
      skills: [
        { name: "Game Design", level: 85, icon: Gamepad, description: "Mechanics & systems design" },
        { name: "3D Graphics", level: 82, icon: Monitor, description: "Asset integration & optimization" },
        { name: "Physics Systems", level: 88, icon: Terminal, description: "Collision & dynamics" },
        { name: "AI Systems", level: 80, icon: Bot, description: "NPC behaviors & pathfinding" }
      ]
    },
    specialized: {
      title: "SPECIALIZED PROTOCOLS",
      skills: [
        { name: "VR Development", level: 85, icon: Glasses, description: "Immersive experiences" },
        { name: "Version Control", level: 90, icon: GitBranch, description: "Git & collaboration" },
        { name: "Audio Integration", level: 82, icon: Headphones, description: "Sound design & implementation" },
        { name: "Team Leadership", level: 88, icon: Users, description: "Project management & communication" }
      ]
    }
  };

  const SkillBar = ({ skill, delay }) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
      if (!isLoading) {
        const timer = setTimeout(() => {
          setWidth(skill.level);
        }, delay);
        return () => clearTimeout(timer);
      }
    }, [isLoading, skill.level, delay]);

    return (
      <div
        className="relative mb-8"
        onMouseEnter={() => setHoveredSkill(skill)}
        onMouseLeave={() => setHoveredSkill(null)}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <skill.icon className="w-5 h-5 text-blue-400" />
            <span className="text-blue-100 font-mono">{skill.name}</span>
          </div>
          <span className="text-blue-400 font-mono">{width}%</span>
        </div>
        <div className="h-2 bg-blue-900/30 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-1000 ease-out relative"
            style={{ width: `${width}%` }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_0,transparent_30%,rgba(255,255,255,0.3)_45%,rgba(255,255,255,0.4)_47%,transparent_48%)] animate-shine" />
          </div>
        </div>
        {hoveredSkill === skill && (
          <div className="absolute mt-2 p-3 bg-blue-900/90 rounded-lg border border-blue-500/50 backdrop-blur-sm z-10 w-64">
            <p className="text-blue-100 font-mono text-sm">{skill.description}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0A0B0E] text-blue-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-indigo-900/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_50%,rgba(29,78,216,0.15),transparent)]" />
      </div>

    

      {/* Main Content */}
      <div className="relative min-h-screen pt-24 px-6 pb-12 container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
         
          <h1 className="text-4xl font-mono text-blue-500 mb-4"> PLAYER PROFILE</h1>
          <div className="h-1 w-32 bg-blue-500/50 mx-auto rounded-full" />
        </div>

        {/* Category Navigation */}
        <div className="flex justify-center gap-6 mb-16">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-mono transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/50'
                  : 'bg-blue-900/20 text-blue-100/50 hover:bg-blue-500/10 hover:text-blue-100'
              }`}
            >
              {categories[category].title}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-6">
          {categories[activeCategory].skills.map((skill, index) => (
            <SkillBar
              key={skill.name}
              skill={skill}
              delay={index * 200}
            />
          ))}
        </div>

        {/* Info Panel */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Terminal, label: "ACTIVE PROJECTS", value: "4" },
            { icon: Code, label: "CODE EFFICIENCY", value: "92%" },
            { icon: Brain, label: "SKILL SYNERGY", value: "95%" }
          ].map((stat, index) => (
            <div key={index} className="bg-blue-900/20 p-6 rounded-xl border border-blue-500/30 backdrop-blur-sm">
              <stat.icon className="w-8 h-8 text-blue-400 mb-4" />
              <div className="text-blue-100/70 font-mono text-sm mb-2">{stat.label}</div>
              <div className="text-blue-400 font-mono text-2xl">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillMatrix;