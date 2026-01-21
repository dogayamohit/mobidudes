import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBlogCategories } from "../../api/blog";

const BlogSidebar = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getBlogCategories();
      setCategories(data);
      if (data.length) setActiveId(data[0].id);
    };
    fetchCategories();
  }, []);

  return (
    <div className="col-lg-4">
      <div className="service-sidebar">
        <div className="sidebar-card">
          <h4>All Blog Categories</h4>

          <ul className="service-list">
            {categories.map((item) => (
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

export default BlogSidebar;
