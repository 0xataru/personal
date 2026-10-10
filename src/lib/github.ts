const API = "https://api.github.com/repos";

// cached by Next and refetched in the background at most once an hour,
// which keeps us far below the 60 req/h unauthenticated limit
const REVALIDATE = 3600;

async function fetchStars(repoUrl: string): Promise<number | undefined> {
  const repo = new URL(repoUrl).pathname.replace(/^\/|\/$/g, "");
  const token = process.env.GITHUB_TOKEN;
  try {
    const res = await fetch(`${API}/${repo}`, {
      headers: {
        Accept: "application/vnd.github+json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      next: { revalidate: REVALIDATE },
    });
    if (!res.ok) return undefined;
    const data: { stargazers_count?: number } = await res.json();
    return data.stargazers_count;
  } catch {
    return undefined;
  }
}

// live star counts keyed by repo url; repos that fail to load are left out
export async function getStars(urls: string[]) {
  const counts = await Promise.all(urls.map(fetchStars));
  return Object.fromEntries(
    urls.flatMap((u, i) => (counts[i] === undefined ? [] : [[u, counts[i]]])),
  ) as Record<string, number>;
}
