import React from "react";
import { Routes, Route } from "react-router-dom";

// routes
import MainRoute from "../routes/MainRoute";
import MyWorkRoute from "../routes/MyWorkRoutes";
import SkillsRoute from "../routes/SkillsRoute";
import NotFound from "../routes/NotFound";
import ContactRoute from "../routes/ContactRoute";

const RoutesHandler = () => {
  
  return (
    <Routes>
      <Route path="/" element={<MainRoute />} />
      <Route path="/work" element={<MyWorkRoute />} />
      <Route path="/skills" element={<SkillsRoute />} />
      <Route path="/contact" element={<ContactRoute />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesHandler;
