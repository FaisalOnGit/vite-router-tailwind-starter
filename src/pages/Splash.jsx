import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Gambar from "../assets/welcome.png";

function Splash() {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/welcome");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div className="h-screen bg-primary flex p-8">
      <div className="flex-1 flex flex-col items-center justify-center pb-12">
        <img
          src={Gambar}
          alt="Welcome Logo"
          className="w-2/3 md:w-1/2 object-contain"
        />
        <h1 className="text-4xl text-white mt-1 font-poppins">
          <span className="font-bold">Peta</span> mimpi.
        </h1>
        <p className="italic text-lg text-gray-200 font-poppins">
          Kenali Potensi Dirimu!
        </p>
      </div>
    </div>
  );
}

export default Splash;
