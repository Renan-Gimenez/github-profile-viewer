import { useQuery } from "@tanstack/react-query";

export const useFetchProfile = (username: string) => {
  return useQuery({
    queryKey: ["profile-data", username],
    queryFn: async (context) => {
      if (!username) return;

      const { queryKey } = context;
      const url = `https://api.github.com/users/${username}`;
      return await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            return null;
          }

          const userData = {
            avatar: data.avatar_url,
            username: data.name,
            login: data.login,
            bio: data.bio,
            repos_count: data.public_repos,
            followers: data.followers,
            followings: data.following,
            location: data.location,
          };

          return userData;
        });
    },
    enabled: !!username,
  });
};

export const useFetchRepos = (username: string) => {
  const { data: profileData } = useFetchProfile(username);

  return useQuery({
    queryKey: ["repos-data", profileData],
    queryFn: async () => {
      const url = `https://api.github.com/users/${username}/repos?per_page=${profileData?.repos_count}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch repositories data");
      }
      return response.json();
    },
    enabled: !!profileData,
  });
};
