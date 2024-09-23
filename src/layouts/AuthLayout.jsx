import React from "react";
import { Link, Outlet } from "react-router-dom";
// import { logo } from "../assets/svgs";

const AuthLayout = () => {
  return (
    <div className="auth-container flex justify-center items-center min-h-screen h-full w-full overflow-auto container mx-auto">
      <div className="max-w-screen-sm w-full h-auto overflow-auto sm:px-20 sm:py-12 px-8 py-8 rounded-lg shadow-lg">
        <div className="flex justify-center items-center mb-8">
          <Link to="/">
            {/* <img className="w-20" src={logo} alt="logo" /> */}
          </Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
