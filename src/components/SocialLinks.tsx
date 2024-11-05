import { Github, Instagram, Linkedin } from 'lucide-react';

const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}  // This will inherit the hover color correctly
    fill="currentColor"    // Uses the current text color from parent
    height="24"
    width="24"
    style={{ pointerEvents: 'none' }}  // Prevent SVG from blocking clicks
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);


const SocialLinks = () => {
  const socials = [
    { 
      Icon: Github, 
      href: 'https://github.com/vikashftw', 
      label: 'GitHub',
      color: 'hover:text-black dark:hover:text-gray-50'
    },
    { 
      Icon: Instagram, 
      href: 'https://instagram.com/vikashftw', 
      label: 'Instagram',
      color: 'hover:text-pink-600 dark:hover:text-pink-400'
    },
    { 
      Icon: XIcon, 
      href: 'https://x.com/VikashMall18194', 
      label: 'X',
      color: 'hover:text-black dark:hover:text-gray-100'
    },
    { 
      Icon: Linkedin, 
      href: 'https://linkedin.com/in/vikashftw', 
      label: 'LinkedIn',
      color: 'hover:text-blue-700 dark:hover:text-blue-400'
    },
  ];

  return (
    <div className="fixed bottom-8 right-8 flex space-x-6 z-50">
      {socials.map(({ Icon, href, label, color }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-2 rounded-full cursor-pointer"
          aria-label={label}
        >
          {/* More vibrant and visually appealing glow */}
          <div className="absolute inset-0 rounded-full bg-blue-500/50 dark:bg-indigo-600/50 
            opacity-0 group-hover:opacity-100 transition-all duration-300 blur-[40px]" />
          
          <div className="absolute inset-0 rounded-full bg-blue-400/50 dark:bg-indigo-400/40
            opacity-0 group-hover:opacity-100 transition-all duration-300 blur-[20px]" />
          
          <div className="relative z-10">
            <Icon 
              className={`w-6 h-6 transform transition-all duration-300
                text-gray-600 dark:text-gray-400 ${color}
                group-hover:scale-110`}
            />
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;