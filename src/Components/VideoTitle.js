import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-16  absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-lg md:text-4xl font-bold">{title}</h1>
      <p className="hidden md:inline-block w-2/5 py-4">{overview}</p>
      <div className="opacity-80 my-2 md:my-0">
        <button className="bg-white hover:bg-opacity-80 text-black mx-1 font-bold px-5 md:px-10 p-1 md:p-3 rounded-lg ">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 text-white mx-1 font-bold  px-10 p-3 rounded-lg ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
