import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    //checking store having nowPlayingMovies then only render the movielist
    movies.nowPlayingMovies && (
      <div className="bg-black pl-14">
        <div className="-mt-80 relative z-20">
          <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
          <MovieList title="Popular" movies={movies.popularMovies} />
          <MovieList title="Top-rated" movies={movies.topRatedMovies} />
          <MovieList title="Upcoming" movies={movies.upcomingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
