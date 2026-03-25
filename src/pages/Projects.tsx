import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  devpostUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [canGoLeft, setCanGoLeft] = useState(false);
  const [canGoRight, setCanGoRight] = useState(true);

  const projects: Project[] = [
    {
      id: 1,
      title: "Guido",
      description:
        "Guido is a multi-agent simulation platform for 2026 Formula 1 strategy discovery and prediction, built to help teams model race outcomes under the sport's new regulations. It runs 1,000+ realistic race simulations in seconds, analyzes decision patterns with AI agents, and turns large time-series outputs into clear strategic recommendations. The project won 1st Place for NorthMark Compute & Cloud at HackTX 2025.",
      image: "/images/Guido.png",
      technologies: [
        "HackTX Winner",
        "Python",
        "TypeScript",
        "React",
        "Node.js",
        "Tailwind CSS",
        "WebSockets",
        "Gemini",
        "JavaScript",
      ],
      devpostUrl: "https://devpost.com/software/https-www-youtube-com-watch-v-dqw4w9wgxcq",
      githubUrl: "https://github.com/V-prajit/Guido",
      featured: true,
    },
    {
      id: 2,
      title: "Enpassant",
      description:
        "Enpassant is an AI-powered chess coach designed to elevate a player's game with an interactive board and live evaluation bar. Its core is a unique hybrid analysis system, using local Stockfish for instant feedback while leveraging a cloud engine and Google's Gemini API for deep, human-like explanations. The entire experience can be controlled hands-free with voice commands, making it an innovative and accessible tool for chess enthusiasts.",
      image: "/images/Enpassant.png",
      technologies: [
        "Google Hackathon Winner",
        "React",
        "Node.js",
        "Google Cloud",
        "Gemini API",
        "Stockfish",
        "Vite",
        "JavaScript",
        "Web Speech API",
        "REST API",
      ],
      liveUrl: "https://enpassant.wiki/",
      devpostUrl: "https://devpost.com/software/enpassant",
      githubUrl: "https://github.com/V-prajit/Enpassant",
      featured: true,
    },
    {
      id: 3,
      title: "CanDraw",
      description:
        "CanDraw is an AI copilot for whiteboarding and diagramming that transforms plain-language ideas into structured visuals in real time. It helps engineers quickly create diagrams such as database schemas and system flows, then export corresponding SQL for practical use. The project won 1st Place at HackGT 2025 in the Ergo track for best use of the Mastra agent framework for productivity. It reduces the friction of traditional diagramming tools and makes planning feel faster and more natural.",
      image: "/images/CanDraw.png",
      technologies: [
        "HackGT Winner",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Mastra",
        "OpenAI API",
        "SQL",
        "JavaScript",
      ],
      devpostUrl: "https://devpost.com/software/s-hrncfi",
      githubUrl: "https://github.com/V-prajit/CanDraw",
      featured: true,
    },
    {
      id: 4,
      title: "Viable",
      description:
        "Viable is an AI-powered product sandbox built for PMs to evaluate whether an idea is worth building before investing weeks in research and execution. It combines agentic market analysis, engineering planning, cost estimation, and GitHub PR generation into a single workflow that takes teams from prompt to implementation. The project was built at HackUTD 2025. It was designed to make early-stage product strategy feel faster, more rigorous, and easier to operationalize.",
      image: "/images/Viable.png",
      technologies: [
        "FastAPI",
        "Next.js",
        "React",
        "Python",
        "TypeScript",
        "Pydantic",
        "NVIDIA Nemotron",
        "Serper API",
        "GitHub REST API",
        "ripgrep",
      ],
      devpostUrl: "https://devpost.com/software/viable-shwc07",
      githubUrl: "https://github.com/vikashftw/Viably",
      featured: true,
    },
    {
      id: 5,
      title: "Vikash Estate",
      description:
        "Vikash Estate is a leading real estate agency helping clients buy, sell, and rent properties in the most desirable neighborhoods. We are dedicated to providing exceptional service and making the buying and selling process as smooth as possible. Our mission is to help clients achieve their real estate goals with expert advice, personalized service, and deep local market knowledge. Whether you're looking to buy, sell, or rent a property, we are here to help you every step of the way.",
      image: "/images/VikashEstate.png",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Vite",
        "Firebase",
        "OAuth 2.0",
        "JWT",
        "Tailwind CSS",
        "Redux",
      ],
      liveUrl: "https://vikash-estate.onrender.com/search",
      githubUrl: "https://github.com/vikashftw/mern-estate",
      featured: true,
    },
    {
      id: 6,
      title: "HealthDex",
      description:
        "HealthDex is a robust Personal Health Management System (PHMS) for tracking vital signs, medications, diet logs, and appointments. Its proactive alert system sends in-app and email notifications for abnormal readings, ensuring timely attention. User data is secured with Firebase Authentication and biometric login support. To maximize accessibility, the app integrates LibreTranslate for multi-language support, making it a personal and secure health companion.",
      image: "/images/HealthDex.jpg",
      technologies: [
        "Jetpack Compose",
        "Kotlin",
        "Ktor",
        "Firebase",
        "LibreTranslate",
        "Docker",
        "Gmail API",
        "Kotlin Coroutines",
        "Android Studio",
      ],
      githubUrl: "https://github.com/V-prajit/HealthDex",
      featured: true,
    },
    {
      id: 7,
      title: "Rapid Relief",
      description:
        "Rapid Relief is a mobile app designed to provide emergency services and real-time disaster tracking for users affected by natural disasters, such as hurricanes. The app allows users to locate nearby resources and activate an SOS feature that connects them with medical services, acting as a potential replacement for 911 in disaster scenarios. Integrated NASA and GDACS APIs provide live updates on natural disasters globally, helping users stay informed in real-time.",
      image: "/images/RapidRelief.png",
      technologies: [
        "TypeScript",
        "Python",
        "React Native",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Streamlit",
        "NASA API",
        "GDACS API",
        "Expo Go",
      ],
      devpostUrl: "https://devpost.com/software/rapid-response-gkqtp8",
      githubUrl: "https://github.com/vikashftw/RapidRelief",
      featured: true,
    },
    {
      id: 8,
      title: "ToDesktopX",
      description:
        "This project is an advanced replica of the popular Web2Desktop app, ToDesktop, designed to highlight my expertise in creating fully responsive applications across all devices using Tailwind CSS. I developed custom JavaScript functions, including animations that make company logos slide based on scroll direction, to enhance interactivity and user experience. By working exclusively with plain HTML, CSS, and JavaScript, without relying on additional frameworks, I deepened my understanding of core web technologies. This project not only challenged my technical abilities but also significantly advanced my skills in responsive design, CSS, and JavaScript.",
      image: "/images/ToDesktop.png",
      technologies: [
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "Font Awesome"
      ],
      liveUrl: "https://todesktopp.vercel.app/",
      githubUrl: "https://github.com/vikashftw/ToDesktop",
      featured: true,
    },
    {
      id: 9,
      title: "AutoGuardian",
      description:
        "AutoGuardian is a comprehensive app helping car owners easily maintain their vehicles. It features smart maintenance scheduling, detailed service history tracking, and a library of car care tutorials. Users can find nearby certified mechanics and receive personalized vehicle care recommendations through an AI-powered virtual assistant. The app also includes customizable service reminders, digital documentation storage, and a user-friendly interface for tracking multiple vehicles.",
      image: "/images/AutoGuardian.png",
      technologies: [
        "React Native",
        "Supabase",
        "PostgreSQL",
        "OpenAI API",
        "Expo",
        "Git",
        "Babel",
        "JavaScript",
        "REST API",
        "OAuth 2.0",
      ],
      devpostUrl: "https://devpost.com/software/autoguardian-wbcgo6",
      githubUrl: "https://github.com/vikashftw/AutoGuardian",
      featured: true,
    },
  ];

  useEffect(() => {
    if (activeIndex < 0) {
      setActiveIndex(0);
    } else if (activeIndex >= projects.length) {
      setActiveIndex(projects.length - 1);
    }

    setCanGoLeft(activeIndex > 0);
    setCanGoRight(activeIndex < projects.length - 1);
  }, [activeIndex, projects.length]);

  const nextProject = () => {
    if (canGoRight) {
      setActiveIndex((prev) => Math.min(prev + 1, projects.length - 1));
    }
  };

  const prevProject = () => {
    if (canGoLeft) {
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <div className="h-full w-full py-20 px-4">
      <motion.h1
        className="text-5xl font-bold text-center mb-20 bg-clip-text text-transparent 
                    bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                    dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400
                    hover:bg-gradient-to-l transition-all duration-500 leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        My Projects
      </motion.h1>

      <div className="relative max-w-[1400px] mx-auto">
        {/* Navigation Buttons */}
        <AnimatePresence>
          {canGoLeft && (
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onClick={prevProject}
              className="absolute -left-28 top-1/2 -translate-y-1/2 z-10 group"
            >
              <div
                className="relative p-5 rounded-full bg-white/5 backdrop-blur-lg border border-white/10
                shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.1)]
                transform transition-all duration-300 group-hover:scale-110"
              >
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                  blur-xl group-hover:blur-2xl transition-all duration-300"
                />
                <ChevronLeft className="w-6 h-6 relative z-10 text-gray-800 dark:text-gray-200" />
              </div>
            </motion.button>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {canGoRight && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={nextProject}
              className="absolute -right-28 top-1/2 -translate-y-1/2 z-10 group"
            >
              <div
                className="relative p-5 rounded-full bg-white/5 backdrop-blur-lg border border-white/10
                shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.1)]
                transform transition-all duration-300 group-hover:scale-110"
              >
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 
                  blur-xl group-hover:blur-2xl transition-all duration-300"
                />
                <ChevronRight className="w-6 h-6 relative z-10 text-gray-800 dark:text-gray-200" />
              </div>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Projects Carousel */}
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* Project Image */}
              <motion.div
                className="relative group rounded-2xl overflow-hidden aspect-video
                  shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={projects[activeIndex].image}
                  alt={projects[activeIndex].title}
                  className="w-full h-full object-cover" //object-contain for og size; object-cover to zoomfit, object-fill to stretch
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>

              {/* Project Details */}
              <div className="space-y-8">
                <h2
                  className="text-4xl font-bold bg-clip-text text-transparent relative
              bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500
              dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400
              hover:bg-gradient-to-l transition-all duration-500
              after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 
              after:bg-gradient-to-r after:from-blue-600/0 after:via-cyan-500/50 after:to-teal-500/0 
              after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-500"
                >
                  <motion.span
                    key={activeIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      background: "inherit",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {projects[activeIndex].title}
                  </motion.span>
                </h2>

                <motion.p
                  className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {projects[activeIndex].description}
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {projects[activeIndex].technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-4 py-2 rounded-full text-base ${
                        tech.includes("Winner")
                          ? "bg-amber-100 text-amber-900 dark:bg-amber-400/20 dark:text-amber-200"
                          : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>

                <motion.div
                  className="flex space-x-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {projects[activeIndex].liveUrl && (
                    <a
                      href={projects[activeIndex].liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center space-x-3 px-8 py-4 rounded-lg
                        overflow-hidden transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0
                        hover:shadow-lg dark:hover:shadow-blue-500/25 active:shadow-md"
                    >
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700
                        dark:from-blue-500 dark:to-blue-600 transition-all duration-300
                        group-hover:scale-[1.05] group-active:scale-[0.98] group-hover:opacity-90"
                      />
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                        bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.2),transparent_70%)]"
                      />
                      <ExternalLink
                        size={24}
                        className="relative z-10 text-white transition-transform duration-300 
                        group-hover:scale-110 group-active:scale-95"
                      />
                      <span
                        className="relative z-10 text-white text-lg font-medium transition-all duration-300
                        group-hover:tracking-wide group-active:tracking-normal"
                      >
                        Visit Site
                      </span>
                    </a>
                  )}
                  {projects[activeIndex].devpostUrl && (
                    <a
                      href={projects[activeIndex].devpostUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center space-x-3 px-8 py-4 rounded-lg
                        overflow-hidden transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0
                        hover:shadow-lg dark:hover:shadow-cyan-900/30 active:shadow-md"
                    >
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-[#003E54] to-[#0B5F7A]
                        transition-all duration-300 group-hover:scale-[1.05] group-active:scale-[0.98]
                        group-hover:opacity-95"
                      />
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                        bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.16),transparent_70%)]"
                      />
                      <div
                        className="absolute inset-y-0 left-0 w-16 -translate-x-full group-hover:translate-x-[220px]
                        transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      />
                      <img
                        src="https://cdn.simpleicons.org/devpost/ffffff"
                        alt=""
                        aria-hidden="true"
                        className="relative z-10 h-6 w-6 transition-transform duration-300
                        group-hover:scale-110 group-active:scale-95"
                      />
                      <span
                        className="relative z-10 text-white text-lg font-medium transition-all duration-300
                        group-hover:tracking-wide group-active:tracking-normal"
                      >
                        Visit Devpost
                      </span>
                    </a>
                  )}
                  {projects[activeIndex].githubUrl && (
                    <a
                      href={projects[activeIndex].githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center space-x-3 px-8 py-4 rounded-lg
                        overflow-hidden transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0
                        hover:shadow-lg dark:hover:shadow-gray-500/25 active:shadow-md"
                    >
                      <div
                        className="absolute inset-0 bg-gray-200 dark:bg-gray-700
                        transition-all duration-300 group-hover:scale-[1.05] group-active:scale-[0.98]
                        group-hover:opacity-90"
                      />
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                        bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent_70%)]"
                      />
                      <Github
                        size={24}
                        className="relative z-10 text-gray-800 dark:text-gray-200 transition-transform duration-300
                        group-hover:scale-110 group-active:scale-95"
                      />
                      <span
                        className="relative z-10 text-gray-800 dark:text-gray-200 text-lg font-medium
                        transition-all duration-300 group-hover:tracking-wide group-active:tracking-normal"
                      >
                        View Code
                      </span>
                    </a>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Project Navigation Dots */}
        <div className="flex justify-center space-x-4 mt-16">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="group relative"
            >
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 
                ${
                  index === activeIndex
                    ? "bg-blue-600 dark:bg-blue-400 scale-125"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
              />
              <div
                className={`absolute -inset-2 rounded-full transition-all duration-300
                bg-blue-500/20 dark:bg-blue-400/20 opacity-0 scale-0
                ${
                  index === activeIndex
                    ? "opacity-100 scale-100"
                    : "group-hover:opacity-50 group-hover:scale-100"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
