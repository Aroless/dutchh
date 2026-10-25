"use client";

import { motion } from "framer-motion";

const elements = {
  div: motion.div,
  li: motion.li,
  section: motion.section,
};

interface RevealProps {
  children: React.ReactNode;
  as?: keyof typeof elements;
  delay?: number;
  className?: string;
}

// Ekrana girince bir kez yukarı kayarak beliren sarmalayıcı.
// Yalnızca ilk ekranın altındaki içerikte kullan: ilk ekrandaki içerik animasyonsuz görünmeli (LCP).
export default function Reveal({ children, as = "div", delay = 0, className }: RevealProps) {
  const Element = elements[as];

  return (
    <Element
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </Element>
  );
}
