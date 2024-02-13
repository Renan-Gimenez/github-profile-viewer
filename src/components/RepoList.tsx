import { Repo } from "./Repo";

interface Props {
  repos: Repo[];
}

export function RepoList({ repos }: Props) {
  return (
    <div>
      <p className="text-center font-bold my-8">{repos.length} repositories:</p>

      <div className="divide-y divide-[#81D8F7] px-4">
        {repos.map((item: Repo, index: number) => (
          <Repo key={index} repo={item} index={index} />
        ))}
      </div>
    </div>
  );
}
