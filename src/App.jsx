import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'contact'];
      let currentSectionId = 'home';
      let minOffset = Infinity;

      sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          const offset = Math.abs(element.getBoundingClientRect().top - 200);
          if (offset < minOffset) {
            minOffset = offset;
            currentSectionId = id;
          }
        }
      });

      setActiveSection(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial run to set active section
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="relative noise-overlay min-h-screen bg-background text-foreground antialiased selection:bg-accent selection:text-background">
      <Navbar 
        activeSection={activeSection} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        scrollToSection={scrollToSection} 
      />
      <main className="relative lg:ml-20">
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Skills />
        <Contact />
        <Footer scrollToSection={scrollToSection} />
      </main>
    </div>
  );
}

export default App;
