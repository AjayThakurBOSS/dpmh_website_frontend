import React from 'react';
import styled from 'styled-components';
import { FaHeartbeat, FaStethoscope, FaFlask, FaUserMd, FaShieldAlt, FaPhoneAlt } from 'react-icons/fa';
import CancerImg from '../assets/cancerHeder.webp'

// --- Styled Components ---

const CancerCareContainer = styled.div`
  max-width: 1500px;
  margin: 40px auto;
  padding: 30px;
  background: linear-gradient(135deg, #f0f4f8 0%, #ffffff 100%); /* Soft gradient background */
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
  color: #333;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: #007bff; /* Primary blue for trust */
  margin-bottom: 5px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;

    @media (max-width: 500px){
    font-size: 1.5rem;
    }
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  color: #555;
  font-weight: 300;

  @media (max-width: 500px){
    font-size: 14px;
    }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

const FeatureCard = styled.div`
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  border-left: 5px solid ${props => props.borderColor || '#007bff'};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const CardIcon = styled.div`
  font-size: 2em;
  color: ${props => props.iconColor || '#007bff'};
  margin-bottom: 10px;
`;

const CardTitle = styled.h3`
  font-size: 1.3em;
  color: #222;
  margin-bottom: 10px;
  font-weight: 600;
`;

const CardText = styled.p`
  font-size: 0.95em;
  color: #666;
  line-height: 1.5;
`;

const CallToAction = styled.div`
  text-align: center;
  padding: 25px;
  background-color: #e6f0ff; /* Light blue background */
  border-radius: 10px;
  border: 1px solid #cce0ff;
`;

const CtaText = styled.p`
  font-size: 1.4em;
  color: #0056b3;
  margin-bottom: 15px;
  font-weight: 600;
`;

const CallButton = styled.a`
  display: inline-flex;
  align-items: center;
  background-color: #28a745; /* Green for action/health */
  color: white;
  padding: 12px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-size: 1.2em;
  font-weight: 700;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #218838;
  }

  svg {
    margin-right: 8px;
  }
`;

// --- React Component ---

const CancerCare = () => {
  return (
    <CancerCareContainer>
      <Header>
        <Title>
          
          Pioneering Advanced  CANCER CARE  in Patna
        </Title>
        <Subtitle>
          Your best chance at recovery begins here. Comprehensive Oncology Care, <b style={{fontWeight:'600'}}>All Under One Roof</b>.
        </Subtitle>
      </Header>

    <MainContainer>
        <ImageContainer>
            <img src={CancerImg} alt='cancer care' />
        </ImageContainer>
        <FeatureGrid>
            {/* Feature 1: Comprehensive Treatment */}
            <FeatureCard borderColor="#dc3545">
            <CardIcon iconColor="#dc3545">
                <FaStethoscope />
            </CardIcon>
            <CardTitle>Comprehensive Treatment</CardTitle>
            <CardText>
                Get complete <b>Oncology Care</b>, from <b>Chemotherapy</b> to <b>Advanced Onco-Surgeries</b>, designed to meet international NCCN-based protocols.
            </CardText>
            </FeatureCard>

            {/* Feature 2: Expert Team & ICU Backup */}
            <FeatureCard borderColor="#ffc107">
            <CardIcon iconColor="#ffc107">
                <FaUserMd />
            </CardIcon>
            <CardTitle>Expert Team & Safety</CardTitle>
            <CardText>
                Our team of experienced oncologists and surgeons provide personalized treatment, backed by <b>24x7 ICU support</b> for unparalleled patient safety.
            </CardText>
            </FeatureCard>

            {/* Feature 3: Patient Convenience */}
            <FeatureCard borderColor="#17a2b8">
            <CardIcon iconColor="#17a2b8">
                <FaShieldAlt />
            </CardIcon>
            <CardTitle>Hassle-Free Cashless</CardTitle>
            <CardText>
                Focus purely on recovery with our seamless cashless treatment facility through <b>Ayushman Bharat</b> and all major <b>TPAs (Third-Party Administrators)</b>.
            </CardText>
            </FeatureCard>

            {/* Feature 4: Hope and Support */}
            <FeatureCard borderColor="#28a745">
            <CardIcon iconColor="#28a745">
                <FaFlask />
            </CardIcon>
            <CardTitle>Compassionate Support</CardTitle>
            <CardText>
                More than medicine, we provide compassionate support and world-class facilities, dedicating ourselves to giving every patient <b>hope for a healthier tomorrow</b>.
            </CardText>
            </FeatureCard>
        </FeatureGrid>
    </MainContainer>


      <CallToAction>
        <CtaText>
          Ready to take the first step towards recovery?
        </CtaText>
        <CallButton href="tel:8406000555">
          <FaPhoneAlt />
          <a href='tel:8406000555'>Call Us Today: 8406000555</a>
          
        </CallButton>
      </CallToAction>
    </CancerCareContainer>
  );
};

export default CancerCare;

const MainContainer = styled.div``

const ImageContainer = styled.div`
    margin-bottom: 20px;

    img{
        border-radius: 10px;
    }

`