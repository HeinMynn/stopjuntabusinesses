import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

function CDMDetail(props) {
  const { id } = useParams();
  axios
    .get("https://mm010221.herokuapp.com/cdm/" + id)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  return <div>This is CDM Detail Page {id}.</div>;
}

export default CDMDetail;
