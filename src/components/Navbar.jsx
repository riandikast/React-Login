import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar({ NavProp }) {
  const location = useLocation();
  const [path, setPath] = useState(null);
  useEffect(() => {
    setPath(location.pathname);
  }, [location]);
  return (
    <>
      <nav className={NavProp}>
        <NavLink
          to={"/login"}
          className={
            path === "/login"
              ? "text-white border-b-2 border-white py-1 "
              : "text-white"
          }
        >
          Sign in
        </NavLink>
        <NavLink
          to={"/register"}
          className={
            path === "/register"
              ? "text-white border-b-2 border-white py-1 "
              : "text-white"
          }
        >
          Sign up
        </NavLink>
      </nav>
    </>
  );
}

export default Navbar;
