import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { adduser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const handleLogin = () => {
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        const {uid, email, displayName} = userCredential.user
        dispatch(adduser({
          uid:uid,
          email:email,
          displayName:displayName
        }))
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
            className="border px-2 py-1 w-full mt-4 cursor-pointer bg-purple-400 text-white font-bold "
          >
            Login
          </button>
          <p className="text-center font-bold mt-4">
            Don't have an Account ?{" "}
            <Link className="hover:underline" to={"/signup"}>
              Sign up
            </Link>{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
