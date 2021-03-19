import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Spinner from "./Parts/Spinner";
import { Link } from "react-router-dom";
import { FaBriefcase, FaUserTie, FaSearch } from "react-icons/fa";
import CheckingEmpty from "./Parts/CheckingEmpty";

function PublicShame(props) {
  let [shame, setShame] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [shamePerPage] = useState(10);
  const inputRef = useRef();
  const pageNumbers = [];

  function handleClick(e) {
    setCurrentPage(Number(e.target.id));
  }

  const indexOfLastShame = currentPage * shamePerPage;
  const indexOfFirstShame = indexOfLastShame - shamePerPage;
  let currentShame = shame.slice(indexOfFirstShame, indexOfLastShame);
  let lastPageNumber = shame.length / shamePerPage;

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
              src={`${
                props.image
                  ? props.image
                  : props.gender === "male"
                  ? "/images/sample-male.png"
                  : "/images/sample-female.png"
              }`}
              alt="sample"
              className="w-12 h-12 md:w-24 md:h-24 object-cover object-top inline-block"
            />
          </div>
          <div className="info flex-auto flex-grow justify-self-start">
            <div className="name">
              <h3 className="text-sm text-red-400 md:text-base leading-7 font-semibold">
                {props.name}
              </h3>
            </div>
            <div className="info">
              <span className="text-gray-500 dark:text-white text-xs md:text-sm mr-2 pr-2 border-r border-gray-500 leading-7">
                <FaUserTie className="inline-block mr-1 text-red-500" />
                {props.job}
              </span>
              <span className="text-gray-500 dark:text-white text-xs md:text-sm leading-7">
                <FaBriefcase className="inline-block mr-1 text-red-500" />
                {props.work}
              </span>
            </div>
          </div>
          <div className="action flex-none justify-self-end">
            <div className="view">&gt;</div>
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
    setCurrentPage(1);
  }
  if (search !== "") {
    shame = filterSearch(shame, search);
    currentShame = shame.slice(indexOfFirstShame, indexOfLastShame);
    lastPageNumber = shame.length / shamePerPage;
  }
  function filterSearch(array, value) {
    return array.filter((e) => {
      return (
        e.name.trim().toLowerCase().match(search.trim()) ||
        e.mmName.trim().toLowerCase().match(search.trim())
      );
    });
  }

  for (let i = 1; i <= Math.ceil(lastPageNumber); i++) {
    pageNumbers.push(i);
  }
  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <li
        key={number}
        id={number}
        onClick={handleClick}
        className={`inline mr-2 cursor-pointer px-2 py-1 ${
          currentPage === number ? "text-white bg-red-500" : ""
        }`}
      >
        {number}
      </li>
    );
  });

  function fetchShaming() {
    axios
      .get("https://mm010221.herokuapp.com/shame/")
      .then((res) => {
        setShame(res.data.reverse());
        setLoading(false);
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
      <h1 className="text-xl md:text-3xl font-black text-gray-600 text-center my-4 tracking-wider dark:text-white">
        Public Shaming List
      </h1>
      <hr />
      {isLoading ? <Spinner /> : ""}
      <div className="search relative">
        <input
          name="search"
          ref={inputRef}
          id="searchName"
          type="text"
          placeholder="နာမည်နဲ့ ရှာမယ် ..."
          className="w-full border-gray-300 dark:text-gray-500 px-4 my-4 h-10 focus:outline-none shadow rounded border-0 p-3"
          onChange={onChange}
          onFocus={onFocus}
          value={search ? search : ""}
        />
        <div className="absolute right-0 top-0 mt-5 mr-4 text-purple-lighter">
          <FaSearch className="text-gray-400" />
        </div>
      </div>
      <div
        className={`wrapper w-full mx-auto px-2 py-2 my-4 border border-gray-300 rounded-md ${
          isLoading ? "hidden" : ""
        }`}
      >
        <CheckingEmpty data={shame} loading={isLoading} />
        {currentShame.map((obj) => {
          return (
            <MyList
              key={obj._id}
              image={obj.image}
              gender={obj.gender}
              name={obj.name}
              job={obj.designation}
              work={obj.department}
              link={obj._id}
            />
          );
        })}
        <ul id="page-numbers" className="mt-2 text-center dark:text-white">
          {currentPage > 1 ? (
            <li
              onClick={() => setCurrentPage(currentPage - 1)}
              className={`inline mr-2 cursor-pointer px-2 py-1 `}
            >
              Prev
            </li>
          ) : null}
          {lastPageNumber <= 1 ? "" : renderPageNumbers}
          {currentPage < lastPageNumber ? (
            <li
              onClick={() => setCurrentPage(currentPage + 1)}
              className={`inline mr-2 cursor-pointer px-2 py-1 `}
            >
              Next
            </li>
          ) : null}
        </ul>
      </div>

    </div>
  );
}

export default PublicShame;
