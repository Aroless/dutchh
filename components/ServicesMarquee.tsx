import Link from "next/link";
import { servicesData } from "@/lib/servicesData";

const services = Object.values(servicesData);

// Kesintisiz kayma için liste iki kez basılır; ikinci kopya ekran okuyucu ve klavyeden gizlenir
function ServiceList({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {services.map((service) => (
        <li key={service.slug} className="flex items-center">
          <Link
            href={`/hizmetler/${service.categorySlug}/${service.slug}`}
            tabIndex={hidden ? -1 : undefined}
            className="px-5 font-serif text-lg whitespace-nowrap text-muted-ink transition-colors hover:text-ink focus-visible:text-ink focus-visible:outline-none md:px-8 md:text-2xl"
          >
            {service.title}
          </Link>
          <span aria-hidden="true" className="text-xs text-accent md:text-sm">✦</span>
        </li>
      ))}
    </ul>
  );
}

export default function ServicesMarquee({ className = "" }: { className?: string }) {
  return (
    <nav aria-label="Hizmetlerimiz" className={`group overflow-hidden border-y border-line py-4 mask-x-from-90% mask-x-to-100% md:py-5 ${className}`}>
      {/* globals.css'teki marquee keyframe'i. Kenarlar maskeyle yumuşakça silinir. Yalnızca klavye odağında durur (hover'da ani durma yok), "hareketi azalt" açıksa hiç kaymaz */}
      <div className="flex w-max animate-[marquee_60s_linear_infinite] group-focus-within:[animation-play-state:paused] motion-reduce:animate-none">
        <ServiceList />
        <ServiceList hidden />
      </div>
    </nav>
  );
}
