import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="fixed w-full shadow-md z-50 top-0">
      <nav className="bg-red-800">
        <div className="lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex items-center justify-between h-31">
            <div className="block lg:flex items-center xs:mx-auto">
              <div className="mx-auto lg:self-center lg:flex-shrink-0">
                <Link to="/">
                  <img
                    className="h-20 w-14 py-1 block mx-auto"
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
                    to="/cdm"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:bg-gray-900"
                    activeClassName="active"
                  >
                    CDM Information Center
                  </NavLink>
                  <NavLink
                    to="/publicshame"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:bg-gray-900"
                    activeClassName="active"
                  >
                    Shame
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
