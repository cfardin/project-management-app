"use client";

import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
import {
    AlertCircle,
    AlertOctagon,
    AlertTriangle,
    Briefcase,
    ChevronDown,
    ChevronUp,
    Home,
    icons,
    Layers3,
    LockIcon,
    LucideIcon,
    Search,
    Settings,
    ShieldAlert,
    User,
    Users,
    X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Sidebar = () => {
    const [showProjects, setShowProjects] = useState(true);
    const [showPriority, setShowPriority] = useState(true);

    const dispatch = useAppDispatch();
    const isSidebarCollapsed = useAppSelector(
        (state) => state.global.isSidebarCollapsed,
    );

    const sideBarClass = `fixed flex h-[100%] justify-between shadow-xl transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white
    ${isSidebarCollapsed ? "w-0 hidden" : "w-64"}  `;

    return (
        <div className={sideBarClass}>
            <div className="flex flex-col justify-start h-full w-full ">
                {/* top logo */}
                <div className="z-50 flex min-h-14 w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
                    <div className="text-xl font-bold text-gray-800 dark:text-white">
                        MyProjects
                    </div>
                    {isSidebarCollapsed ? null : (
                        <button
                            className="py-3"
                            onClick={() => {
                                dispatch(
                                    setIsSidebarCollapsed(!isSidebarCollapsed),
                                );
                            }}
                        >
                            <X className="h-6 w-6 text-gray-800 hover:text-gray-500 dark:text-wi"></X>
                        </button>
                    )}
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
                {/* nav links */}
                <nav className="z-10 w-full ">
                    <SidebarLink
                        icon={Home}
                        label="Home"
                        href="/"
                    ></SidebarLink>
                    <SidebarLink
                        icon={Briefcase}
                        label="Timeline"
                        href="/timeline"
                    ></SidebarLink>
                    <SidebarLink
                        icon={Search}
                        label="Search"
                        href="/search"
                    ></SidebarLink>
                    <SidebarLink
                        icon={Settings}
                        label="Settings"
                        href="/settings"
                    ></SidebarLink>
                    <SidebarLink
                        icon={User}
                        label="Users"
                        href="/users"
                    ></SidebarLink>
                    <SidebarLink
                        icon={Users}
                        label="Team"
                        href="/team"
                    ></SidebarLink>
                </nav>

                {/* projects links */}
                <button
                    onClick={() => setShowProjects((prev) => !prev)}
                    className="flex w-full items-center justify-between px-8 py-3 text-gray-500 "
                >
                    <span className=" ">Projects</span>
                    {showProjects ? (
                        <ChevronUp className="h-5 w-5 "></ChevronUp>
                    ) : (
                        <ChevronDown className="h-5 w-5"></ChevronDown>
                    )}
                </button>

                {/* projects list */}

                {/* priorities links */}
                <button
                    onClick={() => setShowPriority((prev) => !prev)}
                    className="flex w-full items-center justify-between px-8 py-3 text-gray-500 "
                >
                    <span className=" ">Priorities</span>
                    {showPriority ? (
                        <ChevronUp className="h-5 w-5 "></ChevronUp>
                    ) : (
                        <ChevronDown className="h-5 w-5"></ChevronDown>
                    )}
                </button>
                {showPriority && (
                    <>
                        <SidebarLink
                            icon={AlertCircle}
                            label="Urgent"
                            href="/priority/urgent"
                        ></SidebarLink>
                        <SidebarLink
                            icon={ShieldAlert}
                            label="High"
                            href="/priority/high"
                        ></SidebarLink>
                        <SidebarLink
                            icon={AlertTriangle}
                            label="Medium"
                            href="/priority/medium"
                        ></SidebarLink>
                        <SidebarLink
                            icon={AlertOctagon}
                            label="Low"
                            href="/priority/low"
                        ></SidebarLink>
                        <SidebarLink
                            icon={Layers3}
                            label="Backlog"
                            href="/priority/backlog"
                        ></SidebarLink>
                    </>
                )}
            </div>
        </div>
    );
};

interface SidebarLinkProps {
    href: string;
    icon: LucideIcon;
    label: string;
}

const SidebarLink = ({ href, icon: Icon, label }: SidebarLinkProps) => {
    const pathname = usePathname();
    const isActive =
        pathname === href || (pathname === "/" && href === "/dashboard");

    return (
        <Link href={href} className="w-full">
            <div
                className={`relative flex cursor-pointer items-center gap-3 transition-colors hover:bg-gray-300 dark:bg-black dark:hover:bg-gray-700 ${
                    isActive ? "bg-gray-100 text-white dark:bg-gray-600" : ""
                } justify-start px-8 py-3`}
            >
                {isActive && (
                    <div className="absolute left-0 top-0 h-full w-1.5 bg-blue-200"></div>
                )}
                <Icon className="h-6 w-6 text-gray-800 dark:text-gray-400 " />
                <span className="font-medium text-gray-800 dark:text-gray-100 ">
                    {label}
                </span>
            </div>
        </Link>
    );
};

export default Sidebar;
