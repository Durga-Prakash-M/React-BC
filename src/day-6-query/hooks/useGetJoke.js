import axios from "axios";
import { useQuery } from "react-query";

import React from "react";

const fetchAJoke = () => {
  return axios.get(`https://official-joke-api.appspot.com/random_joke`);
};

const useGetJoke = () => {
  return useQuery("get-joke", fetchAJoke);
};

export default useGetJoke;
