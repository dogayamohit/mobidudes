import React from 'react'

export const ServiceDetailpage = () => {
    return (
        <>
            <section className="careers-intro-section">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-12" data-aos="fade-left">
                            <div className="careers-image-wrapper  blogdetailimg">
                                <img src="https://cloudwapp.com/public/uploads/blog/1755153709_representation-user-experience-interface-design-min.jpg" alt="blogdetailimg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Process Section --> */}
            <section className="process-section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12 text-center" data-aos="fade-up">

                            <h2 className="section-title-italic">Our workflow
                                strategy</h2>
                            <span className="section-subtitle">Our workflow strategy ensures a seamless process from concept to execution. We focus on efficiency, creativity, and precision to deliver outstanding results for every project.</span>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
                            <div className="process-card">
                                <div className="process-number">01</div>
                                <h4 className="process-title">Ideation phase</h4>
                                <p className="process-desc text-line-clamp-4 ">We begin by brainstorming and refining creative ideas that align with your brand vision. This phase sets the foundation for a strategic and impactful execution.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="process-card">
                                <div className="process-number">02</div>
                                <h4 className="process-title">Planning & strategy</h4>
                                <p className="process-desc">A well-defined roadmap ensures smooth project execution. We focus on research, goal-setting, and structuring a clear strategy tailored to your objectives.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
                            <div className="process-card">
                                <div className="process-number">03</div>
                                <h4 className="process-title">Execution & development</h4>
                                <p className="process-desc">Bringing ideas to life with precision and creativity. Our team works on design, development, and content creation while ensuring quality and consistency.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
                            <div className="process-card">
                                <div className="process-number">04</div>
                                <h4 className="process-title">Review & optimization</h4>
                                <p className="process-desc">We analyze results, gather feedback, and make refinements to enhance performance. Continuous improvement ensures long-term success and effectiveness.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
export default ServiceDetailpage;
