import { Link, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";

const DashboardLayout = () => {
  const { pathname } = useLocation();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="sm:px-8 px-4 bg-white shadow">{/* Header  */}</div>
      <div className="relative">
        <div
          className={`lg:hidden ${
            isSidebarOpen ? "fixed" : "hidden"
          } top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 z-10`}
        ></div>
        <div
          className={`lg:absolute shadow fixed lg:left-0 right-0 z-50 top-0 bottom-0 overflow-auto lg:w-[220px] w-[280px] bg-gray-300 transition-transform ${
            !isSidebarOpen ? "translate-x-full" : "translate-x-0"
          } lg:translate-x-0`}
        >
          {/* <SmallDevicesSidebarLogo toggleSidebar={toggleSidebar} /> */}
          <nav className="flex flex-col py-4 space-y-2">
            {["stats", "users"].map((link) => (
              <Link
                key={link}
                to={link}
                className={`flex items-center  px-4 py-3 space-x-2 font-semibold hover:bg-gray-100 ${
                  pathname.includes(link) ? "active-tab text-white" : ""
                }`}
              >
                <span>{link}</span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="lg:ml-[220px] sm:px-8 py-8 px-4 min-h-screen">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
