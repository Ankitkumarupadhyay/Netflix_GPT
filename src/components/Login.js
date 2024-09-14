import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  
  const dispatch = useDispatch();

  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);

  const handleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleForm = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // console.log(user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );

              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error.message);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    }
  };

  return (
    <div className="relative">
      <Header />
      <div className="absolute h-[100vh] w-[100vw] flex items-center justify-center  ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg"
          alt="bg-img"
          className="h-[100%] w-[100%] object-cover "
        />
        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-sm bg-opacity-90 bg-black w-[80%] 2xl:w-[30%] xl:w-[35%] lg:w-[45%] md:w-[50%] sm:w-[60%] flex flex-col p-6 sm:p-12 absolute  text-white "
        >
          <h1 className="font-bold text-3xl my-2">
            {isSignInForm ? "Sign IN" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              ref={name}
              placeholder="Full Name"
              className=" outline-none bg-[#262934] p-4 my-4 rounded-md"
            />
          )}
          <input
            type="text"
            placeholder="Email"
            ref={email}
            className=" outline-none bg-[#262934] p-4 my-4 rounded-md"
          />
          <input
            type="text"
            placeholder="Password"
            ref={password}
            className="outline-none bg-[#262934] p-4 my-4 rounded-md"
          />
          <p className="text-red-700 font-bold text-lg  ">{errorMessage} </p>
          <button
            onClick={handleForm}
            className="p-3 my-3 w-full bg-[#C11119] font-bold rounded-md "
          >
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
