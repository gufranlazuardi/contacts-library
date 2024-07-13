import { SearchIcon } from "lucide-react";
import React from "react";

const Search = () => {
  return (
    <div className="relative w-full items-center justify-center flex flex-1">
      <input
        type="text"
        className="w-full border border-gray-200 py-2 pl-10 text-md text-gray-700 rounded-sm placeholder:text-sm"
        placeholder="Search..."
      />
      <SearchIcon
        size={18}
        className="absolute left-3 text-gray-500"
      />
    </div>
  );
};

export default Search;
