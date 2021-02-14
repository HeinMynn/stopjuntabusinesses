import React, { useEffect, useState } from "react";
import axios from "axios";

function CDM(props) {
  const [cdm, setCDM] = useState([]);
  const [isLoading, setLoading] = useState(true);

  function CdmCheck() {
    if (cdm.length === 0 && isLoading === false) {
      return (
        <div
          className="px-4 py-3 leading-normal mt-5 text-yellow-700 bg-yellow-100 rounded-lg w-1/2 mx-auto"
          role="alert"
        >
          <p>No Room Found!</p>
        </div>
      );
    } else {
      return null;
    }
  }
  function fetchRooms() {
    axios
      .get("https://mm010221.herokuapp.com/cdm/")
      .then((res) => {
        setCDM(res.data);
        setLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchRooms();
  }, []);

  const Card = (props) => {
    return (
      <div className="card text-center">
        <div className="cardBody mx-auto">
          <img
            src={`/images/${props.imgLink}`}
            className="rounded-full mx-auto w-32 h-32 shadow-2xl border-4 border-white"
            alt={props.name}
          />
          <div className="content shadow-lg px-6 pt-12 pb-6 -mt-10 border border-red-50">
            <h3 className="font-semibold text-lg text-red-400 py-3 border-b border-red-400">
              {props.name}
            </h3>
            <div className="body py-2">{props.content}</div>
            <div className="cardFooter w-full py-4 border-t border-gray-200">
              <a
                href={props.link}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2 bg-red-500 rounded-md text-center text-white hover:bg-white border hover:border-red-500 hover:text-red-500"
              >
                ဆက်သွယ်ရန်
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="mx-auto container px-4">
      {isLoading ? (
        <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
          <div className="border-solid animate-spin border-t-0 rounded-full border-blue-400 border-8 h-64 w-64"></div>
        </div>
      ) : (
        ""
      )}
      <CdmCheck />
      <div className="cardWrap grid md:grid-cols-2 lg:grid-cols-4 gap-2">
        {cdm.map((obj) => {
          return (
            <Card
              key={obj._id}
              imgLink={obj.imgLink}
              name={obj.name}
              content={obj.content}
              link={obj.link}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CDM;
