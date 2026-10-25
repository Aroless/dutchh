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
            className="px-6 font-serif text-2xl whitespace-nowrap text-ink transition-colors hover:text-gold focus-visible:text-gold focus-visible:outline-none md:px-10 md:text-4xl"
          >
            {service.title}
          </Link>
          <span aria-hidden="true" className="text-lg text-accent md:text-xl">✦</span>
        </li>
      ))}
    </ul>
  );
}

export default function ServicesMarquee({ className = "" }: { className?: string }) {
  return (
    <nav aria-label="Hizmetlerimiz" className={`group overflow-hidden border-y border-ink py-6 md:py-8 ${className}`}>
      {/* globals.css'teki marquee keyframe'i; hover/focus'ta durur, "hareketi azalt" açıksa hiç kaymaz */}
      <div className="flex w-max animate-[marquee_45s_linear_infinite] group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] motion-reduce:animate-none">
        <ServiceList />
        <ServiceList hidden />
      </div>
    </nav>
  );
}
