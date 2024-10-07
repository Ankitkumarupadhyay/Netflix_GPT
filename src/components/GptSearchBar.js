import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector(store=> store.config.lang)
  // console.log(langKey)
  return (
    <div className="lg:pt-[10%] md:pt-[25%] sm:pt-[30%] pt-[40%] flex justify-center">
      <form className="md:w-[60%] sm:w-[70%] lg:w-[50%] w-[90%] rounded-xl  border-2 border-red-600 ">
        <input
          className="p-2 rounded-l-xl outline-none w-[80%]   sm:w-[85%] "
          type="text"
          placeholder={lang[langKey].searchPlaceholder}
        />
        <button className="py-2 sm:px-4 px-1 sm:w-[15%] w-[20%]  bg-red-600 text-white font-semibold rounded-r-lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
