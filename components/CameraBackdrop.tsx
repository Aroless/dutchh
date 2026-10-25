"use client";

import { useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import CorridorScene from "@/components/CorridorScene";

const noopSubscribe = () => () => {};

// Sayfanın arkasında sabit duran, hafif eğik (dutch angle) ve saydam koridor sahnesi.
// body'ye portal ile basılır: template'teki transform'lu div fixed konumu bozmasın.
export default function CameraBackdrop() {
  // Portal yalnızca tarayıcıda; sunucuda null döner (hydration uyuşmazlığı olmaz)
  const isClient = useSyncExternalStore(noopSubscribe, () => true, () => false);
  if (!isClient) return null;

  return createPortal(
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* -4 derece eğim; scale-115 eğilen sahnenin köşelerde boşluk bırakmaması için */}
      <div className="absolute inset-0 scale-115 -rotate-4 opacity-15">
        <CorridorScene className="size-full" />
      </div>
    </div>,
    document.body,
  );
}
