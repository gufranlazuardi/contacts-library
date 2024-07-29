"use client";

import { useDebouncedCallback } from "use-debounce";
import { SearchIcon } from "lucide-react";
import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import React from "react";

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback(
    (searchedWord: string) => {
      // console.log("word request", searchedWord);
      const params = new URLSearchParams(searchParams);
      // ketika searchParams, page jadi = 1
      params.set("page", "1");

      if (searchedWord) {
        params.set("query", searchedWord);
      } else {
        params.delete("query");
      }
      replace(`${pathname}?${params.toString()}`);
    },
    1000
  );

  return (
    <div className="relative w-full items-center justify-center flex flex-1">
      <input
        type="text"
        className="w-full border border-gray-200 py-2 pl-10 text-md text-gray-700 rounded-sm placeholder:text-sm"
        placeholder="Search..."
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("query") || ""}
      />
      <SearchIcon
        size={18}
        className="absolute left-3 text-gray-500"
      />
    </div>
  );
};

export default Search;
