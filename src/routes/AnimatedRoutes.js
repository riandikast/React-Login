
import React from "react";
import { Routes, Route, useLocation} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Login from "../pages/Login";
import Register from "../pages/Register";

function AnimatedRoutes() {
  let location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/React-Login/" element={<Login />} />
        <Route  path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
