import React from 'react'
import styled from 'styled-components'
import AppointmentBC from '../../components/breadcrumbs/AppointmentBC'
import RequestAppointmentFormHero from './OnlineAppointment2'
import ApoiImg from '../../assets/appoint.jpg'

// ===== Styled Components =====

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding-bottom: 80px;
`;

const MainContent = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding: 15px 20px;
`;

const TopGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 40px;
  align-items: flex-start;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  max-height: 770px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;

  @media (min-width: 768px) {
    height: 100%;
  }
`;

const FormContainer = styled.div`
  background: white;
  border-radius: 10px;
padding: 0 15px;
  

  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 20px 45px rgba(0, 0, 0, 0.15);
  }
`;

// ===== Benefits Section =====

const BenefitsSection = styled.section`
  margin-top: 80px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.4rem;
  color: #2c3e50;
  margin-bottom: 60px;
  font-weight: 700;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 90px;
    height: 4px;
    background: linear-gradient(90deg, #3498db, #2ecc71);
    border-radius: 2px;
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
`;

const BenefitCard = styled.div`
  background: white;
  padding: 15px 10px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid #e8f4f8;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    border-color: #3498db;
  }
`;

const BenefitIcon = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 auto 10px;
  background: ${props => props.color || '#3498db'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: white;
`;

const BenefitTitle = styled.h3`
  font-size: 1.4rem;
  color: #2c3e50;
  margin-bottom: 15px;
  font-weight: 600;
`;

const BenefitDescription = styled.p`
  color: #7f8c8d;
  line-height: 1.6;
  font-size: 0.95rem;
`;

// ===== Stats Section =====

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 25px;
  margin-top: 30px;
  padding: 40px;
  background: linear-gradient(135deg, #004AAD 0%, #00BFFF 100%);
  border-radius: 20px;
  color: white;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  opacity: 0.9;
`;

// ===== Emergency Section =====

const EmergencySection = styled.div`
  background: linear-gradient(135deg, #ff6b6b, #ee5a24);
  color: white;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  margin-top: 30px;
  box-shadow: 0 10px 30px rgba(255, 107, 107, 0.3);
`;

const EmergencyTitle = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 15px;
`;

const EmergencyNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin: 15px 0;
`;


// ===== Main Component =====

const AppointmentPage = () => {
  const benefits = [
    {
      icon: '⏰',
      title: 'Quick Booking',
      description: 'Book appointments in less than 2 minutes with our streamlined online process.',
      color: '#3498db'
    },
    {
      icon: '👨‍⚕️',
      title: 'Expert Doctors',
      description: 'Access to 200+ highly qualified and experienced medical professionals.',
      color: '#2ecc71'
    },
/*     {
      icon: '💻',
      title: 'Telemedicine',
      description: 'Virtual consultations available for follow-ups and non-emergency cases.',
      color: '#9b59b6'
    }, */
    {
      icon: '📱',
      title: 'Mobile Friendly',
      description: 'Book appointments anytime, anywhere with our mobile-optimized platform.',
      color: '#e74c3c'
    },
    {
      icon: '🔒',
      title: 'Secure & Private',
      description: 'Your medical information is protected with enterprise-grade security.',
      color: '#f39c12'
    },
    {
      icon: '📊',
      title: 'Digital Records',
      description: 'Access your medical history and appointment records online securely.',
      color: '#1abc9c'
    }
  ];

  return (
    <PageContainer>
      <AppointmentBC />
      <MainContent>

        {/* Image and Form Side-by-Side */}
        <TopGrid>
          <ImageContainer>
            <StyledImage src={ApoiImg} alt="Doctor Consultation" />
          </ImageContainer>
          <FormContainer>
            <RequestAppointmentFormHero />
          </FormContainer>
        </TopGrid>

        {/* Benefits Section */}
        <BenefitsSection>
          <SectionTitle>Why Book Online Appointment?</SectionTitle>
          <BenefitsGrid>
            {benefits.map((benefit, index) => (
              <BenefitCard key={index}>
                <BenefitIcon color={benefit.color}>{benefit.icon}</BenefitIcon>
                <BenefitTitle>{benefit.title}</BenefitTitle>
                <BenefitDescription>{benefit.description}</BenefitDescription>
              </BenefitCard>
            ))}
          </BenefitsGrid>
        </BenefitsSection>

        {/* Stats */}
        <StatsContainer>
          <StatItem>
            <StatNumber>10K+</StatNumber>
            <StatLabel>Happy Patients</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>200+</StatNumber>
            <StatLabel>Expert Doctors</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>24/7</StatNumber>
            <StatLabel>Support Available</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>15min</StatNumber>
            <StatLabel>Average Wait Time</StatLabel>
          </StatItem>
        </StatsContainer>

        {/* Emergency Section */}
        <EmergencySection>
          <EmergencyTitle>🚨 Emergency Medical Assistance</EmergencyTitle>
          <p>For urgent medical concerns that require immediate attention</p>
          <EmergencyNumber><a href='tel:+91 84060 00555'>📞 84060 00555</a> </EmergencyNumber>
          <p>Available 24/7 • Immediate Response</p>
        </EmergencySection>

      </MainContent>
    </PageContainer>
  );
};

export default AppointmentPage;
