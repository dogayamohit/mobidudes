import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useRef } from "react";
import { useEffect, useState } from 'react';

let WorkGallery = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [swiperReady, setSwiperReady] = useState(false); //  initialize state
    // Enable swiper navigation after refs are mounted
    useEffect(() => {
        setSwiperReady(true);
    }, []);

    return (
        <>
            {/* <!-- ========== CASE STUDIES SECTION start ========== --> */}
            <section className="case-studies-section" id="portfolio">
                <div className="container">

                    <div className="row mb-5">
                        <div className="col-12 text-center" data-aos="fade-up">
                            <h2 className="section-title-italic">Our works gallery</h2>
                            <p className="text-white">A glimpse into our creativity and expertise—explore the projects that define our commitment to innovation and excellence.</p>
                        </div>
                    </div>

                    {/* Swiper Carousel */}
                    <div data-aos="fade-up" data-aos-delay="200">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{ delay: 2500 }}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            onBeforeInit={(swiper) => {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                            }}
                            breakpoints={{
                                640: { slidesPerView: 1, spaceBetween: 20 },
                                768: { slidesPerView: 2, spaceBetween: 25 },
                                1024: { slidesPerView: 3, spaceBetween: 30 },
                                1280: { slidesPerView: 3.5, spaceBetween: 30 },
                            }}
                        >

                            {/* Case 1 */}
                            <SwiperSlide>
                                <div className="case-card">
                                    <div className="case-image">
                                        <img src="https://cloudwapp.com/public/assets/img/img2.png" alt="Financial Analysis" />
                                    </div>
                                    <div className="case-content">
                                        <h3 className="case-title">
                                            Enhancing Operational Efficiency with Predictive AI
                                        </h3>
                                        <p className="case-desc">
                                            Posuere fermentum ante mauris egestas rhoncus? Scelerisque ut tristique.
                                        </p>

                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Case 2 */}
                            <SwiperSlide>
                                <div className="case-card">
                                    <div className="case-image">
                                        <img src="https://cloudwapp.com/public/assets/img/img8.png" alt="Logistics" />
                                    </div>
                                    <div className="case-content">
                                        <h3 className="case-title">Optimizing Marketing Campaigns in E-Commerce</h3>
                                        <p className="case-desc">
                                            Mus et quis iaculis eu; sapien cursus vestibulum. Feugiat accumsan fusce.
                                        </p>

                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Case 3 */}
                            <SwiperSlide>
                                <div className="case-card">
                                    <div className="case-image">
                                        <img src="https://cloudwapp.com/public/assets/img/img1.png" alt="E-commerce" />
                                    </div>
                                    <div className="case-content">
                                        <h3 className="case-title">
                                            30% Conversion Boost: aiNexa's AI for Trendy Goods
                                        </h3>
                                        <p className="case-desc">
                                            Cras molestie nisi aenean dictum, cursus quisque pulvinar porttitor.
                                        </p>

                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Case 4 */}
                            <SwiperSlide>
                                <div className="case-card">
                                    <div className="case-image">
                                        <img src="https://cloudwapp.com/public/assets/img/img0.png" alt="Digital Wardrobe" />
                                    </div>
                                    <div className="case-content">
                                        <h3 className="case-title">Enhancing Security with AI-Powered Detection</h3>
                                        <p className="case-desc">
                                            Aenean dictum cursus quisque pulvinar porttitor rhoncus.
                                        </p>

                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                        {/* Navigation Buttons */}
                        <div className="swiper-navigation mt-2">
                            <button ref={prevRef} className="swiper-btn swiper-btn-prev">
                                <i className="bi bi-arrow-left"></i>
                            </button>
                            <button ref={nextRef} className="swiper-btn swiper-btn-next">
                                <i className="bi bi-arrow-right"></i>
                            </button>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default WorkGallery;