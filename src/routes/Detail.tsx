import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const param = useParams();
  return <div>{param.id}</div>;
};

export default Detail;
