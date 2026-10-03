import { NextResponse } from 'next/server';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_USERNAME = 'anvith511';

export const revalidate = 3600; // Cache for 1 hour

const FALLBACK_DATA = {
  user: {
    login: "anvith511",
    name: "Anvith Kumar",
    bio: "Computer Engineering | Software | Data | AI",
    public_repos: 12,
    followers: 15,
    avatar_url: "https://avatars.githubusercontent.com/u/1000000?v=4",
    html_url: "https://github.com/anvith511"
  },
  repos: [
    {
      name: "HelpMate",
      description: "Community Volunteer Coordination Platform",
      language: "TypeScript",
      stargazers_count: 0,
      forks_count: 0,
      html_url: "https://github.com/anvith511"
    },
    {
      name: "Time-Capsule",
      description: "Encrypted Media Storage App",
      language: "JavaScript",
      stargazers_count: 0,
      forks_count: 0,
      html_url: "https://github.com/anvith511"
    },
    {
      name: "AI-Code-Review",
      description: "AI-Powered Code Review Extension",
      language: "Python",
      stargazers_count: 0,
      forks_count: 0,
      html_url: "https://github.com/anvith511"
    }
  ]
};

export async function GET() {
  try {
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
    };
    
    if (GITHUB_TOKEN) {
      headers['Authorization'] = `token ${GITHUB_TOKEN}`;
    }

    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { headers, next: { revalidate: 3600 } }),
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`, { headers, next: { revalidate: 3600 } })
    ]);

    if (!userRes.ok || !reposRes.ok) {
      console.warn('GitHub API failed, using fallback data');
      return NextResponse.json(FALLBACK_DATA);
    }

    const user = await userRes.json();
    const reposData = await reposRes.json();
    
    const repos = Array.isArray(reposData) ? reposData.map((repo: any) => ({
      name: repo.name,
      description: repo.description,
      language: repo.language,
      stargazers_count: repo.stargazers_count,
      forks_count: repo.forks_count,
      html_url: repo.html_url
    })) : [];

    return NextResponse.json({
      user: {
        login: user.login,
        name: user.name,
        bio: user.bio,
        public_repos: user.public_repos,
        followers: user.followers,
        avatar_url: user.avatar_url,
        html_url: user.html_url
      },
      repos
    });

  } catch (error) {
    console.error('GitHub API Error:', error);
    return NextResponse.json(FALLBACK_DATA);
  }
}
