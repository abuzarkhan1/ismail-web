import  { useState } from 'react';
import { Layout } from './components/Layout';
import Navbar from './components/Navbar';
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
      {activeSection === 'hero' && <HeroSection />}
      {activeSection === 'about' && <AboutSection />}
      {activeSection === 'skills' && <SkillsSection />}
      {activeSection === 'services' && <ServicesSection />}
      {activeSection === 'contact' && <ContactSection />}
    </Layout>
  );
};

export default App;