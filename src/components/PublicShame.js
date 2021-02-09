import React, { useEffect, useState } from "react";
import Tabletop from "tabletop";
import { FaSpinner } from "react-icons/fa";
import Popup from "reactjs-popup";

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
      <table className="w-full bg-white mt-4">
        <thead className="text-blue-500 border-b border-gray-500">
          <tr>
            <th className="w-full lg:w-auto text-center py-3 border px-4 uppercase font-semibold text-sm hidden lg:table-cell">
              စဉ်
            </th>
            <th className="w-full lg:w-auto text-center py-3 border px-4 uppercase font-semibold text-sm hidden lg:table-cell">
              အမည်
            </th>
            <th className="w-full lg:w-auto text-center py-3 border px-4 uppercase font-semibold text-sm hidden lg:table-cell">
              ရာထူး
            </th>
            <th className="w-full lg:w-auto text-center py-3 border px-4 uppercase font-semibold text-sm hidden lg:table-cell">
              ဌာန/အလုပ်အကိုင်
            </th>
            <th className="w-full lg:w-auto text-center py-3 border px-4 uppercase font-semibold text-sm hidden lg:table-cell">
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
                  <span class="lg:hidden inline-block w-1/4 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                    စဉ်
                  </span>
                  <span className="inline-block w-3/4">{obj.ID}</span>
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                  <span class="lg:hidden inline-block w-1/4 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                    အမည်
                  </span>
                  <span className="inline-block w-3/4">{obj.Name}</span>
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                  <span class="lg:hidden inline-block w-1/4 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                    ရာထူး
                  </span>
                  <span className="inline-block w-3/4">{obj.Designation}</span>
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                  <span class="lg:hidden inline-block w-1/4 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                    ဌာန/အလုပ်အကိုင်
                  </span>
                  <span className="inline-block w-3/4">{obj.Department}</span>
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static mb-5">
                  <span class="float-left lg:hidden inline-block w-1/4 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                    ဖြစ်စဉ်
                  </span>
                  <div className="w-3/4 mx-auto">
                    <Popup
                      trigger={
                        <button className="button px-4 py-2 border bg-green-400 text-white">
                           အသေးစိတ် ဖတ်ရန်
                        </button>
                      }
                      modal
                    >
                      {(close) => (
                        <div className="modal w-full px-1 py-4">
                          <button
                            className="close float-right border border-gray-600 px-2 rounded"
                            onClick={close}
                          >
                            &times;
                          </button>
                          <div className="header border-b py-1 text-center border-red-300">
                            ဖြစ်စဉ်
                          </div>
                          <div className="content w-full py-2 mb-1">
                            {/* <img src={obj.Proof}/> */}
                            {obj.Remark}
                          </div>
                          <div className="actions text-center">
                            {obj.Profile && (
                              <a
                                href={obj.Profile}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-md bg-blue-400 px-4 py-2 text-white mr-4"
                              >
                                Profile
                              </a>
                            )}
                            <a
                              href={obj.CaseLink}
                              target="_blank"
                              rel="noreferrer"
                              className="rounded-md bg-blue-400 px-4 py-2 text-white"
                            >
                              မူရင်းလင့်ခ်
                            </a>
                          </div>
                        </div>
                      )}
                    </Popup>
                  </div>
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
