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
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // function fetchData() {
  //   Tabletop.init({
  //     key: "1l8JYfCSKMGYGjZ45XhGSmtwS9p8h82sZY9UAP1PaTL4",
  //     callback: (googleData) => {
  //       setData(googleData);
  //       setLoading(false);
  //     },
  //     simpleSheet: true,
  //   });
  // }
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
  }

  function onChangeInd(e) {
    setSearchInd(e.target.value);
  }

  if (searchInd !== "") {
    data = filterInd(data, searchInd);
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
    <div className="container items-center justify-center px-1 mx-auto">
      {isLoading ? <Spinner /> : ""}
      <div className="flex w-full max-w-full lg:max-w-6xl items-center mx-auto">
        <div className="flex-initial md:w-1/2 search mr-3">
          <input
            name="search"
            type="text"
            placeholder="search here..."
            className="w-full border-2 border-gray-300 px-4 h-10 focus:outline-none my-2 mr-2 rounded-md"
            onChange={onChange}
            value={search ? search : ""}
          />
        </div>
        <div className="flex-1 md:w-1/2 filter">
          <select
            className="w-full border border-gray-300 px-4 py-2 my-2 h-10 rounded-md"
            onChange={onChangeInd}
          >
            <option value="">-Industry</option>
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
        </div>
      </div>
      <table className="w-full bg-white">
        <thead className="text-blue-500 border-b border-gray-500">
          <tr>
            <th className="w-5/12 text-left py-3 px-4 uppercase font-semibold text-sm">
              Product
            </th>
            <th className="w-5/12 text-left py-3 px-4 uppercase font-semibold text-sm">
              Industry
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((obj) => {
            // let id = parseInt(obj.ID);
            return (
              <tr key={obj._id} className="border-b border-gray-300">
                <td className="w-max text-left py-3 px-4 text-sm">
                  {obj.product}
                </td>
                <td className="w-5/12 text-left py-3 px-4 text-sm">
                  {obj.industry}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default JuntaList;
