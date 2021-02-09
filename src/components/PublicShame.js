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
            <th className="w-full lg:w-auto text-left py-3 px-4 uppercase font-semibold text-sm hidden lg:table-cell">
              စဉ်
            </th>
            <th className="w-full lg:w-auto text-left py-3 px-4 uppercase font-semibold text-sm hidden lg:table-cell">
              အမည်
            </th>
            <th className="w-full lg:w-auto text-left py-3 px-4 uppercase font-semibold text-sm hidden lg:table-cell">
              ရာထူး
            </th>
            <th className="w-full lg:w-autotext-left py-3 px-4 uppercase font-semibold text-sm hidden lg:table-cell">
              ဌာန/အလုပ်အကိုင်
            </th>
            <th className="w-full lg:w-auto text-left py-3 px-4 uppercase font-semibold text-sm hidden lg:table-cell">
              ဖြစ်စဉ်
            </th>
          </tr>
        </thead>
        <tbody>
          {shame.map((obj) => {
            // let id = parseInt(obj.ID);
            return (
              <tr
                key={obj.ID}
                className="border-b border-gray-300 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap"
              >
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b  block lg:table-cell relative lg:static">
                  <span class="lg:hidden inline-block w-1/2 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                    ID
                  </span>
                  <span className="inline-block w-1/2">{obj.ID}</span>
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                  <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                     အမည်
                  </span>
                  {obj.Name}
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                  <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                     ရာထူး
                  </span>
                  {obj.Designation}
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                  <span class="lg:hidden absolute left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                     ဌာန/အလုပ်အကိုင်
                  </span>
                  {obj.Department}
                </td>
                <td className="w-full lg:w-auto text-left py-3 px-4 text-sm block lg:table-cell">
                  <span class="lg:hidden absolute left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                     ဖြစ်စဉ်
                  </span>
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
