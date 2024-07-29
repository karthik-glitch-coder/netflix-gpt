import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-2">
      <h1 className="text-xl font-bold py-4  text-white">{title}</h1>
      <div
        className="flex overflow-x-scroll"
        //this ⬇️ style = hides scroll bar
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
