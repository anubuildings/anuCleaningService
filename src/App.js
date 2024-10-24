import { useEffect } from "react";
import { useLocation, Routes, Route, Navigate } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import HomeOne from "./pages/Homes/HomeOne";
import WOW from "wow.js";
import AOS from "aos";
import AboutUsPage from "./pages/AboutUsPage";
import ServicesPageOne from "./pages/Services/ServicesPageOne";
import EstimatePage from "./pages/EstimatePage";
import ContactPage from "./pages/ContactPage";
import ApartmentCleaning from "./pages/Services/ApartmentCleaning";
import PostConstructionPage from "./pages/Services/postconstruction";
import OfficeCleaning from "./pages/Services/OfficeCleaning";
import CondominiumsMaintenance from "./pages/Services/CondominiumsMaintenance";
import Commercial from "./pages/Services/commercial";
import Retail from "./pages/Services/retail";
import Carpet from "./pages/Services/carpet";
import Stamcarpet from "./pages/Services/stam-carpet";
import Waxing from "./pages/Services/waxing";
import Parking from "./pages/Services/parking";
import Janitorial from "./pages/Services/janitorial";
import Testimonial from "./pages/Testimonial";
import Error from "./pages/Error";


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
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPageOne />} />
        <Route path="/postconstruction" element={<PostConstructionPage />} />
        <Route path="/ApartmentCleaning" element={<ApartmentCleaning />} />
        <Route path="/OfficeCleaning" element={<OfficeCleaning />} />
        <Route path="/estimate" element={<EstimatePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/CondominiumsMaintenance" element={<CondominiumsMaintenance />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/retail" element={<Retail />} />
        <Route path="/carpet" element={<Carpet />} />
        <Route path="/stamcarpet" element={<Stamcarpet />} />
        <Route path="/waxing" element={<Waxing />} />
        <Route path="/parking" element={<Parking />} />
        <Route path="/janitorial" element={<Janitorial />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/error" element={<Error />} />

        {/* Redirect to Error page for unknown routes */}
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
    </>
  );
}

export default App;
