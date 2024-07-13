import { Plus } from "lucide-react";
import Link from "next/link";

export const CreateButton = () => {
  return (
    <Link href="/contacts/create">
      <div className="inline-flex items-center space-x-1 bg-blue-500 hover:bg-blue-600 px-5 py-1 rounded-sm text-sm">
        <Plus size={18} />
        Create
      </div>
    </Link>
  );
};
