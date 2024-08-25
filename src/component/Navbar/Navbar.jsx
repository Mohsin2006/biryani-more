import React from 'react';
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white ">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <img src={logo} alt="logo" />
            <ul  className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link ">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/media" className="nav-link">Media</Link>
              </li>
              <li className="nav-item k">
                <Link to="/contact" className="nav-link">Contact Us</Link>
                <div className='shows bg-info'>
                  <p>Contact</p>
                  <p>Location</p>
                </div>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">Menu</Link>
              </li>
            </ul>
            <button className='btn-warning btn color-white'>Order Online</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
