import React, { useEffect, useState } from "react";
import Interweave from "interweave";
import Spinner from "./Parts/Spinner";
import Disclaimer from "./Parts/Disclaimer";
import { Helmet } from "react-helmet-async";
require("dotenv").config();

function Home(props) {
  const contentful = require("contentful");
  const [isLoading, setLoading] = useState(true);

  const client = contentful.createClient({
    space: process.env.REACT_APP_SPACE,
    accessToken: process.env.REACT_APP_ACCESSTOKEN,
  });

  const [post, setPost] = useState([]);
  useEffect(() => {
    client.getEntries({ order: "sys.createdAt" }).then((response) => {
      setPost(response.items.reverse());
      setLoading(false);
    });
  }, []);

  const Left = (props) => {
    return (
      <div className="flex flex-row-reverse md:contents">
        <div className="bg-red-500 col-start-1 col-end-5 p-4 mr-1 md:mr-5 rounded-xl my-4 ml-auto shadow-md md:max-w-full leftWrapper">
          <h3 className="font-semibold text-md md:text-lg mb-1">
            {props.title}
          </h3>
          <div className="leading-6 text-sm">
            <Interweave tagName="div" content={props.entry} />
          </div>
        </div>
        <div className="col-start-5 col-end-6 md:mx-auto relative mr-1 md:mr-10">
          <div className="h-full w-16 flex items-center justify-center">
            <div className="h-full w-1 bg-red-800 pointer-events-none"></div>
          </div>
          <div className="flex flex-col justify-center w-16 h-16 absolute top-1/2 -mt-3 rounded-full bg-red-500 shadow text-center">
            <span>{props.date}</span>
          </div>
        </div>
      </div>
    );
  };

  const Right = (props) => {
    return (
      <div className="flex md:contents">
        <div className="col-start-5 col-end-6 mr-1 md:mr-10 md:mx-auto relative leftWrapper">
          <div className="h-full w-16 flex items-center justify-center">
            <div className="h-full w-1 bg-red-800 pointer-events-none"></div>
          </div>
          <div className="flex flex-col justify-center w-16 h-16 absolute top-1/2 -mt-3 rounded-full bg-red-500 shadow text-center">
            <span>{props.date}</span>
          </div>
        </div>
        <div className="bg-red-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
          <h3 className="font-semibold text-md md:text-lg mb-1">
            {props.title}
          </h3>
          <ul className="leading-6 text-sm">
            <Interweave content={props.entry} />
          </ul>
        </div>
      </div>
    );
  };
  return (
    <div className="container px-4 mx-auto">
      <Helmet>
        <title>Burma Spring Revolution 2021 | Popular Events</title>
        <meta
          name="description"
          content="010221.org is aimed to keep popular events during burma spring revolution 2021, to list down military-owned businesses to avoid and Social Punishment for persons who involved in military coup in any way."
        />
      </Helmet>
      {/* <h1 className="title text-center">01 Feb 21</h1> */}
      <Disclaimer />
      {/* <GetOS id="1474835114" /> */}
      <div className="mx-auto">
        <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
          {isLoading ? <Spinner /> : ""}
          {/* left */}
          {post &&
            post.map((obj) => {
              if (obj.fields.left) {
                return (
                  <Left
                    key={obj.fields.slug}
                    title={obj.fields.title}
                    entry={obj.fields.excerpt}
                    date={obj.fields.eventDate}
                  />
                );
              } else {
                return (
                  <Right
                    key={obj.fields.slug}
                    title={obj.fields.title}
                    entry={obj.fields.excerpt}
                    date={obj.fields.eventDate}
                  />
                );
              }
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;
