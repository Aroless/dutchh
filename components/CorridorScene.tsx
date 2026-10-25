// Tek kaçış noktalı koridor: sonunda duvarda tablo lambası altında Dutch Angle logosu ve yazısı.
// Arka plan illüstrasyonu (CameraBackdrop içinde bulanık ve saydam kullanılır). Koordinatlar viewBox'a göre.

const VP = { x: 800, y: 470 }; // Kaçış noktası
const END_WALL = { left: 600, right: 1000, top: 300, bottom: 640 };

// Kaçış noktasından geçen zemin çizgisinin ekranın altındaki (y=1000) x değeri
function floorLineBottomX(xOnEndWall: number) {
  const t = (1000 - VP.y) / (END_WALL.bottom - VP.y);
  return VP.x + (xOnEndWall - VP.x) * t;
}

// Sol duvar-zemin kesişim çizgisinde verilen y için x
function leftFloorEdgeX(y: number) {
  return END_WALL.left - ((y - END_WALL.bottom) * END_WALL.left) / (1000 - END_WALL.bottom);
}

const floorLines = Array.from({ length: 9 }, (_, i) => END_WALL.left + i * 50);
const floorBands = [690, 760, 860];
const ceilingLights = [
  { y: 30, h: 34, w: 320 },
  { y: 150, h: 20, w: 190 },
  { y: 228, h: 12, w: 110 },
  { y: 272, h: 7, w: 60 },
];
// Sol duvardaki kapılar [x1, x2]; sağ duvar aynalanır
const doors: [number, number][] = [
  [150, 300],
  [420, 500],
];

function doorPolygon(x1: number, x2: number, mirror: boolean) {
  const point = (x: number) => {
    const floorY = 1000 - 0.6 * x;
    const ceilingY = x / 2;
    const topY = floorY - (floorY - ceilingY) * 0.6;
    return { x: mirror ? 1600 - x : x, floorY, topY };
  };
  const a = point(x1);
  const b = point(x2);
  return `${a.x},${a.floorY} ${a.x},${a.topY} ${b.x},${b.topY} ${b.x},${b.floorY}`;
}

export default function CorridorScene({ className = "" }: { className?: string }) {
  const { left, right, top, bottom } = END_WALL;

  return (
    <svg viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" className={className}>
      <defs>
        <radialGradient id="lamp-glow" cx="800" cy="400" r="230" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="var(--accent)" stopOpacity="0.55" />
          <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="floor-glow" cx="800" cy="700" r="260" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="var(--accent)" stopOpacity="0.25" />
          <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
        <clipPath id="end-wall-clip">
          <rect x={END_WALL.left} y={END_WALL.top} width={END_WALL.right - END_WALL.left} height={END_WALL.bottom - END_WALL.top} />
        </clipPath>
        <radialGradient id="vignette" cx="800" cy="480" r="900" gradientUnits="userSpaceOnUse">
          <stop offset="0.45" stopColor="var(--ink)" stopOpacity="0" />
          <stop offset="1" stopColor="var(--ink)" stopOpacity="0.35" />
        </radialGradient>
      </defs>

      {/* Duvarlar, tavan, zemin */}
      <polygon points={`0,0 1600,0 ${right},${top} ${left},${top}`} fill="var(--ink)" fillOpacity="0.1" />
      <polygon points={`0,1000 1600,1000 ${right},${bottom} ${left},${bottom}`} fill="var(--ink)" fillOpacity="0.24" />
      <polygon points={`0,0 ${left},${top} ${left},${bottom} 0,1000`} fill="var(--ink)" fillOpacity="0.15" />
      <polygon points={`1600,0 ${right},${top} ${right},${bottom} 1600,1000`} fill="var(--ink)" fillOpacity="0.18" />
      <rect x={left} y={top} width={right - left} height={bottom - top} fill="var(--paper-light)" />

      {/* Zemin perspektif çizgileri ve derinlik bantları */}
      {floorLines.map((x) => (
        <line key={x} x1={x} y1={bottom} x2={floorLineBottomX(x)} y2={1000} stroke="var(--ink)" strokeOpacity="0.14" strokeWidth="2" />
      ))}
      {floorBands.map((y) => (
        <line key={y} x1={leftFloorEdgeX(y)} y1={y} x2={1600 - leftFloorEdgeX(y)} y2={y} stroke="var(--ink)" strokeOpacity="0.12" strokeWidth="2" />
      ))}
      <ellipse cx="800" cy="700" rx="260" ry="60" fill="url(#floor-glow)" />

      {/* Tavan lambaları */}
      {ceilingLights.map((light) => (
        <rect key={light.y} x={800 - light.w / 2} y={light.y} width={light.w} height={light.h} fill="var(--paper-light)" fillOpacity="0.85" />
      ))}

      {/* Yan kapılar */}
      {doors.map(([x1, x2]) => (
        <g key={x1}>
          <polygon points={doorPolygon(x1, x2, false)} fill="var(--ink)" fillOpacity="0.14" />
          <polygon points={doorPolygon(x1, x2, true)} fill="var(--ink)" fillOpacity="0.14" />
        </g>
      ))}

      {/* Uç duvar: lamba ışığı, tablo, logo, yazı */}
      <ellipse cx="800" cy="430" rx="230" ry="190" fill="url(#lamp-glow)" clipPath="url(#end-wall-clip)" />

      {/* Tablo lambası */}
      <rect x="755" y="360" width="90" height="9" rx="4" fill="var(--ink)" />
      <rect x="797" y="369" width="6" height="12" fill="var(--ink)" />

      {/* Çerçeve ve paspartu */}
      <rect x="722" y="381" width="156" height="176" fill="var(--paper-light)" stroke="var(--accent)" strokeWidth="7" />
      <rect x="736" y="395" width="128" height="148" fill="none" stroke="var(--line)" strokeWidth="2" />

      {/* Logo (PNG'nin boşluksuz kısmı kırpılarak) */}
      <svg x="748" y="407" width="104" height="124" viewBox="588 168 234 274">
        <image href="/logo-icon.png" width="1408" height="768" />
      </svg>

      <text x="800" y="602" textAnchor="middle" fontFamily="Georgia, 'Times New Roman', serif" fontSize="30" fill="var(--ink)" letterSpacing="-0.5">
        Dutch Angle
      </text>

      {/* Kenar kararması */}
      <rect width="1600" height="1000" fill="url(#vignette)" />
    </svg>
  );
}
