import React from "react";
import "../../Styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>Dashboard</div>
      <div className="hero-left">
        <div className="hero-search">
          <input type="text" placeholder="Search" />
          <button>
            <i className="fa fa-search"></i>
          </button>
        </div>
        <div className="icon">
          <div>
            <i className="fa fa-sticky-note" />
          </div>
          <div>
            <i className="fa fa-bell" />
          </div>
          <div>
            <i className="fa fa-user" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
