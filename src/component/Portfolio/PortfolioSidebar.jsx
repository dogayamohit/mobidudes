import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getPortfolioCategories } from "../../api/portfolio";

const PortfolioSidebar = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const [categories, setCategories] = useState([]);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getPortfolioCategories();
      setCategories(data);

      const urlCategory = searchParams.get("category");

      if (urlCategory) {
        setActiveId(Number(urlCategory));
      } else if (data.length) {
        setActiveId(data[0].id);
        setSearchParams({ category: data[0].id });
      }
    };

    fetchCategories();
  }, []);

  const handleClick = (id) => {
    setActiveId(id);
    setSearchParams({ category: id });
  };

  return (
    <div className="col-lg-4">
      <div className="service-sidebar">
        <div className="sidebar-card">
          <h4>Portfolio Categories</h4>

          <ul className="service-list">
            {categories.map((item) => (
              <li
                key={item.id}
                className={activeId === item.id ? "active" : ""}
                onClick={() => handleClick(item.id)}
              >
                <i className="bi bi-folder"></i>
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar-card sidebar-cta">
          <h4>Have a Project?</h4>
          <button
            onClick={() => navigate("/contact")}
            className="btn btn-cta-primary w-100"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSidebar;
