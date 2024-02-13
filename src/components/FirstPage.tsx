import { Search } from "lucide-react";

export function FirstPage() {
  return (
    <div className="flex flex-col items-center text-center gap-4 p-12">
      <Search className="h-16 w-16" />
      <span>Search for some GitHub account</span>
    </div>
  );
}
