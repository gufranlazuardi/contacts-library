import ContactTable from "@/components/contact-table";
import { CreateButton } from "@/components/create-button";
import Search from "@/components/search";
import React from "react";

const Contacts = () => {
  return (
    <div className="max-w-screen-md mx-auto mt-10">
      <div className="flex flex-col items-center gap-5">
        <h1>Contacts</h1>
        <Search />
        <CreateButton />
      </div>
      <ContactTable />
    </div>
  );
};

export default Contacts;
