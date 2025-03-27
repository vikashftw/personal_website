import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

interface Dot {
  path: string;
  label: string;
  offset: {
    x: number;
    y: number;
  };
  isResume?: boolean;
}

const NavigationDots = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const resumeUrl = "https://drive.google.com/file/d/1WhGA2ZvwBid0ZkwQ5cMc5m12QYyergqe/view?usp=sharing";

  const dots: Dot[] = [
    { path: '/about', label: 'About', offset: { x: 35, y: 60 } },
    { path: '/career', label: 'Timeline', offset: { x: 15, y: 200 } },
    { path: '/projects', label: 'Projects', offset: { x: 35, y: 340 } },
    { path: '/contact', label: 'Contact', offset: { x: 15, y: 480 } },
    { path: resumeUrl, label: 'Resume', isResume: true, offset: { x: 35, y: 620 } }
  ];

  const glowVariants = {
    initial: { 
      scale: 1, 
      opacity: 0.5,
      y: 0
    },
    animate: (custom: number) => ({
      scale: [1, 1.4, 1],
      opacity: [0.4, 1, 0.4],
      y: [custom, custom - 15, custom],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.5, 1],
        delay: custom * 0.2
      }
    }),
    hover: {
      scale: 1.5,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  const handleClick = (path: string, isResume = false) => {
    if (isResume) {
      window.open(path, '_blank');
    } else {
      navigate(path);
    }
  };

  return (
    <nav className="fixed right-20 top-1/2 -translate-y-1/2 h-screen pointer-events-none z-50">
      <div className="relative h-full w-24 pointer-events-auto">
        {dots.map((dot, index) => (
          <motion.div
            key={dot.path}
            className="absolute right-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ 
              opacity: 1, 
              x: dot.offset.x,
              y: dot.offset.y
            }}
            transition={{ 
              delay: index * 0.2,
              duration: 0.8,
              ease: "easeOut"
            }}
          >
            <motion.div
              className="relative group"
              onClick={() => handleClick(dot.path, dot.isResume)}
              style={{ cursor: 'pointer' }}
            >
              {/* Largest outer glow */}
              <motion.div
                className="absolute inset-0 w-16 h-16 -m-6 rounded-full blur-2xl
                  dark:bg-indigo-300/20 bg-indigo-500/20"
                variants={glowVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                custom={index * 8}
              />
              
              {/* Medium glow */}
              <motion.div
                className="absolute inset-0 w-12 h-12 -m-4 rounded-full blur-xl
                  dark:bg-indigo-300/30 bg-indigo-500/30"
                variants={glowVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                custom={index * 8}
              />
              
              {/* Inner glow */}
              <motion.div
                className="absolute inset-0 w-8 h-8 -m-2 rounded-full blur-lg
                  dark:bg-indigo-300/40 bg-indigo-500/40"
                variants={glowVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                custom={index * 8}
              />
              
              {/* Main dot */}
              <motion.div
                className={`w-6 h-6 rounded-full relative z-10 
                  ${location.pathname === dot.path 
                    ? 'dark:bg-indigo-300 dark:shadow-indigo-300/50 bg-indigo-500 shadow-indigo-500/50' 
                    : 'dark:bg-indigo-300/80 dark:shadow-indigo-300/30 bg-indigo-500/80 shadow-indigo-500/30'
                  } shadow-lg`}
                variants={glowVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                custom={index * 8}
              />

              {/* Tooltip */}
              <div 
                className="absolute left-0 -translate-x-full -translate-y-1/2 top-1/2 mr-8 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  pointer-events-none"
              >
                <span className="px-4 py-2 rounded-lg text-sm whitespace-nowrap
                  dark:bg-gray-800/90 dark:text-indigo-200
                  bg-white/90 text-indigo-700
                  shadow-lg"
                >
                  {dot.label}
                </span>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </nav>
  );
};

export default NavigationDots;