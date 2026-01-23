
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import lighttheemlogo from "../assets/img/logo-lighttheem.png"
import darktheemlogo from "../assets/img/logodarktheem.svg"
let Footer = () => {
    const isLight = document.documentElement.classList.contains("light-theme");
    let Navigate = useNavigate();
    return (
        <>
            {/* <!-- ========== FOOTER ========== --> */}
            <footer className="footer" id="contact">
                <div className="container">
                    <div className="row">
                        {/* <!-- Newsletter --> */}

                        <div className="col-lg-3 mb-5 mb-lg-0 footer-top ">
                            <div className="">
                                <a className="footer-logo" onClick={() => Navigate("/")}>
                                    {/* <img src={isLight ? lighttheemlogo : darktheemlogo} alt="aiNexa" className="footer-logo-img" /> */}
                                    <img src={darktheemlogo} alt="Mobidudes" className="footer-logo-img" />
                                </a>
                            </div>
                            {/* <div className="footer-newsletter" data-aos="fade-right">
                                <h5 className="footer-title">Subscribe to our newsletter to stay in touch with the latest</h5>
                                <form className="newsletter-form">
                                    <div className="input-group">
                                        <input type="email" className="form-control" placeholder="Email" required />
                                        <button type="submit" className="btn btn-newsletter">Send</button>
                                    </div>
                                </form>
                            </div> */}
                        </div>

                        {/* <!-- Footer Links & Contact --> */}
                        <div className="col-lg-9 footer-top">
                            <div className="row">
                                {/* <!-- Services Links --> */}
                                <div className="col-md-3 mb-4 mb-md-0" data-aos="fade-up" data-aos-delay="100">
                                    <h6 className="footer-heading">Our Services</h6>
                                    <ul className="footer-links">
                                        <li><a onClick={() => Navigate("/services")}>Services</a></li>
                                        <li><a onClick={() => Navigate("/aboutpage")}>About</a></li>
                                        <li><a onClick={() => Navigate("/careers")}>Careers</a></li>
                                        <li><a onClick={() => Navigate("/blog")}>Blog</a></li>
                                        <li><a onClick={() => Navigate("/contact")}>Contact</a></li>
                                    </ul>
                                </div>

                                {/* <!-- Contact Info --> */}
                                <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                                    <h6 className="footer-heading">Our Contacts</h6>
                                    <ul className="footer-contact">
                                        <li>
                                            <i className="bi bi-telephone"></i>
                                            <a href="tel:+91-78986 57881">+91-78986 57881</a>
                                        </li>
                                        <li>
                                            <i className="bi bi-envelope"></i>
                                            <a href="mailto:hr@cloudwapp.com">support hr@cloudwapp.com</a>
                                        </li>
                                        <li>
                                            <i className="bi bi-geo-alt"></i>
                                            <span>Onam Plaza, 210 - 214, AB Rd, Near Industry House, Old Palasia, Indore,
                                                Madhya Pradesh 452001</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-md-3 mb-4 mb-md-0" data-aos="fade-up" data-aos-delay="100">
                                    <h6 className="footer-heading">Social Links</h6>
                                    <div className="">
                                        <ul className="social-links">
                                            <li><a href="https://www.linkedin.com/company/cloudwapp" aria-label="LinkedIn" target="_blank">
                                                <i className="bi bi-linkedin"></i></a>
                                            </li>
                                            <li>
                                                <a href="https://www.instagram.com/cloudwapp/" aria-label="Instagram" target="_blank">
                                                    <i className="bi bi-instagram"></i></a>
                                            </li>
                                            <li>
                                                <a href="https://www.facebook.com/Cloudwapp/" target="_blank" aria-label="Facebook">
                                                    <i className="bi bi-facebook"></i>
                                                </a></li>

                                        </ul>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    {/* <!-- Footer Bottom --> */}
                    <div className="footer-bottom">
                        <div className="row align-items-center">
                            {/* <div className="col-lg-4 mb-4 mb-lg-0">
                                <a className="footer-logo" onClick={() => Navigate("/")}>
                                    <img src={isLight ? lighttheemlogo : darktheemlogo} alt="aiNexa" className="footer-logo-img" />
                                    <img src={darktheemlogo} alt="Mobidudes" className="footer-logo-img" />
                                </a>
                            </div> */}
                            <div className="col-lg-12 mb-4 mb-lg-0 text-center">
                                <p className="copyright">©  2026 – All Rights Reserved</p>
                            </div>
                            {/* <div className="col-lg-4">
                                <ul className="social-links">
                                    <li><a href="https://www.linkedin.com/company/cloudwapp" aria-label="LinkedIn" target="_blank">
                                        <i className="bi bi-linkedin"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/cloudwapp/" aria-label="Instagram" target="_blank">
                                            <i className="bi bi-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/Cloudwapp/" target="_blank" aria-label="Facebook">
                                            <i className="bi bi-facebook"></i>
                                        </a></li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
            </footer>



        </>
    )
}
export default Footer;