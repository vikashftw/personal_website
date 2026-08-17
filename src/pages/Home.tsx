import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import NavigationDots from '../components/NavigationDots';

interface HomeProps {
  activeSection: string;
  onNavigate: (sectionId: 'home' | 'about' | 'career' | 'projects' | 'contact') => void;
}

const Home = ({ activeSection, onNavigate }: HomeProps) => {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const ctaOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);
  const ctaTranslateY = useTransform(scrollYProgress, [0, 0.08], [0, 28]);
  const ctaScale = useTransform(scrollYProgress, [0, 0.08], [1, 0.96]);

  return (
    <div className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden px-4 py-16">
      <div className="pointer-events-none absolute inset-x-0 top-12 -z-10 mx-auto h-64 w-[min(42rem,85vw)] rounded-full bg-gradient-to-r from-sky-400/20 via-cyan-300/15 to-indigo-400/20 blur-3xl dark:from-sky-500/20 dark:via-cyan-400/10 dark:to-indigo-500/20" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 mx-auto h-48 w-[min(34rem,75vw)] rounded-full bg-gradient-to-r from-white/40 via-sky-100/40 to-indigo-100/40 blur-3xl dark:from-slate-900/0 dark:via-sky-900/20 dark:to-indigo-900/20" />
      <AnimatePresence>
        {activeSection === 'home' && (
          <motion.div
            key="navigation-dots"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <NavigationDots activeSection={activeSection} onNavigate={onNavigate} />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 flex w-full flex-col items-center justify-center pb-28 pt-16"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto max-w-4xl rounded-[2rem] border border-white/40 bg-white/65 p-8 shadow-[0_25px_80px_-32px_rgba(14,116,144,0.45)] backdrop-blur-2xl md:p-12 dark:border-white/10 dark:bg-slate-950/45 dark:shadow-[0_25px_90px_-36px_rgba(56,189,248,0.35)]"
        >
          <motion.div
            className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-sky-500/20 via-cyan-400/10 to-indigo-500/20 blur-2xl"
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.45 }}
            className="mb-6 flex justify-center"
          >
            <span className="rounded-full border border-sky-500/20 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-sky-700 shadow-sm dark:border-sky-400/20 dark:bg-slate-900/60 dark:text-sky-200">
              Software Engineer
            </span>
          </motion.div>

          <motion.h1
            className="mb-8 bg-gradient-to-r from-sky-600 via-cyan-600 to-indigo-600 bg-clip-text text-center text-5xl font-bold text-transparent dark:from-sky-300 dark:via-cyan-200 dark:to-indigo-300 md:text-6xl"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            Vikash Mall
          </motion.h1>
          
          <motion.div
            className="mx-auto max-w-2xl space-y-4 text-center text-lg text-slate-700 dark:text-slate-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="leading-relaxed">
              Honors B.S. in Computer Science at UT Arlington (Expected: May 2027)
            </p>
            <p className="leading-relaxed">
              GPA: 4.0/4.0. 4x Hackathon Winner (UC Berkeley, GT, UT Austin, TAMU)
            </p>
            <p className="leading-relaxed">
              SWE Intern @ Salesforce (Summer 2026); Year-Round SWE @ Hunt (2025-26)
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5, ease: 'easeOut' }}
        >
          <motion.button
            type="button"
            aria-label="Scroll down to see more of my work"
            onClick={() => onNavigate('about')}
            style={{
              opacity: ctaOpacity,
              y: ctaTranslateY,
              scale: ctaScale,
            }}
            whileHover={shouldReduceMotion ? undefined : { scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500/20 via-cyan-400/25 to-indigo-500/20 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative flex min-w-[17rem] flex-col items-center gap-3 overflow-hidden rounded-full border border-white/50 bg-white/72 px-6 py-4 shadow-[0_18px_55px_-25px_rgba(14,116,144,0.55)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/65 dark:shadow-[0_20px_60px_-30px_rgba(56,189,248,0.45)]">
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent dark:via-sky-100/50" />
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-sky-700 dark:text-sky-200">
                Scroll to Explore
              </span>
              <span className="text-sm text-slate-600 dark:text-slate-300">
                See more of my work and experience
              </span>
              <motion.span
                animate={shouldReduceMotion ? undefined : { y: [0, 6, 0] }}
                transition={
                  shouldReduceMotion
                    ? undefined
                    : { duration: 1.8, repeat: Infinity, ease: 'easeInOut' }
                }
                className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-indigo-500 text-white shadow-lg shadow-sky-500/30"
              >
                <ChevronDown className="h-5 w-5" />
              </motion.span>
            </div>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
