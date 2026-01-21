import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import "./App.css";

import ProtectedRoute from "./routes/ProtectedRoute";

// Layout
import Header from "./layout/Header";
import Footer from "./layout/Footer";

// Pages
import Homepage from "./page/Home";
import Careers from "./page/Careers";
import AboutPage from "./page/AboutPage";
import ServicesPage from "./page/Services";
import ServiceDetailPage from "./page/ServiceDetailPage";
import BlogPage from "./page/Blog";
import BlogDetailPage from "./page/BlogDetailPage";
import ContactPage from "./page/Contact";
import PortfolioPage from "./page/Portfolio";

// Hooks
import ScrollToTop from "./hook/scrooltop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <>
      <Header />
      <ScrollToTop />

      {/* 🔔 Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />

      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/servicesdetailpage/:id" element={<ServiceDetailPage />} />
          <Route path="/blogdetailpage/:id" element={<BlogDetailPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Route>
      </Routes>


      <Footer />
    </>
  );
}

export default App;
