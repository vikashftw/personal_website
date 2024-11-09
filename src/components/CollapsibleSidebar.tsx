import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Home, User, History, Mail, FileText, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CollapsibleSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const resumeUrl = "https://drive.google.com/file/d/1jCtzDq597zWYqliD9V_QWZux9BT_nky2/view";

  const sidebarVariants = {
    open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
    closed: { x: "-100%" }
  };

  const menuItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: User, label: "About", path: "/about" },
    { icon: History, label: "Timeline", path: "/career" },
    { icon: Briefcase, label: "Projects", path: "/projects" },
    { icon: Mail, label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed top-4 left-4 z-50 p-3 rounded-lg bg-gray-100 dark:bg-gray-800 
          hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300
          ${isOpen ? 'hidden' : 'block'}`}
      >
        <Menu size={24} className="text-gray-800 dark:text-gray-200" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            <motion.nav
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebarVariants}
              className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-800 
                shadow-lg z-50 overflow-hidden"
            >
              <div className="p-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 
                    dark:hover:bg-gray-700 transition-colors duration-300"
                >
                  <X size={24} className="text-gray-600 dark:text-gray-300" />
                </button>

                <div className="mt-12 space-y-4">
                  {menuItems.map(({ icon: Icon, label, path }) => (
                    <NavLink
                      key={path}
                      to={path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors
                        ${isActive 
                          ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`
                      }
                    >
                      <Icon size={22} />
                      <span className="font-medium">{label}</span>
                    </NavLink>
                  ))}

                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 
                      dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <FileText size={22} />
                    <span className="font-medium">Resume</span>
                  </a>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default CollapsibleSidebar;