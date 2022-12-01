import React from "react";
import SignUp from "../day-2-signup";
import IncDec from "../day-3";
import { Route, Routes } from "react-router-dom";
import GreetingInHome from "./greeting";
const RouterManager = () => {
  return (
    <Routes>
      {/* //<Route path="home" element={<GreetingInHome />}/> */}

      <Route path="home/:id" element={<GreetingInHome />} />
      {/* <Route path=":username" element={<GreetingInHome />} /> */}

      <Route path="login" element={<SignUp />} />
      <Route path="counter" element={<IncDec />} />
    </Routes>
  );
};

export default RouterManager;
