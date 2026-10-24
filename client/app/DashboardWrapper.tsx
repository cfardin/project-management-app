import Navbar from "./Component/navbar/Navbar";
import Sidebar from "./Component/sidebar/Sidebar";
import StoreProvider from "./redux";



const DashboardLayout = ( {children} : {children : React.ReactNode} ) => {
    return (
        <div className="flex min-h-screen w-full bg-gray-50 ">
            {/* sidebar */}
            <Sidebar></Sidebar>
            <main className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg md:pl-64 `}>
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