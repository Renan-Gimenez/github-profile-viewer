import { ScaleLoader } from "react-spinners";

export function Loader() {
  return (
    <div className="h-screen w-screen flex items-center justify-center ring ring-red-500 bg-[#121214]">
      <ScaleLoader color={"#81D8F7"} />
    </div>
  );
}
