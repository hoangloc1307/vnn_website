'use client';

import { Variants, motion } from 'framer-motion';

const variants: Variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main variants={variants} initial='hidden' animate='enter' transition={{ ease: 'easeInOut', duration: 1 }}>
      {children}
    </motion.main>
  );
}
