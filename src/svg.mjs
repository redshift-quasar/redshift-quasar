const CELL_SIZE = 12;
const GAP = 3;

const CELL_STEP = CELL_SIZE + GAP;

const PACMAN_RADIUS = 5;

const PADDING = 10;

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

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function buildSvg(calendar, path) {
  const columns = calendar.weeks.length;
  const rows = 7;

  const width =
    columns * CELL_STEP -
    GAP +
    PADDING * 2;

  const height =
    rows * CELL_STEP -
    GAP +
    PADDING * 2;

  const cells = [];

  for (let x = 0; x < columns; x++) {
    const week = calendar.weeks[x];

    for (let y = 0; y < week.contributionDays.length; y++) {
      const day = week.contributionDays[y];

      const px = PADDING + x * CELL_STEP;
      const py = PADDING + y * CELL_STEP;

      cells.push(`
        <rect
          x="${px}"
          y="${py}"
          width="${CELL_SIZE}"
          height="${CELL_SIZE}"
          rx="2"
          fill="${getLevelColor(day.contributionLevel)}"
        >
          <title>
            ${escapeXml(day.date)}:
            ${day.contributionCount} contributions
          </title>
        </rect>
      `);
    }
  }

  /*
   * Convert the logical Pac-Man path into SVG coordinates.
   */
  const points = path.map((point) => ({
    x: PADDING + point.x * CELL_STEP + CELL_SIZE / 2,
    y: PADDING + point.y * CELL_STEP + CELL_SIZE / 2,
  }));

  const motionPath = points
    .map((point, index) => {
      return `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`;
    })
    .join(" ");

  const start = points[0];

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="${width}"
  height="${height}"
  viewBox="0 0 ${width} ${height}"
>

  <style>
    .pacman {
      fill: #f2cc60;
    }

    .eye {
      fill: #000;
    }
  </style>

  <!-- Contribution graph -->

  <g class="contributions">
    ${cells.join("")}
  </g>

  <!--
    Invisible path used by Pac-Man's animation.
  -->

  <path
    id="pacman-path"
    d="${motionPath}"
    fill="none"
    stroke="none"
  />

  <!-- Pac-Man -->

  <g
    transform="translate(${start.x} ${start.y})"
  >

    <g class="pacman">

      <!-- Body -->

      <path
        d="
          M 0 0
          L ${PACMAN_RADIUS} -${PACMAN_RADIUS}
          A ${PACMAN_RADIUS} ${PACMAN_RADIUS}
          0 1 0
          ${PACMAN_RADIUS} ${PACMAN_RADIUS}
          Z
        "
      >

        <animate
          attributeName="d"
          dur="0.2s"
          repeatCount="indefinite"
          values="
            M 0 0
            L 5 -5
            A 5 5 0 1 0 5 5
            Z;

            M 0 0
            L 5 -1
            A 5 5 0 1 0 5 1
            Z;

            M 0 0
            L 5 -5
            A 5 5 0 1 0 5 5
            Z
          "
        />

      </path>

      <!-- Eye -->

      <circle
        class="eye"
        cx="1.5"
        cy="-2.5"
        r="0.8"
      />

    </g>

    <!-- Movement -->

    <animateMotion
      dur="25s"
      repeatCount="indefinite"
      rotate="auto"
    >
      <mpath href="#pacman-path" />
    </animateMotion>

  </g>

</svg>`;
}