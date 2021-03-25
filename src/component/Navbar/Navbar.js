import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap';
import logo from './logo.png';
import "./Navbar.css";


function Nav() {
    return (
        <div className="bgcolor">
            <nav className="navbar navbar-light">
                <a className="navbar-brand" href="#">
                    <img src={logo} width="230" className="position d-inline-block align-top" alt="" />
                </a>
                <section className="header_navbar">
                    <a href className="navbar-item">Home</a>
                    <a href className="navbar-item ">About</a>
                    <a href className="navbar-item ">
                        <DropdownButton id="dropdown-basic-button" title="Products">
                            <Dropdown.Item href="#"><a>Acu4You</a></Dropdown.Item>
                            <Dropdown.Item href="#">Other Products</Dropdown.Item>
                        </DropdownButton>
                    </a>
                    <a href className="navbar-item ">Career</a>
                    <a href className="navbar-item ">Contact</a>
                </section>
            </nav>
        </div>
    )
}
export default Nav;