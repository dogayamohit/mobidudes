import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


import { getReviews } from "../api/home";
const VITE_API_BASE_URL_FOR_IMAGES = import.meta.env.VITE_API_BASE_URL_FOR_IMAGES;

const STATIC_REVIEWS = [
    {
        id: 1,
        name: "Rina V.",
        designation: "EdTech Founder",
        star: 5,
        content:
            "The team’s creative strategy transformed our brand's presence and gave us a new identity.",
    },
    {
        id: 2,
        name: "Carlos M.",
        designation: "Real Estate Agency Owner",
        star: 5,
        content:
            "Exceptional quality and professionalism. Our brand recognition has skyrocketed.",
    },
    {
        id: 3,
        name: "Tom H.",
        designation: "Fintech Entrepreneur",
        star: 4,
        content:
            "Reliable delivery and great communication throughout the entire project.",
    },
    {
        id: 4,
        name: "Carlos M.",
        designation: "Real Estate Agency Owner",
        star: 5,
        content:
            "Exceptional quality and professionalism. Our brand recognition has skyrocketed.",
    },
    {
        id: 5,
        name: "Tom H.",
        designation: "Fintech Entrepreneur",
        star: 4,
        content:
            "Reliable delivery and great communication throughout the entire project.",
    },
];

const Testimonials = () => {
    const [reviews, setReviews] = useState(STATIC_REVIEWS);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const data = await getReviews();

                if (Array.isArray(data) && data.length > 0) {
                    setReviews(data);
                } else {
                    setReviews(STATIC_REVIEWS);
                }
            } catch (error) {
                console.error("Failed to load reviews, using static data");
                setReviews(STATIC_REVIEWS);
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, []);

    return (
        <section className="testimonials-section" id="testimonials">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-12 text-center" data-aos="fade-up">
                        <h2 className="section-title-italic mt-5">
                            What Our Clients Are Saying
                        </h2>
                    </div>
                </div>

                {!loading && (
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 4000 }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {reviews.map((review) => (
                            <SwiperSlide key={review.id}>
                                <div className="testimonial-card" data-aos="fade-up">
                                    {/* ⭐ Rating */}
                                    <div className="testimonial-rating">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <i
                                                key={i}
                                                className={`bi ${i < review.star
                                                    ? "bi-star-fill"
                                                    : "bi-star"
                                                    }`}
                                            ></i>
                                        ))}
                                    </div>

                                    {/* 💬 Content */}
                                    <p className="testimonial-text">
                                        {review.content}
                                    </p>

                                    {/* 👤 Author */}
                                    <div className="testimonial-author">
                                        <div className="author-info">
                                            <div>
                                                <img
                                                    src={`${VITE_API_BASE_URL_FOR_IMAGES}/${review.image}`}
                                                    alt={review.name}
                                                    className="author-image"
                                                />
                                            </div>
                                            <div>
                                                <span className="author-name">
                                                    {review.name}
                                                </span>

                                                <span className="author-role">
                                                    {review.designation}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </section>
    );
};

export default Testimonials;
