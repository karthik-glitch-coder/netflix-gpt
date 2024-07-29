import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  //why if condition - initially in the store, movies are null (!movies = movies not present)
  if (!movies) return; //this method is known as early return
  const mainMovie = movies[1];

  const { title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
