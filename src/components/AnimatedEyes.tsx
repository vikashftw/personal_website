import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedEyes = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [eyePositions, setEyePositions] = useState({ left: { x: 0, y: 0 }, right: { x: 0, y: 0 } });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const calculateEyePosition = (eyeElement: HTMLElement) => {
      const eyeRect = eyeElement.getBoundingClientRect();
      const angle = Math.atan2(
        mousePosition.y - (eyeRect.top + eyeRect.height / 2),
        mousePosition.x - (eyeRect.left + eyeRect.width / 2)
      );
      const distance = 10;
      return {
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
      };
    };

    const leftEye = document.getElementById('left-eye');
    const rightEye = document.getElementById('right-eye');

    if (leftEye && rightEye) {
      setEyePositions({
        left: calculateEyePosition(leftEye),
        right: calculateEyePosition(rightEye),
      });
    }
  }, [mousePosition]);

  const Eye = ({ id, position }: { id: string; position: { x: number; y: number } }) => (
    <div id={id} className="relative w-10 h-10">
      <div className="absolute inset-0 bg-gray-0 dark:bg-white rounded-full border-2 
        border-gray-300 dark:border-gray-600 shadow-lg overflow-hidden">
        <motion.div
          className="absolute w-5 h-5 bg-white dark:bg-gray-0 rounded-full"
          style={{
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px)`,
          }}
        >
          <div className="absolute top-1/2 left-1/2 w-3 h-3 -mt-1.5 -ml-1.5 
            bg-black dark:bg-gray-900 rounded-full" />
        </motion.div>
      </div>
    </div>
  );

  return (
    <div className="fixed top-4 right-4 z-50 flex space-x-2">
      <Eye id="left-eye" position={eyePositions.left} />
      <Eye id="right-eye" position={eyePositions.right} />
    </div>
  );
};

export default AnimatedEyes;