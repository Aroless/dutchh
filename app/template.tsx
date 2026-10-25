"use client";

import { MotionConfig, motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    // "Hareketi azalt" tercihi açık kullanıcılarda kaydırma animasyonu atlanır
    <MotionConfig reducedMotion="user">
      {/* Sayfa geçişinde tepede dolup kaybolan altın çizgi. Transform'lu div'in dışında: fixed konum bozulmasın */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-accent motion-reduce:hidden"
        initial={{ scaleX: 0, opacity: 1 }}
        animate={{ scaleX: [0, 1, 1], opacity: [1, 1, 0] }}
        transition={{ duration: 0.9, times: [0, 0.6, 1], ease: "easeOut" }}
      />
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
