import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap';
import "./Contact.css";


function Nav() {
    return (
        <>
            <section id="contact-us" class="contact-us section-bg">
                <div class="container">
                    <div class="title text-center wow fadeIn" data-wow-duration="500ms">
                        <h2 ><span class="color" style={{ color: "#57CBCC" }}  >Get In Touch</span></h2>
                        <div class="border"></div>
                    </div>
                    <div class="row">

                        <div class="contact-info col-md-6 wow fadeInUp" data-wow-duration="500ms">
                            <h3 style={{ color: "#57CBCC" }}>Contact Details</h3><br></br>
                            <div class="contact-details">
                                <div class="con-info clearfix">
                                    <a><i class="	fas fa-map-marker-alt" ></i>&nbsp;&nbsp;
                <a > No1, 5th Floor, C Block, Phase 2,
                  IIT Madras Research Park, Chennai, Tamil Nadu - 600113</a></a>
                                </div>
                                <div class="con-info clearfix">
                                    <a> <i class="fas fa-phone" ></i>&nbsp;&nbsp;
                <a href="tel:9715707807"> Phone:
                  +91-9715707807</a></a>
                                </div>

                                <div class="con-info clearfix">
                                    <a><i class="fas fa-envelope"></i>&nbsp;&nbsp;
                <a > Email: <span class="__cf_email__"
                                            data-cfemail="21424e4f55404255614254534f44540f424e4c">[email&#160;protected]</span></a></a>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div class="contact-form col-md-6 wow fadeInUp" data-wow-duration="500ms" data-wow-delay="300ms">
                            <form id="contact-form" method="post" role="form">
                                <div class="form-group">
                                    <input type="text" placeholder="Your Name" class="form-control" name="name" id="name" required />
                                </div>
                                <div class="form-group">
                                    <input type="email" placeholder="Your Email" class="form-control" name="email" id="email" required />
                                </div>
                                <div class="form-group">
                                    <input type="text" placeholder="Subject" class="form-control" name="subject" id="subject" required />
                                </div>
                                <div class="form-group">
                                    <textarea rows="6" placeholder="Message" class="form-control" name="message" id="message"></textarea>
                                </div>
                                <div id="cf-submit">
                                    <input type="submit" id="contact-submit" class="btn btn-transparent" value="Submit" name="submit" />
                                </div>
                                <br></br>
                                <div id="cf-submit">
                                    <input type="reset" id="contact-submit" class="btn btn-transparent" value="Reset" name="reset" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section >
            <section class="contact-sec pad-top-lg pad-bottom-lg">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7775.407073201788!2d80.242253!3d12.990804!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x85f6f20593a8e65f!2sCurneu+MedTech+Innovations+Private+Limited!5e0!3m2!1sen!2sin!4v1565005950916!5m2!1sen!2sin"
                    width="100%" height="450" frameborder="0" allowfullscreen=""
                    data-scroll-index="7"></iframe>
            </section>
            <div class="social-icon">
                <ul class="list-inline">
                    <li><a href="https://www.facebook.com/curneu/" target="_blank" ><i
                        class="tf-ion-social-facebook"></i></a></li>
                    <li><a href="https://www.linkedin.com/company/curneu-medtech-innovation" target="_blank"
                    ><i class="tf-ion-social-linkedin"></i></a></li>
                    <li>
                        <a href="https://twitter.com/Curneu_MedTech" target="_blank" class="aak">
                            <i class="fab fa-twitter"></i></a>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Nav;
