import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getServiceById } from "../api/service";
import ServiceSidebar from "../component/Service/ServiceSidebar";

const ServiceDetailpage = () => {
  const Navigate = useNavigate();
  const { id } = useParams();

  const [service, setService] = useState(null);

  useEffect(() => {
    fetchService();
  }, [id]);

  const fetchService = async () => {
    try {
      const data = await getServiceById(id);
      setService(data);
    } catch (error) {
      console.error("Service fetch failed", error);
    }
  };

  if (!service) return <p className="text-center">Loading...</p>;

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
                    src={`${import.meta.env.VITE_API_BASE_URL_FOR_IMAGES}/${service.image}`}
                    alt="service"
                  />
                </div>

                {/* TITLE */}
                <h2>{service.short_description}</h2>

                {/* DESCRIPTION (HTML from API) */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: service.description,
                  }}
                />

                {/* 🔒 STATIC SECTION (NO CHANGE) */}
                <h3>Our Process</h3>
                <div className="process-timeline">
                  <div className="timeline-item">
                    <div className="timeline-number">01</div>
                    <div className="timeline-content">
                      <h4>Discovery & Assessment</h4>
                      <p>
                        We analyze your current processes, data infrastructure,
                        and business goals to identify AI opportunities.
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-number">02</div>
                    <div className="timeline-content">
                      <h4>Solution Design</h4>
                      <p>
                        Our experts design a custom AI architecture tailored to
                        your specific requirements.
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-number">03</div>
                    <div className="timeline-content">
                      <h4>Development & Training</h4>
                      <p>
                        We build and train AI models using your data, iterating
                        until optimal performance is achieved.
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-number">04</div>
                    <div className="timeline-content">
                      <h4>Deployment & Integration</h4>
                      <p>
                        Seamless integration with your existing systems and
                        ongoing support for continued success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDEBAR (UNCHANGED) */}
            {/* <div className="col-lg-4">
              <div className="service-sidebar">
                <div className="sidebar-card">
                  <h4>All Services</h4>
                  <ul className="service-list">
                    <li className="active">
                      <i className="bi bi-cpu"></i> Custom AI Solution
                    </li>
                    <li>
                      <i className="bi bi-bar-chart-line"></i> Data Analytics
                    </li>
                    <li>
                      <i className="bi bi-gear-wide-connected"></i> Process Automation
                    </li>
                    <li>
                      <i className="bi bi-chat-dots"></i> Conversational AI
                    </li>
                    <li>
                      <i className="bi bi-shield-check"></i> AI Security
                    </li>
                    <li>
                      <i className="bi bi-graph-up-arrow"></i> Predictive Analytics
                    </li>
                  </ul>
                </div>

                <div className="sidebar-card sidebar-cta">
                  <h4>Ready to Get Started?</h4>
                  <a
                    onClick={() => Navigate("/contact")}
                    className="btn btn-cta-primary w-100"
                  >
                    Book Consultation
                  </a>
                </div>
              </div>
            </div> */}

            <ServiceSidebar />
            {/* END */}

          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailpage;
