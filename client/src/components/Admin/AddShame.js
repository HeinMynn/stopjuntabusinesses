import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Spinner from "../Parts/Spinner";

function AddShame(props) {
  const history = useHistory();
  const [msg, setMsg] = useState("");
  const [errors, setErrors] = useState([]);
  const token = localStorage.getItem("token");
  const [imageURL, setImageURL] = useState("");
  const [proofImgs, setProofImgs] = useState([]);
  const [picLoading, setPicLoading] = useState(false);
  const [newShame, setNewShame] = useState({
    name: "",
    mmName: "",
    designation: "",
    department: "",
    profile: "",
    caseLink: "",
    imgURL: imageURL,
    remark: "",
    proof: proofImgs,
    proof2: "",
  });

  function handleChange(e) {
    setNewShame({ ...newShame, [e.target.name]: e.target.value });
  }

  const proofImgsHandler = (e) => {
    e.preventDefault();
    setPicLoading(true);
    const proof = e.target.files[0];
    const proofData = new FormData();
    proofData.append("file", proof);
    axios
      .post("https://mm010221.herokuapp.com/newsletter/imageupload", proofData)
      .then((response) => {
        setPicLoading(false);
        setProofImgs([response.data.data, ...proofImgs]);
        setNewShame({ ...newShame, proof: proofImgs });
      });
  };

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
        setNewShame({ ...newShame, imgURL: response.data.data });
      });
  };

  function handleSubmit(e) {
    e.preventDefault();

    const headers = {
      headers: { authorization: token },
    };
    axios
      .post(
        "https://mm010221.herokuapp.com/shame/add",
        {
          name: newShame.name,
          mmName: newShame.mmName,
          designation: newShame.designation,
          department: newShame.department,
          profile: newShame.profile,
          caseLink: newShame.caseLink,
          imgURL: imageURL,
          remark: newShame.remark,
          proof: proofImgs,
          proof2: newShame.proof2,
        },
        headers
      )
      .then((res) => {
        // localStorage.setItem("token", res.data.token);
        setMsg(res.data.newShame);
        history.push("/admin/addshame");
        setNewShame({
          ...newShame,
          name: "",
          mmName: "",
          designation: "",
          department: "",
          profile: "",
          caseLink: "",
          remark: "",
          proof2: "",
        });
        setImageURL("");
        setProofImgs([]);
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
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              className="w-full border focus:outline-none px-2 rounded-md h-8"
              onChange={handleChange}
              value={newShame.name}
            />
          </label>
          {errors.name ? (
            <span className="bg-red-400 text-white px-4 py-2 rounded-md mt-1 block">
              {errors.name}
            </span>
          ) : (
            ""
          )}
          <label htmlFor="mmName">
            Name (in Myanmar)
            <input
              type="text"
              name="mmName"
              className="w-full border focus:outline-none px-2 rounded-md h-8"
              onChange={handleChange}
              value={newShame.mmName}
            />
          </label>
          {errors.mmName ? (
            <span className="bg-red-400 text-white px-4 py-2 rounded-md mt-1 block">
              {errors.mmName}
            </span>
          ) : (
            ""
          )}
          <label htmlFor="designation">
            Designation
            <input
              type="text"
              name="designation"
              className="w-full border focus:outline-none px-2 rounded-md h-8"
              onChange={handleChange}
              value={newShame.designation}
            />
          </label>
          {errors.designation ? (
            <span className="bg-red-400 text-white px-4 py-2 rounded-md mt-1 block">
              {errors.designation}
            </span>
          ) : (
            ""
          )}
          <label htmlFor="department">
            Department
            <input
              type="text"
              name="department"
              className="w-full border focus:outline-none px-2 rounded-md h-8"
              onChange={handleChange}
              value={newShame.department}
            />
          </label>
          {errors.department ? (
            <span className="bg-red-400 text-white px-4 py-2 rounded-md mt-1 block">
              {errors.department}
            </span>
          ) : (
            ""
          )}
          <label htmlFor="profile">
            Profile
            <input
              type="text"
              name="profile"
              className="w-full border focus:outline-none px-2 rounded-md h-8"
              onChange={handleChange}
              value={newShame.profile}
            />
          </label>
          {errors.profile ? (
            <span className="bg-red-400 text-white px-4 py-2 rounded-md mt-1 block">
              {errors.profile}
            </span>
          ) : (
            ""
          )}
          <label htmlFor="caseLink">
            Case Link
            <input
              type="text"
              name="caseLink"
              className="w-full border focus:outline-none px-2 rounded-md h-8"
              onChange={handleChange}
              value={newShame.caseLink}
            />
          </label>
          {errors.caseLink ? (
            <span className="bg-red-400 text-white px-4 py-2 rounded-md mt-1 block">
              {errors.caseLink}
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
          <label htmlFor="remark">
            Remark
            <textarea
              name="remark"
              id="remark"
              cols="30"
              rows="10"
              className="w-full border focus:outline-none px-2 rounded-md"
              onChange={handleChange}
              value={newShame.remark}
            ></textarea>
          </label>
          {picLoading ? <Spinner /> : null}
          {proofImgs &&
            proofImgs.map((url, index) => (
              <img
                key={index}
                src={url}
                alt=""
                className="inline-block"
                style={{ marginTop: "1rem", height: 100 }}
              />
            ))}

          <label htmlFor="proof-button">
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="proof-button"
              multiple
              type="file"
              onChange={proofImgsHandler}
            />
            <div className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Proofs
            </div>
          </label>
          <label htmlFor="proof2">
            Video Proof Link (if any)
            <input
              type="text"
              name="proof2"
              className="w-full border focus:outline-none px-2 rounded-md h-8"
              onChange={handleChange}
              value={newShame.proof2}
            />
          </label>
          {errors.proof2 ? (
            <span className="bg-red-400 text-white px-4 py-2 rounded-md mt-1 block">
              {errors.proof2}
            </span>
          ) : (
            ""
          )}
          <input
            type="submit"
            value="Add Shame"
            className="px-6 py-2 mt-2 rounded-md bg-red-400 text-white hover:bg-red-800 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
}

export default AddShame;
