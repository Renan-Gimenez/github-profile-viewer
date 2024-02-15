interface User {
  avatar: string;
  username: string;
  login: string;
  bio: string;
  repos_count?: number;
  followers: number;
  followings: number;
  company: string;
  location: string;
  blog: string;
}

interface Repo {
  name: string;
  language: string;
  html_url: string;
  fork: boolean;
  stargazers_count: string;
  watchers_count: string;
}
