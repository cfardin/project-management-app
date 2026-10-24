import { Search, Settings } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between bg-white px-4 py-3 dark:bg-black dark:px-4 dark:py-3">
            {/* searchbar */}
            <div className="flex items-center gap-8">
                {/* sidebar button (will be added later, lol) */}
                <div className="relative flex h-min w-48">
                    <Search className="absolute left-1 top-1/2 h-5 w-5 -translate-y-1/2 cursor-pointer dark:text-white"></Search>
                    <input
                        className="w-full rounded border-none bg-gray-200 p-2 pl-8  placeholder-gray-600 focus:border-transparent focus:outline-none dark:bg-gray-800 dark:text-white dark:placeholder-white"
                        type="search"
                        placeholder="Search..."
                    />
                </div>
            </div>

            {/* right side */}
            <div className="flex items-center ">
                {/* <button
                    onClick={toggleDark}
                    className="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                    {isDarkMode ? (
                        <Sun className="h-6 w-6 dark:text-white" />
                    ) : (
                        <Moon className="h-6 w-6 dark:text-white" />
                    )}
                </button> */}
                <Link
                  href="/settings"
                  className="h-min w-min rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <Settings className="h-6 w-6 dark:text-white" />
                </Link>
                <div className="ml-2 mr-5 hidden min-h-[2em] w-[0.1rem] bg-gray-200 md:inline-block"></div>
            </div>
        </div>
    );
};

export default Navbar;

// "use client";

// import React, { useState } from "react";
// import { Menu, Moon, Search, Settings, Sun, User } from "lucide-react";
// import Link from "next/link";

// const Navbar = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

//   const toggleDark = () => {
//     setIsDarkMode(!isDarkMode);
//     document.documentElement.classList.toggle("dark");
//   };

//   return (
//     <div className="flex items-center justify-between bg-white px-4 py-3 dark:bg-black">
//       {/* Search Bar */}
//       <div className="flex items-center gap-8">
//         {isSidebarCollapsed && (
//           <button onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}>
//             <Menu className="h-8 w-8 dark:text-white" />
//           </button>
//         )}
//         <div className="relative flex h-min w-[200px]">
//           <Search className="absolute left-[4px] top-1/2 h-5 w-5 -translate-y-1/2 cursor-pointer dark:text-white" />
//           <input
//             className="w-full rounded border-none bg-gray-100 p-2 pl-8 placeholder-gray-500 focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-white"
//             type="search"
//             placeholder="Search..."
//           />
//         </div>
//       </div>

//       {/* Icons */}
//       <div className="flex items-center">
//         <button
//           onClick={toggleDark}
//           className="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
//         >
//           {isDarkMode ? (
//             <Sun className="h-6 w-6 dark:text-white" />
//           ) : (
//             <Moon className="h-6 w-6 dark:text-white" />
//           )}
//         </button>
//         <Link
//           href="/settings"
//           className="h-min w-min rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
//         >
//           <Settings className="h-6 w-6 dark:text-white" />
//         </Link>
        // <div className="ml-2 mr-5 hidden min-h-[2em] w-[0.1rem] bg-gray-200 md:inline-block"></div>
//         <div className="hidden items-center md:flex">
//           <User className="h-9 w-9 rounded-full dark:text-white" />
//           <span className="mx-3 text-gray-800 dark:text-white">Username</span>
//           <button className="rounded bg-blue-400 px-4 py-2 text-xs font-bold text-white hover:bg-blue-500">
//             Sign out
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
