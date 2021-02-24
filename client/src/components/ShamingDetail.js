import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useHistory, useParams } from "react-router-dom";
import Spinner from "./Parts/Spinner";

function CDMDetail(props) {
  const { id } = useParams();
  let history = useHistory();
  const [profile, setProfile] = useState([]);
  const [isLoading, setLoading] = useState(true);
  function fetchProfile() {
    axios
      .get("https://mm010221.herokuapp.com/shame/" + id)
      .then((res) => {
        // let newres = Object.entries(res);
        console.log(res.data);
        setProfile(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="w-full md:max-w-4xl mx-auto items-center justify-center px-1">
      <div className="heading flex justify-items-center">
        <button onClick={history.goBack} className="items-center flex-none">
          <IoIosArrowBack className="text-gray-500 inline-block" size={30} />
          <span>Back</span>
        </button>
        <h1 className="text-xl md:text-3xl font-black text-gray-600 text-center my-4 tracking-wider flex-1">
          Public Shaming List
        </h1>
      </div>
      <hr />
      {isLoading ? <Spinner /> : ""}
      <div
        className={`wrapper w-full mx-auto py-2 my-4 border border-gray-300 rounded-md ${
          isLoading ? "hidden" : ""
        }`}
      >
        <div>
          <div className="profile mx-auto text-center mb-4">
            <img
              src={`/images/${
                profile.gender === "male"
                  ? "sample-male.png"
                  : "sample-female.png"
              }`}
              alt="sample"
              className="w-32 h-auto inline-block"
            />
          </div>
          <div className="detail">
            <div className="name text-center font-bold text-2xl text-red-500">
              {profile.name}
            </div>
            <div className="info text-center mb-4">
              <span className="mr-2 px-2 text-gray-500">
                {profile.designation}
              </span>
              |<span className="px-2 text-gray-500">{profile.department}</span>
            </div>
            <div className="remark text-center mb-2 px-4">{profile.remark}</div>
            <div className="proof">
              {profile.proof ? <img src={profile.proof} alt="proof" /> : ""}
              {profile.caseLink ? (
                <img
                  src={profile.caseLink}
                  alt="case"
                  className="w-1/2 mx-auto"
                />
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="feedback"></div>
        </div>
      </div>
    </div>
  );
}

export default CDMDetail;
