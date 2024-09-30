import React from "react";
import { useNavigate } from "react-router-dom"; // React Router for navigation
import { IoArrowBack } from "react-icons/io5"; // Using react-icons for the arrow icon

const ArrowBack = ({ link }) => {
  const navigate = useNavigate(); // React Router's navigate function

  const handlePress = () => {
    if (link) {
      navigate(link); // Navigate to a specific route
    } else {
      navigate(-1); // Go back to the previous page
    }
  };

  return (
    <div className="absolute top-4 left-4">
      <button
        onClick={handlePress}
        className="bg-white h-10 w-10 rounded-lg flex items-center justify-center shadow-md"
      >
        <IoArrowBack size={24} color="black" />
      </button>
    </div>
  );
};

export default ArrowBack;
