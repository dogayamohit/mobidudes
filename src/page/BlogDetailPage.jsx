import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBlogById } from "../api/blog";
import BlogSidebar from "../component/Blog/BlogSidebar";

const BlogDetailpage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetchBlog();
  }, [id]);

  const fetchBlog = async () => {
    try {
      const data = await getBlogById(id);
      setBlog(data);
    } catch (error) {
      console.error("Blog fetch failed", error);
    }
  };

  if (!blog) return <p className="text-center">Loading...</p>;

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
                    src={`${import.meta.env.VITE_API_BASE_URL_FOR_IMAGES}/${
                      blog.image?.split(",")[0]
                    }`}
                    alt={blog.title}
                  />
                </div>

                {/* TITLE */}
                <h2>{blog.title}</h2>

                {/* DESCRIPTION (HTML from API) */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: blog.description,
                  }}
                />

              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <BlogSidebar />

          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailpage;
