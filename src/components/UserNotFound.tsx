import { UserRoundX } from "lucide-react";

interface Props {
  username: string;
}

export function UserNotFound({ username }: Props) {
  return (
    <div className="flex flex-col items-center gap-4 text-center p-12">
      <UserRoundX className="h-16 w-16" />
      <span className="text-xl">{`User "${username}" not found`}</span>
    </div>
  );
}
