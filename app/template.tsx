"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }} // Başlangıç: Görünmez ve 10px aşağıda
      animate={{ opacity: 1, y: 0 }}  // Bitiş: Görünür ve olması gereken yerde
      transition={{ ease: "easeInOut", duration: 0.4 }} // Geçiş süresi: 0.4 saniye
    >
      {children}
    </motion.div>
  );
}