import { useEffect } from "react"
import casestudy1 from "../assets/img/case-study-1.jpg"
import casestudy2 from "../assets/img/case-study-2.jpg"
import casestudy3 from "../assets/img/case-study-3.jpg"
import casestudy4 from "../assets/img/case-study-4.jpg"
import { useNavigate } from "react-router-dom"
import PageHeader from "../layout/PageHeader"
let Blogpage = () => {
    let Navigate = useNavigate()
    useEffect(() => {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        const noResultDiv = document.getElementById("no-results");

        filterBtns.forEach((btn) => {
            btn.addEventListener("click", function () {
                // Remove active class
                filterBtns.forEach(b => b.classList.remove("active"));
                this.classList.add("active");

                const filter = this.getAttribute("data-filter");

                let visibleCount = 0;

                portfolioItems.forEach((item) => {
                    const match = filter === "all" || item.getAttribute("data-category") === filter;

                    if (match) {
                        item.style.display = "block";
                        setTimeout(() => {
                            item.style.opacity = "1";
                            item.style.transform = "translateY(0)";
                        }, 50);
                        visibleCount++;
                    } else {
                        item.style.opacity = "0";
                        item.style.transform = "translateY(20px)";
                        setTimeout(() => {
                            item.style.display = "none";
                        }, 300);
                    }
                });

                // Show / Hide No Results
                setTimeout(() => {
                    if (visibleCount === 0) {
                        noResultDiv.style.display = "block";
                    } else {
                        noResultDiv.style.display = "none";
                    }
                }, 350);
            });
        });
    }, []);

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

            {/* // < !--Portfolio Filter-- > */}
            <section className="portfolio-section">
                <div className="container">
                    {/* Filter Buttons */}
                    <div className="row mb-5">
                        <div className="col-12 text-center" data-aos="fade-up">
                            <div className="portfolio-filters">
                                <button className="filter-btn active" data-filter="all">All Blogs</button>
                                <button className="filter-btn" data-filter="ai">AI Solutions</button>
                                <button className="filter-btn" data-filter="automation">Automation</button>
                                <button className="filter-btn" data-filter="analytics">Analytics</button>
                                <button className="filter-btn" data-filter="security">Security</button>
                            </div>
                        </div>
                    </div>

                    {/* Portfolio Grid */}
                    <div className="row g-4 portfolio-grid">

                        {/* Project 1 */}
                        <div
                            className="col-lg-4 col-md-6 portfolio-item"
                            data-category="ai"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <a className="portfolio-card" onClick={() => Navigate("/blogdetailpage")}>
                                <div className="portfolio-image">
                                    <img
                                        src="https://cloudwapp.com/public/uploads/blog/1755153709_representation-user-experience-interface-design-min.jpg"
                                        alt="blogimg"
                                    />
                                    <div className="portfolio-overlay">
                                        <span className="portfolio-icon">
                                            <i className="bi bi-arrow-up-right"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="portfolio-content">
                                    <div className="d-flex justify-content-between">
                                        <span className="portfolio-category">14 Aug 25</span>
                                        <span className="portfolio-category">Growth</span>

                                    </div>


                                    <h3 className="portfolio-title"> Why Mobile Apps Are Necessary for Business Growth in Today’s Digital Era </h3>
                                    <p className="portfolio-desc text-line-clamp-2">
                                        In today’s fast-paced digital world, businesses are constantly seeking innovative ways to connect with customers, streamline operations, and stay ahead of the competition. One of the most effective tools for achieving these goals is a mobile app . With billions of smartphone users worldwide, mobile applications have become more than just a trend — they are now a necessity for businesses of all sizes.
                                    </p>


                                    {/* Load More */}
                                    <div className="row ">
                                        <div className="col-12 " data-aos="fade-up">
                                            <button className="btn btn-load-more" onClick={() => Navigate("/blogdetailpage")}>
                                                Read More
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </a>
                        </div>
                    </div>

                    <div id="no-results" className="noblogresults">
                        <h3>No Blog Found</h3>
                        <p>Please check back later for new updates.</p>
                    </div>

                </div>
            </section>

        </>
    )
}
export default Blogpage;