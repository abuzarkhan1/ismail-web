import React, { useEffect, useState } from 'react';
import { 
  Gamepad, 
  Code,
  Terminal,
  Cpu,
  Brain,
  Mail,
  Phone,
  Instagram,
  Linkedin,
  ExternalLink
} from 'lucide-react';

const ContactCard = ({ icon: Icon, title, value, link }) => (
  <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-500/30 backdrop-blur-sm group relative">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
    
    <div className="flex items-start gap-4">
      <div className="p-3 bg-blue-950/50 rounded-lg">
        <Icon className="w-6 h-6 text-blue-400" />
      </div>
      
      <div className="space-y-2">
        <h3 className="font-mono text-blue-400">{title}</h3>
        {link ? (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-100 hover:text-blue-400 transition-colors group"
          >
            {value}
            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        ) : (
          <p className="text-blue-100">{value}</p>
        )}
      </div>
    </div>
  </div>
);

const ContactSection = () => {
  const [powerLevel, setPowerLevel] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPowerLevel(prev => (prev < 100 ? prev + 1 : prev));
    }, 50);
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
      value: "03158802640",
      link: "tel:+933158802640"
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
      value: "@yourusername",
      link: "https://instagram.com/yourusername"
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
            <Gamepad className="w-8 h-8" />
            // COMMUNICATION PORTS //
            <Code className="w-8 h-8" />
          </div>
          <div className="text-blue-500 text-3xl font-mono mb-8">
            [ESTABLISH CONNECTION]
          </div>
        </div>

        {/* Contact grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <ContactCard key={index} {...info} />
            ))}
          </div>

          {/* Additional note */}
          <div className="mt-12 bg-blue-900/20 p-6 rounded-xl border border-blue-500/30 backdrop-blur-sm text-center">
            <h3 className="text-blue-400 font-mono text-xl mb-4 flex items-center justify-center gap-2">
              <Terminal className="w-6 h-6" />
              RESPONSE TIME
            </h3>
            <p className="text-blue-100/80 font-mono">
              Average response time: 1 hour
              <br />
              Available for new quests and collaborations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;