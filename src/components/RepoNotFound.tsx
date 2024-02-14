import { BookX } from "lucide-react";

interface Props {
  username: string;
}

export function RepoNotFound({ username }: Props) {
  return (
    <div className="flex flex-col items-center text-center gap-4 p-12 text-[#E1E1E6]">
      <BookX className="h-16 w-16" />
      <span>{`'${username}' doesn't have any public repository`}</span>
    </div>
  );
}
