import React, { useEffect, useState } from "react";
// import DataTable from "react-data-table-component";
import Tabletop from "tabletop";
import { FaSpinner } from "react-icons/fa";

function JuntaList(props) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const Spinner = () => {
    return (
      <div className="w-full h-full fixed block top-0 left-0 bg-white opacity-90 z-50">
        <span className="text-green-500 opacity-90 top-1/2 my-0 mx-auto block relative ">
          <FaSpinner className="w-10 h-10 mx-auto" />
        </span>
      </div>
    );
  };
  function fetchData() {
    Tabletop.init({
      key: "1l8JYfCSKMGYGjZ45XhGSmtwS9p8h82sZY9UAP1PaTL4",
      callback: (googleData) => {
        console.log("google sheet data --->", googleData);
        setData(googleData);
        setLoading(false);
      },
      simpleSheet: true,
    });
  }
  function onChange(e) {
    const s = e.target.value;
    setSearch(s);

    if (search !== "") {
      let dataFilter = data.filter((obj) =>
        obj.Product.toLowerCase().includes(search.toLowerCase())
      );
      setData(dataFilter);
    }
  }
  useEffect(() => {
    if (search === "") {
      fetchData();
    }
  }, [search]);
  return (
    <div className="w-full flex items-center justify-center">
      {isLoading ? <Spinner /> : ""}
      <div className="w-full max-w-7xl mx-auto">
        <input
          name="search"
          type="text"
          placeholder="search here..."
          className="w-1/2 border-2 border-gray-300 px-4 pr-16 h-10 focus:outline-none my-2 rounded-md"
          onChange={onChange}
          value={search ? search : ""}
        />
        <select className="w-1/2 border border-gray-300 px-4">
          <option value="">Filter by Industry</option>
          <option value="Cigarettes">Cigarettes</option>
          <option value="Entertainment/Tourism">Entertainment/Tourism</option>
          <option value="Food and drink">Food and drink</option>
          <option value="Media">Media</option>
        </select>
        <table className="w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-2/12 text-left py-3 px-4 uppercase font-semibold text-sm hidden md:block">
                ID
              </th>
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
              let id = parseInt(obj.ID);
              return (
                <tr
                  key={obj.ID}
                  className={`${id % 2 === 1 ? "bg-gray-200" : ""}`}
                >
                  <td className="w-2/12 text-left py-3 px-4 text-sm hidden md:block">
                    {obj.ID}
                  </td>
                  <td className="w-max text-left py-3 px-4 text-sm">
                    {obj.Product}
                  </td>
                  <td className="w-5/12 text-left py-3 px-4 text-sm">
                    {obj.Industry}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* <div className="inner w-full">
        <DataTable
          title="Stop Buying Junta Businesses"
          columns={columns}
          data={data}
          striped
          highlightOnHover
        />
      </div> */}
    </div>
  );
}

export default JuntaList;
