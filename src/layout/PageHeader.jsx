import React from "react";
import { useNavigate } from "react-router-dom";

const PageHeader = ({ title, currentPage }) => {
    const navigate = useNavigate();

    return (
        <section className="page-header">
            <div className="page-header-bg"></div>

            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">

                        <h1 className="page-title" data-aos="fade-up">
                            {title}
                        </h1>

                        <nav aria-label="breadcrumb" data-aos="fade-up" data-aos-delay="100">
                            <ol className="breadcrumb justify-content-center">

                                <li
                                    className="breadcrumb-item"
                                    onClick={() => navigate("/")}
                                    style={{ cursor: "pointer" }}
                                >
                                    Home
                                </li>

                                <li
                                    className="breadcrumb-item active"
                                    onClick={() => navigate(`/${currentPage.toLowerCase()}`)}
                                    style={{ cursor: "pointer" }}
                                >
                                    {currentPage}
                                </li>

                            </ol>
                        </nav>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageHeader;
