import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';
// import ReorderIcon from "@material-ui/icons/Reorder";
import { useState } from "react";

const Navbar = () => {
 
  const [showLinks, setShowLinks] = useState(false);
 
 function Click() {
   setShowLinks(!showLinks);
 }

  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={logo} />
        <div className="hiddenLinks">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={Click}>
           menu
           </button>
       
      </div>
    </div>
  );
};

export default Navbar;
