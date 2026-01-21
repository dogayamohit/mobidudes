import { useNavigate } from "react-router-dom";
import PageHeader from "../layout/PageHeader";
import Careerimg from "../assets/img/careerimg.webp"
import { Button } from "react-bootstrap";
import { useState } from "react";
import CareersTimeline from "../component/CareerTimeline";
import CareerForm from "../component/CareerForm";
let Careers = () => {
    let Navigate = useNavigate();
    const [experience, setExperience] = useState("");
    const [expYears, setExpYears] = useState("");
    const [expMonths, setExpMonths] = useState("");
    const [currentSalary, setCurrentSalary] = useState("");
    const [expectedSalary, setExpectedSalary] = useState("");
        const [selectedVacancyId, setSelectedVacancyId] = useState("");

    return (
        <>

            <PageHeader title="Join Our Team" currentPage="Careers" />
            {/* services main */}
            <section className="careers-intro-section">
                <div className="container">
                    <div className="row  justify-content-center ">
                        <div className="col-lg-6" data-aos="fade-right">

                            <h2 className="section-title-large">Our Values</h2>
                            <p className="section-title-pera ">
                                At our core, we believe that great technology is built by great people. We foster a culture of innovation, collaboration, and continuous learning, bringing together thinkers, creators, and problem-solvers who are passionate about shaping the digital future.
                            </p>
                            <p className="section-title-pera ">
                                Whether you are a software developer, UI/UX designer, data analyst, or project manager, we provide an environment where your skills are valued, your ideas are heard, and your growth is supported. Our team-driven approach empowers individuals to innovate, take ownership, and make a meaningful impact through cutting-edge technology solutions.
                            </p>
                            <p className="section-title-pera ">
                                By investing in talent and encouraging creativity, we build not only advanced digital products but also a strong, future-ready technology team committed to excellence.
                            </p>


                        </div>
                        <div className="col-lg-6" data-aos="fade-left">
                            <div className="careers-image-wrapper">
                                <img src="https://cloudwapp.com/public/assets/img/careers2.jpg" alt="careermainimg" />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* why */}
            <section className="open-positions-section">
                <div className="container">
                    <div className="row mb-5"><div className="col-12 text-center" data-aos="fade-up">
                        <h2 className="section-title-italic">Why Work With Us?</h2>
                    </div></div>

                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 portfolio-item" data-category="automation" data-aos="fade-up" data-aos-delay="200">
                            <a href="#" className="portfolio-card">
                                <div className="portfolio-image">
                                    <img src="https://cloudwapp.com/public/assets/img/why_project1.jpg" alt="whyworkimg1" />
                                    {/* <div className="portfolio-overlay">
                                        <span className="portfolio-icon"><i className="bi bi-arrow-up-right"></i></span>
                                    </div> */}
                                </div>
                                <div className="portfolio-content">
                                    {/* <span class="portfolio-category">Automation</span> */}
                                    <h3 className="portfolio-title">Innovative Projects</h3>
                                    <p className="portfolio-desc">Work on exciting, real-world solutions for global clients across industries like fintech</p>
                                </div>
                            </a>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item" data-category="automation" data-aos="fade-up" data-aos-delay="200">
                            <a href="#" className="portfolio-card">
                                <div className="portfolio-image">
                                    <img src="https://cloudwapp.com/public/assets/img/why_project2.jpg" alt="whyworkimg2" />
                                    {/* <div className="portfolio-overlay">
                                        <span className="portfolio-icon"><i className="bi bi-arrow-up-right"></i></span>
                                    </div> */}
                                </div>
                                <div className="portfolio-content">
                                    {/* <span class="portfolio-category">Automation</span> */}
                                    <h3 className="portfolio-title">Growth-Focused Culture</h3>
                                    <p className="portfolio-desc">We invest in your professional development through continuous learning, mentorship,</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item" data-category="automation" data-aos="fade-up" data-aos-delay="200">
                            <a href="#" className="portfolio-card">
                                <div className="portfolio-image">
                                    <img src="https://cloudwapp.com/public/assets/img/why_project3.jpg" alt="whyworkimg3" />
                                    {/* <div className="portfolio-overlay">
                                        <span className="portfolio-icon"><i className="bi bi-arrow-up-right"></i></span>
                                    </div> */}
                                </div>
                                <div className="portfolio-content">
                                    {/* <span class="portfolio-category">Automation</span> */}
                                    <h3 className="portfolio-title">Flexible Work Environment</h3>
                                    <p className="portfolio-desc">Embrace hybrid or remote working, flexible hours, and a results-driven culture that</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item" data-category="automation" data-aos="fade-up" data-aos-delay="200">
                            <a href="#" className="portfolio-card">
                                <div className="portfolio-image">
                                    <img src="https://cloudwapp.com/public/assets/img/why_project4.jpg" alt="whyworkimg4" />
                                    {/* <div className="portfolio-overlay">
                                        <span className="portfolio-icon"><i className="bi bi-arrow-up-right"></i></span>
                                    </div> */}
                                </div>
                                <div className="portfolio-content">
                                    {/* <span class="portfolio-category">Automation</span> */}
                                    <h3 className="portfolio-title">Collaborative Team</h3>
                                    <p className="portfolio-desc">Join a culture where ideas are valued, diversity is celebrated, and cross-functional.</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item" data-category="automation" data-aos="fade-up" data-aos-delay="200">
                            <a href="#" className="portfolio-card">
                                <div className="portfolio-image">
                                    <img src="https://cloudwapp.com/public/assets/img/why_project5.jpg" alt="whyworkimg5" />
                                    {/* <div className="portfolio-overlay">
                                        <span className="portfolio-icon"><i className="bi bi-arrow-up-right"></i></span>
                                    </div> */}
                                </div>
                                <div className="portfolio-content">
                                    {/* <span class="portfolio-category">Automation</span> */}
                                    <h3 className="portfolio-title">Competitive Compensation</h3>
                                    <p className="portfolio-desc">We offer attractive salary packages, bonuses, and benefits that reward your</p>
                                </div>
                            </a>
                        </div>

                    </div>
                </div>
            </section>


            {/* our value  section start */}
            <section className="team-section">
                <div className="container">
                    <div className="row mb-5"><div class="col-lg-8 mx-auto text-center" data-aos="fade-up">

                        <h2 className="section-title-large">Our Values</h2>
                    </div></div>

                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
                            <div className="team-card">
                                <div className="team-image">
                                    <div className="team-placeholder">
                                        <img src="https://cloudwapp.com/public/assets/img/value1.png" alt="valueimg1" />
                                    </div>

                                </div>
                                <div className="team-info"><h4 class="team-name">Innovation First</h4>
                                    <span className="team-role">We stay ahead by constantly learning and adapting to new technologies.</span></div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
                            <div className="team-card">
                                <div className="team-image">
                                    <div className="team-placeholder">
                                        <img src="https://cloudwapp.com/public/assets/img/value2.png" alt="valueimg2" />
                                    </div>

                                </div>
                                <div className="team-info"><h4 class="team-name">Customer-Centric</h4>
                                    <span className="team-role">Every decision is made with the client's success in mind.</span></div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
                            <div className="team-card">
                                <div className="team-image">
                                    <div className="team-placeholder">
                                        <img src="https://cloudwapp.com/public/assets/img/value3.png" alt="valueimg3" />
                                    </div>

                                </div>
                                <div className="team-info"><h4 class="team-name">Integrity & Transparency</h4>
                                    <span className="team-role">We believe in doing the right thing — always.</span></div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
                            <div className="team-card">
                                <div className="team-image">
                                    <div className="team-placeholder">
                                        <img src="https://cloudwapp.com/public/assets/img/value4.png" alt="valueimg4" />
                                    </div>

                                </div>
                                <div className="team-info"><h4 class="team-name">Team Over Ego</h4>
                                    <span className="team-role">We win as a team. Your voice matters here.</span></div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* job */}
            {/* <section className="service-details-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="process-timeline">
                                <div className="timeline-item">
                                    <div className="timeline-number">01</div>
                                    <div className="timeline-content">
                                        <h4 className="d-flex gap-2">Frontend Developer   <p> (2 open roles)</p></h4>
                                        <p>Ex. 0-2 Years</p>
                                    </div>
                                    <div className="timelinebutton" >
                                        <a href="#career-form">Apply</a>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-number">02</div>
                                    <div className="timeline-content">
                                        <h4 className="d-flex gap-2">Frontend Developer <p> (2 open roles)</p></h4>
                                        <p>Ex. 0-2 Years</p>
                                    </div>
                                    <div className="timelinebutton" >
                                        <a href="#career-form">Apply</a>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-number">03</div>
                                    <div className="timeline-content">
                                        <h4 className="d-flex gap-2">Flutter Developer  <p> (2 open roles)</p></h4>
                                        <p>Ex. 0 - 4 years</p>
                                    </div>
                                    <div className="timelinebutton" >
                                        <a href="#career-form">Apply</a>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-number">04</div>
                                    <div className="timeline-content">
                                        <h4 className="d-flex gap-2">Laravel Developer   <p> (5 open roles)</p></h4>
                                        <p>Ex. 0-2 Years</p>
                                    </div>
                                    <div className="timelinebutton" >
                                        <a href="#career-form">Apply</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}


            {/* <CareersTimeline /> */}
            <CareersTimeline onApply={setSelectedVacancyId} />


            {/* //  < !--Contact Section-- > */}
            <section className="contact-section" id="career-form">
                <div className="container">
                    <div className="row g-5">
                        {/* <!-- Contact Info --> */}
                        <div className="col-lg-5" data-aos="fade-right">
                            <div className="contact-info">
                                <div className="careerimg">
                                    <img src={Careerimg} />
                                </div>
                                {/* <span className="section-subtitle">GET IN TOUCH</span> */}
                                <h2 className="section-title-large">Your Journey Starts Here</h2>
                                <p className="contact-intro">we don't just offer jobs — we offer careers. Join us, and let's shape the future of technology together</p>
                                <div className="contact-social">
                                    <h5>Follow Us</h5>
                                    <ul className="social-links">
                                        <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
                                        <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                                        <li><a href="#"><i className="bi bi-twitter-x"></i></a></li>
                                        <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Career Form --> */}                        
                        {/* <CareerForm /> */}
                        <CareerForm selectedVacancyId={selectedVacancyId} />



                    </div>
                </div>
            </section>


        </>
    )
}
export default Careers;