import React, { useEffect, useState } from "react";
import axios from "axios";
import Popup from "reactjs-popup";

function PublicShame(props) {
  const [shame, setShame] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const Spinner = () => {
    return (
      <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
        <div className="border-solid animate-spin border-t-0 rounded-full border-blue-400 border-8 h-64 w-64"></div>
      </div>
    );
  };
  function fetchShaming() {
    axios
      .get("https://mm010221.herokuapp.com/shame/")
      .then((res) => {
        setShame(res.data);
        setLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // function fetchData() {
  //   Tabletop.init({
  //     key: "15385WjhOZcBxyWOfaiHCBafJ17wXZlCtQIC61xuI1ao",
  //     callback: (googleData) => {
  //       setShame(googleData);
  //       setLoading(false);
  //     },
  //     simpleSheet: true,
  //   });
  // }
  useEffect(() => {
    fetchShaming();
  }, []);
  return (
    <div className="w-full items-center justify-center px-1">
      <h1 className="text-xl md:text-3xl font-black text-gray-600 text-center my-4 tracking-wider">
        Public Shaming List
      </h1>
      <hr />
      {isLoading ? <Spinner /> : ""}
      <table className="w-full bg-white mt-4">
        <thead className="text-blue-500 border-b border-gray-500">
          <tr>
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
                key={obj._id}
                className="border-b border-gray-300 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap"
              >
                <td className="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static">
                  <span class="lg:hidden inline-block w-1/4 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                    အမည်
                  </span>
                  <span className="inline-block w-3/4">{obj.name}</span>
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                  <span class="lg:hidden inline-block w-1/4 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                    ရာထူး
                  </span>
                  <span className="inline-block w-3/4">{obj.designation}</span>
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                  <span class="lg:hidden inline-block w-1/4 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                    ဌာန/အလုပ်အကိုင်
                  </span>
                  <span className="inline-block w-3/4">{obj.department}</span>
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static mb-5">
                  <span class="float-left lg:hidden inline-block w-1/4 top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                    ဖြစ်စဉ်
                  </span>
                  <div className="w-3/4 mx-auto">
                    <Popup
                      trigger={
                        <button className="button px-4 py-2 border bg-red-400 text-white focus:outline-none rounded-md hover:bg-red-800">
                           အသေးစိတ် ဖတ်ရန်
                        </button>
                      }
                      modal
                    >
                      {(close) => (
                        <div className="modal w-full px-1 py-4">
                          <button
                            className="close float-right border border-gray-600 px-2 rounded focus:outline-none"
                            onClick={close}
                          >
                            &times;
                          </button>
                          <div className="header border-b py-1 text-center border-red-300">
                            ဖြစ်စဉ်
                          </div>
                          <div className="content w-full py-2 mb-1">
                            {/* <img src={obj.Proof}/> */}
                            {obj.remark}
                          </div>
                          <div className="actions text-center">
                            {obj.profile && (
                              <a
                                href={obj.profile}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-md bg-red-400 px-4 py-2 text-white mr-4 hover:bg-red-800"
                              >
                                Profile
                              </a>
                            )}
                            <a
                              href={obj.caseLink}
                              target="_blank"
                              rel="noreferrer"
                              className="rounded-md bg-red-400 px-4 py-2 text-white hover:bg-red-800"
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
