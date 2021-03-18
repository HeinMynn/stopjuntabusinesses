import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import Spinner from "./Parts/Spinner";
import Lightbox from "react-image-lightbox";

function CDMDetail(props) {
  const { id } = useParams();
  const [profile, setProfile] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isOpen, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState();

  function handleClick(props) {
    setOpen(true);
    setPhotoIndex(props);
  }
  function fetchProfile() {
    axios
      .get("https://mm010221.herokuapp.com/shame/" + id)
      .then((res) => {
        // let newres = Object.entries(res);
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
        <Link to="/publicshame" className="text-center flex-none">
          <IoIosArrowBack className="text-gray-500 inline-block" size={30} />
          <span>Back</span>
        </Link>
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
              src={`${
                profile.image
                  ? profile.image
                  : profile.gender === "male"
                  ? "/images/sample-male.png"
                  : "/images/sample-female.png"
              }`}
              alt="sample"
              className="w-40 h-40 object-cover object-top inline-block"
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
            <div className="proof mx-auto">
              {/* {profile.proof ?
                <img src={profile.proof} alt="proof" onClick={() => setIsImageViewerOpen(true)}
              className="mb-4 mx-auto w-full md:w-2/5 cursor-pointer"/>:null
            } */}
            
              <div
                className={`proof-img grid ${
                  profile.proof && profile.proof.length > 1 ? "grid-cols-2" : ""
                } lg:grid-cols-${
                  profile.proof ? profile.proof.length : "1"
                } gap-3 mx-auto w-full md:w-3/5`}
              >
                {profile.proof &&
                  profile.proof.map((obj, index) => {
                    return (
                      <img
                        key={index}
                        src={obj}
                        alt={`${index}`}
                        onClick={() => handleClick(index)}
                        className="mb-4 px-6 py-6 w-full h-52 object-cover cursor-pointer border"
                      />
                    );
                  })}
              </div>
              {isOpen ? (
                <Lightbox
                  mainSrc={profile.proof[photoIndex]}
                  nextSrc={
                    profile.proof[(photoIndex + 1) % profile.proof.length]
                  }
                  prevSrc={
                    profile.proof[
                      (photoIndex + profile.proof.length - 1) %
                        profile.proof.length
                    ]
                  }
                  onCloseRequest={() => setOpen(false)}
                  onMovePrevRequest={() =>
                    setPhotoIndex(
                      (photoIndex + profile.proof.length - 1) %
                        profile.proof.length
                    )
                  }
                  onMoveNextRequest={() =>
                    setPhotoIndex((photoIndex + 1) % profile.proof.length)
                  }
                  className="mb-4 mx-auto w-full md:w-3/5"
                />
              ) : null}
              {profile.proof2 ? (
                <video width="640" height="480" controls className="mx-auto">
                  <source src={`${profile.proof2}#t=0.1`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                ""
              )}
            </div>
            <div className="case mx-auto text-center my-4">
              {profile.caseLink ? (
                <a
                  href={profile.caseLink}
                  alt="case"
                  className="px-6 py-2 mr-4 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-md text-center"
                  target="_blank"
                  rel="noreferrer"
                >
                  အသေးစိတ် ကြည့်ရန်
                </a>
              ) : (
                ""
              )}

              {profile.profile ? (
                <a
                  href={profile.profile}
                  alt="case"
                  className="px-6 py-2 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-md text-center"
                  target="_blank"
                  rel="noreferrer"
                  data-fbid={profile.fbid}
                >
                  အကောင့်ကြည့်ရန်
                </a>
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
