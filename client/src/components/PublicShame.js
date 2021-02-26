import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Spinner from "./Parts/Spinner";
import { Link } from "react-router-dom";
import { FaBriefcase, FaUserTie, FaSearch } from "react-icons/fa";
import Disclaimer from "./Parts/Disclaimer";

function PublicShame(props) {
  let [shame, setShame] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const inputRef = useRef();

function ShamingCheck() {
  if (shame.length === 0 && isLoading === false) {
    return (
      <div
        className="px-4 py-3 leading-normal mt-5 text-yellow-700 bg-yellow-100 rounded-lg w-1/2 mx-auto"
        role="alert"
      >
        <p>သင်ရှာနေသောလူကို မတွေ့ပါ။ ဒီစာရင်းမှာ ပါဝင်သင့်တယ်လို့ ထင်ပါက <a href="mailto:contact@010221.org">contact@010221.org</a> ကို ဆက်သွယ်နိုင်ပါတယ်။</p>
      </div>
    );
  } else {
    return null;
  }
}

  const MyList = (props) => {
    return (
      <div
        key={props._id}
        className="innerWrapper px-4 py-2 w-full border-b border-gray-300 last:border-0  "
      >
        <Link
          to={`/shaming/${props.link}`}
          className="text-gray-500 flex justify-items-start items-center"
        >
          <div className="thumbnail flex-none mr-4">
            <img
              src={`/images/${
                props.gender === "male"
                  ? "sample-male.png"
                  : "sample-female.png"
              }`}
              alt="sample"
              className="w-12 md:w-24 h-auto inline-block"
            />
          </div>
          <div className="info flex-auto flex-grow justify-self-start">
            <div className="name">
              <h3 className="text-sm text-red-400 md:text-base leading-7 font-semibold">
                {props.name}
              </h3>
            </div>
            <div className="info">
              <span className="text-gray-500 text-xs md:text-sm mr-2 pr-2 border-r border-gray-500 leading-7">
                <FaUserTie className="inline-block mr-1 text-red-500"/>{props.job}
              </span>
              <span className="text-gray-500 text-xs md:text-sm leading-7">
                <FaBriefcase className="inline-block mr-1 text-red-500"/>{props.work}
              </span>
            </div>
          </div>
          <div className="action flex-none justify-self-end">
            <div className="view">
              <button>
                <Link to={`/shaming/${props.link}`} className="text-gray-500">
                  &gt;
                </Link>
              </button>
            </div>
          </div>
        </Link>
      </div>
    );
  };
  function onFocus() {
    inputRef.current.scrollIntoView();
  }
  function onChange(e) {
    const s = e.target.value;
    const searchString = s.toLowerCase();
    setSearch(searchString);
  }
  if (search !== "") {
    shame = filterSearch(shame, search);
  }
  function filterSearch(array, value) {
    return array.filter((e) => {
      return (
        e.name.trim().toLowerCase().match(search) ||
        e.mmName.trim().toLowerCase().match(search)
      );
    });
  }
  function fetchShaming() {
    axios
      .get("https://mm010221.herokuapp.com/shame/")
      .then((res) => {
        setShame(res.data);
        setLoading(false);
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchShaming();
  }, []);
  return (
    <div className="w-full md:max-w-3xl mx-auto items-center justify-center px-2">
      <h1 className="text-xl md:text-3xl font-black text-gray-600 text-center my-4 tracking-wider">
        Public Shaming List
      </h1>
      <Disclaimer />
      <hr />
      {isLoading ? <Spinner /> : ""}
      <div className="search relative">
        <input
          name="search"
          ref={inputRef}
          id="searchName"
          type="text"
          placeholder="နာမည်နဲ့ ရှာမယ် ..."
          className="w-full border-gray-300 px-4 my-4 h-10 focus:outline-none shadow rounded border-0 p-3"
          onChange={onChange}
          onFocus={onFocus}
          value={search ? search : ""}
        />
        <div class="absolute right-0 top-0 mt-5 mr-4 text-purple-lighter">
          <FaSearch className="text-gray-400" />
        </div>
      </div>
      <div
        className={`wrapper w-full mx-auto px-2 py-2 my-4 border border-gray-300 rounded-md ${
          isLoading ? "hidden" : ""
        }`}
      >
        {shame.map((obj) => {
          return (
            <MyList
              key={obj._id}
              gender={obj.gender}
              name={obj.name}
              job={obj.designation}
              work={obj.department}
              link={obj._id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PublicShame;
