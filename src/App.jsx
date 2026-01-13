import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import "./App.css";

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

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/servicesdetailpage" element={<ServiceDetailPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blogdetailpage" element={<BlogDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
