"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useAnimate } from "framer-motion";

// public/intro altındaki parçalar logo-icon.png'den piksel bazında ayrıldı; hepsi aynı tuval boyutunda (237x277),
// üst üste konunca logonun kendisi oluşur.
const pieces = ["piece-1", "piece-2", "piece-3", "piece-4", "piece-5"];

const MIN_SHOW_SECONDS = 0.75; // Yükleme çizgisinin dolma süresi
const MAX_WAIT_MS = 2500; // Sayfa yüklenmese de en geç bu sürede açıl

// Site ilk açıldığında (tam sayfa yüklemesi) bir kez oynar; layout'ta olduğu için sayfa geçişlerinde tekrar etmez.
// Logo + yazı gösterilir, yükleme çizgisi dolar, sayfa yüklenince logo parçaları rastgele yönlere hızlanarak fırlar.
export default function IntroSplash() {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const root = scope.current;
    if (!root) return;
    let cancelled = false;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const pageLoaded = new Promise<void>((resolve) => {
      if (document.readyState === "complete") resolve();
      else window.addEventListener("load", () => resolve(), { once: true });
    });
    const maxWait = new Promise<void>((resolve) => setTimeout(resolve, MAX_WAIT_MS));

    const run = async () => {
      const progress = animate("[data-progress]", { scaleX: 1 }, { duration: MIN_SHOW_SECONDS, ease: "easeInOut" });
      await Promise.all([progress, Promise.race([pageLoaded, maxWait])]);
      if (cancelled) return;

      if (prefersReducedMotion) {
        await animate(root, { opacity: 0 }, { duration: 0.3 });
      } else {
        // Her parça merkezden rastgele bir yöne, ekranın dışına doğru hızlanarak (ease-in) döne döne fırlar
        const reach = Math.hypot(window.innerWidth, window.innerHeight) * 0.6;
        root.querySelectorAll<HTMLElement>("[data-piece]").forEach((piece) => {
          const angle = Math.random() * Math.PI * 2;
          const distance = reach * (0.9 + Math.random() * 0.5);
          animate(
            piece,
            {
              x: Math.cos(angle) * distance,
              y: Math.sin(angle) * distance,
              rotate: (Math.random() - 0.5) * 720,
              scale: 0.6 + Math.random() * 0.8,
            },
            { duration: 0.55, ease: [0.6, 0, 1, 0.6] },
          );
        });
        animate("[data-fade]", { opacity: 0, y: 8 }, { duration: 0.25 });
        await animate("[data-backdrop]", { opacity: 0 }, { duration: 0.35, delay: 0.2 });
      }

      if (!cancelled) setIsDone(true);
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [animate, scope]);

  if (isDone) return null;

  return (
    <>
      <div ref={scope} id="intro-splash" aria-hidden="true" className="fixed inset-0 z-100 flex flex-col items-center justify-center">
        <div data-backdrop className="absolute inset-0 bg-paper"></div>

        <div className="relative aspect-237/277 w-24 md:w-28">
          {pieces.map((piece) => (
            <div key={piece} data-piece className="absolute inset-0">
              <Image src={`/intro/${piece}.png`} alt="" fill sizes="112px" loading="eager" />
            </div>
          ))}
        </div>

        <p data-fade className="relative mt-6 font-serif text-2xl tracking-tight text-ink md:text-3xl">
          Dutch Angle
        </p>
        <div data-fade className="relative mt-5 h-0.5 w-32 overflow-hidden bg-line">
          {/* Başlangıç ölçeği satır içi: Tailwind'in scale-x-0'ı CSS "scale" özelliğini kullanır, framer onu okuyamaz ve animasyonu anında bitirir */}
          <div data-progress className="h-full origin-left bg-accent" style={{ transform: "scaleX(0)" }}></div>
        </div>
      </div>

      {/* JavaScript kapalıysa açılış ekranı sayfayı kilitlemesin */}
      <noscript>
        <style>{"#intro-splash{display:none}"}</style>
      </noscript>
    </>
  );
}
