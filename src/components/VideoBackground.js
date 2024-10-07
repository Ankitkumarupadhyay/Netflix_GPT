import React from "react";
import useTrailerVideo from "../hooks/useTrailerVideo";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  useTrailerVideo(movieId);
  const trailerId = useSelector((store) => store.movies?.trailerVideo);
  if (trailerId === null) return;
  // console.log(trailerId);

  return (
    <div className="w-screen sm:pt-0 pt-20 bg-black min-h-screen">
      <iframe
        className="w-screen top-10 aspect-video  "
        src={`https://www.youtube.com/embed/${trailerId}?&autoplay=1&mute=1&loop=1&cc_load_policy=3&controls=0 `}
        title="YouTube video player"
        allow="accelerometer; autoplay;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
