import { motion } from 'framer-motion';
import NavigationDots from '../components/NavigationDots';

interface HomeProps {
  activeSection: string;
  onNavigate: (sectionId: 'home' | 'about' | 'career' | 'projects' | 'contact') => void;
}

const Home = ({ activeSection, onNavigate }: HomeProps) => {
  return (
    <div className="relative w-full overflow-hidden">
      {activeSection === 'home' && (
        <NavigationDots activeSection={activeSection} onNavigate={onNavigate} />
      )}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex w-full flex-col items-center justify-center py-16"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto max-w-4xl p-8 md:p-12 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 
            backdrop-blur-sm border border-white/10 shadow-xl"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 
              rounded-2xl blur-xl -z-10"
          />
          
          <motion.h1 
            className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
              from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-8 text-center"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            Vikash Mall
          </motion.h1>
          
          <motion.div 
            className="max-w-2xl text-center space-y-4 text-lg text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="leading-relaxed">
              Passionate software engineer crafting elegant solutions to complex problems.
            </p>
            <p className="leading-relaxed">
              Dedicated to creating seamless user experiences through innovative technology.
            </p>
            <p className="leading-relaxed">
              Constantly exploring new technologies and pushing the boundaries of what's possible.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
