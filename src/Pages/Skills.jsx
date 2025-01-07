import React from 'react';
import { Code2, Camera, Wrench } from 'lucide-react';

const SkillCard = ({ icon: Icon, title, percentage, level }) => (
  <div className="bg-gray-800/50 p-6 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-colors">
    <Icon className="w-12 h-12 text-purple-500 mb-4" />
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <div className="space-y-2">
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div 
          className="bg-purple-500 h-2 rounded-full" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="text-gray-400">{level}</p>
    </div>
  </div>
);

const SkillsSection = () => {
  const skills = [
    {
      icon: Code2,
      title: "C# Development",
      percentage: 95,
      level: "Advanced proficiency"
    },
    {
      icon: Camera,
      title: "Unity Engine",
      percentage: 90,
      level: "Expert level"
    },
    {
      icon: Wrench,
      title: "Game Design",
      percentage: 85,
      level: "Strong expertise"
    }
  ];

  return (
    <section className="min-h-screen pt-20 px-4">
      <div className="max-w-6xl mx-auto py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;