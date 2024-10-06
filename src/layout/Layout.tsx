import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";
const Layout = () => {
  return (
    <div className=" lg:flex h-screen w-full bg-neutral-950 ">
      <div className="w-[20%] h-screen bg-neutral-700 hidden lg:block "></div>
      <div className="container mx-auto w-full lg:w-[80%] h-screen bg-neutral-800 text-white lg:px-6">
        <Header />
        <Outlet />
        {/* <Footer /> */}
      </div>
    </div>
  );
};
export default Layout;
