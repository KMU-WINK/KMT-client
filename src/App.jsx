import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Logo from "./pages/Logo/Logo";
import AddStore from "./pages/AddStore/AddStore";
import Map from "./pages/Map/Map";
import NewStore from "./pages/NewStore/NewStore";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Logo />} />
        <Route path="/AddStore" element={<AddStore />} />
        <Route path="/Map" element={<Map />} />
        <Route path="/NewStore" element={<NewStore />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
