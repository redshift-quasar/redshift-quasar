import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

import { fetchCalendar } from "./contributions.mjs";
import { buildPacmanPath } from "./pacman.mjs";
import { buildSvg } from "./svg.mjs";

const username =
  process.env.GH_USERNAME || "redshift-quasar";

const token = process.env.GITHUB_TOKEN;

if (!token) {
  throw new Error(
    "GITHUB_TOKEN environment variable is required."
  );
}

console.log(`Fetching contributions for ${username}...`);

const calendar = await fetchCalendar({
  username,
  token,
});

console.log(
  `Total contributions: ${calendar.totalContributions}`
);

console.log(
  `Contribution weeks: ${calendar.weeks.length}`
);

console.log("Building Pac-Man path...");

const path = buildPacmanPath(calendar);

console.log(
  `Pac-Man path contains ${path.length} cells`
);

console.log("Generating SVG...");

const svg = buildSvg(calendar, path);

const outputDirectory = "dist";

mkdirSync(outputDirectory, {
  recursive: true,
});

const outputFile = join(
  outputDirectory,
  "pacman.svg"
);

writeFileSync(outputFile, svg);

console.log(`Pac-Man SVG written to ${outputFile}`);