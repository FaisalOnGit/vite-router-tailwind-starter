import React from "react";
import BottomBar from "../components/BottomBar";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/home.png";
import Profile from "../assets/profile.png";
import Fitur1 from "../assets/kepribadian.png";
import Fitur2 from "../assets/minat.png";
import Fitur3 from "../assets/bakat.png";
import Fitur4 from "../assets/tanyakan.png";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-between min-h-screen relative">
      <div className="flex-1 px-6 overflow-auto">
        <div className="flex justify-center mb-4">
          <img
            src={Logo}
            alt="Logo"
            className="object-contain"
            style={{ width: "150px", height: "100px" }}
          />
        </div>
        <div className="w-full bg-primary rounded-3xl py-4 mb-6">
          <div className="flex flex-row items-center justify-center">
            <img
              src={Profile}
              alt="Profile"
              className="object-contain"
              style={{ height: "100px" }}
            />
            <div className="ml-4">
              <h2 className="text-white text-xl font-bold">Hai! John Doe</h2>
              <p className="text-white text-lg font-poppins">Selamat Pagi</p>
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-left mb-4">Home</h2>
        <div className="flex flex-wrap -mx-2">
          <button
            onClick={() => navigate("/result")}
            className="w-1/2 px-2 mb-4"
          >
            <div className="h-40 rounded-lg flex flex-col items-start pl-2">
              <img
                src={Fitur1}
                alt="Kepribadian"
                className="object-contain"
                style={{ width: "100px", height: "100px" }}
              />
              <h3 className="font-semibold text-left">Pahami</h3>
              <h3 className="font-semibold text-left">Kepribadian</h3>
            </div>
          </button>

          <div className="w-1/2 px-2 mb-4">
            <div className="h-40 rounded-lg flex flex-col items-start pl-2">
              <img
                src={Fitur2}
                alt="Minat"
                className="object-contain"
                style={{ width: "100px", height: "100px" }}
              />
              <h3 className="font-semibold text-left">Kenali</h3>
              <h3 className="font-semibold text-left">Minat</h3>
            </div>
          </div>

          <div className="w-1/2 px-2 mb-4">
            <div className="h-40 rounded-lg flex flex-col items-start pl-2">
              <img
                src={Fitur3}
                alt="Bakat"
                className="object-contain"
                style={{ width: "100px", height: "100px" }}
              />
              <h3 className="font-semibold text-left">Temukan</h3>
              <h3 className="font-semibold text-left">Bakat</h3>
            </div>
          </div>

          <div className="w-1/2 px-2 mb-4">
            <div className="h-40 rounded-lg flex flex-col items-start pl-2">
              <img
                src={Fitur4}
                alt="Tanyakan"
                className="object-contain"
                style={{ width: "100px", height: "100px" }}
              />
              <h3 className="font-semibold text-left">Tanyakan</h3>
              <h3 className="font-semibold text-left">Sesuatu</h3>
            </div>
          </div>
        </div>
      </div>

      {/* BottomBar */}
      <div className="fixed bottom-0 left-0 w-full">
        <BottomBar />
      </div>
    </div>
  );
}

export default Home;
