import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";

const Root = () => {
  const navigation = useNavigation();
  
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <main className=" flex w-full flex-1 flex-col max-w-11/12 mx-auto ">
        {navigation.state === "loading" ? <LoadingSpinner></LoadingSpinner> : <Outlet></Outlet>}
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Root;
