
/* 
  Ashim Adhakari = 104104333 
  */

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Audit from "./pages/Audit";
import Report from "./pages/Report";
import Signin from "./pages/Signin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/audit" element={<Audit/>} />
          <Route path="/Report" element={<Report/>} />
          <Route path="/signin" element={<Signin/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
