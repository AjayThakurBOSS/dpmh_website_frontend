import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import {
  Activity,
  Heart,
  FileText,
  Users,
  Flash,
  Watch,
  Mail,
  MapPin,
  Calendar,
  ShieldCheck,
  PlusCircle,
  Search,
  MonitorPlay,
  Layers,
  Phone,
  ArrowRight,
  Star,
  ChevronDown,
  Building,
  Stethoscope,
  Ambulance,
  Coffee,
  Car,
  CreditCard,
  Laptop,
  Microscope,
  Shield,
  Flame,
  Globe,
  Utensils,
  HeartPulse,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

// ===== Animations =====
const fadeInUp = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(20px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
`;

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// ===== Styled Components =====
const Page = styled.div`
  font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  color: #0f172a;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%);
  min-height: 100vh;
  line-height: 1.6;
  overflow-x: hidden;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px 16px;

  @media (min-width: 768px) {
    padding: 32px 24px;
  }
`;

const Hero = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 48px;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const HeroCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248, 250, 252, 0.95) 100%);
  padding: 24px;
  border-radius: 20px;
  box-shadow: 
    0 10px 25px rgba(2, 6, 23, 0.08),
    inset 0 1px 0 rgba(255,255,255,0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.3);
  animation: ${fadeInUp} 0.8s ease both;
  flex: 1;

  @media (min-width: 768px) {
    padding: 40px;
    border-radius: 24px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  margin: 0 0 16px 0;
  line-height: 1.2;
  background: linear-gradient(135deg, #0f172a, #475569);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (min-width: 768px) {
    font-size: 2.5rem;
    line-height: 1.1;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

const HeroSub = styled.p`
  font-size: 1rem;
  margin: 0 0 24px 0;
  color: #475569;
  font-weight: 500;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 32px;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;

const QuickStats = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  margin-bottom: 20px;

  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-bottom: 24px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }
`;

const Stat = styled(motion.div)`
  background: linear-gradient(135deg, rgba(6,182,212,0.1) 0%, rgba(37,99,235,0.1) 100%);
  padding: 16px;
  border-radius: 12px;
  display: flex;
  gap: 12px;
  align-items: center;
  border: 1px solid rgba(255,255,255,0.3);
  backdrop-filter: blur(10px);
  
  &:nth-child(2) {
    background: linear-gradient(135deg, rgba(239,68,68,0.1) 0%, rgba(236,72,153,0.1) 100%);
  }
  
  &:nth-child(3) {
    background: linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(16,185,129,0.1) 100%);
  }

  @media (min-width: 768px) {
    padding: 20px;
    border-radius: 16px;
    gap: 16px;
  }
`;

const StatIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(255,255,255,0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  flex-shrink: 0;

  @media (min-width: 768px) {
    width: 48px;
    height: 48px;
    border-radius: 12px;
  }
`;

const CardMini = styled(motion.div)`
  background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.9) 100%);
  padding: 20px;
  border-radius: 16px;
  box-shadow: 
    0 6px 20px rgba(2,6,23,0.06),
    inset 0 1px 0 rgba(255,255,255,0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.3);

  @media (min-width: 768px) {
    padding: 24px;
    border-radius: 20px;
  }
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  @media (min-width: 1024px) {
    width: 320px;
    position: sticky;
    top: 32px;
    height: fit-content;
  }
`;

const CTAButton = styled(motion.button)`
  background: linear-gradient(135deg, #06b6d4, #2563eb, #8b5cf6);
  background-size: 200% 200%;
  animation: ${gradientShift} 4s ease infinite;
  color: white;
  border: none;
  padding: 16px 20px;
  border-radius: 14px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 8px 30px rgba(6,182,212,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255,255,255,0.2);
  width: 100%;
  min-height: 60px;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(6,182,212,0.4);
  }

  @media (min-width: 768px) {
    padding: 20px 24px;
    border-radius: 16px;
    font-size: 1.1rem;
    min-height: auto;
  }

  a {
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const Section = styled(motion.section)`
  margin: 40px 0;
  display: block;

  @media (min-width: 768px) {
    margin: 48px 0;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    gap: 24px;
    margin-bottom: 32px;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(135deg, #0f172a, #475569);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: flex;
  align-items: center;
  gap: 10px;
  line-height: 1.3;

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
    gap: 12px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    gap: 24px;
  }
`;

const FeatureCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%);
  padding: 20px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 
    0 6px 20px rgba(2,6,23,0.06),
    inset 0 1px 0 rgba(255,255,255,0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.3);
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 
      0 10px 35px rgba(2,6,23,0.12),
      inset 0 1px 0 rgba(255,255,255,0.8);
  }

  @media (min-width: 640px) {
    flex-direction: row;
    gap: 20px;
    padding: 24px;
    border-radius: 20px;
  }

  @media (min-width: 768px) {
    padding: 28px;
  }
`;

const IconWrap = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #e0f2fe, #f0f9ff);
  box-shadow: 
    0 4px 12px rgba(14,165,233,0.15),
    inset 0 1px 0 rgba(255,255,255,0.6);
  flex-shrink: 0;

  @media (min-width: 768px) {
    width: 64px;
    height: 64px;
    border-radius: 16px;
  }
`;

const FeatureContent = styled.div`
  flex: 1;
`;

const FeatureTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 10px 0;
  color: #0f172a;
  line-height: 1.4;

  @media (min-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 12px;
  }
`;

const FeatureDesc = styled.p`
  margin: 0;
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.5;

  @media (min-width: 768px) {
    font-size: 0.95rem;
  }
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 12px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 16px;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }
`;

const Photo = styled(motion.div)`
  height: 120px;
  border-radius: 14px;
  background: linear-gradient(135deg, #e0f2fe, #f0f9ff);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: #1e293b;
  box-shadow: 0 6px 20px rgba(30,41,59,0.08);
  border: 1px solid rgba(255,255,255,0.3);
  text-align: center;
  padding: 16px;
  font-size: 0.85rem;
  line-height: 1.4;

  @media (min-width: 768px) {
    height: 140px;
    border-radius: 16px;
    padding: 20px;
    font-size: 0.9rem;
  }
`;

const Footer = styled.footer`
  margin-top: 60px;
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #64748b;
  border-top: 1px solid rgba(255,255,255,0.3);

  @media (min-width: 768px) {
    margin-top: 80px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
  }
`;

const FloatContact = styled(motion.a)`
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index: 1000;
  text-decoration: none;
  animation: ${float} 3s ease-in-out infinite;

  @media (min-width: 768px) {
    right: 32px;
    bottom: 32px;
  }
`;

const Badge = styled.span`
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  padding: 4px 10px;
  border-radius: 16px;
  font-size: 0.75rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-left: 8px;

  @media (min-width: 768px) {
    font-size: 0.8rem;
    padding: 4px 12px;
    border-radius: 20px;
  }
`;

const MobileCardGrid = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    gap: 16px;
    margin-bottom: 24px;
  }
`;

// ===== Data =====
const coreFacilities = [
  "24×7 Emergency Department",
  "Intensive Care Units (ICU, NICU, PICU, SICU, CCU)",
  "Modular Operation Theatres",
  "Trauma & Critical Care Unit",
  "Dialysis Unit",
  "Cath Lab (Cardiac)",
];

const diagnostic = [
  "Pathology & Laboratory Services (Biochemistry, Hematology, Microbiology)",
  "X-ray",
  "CT Scan",

  "Ultrasound",
  
  "ECG, 2D Echo, TMT, Holter",
  "Endoscopy / Colonoscopy",
];

const inPatient = [
  "General Ward, Private Rooms, Deluxe Rooms, Suite Rooms",
  "Centralized Oxygen System",
  "Pharmacy (24x7)",
  "Ambulance Services",
  "Cafeteria / Canteen",
  "Waiting Lounge & Visitor Management",
  "Parking Facilities",
  "Cashless Mediclaim & TPA Support",
];

const tech = [
  "Modular OT with advanced sterilization",
  "Computerized medical records (EMR)",
  "Telemedicine / Online Consultation",
  "Advanced Ventilators & Monitors",
  "Infection Control & Safety Systems",
  "Fire & Disaster Safety Systems",
];

const patientServices = [
  "Online Appointment Booking",
  "Health Packages / Preventive Checkups",
  "Insurance & TPA Desk",
  "Ayushman Desk",
  "Patient Counseling Services",
];

const trust = [
  "Doctors' Profiles with Qualifications",
  "Patient Testimonials & Success Stories",
  "Hospital Accreditation (NABH, ISO, etc.)",
  "Image Gallery & Virtual Tour",
  "Latest News, Blogs, Health Awareness Content",
];

const optional = [
  "International Patient Desk",
  "Nutrition & Diet Counseling",
  "Organ Transplant Facility",
  "Palliative & Pain Management Unit",
];

// ===== Component =====
export default function FacilitiesComponent() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCoreFacilities = coreFacilities.filter(facility =>
    facility.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Page>
      <Container>
        <Hero>
          <HeroCard initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <HeroTitle>
              Comprehensive Healthcare Facilities
              <div style={{ fontSize: "1rem", marginTop: "8px", display: "flex", alignItems: "center", flexWrap: "wrap" }}>
                Trusted Care <Badge>24×7</Badge>
              </div>
            </HeroTitle>
            <HeroSub>
              From emergency response to advanced diagnostics and patient-friendly services — 
              everything under one roof with NABH accredited quality standards.
            </HeroSub>
            
            <QuickStats>
              <Stat whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <StatIcon>
                  <Watch size={20} color="#06b6d4" />
                </StatIcon>
                <div>
                  <div style={{ fontWeight: 800, fontSize: "1rem" }}>24×7</div>
                  <div style={{ fontSize: "0.85rem", color: "#64748b" }}>Emergency & Pharmacy</div>
                </div>
              </Stat>

              <Stat whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <StatIcon>
                  <Heart size={20} color="#ef4444" />
                </StatIcon>
                <div>
                  <div style={{ fontWeight: 800, fontSize: "1rem" }}>Cath Lab</div>
                  <div style={{ fontSize: "0.85rem", color: "#64748b" }}>Advanced Cardiac Care</div>
                </div>
              </Stat>

              <Stat whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <StatIcon>
                  <ShieldCheck size={20} color="#10b981" />
                </StatIcon>
                <div>
                  <div style={{ fontWeight: 800, fontSize: "1rem" }}>NABH</div>
                  <div style={{ fontSize: "0.85rem", color: "#64748b" }}>Accredited Quality Care</div>
                </div>
              </Stat>
            </QuickStats>

            <MobileCardGrid>
              <CardMini whileHover={{ y: -5 }} whileTap={{ scale: 0.98 }}>
                <div style={{ fontSize: "0.85rem", color: "#64748b", marginBottom: "6px" }}>Medical Excellence</div>
                <div style={{ fontWeight: 800, fontSize: "1.1rem", display: "flex", alignItems: "center", gap: "6px" }}>
                  Experienced Team <Star size={14} color="#f59e0b" fill="#f59e0b" />
                </div>
              </CardMini>
              <CardMini whileHover={{ y: -5 }} whileTap={{ scale: 0.98 }}>
                <div style={{ fontSize: "0.85rem", color: "#64748b", marginBottom: "6px" }}>Insurance Support</div>
                <div style={{ fontWeight: 800, fontSize: "1.1rem" }}>Cashless Claims</div>
              </CardMini>
            </MobileCardGrid>
          </HeroCard>

          <Sidebar>
            <CardMini whileHover={{ y: -5 }} whileTap={{ scale: 0.98 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: "0.85rem", color: "#64748b", marginBottom: "4px" }}>Emergency Contact</div>
                  <div style={{ fontWeight: 800, fontSize: "1.1rem" }}>+91 84060 00555</div>
                </div>
                <div style={{ background: "#06b6d4", padding: "10px", borderRadius: "10px" }}>
                  <a href="tel:+918406000555" style={{ display: "flex" }}>
                    <Phone size={20} color="white" />
                  </a>
                </div>
              </div>
            </CardMini>

            <CardMini whileHover={{ y: -5 }} whileTap={{ scale: 0.98 }}>
              <div style={{ fontSize: "0.85rem", color: "#64748b", marginBottom: "4px" }}>Visiting Hours</div>
              <div style={{ fontWeight: 700, fontSize: "1rem", display: "flex", alignItems: "center", gap: "6px" }}>
                8:00 AM — 8:00 PM <ChevronDown size={14} />
              </div>
            </CardMini>

            <CTAButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MonitorPlay size={18} />
              <Link to='/book-appointment'>Book OPD</Link>
             {/*  <a href="tel:+918406000555">Start Teleconsult</a> */}
              <ArrowRight size={14} />
            </CTAButton>
          </Sidebar>
        </Hero>

        {/* Core Medical Facilities Section */}
        <Section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "0px 0px -100px 0px" }}>
          <SectionHeader>
            <SectionTitle>
              <Activity size={24} />
              Core Medical Facilities
            </SectionTitle>
          </SectionHeader>

          <Grid>
            {filteredCoreFacilities.map((f, i) => (
              <FeatureCard
                key={f}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <IconWrap>
                  <Activity size={20} color="#06b6d4" />
                </IconWrap>
                <FeatureContent>
                  <FeatureTitle>{f}</FeatureTitle>
                  <FeatureDesc>
                    Well-equipped & specialized medical team available round the clock with 
                    state-of-the-art equipment and monitoring systems.
                  </FeatureDesc>
                </FeatureContent>
              </FeatureCard>
            ))}
          </Grid>
        </Section>

        {/* Diagnostic & Imaging Services Section */}
        <Section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "0px 0px -100px 0px" }}>
          <SectionHeader>
            <SectionTitle>
              <MonitorPlay size={24} />
              Diagnostic & Imaging Services
            </SectionTitle>
            <div style={{ color: "#64748b", fontSize: "0.95rem", textAlign: "left" }}>
              Advanced imaging & lab services with fast reporting turnaround
            </div>
          </SectionHeader>

          <Grid>
            {diagnostic.map((d, i) => (
              <FeatureCard 
                key={d}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02, rotateY: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <IconWrap>
                  <Microscope size={20} color="#8b5cf6" />
                </IconWrap>
                <FeatureContent>
                  <FeatureTitle>{d}</FeatureTitle>
                  <FeatureDesc>
                    High-fidelity imaging machines & certified technicians ensuring 
                    accurate diagnostics and comprehensive reporting.
                  </FeatureDesc>
                </FeatureContent>
              </FeatureCard>
            ))}
          </Grid>
        </Section>

        {/* In-Patient & Support Facilities Section */}
        <Section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "0px 0px -100px 0px" }}>
          <SectionHeader>
            <SectionTitle>
              <Building size={24} />
              In-Patient & Support Facilities
            </SectionTitle>
            <div style={{ color: "#64748b", fontSize: "0.95rem", textAlign: "left" }}>
              Comfort, safety and easy billing for patients and families
            </div>
          </SectionHeader>

          <Grid>
            {inPatient.map((p, i) => (
              <FeatureCard 
                key={p}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <IconWrap>
                  {i === 0 && <Building size={20} color="#f59e0b" />}
                  {i === 1 && <Activity size={20} color="#06b6d4" />}
                  {i === 2 && <Stethoscope size={20} color="#ef4444" />}
                  {i === 3 && <Ambulance size={20} color="#dc2626" />}
                  {i === 4 && <Coffee size={20} color="#d97706" />}
                  {i === 5 && <Users size={20} color="#7c3aed" />}
                  {i === 6 && <Car size={20} color="#475569" />}
                  {i === 7 && <CreditCard size={20} color="#059669" />}
                </IconWrap>
                <FeatureContent>
                  <FeatureTitle>{p}</FeatureTitle>
                  <FeatureDesc>
                    Comfort-focused services with clean rooms, nutrition support, and 
                    seamless administrative processes for hassle-free healthcare.
                  </FeatureDesc>
                </FeatureContent>
              </FeatureCard>
            ))}
          </Grid>
        </Section>

        {/* Hospital Technology & Infrastructure Section */}
        <Section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "0px 0px -100px 0px" }}>
          <SectionHeader>
            <SectionTitle>
              <Layers size={24} />
              Hospital Technology & Infrastructure
            </SectionTitle>
            <div style={{ color: "#64748b", fontSize: "0.95rem", textAlign: "left" }}>
              Reliable systems keeping patient safety first
            </div>
          </SectionHeader>

          <Grid>
            {tech.map((t, i) => (
              <FeatureCard 
                key={t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ rotate: -1, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <IconWrap>
                  {i === 0 && <Activity size={20} color="#06b6d4" />}
                  {i === 1 && <Laptop size={20} color="#8b5cf6" />}
                  {i === 2 && <MonitorPlay size={20} color="#ec4899" />}
                  {i === 3 && <HeartPulse size={20} color="#dc2626" />}
                  {i === 4 && <Shield size={20} color="#059669" />}
                  {i === 5 && <Flame size={20} color="#f59e0b" />}
                </IconWrap>
                <FeatureContent>
                  <FeatureTitle>{t}</FeatureTitle>
                  <FeatureDesc>
                    Regular maintenance, automated backups, and trained technical staff 
                    ensure uninterrupted healthcare services and patient safety.
                  </FeatureDesc>
                </FeatureContent>
              </FeatureCard>
            ))}
          </Grid>
        </Section>

        {/* Patient-Friendly Services Section */}
        <Section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "0px 0px -100px 0px" }}>
          <SectionHeader>
            <SectionTitle>
              <Users size={24} />
              Patient-Friendly Services
            </SectionTitle>
            <div style={{ color: "#64748b", fontSize: "0.95rem", textAlign: "left" }}>
              Easy access and clear communication for better outcomes
            </div>
          </SectionHeader>

          <Grid>
            {patientServices.map((s, i) => (
              <FeatureCard 
                key={s}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <IconWrap>
                  <Calendar size={20} color="#06b6d4" />
                </IconWrap>
                <FeatureContent>
                  <FeatureTitle>{s}</FeatureTitle>
                  <FeatureDesc>
                    Simple digital workflows, friendly support staff, and transparent 
                    processes to make healthcare accessible and stress-free.
                  </FeatureDesc>
                </FeatureContent>
              </FeatureCard>
            ))}
          </Grid>
        </Section>

        {/* Trust-Building Elements Section */}
        <Section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "0px 0px -100px 0px" }}>
          <SectionHeader>
            <SectionTitle>
              <ShieldCheck size={24} />
              Trust-Building Elements
            </SectionTitle>
            <div style={{ color: "#64748b", fontSize: "0.95rem", textAlign: "left" }}>
              Building confidence through transparency and excellence
            </div>
          </SectionHeader>

          <Gallery>
            {trust.map((t, i) => (
              <Photo 
                key={t}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                {t}
              </Photo>
            ))}
          </Gallery>
        </Section>

        {/* Optional Value-Added Facilities Section */}
        <Section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "0px 0px -100px 0px" }}>
          <SectionHeader>
            <SectionTitle>
              <PlusCircle size={24} />
              Optional Value-Added Facilities
            </SectionTitle>
            <div style={{ color: "#64748b", fontSize: "0.95rem", textAlign: "left" }}>
              Add these based on demand and capability
            </div>
          </SectionHeader>

          <Grid>
            {optional.map((o, i) => (
              <FeatureCard 
                key={o}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <IconWrap>
                  {i === 0 && <Globe size={20} color="#06b6d4" />}
                  {i === 1 && <Utensils size={20} color="#10b981" />}
                  {i === 2 && <Heart size={20} color="#ef4444" />}
                  {i === 3 && <Activity size={20} color="#8b5cf6" />}
                </IconWrap>
                <FeatureContent>
                  <FeatureTitle>{o}</FeatureTitle>
                  <FeatureDesc>
                    Specialized services available on request or with dedicated 
                    medical teams for comprehensive healthcare solutions.
                  </FeatureDesc>
                </FeatureContent>
              </FeatureCard>
            ))}
          </Grid>
        </Section>

       
        <FloatContact
          href="#contact"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <div style={{ 
            background: "linear-gradient(135deg, #06b6d4, #2563eb)", 
            color: "white", 
            padding: "16px", 
            borderRadius: "14px", 
            display: "flex", 
            gap: "8px", 
            alignItems: "center", 
            boxShadow: "0 8px 30px rgba(6,182,212,0.3)",
            fontSize: "0.9rem",
            fontWeight: "600"
          }}>
            <MapPin size={16} />
            Contact
          </div>
        </FloatContact>
      </Container>
    </Page>
  );
}