import { DeleteButton, EditButton } from "./custom-button";
import { dateFormatter } from "@/lib/formatter";
import { getContact } from "@/lib/data";
import React from "react";

interface ContactTableProps {
  query: string;
  currentPage: number;
}

const ContactTable: React.FC<ContactTableProps> = async ({
  query,
  currentPage,
}) => {
  const contacts = await getContact(query, currentPage);

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
            <td className="flex gap-3 py-3 px-6 justify-center">
              <EditButton id={data.id} />
              <DeleteButton id={data.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactTable;
