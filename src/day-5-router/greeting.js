import React from "react";
import { useParams } from "react-router-dom";

const GreetingInHome = () => {
  const params = useParams();
  console.log(params);
  return <div>Hello {params.username ? params.username : "user"}</div>;
};

export default GreetingInHome;
