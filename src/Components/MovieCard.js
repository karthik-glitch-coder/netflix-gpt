import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-32 pr-2">
      <img className="rounded-sm" src={IMG_CDN_URL + posterPath} alt="Movie Poster" />
    </div>
  );
};

export default MovieCard;
