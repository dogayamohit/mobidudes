import { useNavigate } from "react-router-dom";
import PageHeader from "../layout/PageHeader";
import ServicesCard from "../component/Service/ServicesCard";
let Servicespage = () => {
    let Navigate = useNavigate()
    return (
        <>
            {/* <!-- Page Header --> */}

            <PageHeader title="Our Services" currentPage="Services" />
            {/* services main */}
            <section className="careers-intro-section">
                <div className="container">
                    <div className="row align-items-center justify-content-center ">
                        <div className="col-lg-6" data-aos="fade-right">

                            <h2 className="section-title-large">Innovative Creative Solutions That Drive Growth and Engagement
                            </h2>
                            <p className="section-title-pera ">
                                At Mobidudes, we specialize in delivering creative solutions that blend innovation, strategy, and design to create meaningful experiences for your audience. Our approach focuses on understanding your brand, your goals, and your customers to develop solutions that not only look impressive but also deliver measurable results.

                            </p>
                            <p className="section-title-pera ">
                                From concept development to execution, we provide end-to-end creative services including digital campaigns, branding, content creation, and visual storytelling. Each project is tailored to engage your audience, increase brand visibility, and drive business growth. By combining creativity with data-driven insights, we ensure that every solution is both impactful and strategic.


                            </p>


                        </div>
                        <div className="col-lg-6" data-aos="fade-left">
                            <div className="careers-image-wrapper">
                                <img src="https://cloudwapp.com/public/assets/img/serviceImg.jpg" alt="servicemainimg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Services Grid --> */}
            {/* <section className="services-page-section">
                <div className="container">
                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                            <div className="service-page-card">
                                <div className="service-page-icon">
                                    <img src="https://cloudwapp.com/public/uploads/service/1756992257_mobile app.gif" alt="mobileapp" />
                                </div>
                                <h3 className="service-page-title">Mobile App Design And Development</h3>
                                <p className="service-page-desc text-line-clamp-4 "> Mobile app design and development - we specialize in creating mobile experiences that users love and businesses rely on. Whether you're launching a new startup or digitizing your enterprise, our team of expert designers and developers turns your vision into a polished, high-performing mobile app.</p>
                                <a onClick={() => Navigate("/servicesdetailpage")} className="service-page-link">Learn More <i className="bi bi-arrow-right"></i></a>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="service-page-card">
                                <div className="service-page-icon">
                                    <img src="https://cloudwapp.com/public/uploads/service/1756992271_Website.gif" alt="Website Design" />
                                </div>
                                <h3 className="service-page-title">Website Design And Development</h3>
                                <p className="service-page-desc text-line-clamp-4 "> we design and develop modern, responsive, and conversion-focused websites tailored to your business goals. Whether you're a startup, small business, or enterprise, we create digital experiences that captivate users and deliver measurable results.</p>
                                <a href="#" className="service-page-link">Learn More <i className="bi bi-arrow-right"></i></a>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                            <div className="service-page-card">
                                <div className="service-page-icon">
                                    <img src="https://cloudwapp.com/public/uploads/service/1756992280_seo.gif" alt="Digital Marketing / SEO" />
                                </div>
                                <h3 className="service-page-title">Digital Marketing / SEO</h3>
                                <p className="service-page-desc text-line-clamp-4 " > we help businesses of all sizes grow online through smart, data-driven digital marketing. From increasing your search engine visibility to building a powerful social media presence, our team is dedicated to putting your brand in front of the right audience—at the right time.</p>
                                <a href="#" className="service-page-link">Learn More <i className="bi bi-arrow-right"></i></a>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                            <div className="service-page-card">
                                <div className="service-page-icon">
                                    <img src="https://cloudwapp.com/public/uploads/service/1756992334_design.gif" alt="UI/UX Design" />
                                </div>
                                <h3 className="service-page-title"> UI/UX Design</h3>
                                <p className="service-page-desc text-line-clamp-4 ">we specialize in creating intuitive, user-centered designs that blend creativity with functionality. Our UI/UX design solutions are crafted to enhance user satisfaction, boost engagement, and help your digital products stand out in a crowded marketplace.</p>
                                <a href="#" className="service-page-link">Learn More <i className="bi bi-arrow-right"></i></a>

                            </div>
                        </div>


                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                            <div className="service-page-card">
                                <div className="service-page-icon">
                                    <img src="https://cloudwapp.com/public/uploads/service/1756992301_testing.gif" alt="Software Testing (Manual)" />

                                </div>
                                <h3 className="service-page-title">Software Testing (Manual)</h3>
                                <p className="service-page-desc text-line-clamp-4 ">
                                    we offer meticulous manual software testing services to help you deliver bug-free, high-performing, and user-friendly applications. Our experienced QA team rigorously tests every aspect of your software to identify issues early and ensure it meets your business and user expectations.
                                </p>
                                <a href="#" className="service-page-link">Learn More <i className="bi bi-arrow-right"></i></a>

                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <ServicesCard />

            {/* <!-- Process Section --> */}
            <section className="process-section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12 text-center" data-aos="fade-up">

                            <h2 className="section-title-italic">Our workflow
                                strategy</h2>
                            <span className="section-subtitle">Our workflow strategy ensures a seamless process from concept to execution. We focus on efficiency, creativity, and precision to deliver outstanding results for every project.</span>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
                            <div className="process-card">
                                <div className="process-number">01</div>
                                <h4 className="process-title">Ideation phase</h4>
                                <p className="process-desc text-line-clamp-4 ">We begin by brainstorming and refining creative ideas that align with your brand vision. This phase sets the foundation for a strategic and impactful execution.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="process-card">
                                <div className="process-number">02</div>
                                <h4 className="process-title">Planning & strategy</h4>
                                <p className="process-desc">A well-defined roadmap ensures smooth project execution. We focus on research, goal-setting, and structuring a clear strategy tailored to your objectives.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
                            <div className="process-card">
                                <div className="process-number">03</div>
                                <h4 className="process-title">Execution & development</h4>
                                <p className="process-desc">Bringing ideas to life with precision and creativity. Our team works on design, development, and content creation while ensuring quality and consistency.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
                            <div className="process-card">
                                <div className="process-number">04</div>
                                <h4 className="process-title">Review & optimization</h4>
                                <p className="process-desc">We analyze results, gather feedback, and make refinements to enhance performance. Continuous improvement ensures long-term success and effectiveness.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
export default Servicespage;