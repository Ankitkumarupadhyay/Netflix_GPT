import React from "react";
import MovieCard from "./MovieCard";
import "../style/videoCard.css"

const MovieList = ({ title, movies }) => {
  // console.log(movies)
  if (movies === null) return;
  return (
    <div className="">
      <div className="px-5 sm:px-10">
        <h1 className="text-white font-bold text-4xl  py-5">{title} </h1>
        <div className="scroll flex overflow-x-scroll gap-4 ">
          {movies.map((movie)=>(
            <MovieCard key={movie.title} info={movie} />
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default MovieList;
