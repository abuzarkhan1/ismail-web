import React from 'react';

const ServiceCard = ({ title, description }) => (
  <div className="group p-8 bg-gray-800/50 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all">
    <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-500 transition-colors">
      {title}
    </h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      title: "Game Development",
      description: "Full-cycle game development from concept to deployment, specializing in Unity Engine and C# programming."
    },
    {
      title: "Technical Consultation",
      description: "Expert advice on game architecture, optimization, and best practices for Unity projects."
    }
  ];

  return (
    <section className="min-h-screen pt-20 px-4">
      <div className="max-w-6xl mx-auto py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;