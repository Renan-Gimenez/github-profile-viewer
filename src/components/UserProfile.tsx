import { Building, MapPin, UsersRound } from "lucide-react";

interface Props {
  user: User;
}

export function UserProfile({ user }: Props) {
  return (
    <div className="max-w-sm flex flex-col items-center gap-6 text-center my-8">
      <img src={user.avatar} alt="Avatar" className="h-32 rounded-full" />

      <div className="flex flex-col gap-2">
        <div>
          <p className="font-bold text-2xl">{user.username}</p>
          <p className="text-[#7C7C8A]">{user.login}</p>
        </div>
        <p className="text-[#C4C4CC]">{user.bio}</p>
      </div>

      <div className="flex flex-col text-[#C4C4CC]">
        <span className="flex items-center gap-2">
          <UsersRound className="h-5 w-5" />{" "}
          {`${user.followers} followers | ${user.followings} followings`}
        </span>

        {user.company && (
          <span className="flex items-center mx-auto gap-2">
            <Building className="h-5 w-5" /> {`${user.company}`}
          </span>
        )}

        {user.location && (
          <span className="flex items-center mx-auto gap-2">
            <MapPin className="h-5 w-5" /> {`${user.location}`}
          </span>
        )}
      </div>
    </div>
  );
}
