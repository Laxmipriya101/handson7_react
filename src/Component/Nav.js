import React from "react";

import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="head">
      <NavLink to="/" className="home">
        Home
      </NavLink>
      <NavLink to="/Contact" className="home">
        Contact
      </NavLink>
      <NavLink to="/Student" className="home">
        Student
      </NavLink>
    </div>
  );
}
export default Nav;
