import { SearchIcon } from "lucide-react";
import { useState } from "react";

interface Props {
  setUsername: (username: string) => void;
}

export function SearchBar({ setUsername }: Props) {
  const [user, setUser] = useState("");

  function handleSubmit() {
    if (user.trim() === "") {
      alert("Username Empty!");
      return;
    }

    setUsername(user);
    setUser("");
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <label className="h-12 max-w-64 flex items-center bg-[#202024] px-5 rounded-2xl focus-within:ring focus-within:ring-[#81D8F7]">
        <input
          className="w-full bg-transparent outline-none"
          type="text"
          value={user}
          placeholder="Username..."
          onChange={(e) => setUser(e.target.value)}
        />
        <SearchIcon
          className="text-white cursor-pointer"
          onClick={handleSubmit}
        />
      </label>
    </form>
  );
}
