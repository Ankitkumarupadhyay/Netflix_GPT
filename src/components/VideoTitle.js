import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";

const VideoTitle = ({ info }) => {
  const { original_title, overview, vote_average, release_date } = info;

  return (
    <>
      <div className="pt-52  sm:pl-16 pl-5 absolute w-screen h-screen text-white bg-black bg-opacity-50 ">
        <h1 className="sm:text-6xl  text-3xl font-bold ">
          <i> {original_title}</i> <sub className="sm:text-3xl text-lg">({vote_average.toFixed(1)})</sub> 
        </h1>
        <p className="sm:text-lg text-base 2xl:w-1/4 lg:w-[40%] md:w-[50%] sm:w-[60%] w-[80%] py-5">{overview} </p>
        <div className="flex">
          <button className="items-center gap-2 hover:opacity-80 flex p-2 sm:px-8 px-3 font-bold text-base sm:text-lg rounded-lg m-2 bg-white text-black">
          <FaPlay /> Play
          </button>
          <button className="p-2 flex items-center gap-2 sm:px-5 px-2 font-bold sm:text-lg text-base rounded-lg m-2 bg-gray-500 text-white">
           <IoInformationCircleOutline/> More Info
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoTitle;
