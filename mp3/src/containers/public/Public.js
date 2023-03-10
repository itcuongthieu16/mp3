import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarLeft, SidebarRight } from "../../components";

const Public = () => {
  return (
    <div className="w-full flex">
      <div className="w-[240px] flex-none border border-blue-400">
        <SidebarLeft />
      </div>
      <div className="flex-auto border border-gray-500 bg-slate-300">
        <Outlet />
      </div>
      <div className="w-[329px] flex-none border border-red-300">
        <SidebarRight />
      </div>
    </div>
  );
};

export default Public;
