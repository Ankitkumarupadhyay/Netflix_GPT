import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";

const VideoTitle = ({ info }) => {
  const { original_title, overview, vote_average, release_date } = info;

  return (
    <>
      <div className="pt-44 pl-16 absolute w-screen aspect-video text-white bg-gradient-to-r from-black ">
        <h1 className="text-6xl font-bold ">
          <i> {original_title}</i> <sub className="text-3xl">({vote_average})</sub> 
        </h1>
        <p className="text-lg w-1/4 py-5">{overview} </p>
        <div className="flex">
          <button className="items-center gap-2 hover:opacity-80 flex p-2 px-8 font-bold text-lg rounded-lg m-2 bg-white text-black">
          <FaPlay /> Play
          </button>
          <button className="p-2 flex items-center gap-2 px-5 font-bold text-lg rounded-lg m-2 bg-gray-500 text-white">
           <IoInformationCircleOutline/> More Info
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoTitle;
