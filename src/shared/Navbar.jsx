import React from "react";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";


import logo from "../assets/icons/logo.svg";
import todo from "../assets/icons/icon-todo.svg";
import calendar from "../assets/icons/icon-calendar.svg";
import reminders from "../assets/icons/icon-reminders.svg";
import planning from "../assets/icons/icon-planning.svg"; 
import { useState } from "react";

const NavBar = () => {
  const [openFeature, setOpenFeature] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav>
      <div className="flex items-center justify-between px-[5.55%] py-4 text-[#696969ff] font-medium text-lg">
        <div className="flex items-center gap-16">
          <span><img src={logo} alt="" /></span>
          <ul className="hidden md:flex items-center gap-12 ">
            <li className="relative">
              <button className="flex items-end p-1 gap-1 active:text-[#141414ff]" 
              onClick={() => setOpenFeature((prev) => !prev)}>
                Feature {openFeature ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openFeature && (
                <ul className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg w-32 py-2 text-[#696969ff]">
                  <li>
                    <a className="flex gap-2 px-5 py-2 text-sm hover:bg-gray-100" href="/feature/1">
                      <img src={todo} alt="" />
                      <span className="whitespace-nowrap">Todo List</span>
                    </a>
                  </li>
                  <li>
                    <a className="flex gap-2 px-5 py-2 text-sm hover:bg-gray-100" href="/feature/2">
                      <img src={calendar} alt="" />
                      <span className="whitespace-nowrap">Calendar</span>
                    </a>
                  </li>
                  <li>
                    <a className="flex gap-2 px-5 py-2 text-sm hover:bg-gray-100" href="/feature/3">
                      <img src={reminders} alt="" />
                      <span className="whitespace-nowrap">Reminders</span>
                    </a>
                  </li>
                  <li>
                    <a className="flex gap-2 px-5 py-2 text-sm text-gray-700 hover:bg-gray-100" href="/feature/4">
                      <img src={planning} alt="" />
                      <span className="whitespace-nowrap">Planning</span>
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li className="relative">
              <button className="flex items-end p-1 gap-1 active:text-[#141414ff]" onClick={() => setOpenCompany((prev) => !prev)}>
                Company {openCompany ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openCompany && (
                <ul className="absolute left-0 mt-2  bg-white border border-gray-200 rounded-lg shadow-lg py-2 text-[#696969ff] ">
                  <li>
                    <a className="block px-5 py-2 text-sm hover:bg-gray-100" href="/company/history">
                      History
                    </a>
                  </li>
                  <li>
                    <a className="block px-5 py-2 text-sm hover:bg-gray-100" href="/company/team">
                      Our Team
                    </a>
                  </li>
                  <li>
                    <a className="block px-5 py-2 text-sm hover:bg-gray-100" href="/company/blog">
                      Blog
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a className="flex items-end p-1 gap-1" href="/careers">
                Careers
              </a>
            </li>
            <li>
              <a className="flex items-end p-1 active:text-[#141414ff]" href="/about">
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button className="bg-transparent py-1 px-4 active:text-[#141414ff]">Login</button>
          <button className="bg-transparent border-2 border-[#696969ff] py-1 px-4 rounded-xl active:text-[#141414ff]">Register</button>
        </div>
        <div className="md:hidden">
          <button className="bg-transparent p-2 text-[#696969ff] text-4xl"
          onClick={() => setOpenMenu((prev)=> !prev)}>
            <IoIosMenu />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
