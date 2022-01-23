import React from "react";
import "./navBar.css";

const NavBar = () => {
  const handleLogOut = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <>
      <div className="nav-container">
        <p className="logout-btn " onClick={handleLogOut}>
          Log out
        </p>
      </div>
    </>
  );
};

export default NavBar;
