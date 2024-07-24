"use client";

import { Plus } from "lucide-react";
import Link from "next/link";
import { useFormStatus } from "react-dom";

export const CreateButton = () => {
  return (
    <Link href="/contacts/create">
      <div className="inline-flex items-center space-x-1 bg-green-500 hover:bg-green-600 px-5 py-1 rounded-sm text-sm">
        <Plus size={18} />
        Create
      </div>
    </Link>
  );
};

export const EditButton = ({ id }: { id: string }) => {
  return (
    <Link href={`/contacts/edit/${id}`}>
      <div className="inline-flex items-center bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-sm text-sm cursor-pointer">
        Edit
      </div>
    </Link>
  );
};

export const DeleteButton = () => {
  return (
    <div className="inline-flex items-center bg-red-500 hover:bg-red-600 px-3 py-1 rounded-sm text-sm cursor-pointer">
      Delete
    </div>
  );
};

export const SubmitButton = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="rounded-sm w-full text-sm px-5 py-2 font-medium bg-green-600 hover:bg-green-700 focus:ring-red-500 focus-within:border-red-400"
      disabled={pending}
    >
      {label === "save" ? (
        <span>{pending ? "Saving..." : "Save"}</span>
      ) : (
        <span>{pending ? "Updating..." : "Update"}</span>
      )}
    </button>
  );
};
