import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { adduser } from "../utils/userSlice";
import { provider } from "../utils/firebase";

const Login = () => {
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const handleLogin = () => {
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        const { uid, email, displayName } = userCredential.user;
        dispatch(
          adduser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast(`${errorCode} - ${errorMessage}`, {
          position: "top-center",
        });
      });
  };

  const handleLoginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        const { uid, email, displayName } = user;
        dispatch(
          adduser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
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
            Find your Perfect Room Mate Here
          </h1>
          <p className="text-center">Please login to start your search</p>
          <form className="mt-5">
            <label>Email</label>
            <input
              ref={email}
              className="block bg-gray-100 w-full py-1 px-2 mt-2"
              type="email"
              placeholder="enter your email"
            />
            <div className="mt-4">
              <label>Password</label>
              <input
                ref={password}
                className="block bg-gray-100 w-full py-1 px-2 mt-2"
                type="password"
                placeholder="password"
              />
            </div>
          </form>
          <button
            onClick={handleLogin}
            className="border px-4 py-2 gap-2 w-full mt-4 text-lg cursor-pointer rounded-lg bg-purple-400 text-white font-bold hover:bg-purple-500"
          >
            Login
          </button>
          

          <button className="px-4 py-2 mt-4 w-full pl-[30%] border flex gap-2 cursor-pointer border-[#4889f4]  rounded-lg text-slate-700  hover:bg-[#4889f4] hover:border-white font-bold hover:text-white  hover:shadow transition duration-150"
          onClick={handleLoginWithGoogle}
          >
            <img
              className="w-6 h-6 "
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              loading="lazy"
              alt="google logo"
            />
            <span className="">Login with Google</span>
          </button>

          <p className="text-center font-bold mt-4">
            Don't have an Account ?{" "}
            <Link className="hover:underline text-blue-500" to={"/signup"}>
              Sign up
            </Link>{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
