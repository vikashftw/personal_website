import { useEffect, useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import CollapsibleSidebar from './components/CollapsibleSidebar';
import ThemeToggle from './components/ThemeToggle';
import AnimatedEyes from './components/AnimatedEyes';
import SocialLinks from './components/SocialLinks';
import Home from './pages/Home';
import About from './pages/About';
import Career from './pages/Career';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

const sectionIds = ['home', 'about', 'career', 'projects', 'contact'] as const;

const App = (): JSX.Element => {
  const [activeSection, setActiveSection] = useState<(typeof sectionIds)[number]>('home');

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]) {
          setActiveSection(visibleEntries[0].target.id as (typeof sectionIds)[number]);
        }
      },
      {
        rootMargin: '-20% 0px -35% 0px',
        threshold: [0.25, 0.4, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: (typeof sectionIds)[number]) => {
    const section = document.getElementById(sectionId);
    if (!section) {
      return;
    }

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <CollapsibleSidebar activeSection={activeSection} onNavigate={scrollToSection} />
        <ThemeToggle />
        <AnimatedEyes />
        <SocialLinks />
        <main className="px-8 md:px-12">
          <section
            id="home"
            className="min-h-screen flex flex-col justify-center"
          >
            <Home activeSection={activeSection} onNavigate={scrollToSection} />
          </section>
          <section
            id="about"
            className="min-h-screen flex flex-col justify-center py-16"
          >
            <About />
          </section>
          <section
            id="career"
            className="min-h-screen flex flex-col justify-center py-16"
          >
            <Career />
          </section>
          <section
            id="projects"
            className="min-h-screen flex flex-col justify-center py-16"
          >
            <Projects />
          </section>
          <section
            id="contact"
            className="min-h-screen flex flex-col justify-center py-16"
          >
            <Contact />
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
