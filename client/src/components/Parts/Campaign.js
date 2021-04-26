import React, { useEffect, useState } from "react";
import { FcCalendar, FcClock } from "react-icons/fc";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";
import { client } from './Contentful';
import { HCard } from './HCard';
import { FullDate, dateToTime } from './Dates';
import { FaLongArrowAltRight } from "react-icons/fa";

function Campaign(props) {
  const [isLoading, setLoading] = useState(true);
  const [campaigns, setCampaign] = useState([]);
  
  
  const Card = (props) => {
    return (
      <Link to={`/campaign/${props.slug}`}>
        <div className="card-wrapper px-2 mb-2 grid md:grid-cols-2 p-4 rounded-md dark:hover:bg-gray-900 border border-red-400">
          <div className="img mx-auto px-2">
            <img src={props.artwork} alt="" className="w-60 h-auto" />
          </div>
          <div className="mb-2">
            <div className="text-xl text-center font-bold text-red-400 mt-4 hidden mb-2">
              {props.title}
            </div>
            <div className="slogan text-center text-lg text-red-400 font-bold leading-9 mb-2">
              {props.slogan}
            </div>
            <div className="dateTime text-center text-sm mb-2">
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
            <div className="desc px-4 text-sm leading-7">
              {documentToReactComponents(props.desc)}
            </div>
          </div>
        </div>
      </Link>
    );
  };

  const CheckingEmpty = (props) => {
    return (
      <div
        className="px-4 py-3 leading-normal mt-5 text-yellow-700 bg-yellow-100 rounded-lg w-full mx-auto"
        role="alert"
      >
        <span>Stay Tuned with us. More Strikes are coming.</span>
        <Link
          to="/campaigns/completed"
          className="inline-block text-sm text-red-400 font-normal hover:underline mb-4"
        >
          အရင်သပိတ်တွေ ပြန်ကြည့်မယ်{" "}
          <FaLongArrowAltRight className="inline-block" />
        </Link>
      </div>
    );
  };
  useEffect(() => {
    const d = new Date();
    const today = new Date(d.getTime() - d.getTimezoneOffset() * 60000)
      .toISOString()
      .slice(0, 10);

    client
      .getEntries({
        content_type: "campaign",
        "fields.dateTime[gt]": today,
        order: "sys.createdAt",
      })
      .then((response) => {
        setCampaign(response.items);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="grid md:grid-cols-7 md:gap-4">
      <div
        className={`featured md:col-span-4 ${
          campaigns.length === 0 ? "hidden" : ""
        }`}
      >
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
              slug={obj.fields.slug}
              date={date}
              time={time}
              slogan={obj.fields.slogan}
              desc={obj.fields.description}
            />
          );
        })}
        <Link
          to="/campaigns/completed"
          className="text-sm text-red-400 font-normal hover:underline float-right mb-4"
        >
          အရင်သပိတ်တွေ ပြန်ကြည့်မယ်{" "}
          <FaLongArrowAltRight className="inline-block" />
        </Link>
      </div>
      <div className="upcoming md:col-span-3">
        <div className="wrapper">
          <h3 className="text-red-400 font-extrabold text-lg text-center md:text-left">
            Upcoming Strikes
          </h3>
          {campaigns.slice(1).length === 0 ? <CheckingEmpty /> : ""}
          {campaigns.slice(1).map((obj) => {
            const localDate = new Date(obj.fields.dateTime);
            const date = FullDate(localDate, "2-digit", "short");
            const time = dateToTime(localDate);
            return (
              <HCard
                key={obj.sys.id}
                artwork={obj.fields.artwork.fields.file.url}
                slug={obj.fields.slug}
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
