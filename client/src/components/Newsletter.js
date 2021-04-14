import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaBookReader } from "react-icons/fa";
import Spinner from "./Parts/Spinner";

function Newsletter() {
  const [newsletter, setNewsletter] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const Newsletter = (props) => {
    return (
      <div className="inline-block mb-4 w-full px-4">
        <Helmet>
          <title>Read Newsletters | Burma Spring Revolution 2021</title>
          <meta
            name="description"
            content="Read Burma Spring Revolution Newsletter spreading to fight against blocking information flow during internet cut off."
          />
          <meta
            name="keywords"
            content="Molotov, myanmar spring revolution, myanmar coup, LGE Newsletter"
          />
        </Helmet>
        <div className="image cursor-pointer">
          <img
            src={props.image}
            alt="molotov cover"
            className="w-3/4 md:w-full mx-auto border-2 rounded-lg border-red-400"
          />
        </div>
        <div className="text mb-2 text-center">
          <h3 className="font-bold font-serif text-xl text-red-400">
            {props.title}
          </h3>
          <span className="text-xs font-serif">{props.number}</span>
        </div>
        <a href={props.link}>
          <div className="link border text-center font-serif bg-red-500 py-2 cursor-pointer">
            <FaBookReader className="inline-block mr-2" /> Read Me
          </div>
        </a>
      </div>
    );
  };

  useEffect(() => {
    axios
      .get("https://mm010221.herokuapp.com/newsletter/")
      .then((res) => {
        setNewsletter(res.data.reverse());
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  },  []);
  return (
    <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-2 md:max-w-3xl mx-auto items-center justify-center px-2">
      {isLoading?<Spinner/>:null}
      {newsletter.map((obj) => {
        return (
          <Newsletter
            key={obj._id}
            image={obj.imgURL}
            title={obj.title}
            number={obj.number}
            link={obj.link}
          />
        );
      })}
    </div>
  );
}

export default Newsletter;
