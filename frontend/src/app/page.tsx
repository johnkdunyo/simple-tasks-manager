import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto px-6 h-full w-screen py-5">
      <nav className="border flex justify-between">
        <button className="text-xl border px-2 py-1">
          <Link href="/">Task Manager</Link>
        </button>

        <button></button>
      </nav>
    </main>
  );
}
