import React, { useContext } from "react";
import useAddJoke from "../hooks/useAddJoke";
import { useJokeSharing } from "./JokeGetter";

const JokePoster = () => {
  const data = useContext(useJokeSharing);
  const { mutate: addJoke } = useAddJoke();
  const handleAddJokeClick = () => {
    const jokeToBeAdded = data;
    addJoke(jokeToBeAdded);
  };
  return (
    <div>
      <button onClick={handleAddJokeClick}>Save this joke</button>
    </div>
  );
};

export default JokePoster;
