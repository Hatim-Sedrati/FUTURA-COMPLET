"use client";

import HomePage from "./acc";
import { Routes, Route } from "react-router-dom";
import FuturaTeamGallery from "./component/About";

export default function App() {
  return (
 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aprp" element={<FuturaTeamGallery />} />
      </Routes>

  );
}
