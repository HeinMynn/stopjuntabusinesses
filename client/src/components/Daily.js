import React from "react";
import { useParams } from "react-router-dom";

function Daily(props) {
  const { date } = useParams();
  return <div>This is Daily Detail Page {date}.</div>;
}

export default Daily;
