import React from "react";
import { FaEnvelope, FaHeart } from "react-icons/fa";

function Footer(props) {
  return (
    <div className="hidden md:block w-full dark:bg-gray-700 bg-black min-h-footer text-center text-white align-middle leading-7">
      <span>
        made with <FaHeart className="inline" /> by John Doe!
      </span>
      <br />
      <span>
        <FaEnvelope className="inline mr-2" />
        <a href="mailto:contact@010221.org" className="hover:text-red-200">
          contact@010221.org
        </a>
      </span>
    </div>
  );
}

export default Footer;
