import Navbar from "./Component/navbar/Navbar";



const DashboardWrapper = ( {children} : {children : React.ReactNode} ) => {
    return (
        <div className="flex min-h-screen w-full bg-gray-50 ">
            {/* sidebar */}
            <main className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg md:pl-64 `}>
                {/* navbar */}
                <Navbar></Navbar>
                {children}
            </main>
        </div>
    );
};

export default DashboardWrapper;