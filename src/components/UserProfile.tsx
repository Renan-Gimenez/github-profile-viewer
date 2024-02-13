import { MapPin, UsersRound } from "lucide-react";

interface Props {
  user: User;
}

export function UserProfile({ user }: Props) {
  return (
    <div className="max-w-sm flex flex-col items-center gap-6 text-center my-8">
      {/* IMAGE */}
      <img src={user.avatar} alt="Avatar" className="h-32 rounded-full" />

      {/* BIO */}
      <div className="flex flex-col gap-2">
        <div>
          <p className="font-bold text-2xl">{user.username}</p>
          <p className="text-[#7C7C8A]">{user.login}</p>
        </div>
        <p className="text-[#C4C4CC]">{user.bio}</p>
      </div>

      {/* OUTROS */}
      <div className="flex flex-col text-[#C4C4CC]">
        <span className="flex gap-2">
          <UsersRound className="h-6 w-6" />{" "}
          {`${user.followers} followers | ${user.followings} followings`}
        </span>

        {user.location && (
          <span className="flex mx-auto gap-2">
            <MapPin className="h-6 w-6" /> {`${user.location}`}
          </span>
        )}
      </div>
    </div>
  );
}