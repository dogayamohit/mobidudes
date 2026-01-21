import { useEffect, useState } from "react";
import PageHeader from "../layout/PageHeader";
import { getPortfolio, getPortfolioCategories } from "../api/portfolio";

const IMAGE_BASE_URL = "https://cloudwapptechnologies.com/mobidudes/api/";

const PortfolioPage = () => {
    const [categories, setCategories] = useState([]);
    const [portfolios, setPortfolios] = useState([]);
    const [activeFilter, setActiveFilter] = useState("all");
    const [loading, setLoading] = useState(true);

    /* ---------------- FETCH DATA ---------------- */
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [categoryRes, portfolioRes] = await Promise.all([
                    getPortfolioCategories(),
                    getPortfolio(),
                ]);

                setCategories(categoryRes);
                setPortfolios(portfolioRes);
            } catch (error) {
                console.error("Error fetching portfolio data", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    /* ---------------- FILTER LOGIC ---------------- */
    const filteredPortfolios =
        activeFilter === "all"
            ? portfolios
            : portfolios.filter(
                (item) => item.category_id === activeFilter
            );


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

    return (
        <>
            <PageHeader title="Our Project" currentPage="Portfolio" />

            <section className="portfolio-section">
                <div className="container">

                    {/* FILTER BUTTONS */}
                    <div className="row mb-5">
                        <div className="col-12 text-center">
                            <div className="portfolio-filters">

                                <button
                                    className={`filter-btn ${activeFilter === "all" ? "active" : ""
                                        }`}
                                    onClick={() => setActiveFilter("all")}
                                >
                                    All Projects
                                </button>

                                {categories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        className={`filter-btn ${activeFilter === cat.id
                                                ? "active"
                                                : ""
                                            }`}
                                        onClick={() => setActiveFilter(cat.id)}
                                    >
                                        {cat.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* PORTFOLIO GRID */}
                    <div className="row g-4 portfolio-grid">

                        {loading && (
                            <p className="text-center">Loading projects...</p>
                        )}

                        {!loading && filteredPortfolios.length === 0 && (
                            <p className="text-center">
                                No projects found
                            </p>
                        )}

                        {!loading &&
                            filteredPortfolios.map((item) => (
                                <div
                                    key={item.id}
                                    className="col-lg-4 col-md-6 portfolio-item"
                                >
                                    <div className="portfolio-card">
                                        <div className="portfolio-image">
                                            <img
                                                src={`${IMAGE_BASE_URL}${item.image}`}
                                                alt={item.title}
                                            />
                                            <div className="portfolio-overlay">
                                                {getPortfolioLinks(item).map((link, index) => (
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

                                        <div className="portfolio-content">
                                            <span className="portfolio-category">
                                                {item.portfolio_category?.name}
                                            </span>
                                            <h3 className="portfolio-title">
                                                {item.title}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default PortfolioPage;
