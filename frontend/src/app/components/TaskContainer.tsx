import React from "react";
import TaskCard from "./TaskCard";

interface TaskContainerProps {
  title: "TODO" | "IN PROGRESS" | "DONE";
}

const TaskContainer = ({ title }: TaskContainerProps) => {
  return (
    <div className="w-coll h-[89vh]  border flex flex-col justify-between gap-4  rounded-md">
      <div className="text-center border-b text-xl font-medium tracking-tight my-1">
        {title}
      </div>
      <div className="h-full flex flex-col overflow-scroll px-5 gap-5">
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
};

export default TaskContainer;
