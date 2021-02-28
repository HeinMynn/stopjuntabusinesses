import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar(props) {
  const LoggedStatus = props.loggedIn;
  return (
    <div className="fixed w-full shadow-md z-50 top-0">
      <nav className="bg-red-800">
        <div className="lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center justify-between h-31">
            <div className="block md:flex items-center xs:mx-auto">
              <div className="mx-auto lg:self-center lg:flex-shrink-0 text-center">
                <Link to="/">
                  <img
                    className="h-15 w-10 py-1 inline-block"
                    src="/images/logo.png"
                    alt="010221.org"
                  />
                  <h1 className="inline-block md:hidden ml-4 text-2xl tracking-widest font-black text-white text-center">
                    010221.org
                  </h1>
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
                  {LoggedStatus ? (
                    <NavLink
                      to="/logout"
                      className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:bg-gray-900"
                      activeClassName="active"
                    >
                      Log Out
                    </NavLink>
                  ) : (
                    ""
                  )}
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
