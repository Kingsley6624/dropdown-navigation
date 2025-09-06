import React from "react";
import NavBar from "../shared/Navbar";
import { Outlet } from "react-router-dom";
import SideBar from "../shared/SideBar";
import { useState } from "react";

const MainLayout = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="h-scrren">
     <SideBar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <NavBar setOpenMenu={setOpenMenu} openMenu />
      <Outlet />
    </div>
  );
};

export default MainLayout;
