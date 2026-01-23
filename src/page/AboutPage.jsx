import WorkGallery from "../component/workgallery.jsx";
import { useEffect, useState } from "react";
import { getAboutVideoById } from "../api/about";
import { useNavigate } from "react-router-dom";
import PageHeader from "../layout/PageHeader.jsx";
let Aboutpage = () => {
    let Navigate = useNavigate();

    const [videoUrl, setVideoUrl] = useState("");


    useEffect(() => {
        const fetchVideo = async () => {
            try {
                const data = await getAboutVideoById();
                // assuming API returns { video: "url" }
                setVideoUrl(data.video);
            } catch (error) {
                console.error("Failed to load about video", error);
            }
        };

        fetchVideo();
    }, []);

    const DEFAULT_VIDEO =
        "https://cloudwapp.com/public/uploads/about/video/1755697237_Cloudwapp%20promotional%20video%20(1).mp4";

    return (
        <>
            {/* <!-- ========== PAGE HEADER ========== --> */}
            <PageHeader title="About Us" currentPage="About" />
            {/* services main */}
            <section className="careers-intro-section">
                <div className="container">
                    <div className="row  justify-content-center ">
                        <div className="col-lg-6" data-aos="fade-right">

                            <h2 className="section-title-large">Discover Who We Truly Are</h2>
                            <p className="section-title-pera ">
                                Learn more about our journey, core values, and technical expertise that shape who we are as a digital solutions company. Driven by innovation and a commitment to excellence, we deliver impactful and scalable solutions designed to help businesses succeed in the digital landscape.

                            </p>
                            <p className="section-title-pera ">
                                Our focus on quality, creativity, and results enables us to build long-term partnerships and create meaningful digital experiences that drive growth and success.
                            </p>

                        </div>
                        <div className="col-lg-6" data-aos="fade-left">
                            <div className="careers-image-wrapper">
                                <img src="https://cloudwapp.com/public/uploads/about/1754549420_imageabout1.png" alt="aboutimg" />
                            </div>
                            <section className="portfolio-stats-section">
                                <div className="container">
                                    <div className="row g-4">
                                        <div className="col-lg-4 col-md-6" data-aos="fade-up">
                                            <div className="portfolio-stat-card">
                                                <span className="stat-number counter" data-target="500">10</span>+
                                                <span className="stat-label">Proud clients</span>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                                            <div className="portfolio-stat-card">
                                                <span className="stat-number counter" data-target="98">30</span>+
                                                <span className="stat-label">Completed initiatives</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                                            <div className="portfolio-stat-card">
                                                <span className="stat-number counter" data-target="25">20</span>+
                                                <span className="stat-label">Trophies</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </section>


            {/* <!-- ========== MISSION & VISION ========== --> */}
            <section className="mission-section">
                <div className="container">
                    <div className="row g-4">
                        <div
                            className="col-lg-12"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <div className="mission-card">
                                <video
                                    src={
                                        videoUrl
                                            ? `${import.meta.env.VITE_API_BASE_URL_FOR_IMAGES}/${videoUrl}`
                                            : DEFAULT_VIDEO
                                    }
                                    controls
                                    className="h-auto w-100"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* 2 */}
            <section className="careers-intro-section">
                <div className="container">
                    <div className="row align-items-center justify-content-center ">
                        <div className="col-lg-6" data-aos="fade-right">

                            <h2 className="section-title-large">Turning Ideas Into Powerful Digital Experiences

                            </h2>
                            <p className="section-title-pera ">
                                Welcome to Cloudwapp Technologies, a full-service digital agency where innovation meets technology. We specialize in mobile app development, website design and development, and custom digital solutions that help businesses grow and succeed in today’s competitive digital landscape.

                            </p>
                            <p className="section-title-pera ">
                                From startups to established enterprises, we create visually appealing, high-performing, and scalable digital products tailored to your business goals. Our expert team combines creativity, strategy, and cutting-edge technology to deliver solutions that enhance user experience, strengthen online presence, and drive measurable results.
                            </p>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left">
                            <div className="careers-image-wrapper">
                                <img src="https://cloudwapp.com/public/assets/img/about.avif" alt="about2img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* industries-page-section */}
            <section className="industries-page-section">
                <div className="container">
                    <div className="row mb-5"><div className="col-lg-8 mx-auto text-center" data-aos="fade-up">

                        <h2 className="section-title-large">Let’s Build Something Great Together</h2>
                        <p className="section-desc">Whether you have a fresh idea or need help refining an existing product, we’re here to bring your vision to life. Let’s collaborate to create digital solutions that truly make an impact.</p>
                    </div></div>

                    <div className="row g-5">

                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                            <div className="industry-detail-card">

                                <div className="industry-detail-content">
                                    <h3>What We Do</h3>
                                    <p>We offer end-to-end design and development services:</p>
                                    <ul className="industry-features">
                                        <li><i className="bi bi-check2"> </i>Custom Mobile App Development</li>
                                        <li><i className="bi bi-check2"></i> Website Design & Development</li>
                                        <li> <i className="bi bi-check2"></i> UI/UX Design</li>
                                        <li><i className="bi bi-check2"></i> Backend Development</li>
                                        <li> <i className="bi bi-check2"></i> Digital Marketing / SEO</li>
                                        <li><i className="bi bi-check2"></i>Support & Maintenance</li>
                                    </ul>

                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                            <div className="industry-detail-card">

                                <div className="industry-detail-content">
                                    <h3>Why Choose Us?</h3>
                                    <p>To empower businesses with innovative, user-centric digital solutions that inspire growth and improve the way people connect, work, and live.</p>
                                    <ul className="industry-features">
                                        <li><i className="bi bi-check2"> </i>Experienced Team</li>
                                        <li><i className="bi bi-check2"></i> Client-First Approach</li>
                                        <li> <i className="bi bi-check2"></i> Quality & Performance</li>
                                        <li><i className="bi bi-check2"></i> Transparent Process</li>
                                        <li> <i className="bi bi-check2"></i>On-Time Delivery</li>
                                    </ul>

                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
                            <div className="industry-detail-card">

                                <div className="industry-detail-content">
                                    <h3>Who We Work With</h3>
                                    <p>We proudly serve clients across a variety of industries including:</p>
                                    <ul className="industry-features">
                                        <li><i className="bi bi-check2"> </i>Startups & Entrepreneurs</li>
                                        <li><i className="bi bi-check2"></i>Healthcare & Wellness</li>
                                        <li> <i className="bi bi-check2"></i>E-commerce & Retail</li>
                                        <li><i className="bi bi-check2"></i> Education & E-learning</li>
                                        <li> <i className="bi bi-check2"></i> Travel & Hospitality</li>
                                        <li><i className="bi bi-check2"></i>Real Estate</li>
                                        <li><i className="bi bi-check2"></i>Real Estate</li>
                                    </ul>

                                </div>
                            </div>
                        </div>






                    </div>
                </div>
            </section>

        </>
    )
}
export default Aboutpage;