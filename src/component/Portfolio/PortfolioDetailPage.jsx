import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPortfolioById } from "../../api/portfolio";
import PortfolioSidebar from "./PortfolioSidebar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";



const PortfolioDetailPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [portfolio, setPortfolio] = useState(null);


    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        fetchPortfolio();
    }, [id]);

    const fetchPortfolio = async () => {
        try {
            const res = await getPortfolioById(id);
            setPortfolio(res);
        } catch (error) {
            console.error("Portfolio fetch failed", error);
        }
    };

    useEffect(() => {
  if (!prevRef.current || !nextRef.current) return;
}, []);


    const getPortfolioLinks = (item) => {
        const links = [];

        if (item.website_url) {
            links.push({
                url: item.website_url,
                icon: "bi bi-globe",
                label: "Website",
            });
        }

        if (item.android_url) {
            links.push({
                url: item.android_url,
                icon: "bi bi-android2",
                label: "Android App",
            });
        }

        if (item.ios_url) {
            links.push({
                url: item.ios_url,
                icon: "bi bi-apple",
                label: "iOS App",
            });
        }

        return links;
    };

    // const portfolioImages = [
    //     {
    //         id: 1,
    //         img: "https://picsum.photos/800/500?random=1",
    //     },
    //     {
    //         id: 2,
    //         img: "https://picsum.photos/800/500?random=2",
    //     },
    //     {
    //         id: 3,
    //         img: "https://picsum.photos/800/500?random=3",
    //     },
    // ];

    const portfolioImageList = portfolio?.image
        ? portfolio.image.split(",")
        : [];



    const isSingleImage = portfolioImageList.length === 1;

    if (!portfolio) return <p className="text-center">Loading...</p>;

    return (
        <div className="serviceDetailpage">
            <section className="service-details-section">
                <div className="container">
                    <div className="row">

                        {/* LEFT CONTENT */}
                        <div className="col-lg">
                            <div className="service-detail-content" data-aos="fade-up">


                                {/* SLIDER */}
                                <div className="service-detail-image-portfolio mb-4 position-relative">

                                    <Swiper
  modules={[Navigation, Autoplay, Thumbs]}
  spaceBetween={20}
  slidesPerView={isSingleImage ? 1 : 2}
  loop={!isSingleImage}
  autoplay={!isSingleImage ? { delay: 3000 } : false}
  thumbs={!isSingleImage ? { swiper: thumbsSwiper } : undefined}
  navigation={{
    prevEl: prevRef.current,
    nextEl: nextRef.current,
  }}
  onInit={(swiper) => {
    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;
    swiper.navigation.init();
    swiper.navigation.update();
  }}
>

                                        {portfolioImageList.map((img, index) => (
                                            <SwiperSlide key={index}>
                                                <img
                                                    src={`${import.meta.env.VITE_API_BASE_URL_FOR_IMAGES}/${img}`}
                                                    alt={`${portfolio.title} ${index + 1}`}
                                                    className="w-100 rounded cursor-pointer"
                                                    onClick={() => {
                                                        setActiveIndex(index);
                                                        setLightboxOpen(true);
                                                    }}
                                                />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>




                                    {/* CUSTOM NAVIGATION */}
                                    {!isSingleImage && (
                                        <div className="custom-swiper-nav">
                                            <button ref={prevRef} className="swiper-btn-prev">
                                                <i className="bi bi-arrow-left"></i>
                                            </button>
                                            <button ref={nextRef} className="swiper-btn-next">
                                                <i className="bi bi-arrow-right"></i>
                                            </button>
                                        </div>
                                    )}



                                </div>

                                {!isSingleImage && (
                                    <div className="mb-4">
                                        <Swiper
                                            onSwiper={setThumbsSwiper}
                                            modules={[Thumbs]}
                                            spaceBetween={10}
                                            slidesPerView={8}
                                            watchSlidesProgress
                                            className="mt-3 portfolio-thumbs"
                                        >
                                            {portfolioImageList.map((img, index) => (
                                                <SwiperSlide key={index}>
                                                    <img
                                                        src={`${import.meta.env.VITE_API_BASE_URL_FOR_IMAGES}/${img}`}
                                                        alt="thumb"
                                                        className="w-100 rounded thumb-img"
                                                    />
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>
                                )}


                                {/* IMAGE */}
                                {/* <div className="service-detail-image">
                                    <img
                                        src={`${import.meta.env.VITE_API_BASE_URL_FOR_IMAGES}/${portfolio.image.split(",")[0]}`}
                                        alt={portfolio.title}
                                    />
                                </div> */}


                                {/* TITLE */}
                                <h2>{portfolio.title}</h2>

                                {/* TECHNOLOGIES */}
                                {portfolio.technologies && (
                                    <p>
                                        <strong>Technologies:</strong> {portfolio.technologies}
                                    </p>
                                )}

                                {/* DESCRIPTION */}
                                <p>{portfolio.description}</p>


                                {/* LINKS */}

                                <div className="portfolio-links">
                                    {getPortfolioLinks(portfolio).map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="portfolio-icon"
                                            title={link.label}
                                        >
                                            <i className={link.icon}></i>
                                        </a>
                                    ))}
                                </div>

                            </div>
                        </div>

                        {/* RIGHT SIDEBAR (SAME PATTERN AS SERVICE) */}
                        {/* <PortfolioSidebar /> */}

                        {lightboxOpen && (
                            <div className="lightbox-overlay" onClick={() => setLightboxOpen(false)}>
                                <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                                    <button
                                        className="lightbox-close"
                                        onClick={() => setLightboxOpen(false)}
                                    >
                                        ×
                                    </button>

                                    <Swiper
                                        initialSlide={activeIndex}
                                        modules={[Navigation]}
                                        navigation
                                        slidesPerView={1}
                                    >
                                        {portfolioImageList.map((img, index) => (
                                            <SwiperSlide key={index}>
                                                <img
                                                    src={`${import.meta.env.VITE_API_BASE_URL_FOR_IMAGES}/${img}`}
                                                    alt="lightbox"
                                                    className="lightbox-image"
                                                />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </section>


        </div>


    );
};

export default PortfolioDetailPage;
