import { useEffect, useState } from "react";
import { getVacancies } from "../api/career";

const STATIC_VACANCIES = [
  {
    id: 1,
    job_name: "Frontend Developer",
    open_roles: 2,
    experience: "0-2 Years",
  },
  {
    id: 2,
    job_name: "Flutter Developer",
    open_roles: 2,
    experience: "0-4 Years",
  },
  {
    id: 3,
    job_name: "Laravel Developer",
    open_roles: 5,
    experience: "0-2 Years",
  },
];

const CareersTimeline = () => {
  const [vacancies, setVacancies] = useState(STATIC_VACANCIES);

  useEffect(() => {
    const fetchVacancies = async () => {
      try {
        const data = await getVacancies();

        if (Array.isArray(data) && data.length > 0) {
          // only show active jobs
          const activeJobs = data.filter((job) => job.is_active);
          setVacancies(activeJobs);
        }
      } catch (error) {
        console.error("Vacancy API failed, using static data");
      }
    };

    fetchVacancies();
  }, []);

  return (
    <section className="service-details-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="process-timeline">
              {vacancies.map((job, index) => (
                <div className="timeline-item" key={job.id}>
                  <div className="timeline-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="timeline-content">
                    <h4 className="d-flex gap-2 align-items-center">
                      {job.job_name}
                      <p>({job.open_roles} open roles)</p>
                    </h4>
                    <p>Ex. {job.experience}</p>
                  </div>

                  <div className="timelinebutton">
                    <a href="#career-form">Apply</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersTimeline;
