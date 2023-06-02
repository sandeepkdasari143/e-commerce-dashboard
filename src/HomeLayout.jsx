import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/ui-components/Header";

const HomeLayout = () => {
  return (
    <div className="h-[100vh]">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default HomeLayout;