import { useEffect, useState } from "react";
import { getServices } from "../../api/service";
import { useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_API_BASE_URL_FOR_IMAGES;

const getIconUrl = (path) => {
    if (!path) return null;
    return `${import.meta.env.VITE_API_BASE_URL_FOR_IMAGES}/${path}`;
};


const ServicesCard = () => {
    const [services, setServices] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getServices()
            .then((data) => {
                const activeServices = data
                    .filter((s) => s.is_active)
                    .map((s) => ({
                        ...s,
                        icon: s.service_category?.icon
                            ? getIconUrl(s.service_category.icon)
                            : null,
                    }));

                setServices(activeServices);
            })
            .catch(() => console.error("Failed to load services"));
    }, []);


    return (
        <section className="services-page-section">
            <div className="container">
                <div className="row g-4 justify-content-center">

                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className="col-lg-4 col-md-6"
                            data-aos="fade-up"
                            data-aos-delay={(index + 1) * 100}
                        >
                            <div className="service-page-card">

                                {/* ICON */}
                                <div className="service-page-icon">
                                    {service.icon && (
                                        <img
                                            src={service.icon}
                                            alt={service.service_category?.name || "Service Icon"}
                                        />
                                    )}
                                </div>


                                {/* TITLE */}
                                <h3 className="service-page-title">
                                    {service.service_category.name}
                                </h3>

                                {/* DESCRIPTION */}
                                <p className="service-page-desc text-line-clamp-4">
                                    {service.short_description}
                                </p>

                                {/* LINK */}
                                <a
                                    className="service-page-link"
                                    onClick={() =>
                                        navigate(`/servicesdetailpage/${service.id}`)
                                    }
                                >
                                    Learn More <i className="bi bi-arrow-right"></i>
                                </a>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default ServicesCard;
