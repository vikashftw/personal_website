import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-8 left-8 z-50 p-2 rounded-full bg-opacity-20 backdrop-blur-sm
        dark:bg-white/10 bg-black/10 hover:bg-opacity-30 transition-all duration-300"
    >
      {theme === 'dark' ? (
        <Sun className="w-6 h-6 text-yellow-400" />
      ) : (
        <Moon className="w-6 h-6 text-gray-700" />
      )}
    </button>
  );
};

export default ThemeToggle;