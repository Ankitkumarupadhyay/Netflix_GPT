import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import useTrailerVideo from "../hooks/useTrailerVideo";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  useTrailerVideo(movieId);
  const trailerId = useSelector((store) => store.movies?.trailerVideo);
  if (trailerId === null) return;
  // console.log(trailerId);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video "
        src={`https://www.youtube.com/embed/${trailerId}?&autoplay=1&mute=1&cc_load_policy=3`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
