import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function AddCDM(props) {
  const history = useHistory();
  const [msg, setMsg] = useState("");
  const [errors, setErrors] = useState([]);
  const [newCDM, setNewCDM] = useState({
    name: "",
    imgLink: "",
    content: "",
    link: "",
    city: "",
    region: "",
  });

  function handleChange(e) {
    setNewCDM({ ...newCDM, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("https://mm010221.herokuapp.com/cdm/add", {
        name: newCDM.name,
        imgLink: newCDM.imgLink,
        content: newCDM.content,
        link: newCDM.link,
        city: newCDM.city,
        region: newCDM.region,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setMsg(res.data.cdm);
        history.push("/admin/addnewcdm");
        setNewCDM({
          ...newCDM,
          name: "",
          imgLink: "",
          content: "",
          link: "",
          city: "",
          region: "",
        });
      })
      .catch((err) => {
        if (err.response) {
          setErrors(err.response.data);
        }
      });
  }
  return (
    <div>
      <div className="formWrapper w-full md:w-1/3 mx-auto px-4">
        {msg ? (
          <span className="bg-green-800 text-white px-4 py-2 rounded-md mt-1 block">
            {msg}
          </span>
        ) : (
          ""
        )}
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              className="w-full border focus:outline-none px-2 rounded-md h-8"
              onChange={handleChange}
              value={newCDM.name}
            />
          </label>
          {errors.name ? (
            <span className="bg-red-400 text-white px-4 py-2 rounded-md mt-1 block">
              {errors.name}
            </span>
          ) : (
            ""
          )}
          <label htmlFor="imgLink">
            Image Link
            <input
              type="text"
              name="imgLink"
              className="w-full border focus:outline-none px-2 rounded-md h-8"
              onChange={handleChange}
              value={newCDM.imgLink}
            />
          </label>
          <label htmlFor="content">
            Content
            <textarea
              name="content"
              id="content"
              cols="30"
              rows="10"
              className="w-full border focus:outline-none px-2 rounded-md"
              onChange={handleChange}
              value={newCDM.content}
            ></textarea>
          </label>
          <label htmlFor="imgLink">
            Link
            <input
              type="text"
              name="link"
              className="w-full border focus:outline-none px-2 rounded-md h-8"
              onChange={handleChange}
              value={newCDM.link}
            />
          </label>
          <label htmlFor="imgLink">
            City
            <input
              type="text"
              name="city"
              className="w-full border focus:outline-none px-2 rounded-md h-8"
              onChange={handleChange}
              value={newCDM.city}
            />
          </label>
          <label htmlFor="imgLink">
            Region
            <input
              type="text"
              name="region"
              className="w-full border focus:outline-none px-2 rounded-md h-8"
              onChange={handleChange}
              value={newCDM.region}
            />
          </label>
          <input
            type="submit"
            value="Add New CDM"
            className="px-6 py-2 mt-2 rounded-md bg-red-400 text-white hover:bg-red-800 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
}

export default AddCDM;
