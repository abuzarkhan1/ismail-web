import { useState } from 'react';
import { Layout } from './components/Layout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './Pages/Hero';
import AboutSection from './Pages/About';
import SkillsSection from './Pages/Skills';
import ServicesSection from './Pages/Service';
import ContactSection from './Pages/Contact';

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <Layout>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="min-h-screen pt-16">
        {activeSection === 'hero' && <HeroSection setActiveSection={setActiveSection} />}
        {activeSection === 'about' && <AboutSection />}
        {activeSection === 'skills' && <SkillsSection />}
        {activeSection === 'services' && <ServicesSection />}
        {activeSection === 'contact' && <ContactSection />}
      </main>
      <Footer />
    </Layout>
  );
};

export default App;