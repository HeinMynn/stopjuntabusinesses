import React, { useEffect, useState } from "react";
import axios from "axios";

function JuntaList(props) {
  let [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [searchInd, setSearchInd] = useState("");

  const Spinner = () => {
    return (
      <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
        <div className="border-solid animate-spin border-t-0 rounded-full border-blue-400 border-8 h-64 w-64"></div>
      </div>
    );
  };

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
  function groupBy(data, key) {
    return data.reduce((acc, x) => {
      acc[x[key]] = [...(acc[x[key]] || []), x];
      return acc;
    }, {});
  }
  var i = 0;
  var groupByIndustry = groupBy(data, "industry");

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
      return e.product.trim().toLowerCase().match(search);
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
      <h1 className="text-xl md:text-4xl font-black text-gray-600 text-center my-4">
        တပ်ပိုင် စီးပွားရေး လုပ်ငန်းများ သပိတ်မှောက် လှုပ်ရှားမှု
      </h1>
      <hr />
      {isLoading ? <Spinner /> : ""}
      <div className="lg:max-w-4xl grid lg:grid-cols-2 gap-2 mx-auto">
        <div className="search">
          <input
            name="search"
            type="text"
            placeholder="search here..."
            className="w-full border-2  border-gray-300 px-4 h-10 focus:outline-none my-2 rounded-md"
            onChange={onChange}
            value={search ? search : ""}
          />
        </div>
        <div className="filter grid grid-cols-4">
          <select
            className="border border-gray-300 px-4 py-2 my-2 h-10 rounded-md col-span-3"
            onChange={onChangeInd}
            value={searchInd}
          >
            <option value="" disabled>
              --- Choose Industry ---
            </option>
            <option value="Banking and finance">Banking and finance</option>
            <option value="Cigarettes">Cigarettes</option>
            <option value="Communications">Communications</option>
            <option value="Construction">Construction</option>
            <option value="Entertainment/Tourism">Entertainment/Tourism</option>
            <option value="Food and drink">Food and drink</option>
            <option value="Health Servcies">Health Servcies</option>
            <option value="Health and Beauty Products">
              Health and Beauty Products
            </option>
            <option value="Industrial Estates/Offices">
              Industrial Estates/Offices
            </option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="Media">Media</option>
            <option value="Port">Port</option>
            <option value="Retail">Retail</option>
            <option value="Trading companies">Trading companies</option>
            <option value="Transport">Transport</option>
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
                        <p className="font-normal text-gray-600 tracking-wider leading-4">
                          
                          
                          
                          
                          
                          
                          
                          
                          
                          
                          {obj.product}
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        </p>
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
