import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((store) => store.user);
  // console.log(userInfo);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;

        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse")
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/")
      }
    });
    return ()=>{
      unsubscribe()
    }
  }, []);

  const handlesignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="absolute flex justify-between items-center w-[100%] z-40 px-4 sm:px-20 sm:py-5 bg-gradient-to-b from-black ">
      <img
        className="z-50 w-40 sm:w-56"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {userInfo && (
        <div className="flex gap-2 items-center ">
          <FaUserAlt size={40} color="red"  cursor={"pointer"} /> 
          <button
            onClick={handlesignout}
            className="p-2 m-2 border-2 bg-red-600 text-white  hover:bg-gray-100 border-red-600 hover:text-red-600 rounded-lg font-bold text-lg"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
