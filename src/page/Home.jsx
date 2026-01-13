import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { useRef } from "react";
import aiicon3 from "../assets/img/ai-icon-1.png"
import casestudy1 from "../assets/img/case-study-1.jpg"
import casestudy2 from "../assets/img/case-study-2.jpg"
import casestudy3 from "../assets/img/case-study-3.jpg"
import casestudy4 from "../assets/img/case-study-4.jpg"
import service01 from "../assets/img/service-01.png"
import uiux from "../assets/img/uiux.png"
import mobileapp from "../assets/img/mobileapp.png"
import webdev from "../assets/img/webdev.png"
import testing from "../assets/img/testing.png"
import marketingapp from "../assets/img/marketing-app.png"
import bannerimg from "../assets/img/bannerimg.png"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Accordion from 'react-bootstrap/Accordion';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import WorkGallery from "../component/workgallery";
import { useNavigate } from "react-router-dom";

let Homepage = () => {
    let Navigate = useNavigate();
    return (
        <>


            {/* banner start */}
            <section className="hero-section" id="hero">
                <div className="hero-bg-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* <!-- Hero Headline --> */}
                            <div className="hero-content" data-aos="fade-up">
                                <h1 className="hero-title">
                                    <span className="hero-title-line">Design  <span className="hero-title-accent"> Deploy</span> Develop</span>

                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className="row hero-bottom-row align-items-end mt-5">
                        {/* <!-- Stats Chart --> */}
                        <div className="col-lg-4" data-aos="fade-right" data-aos-delay="200">
                            <div className="hero-chart">
                                <div className="chart-bars">
                                    <div className="chart-bar" style={{ "--bar-height": " 45%" }}>
                                        <span className="bar-label">JUN</span>
                                    </div>
                                    <div className="chart-bar" style={{ "--bar-height": "65%" }}>
                                        <span className="bar-label">JUL</span>
                                    </div>
                                    <div className="chart-bar" style={{ "--bar-height": "85%" }}>
                                        <span className="bar-label">AUG</span>
                                    </div>
                                    <div className="chart-bar active" style={{ "--bar-height": "100%" }}>
                                        <span className="bar-label">SEP</span>
                                    </div>
                                </div>
                                <div className="chart-stat">
                                    <span className="stat-number">10<sub>x</sub></span>
                                    <span className="stat-text">GROWTH IN<br />CLIENT SUCCESS</span>
                                </div>
                            </div>
                        </div>

                        {/* <!-- 3D Sphere Graphic --> */}
                        <div className="col-lg-4 text-center" data-aos="zoom-in" data-aos-delay="300">
                            <div className="hero-graphic">
                                <div className="sphere-3d">
                                    <img src={bannerimg} alt="homebannerimg" className="sphere-img" />
                                    <div className="sphere-ring sphere-ring-1"></div>
                                    <div className="sphere-ring sphere-ring-2"></div>
                                    <div className="sphere-ring sphere-ring-3"></div>
                                    <div className="sphere-glow"></div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- CTA & Description --> */}
                        <div className="col-lg-4" data-aos="fade-left" data-aos-delay="400">
                            <div className="hero-cta-block">
                                <p className="hero-description">
                                    We design, develop, and code innovative digital
                                    solutions to bring ideas to life.
                                </p>
                                <a className="btn-circle-cta " onClick={() => Navigate("/contact")}>
                                    <span className="getstarted-text">GET STARTED</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* banner end */}
            {/* ========== STATS SECTION  start==========  */}
            <section className="stats-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12" data-aos="fade-right">
                            <h2 className="section-title-large">
                                Get the Best Web and Mobile App Development Solutions for Your Business

                            </h2>
                        </div>
                        <div className="col-lg-12" data-aos="fade-left">
                            <div className="stats-card">
                                {/* <h3 className="stats-heading">We specialize in Mobile App Development, Website Development, UI/UX Design, and Digital Marketing Services tailored to your business goals.</h3> */}
                                <div className="stats-row">
                                    <div className="stat-item">
                                        <div className="stat-value-wrap">
                                            <span className="stat-label">We are a leading web and mobile app development company with 7+ years of experience helping businesses build strong digital identities and scalable technology solutions. We specialize in mobile app development, website development, UI/UX design, custom software development, and SEO services, delivering results that drive real business growth.
                                            </span>
                                        </div>
                                        <div className="stat-value-wrap"><span className="stat-label">Our team creates high-performance websites and mobile applications that are visually engaging, fast, secure, and user-friendly. Every project is designed with a strong focus on user experience, performance optimization, and search engine visibility, ensuring your brand stands out in today’s competitive digital landscape.
                                        </span></div>
                                        <div className="stat-value-wrap">
                                            <span className="stat-label">With expertise in Android and iOS app development, responsive web design, and custom software solutions, we tailor every solution to meet your unique business goals. Our UI/UX
                                                designers craft intuitive interfaces that improve engagement, while our SEO experts help increase organic traffic and higher search engine rankings.
                                            </span>
                                        </div>
                                        <div className="stat-value-wrap">
                                            <span className="stat-label"> Trusted by startups and growing businesses alike, we combine innovation, strategy, and modern technologies to deliver scalable, future-ready digital solutions. From idea to execution, we are your reliable digital partner committed to quality, transparency, and long-term success.

                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ========== STATS SECTION  end==========  */}
            {/* //  ========== INDUSTRIES SECTION start ==========  */}
            <section className="industries-section" id="industries">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12 text-center" data-aos="fade-up">
                            <h2 className="section-title-italic">The digital world is changing rapidly, and businesses need to use the latest technologies to stay competitive. Our ability to combine technical expertise with creative ideas.</h2>
                        </div>
                    </div>

                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
                            <a href="#" className="industry-card">
                                <h4 className="industry-title">Customer-Centric Development
                                </h4>
                                <p>We align our web and mobile app development solutions with your business objectives to ensure long-term success.

                                </p>
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
                            <a href="#" className="industry-card">
                                <h4 className="industry-title">Latest Technologies & Innovation
                                </h4>
                                <p>Using modern frameworks and advanced technologies, we create scalable, secure, and high-performance digital products.


                                </p>
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
                            <a href="#" className="industry-card">
                                <h4 className="industry-title">End-to-End Digital Services

                                </h4>
                                <p>We offer complete digital solutions—from planning and UI/UX design to development, testing, deployment, and SEO.
                                </p>
                            </a>
                        </div>

                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
                            <a href="#" className="industry-card">
                                <h4 className="industry-title">Proven Industry Expertise
                                </h4>
                                <p>We have successfully delivered projects across healthcare, e-commerce, education, real estate, and other industries.
                                    .</p>
                            </a>
                        </div>


                    </div>
                </div>
            </section>
            {/* //  ========== INDUSTRIES SECTION end ==========  */}
            {/* service section start */}
            <section className="services-section" id="services">
                <div className="container">
                    {/* <!-- Section Header --> */}
                    <div className="row mb-5">
                        <div className="col-12 text-center" data-aos="fade-up">
                            <h2 className="section-title-italic">Discover our offerings</h2>
                        </div>
                    </div>

                    {/* <!-- Service Cards - Asymmetric Grid --> */}
                    <div className="services-grid">
                        {/* <!-- Left Column - Custom AI Solution --> */}
                        <div className="service-card service-card-tall" data-aos="fade-up" data-aos-delay="100">
                            <div className="service-header">
                                <h3 className="service-title">Mobile app <br />Development</h3>
                                <a href="#" className="service-arrow">
                                    <i className="bi bi-arrow-up-right"></i>
                                </a>
                            </div>
                            <div className="service-image">
                                <img src={mobileapp} alt="Mobile app img" />
                            </div>
                            <p className="service-desc">From idea to impact — we design, develop, and grow your mobile app brand.</p>
                        </div>

                        {/* <!-- Middle Column - Data Analytics + Automation --> */}
                        <div className="service-column-middle">
                            <div className="service-card service-card-half" data-aos="fade-up" data-aos-delay="200">
                                <div className="service-header">
                                    <h3 className="service-title">UI/UX Design</h3>
                                    <a href="#" className="service-arrow">
                                        <i className="bi bi-arrow-up-right"></i>
                                    </a>
                                </div>
                                <div className="service-image-small">
                                    <img src={uiux} alt="UI/UX Design img" />
                                </div>
                                <p className="service-desc">From logos to websites, our creative design solutions bring your brand to life with visually stunning and user-centric designs.</p>
                            </div>
                            <div className="service-card service-card-half" data-aos="fade-up" data-aos-delay="300">
                                <div className="service-header">
                                    <h3 className="service-title">Web development</h3>
                                    <a href="#" className="service-arrow">
                                        <i className="bi bi-arrow-up-right"></i>
                                    </a>
                                </div>
                                <div className="service-image-small">
                                    <img src={webdev} alt="Web development img" />
                                </div>
                                <p className="service-desc">Our expert web development team creates high-performance websites & applications that enhance experience & functionality.</p>
                            </div>
                        </div>
                        <div className="service-column-middle">
                            <div className="service-card service-card-half" data-aos="fade-up" data-aos-delay="200">
                                <div className="service-header">
                                    <h3 className="service-title">Digital marketing / SEO</h3>
                                    <a href="#" className="service-arrow">
                                        <i className="bi bi-arrow-up-right"></i>
                                    </a>
                                </div>
                                <div className="service-image-small">
                                    <img src={marketingapp} alt="Digital marketing / SEO img" />
                                </div>
                                <p className="service-desc">We craft tailored digital marketing strategies that engage your audience, boost conversions, & build brand loyalty across multiple platforms.</p>
                            </div>
                            <div className="service-card service-card-half" data-aos="fade-up" data-aos-delay="300">
                                <div className="service-header">
                                    <h3 className="service-title">Softwere Testing ( Manual )</h3>
                                    <a href="#" className="service-arrow">
                                        <i className="bi bi-arrow-up-right"></i>
                                    </a>
                                </div>
                                <div className="service-image-small">
                                    <img src={testing} alt="Softwere Testing ( Manual ) img" />
                                </div>
                                <p className="service-desc">We offer meticulous manual software testing services to help you deliver bug-free, high-performing, and user-friendly applications.</p>
                            </div>
                        </div>

                        {/* <!-- Right Column - Customer Experience --> */}
                        {/* <div className="service-card service-card-tall" data-aos="fade-up" data-aos-delay="400">
                            <div className="service-header">
                                <h3 className="service-title">Digital marketing / <br />SEO</h3>
                                <a href="#" className="service-arrow">
                                    <i className="bi bi-arrow-up-right"></i>
                                </a>
                            </div>
                            <div className="service-image">
                                <img src={aiicon3} alt="AI Brain" />
                            </div>
                            <p className="service-desc">We craft tailored digital marketing strategies that engage your audience, boost conversions, & build brand loyalty across multiple platforms.</p>
                        </div> */}
                    </div>
                </div>
            </section>
            {/* service section end */}
            {/* <!-- ========== CASE STUDIES SECTION start ========== --> */}
            {/* <WorkGallery /> */}
            {/* <!-- ========== CASE STUDIES SECTION start ========== --> */}
            {/* <!-- ========== CTA SECTION  start========== --> */}
            <section className="cta-section" id="cta">
                <div className="cta-bg-glow"></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 text-center" data-aos="zoom-in">
                            <h2 className="cta-title">Trusted by Respected and Valued Clients
                            </h2>
                            <p className="cta-text">We believe in building long-term partnerships with our clients by delivering innovative and reliable technology solutions that drive sustainable business growth. Our mission is to empower businesses with cutting-edge digital solutions that help them scale efficiently and stay competitive in today’s digital world.
                            </p>
                            <p className="cta-text">When you choose us, you’re not just hiring a web and app development company—you’re partnering with a trusted technology expert committed to your success. This is why businesses across India recognize us as a leading web and mobile app development company and rely on us to turn their digital vision into reality.

                            </p>
                            <p className="cta-text">From mobile app development and custom software solutions to responsive website design and development, UI/UX design, SEO optimization, and manual software testing, we offer end-to-end services tailored to your business needs. Our solutions are designed to enhance user experience, increase online visibility, and support your business in growing, expanding, and achieving long-term success online.

                            </p>


                        </div>
                    </div>
                </div>


            </section>
            {/* //   ========== TESTIMONIALS SECTION start ========== */}
            <section className="testimonials-section" id="testimonials">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12 text-center" data-aos="fade-up">
                            <h2 className="section-title-italic">What Our Clients Are Saying</h2>
                        </div>
                    </div>

                    {/* Swiper */}
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1} // default mobile
                        loop={true}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 4000 }}
                        breakpoints={{
                            640: {   // Small devices (mobile landscape)
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {   // Tablets
                                slidesPerView: 2,
                                spaceBetween: 25,
                            },
                            1024: {  // Laptops / Desktop
                                slidesPerView: 3,
                                spaceBetween: 30,
                            }
                        }}
                    >
                        {/* Testimonial 1 */}
                        <SwiperSlide>
                            <div className="testimonial-card" data-aos="fade-up" data-aos-delay="200">
                                <div className="testimonial-rating">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-half"></i>
                                </div>
                                {/* <h4 className="testimonial-title">Transformative AI Solutions</h4> */}
                                <p className="testimonial-text">
                                    The team’s creative strategy transformed our brand's presence. With a fresh and engaging
                                    design, we gained a new identity that resonates deeply with our audience, positioning us
                                    as a standout in a competitive market. Our brand recognition has skyrocketed since the
                                    launch.
                                </p>
                                <div className="testimonial-author">
                                    <div className="author-info">
                                        <span className="author-name">   — Rina V.
                                        </span>
                                        <span className="author-role">EdTech Founder
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Testimonial 2 */}
                        <SwiperSlide>
                            <div className="testimonial-card" data-aos="fade-up" data-aos-delay="200">
                                <div className="testimonial-rating">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                {/* <h4 className="testimonial-title">Unmatched Expertise in AI Marketing</h4> */}
                                <p className="testimonial-text">
                                    The team’s creative strategy transformed our brand's presence. With a fresh and engaging
                                    design, we gained a new identity that resonates deeply with our audience, positioning us
                                    as a standout in a competitive market. Our brand recognition has skyrocketed since the
                                    launch.
                                </p>
                                <div className="testimonial-author">
                                    <div className="author-info">
                                        <span className="author-name">  — Carlos M.
                                        </span>
                                        <span className="author-role">   Real Estate Agency Owner
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Testimonial 3 */}
                        <SwiperSlide>
                            <div className="testimonial-card" data-aos="fade-up" data-aos-delay="200">
                                <div className="testimonial-rating">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                {/* <h4 className="testimonial-title">Unmatched Expertise in AI Marketing</h4> */}
                                <p className="testimonial-text">
                                    The team’s creative strategy transformed our brand's presence. With a fresh and engaging
                                    design, we gained a new identity that resonates deeply with our audience, positioning us
                                    as a standout in a competitive market. Our brand recognition has skyrocketed since the
                                    launch.
                                </p>
                                <div className="testimonial-author">
                                    <div className="author-info">
                                        <span className="author-name"> — Tom H.
                                        </span>
                                        <span className="author-role"> Fintech Entrepreneur
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Testimonial 4 */}
                        <SwiperSlide>
                            <div className="testimonial-card" data-aos="fade-up" data-aos-delay="200">
                                <div className="testimonial-rating">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                {/* <h4 className="testimonial-title">Unmatched Expertise in AI Marketing</h4> */}
                                <p className="testimonial-text">
                                    The team’s creative strategy transformed our brand's presence. With a fresh and engaging
                                    design, we gained a new identity that resonates deeply with our audience, positioning us
                                    as a standout in a competitive market. Our brand recognition has skyrocketed since the
                                    launch.
                                </p>
                                <div className="testimonial-author">
                                    <div className="author-info">
                                        <span className="author-name"> — Priya J.

                                        </span>
                                        <span className="author-role">  Fashion Brand Owner
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Testimonial 5 */}
                        <SwiperSlide>
                            <div className="testimonial-card" data-aos="fade-up" data-aos-delay="200">
                                <div className="testimonial-rating">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                {/* <h4 className="testimonial-title">Unmatched Expertise in AI Marketing</h4> */}
                                <p className="testimonial-text">
                                    The team’s creative strategy transformed our brand's presence. With a fresh and engaging
                                    design, we gained a new identity that resonates deeply with our audience, positioning us
                                    as a standout in a competitive market. Our brand recognition has skyrocketed since the
                                    launch.
                                </p>
                                <div className="testimonial-author">
                                    <div className="author-info">
                                        <span className="author-name"> — Daniel T.

                                        </span>
                                        <span className="author-role">Hospitality Business Owner

                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Testimonial 6 */}
                        <SwiperSlide>
                            <div className="testimonial-card" data-aos="fade-up" data-aos-delay="200">
                                <div className="testimonial-rating">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                {/* <h4 className="testimonial-title">Unmatched Expertise in AI Marketing</h4> */}
                                <p className="testimonial-text">
                                    The team’s creative strategy transformed our brand's presence. With a fresh and engaging
                                    design, we gained a new identity that resonates deeply with our audience, positioning us
                                    as a standout in a competitive market. Our brand recognition has skyrocketed since the
                                    launch.
                                </p>
                                <div className="testimonial-author">
                                    <div className="author-info">
                                        <span className="author-name">     — Laura B.


                                        </span>
                                        <span className="author-role">Nonprofit Director

                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>


                        {/* Testimonial 7*/}
                        <SwiperSlide>
                            <div className="testimonial-card" data-aos="fade-up" data-aos-delay="200">
                                <div className="testimonial-rating">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                {/* <h4 className="testimonial-title">Unmatched Expertise in AI Marketing</h4> */}
                                <p className="testimonial-text">
                                    The team’s creative strategy transformed our brand's presence. With a fresh and engaging
                                    design, we gained a new identity that resonates deeply with our audience, positioning us
                                    as a standout in a competitive market. Our brand recognition has skyrocketed since the
                                    launch.
                                </p>
                                <div className="testimonial-author">
                                    <div className="author-info">
                                        <span className="author-name">   — Olivia M.


                                        </span>
                                        <span className="author-role">   HealthTech Founder

                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* Testimonial 8*/}
                        <SwiperSlide>
                            <div className="testimonial-card" data-aos="fade-up" data-aos-delay="200">
                                <div className="testimonial-rating">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                {/* <h4 className="testimonial-title">Unmatched Expertise in AI Marketing</h4> */}
                                <p className="testimonial-text">
                                    The team’s creative strategy transformed our brand's presence. With a fresh and engaging
                                    design, we gained a new identity that resonates deeply with our audience, positioning us
                                    as a standout in a competitive market. Our brand recognition has skyrocketed since the
                                    launch.
                                </p>
                                <div className="testimonial-author">
                                    <div className="author-info">
                                        <span className="author-name">   — Karan S.


                                        </span>
                                        <span className="author-role">       Digital Strategist

                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* /* Testimonial 8*/}
                        <SwiperSlide>
                            <div className="testimonial-card" data-aos="fade-up" data-aos-delay="200">
                                <div className="testimonial-rating">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                {/* <h4 className="testimonial-title">Unmatched Expertise in AI Marketing</h4> */}
                                <p className="testimonial-text">
                                    The team’s creative strategy transformed our brand's presence. With a fresh and engaging
                                    design, we gained a new identity that resonates deeply with our audience, positioning us
                                    as a standout in a competitive market. Our brand recognition has skyrocketed since the
                                    launch.
                                </p>
                                <div className="testimonial-author">
                                    <div className="author-info">
                                        <span className="author-name">   — Anita D.


                                        </span>
                                        <span className="author-role"> Marketing Director

                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* /* Testimonial 9*/}
                        <SwiperSlide>
                            <div className="testimonial-card" data-aos="fade-up" data-aos-delay="200">
                                <div className="testimonial-rating">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                {/* <h4 className="testimonial-title">Unmatched Expertise in AI Marketing</h4> */}
                                <p className="testimonial-text">
                                    The team’s creative strategy transformed our brand's presence. With a fresh and engaging
                                    design, we gained a new identity that resonates deeply with our audience, positioning us
                                    as a standout in a competitive market. Our brand recognition has skyrocketed since the
                                    launch.
                                </p>
                                <div className="testimonial-author">
                                    <div className="author-info">
                                        <span className="author-name"> — James K.


                                        </span>
                                        <span className="author-role"> CTO at a Tech Company

                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* /* Testimonial 10*/}
                        <SwiperSlide>
                            <div className="testimonial-card" data-aos="fade-up" data-aos-delay="200">
                                <div className="testimonial-rating">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                {/* <h4 className="testimonial-title">Unmatched Expertise in AI Marketing</h4> */}
                                <p className="testimonial-text">
                                    The team’s creative strategy transformed our brand's presence. With a fresh and engaging
                                    design, we gained a new identity that resonates deeply with our audience, positioning us
                                    as a standout in a competitive market. Our brand recognition has skyrocketed since the
                                    launch.
                                </p>
                                <div className="testimonial-author">
                                    <div className="author-info">
                                        <span className="author-name"> Melissa R.


                                        </span>
                                        <span className="author-role"> Product Manager
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* /* Testimonial 11*/}
                        <SwiperSlide>
                            <div className="testimonial-card" data-aos="fade-up" data-aos-delay="200">
                                <div className="testimonial-rating">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                {/* <h4 className="testimonial-title">Unmatched Expertise in AI Marketing</h4> */}
                                <p className="testimonial-text">
                                    The team’s creative strategy transformed our brand's presence. With a fresh and engaging
                                    design, we gained a new identity that resonates deeply with our audience, positioning us
                                    as a standout in a competitive market. Our brand recognition has skyrocketed since the
                                    launch.
                                </p>
                                <div className="testimonial-author">
                                    <div className="author-info">
                                        <span className="author-name">    — Rohit M.


                                        </span>
                                        <span className="author-role">    Retail Business Owner
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* /* Testimonial 12*/}
                        <SwiperSlide>
                            <div className="testimonial-card" data-aos="fade-up" data-aos-delay="200">
                                <div className="testimonial-rating">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                {/* <h4 className="testimonial-title">Unmatched Expertise in AI Marketing</h4> */}
                                <p className="testimonial-text">
                                    The team’s creative strategy transformed our brand's presence. With a fresh and engaging
                                    design, we gained a new identity that resonates deeply with our audience, positioning us
                                    as a standout in a competitive market. Our brand recognition has skyrocketed since the
                                    launch.
                                </p>
                                <div className="testimonial-author">
                                    <div className="author-info">
                                        <span className="author-name">   Balpreet A.


                                        </span>
                                        <span className="author-role">   CEO, Cooking Champs
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* /* Testimonial 13*/}
                        <SwiperSlide>
                            <div className="testimonial-card" data-aos="fade-up" data-aos-delay="200">
                                <div className="testimonial-rating">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                {/* <h4 className="testimonial-title">Unmatched Expertise in AI Marketing</h4> */}
                                <p className="testimonial-text">
                                    The team’s creative strategy transformed our brand's presence. With a fresh and engaging
                                    design, we gained a new identity that resonates deeply with our audience, positioning us
                                    as a standout in a competitive market. Our brand recognition has skyrocketed since the
                                    launch.
                                </p>
                                <div className="testimonial-author">
                                    <div className="author-info">
                                        <span className="author-name">     Jason B


                                        </span>
                                        <span className="author-role">  YAH Escrituras
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    {/* Pagination */}

                    <div className="swiper-pagination testimonials-pagination"></div>
                </div>
            </section>
            {/* //   ========== TESTIMONIALS SECTION end ========== */}


            {/* <!-- ========== MARQUEE SECTION  end========== --> */}
            {/* faq section start */}
            <section className="faq-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" data-aos="fade-right">
                            <div className="faq-sidebar">
                                <h3>Questions we get asked</h3>
                                {/* <h2 className="section-title-italic">Questions we get asked</h2> */}
                            </div>
                        </div>
                        <div className="col-lg-12" data-aos="fade-left">
                            <Accordion defaultActiveKey="0" className="faq-accordion">

                                {/* FAQ 1 */}
                                <Accordion.Item eventKey="0" data-category="general">
                                    <Accordion.Header>How do I get started?</Accordion.Header>
                                    <Accordion.Body>
                                        Just reach out to us via our <strong>contact form</strong>, <strong>email</strong>, or <strong>phone</strong>, and we’ll schedule a free consultation to discuss your project needs and goals.
                                    </Accordion.Body>
                                </Accordion.Item>

                                {/* FAQ 2 */}
                                <Accordion.Item eventKey="1" data-category="general">
                                    <Accordion.Header>What industries do you work with?</Accordion.Header>
                                    <Accordion.Body>
                                        We’ve worked across various industries such as <strong>e-commerce, healthcare, education, fintech, real estate, logistics</strong>, and more.
                                    </Accordion.Body>
                                </Accordion.Item>

                                {/* FAQ 3 */}
                                <Accordion.Item eventKey="2" data-category="services">
                                    <Accordion.Header>Do you help with app store or website launch?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes, we assist with launching apps on <strong>Google Play Store and Apple App Store</strong>, and we also help with <strong>domain registration, hosting, and website deployment</strong>.
                                    </Accordion.Body>
                                </Accordion.Item>

                                {/* FAQ 4 */}
                                <Accordion.Item eventKey="3" data-category="services">
                                    <Accordion.Header>Will I own the source code and design files?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes. Once the project is completed and paid in full, we hand over all the deliverables including source code, design files, and documentation.
                                    </Accordion.Body>
                                </Accordion.Item>

                                {/* FAQ 5 */}
                                <Accordion.Item eventKey="4" data-category="pricing">
                                    <Accordion.Header>Can you redesign or improve my existing app or website?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes, we can audit your current digital product, improve the UI/UX design, update the backend, and enhance performance or security based on modern standards.
                                    </Accordion.Body>
                                </Accordion.Item>

                                {/* FAQ 6 */}
                                <Accordion.Item eventKey="5" data-category="pricing">
                                    <Accordion.Header>Do you offer post-launch support and maintenance?</Accordion.Header>
                                    <Accordion.Body>
                                        Absolutely. We provide ongoing support, updates, and maintenance packages to ensure your app or website runs smoothly and stays up to date with new technologies.
                                    </Accordion.Body>
                                </Accordion.Item>

                                {/* FAQ 7 */}
                                <Accordion.Item eventKey="6" data-category="support">
                                    <Accordion.Header>How much does a mobile app or website cost?</Accordion.Header>
                                    <Accordion.Body>
                                        Costs depend on the features, design complexity, and platform.
                                        <ul>
                                            <li><p className="mb-0">Basic websites start at [insert starting price].</p></li>
                                            <li><p className="mb-0">Mobile apps typically start from [insert starting price].<br />We offer custom quotes after a free consultation.</p></li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>

                                {/* FAQ 8 */}
                                <Accordion.Item eventKey="7" data-category="support">
                                    <Accordion.Header>How long does it take to build a website or app?</Accordion.Header>
                                    <Accordion.Body>
                                        Project timelines vary based on complexity.
                                        <ul>
                                            <li><p className="mb-0">A basic website may take 2–4 weeks.</p></li>
                                            <li><p className="mb-0">A standard app or advanced website may take 8–12 weeks.<br />We provide a detailed timeline after the initial consultation and project scope finalization.</p></li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>

                                {/* FAQ 9 */}
                                <Accordion.Item eventKey="8" data-category="general">
                                    <Accordion.Header>Do you build apps for both Android and iOS?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes! We develop <strong>native apps for Android and iOS</strong>, as well as <strong>cross-platform apps</strong> using frameworks like Flutter and React Native to ensure a smooth experience across all devices.
                                    </Accordion.Body>
                                </Accordion.Item>

                                {/* FAQ 10 */}
                                <Accordion.Item eventKey="9" data-category="general">
                                    <Accordion.Header>What services do you offer?</Accordion.Header>
                                    <Accordion.Body>
                                        We specialize in custom <strong>mobile app development</strong>, <strong>website design</strong>, and <strong>web development</strong>. Our services include UI/UX design, full-stack development, e-commerce solutions, CMS development, API integration, and ongoing maintenance.
                                    </Accordion.Body>
                                </Accordion.Item>

                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>



            {/* faq section end */}
        </>
    )
}
export default Homepage;