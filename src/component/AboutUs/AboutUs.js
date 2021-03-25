import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap';
import "./AboutUs.css";


function Nav() {
    return (
        <>
            <section class="bg-one about section" id="about" onclick="return true">

                <div class="container">
                    <div class="title text-center wow fadeIn" data-wow-duration="1500ms">
                        <h2 ><span class="color">About Us</span> </h2>
                        <div class="border"></div>
                    </div >
                    <div class="row">
                        <div class="block">
                            <div class=" text-center">
                                <h3 class="ddd" >About Us</h3>
                                <p >Curneu MedTech Innovation is a health care technology firm
                                based at Heidelberg, Germany. We work on a motive of building an affordable and innovative healthcare
                                solutions that address the clinical needs thereby bringing better lives for the needy.
                            <br></br><br></br>As our motto says, "Care beyond reach", the goal of Curneu is to bring the world
                            community smaller such a way each one of the world's population receives better
                            healthcare. Curneu focuses on delivering quality affordable healthcare technology to developing
                            countries.<br></br><br></br>
                            A strong team of experienced clinicians, world class scientific team and medical
                            technologists, advisory members, research, and development team on an Indo-German initiative, work
                alongside with global collaborators at Curneu MedTech Innovations.</p>
                            </div>
                        </div>
                        <div class="col-md-6 text-center wow fadeInUp" data-wow-duration="500ms" data-wow-delay="250ms"
                            onclick="return true">
                            <div class="block">
                                <div class=" text-center">
                                    <h3 >Our Vision</h3>
                                    <p >We envision to address the complex clinical needs alongside to
                make healthcare technology reach everyone around the globe.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 text-center wow fadeInUp" data-wow-duration="500ms" data-wow-delay="500ms"
                            onclick="return true">
                            <div class="block kill-margin-bottom">
                                <div class=" text-center">
                                    <h3 >Our Mission</h3>
                                    <p >To outfit people with affordable as well as quality health care
                technology products.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

        </>
    )
}
export default Nav;