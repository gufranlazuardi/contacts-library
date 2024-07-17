import { getContact } from "@/lib/data";
import { dateFormatter } from "@/lib/formatter";
import React from "react";
import { DeleteButton, EditButton } from "./custom-button";

const ContactTable = async () => {
  const contacts = await getContact();

  return (
    <table className="w-full text-sm text-left">
      <thead className="text-sm text-gray-400">
        <tr>
          <th className="py-3 px-6">No</th>
          <th className="py-3 px-6">Name</th>
          <th className="py-3 px-6">Phone Number</th>
          <th className="py-3 px-6">Created At</th>
          <th className="py-3 px-6 text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((data, index) => (
          <tr key={data.id} className=" border-b">
            <td className="py-3 px-6">{index + 1}</td>
            <td className="py-3 px-6">{data.name}</td>
            <td className="py-3 px-6">{data.phone}</td>
            <td className="py-3 px-6">
              {dateFormatter(data.createdAt.toString())}
            </td>
            <td className="flex gap-3 py-3 px-6">
              <EditButton />
              <DeleteButton />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactTable;
