import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="bg-red-800">
      <div className="lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-31">
          <div className="flex items-center">
            <div className="flex-shrink-0">
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
                <Link
                  to="/"
                  className="px-3 py-2 rounded-md text-sm font-medium text-white focus:bg-gray-900"
                >
                  Home
                </Link>

                <Link
                  to="/juntabusinesses"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  Junta Business List
                </Link>

                <Link
                  to="/hitstop"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:bg-gray-900"
                >
                  Hit Stop Junta Businesses
                </Link>
                <Link
                  to="/participatinglist"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:bg-gray-900"
                >
                  Participating
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
