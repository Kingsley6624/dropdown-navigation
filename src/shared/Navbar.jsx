import React from "react";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";



import logo from "../assets/icons/logo.svg";
import todo from "../assets/icons/icon-todo.svg";
import calendar from "../assets/icons/icon-calendar.svg";
import reminders from "../assets/icons/icon-reminders.svg";
import planning from "../assets/icons/icon-planning.svg"; 
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";

const NavBar = ({ setOpenMenu, openMenu }) => {
  const navigate = useNavigate();
  const [openFeature, setOpenFeature] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);
  
  return (
    <nav>
      <div className="flex items-center justify-between px-[5%] py-4 text-[#696969ff] font-medium text-lg z-50 mt-2">
        <div className="flex items-center gap-12">
          <span onClick={() => navigate('/')} ><img src={logo} alt="" /></span>
          <ul className="hidden md:flex items-center gap-4">
            <li className="relative">
              <button className="flex items-end p-1 gap-1 active:text-[#141414ff]" 
              onClick={() => setOpenFeature((prev) => !prev)}>
                Feature {openFeature ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openFeature && (
                <ul className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg w-32 py-2 text-[#696969ff]">
                  <li>
                    <Link className="flex gap-2 px-5 py-2 text-sm hover:bg-gray-100" to="/feature/1">
                      <img src={todo} alt="" />
                      <span className="whitespace-nowrap">Todo List</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="flex gap-2 px-5 py-2 text-sm hover:bg-gray-100" to="/feature/2">
                      <img src={calendar} alt="" />
                      <span className="whitespace-nowrap">Calendar</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="flex gap-2 px-5 py-2 text-sm hover:bg-gray-100" to="/feature/3">
                      <img src={reminders} alt="" />
                      <span className="whitespace-nowrap">Reminders</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="flex gap-2 px-5 py-2 text-sm text-gray-700 hover:bg-gray-100" to="/feature/4">
                      <img src={planning} alt="" />
                      <span className="whitespace-nowrap">Planning</span>
                    </Link>
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
                    <Link className="block px-5 py-2 text-sm hover:bg-gray-100" to="/company/history">
                      History
                    </Link>
                  </li>
                  <li>
                    <Link className="block px-5 py-2 text-sm hover:bg-gray-100" to="/company/team">
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <NavLink className="block px-5 py-2 text-sm hover:bg-gray-100" to="/company/blog">
                      Blog
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <NavLink className="flex items-end p-1 gap-1" to="/careers">
                Careers
              </NavLink>
            </li>
            <li>
              <NavLink className="flex items-end p-1 active:text-[#141414ff]" to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button className="bg-transparent py-1 px-4 active:text-[#141414ff]">Login</button>
          <button className="bg-transparent border-2 border-[#696969ff] py-1 px-4 rounded-xl active:text-[#141414ff]">Register</button>
        </div>
        <div className="md:hidden">
          <button className='bg-white p-2 text-[#696969ff] text-4xl' onClick={() => setOpenMenu(true)}>
            <IoIosMenu />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
