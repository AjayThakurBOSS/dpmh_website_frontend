import React from 'react';
import styled from 'styled-components';
import { FaUserMd, FaHeartbeat, FaAmbulance, FaMicroscope, FaAward, FaClock, FaHandHoldingHeart, Stethoscope } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaUserMd />,
      title: "Expert Medical Team",
      description: "Board-certified doctors and specialists with decades of experience in their respective fields."
    },
    {
      icon: <FaHeartbeat />,
      title: "24/7 Emergency Care",
      description: "Round-the-clock emergency services with rapid response teams and critical care units."
    },
    {
      icon: <FaMicroscope />,
      title: "Advanced Diagnostics",
      description: "State-of-the-art laboratory and imaging facilities for accurate and quick diagnosis."
    },
    {
      icon: <FaAward />,
      title: "Quality Accreditation",
      description: "Internationally recognized quality standards and healthcare certifications."
    },
    {
      icon: <FaClock />,
      title: "Minimal Waiting Time",
      description: "Streamlined processes and digital systems to reduce patient waiting periods."
    },
    {
      icon: <FaHandHoldingHeart />,
      title: "Patient-Centered Care",
      description: "Personalized treatment plans with compassionate care and continuous support."
    }
  ];

  const facilities = [
    {
      name: "24x7 ICU",
      description: "Smart ICU with remote monitoring and advanced life support systems"
    },
    {
      name: "Cardiac Cath Lab",
      description: "Advanced interventional cardiology with modern catheterization laboratory"
    },
    {
      name: "Modular OTs",
      description: "State-of-the-art modular operation theaters with laminar airflow"
    },
    {
      name: "Radiology and CT Scan",
      description: "Dedicated neonatal and pediatric intensive care units"
    },
    {
      name: "Telemedicine",
      description: "Remote consultation services for patients in rural areas"
    },
    {
      name: "Pharmacy",
      description: "24/7 in-house pharmacy with genuine medicines"
    }
  ];

  return (
    <WhyChooseUsContainer id="why-choose-us">
      <Container>
        <HeaderSection>
          <MainTitle>Why Choose Dr. Prabhat Memorial Hiramati Hospital?</MainTitle>
          <Subtitle>Excellence in Healthcare, Compassion in Service</Subtitle>
          <Divider />
        </HeaderSection>

        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <IconWrapper>{feature.icon}</IconWrapper>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>

        <FacilitiesSection>
          <SectionTitle>World-Class Facilities</SectionTitle>
          <FacilitiesGrid>
            {facilities.map((facility, index) => (
              <FacilityCard key={index}>
                <FacilityName>{facility.name}</FacilityName>
                <FacilityDescription>{facility.description}</FacilityDescription>
              </FacilityCard>
            ))}
          </FacilitiesGrid>
        </FacilitiesSection>

        <DifferentiatorSection>
          <DifferentiatorContent>
            <DifferentiatorTitle>What Makes Us Different?</DifferentiatorTitle>
            <DifferentiatorList>
              <DifferentiatorItem>
                <CheckIcon>✓</CheckIcon>
                <span><strong>Rural Healthcare Focus:</strong> Specialized programs for underserved communities in Bihar</span>
              </DifferentiatorItem>
              <DifferentiatorItem>
                <CheckIcon>✓</CheckIcon>
                <span><strong>Medical Education:</strong> Training the next generation of healthcare professionals</span>
              </DifferentiatorItem>
              <DifferentiatorItem>
                <CheckIcon>✓</CheckIcon>
                <span><strong>Affordable Excellence:</strong> World-class care at accessible prices</span>
              </DifferentiatorItem>
              <DifferentiatorItem>
                <CheckIcon>✓</CheckIcon>
                <span><strong>Community Outreach:</strong> Regular health camps and awareness programs</span>
              </DifferentiatorItem>
              <DifferentiatorItem>
                <CheckIcon>✓</CheckIcon>
                <span><strong>Holistic Approach:</strong> Integrating modern medicine with patient wellness</span>
              </DifferentiatorItem>
            </DifferentiatorList>
          </DifferentiatorContent>
          <StatsContainer>
            <StatItem>
              <StatNumber>200+</StatNumber>
              <StatLabel>Expert Doctors</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>10,000+</StatNumber>
              <StatLabel>Patients Treated</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>24/7</StatNumber>
              <StatLabel>Emergency Services</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>100+</StatNumber>
              <StatLabel>Medical Staff</StatLabel>
            </StatItem>
          </StatsContainer>
        </DifferentiatorSection>
      </Container>
    </WhyChooseUsContainer>
  );
};

export default WhyChooseUs;

// Styled Components
const WhyChooseUsContainer = styled.section`
  padding: 5rem 1rem;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  position: relative;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }
`;

const MainTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #475569;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Divider = styled.div`
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6, #10b981);
  margin: 0 auto;
  border-radius: 2px;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 3rem;
  }
`;

const FeatureCard = styled.div`
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #3b82f6, #10b981);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 2rem;
  color: white;

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    font-size: 1.75rem;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const FeatureDescription = styled.p`
  color: #64748b;
  line-height: 1.6;
  font-size: 1.05rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const FacilitiesSection = styled.div`
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e3a8a;
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const FacilitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const FacilityCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  border-left: 4px solid #3b82f6;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const FacilityName = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const FacilityDescription = styled.p`
  color: #64748b;
  line-height: 1.5;
`;

const DifferentiatorSection = styled.div`
  background: white;
  border-radius: 25px;
  padding: 4rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    padding: 3rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    gap: 2rem;
  }
`;

const DifferentiatorContent = styled.div``;

const DifferentiatorTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
  }
`;

const DifferentiatorList = styled.ul`
  list-style: none;
  padding: 0;
`;

const DifferentiatorItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

const CheckIcon = styled.span`
  background: #10b981;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  flex-shrink: 0;
  font-weight: bold;
  font-size: 0.875rem;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  border-radius: 15px;
  color: white;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StatLabel = styled.div`
  font-size: 1rem;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;