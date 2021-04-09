import React from "react";
import { FaBookReader } from "react-icons/fa";
import { Link } from "react-router-dom";

function Newsletter() {
  const Newsletter = (props) => {
    return (
      <div className="inline-block mr-4 w-full px-4">
        <div className="image">
          <img src={props.image} alt="molotov cover" className="w-full" />
        </div>
        <div className="text mb-2 text-center">
          <h3 className="font-bold font-serif text-xl text-red-400">
            {props.title}
          </h3>
          <span className="text-xs font-serif">{props.number}</span>
        </div>
        <div className="link border text-center font-serif bg-red-500 py-2 cursor-pointer">
          <Link to={props.link} target="_blank" rel="noreferrer">
            <FaBookReader className="inline-block mr-2" /> Read Me
          </Link>
        </div>
      </div>
    );
  };
  return (
    <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-2 md:max-w-3xl mx-auto items-center justify-center px-2">
      <Newsletter
        image="/images/v1n2.jpeg"
        title="Molotov"
        number="Vol-1 No-2"
        link="/molotov/"
      />
      <Newsletter
        image="/images/v1n1.jpeg"
        title="Molotov"
        number="Vol-1 No-1"
        link="/molotov/v1n1"
      />
    </div>
  );
}

export default Newsletter;
