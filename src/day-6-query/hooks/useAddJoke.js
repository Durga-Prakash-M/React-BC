import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";

import React from "react";

const addJoke = (joke) => {
  return axios.post("http://localhost:4000/jokes", joke);
};
const useAddJoke = () => {
  return useMutation(addJoke);
};

export default useAddJoke;
