import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaInfoCircle, FaListUl, FaUsers } from "react-icons/fa";

function MobileNav(props) {
  return (
    <div>
      <nav className="flex md:hidden lg:hidden fixed bottom-0 w-full border bg-red-800 overflow-x-auto h-16 z-50">
        <NavLink
          to="/"
          className="flex flex-col flex-grow items-center justify-center
		overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
    ease-in-out bg-white hover:bg-gray-200 focus:text-orange-500"
          activeClassName="active"
        >
          <FaHome className="w-5 h-auto" />
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/cdm"
          className="flex flex-col flex-grow items-center justify-center
		overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
    ease-in-out bg-white hover:bg-gray-200 focus:text-orange-500"
          activeClassName="active"
        >
          <FaInfoCircle className="w-5 h-auto" />
          <span>CDM Info</span>
        </NavLink>
        <NavLink
          to="/juntabusinesses"
          className="flex flex-col flex-grow items-center justify-center
		overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
    ease-in-out bg-white hover:bg-gray-200 focus:text-orange-500"
          activeClassName="active"
        >
          <FaListUl className="w-5 h-auto" />
          <span>Ban</span>
        </NavLink>
        <NavLink
          to="/publicshame"
          className="flex flex-col flex-grow items-center justify-center
		overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
    ease-in-out bg-white hover:bg-gray-200 focus:text-orange-500"
          activeClassName="active"
        >
          <FaUsers className="w-5 h-auto" />
          <span>Shame</span>
        </NavLink>
      </nav>
    </div>
  );
}

export default MobileNav;
