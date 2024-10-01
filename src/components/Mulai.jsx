import React from "react";
import { useNavigate } from "react-router-dom";

function Mulai() {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 w-full bg-bottombar flex justify-around pt-4 pb-2 px-8  rounded-t-3xl">
      <button
        onClick={() => navigate("/home")}
        className="bg-primary p-3 rounded-3xl text-white w-full text-xl font-semibold font-poppins"
      >
        Mulai
      </button>
    </div>
  );
}

export default Mulai;
