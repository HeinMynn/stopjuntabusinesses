import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React, { useEffect, useState } from "react";
import { FcCalendar, FcClock } from "react-icons/fc";
import { ImEnlarge } from "react-icons/im";
import { IoIosArrowBack } from "react-icons/io";
import Lightbox from "react-image-lightbox";
import { Link, useParams } from "react-router-dom";
import Spinner from "./Parts/Spinner";

function CampaignDetail(props) {
  const contentful = require("contentful");
  const [campaign, setCampaign] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState();
  const [isLoading, setLoading] = useState(true);

  const { id } = useParams();

  function handleClick(props) {
    setOpen(true);
    setPhotoIndex(props);
  }

  const dateToTime = (dates) =>
    dates.toLocaleString("en-GB", {
      hour12: true,
      hour: "2-digit",
      minute: "numeric",
      timeZone: "Asia/Rangoon",
    });

  const FullDate = (dates, day, month, year) =>
    dates.toLocaleString("en-GB", {
      year: year,
      month: month,
      day: day,
    });

  const client = contentful.createClient({
    space: process.env.REACT_APP_SPACE,
    accessToken: process.env.REACT_APP_ACCESSTOKEN,
  });

  useEffect(() => {
    client
      .getEntries({
        content_type: "campaign",
        "fields.slug": id,
        order: "sys.createdAt",
      })
      .then((response) => {
        setCampaign(response.items);
        setLoading(false);
        console.log(response.items);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full md:max-w-4xl mx-auto items-center justify-center px-2">
      <Link to="/" className="text-center flex-none my-4">
        <IoIosArrowBack className="text-gray-500 inline-block" size={30} />
        <span>Back</span>
      </Link>
      {isLoading ? <Spinner /> : ""}
      {campaign.map((obj) => {
        const localDate = new Date(obj.fields.dateTime);
        const date = FullDate(localDate, "2-digit", "short", "numeric");
        const time = dateToTime(localDate);
        return (
          <div key={obj.sys.id} className="wrapper mx-auto">
            <div className="image w-full md:w-1/2 mx-auto mb-2">
              <img
                src={obj.fields.artwork.fields.file.url}
                alt=""
                className="w-full"
              />
            </div>
            <div className="text text-center font-bold text-2xl text-red-400 mb-2">
              {obj.fields.title}
            </div>
            <div className="dateTime text-sm mb-2 text-center">
              <span className="date font-extralight">
                <FcCalendar className="inline-block mr-1" />
                {date} |{" "}
              </span>
              <span className="time font-extralight">
                <FcClock className="inline-block mr-1" />
                {time}
              </span>
            </div>
            <div className="desc text-center">
              <h3 className="font-semibold text-lg leading-8 tracking-widest">
                {obj.fields.slogan}
              </h3>
              <div className="desc px-6 text-justify mb-4">
                {documentToReactComponents(obj.fields.description)}
              </div>
              <div
                className={`proof-img grid ${
                  obj.fields.photos && obj.fields.photos.length > 1
                    ? "grid-cols-2"
                    : ""
                } lg:grid-cols-${
                  obj.fields.photos ? obj.fields.photos.length : "1"
                } gap-3 mx-auto w-full`}
              >
                {obj.fields.photos &&
                  obj.fields.photos.map((photo, index) => {
                    return (
                      <div
                        key={index}
                        className="relative enlarge"
                        onClick={() => handleClick(index)}
                      >
                        <img
                          src={photo.fields.file.url}
                          alt={`${index}`}
                          className="mb-4 px-6 py-6 w-full h-52 object-cover cursor-pointer border"
                        />
                        <span className="enlarge-icon absolute top-5 right-5 md:invisible">
                          <ImEnlarge className="opacity-80" />
                        </span>
                        <span className="absolute left-1/2 transform px-1 -translate-x-1/2 bottom-10 bg-black text-white text-xs">
                          {photo.fields.title}
                        </span>
                      </div>
                    );
                  })}
                {isOpen ? (
                  <Lightbox
                    mainSrc={
                      campaign[0].fields.photos[photoIndex].fields.file.url
                    }
                    nextSrc={
                      campaign[0].fields.photos[
                        (photoIndex + 1) % campaign[0].fields.photos.length
                      ].fields.file.url
                    }
                    prevSrc={
                      campaign[0].fields.photos[
                        (photoIndex + campaign[0].fields.photos.length - 1) %
                          campaign[0].fields.photos.length
                      ].fields.file.url
                    }
                    onCloseRequest={() => setOpen(false)}
                    onMovePrevRequest={() =>
                      setPhotoIndex(
                        (photoIndex + campaign[0].fields.photos.length - 1) %
                          campaign[0].fields.photos.length
                      )
                    }
                    onMoveNextRequest={() =>
                      setPhotoIndex(
                        (photoIndex + 1) % campaign[0].fields.photos.length
                      )
                    }
                    className="mb-4 mx-auto w-full md:w-3/5"
                  />
                ) : null}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CampaignDetail;
