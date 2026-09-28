const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql";

export async function fetchCalendar({ username, token }) {
  const query = `
    query($username: String!) {
      user(login: $username) {
        contributionsCollection {
          contributionCalendar {
            totalContributions

            weeks {
              contributionDays {
                contributionCount
                contributionLevel
                date
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch(GITHUB_GRAPHQL_URL, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },

    body: JSON.stringify({
      query,
      variables: {
        username,
      },
    }),
  });

  if (!response.ok) {
    throw new Error(
      `GitHub API request failed: ${response.status} ${response.statusText}`
    );
  }

  const result = await response.json();

  if (result.errors) {
    throw new Error(
      `GitHub GraphQL error:\n${JSON.stringify(
        result.errors,
        null,
        2
      )}`
    );
  }

  const calendar =
    result.data?.user?.contributionsCollection
      ?.contributionCalendar;

  if (!calendar) {
    throw new Error(
      `Could not find contribution calendar for ${username}`
    );
  }

  return calendar;
}