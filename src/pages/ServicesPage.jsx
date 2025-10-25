import React, { useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import ServicesBC from '../components/breadcrumbs/ServicesBC';
import FreeTreatment from '../components/FreeTreatment';

// NEW ANIMATIONS
const slideInFromBottom = keyframes`
  from {
    opacity: 0.9;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pop = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1);
  }
`;

// Existing Animations (Keeping the ones used in the new component)
const fadeInUp = keyframes`
  from {
    opacity: 0.9; /* Changed from 1 to 0 for a standard fade-in-up effect on the SectionTitle */
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInLeft = keyframes`
  from {
    opacity: 0.9;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0.9;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

/* // Removed Animations (No longer needed)
const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;
*/

// Styled Components
const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

const HeroSection = styled.section`
  height: 70vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
              url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2050&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  /* REMOVED: animation: ${fadeInUp} 1s ease-out; */
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 0 20px;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  /* APPLIED NEW ANIMATION: fadeInLeft */
  animation: ${fadeInLeft} 1s ease-out 0.2s both;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  /* APPLIED NEW ANIMATION: fadeInRight */
  animation: ${fadeInRight} 1s ease-out 0.4s both;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ServicesSection = styled.section`
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #2c3e50;
  /* APPLIED NEW ANIMATION: fadeInUp */
  animation: ${fadeInUp} 1s ease-out;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 50px;
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  /* REMOVED: scaleIn with delay */
  /* APPLIED NEW ANIMATION: slideInFromBottom with staggered delay */
  animation: ${slideInFromBottom} 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation-delay: ${props => props.delay || '0s'};
  animation-fill-mode: both;
  
  /* Initial state for the grid animation */
  opacity: 0.9;
  transform: translateY(50px);


  &:hover {
    transform: translateY(-5px); /* Less dramatic lift */
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
    /* APPLIED NEW HOVER ANIMATION: pop */
    animation: ${pop} 0.4s ease;
  }
`;

const ServiceImage = styled.div`
  height: 200px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  position: relative;
  transition: transform 0.3s ease;

  ${ServiceCard}:hover & {
    transform: scale(1.05); /* Slightly less dramatic scale on hover */
  }
`;

const ServiceContent = styled.div`
  padding: 25px;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #2c3e50;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ServiceIcon = styled.span`
  font-size: 1.8rem;
  color: #3498db;
`;

const ServiceDescription = styled.p`
  color: #7f8c8d;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const EmergencyHighlight = styled.div`
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
  display: inline-block;
  margin-top: 10px;
`;

// Service Images, Icons, and Data are unchanged
const serviceImages = {
  OPD: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  IPD: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  Emergency: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  Radiology: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  Ultrasound: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  CTScan: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  Ambulance: 'https://images.unsplash.com/photo-1583908369123-691fb8d56ce4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  CathLab: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  DayCare: 'https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  Mortuary: 'https://images.unsplash.com/photo-1542736667-069246bdbc6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  OT: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  Pharmacy: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
};

const serviceIcons = {
  OPD: '🏥',
  IPD: '🛏️',
  Emergency: '🚨',
  Radiology: '📷',
  Ultrasound: '👶',
  CTScan: '🔍',
  Ambulance: '🚑',
  CathLab: '❤️',
  DayCare: '👨‍⚕️',
  Mortuary: '⚰️',
  OT: '🔪',
  Pharmacy: '💊'
};

const servicesData = [
  {
    id: 1,
    name: 'OPD',
    description: 'Outpatient Department providing comprehensive medical consultations and follow-up care with our team of specialist doctors.',
    image: serviceImages.OPD,
    icon: serviceIcons.OPD
  },
  {
    id: 2,
    name: 'IPD',
    description: 'Inpatient Department with comfortable rooms and 24/7 nursing care for patients requiring hospital admission and monitoring.',
    image: serviceImages.IPD,
    icon: serviceIcons.IPD
  },
  {
    id: 3,
    name: 'Emergency Services',
    description: '24/7 emergency care with trauma center, critical care specialists, and immediate medical attention for life-threatening conditions.',
    image: serviceImages.Emergency,
    icon: serviceIcons.Emergency,
    emergency: true
  },
  {
    id: 4,
    name: 'Radiology and Imaging',
    description: 'Advanced digital X-ray, MRI, and diagnostic imaging services with expert radiologists for accurate diagnosis.',
    image: serviceImages.Radiology,
    icon: serviceIcons.Radiology
  },
  {
    id: 5,
    name: 'Ultrasound',
    description: 'High-resolution ultrasound imaging for obstetrics, abdominal, cardiac, and vascular studies with experienced sonographers.',
    image: serviceImages.Ultrasound,
    icon: serviceIcons.Ultrasound
  },
  {
    id: 6,
    name: 'CT Scan',
    description: 'State-of-the-art CT scanning technology for detailed cross-sectional imaging and rapid diagnosis.',
    image: serviceImages.CTScan,
    icon: serviceIcons.CTScan
  },
  {
    id: 7,
    name: 'Ambulance Services',
    description: 'Fully equipped advanced life support ambulances with trained paramedics for emergency transport and care.',
    image: serviceImages.Ambulance,
    icon: serviceIcons.Ambulance
  },
  {
    id: 8,
    name: 'Cath Lab',
    description: 'Modern catheterization laboratory for cardiac procedures including angiography, angioplasty, and pacemaker implantation.',
    image: serviceImages.CathLab,
    icon: serviceIcons.CathLab
  },
  {
    id: 9,
    name: 'Day Care Services',
    description: 'Short-stay surgical procedures and treatments that allow patients to return home on the same day.',
    image: serviceImages.DayCare,
    icon: serviceIcons.DayCare
  },
  {
    id: 10,
    name: 'Mortuary Services',
    description: 'Dignified and respectful mortuary services with proper preservation facilities and compassionate staff.',
    image: serviceImages.Mortuary,
    icon: serviceIcons.Mortuary
  },
  {
    id: 11,
    name: 'World Class OT',
    description: 'Modern operation theaters with laminar airflow, advanced surgical equipment, and expert surgical teams.',
    image: serviceImages.OT,
    icon: serviceIcons.OT
  },
  {
    id: 12,
    name: 'In house Pharmacy',
    description: 'Well-stocked pharmacy providing genuine medicines and medical supplies with expert guidance from pharmacists.',
    image: serviceImages.Pharmacy,
    icon: serviceIcons.Pharmacy
  }
];

const ServicesPage = () => {
  /*
  The original useEffect was trying to trigger a page load animation 
  on the ServicesSection, which is now handled by the individual
  animations on the title and cards. I'm removing the useRef and useEffect logic 
  as it's no longer necessary with the staggered card animation.
  */
  
  // const sectionRef = useRef(null);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (sectionRef.current) {
  //       sectionRef.current.style.opacity = '1';
  //     }
  //   }, 100);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <ServicesContainer>
    <ServicesBC/>
    <PageContainer>
      <ServicesSection>
        <SectionTitle>Our Specialized Medical Services</SectionTitle>
        <ServicesGrid>
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              /* Staggered delay for the slideInFromBottom effect */
              delay={`${index * 0.1}s`} 
            >
              <ServiceImage image={service.image} />
              <ServiceContent>
                <ServiceTitle>
                  <ServiceIcon>{service.icon}</ServiceIcon>
                  {service.name}
                </ServiceTitle>
                <ServiceDescription>
                  {service.description}
                </ServiceDescription>
                {service.emergency && (
                  <EmergencyHighlight>
                    24/7 EMERGENCY SERVICE
                  </EmergencyHighlight>
                )}
              </ServiceContent>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesSection>
    </PageContainer>
    <FreeTreatment/>
    </ServicesContainer>

  );
};

export default ServicesPage;

const ServicesContainer = styled.div`
  display:flex;
  flex-direction: column;
`