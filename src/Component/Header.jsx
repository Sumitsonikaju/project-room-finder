import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {onAuthStateChanged, signOut } from  "firebase/auth"
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { adduser, removeUser } from "../utils/userSlice";

const Header = () => {
  const user = useSelector((store) => store.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const {email,displayName} = auth.currentUser
        dispatch(adduser({
          uid:uid,
          email:email,
          displayName:displayName
        }))
        navigate("/mainPage")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
  },[])

  const handeLogout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    
  }
  return (
    <>
      <nav className="flex justify-between items-center min-h-2 px-10 py-2 ">
        <div className="text-2xl uppercase tracking-wide font-bold ">
          Room-buddy
        </div>
        <input
          className="bg-gray-100 w-[30rem] outline-none rounded-md px-2 py-1 "
          type="text"
          placeholder="search your person....."
        />
        <ul className="flex space-x-4 items-center">
         {!user && <>
          <Link to={"/"}>
            <button className="font-bold cursor-pointer">Login</button>
          </Link>
          
          <Link to={"/signup"}>
            {" "}
            <button className="border px-3 py-2 bg-purple-400 text-white font-bold rounded-md">
              Signup
            </button>
          </Link>
         </> }
          {user && <button className="border px-3 py-2 bg-purple-400 text-white font-bold rounded-md" onClick={handeLogout}>Logout</button> }
          {user &&   <Link to={"/Create"}>
            <button className="font-bold cursor-pointer">Create</button> 
          </Link>
          }
        </ul>
      </nav>
    </>
  );
};

export default Header;
