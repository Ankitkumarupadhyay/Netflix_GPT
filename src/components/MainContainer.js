import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle"
import VideoBackground  from "./VideoBackground"

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return;

  const mainMovie = movies[0];
//   console.log(mainMovie);
  return <>
  
  <VideoTitle info={mainMovie} />
  <VideoBackground movieId = {mainMovie?.id} />
  
  </>
};

export default MainContainer;
