import React, { useState } from "react";

function Hitstop(props) {
  const [newData, setNewData] = useState({
    email: "",
    type: "individual",
    name: "",
    juntabusinesses: "",
  });
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };
  const handleSubmit = (e) => {
    fetch("/hitstop", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "hitstop", ...newData }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  const handleChange = (e) => {
    setNewData({ ...newData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="max-w-2xl mx-auto p-6">
        <h2 className="font-semibold text-lg uppercase text-center">
          Hit Stop buying in Junta Businesses
        </h2>
        <form
          name="hitstop"
          method="POST"
          data-netlify="true"
          className="border-t border-gray-400 pt-4 mt-6"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="hitstop" />
          <div className="inputs-container flex flex-wrap -mx-3 mb-6">
            <div className="name w-full mb-6 px-3">
              <label
                htmlFor="email"
                className="block uppercase tracking-wide mb-2"
              >
                Email:{" "}
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                className=" border-gray-400 border focus:border-gray-500 bg-white appearance-none block w-full focus:outline-none shadow-inner leading-tight rounded-md py-3 px-4"
                required
                onChange={handleChange}
                value={newData.email ? newData.email : ""}
              />
            </div>

            <div className="type w-full mb-6 px-3">
              <label
                htmlFor="individual"
                className="uppercase tracking-wide mb-2 mr-10"
              >
                <input
                  type="radio"
                  name="type"
                  id="individual"
                  className="h-4 w-4 mr-2"
                  value="individual"
                  onChange={handleChange}
                  checked={newData.type === "individual" ? true : false}
                />
                Individual
              </label>
              <label
                htmlFor="business"
                className="uppercase tracking-wide mb-2 mr-10"
              >
                <input
                  type="radio"
                  name="type"
                  id="business"
                  className="h-4 w-4 mr-2"
                  value="business"
                  onChange={handleChange}
                  checked={newData.type === "business" ? true : false}
                />
                Business
              </label>
            </div>
            <div className="name w-full mb-6 px-3">
              <label
                htmlFor="name"
                className="block uppercase tracking-wide mb-2"
              >
                Name:{" "}
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name or Your Business Name"
                className=" border-gray-400 border focus:border-gray-500 bg-white appearance-none block w-full focus:outline-none shadow-inner leading-tight rounded-md py-3 px-4"
                required
                onChange={handleChange}
                value={newData.name ? newData.name : ""}
              />
            </div>
            <div className="name w-full mb-6 px-3">
              <label
                htmlFor="juntabusinesses"
                className="block uppercase tracking-wide mb-2"
              >
                Which Junta Businesses:{" "}
              </label>
              <textarea
                name="juntabusinesses"
                placeholder="Write down which military products you stop buying. Seperate with comma if more than one."
                className=" border-gray-400 border focus:border-gray-500 bg-white appearance-none block w-full focus:outline-none shadow-inner leading-tight rounded-md py-3 px-4"
                required
                rows="3"
                onChange={handleChange}
                value={newData.juntabusinesses ? newData.juntabusinesses : ""}
              />
            </div>
            <div className="submit w-full mb-6 px-3">
              <input
                type="submit"
                className="w-full py-2 px-4 rounded-md bg-red-800 text-white cursor-pointer hover:bg-white hover:text-red-800 hover:border-red-800 border"
                value="Hit Stop"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Hitstop;
