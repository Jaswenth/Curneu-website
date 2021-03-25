import React from 'react'
import Dropdown from 'react-bootstrap'; 
import logo from './logo.png';
import "./Navbar.css";


 function Nav() {
    return (
        <div className="bgcolor">
            <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
            <img src={logo} width="230" className="position d-inline-block align-top" alt="" />
            </a>
            <section className="header_navbar">
            <a href className="navbar-item">Home</a>
            <a href className="navbar-item ">About</a>
            <a href className="navbar-item ">Career</a>
            <a href className="navbar-item ">Contact</a>
            </section>
            </nav>
        </div>
    )
}
export default Nav ;