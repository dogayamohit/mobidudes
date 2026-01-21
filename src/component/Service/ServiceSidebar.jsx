import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getServiceCategories } from "../../api/service";

const ServiceSidebar = () => {
    const navigate = useNavigate();
    const [services, setServices] = useState([]);
    const [activeId, setActiveId] = useState(null);

    useEffect(() => {
        const fetchServices = async () => {
            const data = await getServiceCategories();
            setServices(data);
            if (data.length) setActiveId(data[0].id);
        };
        fetchServices();
    }, []);

    return (
        <div className="col-lg-4">
            <div className="service-sidebar">
                <div className="sidebar-card">
                    <h4>All Service Category</h4>

                    <ul className="service-list">
                        {services.map((item) => (
                            <li
                                key={item.id}
                                className={activeId === item.id ? "active" : ""}
                                onClick={() => setActiveId(item.id)}
                            >
                                <i className="bi bi-briefcase"></i>
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="sidebar-card sidebar-cta">
                    <h4>Ready to Get Started?</h4>
                    <button
                        onClick={() => navigate("/contact")}
                        className="btn btn-cta-primary w-100"
                    >
                        Book Consultation
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceSidebar;
