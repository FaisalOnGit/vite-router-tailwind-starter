import React from "react";
import Gambar from "../assets/INTJ.png";
import ArrowBack from "../components/Arrowback";

function Result() {
  return (
    <div className="h-full bg-slate-600 p-8">
      <ArrowBack link="/home" />
      <h1 className="text-[24.95px] text-center text-white font-bold">Hasil</h1>
      <h2 className="text-4xl text-center text-white mt-5 font-bold">
        The Guardian
      </h2>
      <div className="flex justify-center p-12">
        <img
          src={Gambar}
          alt="INTJ"
          style={{ width: "200px", height: "200px" }}
        />
      </div>
      <p className="text-xl text-center text-white">
        " Tipe kepribadian kamu adalah "
      </p>
      <h3 className="text-3xl text-center text-white font-bold mt-7 mb-12 ">
        INTJ
      </h3>
      <p className="text-xl text-center text-white mt-10">
        Geser untuk informasi lebih lanjut
      </p>
    </div>
  );
}

export default Result;
