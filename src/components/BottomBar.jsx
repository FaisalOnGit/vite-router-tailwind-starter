import React from "react";
import { useNavigate } from "react-router-dom"; // Assuming you're using React Router

function BottomBar() {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 w-full bg-primary flex justify-around py-4">
      <button
        onClick={() => navigate("/home")}
        className="flex flex-col items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l9-9m0 0l9 9m-9-9v18"
          />
        </svg>
        <span className="text-white text-sm mt-1">Home</span>
      </button>

      <button
        onClick={() => navigate("/profile")}
        className="flex flex-col items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5.121 17.804A7 7 0 0112 4.968a7 7 0 016.879 12.836M15 21v-1a3 3 0 00-6 0v1"
          />
        </svg>
        <span className="text-white text-sm mt-1">Profile</span>
      </button>
    </div>
  );
}

export default BottomBar;
