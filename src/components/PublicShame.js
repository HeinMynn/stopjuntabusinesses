import React, { useEffect, useState } from "react";
import Tabletop from "tabletop";
import { FaSpinner } from "react-icons/fa";

function PublicShame(props) {
  const [shame, setShame] = useState([]);
  const [isLoading, setLoading] = useState(true);

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
      key: "15385WjhOZcBxyWOfaiHCBafJ17wXZlCtQIC61xuI1ao",
      callback: (googleData) => {
        setShame(googleData);
        setLoading(false);
      },
      simpleSheet: true,
    });
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="w-full items-center justify-center px-1">
      {isLoading ? <Spinner /> : ""}
      <table className="w-full bg-white">
        <thead className="text-blue-500 border-b border-gray-500">
          <tr>
            <th className="w-2/12 text-left py-3 px-4 uppercase font-semibold text-sm hidden md:block">
              စဉ်
            </th>
            <th className="w-5/12 text-left py-3 px-4 uppercase font-semibold text-sm">
              အမည်
            </th>
            <th className="w-5/12 text-left py-3 px-4 uppercase font-semibold text-sm">
              ရာထူး
            </th>
            <th className="w-5/12 text-left py-3 px-4 uppercase font-semibold text-sm">
              ဌာန/အလုပ်အကိုင်
            </th>
            <th className="w-5/12 text-left py-3 px-4 uppercase font-semibold text-sm">
              ဖြစ်စဉ်
            </th>
          </tr>
        </thead>
        <tbody>
          {shame.map((obj) => {
            // let id = parseInt(obj.ID);
            return (
              <tr key={obj.ID} className="border-b border-gray-300">
                <td className="w-2/12 text-left py-3 px-4 text-sm hidden md:block">
                  {obj.ID}
                </td>
                <td className="w-max text-left py-3 px-4 text-sm">
                  {obj.Name}
                </td>
                <td className="w-5/12 text-left py-3 px-4 text-sm">
                  {obj.Designation}
                </td>
                <td className="w-5/12 text-left py-3 px-4 text-sm">
                  {obj.Department}
                </td>
                <td className="w-5/12 text-left py-3 px-4 text-sm">
                  <a
                    href={obj.CaseLink}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md bg-blue-400 px-4 py-2 text-white"
                  >
                    Detail
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default PublicShame;
