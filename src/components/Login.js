import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const handleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative">
      <Header />
      <div className="absolute  ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg"
          alt="bg-img"
          className=" "
        />
        <form className="rounded-sm bg-opacity-90 bg-black w-[30%] flex flex-col p-12 absolute top-[20vh] left-[35vw] text-white ">
          <h1 className="font-bold text-3xl my-2">
            {isSignInForm ? "Sign IN" : "Sign Up"}
          </h1>
          {!isSignInForm && <input
            type="text"
            placeholder="Full Name"
            className=" outline-none bg-[#262934] p-4 my-4 rounded-md"
          />} 
          <input
            type="text"
            placeholder="Email"
            className=" outline-none bg-[#262934] p-4 my-4 rounded-md"
          />
          <input
            type="text"
            placeholder="Password"
            className="outline-none bg-[#262934] p-4 my-4 rounded-md"
          />
          <button className="p-3 my-3 w-full bg-[#C11119] font-bold rounded-md ">
          {isSignInForm ? "Sign IN" : "Sign Up"}
          </button>
          <h1 className="p-1 my-4 select-none">
            {isSignInForm ? "New to Netflix? " : "Already an user? "}
            <span
              className="cursor-pointer font-medium"
              onClick={handleSignInForm}
            >
              <i>{isSignInForm ? "Sign Up" : "Sign IN"}</i>
            </span>
          </h1>
        </form>
      </div>
    </div>
  );
};

export default Login;
