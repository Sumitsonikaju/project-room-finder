import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch,  } from "react-redux";
import { adduser } from "../utils/userSlice";

const SignUp = () => {
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const handleSignUp = () => {
    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        const user = user.uid;
        updateProfile(auth.currentUser, {
          displayName: name.current.value,
        }).then(() => {
          const {uid, email, displayName} =  auth.currentUser;
          dispatch(adduser({
            uid:uid,
            email:email,
            displayName:displayName
          }))
        }).catch((error) => {
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast(`${errorCode} - ${errorMessage}`, {
          position: "top-center",
        });
      });
  };
  return (
    <>
      <ToastContainer />
      <div className="login-container flex justify-center items-center h-[80vh] ">
        <div className="w-[25rem]">
          <h1 className="text-center text-2xl font-bold ">
            Welcome to the Room Buddy
          </h1>
          <h1 className="text-center mt-1 font-bold">
            Find your Best Room Mates
          </h1>
          <form className="mt-5">
            <div className="mt-4">
              <label>Name</label>
              <input
                className="block bg-gray-100 w-full py-1 px-2 mt-2"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="mt-4">
              <label>Email</label>
              <input
                ref={email}
                className="block bg-gray-100 w-full py-1 px-2 mt-2"
                type="email"
                placeholder="enter your email"
              />
            </div>
            <div className="mt-4">
              <label>Password</label>
              <input
                ref={password}
                className="block bg-gray-100 w-full py-1 px-2 mt-2"
                type="password"
                placeholder="password"
              />
            </div>
            <div className="mt-4">
              <label> Confirm Password</label>
              <input
                ref={password}
                className="block bg-gray-100 w-full py-1 px-2 mt-2"
                type="password"
                placeholder="password"
              />
            </div>
          </form>
          <button
            onClick={handleSignUp}
            className="border px-2 py-1 w-full mt-4 cursor-pointer bg-purple-400 text-white font-bold "
          >
            Sign up
          </button>
          <p className="text-center font-bold mt-4">
            Already an Account ?{" "}
            <Link className="hover:underline" to={"/"}>
              Login in
            </Link>{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
