import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Spinner from "../Parts/Spinner";

function AddNewsletter(props) {
  const history = useHistory();
  const [msg, setMsg] = useState("");
  const [errors, setErrors] = useState([]);
  const token = localStorage.getItem("token");
  const [imageURL, setImageURL] = useState("");
  const [picLoading, setPicLoading] = useState(false);
  const [newLetter, setNewLetter] = useState({
    title: "",
    imgURL: imageURL,
    number: "",
    link: "",
  });

  function handleChange(e) {
    setNewLetter({ ...newLetter, [e.target.name]: e.target.value });
  }
  const imageUploadHandler = (e) => {
    e.preventDefault();
    setPicLoading(true);
    const image = e.target.files[0];
    const data = new FormData();
    data.append("file", image);
    axios
      .post("https://mm010221.herokuapp.com/newsletter/imageupload", data)
      .then((response) => {
        setPicLoading(false);
        setImageURL(response.data.data);
        setNewLetter({ ...newLetter, imgURL: response.data.data });
      });
  };

  console.log(newLetter);
  function handleSubmit(e) {
    e.preventDefault();

    const headers = {
      headers: { authorization: token },
    };
    axios
      .post(
        "https://mm010221.herokuapp.com/newsletter/add",
        {
          title: newLetter.title,
          imgURL: newLetter.imgURL,
          number: newLetter.number,
          link: newLetter.link,
        },
        headers
      )
      .then((res) => {
        // localStorage.setItem("token", res.data.token);
        setMsg(res.data.newLetter);
        console.log(res);
        history.push("/admin/addnewsletter");
        setNewLetter({
          ...newLetter,
          title: "",
          imgURL: "",
          number: "",
          link: "",
        });
        setImageURL("");
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
          {errors.title ? (
            <span className="bg-red-400 text-white px-4 py-2 rounded-md mt-1 block">
              {errors.title}
            </span>
          ) : (
            ""
          )}
          {picLoading ? <Spinner /> : null}
          {imageURL ? (
            <img
              src={imageURL}
              alt="your pic"
              style={{ marginTop: "1rem", height: 150 }}
            />
          ) : null}

          <label htmlFor="contained-button-file">
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="contained-button-file"
              multiple
              type="file"
              onChange={imageUploadHandler}
            />
            <div className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              ဓါတ်ပုံတင်မည်
            </div>
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
