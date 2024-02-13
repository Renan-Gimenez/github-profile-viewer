import { Book, Eye, GitFork, Star } from "lucide-react";

interface Props {
  repo: Repo;
  index: number;
}

export function Repo({ repo, index }: Props) {
  return (
    <div key={index} className="flex items-center justify-between px-2 py-4">
      <div className="flex flex-col justify-start gap-1">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5">{repo.fork ? <GitFork /> : <Book />}</div>
          <a
            href={repo.html_url}
            target="_blank"
            className="font-bold text-xl max-sm:text-base hover:underline"
          >
            {repo.name}
          </a>
        </div>
        <span className="text-[#E1E1E6] max-sm:text-sm">{repo.language}</span>
      </div>

      <div className="flex flex-col gap-1 text-[#C4C4CC]">
        <span className="flex items-center gap-2 rounded-lg p-1 cursor-pointer transition-all hover:bg-[#81D8F7]/15">
          <Star className="h-6 w-6 stroke-[1.5px]" />
          {repo.stargazers_count}
        </span>
        <span className="flex items-center gap-2 rounded-lg p-1 cursor-pointer transition-all hover:bg-[#81D8F7]/15">
          <Eye className="h-h-6 w-6 stroke-[1.5px]" />
          {repo.watchers_count}
        </span>
      </div>
    </div>
  );
}
