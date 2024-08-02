import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS, OPENAI_KEY } from "../utils/constant";
import { addGptMovieResult, clearGptSlice } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch((store) => store.gpt.gptMovies);
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  //this function helps to search the movies from tmdb searchAPI
  const searchTmdbMovie = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const genAI = new GoogleGenerativeAI(OPENAI_KEY);

    async function run() {
      // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const gptQuery =
        "Act as a Movie Recommendation System and suggest some movies for the query : " +
        searchText.current.value +
        ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Garudan, Kalki";
      const prompt = gptQuery;

      const result = await model.generateContent(prompt);
      const gptResponse = result.response;

      if (!result) {
        //todo write error handling
      }

      const gptMovies =
        gptResponse?.candidates?.[0]?.content?.parts[0].text.split(",");

      //mapping the list of movies by using helper function (searchTmdbMovie())
      const promiseArray = gptMovies.map((movie) => searchTmdbMovie(movie));
      const tmdbResults = await Promise.all(promiseArray);

      dispatch(
        addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
      );
    }
    run();
  };

  const handleClearSearch = () => {
    dispatch(clearGptSlice());
  };

  return (
    <div className="pt-[40%] md:p-[10%] flex justify-center ">
      <form
        className="w-full md:w-10/12 bg-black grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-6 rounded-lg"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 m-4 px-4 bg-red-700 col-span-3 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
        <button
          className="py-2 m-4 px-4 bg-red-700 col-span-3 text-white rounded-lg"
          onClick={handleClearSearch}
        >
          {lang[langKey].clear}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
