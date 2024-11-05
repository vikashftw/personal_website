import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <CollapsibleSidebar />
          <ThemeToggle />
          <AnimatedEyes />
          <SocialLinks />
            <main className="p-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/career" element={<Career />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;