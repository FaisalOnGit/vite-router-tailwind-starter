import React from "react";
import WelcomeLogo from "../assets/vector.png";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-primary p-4">
      <div className="flex flex-col justify-around my-5 h-full">
        <h2 className="text-center text-3xl md:text-4xl text-white font-bold">
          Let's Get Started
        </h2>
        <div className="flex justify-center my-4">
          <img
            src={WelcomeLogo}
            alt="Welcome Logo"
            className="w-2/3 md:w-1/2"
          />
        </div>
        <button
          onClick={() => navigate("/register")}
          className="py-3 bg-kuning mx-7 rounded-xl"
        >
          <p className="text-lg md:text-xl font-bold text-center text-gray-700">
            Sign Up
          </p>
        </button>
        <div className="flex justify-center">
          <p className="text-white font-semibold">Already Have an Account? </p>
          <button onClick={() => navigate("/login")}>
            <p className="font-semibold text-kuning ml-1">Login</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
