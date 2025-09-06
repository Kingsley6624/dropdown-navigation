import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import todo from "../assets/icons/icon-todo.svg";
import calendar from "../assets/icons/icon-calendar.svg";
import reminders from "../assets/icons/icon-reminders.svg";
import planning from "../assets/icons/icon-planning.svg";

const SideBar = ({ openMenu, setOpenMenu }) => {
  const [openFeature, setOpenFeature] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);
  return (
    <div className="">
      {openMenu && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/70  z-0 shadow-lg flex justify-end md:hidden"
          onClick={() => setOpenMenu(false)}
        >
          <div className="w-[70%] max-w-sm h-screen bg-white p-6 z-50 shadow-lg slide-in-right flex flex-col overflow-y-auto scroll-smooth">
            <button
              className="self-end right-[5.55%] text-4xl text-gray-600"
              onClick={() => setOpenMenu(false)}
            >
              <IoCloseOutline />
            </button>
            <div className=" text-[#696969ff] font-medium text-base z-50">
              <ul className="flex flex-col gap-3 w-full ">
                <li className="relative">
                  <button
                    className="flex items-end p-1 gap-1 active:text-[#141414ff]"
                    onClick={() => setOpenFeature((prev) => !prev)}
                  >
                    Feature {openFeature ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  {openFeature && (
                    <ul className=" bg-white w-full  py-2 text-[#696969ff]">
                      <li>
                        <NavLink
                          className="flex gap-4 px-5 py-2 text-sm hover:bg-gray-100"
                          to="/"
                          onClick={() => setOpenMenu(false)}
                        >
                          <img src={todo} alt="" />
                          <span className="whitespace-nowrap">Todo List</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="flex gap-4 px-5 py-2 text-sm hover:bg-gray-100"
                          to="/"
                          onClick={() => setOpenMenu(false)}
                        >
                          <img src={calendar} alt="" />
                          <span className="whitespace-nowrap">Calendar</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="flex gap-4 px-5 py-2 text-sm hover:bg-gray-100"
                          to="/"
                          onClick={() => setOpenMenu(false)}
                        >
                          <img src={reminders} alt="" />
                          <span className="whitespace-nowrap">Reminders</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="flex gap-4 px-5 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          to="/"
                          onClick={() => setOpenMenu(false)}
                        >
                          <img src={planning} alt="" />
                          <span className="whitespace-nowrap">Planning</span>
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="relative">
                  <button
                    className="flex items-end p-1 gap-1 active:text-[#141414ff]"
                    onClick={() => setOpenCompany((prev) => !prev)}
                  >
                    Company {openCompany ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  {openCompany && (
                    <ul className=" my-2  bg-white  text-[#696969ff] ">
                      <li>
                        <Link
                          className="block px-5 py-2 text-sm hover:bg-gray-100"
                          to="/company/history"
                          onClick={() => setOpenMenu(false)}
                        >
                          History
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="block px-5 py-2 text-sm hover:bg-gray-100"
                          to="/company/team"
                          onClick={() => setOpenMenu(false)}
                        >
                          Our Team
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="block px-5 py-2 text-sm hover:bg-gray-100"
                          to="/company/blog"
                          onClick={() => setOpenMenu(false)}
                        >
                          Blog
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <NavLink
                    className="flex items-end p-1 gap-1"
                    to="/careers"
                    onClick={() => setOpenMenu(false)}
                  >
                    Careers
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="flex items-end p-1 active:text-[#141414ff]"
                    to="/about"
                    onClick={() => setOpenMenu(false)}
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center gap-6">
              <button
                className="bg-transparent py-1 px-4 active:text-[#141414ff]"
                onClick={() => setOpenMenu(false)}
              >
                Login
              </button>
              <button
                className="w-full bg-transparent border-2 border-[#696969ff] py-1 px-4 rounded-xl active:text-[#141414ff]"
                onClick={() => setOpenMenu(false)}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
