import React, { useEffect, useState } from "react";
import { FcCalendar, FcClock } from "react-icons/fc";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Spinner from "./Spinner";
require("dotenv").config();

function Campaign(props) {
  const contentful = require("contentful");
  const [isLoading, setLoading] = useState(true);

  const client = contentful.createClient({
    space: process.env.REACT_APP_SPACE,
    accessToken: process.env.REACT_APP_ACCESSTOKEN,
  });

  const [campaigns, setCampaign] = useState([]);
  const dateToTime = (dates) =>
    dates.toLocaleString("en-GB", {
      hour12: true,
      hour: "2-digit",
      minute: "numeric",
      timeZone: "Asia/Rangoon",
    });
  
  const FullDate = (dates,day,month,year) =>
    dates.toLocaleString("en-GB", {
      year: year,
      month: month,
      day:day,
    });
  
  const Card = (props) => {
    return (
      <div className="card-wrapper px-2 mb-2 grid md:grid-cols-2 p-4 rounded-md dark:hover:bg-gray-900 border border-red-400">
        <div className="img mx-auto px-2">
          <img src={props.artwork} className="w-60 h-auto" />
        </div>
        <div className="mb-2 text-center md:text-left">
          <div className="text-xl font-bold text-red-400 mt-4 hidden mb-2">
            {props.title}
          </div>
          <div className="slogan text-xl text-red-400 font-bold leading-9 mb-2">
            {props.slogan}
          </div>
          <div className="dateTime text-sm mb-2">
            <span className="date font-extralight">
              <FcCalendar className="inline-block mr-1" />
              {props.date} |{" "}
            </span>
            <span className="time font-extralight">
              <FcClock className="inline-block mr-1" />
              {props.time}
            </span>
          </div>
          <div className="city"></div>
          <div className="desc text-sm">
            {documentToReactComponents(props.desc)}
          </div>
        </div>
      </div>
    );
      };;;

  const CardList = (props) => {
    return (
      <div className="wrapper grid grid-cols-12 gap-2 border border-red-400 mb-2 p-2 rounded-md">
        <span className="col-span-2 date border border-t-8 border-red-400 text-center">
          <span className="text-2xl">{props.date.substring(0, props.date.indexOf(" "))}</span>
          <br  />
          <span className="text-sm">{props.date.substring(props.date.indexOf(" "))}</span>
        </span>
        <div className="col-span-3 mx-auto">
          <img
            src={props.artwork}
            alt=""
            className="w-28 h-28 object-contain"
          />
        </div>

        <div className="font-semibold col-span-7">
          <div className="text-lg text-red-400 mb-2">{props.title}</div>
          <div className="dateTime text-sm mb-2">
            <span className="date font-extralight">
              <FcCalendar className="inline-block mr-1" />
              {props.date} |{" "}
            </span>
            <span className="time font-extralight">
              <FcClock className="inline-block mr-1" />
              {props.time}
            </span>
          </div>
          <div className="desc text-xs">{props.slogan}</div>
        </div>
      </div>
    );
  }
  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    client
      .getEntries({
        content_type: "campaign",
        'fields.dateTime[gt]':today,
        order: "sys.createdAt",
      })
      .then((response) => {
        setCampaign(response.items);
        setLoading(false);
      });
  }, []);

  return (
    <div className="grid md:grid-cols-7 md:gap-4">
      <div className="featured md:col-span-4">
        {isLoading ? <Spinner /> : ""}
        {campaigns.slice(0, 1).map((obj) => {
          const localDate = new Date(obj.fields.dateTime);
          const date = FullDate(localDate, "2-digit", "long", "numeric");
          const time = dateToTime(localDate);
          return (
            <Card
              key={obj.sys.id}
              artwork={obj.fields.artwork.fields.file.url}
              title={obj.fields.title}
              date={date}
              time={time}
              slogan={obj.fields.slogan}
              desc={obj.fields.description}
            />
          );
        })}
      </div>
      <div className="upcoming md:col-span-3">
        <div className="wrapper">
          <h3 className="text-red-400 font-extrabold text-lg text-center md:text-left">
            Upcoming Strikes
          </h3>
          {campaigns.slice(1).map((obj) => {
            const localDate = new Date(obj.fields.dateTime);
            const date = FullDate(localDate, "2-digit", "short","numeric");
            const time = dateToTime(localDate);
            return (
              <CardList
                key={obj.sys.id}
                artwork={obj.fields.artwork.fields.file.url}
                title={obj.fields.title}
                date={date}
                time={time}
                slogan={obj.fields.slogan}
                desc={obj.fields.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Campaign;
