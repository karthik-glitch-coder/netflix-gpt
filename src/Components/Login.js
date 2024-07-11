import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute h-screen">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_small.jpg"
          alt="bgImg"
        />
      </div>
      <form className=" bg-opacity-80 rounded-lg absolute w-3/12 p-12 bg-black bg-transparent- my-32 mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-2xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <button className="bg-red-700 py-2 my-4 rounded-lg w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 text-gray-400 cursor-pointer underline "
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign up Now."
            : "Already registered? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
