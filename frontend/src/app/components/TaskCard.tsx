"use client";

import {
  CalendarDaysIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import React from "react";

import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import ListBox from "./ListBox";

const task = {
  id: 1,
  name: "Sunday word",
  description: "Just a description of Sunday work",
  createdAt: "2023-06-22T17:37:13.000Z",
  updatedAt: "2023-06-22T17:37:13.000Z",
  status: "todo",
};

interface IStatusData {
  id: number;
  name: string;
}

const status: IStatusData[] = [
  { name: "Wade Cooper", id: 1 },
  { name: "Arlene Mccoy", id: 2 },
  { name: "Arlene Mccoy", id: 3 },
];

const TaskCard = () => {
  const [openMenu, setOpenMenu] = useState(true);

  const [selected, setSelected] = useState<IStatusData>();

  return (
    <div
      className={`border border-black rounded-lg w-full h-[15rem] sm:h-[30rem] p-5 flex flex-col justify-between bg-gray-700  relative z-0 ${
        openMenu && "blur-sml"
      }`}
    >
      {openMenu && (
        <div className="absolute border w-1/2 right-0 top-12 mx-1 h-[20vh] rounded-sm z-20 bg-gray-500 flex flex-col justify-start p-2 ">
          <div>
            <ListBox<IStatusData>
              title={"Update Status"}
              dataArray={status}
              setSelectedData={setSelected}
            />
          </div>
        </div>
      )}
      <div className="flex justify-between items-center ">
        <h1 className="font-bold text-lg">{task.name}</h1>
        <button>
          <PencilSquareIcon className="h-6 w-6 text-gray-500 -mt-1" />
        </button>
      </div>

      <div className="h-[5rem] md:h-[10rem] text-base mt-5 font-light">
        {task.description}
      </div>

      <div className="flex whitespace-nowrap">
        <p className="flex items-center justify-center gap-2">
          <CalendarDaysIcon className="h-6 w-6 text-gray-500" /> Jun 10, 12:60Pm
        </p>
      </div>
    </div>
  );
};

export default TaskCard;
