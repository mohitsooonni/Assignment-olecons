import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Signup from "./Pages/SignUp/Signup";
import Mentors from "./Pages/Mentors/Mentors";
import Testimonial from "./Pages/Testimonials/Testimonial";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/signup"
        element={<Signup />}
      />
      <Route
        path="/mentors"
        element={<Mentors />}
      />
      <Route
        path="/testimonial"
        element={<Testimonial />}
      />
    </Routes>
  );
}

export default App;

