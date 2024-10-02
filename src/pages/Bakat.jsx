import React from "react";
import ArrowBack from "../components/Arrowback";
import gambar from "../assets/fiturbakat.png";
import popup from "../assets/popup.png";
import Mulai from "../components/Mulai";
import { useNavigate } from "react-router-dom";

function Bakat() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-fitur3 flex flex-col overflow-y-auto">
      <div className="py-5">
        <ArrowBack link="/home" />
        <h2 className="text-xl font-bold text-center text-white">Temukan</h2>
        <h2 className="text-xl text-center text-white">Bakat</h2>
      </div>
      <img
        src={gambar}
        alt="mbti"
        className="object-contain mx-auto"
        style={{ height: "280px" }}
      />
      <img
        src={popup}
        alt="Profile"
        className="object-contain mx-auto z-10"
        style={{ height: "125px" }}
      />
      <div className="w-9/12 bg-white kontol rounded-2xl mx-auto flex items-center justify-center p-2 -mt-2 ">
        <p className="text-lg text-center font-semibold">
          <span className="font-bold">Tes Bakat</span> adalah instrumen evaluasi
          yang dirancang untuk mengidentifikasi potensi dan keahlian unik
          seseorang.
        </p>
      </div>
      <Mulai link="/tesbakat" />
    </div>
  );
}

export default Bakat;
