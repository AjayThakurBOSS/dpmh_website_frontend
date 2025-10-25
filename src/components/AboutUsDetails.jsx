import React from 'react';
import styled from 'styled-components';
import DoctorImg from '../assets/AboutPageDocImg.webp';
import { FaStethoscope, FaHeartbeat, FaUsers, FaAward, FaCheckCircle } from 'react-icons/fa';
import Compassion from '../assets/presonalised_care.jpeg'
import Inovative from '../assets/innovative.jpg'
import LegecyIg from '../assets/legecyofcare.jpg'

const AboutUsDetails = () => {
  const features = [
    { icon: <FaStethoscope />, text: "Super-Specialty Care" },
    { icon: <FaHeartbeat />, text: "Advanced Technology" },
    { icon: <FaUsers />, text: "AIIMS Alumni Experts" },
    { icon: <FaAward />, text: "Patient-First Approach" }
  ];

  return (
    <AboutUsDetailsContainer>
      <HospitalContainer>
        <ImageWrapper>
          <HospitalImage src={DoctorImg} alt="Dr. Prabhat Kumar" />
          <ImageOverlay>
            <ExperienceBadge>
              <Years>13+</Years>
              <ExperienceText>Years of Medical Excellence</ExperienceText>
            </ExperienceBadge>
          </ImageOverlay>
        </ImageWrapper>
        
        <ContentWrapper>
          <HeaderSection>
            <Subtitle>Experience Excellence in Healthcare</Subtitle>
            <Title>
              Dr. Prabhat Memorial <Highlight>Hiramati Hospital</Highlight>
            </Title>
            <FeatureGrid>
              {features.map((feature, index) => (
                <FeatureItem key={index}>
                  <FeatureIcon>{feature.icon}</FeatureIcon>
                  <FeatureText>{feature.text}</FeatureText>
                </FeatureItem>
              ))}
            </FeatureGrid>
          </HeaderSection>

          <Paragraph>
            Welcome to <BoldText>Dr. Prabhat Memorial Hiramati Hospital</BoldText>, Patna's premier super-specialty medical institution. Built in honor of the visionary Late Dr. Prabhat Kumar, our hospital stands as a beacon of advanced healthcare in Bihar. Founded by an esteemed group of AIIMS, New Delhi alumni, we are dedicated to delivering cutting-edge medical care that combines state-of-the-art technology with a compassionate, patient-first approach.
          </Paragraph>

          <LocationTag>
            <PinIcon>📍</PinIcon>
            Centrally located near Dinkar Golamber, Rajendra Nagar, Patna
          </LocationTag>

          <ActionSection>
            <BlueButton>
              Book Appointment
            </BlueButton>
            <SecondaryButton>
              Virtual Consultation
            </SecondaryButton>
          </ActionSection>
        </ContentWrapper>
      </HospitalContainer>

      <DescriptionSection>
        <ContentGrid>
          <TextContent>
            <SectionHeader>
              <SectionIcon>🏥</SectionIcon>
              <SectionTitle>Comprehensive Specialties, Personalized Care</SectionTitle>
            </SectionHeader>
            <Div1>
              <div>
                 <Paragraph>
              At Dr. Prabhat Memorial Hiramati Hospital, we specialize in a diverse range of medical fields, including <BoldText>Emergency and Critical Care</BoldText> ,<BoldText>Cardiology, Nephrology, Neurology, Oncology</BoldText>, and more. With advanced diagnostic tools and innovative treatment methodologies, our highly skilled doctors, surgeons, and healthcare professionals offer personalized care tailored to each patient's unique needs.
            </Paragraph>
            <BenefitsList>
              <BenefitItem>
                <FaCheckCircle className="check-icon" />
                Life-saving surgeries and interventions
              </BenefitItem>
              <BenefitItem>
                <FaCheckCircle className="check-icon" />
                Expert multi-specialty consultations
              </BenefitItem>
              <BenefitItem>
                <FaCheckCircle className="check-icon" />
                Comprehensive health check-ups
              </BenefitItem>
              <BenefitItem>
                <FaCheckCircle className="check-icon" />
                Seamless patient experience
              </BenefitItem>
            </BenefitsList>
              </div>
              <img src={Compassion} alt='Compassion ' />
            </Div1>
           
          </TextContent>

          <TextContent>
            <SectionHeader>
              <SectionIcon>💡</SectionIcon>
              <SectionTitle>Innovative Medicine Backed by Compassion</SectionTitle>
            </SectionHeader>
            <Div1>
              <img src={Inovative} alt="innovative image" />
              <div style={{paddingLeft: '20px'}}>
                <Paragraph>
              We pride ourselves on integrating evidence-based practices into every facet of patient care. Our hospital is equipped with cutting-edge technology to deliver precise diagnoses and successful treatments.
            </Paragraph>
            <TechHighlight>
              <TechItem>Digital Imaging & Diagnostics</TechItem>
              <TechItem>Minimally Invasive Surgery</TechItem>
              <TechItem>Electronic Health Records</TechItem>
              <TechItem>Telemedicine Services</TechItem>
            </TechHighlight>
              </div>             

            </Div1>
            
          </TextContent>

          <TextContent>
            <SectionHeader>
              <SectionIcon>❤️</SectionIcon>
              <SectionTitle>A Legacy of Care, Community at Heart</SectionTitle>
            </SectionHeader>
            <Div1>
              <div>
                <Paragraph>
              Dr. Prabhat Memorial Hiramati Hospital is more than just a medical facility—it's a pillar of community welfare. Inspired by Dr. Prabhat Kumar's vision, we actively support the underprivileged through various outreach initiatives.
            </Paragraph>
            <CommunityInitiatives>
              <InitiativeCard>
                <InitiativeTitle>Health Camps</InitiativeTitle>
                <InitiativeDesc>Regular free health check-up camps</InitiativeDesc>
              </InitiativeCard>
              <InitiativeCard>
                <InitiativeTitle>Rural Outreach</InitiativeTitle>
                <InitiativeDesc>Healthcare access to remote areas</InitiativeDesc>
              </InitiativeCard>
              <InitiativeCard>
                <InitiativeTitle>Medical Education</InitiativeTitle>
                <InitiativeDesc>Training future healthcare professionals</InitiativeDesc>
              </InitiativeCard>
            </CommunityInitiatives>
              </div>
              <img src={LegecyIg} alt="legecy of care" />
            </Div1>
            
          </TextContent>
        </ContentGrid>
      </DescriptionSection>
    </AboutUsDetailsContainer>
  );
};

export default AboutUsDetails;

// Enhanced Styled Components
const AboutUsDetailsContainer = styled.div`
  padding: 2rem 1rem;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);

  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }
`;

const HospitalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  gap: 3rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 4rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);

  @media (min-width: 1024px) {
    width: 45%;
    flex-shrink: 0;
  }
`;

const HospitalImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
`;

const ExperienceBadge = styled.div`
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 15px;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const Years = styled.div`
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
`;

const ExperienceText = styled.div`
  font-size: 0.9rem;
  opacity: 0.9;
`;

const ContentWrapper = styled.div`
  width: 100%;
  flex: 1;

  @media (min-width: 1024px) {
    width: 55%;
  }
`;

const HeaderSection = styled.div`
  margin-bottom: 2rem;
`;

const Subtitle = styled.h3`
  color: #3b82f6;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 3rem;
    text-align: left;
  }

  @media (min-width: 1024px) {
    font-size: 3.5rem;
  }
`;

const Highlight = styled.span`
  color: #3b82f6;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 2rem 0;

  @media (min-width: 480px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const FeatureIcon = styled.div`
  color: #3b82f6;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const FeatureText = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  color: #475569;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #475569;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 1.15rem;
  }
`;

const BoldText = styled.span`
  font-weight: 700;
  color: #1e293b;
`;

const LocationTag = styled.div`
  display: inline-flex;
  align-items: center;
  background: #f1f5f9;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-size: 0.9rem;
  color: #475569;
  margin: 1.5rem 0;
  border: 1px solid #e2e8f0;
`;

const PinIcon = styled.span`
  margin-right: 0.5rem;
`;

const ActionSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;

  @media (min-width: 480px) {
    flex-direction: row;
  }
`;

const ButtonBase = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

const BlueButton = styled(ButtonBase)`
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;

  &:hover {
    background: linear-gradient(135deg, #2563eb, #1e40af);
  }
`;

const SecondaryButton = styled(ButtonBase)`
  background: transparent;
  color: #3b82f6;
  border: 2px solid #3b82f6;

  &:hover {
    background: #3b82f6;
    color: white;
  }
`;

const DescriptionSection = styled.div`
  max-width: 1200px;
  margin: 4rem auto 0;
`;

const ContentGrid = styled.div`
  display: flex;
  flex-direction:column;
  gap: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TextContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid #f1f5f9;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const SectionIcon = styled.span`
  font-size: 2rem;
  margin-right: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
`;

const BenefitItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #475569;

  .check-icon {
    color: #10b981;
    margin-right: 0.75rem;
    flex-shrink: 0;
  }
`;

const TechHighlight = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  margin-top: 1.5rem;

  @media (min-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const TechItem = styled.div`
  background: #f8fafc;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  font-size: 0.9rem;
  color: #475569;
  text-align: center;
  border: 1px solid #e2e8f0;
`;

const CommunityInitiatives = styled.div`
  display: flex;
  justify-content:space-between;
  gap: 1rem;
  margin-top: 1.5rem;
  @media (max-width: 600px){
    flex-direction: column;
  }
`;

const InitiativeCard = styled.div`
  background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
  padding: 1.5rem;
  border-radius: 15px;
  border-left: 4px solid #3b82f6;
`;

const InitiativeTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 0.5rem 0;
`;

const InitiativeDesc = styled.p`
  font-size: 0.9rem;
  color: #64748b;
  margin: 0;
  line-height: 1.5;
`;

const Div1 = styled.div`
  display: flex;

  img{
      width: 400px;
      border-radius:10px;
    }

`