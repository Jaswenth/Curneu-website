import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap';
import logo from './logo.png';
import "./Home.css";


function Nav() {
    return (
        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">

            <div class="carousel-inner" role="listbox" onclick="return true">
                <div class="item active">
                    <section class="hero-area">
                        <div class="block">
                            <div class="bg-text">
                                <img src={logo} class="img-responsive" alt="Logo" width="30%" /> <br></br>
                                <p class="textcheck" >We are a team of Clinicians, Scientists, Designers, MedTech Innovators and Engineers from Germany and India joined hands with a motive to create and innovate, affordable healthcare solutions for the unmet clinical needs.</p>
                            </div>

                            <section id="section07" class="demo">
                                <a href="#about" ><center></center><span ></span><span ></span><span ></span></a>
                            </section>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
export default Nav;




