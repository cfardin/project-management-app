"use client"
import { useEffect } from "react";
import Navbar from "./Component/navbar/Navbar";
// import Sidebar from "./Component/sidebar/Sidebar";
import StoreProvider, { useAppSelector } from "./redux";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const Sidebar = dynamic(() => import("@/app/Component/sidebar/Sidebar"), {
  ssr: false,
});



const DashboardLayout = ( {children} : {children : React.ReactNode} ) => {

    const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);
    const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

    useEffect(() => {
        if (isDarkMode){
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    return (
        <div className="flex min-h-screen w-full bg-gray-50 ">
            {/* sidebar */}
            <Suspense>
                <Sidebar></Sidebar>
            </Suspense>
            
            <main className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg ${isSidebarCollapsed ? "" : "md:pl-64"} `}>
                {/* navbar */}
                <Navbar></Navbar>
                {children}
            </main>
        </div>
    );
};

const DashboardWrapper = ( {children} : {children : React.ReactNode} ) => {
    return (
        <StoreProvider>
            <DashboardLayout>
                {children}
            </DashboardLayout>
        </StoreProvider>
    )
}

export default DashboardWrapper;