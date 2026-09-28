const CELL_SIZE = 12;
const GAP = 3;
const CELL_STEP = CELL_SIZE + GAP;

const PACMAN_RADIUS = 8;
const PADDING = 10;

const MOVE_DURATION = 40;   // seconds Pac-Man spends travelling
const CAUGHT_PAUSE = 1.5;   // seconds for the caught/shrink moment before restart
const CYCLE = MOVE_DURATION + CAUGHT_PAUSE;
const EAT_FADE = 0.10;

function getLevelColor(level) {
  const colors = {
    NONE: "#161b22",
    FIRST_QUARTILE: "#0e4429",
    SECOND_QUARTILE: "#006d32",
    THIRD_QUARTILE: "#26a641",
    FOURTH_QUARTILE: "#39d353",
  };
  return colors[level] ?? colors.NONE;
}

function getRowFromDate(dateString) {
  return new Date(`${dateString}T00:00:00Z`).getUTCDay();
}

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function pacmanShape(halfAngleDeg) {
  const a = (halfAngleDeg * Math.PI) / 180;
  const x = (PACMAN_RADIUS * Math.cos(a)).toFixed(3);
  const y = (PACMAN_RADIUS * Math.sin(a)).toFixed(3);
  return `M 0 0 L ${x} ${-y} A ${PACMAN_RADIUS} ${PACMAN_RADIUS} 0 1 0 ${x} ${y} Z`;
}

const f = (n) => Number(n).toFixed(6);

/* Police ghost, drawn centred on (0,0) */
function policeGhost() {
  return `
    <!-- body -->
    <path fill="#4c6ef5" stroke="#111" stroke-width="0.8"
      d="M -7 7 L -7 -1 A 7 7 0 0 1 7 -1 L 7 7 L 4.67 5 L 2.33 7 L 0 5 L -2.33 7 L -4.67 5 Z"/>
    <!-- eyes -->
    <circle cx="-2.6" cy="-1" r="2" fill="#fff"/>
    <circle cx="2.6" cy="-1" r="2" fill="#fff"/>
    <circle cx="-2.2" cy="-0.6" r="0.9" fill="#000"/>
    <circle cx="3" cy="-0.6" r="0.9" fill="#000"/>
    <!-- police cap -->
    <rect x="-7" y="-9" width="14" height="3.5" rx="1" fill="#1c2a5c" stroke="#111" stroke-width="0.6"/>
    <rect x="-8" y="-6" width="16" height="1.6" rx="0.8" fill="#111"/>
    <circle cx="0" cy="-7.2" r="1" fill="#ffd43b"/>
    <!-- flashing siren -->
    <circle cx="0" cy="-11" r="2.2" fill="#ff0000">
      <animate attributeName="fill" dur="0.5s" repeatCount="indefinite"
        calcMode="discrete" values="#ff2b2b;#2b6bff"/>
    </circle>`;
}

/*
 * "Today" = the latest date in the calendar
 * (avoids timezone mismatches with new Date()).
 */
function findTodayCell(calendar) {
  let latest = null;
  let cell = null;

  calendar.weeks.forEach((week, x) => {
    for (const day of week.contributionDays) {
      if (latest === null || day.date > latest) {
        latest = day.date;
        cell = { x, y: getRowFromDate(day.date) };
      }
    }
  });

  return cell;
}

export function buildSvg(calendar, fullPath) {
  const columns = calendar.weeks.length;
  const rows = 7;

  const width = columns * CELL_STEP - GAP + PADDING * 2;
  const height = rows * CELL_STEP - GAP + PADDING * 2;

  /* ---------------- Police goes right after today ---------------- */

  const today = findTodayCell(calendar);
  const todayIndex = today
    ? fullPath.findIndex((p) => p.x === today.x && p.y === today.y)
    : -1;

  const policeIndex =
    todayIndex === -1
      ? fullPath.length - 1
      : Math.min(todayIndex + 1, fullPath.length - 1);

  const path = fullPath.slice(0, policeIndex + 1);

  const totalSteps = Math.max(path.length - 1, 1);
  const moveFrac = MOVE_DURATION / CYCLE;

  const pathIndex = new Map();
  path.forEach((p, i) => pathIndex.set(`${p.x},${p.y}`, i));

  /* ---------------- Contribution cells ---------------- */

  const cells = [];

  for (let x = 0; x < columns; x++) {
    for (const day of calendar.weeks[x].contributionDays) {
      const y = getRowFromDate(day.date);
      const xPos = PADDING + x * CELL_STEP;
      const yPos = PADDING + y * CELL_STEP;

      const index = pathIndex.get(`${x},${y}`);
      const hasContribution = day.contributionCount > 0;

      // Cells past the police (and the police cell itself) are never eaten
      const isEdible =
        hasContribution && index !== undefined && index < path.length - 1;

      let anim = "";
      if (isEdible) {
        const eat = (index / totalSteps) * moveFrac;
        const fadeEnd = Math.min(eat + EAT_FADE / CYCLE, 0.9999);
        anim = `
          <animate attributeName="opacity" dur="${CYCLE}s" repeatCount="indefinite"
            calcMode="linear" keyTimes="0;${f(eat)};${f(fadeEnd)};1" values="1;1;0;0"/>`;
      }

      cells.push(`
        <rect x="${xPos}" y="${yPos}" width="${CELL_SIZE}" height="${CELL_SIZE}"
              rx="2" fill="${getLevelColor(day.contributionLevel)}">
          <title>${escapeXml(day.date)}: ${day.contributionCount} contributions</title>
          ${anim}
        </rect>`);
    }
  }

  /* ---------------- Pac-Man movement ---------------- */

  const points = path.map((p) => ({
    x: PADDING + p.x * CELL_STEP + CELL_SIZE / 2,
    y: PADDING + p.y * CELL_STEP + CELL_SIZE / 2,
  }));

  const motionPath = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");

  /*
   * Facing direction per column:
   * even column → moving down (rotate 90)
   * odd column  → moving up   (rotate -90)
   */
  const rotTimes = [];
  const rotValues = [];
  for (let x = 0; x < columns; x++) {
    const startIndex = Math.max(x * rows - 1, 0);
    if (startIndex > totalSteps) break;
    rotTimes.push(f((startIndex / totalSteps) * moveFrac));
    rotValues.push(x % 2 === 0 ? 90 : -90);
  }
  rotTimes[0] = f(0);

  const closed = pacmanShape(4);
  const open = pacmanShape(40);

  /* ---------------- Police ghost (last point of trimmed path) ---------------- */

  const end = points[points.length - 1];

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg"
     width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">

  <style>
    .pacman { fill: #ffd43b; stroke: #111; stroke-width: 1; }
    .eye { fill: #000; }
  </style>

  <g class="contributions">
    ${cells.join("")}
  </g>

  <!-- Police ghost right after today -->
  <g transform="translate(${end.x} ${end.y})">
    ${policeGhost()}
  </g>

  <!-- Pac-Man -->
  <g>
    <animateMotion
      dur="${CYCLE}s"
      repeatCount="indefinite"
      path="${motionPath}"
      calcMode="linear"
      keyPoints="0;1;1"
      keyTimes="0;${f(moveFrac)};1"
    />

    <!-- Caught: shrink when he reaches the police, reappear on restart -->
    <g>
      <animateTransform
        attributeName="transform" type="scale"
        dur="${CYCLE}s" repeatCount="indefinite" calcMode="linear"
        keyTimes="0;${f(moveFrac)};${f(Math.min(moveFrac + 1.2 / CYCLE, 0.9999))};1"
        values="1;1;0;0"
      />

      <!-- Facing direction (vertical movement) -->
      <g>
        <animateTransform
          attributeName="transform" type="rotate"
          dur="${CYCLE}s" repeatCount="indefinite" calcMode="discrete"
          keyTimes="${rotTimes.join(";")}"
          values="${rotValues.join(";")}"
        />

        <g class="pacman">
          <path d="${closed}">
            <animate attributeName="d" dur="0.25s" repeatCount="indefinite"
              values="${closed};${open};${closed}"/>
          </path>
          <circle class="eye" cx="1" cy="-4.5" r="1.2"/>
        </g>
      </g>
    </g>
  </g>
</svg>
`;
}