import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  
  // console.log(movies);
  return (
    <div className="bg-black">
      <div className="relative z-40 -mt-40">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popolarMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"UpComing"} movies={movies.upcomingMovies} />
        
      </div>
    </div>
  );
};

export default SecondaryContainer;
