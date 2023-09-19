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

// import React, { useState } from "react";
// import { useTranslation } from "react-i18next";

// // Contains the value and text for the options
// const languages = [
//   { value: "", text: "Options" },
//   { value: "en", text: "English" },
//   { value: "hi", text: "Hindi" },
//   { value: "bn", text: "Bengali" },
// ];

// function App() {
//   // It is a hook imported from 'react-i18next'
//   const { t } = useTranslation();

//   const [lang, setLang] = useState("en");

//   // This function put query that helps to
//   // change the language
//   const handleChange = (e) => {
//     e.preventDefault();
//     setLang(e.target.value);
//     let loc = "http://localhost:3000/";
//     window.location.replace(
//       loc + "?lng=" + e.target.value
//     );
//   };

//   return (
//     <div className="App">
//       // we are showing the value by using the //
//       keys we have created in the website
//       <h1>{t("welcome")}</h1>
//       <label>{t("choose")}</label>
//       <select
//         value={lang}
//         onChange={handleChange}
//       >
//         {languages.map((item) => {
//           return (
//             <option
//               key={item.value}
//               value={item.value}
//             >
//               {item.text}
//             </option>
//           );
//         })}
//       </select>
//     </div>
//   );
// }

// export default App;
