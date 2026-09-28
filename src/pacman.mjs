const CELL = 14;          // cell size incl. gap (match your grid)
const SPEED = 0.06;       // seconds per cell travelled

/** Row-by-row snake path: every cell exactly once. */
export function buildPacmanPath(calendar) {
  const columns = calendar.weeks.length;
  const rows = 7;
  const path = [];

  for (let x = 0; x < columns; x++) {
    if (x % 2 === 0) {
      for (let y = 0; y < rows; y++) path.push({ x, y });        // top → bottom
    } else {
      for (let y = rows - 1; y >= 0; y--) path.push({ x, y });   // bottom → top
    }
  }
  return path;
}

/** Time (s) at which Pac-Man reaches each cell, keyed "x,y". */
export function buildEatTimes(path) {
  const times = new Map();
  path.forEach((p, i) => times.set(`${p.x},${p.y}`, i * SPEED));
  return times;
}

/** Keep only turning points so movement is one smooth straight glide per row. */
function buildWaypoints(path) {
  const pts = [path[0]];
  for (let i = 1; i < path.length - 1; i++) {
    const a = path[i - 1], b = path[i], c = path[i + 1];
    const sameDir = (b.x - a.x === c.x - b.x) && (b.y - a.y === c.y - b.y);
    if (!sameDir) pts.push(b);
  }
  pts.push(path[path.length - 1]);
  return pts.map((p) => ({ ...p, t: path.findIndex((q) => q.x === p.x && q.y === p.y) * SPEED }));
}

/** Pac-Man element: constant-speed motion + mouth facing direction. */
export function renderPacman(path, cellOrigin = { x: 0, y: 0 }) {
  const wp = buildWaypoints(path);
  const total = (path.length - 1) * SPEED;
  const cx = (p) => cellOrigin.x + p.x * CELL + CELL / 2;
  const cy = (p) => cellOrigin.y + p.y * CELL + CELL / 2;

  const keyTimes = wp.map((p) => (p.t / total).toFixed(5)).join(";");
  const values = wp.map((p) => `${cx(p)},${cy(p)}`).join(";");

  // rotation: 0 = right, 180 = left, 90 = down
  const rotVals = [], rotTimes = [];
  for (let i = 0; i < wp.length - 1; i++) {
    const dx = wp[i + 1].x - wp[i].x, dy = wp[i + 1].y - wp[i].y;
    rotVals.push(dx > 0 ? 0 : dx < 0 ? 180 : 90);
    rotTimes.push((wp[i].t / total).toFixed(5));
  }
  rotVals.push(rotVals[rotVals.length - 1]);
  rotTimes.push("1");

  const r = CELL / 2 - 1;
  return `
  <g>
    <animateTransform attributeName="transform" type="translate"
      dur="${total}s" repeatCount="indefinite" calcMode="linear"
      keyTimes="${keyTimes}" values="${values}"/>
    <g>
      <animateTransform attributeName="transform" type="rotate"
        dur="${total}s" repeatCount="indefinite" calcMode="discrete"
        keyTimes="${rotTimes.join(";")}" values="${rotVals.join(";")}"/>
      <path fill="#ffd400" d="M0,0 L${r},-${r * 0.6} A${r},${r} 0 1,0 ${r},${r * 0.6} Z">
        <animate attributeName="d" dur="0.3s" repeatCount="indefinite"
          values="M0,0 L${r},-${r * 0.6} A${r},${r} 0 1,0 ${r},${r * 0.6} Z;
                  M0,0 L${r},-1 A${r},${r} 0 1,0 ${r},1 Z;
                  M0,0 L${r},-${r * 0.6} A${r},${r} 0 1,0 ${r},${r * 0.6} Z"/>
      </path>
    </g>
  </g>`;
}

/** Each cell disappears at the moment Pac-Man reaches it, and only then. */
export function renderCell(x, y, color, eatTimes, total, origin = { x: 0, y: 0 }) {
  const t = eatTimes.get(`${x},${y}`);
  const eps = 0.0001;
  const k1 = Math.min(t / total, 1 - eps * 2);
  const keyTimes = `0;${k1.toFixed(5)};${(k1 + eps).toFixed(5)};1`;

  return `
  <rect x="${origin.x + x * CELL}" y="${origin.y + y * CELL}"
        width="${CELL - 3}" height="${CELL - 3}" rx="2" fill="${color}">
    <animate attributeName="opacity" dur="${total}s" repeatCount="indefinite"
      calcMode="linear" keyTimes="${keyTimes}" values="1;1;0;0"/>
  </rect>`;
}