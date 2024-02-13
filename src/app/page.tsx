"use client";

import { useState } from "react";

import { SearchBar } from "@/components/SearchBar";
import { UserProfile } from "@/components/UserProfile";
import { RepoList } from "@/components/RepoList";

import { FirstPage } from "@/components/FirstPage";
import { RepoNotFound } from "@/components/RepoNotFound";
import { UserNotFound } from "@/components/UserNotFound";

import { Loader } from "lucide-react";
import { useFetchProfile, useFetchRepos } from "@/services/githubService";

export default function Home() {
  const [username, setUsername] = useState("");

  const { data: profileData, isLoading: isloadingProfile } =
    useFetchProfile(username);
  const { data: reposData, isLoading: isLoadingRepos } =
    useFetchRepos(username);

  if (isloadingProfile || isLoadingRepos) {
    return (
      <div className="h-screen w-screen flex items-center justify-center ring ring-red-500 bg-[#121214]">
        <Loader className="h-10 w-auto text-white animate-spin" />
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg-[#121214] px-8 py-36">
      <SearchBar setUsername={setUsername} />

      {profileData ? (
        <>
          <UserProfile user={profileData} />
          {reposData && reposData.length > 0 ? (
            <div className="max-w-[448px] w-full rounded-2xl bg-[#202024]">
              <RepoList repos={reposData} />
            </div>
          ) : (
            <RepoNotFound />
          )}
        </>
      ) : username ? (
        <UserNotFound username={username} />
      ) : (
        <FirstPage />
      )}
    </main>
  );
}
