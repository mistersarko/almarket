import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SuccessPage from "../pages/SuccessPage";
import CancelPage from "../pages/CancelPage";
import NotFoundPage from "../pages/NotFoundPage";

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/cancel" element={<CancelPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default RoutesIndex;
