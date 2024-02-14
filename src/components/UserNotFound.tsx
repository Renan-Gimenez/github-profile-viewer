import { UserRoundX } from "lucide-react";

interface Props {
  username: string;
}

export function UserNotFound({ username }: Props) {
  return (
    <div className="flex flex-col items-center text-center gap-4 p-12 text-[#E1E1E6]">
      <UserRoundX className="h-16 w-16" />
      <span>{`User '${username}' not found`}</span>
    </div>
  );
}
