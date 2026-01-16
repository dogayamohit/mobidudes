import React from 'react'
import { useNavigate } from 'react-router-dom';
export const ServiceDetailpage = () => {
    let Navigate = useNavigate()
    return (
        <>
            
            <div className="serviceDetailpage">
                <section className="service-details-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="service-detail-content" data-aos="fade-up">
                                    <div className="service-detail-image">
                                        <img src="https://cloudwapp.com/public/uploads/blog/1755153709_representation-user-experience-interface-design-min.jpg" />
                                    </div>
 
                                    <h2>Tailored AI Systems for Your Business</h2>
                                    <p>Our Custom AI Solutions are designed from the ground up to address your specific business challenges. We don't believe in one-size-fits-all approaches—every solution we create is uniquely crafted to maximize value for your organization.</p>
 
                                    <p>Our team of expert data scientists, machine learning engineers, and AI strategists work closely with you to understand your business objectives, data landscape, and technical requirements before designing a solution that delivers measurable results.</p>
 
 
 
                                    <h3>Our Process</h3>
                                    <div className="process-timeline">
                                        <div className="timeline-item">
                                            <div className="timeline-number">01</div>
                                            <div className="timeline-content">
                                                <h4>Discovery & Assessment</h4>
                                                <p>We analyze your current processes, data infrastructure, and business goals to identify AI opportunities.</p>
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <div className="timeline-number">02</div>
                                            <div className="timeline-content">
                                                <h4>Solution Design</h4>
                                                <p>Our experts design a custom AI architecture tailored to your specific requirements.</p>
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <div className="timeline-number">03</div>
                                            <div className="timeline-content">
                                                <h4>Development & Training</h4>
                                                <p>We build and train AI models using your data, iterating until optimal performance is achieved.</p>
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <div className="timeline-number">04</div>
                                            <div className="timeline-content">
                                                <h4>Deployment & Integration</h4>
                                                <p>Seamless integration with your existing systems and ongoing support for continued success.</p>
                                            </div>
                                        </div>
                                    </div>
 
 
                                </div>
                            </div>
 
                            <div className="col-lg-4">
                                <div className="service-sidebar">
                                    <div className="sidebar-card">
                                        <h4>All Services</h4>
                                        <ul className="service-list">
                                            <li className="active"><i className="bi bi-cpu"></i> Custom AI Solution</li>
                                            <li ><i className="bi bi-bar-chart-line"></i> Data Analytics</li>
                                            <li><i className="bi bi-gear-wide-connected"></i> Process Automation</li>
                                            <li><i className="bi bi-chat-dots"></i> Conversational AI</li>
                                            <li><i className="bi bi-shield-check"></i> AI Security</li>
                                            <li><i className="bi bi-graph-up-arrow"></i> Predictive Analytics</li>
                                        </ul>
                                    </div>
 
                                    <div className="sidebar-card sidebar-cta">
                                        <h4>Ready to Get Started?</h4>
                                        <a onClick={() => Navigate("/contact")} className="btn btn-cta-primary w-100">Book Consultation</a>
                                    </div>
 
 
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
 
        </>
    )
}
export default ServiceDetailpage;
 
 