'use client';

import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 h-1 w-full origin-left bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-blue-500 z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
