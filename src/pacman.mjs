
export function buildPacmanPath(calendar) {
  const grid = calendar.weeks.map((week) =>
    week.contributionDays.map((day) => ({
      date: day.date,
      count: day.contributionCount,
      level: day.contributionLevel,
    }))
  );

  const path = [];

  for (let x = 0; x < grid.length; x++) {
    const column = grid[x];

    if (x % 2 === 0) {
      // Top → bottom
      for (let y = 0; y < column.length; y++) {
        path.push({
          x,
          y,
          ...column[y],
        });
      }
    } else {
      // Bottom → top
      for (let y = column.length - 1; y >= 0; y--) {
        path.push({
          x,
          y,
          ...column[y],
        });
      }
    }
  }

  return path;
}