import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/login.png";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-5">
      <div className="w-full max-w-sm">
        <div className="flex items-center justify-center mb-11">
          <img
            src={Logo}
            alt="Login Logo"
            className="object-contain"
            style={{ width: "295px", height: "145px" }}
          />
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-primary text-lg -mb-2 font-poppins">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter email address"
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
          Masuk
        </button>
        <button
          onClick={() => navigate("/home")}
          className="bg-transparent border-2 border-primary p-3 rounded-3xl text-gray-500 mb-16 w-full text-lg font-bold font-poppins"
        >
          Masuk dengan Google
        </button>
        <div className="flex items-center justify-center">
          <p className="text-gray-500 font-poppins">Belum punya akun?</p>
          <button
            onClick={() => navigate("/register")}
            className="ml-1 text-primary font-bold"
          >
            Daftar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
