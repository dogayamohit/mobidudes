import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPortfolioById } from "../../api/portfolio";
import PortfolioSidebar from "./PortfolioSidebar";

const PortfolioDetailPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [portfolio, setPortfolio] = useState(null);

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

    if (!portfolio) return <p className="text-center">Loading...</p>;

    return (
        <div className="serviceDetailpage">
            <section className="service-details-section">
                <div className="container">
                    <div className="row">

                        {/* LEFT CONTENT */}
                        <div className="col-lg-8">
                            <div className="service-detail-content" data-aos="fade-up">

                                {/* IMAGE */}
                                <div className="service-detail-image">
                                    <img
                                        src={`${import.meta.env.VITE_API_BASE_URL_FOR_IMAGES}/${portfolio.image}`}
                                        alt={portfolio.title}
                                    />
                                </div>

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

                                {/* {portfolio.website_url && (
                                        <a href={portfolio.website_url} target="_blank" rel="noreferrer">
                                            Website
                                        </a>
                                    )}
                                    {portfolio.android_url && <span>Android App</span>}
                                    {portfolio.ios_url && <span>iOS App</span>} */}


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
                        <PortfolioSidebar />

                    </div>
                </div>
            </section>
        </div>
    );
};

export default PortfolioDetailPage;
