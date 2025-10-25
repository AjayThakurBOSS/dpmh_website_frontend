import React from 'react';
import styled from 'styled-components';
import DrPrabhat from '../assets/dr-prabhat-4.webp'

const HospitalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    padding: 40px;
  }
`;

const ImageWrapper = styled.div`
  margin-bottom: 30px;
  width: 100%;
  max-width: 400px; /* Adjust as needed */

  @media (min-width: 768px) {
    margin-right: 50px;
    margin-bottom: 0;
    width: 40%;
  }
`;

const HospitalImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px; /* Optional: adds a slight rounded corner */
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 700px; /* Adjust as needed */

  @media (min-width: 768px) {
    width: 60%;
  }
`;

const Subtitle = styled.h3`
  color: #007bff; /* Example color, adjust to match image if possible */
  text-transform: uppercase;
  font-size: 0.9em;
  margin-bottom: 10px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Title = styled.h1`
  font-size: 2em;
  color: #333;
  margin-bottom: 20px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2.5em;
    text-align: left;
  }
`;

const Paragraph = styled.p`
  font-size: 1em;
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
  text-align: justify;
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const BlueButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 25px;
  font-size: 1em;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    background-color: #0056b3;
  }

  @media (min-width: 768px) {
    display: inline-block;
    margin-left: 0;
  }
`;

const HelpChat = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;
  font-size: 0.9em;
  color: #777;

  img {
    margin-left: 10px;
    width: 24px; /* Adjust icon size */
    height: 24px;
  }
`;

const DrPrabhatSir = () => {
  return (
    <HospitalContainer>
      <ImageWrapper>
        {/* Replace with the actual image source */}
        <HospitalImage src={DrPrabhat} alt="Dr. Prabhat Kumar" />
      </ImageWrapper>
      <ContentWrapper>
        <Subtitle>Making Miracles Happen</Subtitle>
        <Title>
          Prabhat Memorial Hospital | Top Multispeciality Hospital in Patna
        </Title>
        <Paragraph>
          Driven by the vision of Late Dr. Prabhat Kumar to establish a state-of-the-art healthcare facility in Bihar, <BoldText>Dr. Prabhat Memorial Hiramati Hospital</BoldText> was founded by distinguished alumni of AIIMS, New Delhi. Today, it stands proudly as one of the <BoldText>best hospitals in Patna</BoldText>, offering world-class medical services to patients from across the region.
        </Paragraph>
        <Paragraph>
          Located in the heart of <BoldText>Rajendra Nagar, Patna</BoldText>, our hospital is a beacon of hope for individuals seeking advanced treatment and compassionate care. We specialize in a wide range of services including <BoldText>Best Trauma care, Cardio care, Neuro care</BoldText>, orthopedics, critical care, and more – ensuring comprehensive healthcare under one roof.
        </Paragraph>
        <Paragraph>
          Our commitment is to deliver the highest standards of care, combining expert medical knowledge with empathy and professionalism. Every patient who enters our hospital is treated with utmost dignity, compassion, and respect.
        </Paragraph>
        <Paragraph>
          At <BoldText>Dr. Prabhat Memorial Hiramati Hospital</BoldText>, we are dedicated to building a first-class, patient-focused healthcare service, grounded in high-quality, evidence-based medical practice. Whether you require emergency services, specialized treatment, or preventive care, you can trust us to be your partner in health.
        </Paragraph>
        <BlueButton>Read More</BlueButton>
       
      </ContentWrapper>
    </HospitalContainer>
  );
};

export default DrPrabhatSir;

