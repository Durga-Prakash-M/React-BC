import React, { createContext } from "react";
import useGetJoke from "../hooks/useGetJoke";
import JokePoster from "./JokePoster";

export const useJokeSharing = createContext();
const JokeGetter = () => {
  const { isLoading, data, isError, error } = useGetJoke();
  if (isLoading) {
    return <h2>loading a wonderful joke....</h2>;
  }
  return (
    <div>
      <h2>The Joke...</h2>
      <hr></hr>
      <h3>setup: {data.data.setup}</h3>
      <h3>punchline: {data.data.punchline}</h3>
      <useJokeSharing.Provider value={data.data}>
        <JokePoster />
      </useJokeSharing.Provider>
    </div>
  );
};
export default JokeGetter;
