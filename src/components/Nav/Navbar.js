import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaListUl, FaRegHandRock, FaUsers } from "react-icons/fa";

function Navbar(props) {
  return (
    <div>
      <nav className="bg-red-800">
        <div className="lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-31">
            <div className="flex items-center">
              <div className="flex-shrink-0 sm:mx-auto">
                <Link to="/">
                  <img
                    className="h-20 w-14 py-1"
                    src="/images/logo.png"
                    alt="Workflow"
                  />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavLink
                    exact
                    to="/"
                    className="px-3 py-2 rounded-md text-sm font-medium text-white focus:bg-gray-900"
                    activeClassName="active"
                  >
                    Home
                  </NavLink>

                  <NavLink
                    to="/juntabusinesses"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                    activeClassName="active"
                  >
                    Junta Business List
                  </NavLink>

                  <NavLink
                    to="/hitstop"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:bg-gray-900"
                    activeClassName="active"
                  >
                    Hit Stop Junta Businesses
                  </NavLink>
                  <NavLink
                    to="/participatinglist"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:bg-gray-900"
                    activeClassName="active"
                  >
                    Participating
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav className="fixed bottom-0 w-full border bg-red-800 flex overflow-x-auto">
        <NavLink
          to="/"
          className="flex flex-col flex-grow items-center justify-center
		overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
    ease-in-out bg-white hover:bg-gray-200 focus:text-orange-500"
          activeClassName="active"
        >
          <FaHome className="w-10 h-auto" />
        </NavLink>
        <NavLink
          to="/hitstop"
          className="flex flex-col flex-grow items-center justify-center
		overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
    ease-in-out bg-white hover:bg-gray-200 focus:text-orange-500"
          activeClassName="active"
        >
          <FaRegHandRock className="w-10 h-auto" />
        </NavLink>
        <NavLink
          to="/juntabusinesses"
          className="flex flex-col flex-grow items-center justify-center
		overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
    ease-in-out bg-white hover:bg-gray-200 focus:text-orange-500"
          activeClassName="active"
        >
          <FaListUl className="w-10 h-auto" />
        </NavLink>
        <NavLink
          to="/participatinglist"
          className="flex flex-col flex-grow items-center justify-center
		overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
    ease-in-out bg-white hover:bg-gray-200 focus:text-orange-500"
          activeClassName="active"
        >
          <FaUsers className="w-10 h-auto" />
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
