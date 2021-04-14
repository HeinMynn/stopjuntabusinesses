import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function AddNewsletter(props) {
  const history = useHistory();
  const [msg, setMsg] = useState("");
  const [errors, setErrors] = useState([]);
  const token = localStorage.getItem("token");
  const [newLetter, setNewLetter] = useState({
    name: "",
    imgURL: "",
    number: "",
    link: "",
  });

  function handleChange(e) {
    setNewLetter({ ...newLetter, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();

    const headers = {
      headers: { authorization: token },
    };
    axios
      .post(
        "https://mm010221.herokuapp.com/newsletter/add",
        {
          name: newLetter.name,
          imgURL: newLetter.imgURL,
          number: newLetter.number,
          link: newLetter.link,
        },
        headers
      )
      .then((res) => {
        // localStorage.setItem("token", res.data.token);
        setMsg(res.data.newsletter);
        console.log(res);
        history.push("/admin/addnewsletter");
        setNewLetter({
          ...newLetter,
          name: "",
          imgURL: "",
          number: "",
          link: "",
        });
      })
      .catch((err) => {
        if (err.response) {
          setErrors(err.response.data);
          console.log(err.response);
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
          <label htmlFor="title">
            Title
            <input
              type="text"
              name="title"
              className="w-full border focus:outline-none px-2 rounded-md h-8"
              onChange={handleChange}
              value={newLetter.title}
            />
          </label>
          {errors.name ? (
            <span className="bg-red-400 text-white px-4 py-2 rounded-md mt-1 block">
              {errors.name}
            </span>
          ) : (
            ""
          )}
          <label htmlFor="imgURL">
            Cover URL
            <input
              type="text"
              name="imgURL"
              className="w-full border focus:outline-none px-2 rounded-md h-8"
              onChange={handleChange}
              value={newLetter.imgURL}
            />
          </label>
          <label htmlFor="number">
            Number
            <input
              name="number"
              type="text"
              className="w-full border focus:outline-none px-2 rounded-md h-8"
              onChange={handleChange}
              value={newLetter.number}
            />
          </label>
          <label htmlFor="link">
            Link
            <input
              type="text"
              name="link"
              className="w-full border focus:outline-none px-2 rounded-md h-8"
              onChange={handleChange}
              value={newLetter.link}
            />
          </label>
          <input
            type="submit"
            value="Add Newsletter"
            className="px-6 py-2 mt-2 rounded-md bg-red-400 text-white hover:bg-red-800 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
}

export default AddNewsletter;
