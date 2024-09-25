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
    <button
      onClick={handlePress}
      style={{ background: "none", border: "none" }}
    >
      <IoArrowBack size={24} color="white" />
    </button>
  );
};

export default ArrowBack;
