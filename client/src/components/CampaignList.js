import React, { useEffect, useState } from "react";
import { client } from "./Parts/Contentful";
import { HCard } from "./Parts/HCard";
import { FullDate, dateToTime } from "./Parts/Dates";
import Spinner from "./Parts/Spinner";
import { useParams, Redirect } from "react-router-dom";

function CampaignList(props) {
  const [isLoading, setLoading] = useState(true);
  const [campaigns, setCampaign] = useState([]);
  const [isRedirect, setRedirect] = useState(false);
  const { status } = useParams();

  useEffect(() => {
    const d = new Date();
    const today = new Date(d.getTime() - d.getTimezoneOffset() * 60000)
      .toISOString()
      .slice(0, 10);
    if (status === "completed") {
      client
        .getEntries({
          content_type: "campaign",
          "fields.dateTime[lte]": today,
          order: "-sys.createdAt",
        })
        .then((response) => {
          setCampaign(response.items);
          setLoading(false);
        });
    } else if (status === "upcoming") {
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
    } else {
      setLoading(false);
      setRedirect(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="w-full md:max-w-3xl mx-auto items-center justify-center px-2">
      {isRedirect ? <Redirect to="/404" /> : null}
      <h1 className="text-xl md:text-3xl font-black text-gray-600 text-center my-4 tracking-wider dark:text-white">
        {status === "completed" ? "Completed " : "Upcoming "} Campaigns
      </h1>
      {isLoading ? <Spinner /> : ""}
      {campaigns.map((obj) => {
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
  );
}

export default CampaignList;
