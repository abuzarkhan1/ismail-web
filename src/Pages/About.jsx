import React from 'react';
import { User, Gamepad2 } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="min-h-screen pt-20 px-4">
      <div className="max-w-6xl mx-auto py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-xl text-gray-300">
              Passionate game developer with expertise in Unity and C#, dedicated to creating
              engaging and innovative gaming experiences that push the boundaries of interactive
              entertainment.
            </p>
            <div className="flex items-center gap-4">
              <User className="w-8 h-8 text-purple-500" />
              <span className="text-lg">5+ Years Experience</span>
            </div>
            <div className="flex items-center gap-4">
              <Gamepad2 className="w-8 h-8 text-purple-500" />
              <span className="text-lg">20+ Games Published</span>
            </div>
          </div>
          <div className="bg-purple-900/30 p-8 rounded-2xl border border-purple-500/30">
            <img 
              src="/api/placeholder/400/400" 
              alt="Profile" 
              className="rounded-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;