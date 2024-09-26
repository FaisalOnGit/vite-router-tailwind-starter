import React from "react";
import BottomBar from "../components/BottomBar";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  return (
    <div className="max-h-screen bg-white">
      <div className="bg-primary py-4">
        <h2 className="text-xl font-semibold text-center">Profile</h2>
      </div>
    </div>
  );
}

export default Profile;
