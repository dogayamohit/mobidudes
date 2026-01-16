import { useNavigate } from "react-router-dom";
import PageHeader from "../layout/PageHeader";
import ContactForm from "../component/Contact/ContactForm";
let Contactpage = () => {
    let Navigate = useNavigate()
    return (
        <>
            {/* <!-- Page Header --> */}

            <PageHeader title="Contact Us" currentPage="Contact" />
            {/* <!-- Contact Section --> */}
            <section class="contact-section">
                <div class="container">
                    <div class="row g-5">
                        {/* <!-- Contact Info --> */}
                        <div class="col-lg-5" data-aos="fade-right">
                            <div class="contact-info">
                                <span class="section-subtitle">Ready to take your business to the next level?</span>
                                <h2 class="section-title-large">Let's Build Something Great Together</h2>
                                <p class="contact-intro">Contact us today to discuss your project. Whether you need a
                                    new mobile app, a stunning website, or an effective digital marketing
                                    campaign— we’re here to help.</p>

                                <div class="contact-details">
                                    <div class="contact-item">
                                        <div class="contact-icon">
                                            <i class="bi bi-geo-alt"></i>
                                        </div>
                                        <div class="contact-text">
                                            <h5>Visit Us</h5>
                                            <p>Onam Plaza, 210 - 214, AB Rd, Near Industry House, Old Palasia, Indore,Madhya Pradesh 452001</p>
                                        </div>
                                    </div>

                                    <div class="contact-item">
                                        <div class="contact-icon">
                                            <i class="bi bi-envelope"></i>
                                        </div>
                                        <div class="contact-text">
                                            <h5>Email Us</h5>
                                            <p><a href="mailto:hr@cloudwapp.com">support hr@cloudwapp.com</a></p>
                                        </div>
                                    </div>

                                    <div class="contact-item">
                                        <div class="contact-icon">
                                            <i class="bi bi-telephone"></i>
                                        </div>
                                        <div class="contact-text">
                                            <h5>Call Us</h5>
                                            <p><a href="tel:+91-78986 57881">+91-78986 57881</a></p>
                                        </div>
                                    </div>
                                </div>

                                <div class="contact-social">
                                    <h5>Follow Us</h5>
                                    <ul class="social-links">
                                        <li><a href="https://www.linkedin.com/company/cloudwapp" target="_blank"><i class="bi bi-linkedin"></i></a></li>
                                        <li><a href="https://www.instagram.com/cloudwapp/" target="_blank"><i class="bi bi-instagram"></i></a></li>

                                        <li><a href="https://www.facebook.com/Cloudwapp/" target="_blank"><i class="bi bi-facebook"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Contact Form --> */}
                        {/* <div class="col-lg-7" data-aos="fade-left">
                            <div class="contact-form-wrapper">
                                <h3 class="form-title">(Note- This is only Business Related Form)</h3>
                                <form class="contact-form">
                                    <div class="row g-4">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="firstName">Your Name</label>
                                                <input type="text" class="form-control" id="Name" placeholder="Your Name" required />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="email">Your Email</label>
                                                <input type="email" class="form-control" id="email" placeholder="email@example.com" required />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="lastName">Your Company</label>
                                                <input type="text" class="form-control" id="lastName" placeholder="Your Company" required />
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="phone">Phone Number</label>
                                                <input type="tel" class="form-control" id="phone" placeholder="+1 234 567 890" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="lastName">Select File</label>
                                                <input type="file" class="form-control" id="lastName" placeholder="Choose file | No file chosen" required />
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12">
                                            <div class="form-group">
                                                <label for="subject">Services *</label>
                                                <select class="form-control" id="suervices">
                                                    <option selected="" disabled="" value="">Select</option>
                                                    <option value="Website Development">
                                                        Website Development
                                                    </option>
                                                    <option value="App Development">
                                                        Application Development
                                                    </option>
                                                    <option value="UI/UX Design">
                                                        UI/UX Design
                                                    </option>
                                                    <option value="SEO optimization">
                                                        Digital Marketing / SEO
                                                    </option>
                                                    <option value="Software Testing">
                                                        Software Testing (Manual)
                                                    </option>
                                                </select>

                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label for="message">Project brief *
                                                </label>
                                                <textarea class="form-control" id="message" placeholder="Share more about your concept" required></textarea>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label for="lastName">Solve: 9 + 2 = ?</label>
                                                <input type="number" class="form-control" id="lastName" placeholder="Enter sum" required />
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <button type="submit" class="btn btn-cta-primary btn-lg w-100">Send Message</button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div> */}

                        <ContactForm />
                    </div>
                </div>
            </section>


        </>
    )
}
export default Contactpage;