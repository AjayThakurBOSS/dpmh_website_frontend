import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollToTop from './util/ScrollToTop'
import MainNavbar from './components/MainNavbar';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import DrPrabhatSir from './components/DrPrabhatSir';
import AboutUsComponent from './components/AboutUsComponent';
import CenterofExcellance from './components/CenterofExcellance';
import FreeTreatment from './components/FreeTreatment';
import DoctorSlider from './components/DoctorSlider';
import Testimonials from './components/Testimonials';
import CancerCare from './components/CancerCare';
import TPASlider from './components/TPASlider';
import styled from 'styled-components';
import DirImg from '../src/assets/directorImg.png'
import Aboutus from './pages/Aboutus';
import ContactUs from './pages/ContactUs';
import ServicesPage from './pages/ServicesPage';
import Career from './pages/Career';
import BlogsPage from './pages/BlogsPage';
import GalleryPage from './pages/GalleryPage';
import OnlineAppointment from './pages/appointment/OnlineAppointment';
import OnlineAppointment2 from './pages/appointment/OnlineAppointment2';
import DoctorPage from './pages/DoctorPage';
import Cardiology from './pages/centerOfExcellence/Cardiology';
import Emergency from './pages/centerOfExcellence/Emergency';
import Nephrology from './pages/centerOfExcellence/Nephrology';
import Gynecology from './pages/centerOfExcellence/Gynecology';
import Orthopedic from './pages/centerOfExcellence/Orthopedic';
import Gastroenteorology from './pages/centerOfExcellence/Gastroenteorology';
import Neurology from './pages/centerOfExcellence/Neurology';
import Paediatrics from './pages/centerOfExcellence/Paediatrics';
import NeuroSurgery from './pages/centerOfExcellence/NeuroSurgery';
import Oncology from './pages/centerOfExcellence/Oncology';
import GeneralMedicine from './pages/centerOfExcellence/GeneralMedicine';
import GeneralSurgery from './pages/centerOfExcellence/GeneralSurgery';
import LaproscopicSurgery from './pages/centerOfExcellence/LaproscopicSurgery';
import Urology from './pages/centerOfExcellence/Urology';
import Pulmonology from './pages/centerOfExcellence/Pulmonology';
import TraumaCarePage from './pages/centerOfExcellence/TraumaCarePage';
import CriticalCarePage from './pages/centerOfExcellence/CriticalCarePage';
import Sitemap from './util/Sitemap';
import FacilitiesForHomePage from './components/FacilitiesForHomePage';
import AppointmentPage from './pages/appointment/AppointmentPage';

import LogoImg from './assets/logo.jpeg'
import Loader from './util/Loader';
import PrivacyPolicy from './util/PrivacyPolicy';
import AyushmanBharat from './pages/freeTreatment/AyushmanBharat';
import TPA from './pages/freeTreatment/TPA';
import CGHS from './pages/freeTreatment/CGHS';
import CAPF from './pages/freeTreatment/CAPF';
import CMRF from './pages/freeTreatment/CMRF';
import ComplaintForm from './components/ComplaintForm';
import ComplaintFormPage from './pages/ComplaintFormPage';
import TestimonialCarousel from './components/TestimonialCarousel';
import ClientFeedback from './components/ClientFeedback';
import CookieConsent from "react-cookie-consent";
import Blogss from './pages/resource/Blogs';

// Page Components
const Home = () => (
  <>
  <Hero />
  <DrPrabhatSir/>
  <ImageContainer>
    <img src={DirImg} alt='direcorimage' style={{weidth:'100%'}}/>
  </ImageContainer>
  <FreeTreatment/>
  <CenterofExcellance />
  <DoctorSlider/>
  <TPASlider/>
  <CancerCare/>
  <FacilitiesForHomePage/>
  <AboutUsComponent/>
  <Testimonials /> 
{/*    <TestimonialCarousel/> 
  <ClientFeedback/> */}
  </>

);

const About = () => (
 <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 1.1 }}
    >
  <Aboutus />
 </motion.div>
);

const Services = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 1.1 }}
    
  >
    <ServicesPage/>
  </motion.div>
);

const Contact = () => (
  <motion.div
    initial={{ opacity: 0, rotateY: 90 }}
    animate={{ opacity: 1, rotateY: 0 }}
    exit={{ opacity: 0, rotateY: -90 }}
    className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-red-100"
  >
   <ContactUs/>
  </motion.div>
);
const Blogs = () => (
  <
  >
   <BlogsPage/>
  </>
);

// Navigation Component
const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about-us', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/contact-us', label: 'Contact' },
  ];

  return (
    <NavbarContainer>
    <TopBar/>
    <MainNavbar />
    </NavbarContainer>

  );
};

// AnimatedRoutes Component
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
       <CookieConsent
        location="bottom"
        buttonText="Accept"
        style={{ background: "#222", color: "#fff" }}
        buttonStyle={{ background: "#4CAF50", color: "white" }}
      >
        🍪 This website uses cookies to improve your experience.
      </CookieConsent>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/facilities" element={<Services />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/resources/blogs" element={<Blogss />} />
        <Route path="/resources/blogs/:slug" element={<Blogss />} />
        <Route path='/resources/gallery' element={<GalleryPage/>} />
        <Route path='/book-appointment' element={<AppointmentPage/>} />
         <Route path='/doctors' element={<DoctorPage/>} />
         <Route path='/departments/cardiology' element={<Cardiology/>} />
         <Route path='/departments/emergency' element={<Emergency/>} />
         <Route path='/departments/nephrology' element={<Nephrology/>} />
         <Route path='/departments/gynecology-obstetrician' element={<Gynecology/>} />
         <Route path='/departments/orthopedic' element={<Orthopedic/>} />
         <Route path='/departments/gastroenterology' element={<Gastroenteorology/>} />
         <Route path='/departments/neurology' element={<Neurology/>} />
         <Route path='/departments/paediatrics' element={<Paediatrics/>} />
         <Route path='/departments/neuro-surgery' element={<NeuroSurgery/>} />
         <Route path='/departments/oncology-chemotherapy' element={<Oncology/>} />
         <Route path='/departments/general-medicine' element={<GeneralMedicine/>} />
         <Route path='/departments/general-surgery' element={<GeneralSurgery/>} />
         <Route path='/departments/laproscopic-surgery' element={<LaproscopicSurgery/>} />
         <Route path='/departments/urology' element={<Urology/>} />
         <Route path='/departments/pulmonology' element={<Pulmonology/>} />
         <Route path='/departments/trauma' element={<TraumaCarePage/>} />
         <Route path='/departments/critical-care' element={<CriticalCarePage/>} />
         <Route path='/sitemap' element={<Sitemap/>} />
         <Route path="/free-treatment/ayushman-bharat" element={<AyushmanBharat />} />
         <Route path="/free-treatment/tpa" element={<TPA />} />
         <Route path="/free-treatment/cghs" element={<CGHS />} />
         <Route path="/free-treatment/capf" element={<CAPF />} />
        <Route path="/free-treatment/cmrf" element={<CMRF />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/patient-welfare/complain-form" element={<ComplaintFormPage/>}/>

      </Routes>
    </AnimatePresence>
  );
};  

// Loading Component
const LoadingSpinner = () => (
  <>
    <Loader/>
  </>
);

// Main App Component
export default function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading
  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navigation />
        <main>
          <AnimatedRoutes />
        </main>
          
        {/* Footer */}
        <footer className="bg-gray-800 text-white ">
          <Footer/>
        </footer>
      </div>
    </Router>
  );
}

const NavbarContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`

const ImageContainer = styled.div`
  display: flex;
  align-items:center;
  justify-content: center;
`