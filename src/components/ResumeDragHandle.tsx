import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, FileText } from 'lucide-react';

const resumeUrl =
  'https://drive.google.com/file/d/1Hk3rIG7pnsAjj8PaixaYLHGujZOV7Q76/view?usp=sharing';

const VISIBILITY_THRESHOLD = 12;
const OPEN_SCROLL_DISTANCE = 2000;

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const ResumeDragHandle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isOpening, setIsOpening] = useState(false);

  const progressRef = useRef(0);
  const hasOpenedRef = useRef(false);
  const touchYRef = useRef<number | null>(null);

  const updateProgress = (delta: number) => {
    const next = clamp(progressRef.current + delta, 0, 1);
    progressRef.current = next;
    setProgress(next);

    if (next >= 1 && !hasOpenedRef.current) {
      hasOpenedRef.current = true;
      setIsOpening(true);
      window.open(resumeUrl, '_blank', 'noopener,noreferrer');

      window.setTimeout(() => {
        progressRef.current = 0;
        setProgress(0);
        setIsOpening(false);
      }, 500);
    }
  };

  useEffect(() => {
    const resetProgress = () => {
      progressRef.current = 0;
      hasOpenedRef.current = false;
      setProgress(0);
      setIsOpening(false);
    };

    const checkBottom = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const remaining = scrollHeight - (scrollTop + clientHeight);
      const atBottom = remaining <= VISIBILITY_THRESHOLD;

      setIsVisible(atBottom);

      if (!atBottom) {
        resetProgress();
      }
    };

    const handleWheel = (event: WheelEvent) => {
      if (!isVisible) {
        return;
      }

      if (event.deltaY > 0) {
        updateProgress(event.deltaY / OPEN_SCROLL_DISTANCE);
      } else if (event.deltaY < 0) {
        updateProgress(event.deltaY / OPEN_SCROLL_DISTANCE);
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchYRef.current = event.touches[0]?.clientY ?? null;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (!isVisible || touchYRef.current === null) {
        return;
      }

      const nextY = event.touches[0]?.clientY;
      if (typeof nextY !== 'number') {
        return;
      }

      const delta = touchYRef.current - nextY;
      touchYRef.current = nextY;
      updateProgress(delta / 220);
    };

    const handleTouchEnd = () => {
      touchYRef.current = null;
    };

    checkBottom();

    window.addEventListener('scroll', checkBottom, { passive: true });
    window.addEventListener('resize', checkBottom);
    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('scroll', checkBottom);
      window.removeEventListener('resize', checkBottom);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="pointer-events-none fixed bottom-0 left-0 right-0 z-50 px-8 pb-3 md:px-12"
        >
          <div className="relative mx-auto w-full">
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/25 via-slate-950/10 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 h-[2px] overflow-hidden rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent">
              <motion.div
                className="relative h-full rounded-full bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 shadow-[0_0_18px_rgba(129,140,248,0.55)]"
                animate={{ width: `${progress * 100}%` }}
                transition={{ ease: 'easeOut', duration: 0.08 }}
              >
                <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-r from-transparent to-white/70 blur-sm" />
              </motion.div>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-200/25 to-transparent" />

            <div className="relative flex min-h-[92px] flex-col items-center justify-end gap-3">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-slate-950/55 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.32em] text-slate-200 shadow-[0_0_25px_rgba(15,23,42,0.35)] backdrop-blur-xl">
                <span>{isOpening ? 'Opening Resume' : 'Scroll to Unlock Resume'}</span>
                <span className="h-1 w-1 rounded-full bg-white/30" />
                <div className="flex items-center gap-1.5 text-blue-200">
                  <FileText className="h-3.5 w-3.5" />
                  <span className="tabular-nums">{Math.round(progress * 100)}%</span>
                </div>
              </div>

              <div className="relative mb-[-22px]">
                <div className="absolute inset-0 rounded-full bg-blue-500/25 blur-xl" />
                <div className="absolute inset-0 rounded-full bg-violet-500/20 blur-2xl" />
                <div
                  className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-gradient-to-br from-slate-800/95 via-slate-900/95 to-slate-950/95 shadow-[0_0_24px_rgba(59,130,246,0.18)] backdrop-blur-xl"
                >
                  <div className="absolute inset-[1px] rounded-full border border-white/8" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/8 to-transparent" />
                  <div
                    className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-blue-500/70 via-indigo-400/55 to-violet-400/20 transition-all duration-100"
                    style={{ height: `${progress * 100}%` }}
                  />
                  <motion.div
                    animate={
                      isOpening
                        ? { scale: [1, 1.08, 1] }
                        : { y: [0, 3, 0] }
                    }
                    transition={{
                      duration: isOpening ? 0.35 : 1.6,
                      repeat: isOpening ? 0 : Infinity,
                      ease: 'easeInOut',
                    }}
                    className="relative z-10"
                  >
                    <ChevronDown className="h-5 w-5 text-white" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResumeDragHandle;
