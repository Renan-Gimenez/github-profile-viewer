import { BookX } from "lucide-react";

export function RepoNotFound() {
  return (
    <div className="flex flex-col items-center p-12">
      <BookX className="h-16 w-16" />
      <h1 className="text-3xl font-bold">Repository not found</h1>
    </div>
  );
}
