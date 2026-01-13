import { useState } from "react";
import PageHeader from "../layout/PageHeader";

const PortfolioPage = () => {
    const [activeFilter, setActiveFilter] = useState("all");

    return (
        <>
            <PageHeader title="Our Project" currentPage="portfolio" />

            <section className="portfolio-section">
                <div className="container">

                    {/* FILTER BUTTONS */}
                    <div className="row mb-5">
                        <div className="col-12 text-center">
                            <div className="portfolio-filters">

                                <button
                                    className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
                                    onClick={() => setActiveFilter("all")}
                                >
                                    All Projects
                                </button>

                                <button
                                    className={`filter-btn ${activeFilter === "ai" ? "active" : ""}`}
                                    onClick={() => setActiveFilter("ai")}
                                >
                                    AI Solutions
                                </button>

                                <button
                                    className={`filter-btn ${activeFilter === "automation" ? "active" : ""}`}
                                    onClick={() => setActiveFilter("automation")}
                                >
                                    Automation
                                </button>

                                <button
                                    className={`filter-btn ${activeFilter === "analytics" ? "active" : ""}`}
                                    onClick={() => setActiveFilter("analytics")}
                                >
                                    Analytics
                                </button>

                                <button
                                    className={`filter-btn ${activeFilter === "security" ? "active" : ""}`}
                                    onClick={() => setActiveFilter("security")}
                                >
                                    Security
                                </button>

                            </div>
                        </div>
                    </div>

                    {/* PORTFOLIO GRID */}
                    <div className="row g-4 portfolio-grid">

                        {/* AI PROJECT 1 */}
                        <div
                            className={`col-lg-4 col-md-6 portfolio-item ${activeFilter !== "all" && activeFilter !== "ai" ? "hide" : ""
                                }`}
                        >
                            <div className="portfolio-card">
                                <div className="portfolio-image">
                                    <img src="https://www.cloudwapp.com/public/assets/img/img1.png" alt="project1" />
                                    <div className="portfolio-overlay">
                                        <span className="portfolio-icon">
                                            <i className="bi bi-arrow-up-right"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="portfolio-content">
                                    <span className="portfolio-category">AI Solutions</span>
                                    <h3 className="portfolio-title">Predictive Financial Analytics</h3>

                                </div>
                            </div>
                        </div>

                        {/* AI PROJECT 2 */}
                        <div
                            className={`col-lg-4 col-md-6 portfolio-item ${activeFilter !== "all" && activeFilter !== "ai" ? "hide" : ""
                                }`}
                        >
                            <div className="portfolio-card">
                                <div className="portfolio-image">
                                    <img src="https://www.cloudwapp.com/public/assets/img/img5.png" alt="project1" />
                                    <div className="portfolio-overlay">
                                        <span className="portfolio-icon">
                                            <i className="bi bi-arrow-up-right"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="portfolio-content">
                                    <span className="portfolio-category">AI Solutions</span>
                                    <h3 className="portfolio-title">Healthcare Diagnostics AI</h3>

                                </div>
                            </div>
                        </div>

                        {/* AUTOMATION */}
                        <div
                            className={`col-lg-4 col-md-6 portfolio-item ${activeFilter !== "all" && activeFilter !== "automation" ? "hide" : ""
                                }`}
                        >
                            <div className="portfolio-card">
                                <div className="portfolio-image">
                                    <img src="https://www.cloudwapp.com/public/assets/img/img2.png" alt="project2" />
                                    <div className="portfolio-overlay">
                                        <span className="portfolio-icon">
                                            <i className="bi bi-arrow-up-right"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="portfolio-content">
                                    <span className="portfolio-category">Automation</span>
                                    <h3 className="portfolio-title">Supply Chain Optimization</h3>

                                </div>
                            </div>
                        </div>

                        {/* ANALYTICS */}
                        <div
                            className={`col-lg-4 col-md-6 portfolio-item ${activeFilter !== "all" && activeFilter !== "analytics" ? "hide" : ""
                                }`}
                        >
                            <div className="portfolio-card">
                                <div className="portfolio-image">
                                    <img src="https://www.cloudwapp.com/public/assets/img/img3.png" alt="project4" />
                                    <div className="portfolio-overlay">
                                        <span className="portfolio-icon">
                                            <i className="bi bi-arrow-up-right"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="portfolio-content">
                                    <span className="portfolio-category">Analytics</span>
                                    <h3 className="portfolio-title">E-commerce Personalization</h3>

                                </div>
                            </div>
                        </div>

                        {/* SECURITY */}
                        <div
                            className={`col-lg-4 col-md-6 portfolio-item ${activeFilter !== "all" && activeFilter !== "security" ? "hide" : ""
                                }`}
                        >
                            <div className="portfolio-card">
                                <div className="portfolio-image">
                                    <img src="https://www.cloudwapp.com/public/assets/img/img4.png" alt="project3" />
                                    <div className="portfolio-overlay">
                                        <span className="portfolio-icon">
                                            <i className="bi bi-arrow-up-right"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="portfolio-content">
                                    <span className="portfolio-category">Security</span>
                                    <h3 className="portfolio-title">Threat Detection System</h3>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default PortfolioPage;
