import ContactTable from "@/components/contact-table";
import { CreateButton } from "@/components/custom-button";
import Search from "@/components/search";
import React from "react";

interface SearchParamsProps {
  searchParams?: {
    query?: string;
    page?: string;
  };
}

const Contacts: React.FC<SearchParamsProps> = ({ searchParams }) => {
  // jika tidak ada query, maka defaultnya string kosong
  const query = searchParams?.query || "";

  // karena butuh number, kita convert ke number. Jika tidak "current page" maka page = 1
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="max-w-screen-md mx-auto mt-10">
      <div className="flex flex-col items-center gap-5">
        <h1>Contacts</h1>
        <Search />
        <CreateButton />
      </div>
      <ContactTable query={query} currentPage={currentPage} />
    </div>
  );
};

export default Contacts;
