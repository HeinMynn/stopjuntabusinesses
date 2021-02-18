import React, { useEffect, useState } from "react";
import axios from "axios";

function CDM(props) {
  let [cdm, setCDM] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchCity, setSearchCity] = useState("");
  const [searchRegion, setSearchRegion] = useState("");
  let [location, setLocation] = useState([]);
  const [cityMsg, setCityMsg] = useState("");
  var i = 0;

  //cities && regions
  // let

  function CdmCheck() {
    if (cdm.length === 0 && isLoading === false) {
      return (
        <div
          className="px-4 py-3 leading-normal mt-5 text-yellow-700 bg-yellow-100 rounded-lg w-1/2 mx-auto"
          role="alert"
        >
          <p>No CDM Found!</p>
        </div>
      );
    } else {
      return null;
    }
  }

  function fetchCity() {
    axios
      .get("https://mm010221.herokuapp.com/city/")
      .then((res) => {
        setLocation(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function fetchCDM() {
    axios
      .get("https://mm010221.herokuapp.com/cdm/")
      .then((res) => {
        setCDM(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    if (searchCity === "" && searchRegion === "") {
      fetchCDM();
      fetchCity();
    }
  }, [searchCity]);
  
  function getUniqueRegionBy(arr, key,subkey) {
    return [...new Map(arr.map((item) => [item[key][subkey], item[key]])).values()];
  }
  function getUniqueCityBy(arr, key) {
    return [
      ...new Map(arr.map((item) => [item[key], item])).values(),
    ];
  }

  let Cities = getUniqueCityBy(location, 'name');
  const Regions = getUniqueRegionBy(location, 'region', 'mmName');

  function onChangeCity(e) {
    setSearchCity(e.target.value);
    setCityMsg("");
  }
//filter city
  if (searchCity !== "") {
    cdm = filterCity(cdm, searchCity);
  }
  function clearFilter() {
    setSearchCity("");
    setSearchRegion("");
  }

  function filterCity(array, value) {
    return array.filter((e) => {
      return e.city === value;
    });
  }


  //filter region
  function onChangeRegion(e) {
    setSearchRegion(e.target.value);
    setCityMsg("မိမိမြို့နယ်ကို ရွေးပါ");
  }
 

  if (searchRegion !== "") {
    Cities = filterCityByRegion(Cities, searchRegion);
    // cdm = filterRegion(cdm, searchRegion);
  }
function filterCityByRegion(array, value) {
  return array.filter((e) => {
    return e.region.name === value;
  });
}
  function filterRegion(array, value) {
    return array.filter((e) => {
      return e.region === value;
    });
  }

  const Card = (props) => {
    return (
      <div className="card text-center">
        <div className="cardBody mx-auto">
          <img
            src={props.imgLink}
            className="rounded-full mx-auto w-32 h-32 shadow-2xl border-4 border-white"
            alt={props.name}
          />
          <div className="content shadow-lg px-6 pt-12 pb-6 -mt-10 border border-red-50">
            <h3 className="font-semibold md:min-h-cardHeader align-middle text-lg text-red-400 py-3 border-b border-red-400">
              {props.name}
            </h3>
            <div className="body py-2 md:min-h-cardContent text-sm leading-6">
              {props.content}
            </div>
            <div className="cardFooter w-full py-4 border-t border-gray-200">
              <a
                href={props.link}
                target="_blank"
                rel="noreferrer"
                className="px-2 py-2 bg-red-500 rounded-md text-center text-white hover:bg-white border hover:border-red-500 hover:text-red-500 inline-block w-full"
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
        <div className="absolute right-1/2 bottom-1/3  transform translate-x-1/2 translate-y-1/2 ">
          <div className="border-solid animate-spin border-t-0 rounded-full border-blue-400 border-8 h-16 w-16"></div>
        </div>
      ) : (
        ""
      )}
      <div className="mx-auto">
        <img
          src="https://bn1301files.storage.live.com/y4m1anhU9nlFZR2nIXw19TGONK6nooP2ztl4q45sDq-SYH2YYec2QNr7_6VkBp3_wLNrJ2PlPKayStjpJjo1eDTaDE6VNzjzEqDZwEK30kcSCLH4UQsyg-XnFBMU6sGyGYTuBjljxQfWbvAlvUycODAQztEPVMjSftvhJXlseRi1XM?width=1024&height=587&cropmode=none"
          alt="banner"
          className="block mx-auto"
        />
        <p className="text-xs text-right mb-3">
          Art by
          <a
            href="https://www.facebook.com/jajahappy1"
            className="cursor-pointer text-red-400"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Ja Paul Art Journey
          </a>
        </p>
      </div>

      <div className="Filter grid lg:grid-cols-2 gap-2 md:w-2/3 mx-auto">
        <div className="region">
          <select
            name="region"
            id="region"
            className="w-full border border-gray-300 text-gray-600 focus:outline-none px-4 py-2 my-2 h-10 rounded-md"
            onChange={onChangeRegion}
            value={searchRegion}
          >
            <option value="" disabled>
              Filter By Region
            </option>
            {Regions.map((obj) => {
              i++;
              return (
                <option value={obj.name} key={i}>
                  {obj.mmName}
                </option>
              );
            })}
          </select>
        </div>
        <div className="city grid grid-cols-4">
          <div className="grid col-span-3">
            <select
              name="city"
              id="city"
              className="w-full border border-gray-300 text-gray-600 focus:outline-none px-4 py-2 my-2 h-10 rounded-md"
              onChange={onChangeCity}
              value={searchCity}
            >
              <option value="">Filter By City</option>
              {Cities.map((obj) => {
                i++;
                return (
                  <option value={obj.name} key={i}>
                    {obj.mmName}
                  </option>
                );
              })}
            </select>
            {cityMsg ?
              <span
                className="bg-red-400 text-xs text-white rounded-md block w-full px-2 py-2"
              >
                {cityMsg}
              </span>
              : ""}
          </div>
          <button
            onClick={clearFilter}
            className="text-red-400 cursor-pointer focus:outline-none"
          >
            clear filter
          </button>
        </div>
      </div>
      <div className="cardWrap grid md:grid-cols-2 lg:grid-cols-4 gap-2">
        <CdmCheck />
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
      <div className="FAQ"></div>
    </div>
  );
}

export default CDM;
