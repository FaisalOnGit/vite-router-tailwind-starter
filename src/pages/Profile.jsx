import React from "react";
import ArrowBack from "../components/Arrowback";
import Img from "../assets/profile.png";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-gray-100 flex flex-col ">
      <div className="bg-primary py-5 rounded-b-full">
        <ArrowBack link="/home" />
        <h2 className="text-xl font-semibold text-center text-white">
          Profile
        </h2>
      </div>
      <div className="flex flex-row items-center justify-center">
        <img
          src={Img}
          alt="Profile"
          className="object-contain"
          style={{ height: "100px" }}
        />
        <div className="ml-1">
          <h2 className="text-black text-xl font-bold">John Doe</h2>
          <div className="bg-gray-400 py-1 px-2 rounded-full">
            <p className="text-xs">Bergabung 14 September 2024</p>
          </div>
        </div>
      </div>
      <div className="bg-transparent flex items-center justify-center">
        <button
          onClick={() => navigate("/edit")}
          className="font-semibold border border-black px-16 py-2 rounded-xl"
        >
          Edit Profile
        </button>
      </div>
      <div className="flex justify-center mt-6">
        <h2 className="font-semibold text-xl">Tentang Diriku</h2>
      </div>
      <div className="px-8 mt-6">
        <div className="font-semibold border border-black rounded-xl px-2 py-2 gap-y-2 flex flex-col">
          <p>Tipe Kepribadian</p>
          <div className="bg-gray-300 px-2 rounded-full w-7/12 text-blue-400">
            <p>Tidak Diketahui</p>
          </div>

          <p>Minat</p>
          <div className="bg-gray-300 px-2 rounded-full w-7/12 text-purple-500">
            <p>Tidak Diketahui</p>
          </div>

          <p>Bakat</p>
          <div className="bg-gray-300 px-2 rounded-full w-7/12 text-orange-300">
            <p>Tidak Diketahui</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
