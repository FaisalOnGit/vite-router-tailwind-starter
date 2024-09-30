import React from "react";
import ArrowBack from "../components/Arrowback";
import { useNavigate } from "react-router-dom";

function EditProfile() {
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-gray-100 flex flex-col justify-between py-3">
      <div className="bg-primary py-5 rounded-b-full">
        <ArrowBack link="/home" />
        <h2 className="text-xl font-semibold text-center text-white">
          Profile
        </h2>
      </div>
      <div className="flex flex-col px-5 gap-4">
        <label className="text-primary text-lg -mb-2 font-poppins">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="bg-transparent border-2 border-primary p-3 rounded-3xl text-black font-poppins"
        />
        <label className="text-primary text-lg -mb-2 font-poppins">Email</label>
        <input
          type="email"
          placeholder="Enter email address"
          className="bg-transparent border-2 border-primary p-3 rounded-3xl text-black font-poppins"
        />
        <label className="text-primary text-lg -mb-2 font-poppins">No HP</label>
        <input
          type="text"
          placeholder="Enter your phone number"
          className="bg-transparent border-2 border-primary p-3 rounded-3xl text-black font-poppins"
        />
        <label className="text-primary text-lg -mb-2 font-poppins">
          Tanggal Lahir
        </label>
        <input
          type="date"
          placeholder="Enter birth date"
          className="bg-transparent border-2 border-primary p-3 rounded-3xl text-black font-poppins"
        />
        <label className="text-primary text-lg -mb-2 font-poppins">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter password"
          className="bg-transparent border-2 border-primary p-3 rounded-3xl text-black font-poppins"
        />
      </div>
      <div className="px-5 mb-5">
        <button
          onClick={() => navigate("/home")}
          className="bg-primary p-3 rounded-3xl text-white w-full text-xl font-semibold font-poppins"
        >
          Simpan
        </button>
      </div>
    </div>
  );
}

export default EditProfile;
