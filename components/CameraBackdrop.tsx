"use client";

import { useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { animate, motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import CorridorScene from "@/components/CorridorScene";

const MAX_TILT = -7; // Sayfa sonunda kamera eğimi (derece)
const REDUCED_TILT = -3; // "Hareketi azalt" açıksa sabit eğim
const BASE_BLUR = 9; // px
const BASE_OPACITY = 0.16;
const FOCUS_OPACITY = 0.55;

const noopSubscribe = () => () => {};

function subscribeReducedMotion(callback: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

// Sayfanın tamamının arkasında duran "kamera": bulanık koridor sahnesi kaydırdıkça eğilir,
// önünde net bir büyüme çizgisi yükselir. focusTargetId bölümü ekrana girince görüntü ~1 sn'de netleşip tekrar bulanıklaşır.
export default function CameraBackdrop({ focusTargetId }: { focusTargetId?: string }) {
  // Portal yalnızca tarayıcıda; sunucuda null döner (hydration uyuşmazlığı olmaz)
  const isClient = useSyncExternalStore(noopSubscribe, () => true, () => false);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );

  const { scrollYProgress } = useScroll();
  const tilt = useSpring(useTransform(scrollYProgress, [0, 1], [0, MAX_TILT]), { stiffness: 60, damping: 20 });
  const graphProgress = useTransform(scrollYProgress, [0, 0.9], [0.04, 1]);

  const blur = useMotionValue(BASE_BLUR);
  const sceneFilter = useTransform(blur, (value) => `blur(${value}px)`);
  const sceneOpacity = useMotionValue(BASE_OPACITY);

  // Odak çekme (rack focus): hedef bölüm ekrana girince net → bekle → bulanık
  useEffect(() => {
    if (!focusTargetId || prefersReducedMotion) return;
    const target = document.getElementById(focusTargetId);
    if (!target) return;

    let running = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || running) return;
        running = true;
        const options = { duration: 2.6, times: [0, 0.38, 0.7, 1], ease: "easeInOut" as const };
        animate(sceneOpacity, [BASE_OPACITY, FOCUS_OPACITY, FOCUS_OPACITY, BASE_OPACITY], options);
        animate(blur, [BASE_BLUR, 0, 0, BASE_BLUR], { ...options, onComplete: () => { running = false; } });
      },
      { threshold: 0.6 }, // Bölüm büyük ölçüde görününce: kullanıcı kaydırmayı bitirirken odak çekilsin
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [focusTargetId, prefersReducedMotion, blur, sceneOpacity]);

  if (!isClient) return null;

  return createPortal(
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Kamera: eğilen katman. will-change ile bulanık sahne bir kez çizilip sadece döndürülür */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ rotate: prefersReducedMotion ? REDUCED_TILT : tilt, scale: 1.22 }}
      >
        <motion.div className="absolute inset-0" style={{ filter: sceneFilter, opacity: sceneOpacity }}>
          <CorridorScene className="size-full" />
        </motion.div>
      </motion.div>

      {/* Büyüme çizgisi: net, ince; kaydırdıkça soldan sağa yükselir */}
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none" className="absolute inset-0 size-full">
        <motion.path
          d="M -10 900 C 90 880, 150 840, 230 845 S 360 760, 440 745 S 560 700, 630 610 S 760 520, 830 420 S 940 300, 1010 230"
          fill="none"
          stroke="var(--accent)"
          strokeOpacity="0.45"
          strokeWidth={2}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength: prefersReducedMotion ? 1 : graphProgress }}
        />
      </svg>
    </div>,
    document.body,
  );
}
