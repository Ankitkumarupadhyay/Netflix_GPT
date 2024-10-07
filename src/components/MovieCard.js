import React from "react";


const MovieCard = ({ info }) => {
//   console.log(info);
  const { poster_path } = info;
//   console.log(poster_path);
  return (
    <div className="">
      <div className="sm:w-[200px] w-[150px]  cursor-pointer hover:scale-110   ">
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="poster" />
      </div>
    </div>
  );
};

export default MovieCard;
