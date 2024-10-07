import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpcoming from "../hooks/useUpcoming";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  const showGptPage = useSelector((store) => store.gpt.showGptPage);
  // console.log(showGptPage);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcoming();

 
  return (
    <div className="w-screen overflow-hidden">
      <Header />
      {showGptPage ? (
        <GptSearch />
      ) : (
        <>
         
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
