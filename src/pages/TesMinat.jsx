import React from "react";
import ArrowBack from "../components/Arrowback";
import { useNavigate } from "react-router-dom";
import Selanjutnya from "../components/Selanjutnya";

function TesMinat() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#FFA217] flex flex-col pb-20">
      <div className="py-5 sticky top-0 bg-[#FFA217] z-10">
        <ArrowBack link="/minat" />
        <h2 className="text-xl font-bold text-center text-white">Kenali</h2>
        <h2 className="text-xl text-center text-white">Minat</h2>
      </div>
      <div className="bg-[#FFB84D] flex-grow flex justify-center pt-2 overflow-y-auto">
        <div className="w-4/5 max-w-md flex flex-col items-center">
          <div className="bg-white border border-gray-600 py-2 w-4/12 rounded-full mb-6">
            <p className="font-bold text-sm text-center">Soal (4/48)</p>
          </div>
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="bg-white border border-gray-600 py-6 px-3 w-full rounded-2xl mb-3"
            >
              <p className="font-bold text-sm text-start mb-5">
                Saya lebih suka berfokus pada detail daripada pandangan besar.
              </p>
              <div className="bg-gray-300 border pl-3.5 py-3.5 border-gray-600 rounded-full mb-3">
                <p className="font-light text-sm text-start">
                  Sangat Tidak Setuju
                </p>
              </div>
              <div className="bg-gray-300 border pl-3.5 py-3.5 border-gray-600 rounded-full mb-3">
                <p className="font-light text-sm text-start">Tidak Setuju</p>
              </div>
              <div className="bg-gray-300 border pl-3.5 py-3.5 border-gray-600 rounded-full mb-3">
                <p className="font-light text-sm text-start">Netral</p>
              </div>
              <div className="bg-gray-300 border pl-3.5 py-3.5 border-gray-600 rounded-full mb-3">
                <p className="font-light text-sm text-start">Setuju</p>
              </div>
              <div className="bg-gray-300 border pl-3.5 py-3.5 border-gray-600 rounded-full">
                <p className="font-light text-sm text-start">Sangat Setuju</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Next Button */}
      <Selanjutnya link="/result" />
    </div>
  );
}

export default TesMinat;
