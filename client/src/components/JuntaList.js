import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Parts/Spinner";
import { FaSearch } from "react-icons/fa";
import CheckingEmpty from "./Parts/CheckingEmpty";
import { Helmet } from "react-helmet-async";
import {  ChangeLang, Lang  } from "./Parts/ChangeLang";

function JuntaList(props) {
  let [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [searchInd, setSearchInd] = useState("");
  const [owned, setOwned] = useState("military");

  let language = useContext(ChangeLang)[0];
  let currentLang = Lang[language];

  if (owned === "military") {
    data = data.filter((obj) => obj.owned === undefined);
  } else if (owned === "private") {
    data = data.filter((obj) => obj.owned === "private");
  }

  function fetchBusiness() {
    axios
      .get("https://mm010221.herokuapp.com/business/")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleBusinessMilitary(e) {
    setOwned("military");
    setSearchInd(...searchInd);
  }

  function handleBusinessPrivate(e) {
    setOwned("private");
  }

  function groupBy(data, key) {
    return data.reduce((acc, x) => {
      acc[x[key]] = [...(acc[x[key]] || []), x];
      return acc;
    }, {});
  }
  var i = 0;
  var groupByIndustry = groupBy(data, "industry");
  var industry = groupBy(data, "industry");
  function clearFilter() {
    setSearch("");
    setSearchInd("");
  }
  function onChange(e) {
    const s = e.target.value;
    const searchString = s.toLowerCase();
    setSearch(searchString);
  }

  function filterSearch(array, value) {
    return array.filter((e) => {
      let mmName = "";
      if (e.mmName !== undefined) {
        mmName = e.mmName;
      }
      return (
        e.product.trim().toLowerCase().match(search) ||
        mmName.trim().toLowerCase().match(search)
      );
    });
  }

  if (search !== "") {
    data = filterSearch(data, search);
    groupByIndustry = groupBy(data, "industry");
  }

  function onChangeInd(e) {
    setSearchInd(e.target.value);
  }

  if (searchInd !== "") {
    data = filterInd(data, searchInd);
    groupByIndustry = groupBy(data, "industry");
  }

  function filterInd(array, value) {
    return array.filter((e) => {
      return e.industry === value;
    });
  }

  useEffect(() => {
    if (search === "") {
      fetchBusiness();
    }
  }, [search]);
  return (
    <div className="container px-2 mx-auto">
      <Helmet>
        <title>
          Boycott Military Businesses | Burma Spring Revolution 2021
        </title>
        <meta
          name="description"
          content="Military Owned Businesses - စစ်တပ်ပိုင် လုပ်ငန်းများကို ရှောင်ကြဉ်နိုင်စေရန် စာရင်းပြုစုထားပါသည်။ ကိုယ့်ရဲ့ ပိုက်ဆံဟာ ပြည်သူကို သတ်မယ့် ကျည်ဆံဖိုး မဖြစ်ပါစေနဲ့။"
        />
        <meta
          name="keywords"
          content="myanmar juntas' businesses, military-owned businesses"
        />
      </Helmet>
      <div className="tabs text-center mb-4">
        <h2
          className={`text-md cursor-pointer md:text-xl font-black text-gray-600 dark:text-white inline-block text-center mr-2 md:mr-10 px-2 md:px-10 py-2 ${
            owned === "military"
              ? "border-b-4 border-gray-600 dark:border-white shadow-lg"
              : ""
          }`}
          onClick={handleBusinessMilitary}
        >
          {currentLang.lang === "my-MM"
            ? "တပ်ပိုင်လုပ်ငန်းများ"
            : "Military-Owned"}
        </h2>
        <h2
          className={`text-md md:text-xl font-black text-gray-600 dark:text-white inline-block text-center mr-2 md:mr-10 px-2 md:px-10 py-2 cursor-pointer ${
            owned === "private"
              ? "border-b-4 dark:border-white border-black hover:border-gray-900 dark:hover:border-white shadow-lg"
              : ""
          }`}
          onClick={handleBusinessPrivate}
        >
          {currentLang.lang === "my-MM"
            ? "ဆက်စပ်လုပ်ငန်းများ"
            : "Military-Related"}
        </h2>
      </div>
      {isLoading ? <Spinner /> : ""}
      <div className="lg:max-w-4xl grid lg:grid-cols-2 gap-2 mx-auto">
        <div className="search relative">
          <input
            name="search"
            type="text"
            placeholder="နာမည်နဲ့ ရှာမယ်"
            className="w-full border-gray-300 px-4 h-10 focus:outline-none my-2 shadow rounded border-0 p-3 dark:text-gray-500"
            onChange={onChange}
            value={search ? search : ""}
          />
          <div className="absolute right-0 top-0 mt-5 mr-4 text-purple-lighter">
            <FaSearch className="text-gray-400" />
          </div>
        </div>
        <div className="filter grid grid-cols-4">
          <select
            className="border border-gray-300 dark:text-gray-500 px-4 py-2 my-2 h-10 rounded-md col-span-3"
            onChange={onChangeInd}
            value={searchInd}
          >
            <option value="" disabled>
              --- Choose Industry ---
            </option>
            {groupByIndustry &&
              Object.keys(industry).map((ind) => {
                i++;
                return (
                  <option key={i} value={ind}>
                    {ind}
                  </option>
                );
              })}
          </select>
          <button
            onClick={clearFilter}
            className="text-red-400 cursor-pointer focus:outline-none"
          >
            clear filter
          </button>
        </div>
      </div>
      <div className="wrap">
        <div className="list mx-auto">
          <CheckingEmpty data={data} loading={isLoading} />
          {groupByIndustry &&
            Object.keys(groupByIndustry).map((ind) => {
              i++;
              return (
                <div key={i} className="w-full lg:w-1/2 mx-auto">
                  <h3 className="text-red-400 font-serif text-2xl font-bold mt-5 mb-1 text-left leading-7 tracking-wide">
                    {ind}
                  </h3>
                  {groupByIndustry[ind].map((obj) => {
                    return (
                      <div
                        key={obj._id}
                        className="w-full border border-gray-200 px-4 py-4 rounded-md mb-2 shadow-md"
                      >
                        <p
                          className={`${
                            owned === "private" ? "font-bold" : "font-normal"
                          } text-lg text-gray-600 dark:text-white tracking-wider leading-4`}
                        >
                          {currentLang.lang === "my-MM" &&
                          obj.mmName !== undefined
                            ? obj.mmName
                            : obj.product}
                        </p>
                        <small className="dark:text-gray-300">
                          {obj.detail}
                        </small>
                      </div>
                    );
                  })}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default JuntaList;
