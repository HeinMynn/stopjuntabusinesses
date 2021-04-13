import { FcCalendar, FcClock } from "react-icons/fc";
import { Link } from "react-router-dom";

export const HCard = (props) => {
  return (
    <Link to={`/campaign/${props.slug}`}>
      <div className="wrapper grid grid-cols-12 gap-2 border border-l-6 border-red-400 mb-2 p-2 rounded-md">
        <span className="col-span-2 date border border-t-8 border-red-400 text-center">
          <span className="text-2xl font-black mt-4 inline-block">
            {props.date.substring(0, props.date.indexOf(" "))}
          </span>
          <br />
          <span className="text-sm">
            {props.date.substring(props.date.indexOf(" "))}
          </span>
        </span>
        <div className="col-span-3 mx-auto">
          <img
            src={props.artwork}
            alt=""
            className="w-28 h-28 object-contain"
          />
        </div>

        <div className="font-semibold col-span-7 leading-7">
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
    </Link>
  );
};
