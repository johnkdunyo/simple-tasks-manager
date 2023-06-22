import Image from "next/image";
import Link from "next/link";
import { Bars3CenterLeftIcon } from "@heroicons/react/24/outline";
import TaskContainer from "./components/TaskContainer";

export default function Home() {
  return (
    <main className="container mx-auto px-6 h-screen w-full py-5 flex flex-col justify-between overflow-clip">
      <nav className=" flex  w-full justify-between sticky">
        <button className="text-xl  px-2 py-1">
          <Link href="/">Task Manager</Link>
        </button>

        <button className=" px-2">
          <Bars3CenterLeftIcon className="h-6 w-6 text-white" />
        </button>
      </nav>

      <div className=" h-full w-full  py-5 grid grid-grid-cols-1 md:grid-cols-3 gap-10 overflow-clip">
        <TaskContainer title="TODO" />
        <TaskContainer title="IN PROGRESS" />
        <TaskContainer title="DONE" />
      </div>
    </main>
  );
}
