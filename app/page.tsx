import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col pt-[10rem] gap-10 items-center">
      <h1 className="text-6xl font-semibold text-slate-300">
        You can find your contacts easily!
      </h1>
      <p className="text-xl w-[900px] text-center text-slate-500">
        With some feature like{" "}
        <span className="text-slate-300">
          Create, Update, Edit, and Delete with Search and Pagination
        </span>
        , that will be easier to manage the contacts
      </p>
      <Link href="/contacts">
        <Button>Get started</Button>
      </Link>
    </main>
  );
}
