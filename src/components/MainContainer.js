import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return;

  const mainMovie = movies[0];
  //   console.log(mainMovie);
  return (
    <>
      <div className="h-screen bg-black">
        <VideoTitle info={mainMovie} />
        <VideoBackground movieId={mainMovie?.id} />
      </div>
    </>
  );
};

export default MainContainer;
