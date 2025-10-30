import React from 'react';
import styled from 'styled-components';
import { FaHeartbeat, FaStethoscope, FaCheckCircle, FaPhoneAlt } from 'react-icons/fa';
import AboutBig from '../assets/AboutBigImg.webp'
import AboutSmall from '../assets/AboutSmallImg.webp'

// --- Main Container ---
const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 60px 40px;
  }
`;

// --- Left Content Area ---
const TextContentWrapper = styled.div`
  width: 100%;
  margin-bottom: 40px;

  @media (min-width: 992px) {
    width: 45%;
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5em;
  color: #333;
  margin-bottom: 10px;
  font-weight: bold;
`;

const SectionSubtitle = styled.h3`
  font-size: 1.2em;
  color: #555;
  margin-bottom: 25px;
  font-weight: 500;
`;

const Paragraph = styled.p`
  font-size: 1em;
  line-height: 1.6;
  color: #555;
  margin-bottom: 30px;
`;

// --- Feature Icons Section ---
const FeaturesGrid = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 30px;
`;

const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 48%; /* Ensures two items per row */
  
`;

const IconCircle = styled.div`
  background-color: #e6f0ff; /* Light blue background for the circle */
  color: #007bff; /* Icon color */
  border-radius: 50%;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  svg {
    font-size: 2em;
  }
`;

const FeatureText = styled.p`
  font-size: 1.1em;
  font-weight: bold;
  color: #333;
  line-height: 1.3;
`;

// --- Checkmark Lists Section ---
const CheckmarkSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;

  @media (min-width: 576px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const CheckmarkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;

  @media (min-width: 576px) {
    width: 48%;
  }
`;

const CheckmarkItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
  font-size: 1em;
  color: #555;
  
  svg {
    color: #007bff; /* Checkmark icon color */
    margin-right: 10px;
    margin-top: 3px;
    font-size: 1.2em;
    flex-shrink: 0;
  }
`;

// --- Call and Experience Section ---
const BottomRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const CallUsBox = styled.div`
  background-color: #007bff;
  color: white;
  padding: 20px;
  border-radius: 5px;
  width: 100%;
  max-width: 250px;
  box-sizing: border-box;
  text-align: center;

  @media (min-width: 768px) {
    width: auto;
  }
`;

const CallTitle = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 10px;
`;

const PhoneNumber = styled.div`
  font-size: 1em;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 500;
  
  svg {
    font-size: 1em;
  }
`;

const ExperienceBox = styled.div`
  text-align: center;
  color: #007bff;
  font-size: 4em;
  font-weight: bold;
  line-height: 1;

  span {
    display: block;
    font-size: 0.3em;
    font-weight: normal;
    color: #555;
    margin-top: 5px;
  }
`;

// --- Right Image Area ---
const ImageContentWrapper = styled.div`
  width: 100%;
  position: relative;

  @media (min-width: 992px) {
    width: 50%;
  }
`;

const MainImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
`;

const OverlayImage = styled.img`
  width: 60%;
  height: auto;
  border-radius: 8px;
  position: absolute;
  bottom: -30px; /* Pull it down and out of the main image flow */
  left: 50%;
  transform: translateX(-50%);
  border: 4px solid white; /* White border as seen in the image */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 576px) {
    width: 40%;
    left: auto;
    right: 0;
    transform: none;
    bottom: -50px;
  }
  
  @media (min-width: 992px) {
    width: 50%;
    right: -50px;
    bottom: -60px;
  }
`;

const FloatingChatIcon = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 10px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-size: 0.9em;
  color: #777;
  
  img {
    margin-left: 8px;
    width: 35px; /* Adjust to match the size in the image */
    height: 35px;
  }
`;


const AboutUsComponent = () => {
  return (
    <AboutUsContainer>
      <TextContentWrapper>
        <SectionTitle>About Us</SectionTitle>
        <SectionSubtitle>Caring for Life, Every Step of the Way</SectionSubtitle>
        <Paragraph>
          Dr. Prabhat Memorial Hospital, we are committed to providing world-class healthcare with a patient-centered approach. As a leading superspeciality hospital in Patna, we offer advanced medical treatments, cutting-edge technology, and a team of highly skilled specialists.
        </Paragraph>
        
        <FeaturesGrid>
          <FeatureItem>
            <IconCircle><FaStethoscope /></IconCircle>
            <FeatureText>Standards of Treatment</FeatureText>
          </FeatureItem>
          <FeatureItem>
            <IconCircle><FaHeartbeat /></IconCircle>
            <FeatureText>Quality of Care Services</FeatureText>
          </FeatureItem>
        </FeaturesGrid>

        <CheckmarkSection>
          <CheckmarkList>
            <CheckmarkItem><FaCheckCircle /> 24 Hours Emergency Assistance Call Us</CheckmarkItem>
            <CheckmarkItem><FaCheckCircle /> We are committed to providing healthcare service</CheckmarkItem>
          </CheckmarkList>
          <CheckmarkList>
            <CheckmarkItem><FaCheckCircle /> Really know the true needs and expectations of patients</CheckmarkItem>
            <CheckmarkItem><FaCheckCircle /> Quickly handle all patient needs</CheckmarkItem>
          </CheckmarkList>
        </CheckmarkSection>

        <BottomRow>
          <CallUsBox>
            <CallTitle>Call Us Any Time</CallTitle>
            <PhoneNumber><FaPhoneAlt /> +91-8406000555</PhoneNumber>
            <PhoneNumber><FaPhoneAlt /> +91-8406000444</PhoneNumber>
            <PhoneNumber><FaPhoneAlt /> +0612-4020100</PhoneNumber>
          </CallUsBox>
          <ExperienceBox>
            13+ 
            <span>Years Experiance</span>
          </ExperienceBox>
        </BottomRow>

      </TextContentWrapper>

      <ImageContentWrapper>
        {/* Main image placeholder: Doctor with patient */}
        <MainImage src={AboutBig} alt="Doctor examining elderly patient" />
        
        {/* Overlay image placeholder: Group of people consulting */}
        <OverlayImage src={AboutSmall} alt="Group consulting with a doctor" />
        
 
      </ImageContentWrapper>
    </AboutUsContainer>
  );
};

export default AboutUsComponent;