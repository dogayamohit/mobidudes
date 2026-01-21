import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../layout/PageHeader";
import { getBlogCategories, getBlogs } from "../api/blog";

const Blogpage = () => {
    const navigate = useNavigate();

    const [categories, setCategories] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [activeCategory, setActiveCategory] = useState("all");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const catData = await getBlogCategories();
        const blogData = await getBlogs();

        setCategories(catData);
        setBlogs(blogData);
    };

    const filteredBlogs =
        activeCategory === "all"
            ? blogs
            : blogs.filter((b) => b.category_id === activeCategory);

    const stripHtml = (html) => {
        const div = document.createElement("div");
        div.innerHTML = html;
        return div.textContent || div.innerText || "";
    };


    return (
        <>
            <PageHeader title="Our Blog" currentPage="Blog" />
            <section className="careers-intro-section">
                <div className="container">
                    <div className="row justify-content-center ">
                        <div className="col-lg-6" data-aos="fade-right">

                            <h2 className="section-title-large"> Digital Solutions for a Smarter Future
                            </h2>
                            <p className="section-title-pera ">
                                Welcome to our digital insights hub, where we share the latest trends, expert tips, and strategies in mobile app development, website design and development, UI/UX design, and digital marketing. Our goal is to keep businesses like yours informed about cutting-edge innovations, best practices, and actionable ideas that drive growth and improve digital performance.

                            </p>
                            <p className="section-title-pera ">
                                Stay updated with expert advice on creating engaging websites, designing intuitive user interfaces, and developing mobile apps that deliver exceptional experiences. We also cover digital marketing strategies to help your brand reach the right audience, increase visibility, and achieve measurable results.

                            </p>
                            <p className="section-title-pera ">
                                Whether you’re looking to optimize your online presence, enhance customer experiences, or leverage new digital technologies, our blog provides insights and guidance to help your business stay ahead in the fast-paced digital world. Explore our articles to learn how innovative solutions in design, development, and marketing can transform your business and drive long-term success.


                            </p>

                            {/* <div className="careers-benefits">
                                <div className="benefit-item"><i className="bi bi-check-circle-fill"></i><span>Remote-First Culture</span></div>
                                <div className="benefit-item"><i className="bi bi-check-circle-fill"></i><span>Health & Wellness Benefits</span></div>
                                <div className="benefit-item"><i className="bi bi-check-circle-fill"></i><span>Learning & Development Budget</span></div>
                                <div className="benefit-item"><i className="bi bi-check-circle-fill"></i><span>Flexible Working Hours</span></div>
                                <div clclassName="benefit-item"><i className="bi bi-check-circle-fill"></i><span>Competitive Salary & Equity</span></div>
                                <div assName="benefit-item"><i className="bi bi-check-circle-fill"></i><span>Team Building Events</span></div>
                            </div> */}
                        </div>
                        <div className="col-lg-6" data-aos="fade-left">
                            <div className="careers-image-wrapper">
                                <img src="https://cloudwapp.com/public/uploads/blog/imageblog.jpeg" alt="blogimgmain" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* FILTER SECTION */}
            <section className="portfolio-section">
                <div className="container">

                    {/* Filter Buttons */}
                    <div className="row mb-5">
                        <div className="col-12 text-center">
                            <div className="portfolio-filters">
                                <button
                                    className={`filter-btn ${activeCategory === "all" ? "active" : ""}`}
                                    onClick={() => setActiveCategory("all")}
                                >
                                    All Blogs
                                </button>

                                {categories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        className={`filter-btn ${activeCategory === cat.id ? "active" : ""}`}
                                        onClick={() => setActiveCategory(cat.id)}
                                    >
                                        {cat.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* BLOG GRID */}
                    <div className="row g-4 portfolio-grid">
                        {filteredBlogs.length > 0 ? (
                            filteredBlogs.map((blog) => (
                                <div key={blog.id} className="col-lg-4 col-md-6 portfolio-item">
                                    <div
                                        className="portfolio-card"
                                        onClick={() => navigate(`/blogdetailpage/${blog.id}`)}
                                    >
                                        <div className="portfolio-image">
                                            <img
                                                src={`${import.meta.env.VITE_API_BASE_URL_FOR_IMAGES}/${blog.image?.split(",")[0]?.trim() || "assets/default-blog.jpg"
                                                    }`}
                                                alt={blog.title}
                                            />


                                            <div className="portfolio-overlay">
                                                <span className="portfolio-icon">
                                                    <i className="bi bi-arrow-up-right"></i>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="portfolio-content">
                                            <div className="d-flex justify-content-between">
                                                <span className="portfolio-category">
                                                    {new Date(blog.createdAt).toDateString()}
                                                </span>
                                                <span className="portfolio-category">
                                                    {blog.category?.name}
                                                </span>
                                            </div>

                                            <h3 className="portfolio-title">{blog.title}</h3>

                                            <p className="portfolio-desc text-line-clamp-2">
                                                {stripHtml(blog.description)}
                                            </p>


                                            <button className="btn btn-load-more">
                                                Read More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div id="no-results" className="noblogresults">
                                <h3>No Blog Found</h3>
                                <p>Please check back later for new updates.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blogpage;