import { STATE_PATHS } from "./usaMapData";

// Density per state, roughly matching the reference heat-map:
// heavy in TX, FL, GA, NC, SC, VA, TN, OH, PA, NY, NJ, MA, IL, CA coast;
// medium across midwest/south; light in mountain west & plains.
const DENSITY: { name: string; cx: number; cy: number; rx: number; ry: number; count: number }[] = [
  { name: "Alabama", cx: 553, cy: 315, rx: 22, ry: 32, count: 18 },
  { name: "Arizona", cx: 195, cy: 290, rx: 38, ry: 40, count: 14 },
  { name: "Arkansas", cx: 486, cy: 280, rx: 28, ry: 25, count: 14 },
  { name: "California", cx: 90, cy: 230, rx: 38, ry: 75, count: 36 },
  { name: "California South", cx: 115, cy: 295, rx: 30, ry: 30, count: 22 },
  { name: "California North", cx: 85, cy: 145, rx: 35, ry: 35, count: 24 },
  { name: "California NorthTop", cx: 80, cy: 110, rx: 28, ry: 25, count: 14 },
  { name: "Colorado", cx: 285, cy: 205, rx: 48, ry: 30, count: 16 },
  { name: "Connecticut", cx: 752, cy: 158, rx: 12, ry: 6, count: 7 },
  { name: "Delaware", cx: 712, cy: 200, rx: 4, ry: 10, count: 4 },
  { name: "Florida", cx: 615, cy: 395, rx: 35, ry: 40, count: 34 },
  { name: "Georgia", cx: 605, cy: 315, rx: 28, ry: 32, count: 26 },
  { name: "Idaho", cx: 165, cy: 95, rx: 28, ry: 55, count: 8 },
  { name: "Illinois", cx: 514, cy: 190, rx: 22, ry: 42, count: 22 },
  { name: "Indiana", cx: 558, cy: 195, rx: 18, ry: 32, count: 16 },
  { name: "Iowa", cx: 462, cy: 150, rx: 38, ry: 22, count: 14 },
  { name: "Kansas", cx: 395, cy: 210, rx: 50, ry: 22, count: 12 },
  { name: "Kentucky", cx: 575, cy: 225, rx: 45, ry: 14, count: 16 },
  { name: "Louisiana", cx: 490, cy: 345, rx: 30, ry: 25, count: 16 },
  { name: "Maine", cx: 790, cy: 95, rx: 18, ry: 28, count: 8 },
  { name: "Maryland", cx: 692, cy: 200, rx: 24, ry: 8, count: 10 },
  { name: "Massachusetts", cx: 765, cy: 148, rx: 22, ry: 8, count: 14 },
  { name: "Michigan", cx: 553, cy: 95, rx: 35, ry: 45, count: 40 },
  { name: "Michigan Lower", cx: 555, cy: 125, rx: 28, ry: 30, count: 22 },
  { name: "Minnesota", cx: 460, cy: 75, rx: 38, ry: 42, count: 14 },
  { name: "Mississippi", cx: 506, cy: 315, rx: 18, ry: 35, count: 14 },
  { name: "Missouri", cx: 480, cy: 220, rx: 36, ry: 30, count: 20 },
  { name: "Montana", cx: 200, cy: 75, rx: 60, ry: 32, count: 8 },
  { name: "Nebraska", cx: 388, cy: 155, rx: 50, ry: 22, count: 8 },
  { name: "Nevada", cx: 140, cy: 200, rx: 25, ry: 50, count: 9 },
  { name: "New Hampshire", cx: 765, cy: 120, rx: 8, ry: 18, count: 6 },
  { name: "New Jersey", cx: 720, cy: 180, rx: 8, ry: 16, count: 12 },
  { name: "New Mexico", cx: 285, cy: 280, rx: 32, ry: 38, count: 11 },
  { name: "New York", cx: 716, cy: 138, rx: 38, ry: 22, count: 26 },
  { name: "North Carolina", cx: 660, cy: 265, rx: 48, ry: 18, count: 26 },
  { name: "North Dakota", cx: 390, cy: 55, rx: 45, ry: 18, count: 6 },
  { name: "Ohio", cx: 615, cy: 185, rx: 26, ry: 28, count: 22 },
  { name: "Oklahoma", cx: 395, cy: 275, rx: 55, ry: 20, count: 14 },
  { name: "Oregon", cx: 90, cy: 100, rx: 45, ry: 28, count: 22 },
  { name: "Oregon North", cx: 90, cy: 78, rx: 42, ry: 15, count: 16 },
  { name: "Pennsylvania", cx: 690, cy: 168, rx: 42, ry: 18, count: 24 },
  { name: "Rhode Island", cx: 770, cy: 156, rx: 5, ry: 5, count: 4 },
  { name: "South Carolina", cx: 630, cy: 295, rx: 24, ry: 18, count: 16 },
  { name: "South Dakota", cx: 388, cy: 115, rx: 48, ry: 20, count: 7 },
  { name: "Tennessee", cx: 565, cy: 255, rx: 55, ry: 14, count: 20 },
  { name: "Texas", cx: 395, cy: 340, rx: 75, ry: 55, count: 42 },
  { name: "Texas North", cx: 395, cy: 285, rx: 55, ry: 18, count: 22 },
  { name: "Texas South", cx: 410, cy: 410, rx: 20, ry: 22, count: 12 },
  { name: "Florida Panhandle", cx: 570, cy: 355, rx: 50, ry: 12, count: 16 },
  { name: "Utah", cx: 215, cy: 195, rx: 28, ry: 40, count: 10 },
  { name: "Vermont", cx: 755, cy: 118, rx: 7, ry: 18, count: 5 },
  { name: "Virginia", cx: 665, cy: 222, rx: 45, ry: 16, count: 20 },
  { name: "Washington", cx: 90, cy: 50, rx: 45, ry: 20, count: 12 },
  { name: "Washington North", cx: 90, cy: 38, rx: 42, ry: 12, count: 14 },
  { name: "West Virginia", cx: 640, cy: 210, rx: 24, ry: 18, count: 12 },
  { name: "Wisconsin", cx: 510, cy: 100, rx: 28, ry: 32, count: 14 },
  { name: "Wyoming", cx: 255, cy: 130, rx: 38, ry: 25, count: 7 },
  // Outliers placed individually
  { name: "Alaska", cx: 100, cy: 510, rx: 35, ry: 30, count: 5 },
  { name: "Hawaii", cx: 230, cy: 565, rx: 18, ry: 8, count: 4 },
  { name: "District of Columbia", cx: 690, cy: 205, rx: 1, ry: 1, count: 1 },
];

// Parse SVG paths into polygon rings for land-vs-water checks.
type Ring = [number, number][];
function parsePath(d: string): Ring[] {
  const tokens = d.match(/[MmLlZz]|[-+]?\d*\.?\d+/g) || [];
  const rings: Ring[] = [];
  let current: [number, number][] = [];
  let i = 0;
  let x = 0,
    y = 0;

  const flush = () => {
    if (current.length >= 3) rings.push(current);
    current = [];
  };

  while (i < tokens.length) {
    const cmd = tokens[i];
    if (cmd === "M" || cmd === "m") {
      flush();
      const rel = cmd === "m";
      x = rel ? x + parseFloat(tokens[i + 1]) : parseFloat(tokens[i + 1]);
      y = rel ? y + parseFloat(tokens[i + 2]) : parseFloat(tokens[i + 2]);
      current.push([x, y]);
      i += 3;
    } else if (cmd === "L" || cmd === "l") {
      const rel = cmd === "l";
      x = rel ? x + parseFloat(tokens[i + 1]) : parseFloat(tokens[i + 1]);
      y = rel ? y + parseFloat(tokens[i + 2]) : parseFloat(tokens[i + 2]);
      current.push([x, y]);
      i += 3;
    } else if (cmd === "Z" || cmd === "z") {
      if (current.length) current.push(current[0]);
      flush();
      i++;
    } else {
      if (current.length >= 1 && i + 1 < tokens.length) {
        x = parseFloat(tokens[i]);
        y = parseFloat(tokens[i + 1]);
        current.push([x, y]);
        i += 2;
      } else {
        i++;
      }
    }
  }
  flush();
  return rings;
}

function pointInRing(x: number, y: number, ring: Ring): boolean {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const xi = ring[i][0],
      yi = ring[i][1];
    const xj = ring[j][0],
      yj = ring[j][1];
    const intersect = (yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

const STATE_RINGS = STATE_PATHS.map((s) => ({ name: s.name, rings: parsePath(s.d) }));

function pointInAnyState(x: number, y: number): boolean {
  return STATE_RINGS.some((s) => s.rings.some((ring) => pointInRing(x, y, ring)));
}

// Compute area-weighted centroid for a state's largest ring.
function ringCentroid(ring: Ring): { x: number; y: number; area: number } {
  let a = 0, cx = 0, cy = 0;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const cross = ring[j][0] * ring[i][1] - ring[i][0] * ring[j][1];
    a += cross;
    cx += (ring[j][0] + ring[i][0]) * cross;
    cy += (ring[j][1] + ring[i][1]) * cross;
  }
  a *= 0.5;
  if (Math.abs(a) < 1e-6) {
    // Fallback: average of points
    const ax = ring.reduce((s, p) => s + p[0], 0) / ring.length;
    const ay = ring.reduce((s, p) => s + p[1], 0) / ring.length;
    return { x: ax, y: ay, area: 0 };
  }
  return { x: cx / (6 * a), y: cy / (6 * a), area: Math.abs(a) };
}

const STATE_CENTROIDS: Record<string, { x: number; y: number }> = (() => {
  const out: Record<string, { x: number; y: number }> = {};
  for (const s of STATE_RINGS) {
    let best: { x: number; y: number; area: number } | null = null;
    for (const ring of s.rings) {
      const c = ringCentroid(ring);
      // Ensure centroid falls inside the ring; otherwise skip (donut/multi-part)
      if (!pointInRing(c.x, c.y, ring)) continue;
      if (!best || c.area > best.area) best = c;
    }
    if (best) out[s.name] = { x: best.x, y: best.y };
  }
  return out;
})();

function nearestStateCenter(x: number, y: number): [number, number] {
  let bestDist = Infinity;
  let best: [number, number] = [x, y];
  for (const s of DENSITY) {
    const dx = x - s.cx;
    const dy = y - s.cy;
    const d = dx * dx + dy * dy;
    if (d < bestDist) {
      bestDist = d;
      best = [s.cx, s.cy];
    }
  }
  return best;
}

// Deterministic PRNG so dots are stable across renders
function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = seed;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Dot = { x: number; y: number; r: number; o: number; seed: number };
const DOTS: Dot[] = (() => {
  const rand = mulberry32(20060206);
  const out: Dot[] = [];
  let i = 0;
  for (const s of DENSITY) {
    for (let n = 0; n < s.count; n++) {
      let x = 0,
        y = 0,
        inState = false;
      let attempts = 0;
      // Keep trying within the state's density ellipse until we land on land.
      while (!inState && attempts < 60) {
        const t = 2 * Math.PI * rand();
        const u = Math.sqrt(rand());
        x = s.cx + Math.cos(t) * u * s.rx;
        y = s.cy + Math.sin(t) * u * s.ry;
        inState = pointInAnyState(x, y);
        attempts++;
      }
      if (!inState) {
        // Skip dots that couldn't land on land after many attempts.
        continue;
      }
      const r = 1.6 + rand() * 1.8;
      const o = 0.55 + rand() * 0.45;
      out.push({ x, y, r, o, seed: i++ });
    }
  }
  return out;
})();

const ABBR: Record<string, string> = {
  Alabama: "AL", Alaska: "AK", Arizona: "AZ", Arkansas: "AR", California: "CA",
  Colorado: "CO", Connecticut: "CT", Delaware: "DE", Florida: "FL", Georgia: "GA",
  Hawaii: "HI", Idaho: "ID", Illinois: "IL", Indiana: "IN", Iowa: "IA",
  Kansas: "KS", Kentucky: "KY", Louisiana: "LA", Maine: "ME", Maryland: "MD",
  Massachusetts: "MA", Michigan: "MI", Minnesota: "MN", Mississippi: "MS",
  Missouri: "MO", Montana: "MT", Nebraska: "NE", Nevada: "NV",
  "New Hampshire": "NH", "New Jersey": "NJ", "New Mexico": "NM", "New York": "NY",
  "North Carolina": "NC", "North Dakota": "ND", Ohio: "OH", Oklahoma: "OK",
  Oregon: "OR", Pennsylvania: "PA", "Rhode Island": "RI", "South Carolina": "SC",
  "South Dakota": "SD", Tennessee: "TN", Texas: "TX", Utah: "UT", Vermont: "VT",
  Virginia: "VA", Washington: "WA", "West Virginia": "WV", Wisconsin: "WI",
  Wyoming: "WY", "District of Columbia": "DC",
};

// Small states with offset labels (label sits outside the state, with a leader)
const SMALL_STATES = new Set([
  "Connecticut", "Delaware", "Maryland", "Massachusetts", "New Hampshire",
  "New Jersey", "Rhode Island", "Vermont", "District of Columbia",
  "Texas South", "California North", "California NorthTop",
  "Michigan Lower", "Oregon North", "Washington North",
]);

export function UsaCoverageMap() {
  return (
    <div className="rounded-2xl bg-navy-foreground/[0.04] ring-1 ring-navy-foreground/15 p-3 mx-auto max-w-3xl">
      <svg
        viewBox="0 0 1000 600"
        role="img"
        aria-label="Map of the United States with sparkling dots concentrated across populated regions, showing TSI Adjusters coverage"
        className="w-full h-auto"
      >
        <defs>
          <radialGradient id="dotGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.55" />
            <stop offset="60%" stopColor="var(--gold)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* State outlines */}
        <g
          fill="rgba(255,255,255,0.04)"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="0.8"
          strokeLinejoin="round"
        >
          {STATE_PATHS.map((s) => (
            <path key={s.name} d={s.d}>
              <title>{s.name}</title>
            </path>
          ))}
        </g>

        {/* Density dots */}
        {DOTS.map((d) => {
          const delay = ((d.seed * 137) % 280) / 100;
          return (
            <g key={d.seed}>
              <circle cx={d.x} cy={d.y} r={d.r * 5} fill="url(#dotGlow)" />
              <circle cx={d.x} cy={d.y} r={d.r} fill="var(--gold)" opacity={d.o}>
                <animate
                  attributeName="opacity"
                  values={`${d.o};${d.o * 0.4};${d.o}`}
                  dur="2.8s"
                  begin={`${delay}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}

        {/* State abbreviation labels */}
        <g
          fill="rgba(255,255,255,0.95)"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontWeight={600}
          textAnchor="middle"
          style={{ paintOrder: "stroke", stroke: "rgba(11,18,32,0.85)", strokeWidth: 2.5, strokeLinejoin: "round" }}
        >
          {DENSITY.filter((s) => !SMALL_STATES.has(s.name) && STATE_CENTROIDS[s.name]).map((s) => {
            const c = STATE_CENTROIDS[s.name];
            return (
              <text key={s.name} x={c.x} y={c.y + 3} fontSize={10}>
                {ABBR[s.name]}
              </text>
            );
          })}
        </g>

        {/* Northeast small-state labels with leader lines, stacked to the right */}
        <g
          fill="rgba(255,255,255,0.95)"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontWeight={600}
          fontSize={9}
          style={{ paintOrder: "stroke", stroke: "rgba(11,18,32,0.85)", strokeWidth: 2.5, strokeLinejoin: "round" }}
        >
          {[
            { name: "Vermont", x: 830, y: 110 },
            { name: "New Hampshire", x: 830, y: 124 },
            { name: "Massachusetts", x: 830, y: 148 },
            { name: "Rhode Island", x: 830, y: 162 },
            { name: "Connecticut", x: 830, y: 176 },
            { name: "New Jersey", x: 830, y: 190 },
            { name: "Delaware", x: 830, y: 204 },
            { name: "Maryland", x: 830, y: 218 },
            { name: "District of Columbia", x: 830, y: 232 },
          ].map((s) => {
            const src = STATE_CENTROIDS[s.name] ?? (() => { const d = DENSITY.find((d) => d.name === s.name)!; return { x: d.cx, y: d.cy }; })();
            return (
              <g key={s.name}>
                <line
                  x1={src.x}
                  y1={src.y}
                  x2={s.x - 2}
                  y2={s.y - 3}
                  stroke="rgba(255,255,255,0.35)"
                  strokeWidth={0.5}
                />
                <text x={s.x} y={s.y}>{ABBR[s.name]}</text>
              </g>
            );
          })}
        </g>
      </svg>
      <div className="mt-2 text-center text-xs uppercase tracking-[0.18em] text-navy-foreground/60">
        Servicing all 50 states
      </div>
    </div>
  );
}
