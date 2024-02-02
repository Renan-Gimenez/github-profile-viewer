interface User {
  avatar: string;
  username: string;
  login: string;
  bio: string;
  followers: number;
  followings: number;
  location: string;
}

interface Repo {
  name: string;
  language: string;
  html_url: string;
  stargazers_count: string;
  watchers_count: string;
}
