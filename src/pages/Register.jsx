import React from "react";
import Logo from "../assets/login.png";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div className="px-5 w-full max-w-sm">
        <div className="flex items-center justify-center mb-9">
          <img
            src={Logo}
            alt="Login Logo"
            className="object-contain"
            style={{ width: "295px", height: "145px" }}
          />
        </div>

        <div className="flex flex-col gap-4">
          <label className="text-primary text-lg -mb-2 font-poppins">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="bg-transparent border-2 border-primary p-3 rounded-3xl text-black font-poppins"
          />

          <label className="text-primary text-lg -mb-2 font-poppins">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter email address"
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
            className="bg-transparent border-2 border-primary p-3 rounded-3xl text-black mb-6 font-poppins"
          />
        </div>

        <button
          onClick={() => navigate("/home")}
          className="bg-primary p-3 rounded-3xl text-white mb-3 w-full text-xl font-bold font-poppins"
        >
          Daftar
        </button>
        <button
          onClick={() => navigate("/home")}
          className="bg-transparent border-2 border-primary p-3 rounded-3xl text-gray-500 mb-16 w-full text-lg font-bold font-poppins"
        >
          Masuk dengan Google
        </button>

        <div className="flex items-center justify-center">
          <p className="text-gray-500 font-poppins">Sudah punya akun?</p>
          <button
            onClick={() => navigate("/login")}
            className="ml-1 text-primary font-bold"
          >
            Masuk
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
