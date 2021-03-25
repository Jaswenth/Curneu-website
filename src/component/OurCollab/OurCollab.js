import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap';
import "./OurCollab.css";
import logo from "./final_collab_new1.png"


function Nav() {
    return (
        <>
            <section class="bg-one about section" id="about" onclick="return true">
                <div class="container">
                    <div class="title text-center wow fadeIn" data-wow-duration="1500ms">
                        <h2 ><span class="color"> Our Collaborators</span> </h2>
                        <div class="bg-text">
                            <img src={logo} class="img-responsive" alt="Logo" width="100%" /> <br></br>
                        </div>
                        <div class="border"></div>
                    </div >
                </div>
            </section >
        </>
    )
}
export default Nav;