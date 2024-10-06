import { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import HomeOne from "./pages/Homes/HomeOne";
import WOW from "wow.js";
import AOS from "aos";
import HomeTwo from "./pages/Homes/HomeTwo";
import HomeThree from "./pages/Homes/HomeThree";
import HomeFour from "./pages/Homes/HomeFour";
import AboutUsPage from "./pages/AboutUsPage";
import ServicesPageOne from "./pages/Services/ServicesPageOne";
import ServicesPageTwo from "./pages/Services/ServicesPageTwo";
import ServicesDetailsPage from "./pages/Services/ServicesDetailsPage";
import ProjectPageOne from "./pages/Projects/ProjectPageOne";
import ProjectPageTwo from "./pages/Projects/ProjectPageTwo";
import ProjectDetailsPage from "./pages/Projects/ProjectDetailsPage";
import TeamPage from "./pages/TeamPages/TeamPage";
import TeamDetailsPage from "./pages/TeamPages/TeamDetailsPage";
import EstimatePage from "./pages/EstimatePage";
import ShopPage from "./pages/ShopPages/ShopPage";
import ShopDetailsPage from "./pages/ShopPages/ShopDetailsPage";
import BlogPage from "./pages/BlogPages/BlogPage";
import BlogListPage from "./pages/BlogPages/BlogListPage";
import BlogDetailsPage from "./pages/BlogPages/BlogDetailsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  // wow js scroll
  useEffect(() => {
    const wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: false,
      live: true,
    });
    wow.init();
  }, []);

  // aos scroll
  useEffect(() => {
    AOS.init({ duration: 1000, mirror: true, once: true, disable: "mobile" });
  }, []);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return (
    <>
     

      <Routes>
        <Route path="/" element={<HomeOne />} />
        <Route path="/home-2" element={<HomeTwo />} />
        <Route path="/home-3" element={<HomeThree />} />
        <Route path="/home-4" element={<HomeFour />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPageOne />} />
        <Route path="/services-2" element={<ServicesPageTwo />} />
        <Route path="/services-details" element={<ServicesDetailsPage />} />
        <Route path="/project" element={<ProjectPageOne />} />
        <Route path="/project-two" element={<ProjectPageTwo />} />
        <Route path="/project-details" element={<ProjectDetailsPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/team-details" element={<TeamDetailsPage />} />
        <Route path="/estimate" element={<EstimatePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop-details" element={<ShopDetailsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog-list" element={<BlogListPage />} />
        <Route path="/blog-details" element={<BlogDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
