import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Splash from "./pages/Splash";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Mbti from "./pages/Mbti";
import TesMbti from "./pages/TesMbti";
import Minat from "./pages/Minat";
import TesMinat from "./pages/TesMinat";
import Bakat from "./pages/Bakat";
import TesBakat from "./pages/TesBakat";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit" element={<EditProfile />} />
        <Route path="/mbti" element={<Mbti />} />
        <Route path="/minat" element={<Minat />} />
        <Route path="/bakat" element={<Bakat />} />
        <Route path="/tesmbti" element={<TesMbti />} />
        <Route path="/tesminat" element={<TesMinat />} />
        <Route path="/tesbakat" element={<TesBakat />} />
        <Route path="/result" element={<Result />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
