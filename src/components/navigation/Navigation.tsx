import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Payments from "../../pages/payments/Payments";

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Payments />} />
      </Routes>
    </BrowserRouter>
  );
}
