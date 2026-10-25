"use client";

import { MotionConfig, motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    // "Hareketi azalt" tercihi açık kullanıcılarda kaydırma animasyonu atlanır
    <MotionConfig reducedMotion="user">
      <motion.div
        // Opaklık animasyonu yok: içerik JS yüklenmeden de görünür kalsın (LCP)
        initial={{ y: 10 }} // Başlangıç: 10px aşağıda
        animate={{ y: 0 }} // Bitiş: olması gereken yerde
        transition={{ ease: "easeOut", duration: 0.4 }} // Geçiş süresi: 0.4 saniye
      >
        {children}
      </motion.div>
    </MotionConfig>
  );
}
