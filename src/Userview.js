import React from "react";
import { useParams } from "react-router-dom";

function Userview() {
  const params = useParams();
  return <div>userview -{params.userid}</div>;
}

export default Userview;
