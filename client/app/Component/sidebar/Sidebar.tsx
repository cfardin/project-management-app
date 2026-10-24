"use client"

import { LockIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";


const Sidebar = () => {

    const [showProjects, setShowProjects] = useState(true);
    const [showPriority, setShowPriority] = useState(true);

    const sideBarClass = `fixed flex h-[100%] justify-between shadow-xl transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white w-64`;


    return (
        <div className={sideBarClass}>
            <div className="flex flex-col justify-start h-full w-full ">
                {/* top logo */}
                <div className="z-50 flex min-h-14 w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
                    <div className="text-xl font-bold text-gray-800 dark:text-white">
                        MyProjects
                    </div>
                </div>
                {/* teams */}
<div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700">
          <img
            src="/notLogo.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded"
          />
          <div>
            <h3 className="text-md font-bold tracking-wide text-black dark:text-gray-200">
              My Team
            </h3>
            <div className="mt-1 flex items-start gap-2">
              <LockIcon className="mt-[0.1rem] h-3 w-3 text-gray-500 dark:text-gray-400" />
              <p className="text-xs text-gray-500">Private</p>
            </div>
          </div>
        </div>
            </div>
            <h2 className="text-black">sidebar</h2>
        </div>
    );
};

export default Sidebar;