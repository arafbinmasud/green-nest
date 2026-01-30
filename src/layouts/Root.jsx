import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <main className=" flex w-full flex-1 flex-col max-w-11/12 mx-auto ">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Root;
