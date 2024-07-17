import { Edit, Plus } from "lucide-react";
import Link from "next/link";

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

export const EditButton = () => {
  return (
    <div className="inline-flex items-center bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-sm text-sm cursor-pointer">
      Edit
    </div>
  );
};

export const DeleteButton = () => {
  return (
    <div className="inline-flex items-center bg-red-500 hover:bg-red-600 px-3 py-1 rounded-sm text-sm cursor-pointer">
      Delete
    </div>
  );
};
