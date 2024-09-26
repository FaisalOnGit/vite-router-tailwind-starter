import React from "react";
import { useNavigate } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";

function BottomBar() {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 w-full bg-bottombar flex justify-around py-2 rounded-t-2xl">
      <button
        onClick={() => navigate("/home")}
        className="flex flex-col items-center"
      >
        <IoHome size={24} color="black" />
        <span className="text-black text-sm mt-1">Home</span>
      </button>

      <button
        onClick={() => navigate("/profile")}
        className="flex flex-col items-center"
      >
        <IoPerson size={24} color="black" />
        <span className="text-black text-sm mt-1">Profile</span>
      </button>
    </div>
  );
}

export default BottomBar;
