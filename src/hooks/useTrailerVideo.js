import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
//   console.log(movieId);
  useEffect(() => {
    getMovieTrailer();
  }, []);
  const getMovieTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    const trailer = json?.results.filter((e) => e.type === "Trailer");
    const finalTrailer = trailer.length ? trailer[0] : json?.results[0];
    // console.log(finalTrailer.key);
    dispatch(addTrailerVideo(finalTrailer?.key));
  };
  return;
};

export default useTrailerVideo;
