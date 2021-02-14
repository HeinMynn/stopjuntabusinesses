import React from "react";
import { useParams } from "react-router-dom";

function CDMDetail(props) {
  const { id } = useParams();
  return <div>This is CDM Detail Page {id}.</div>;
}

export default CDMDetail;
