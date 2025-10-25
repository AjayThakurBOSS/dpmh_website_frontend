import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import RequestAppointmentFormHero from '../../src/pages/appointment/OnlineAppointment2';

const Hero = () => {
  return (
    <HeroContainer>
      <Content>
        <Title>Dr. Prabhat Memorial Hiramati Hospital</Title>
        <Subtitle>
          Center of Excellence for Cardiology, Surgery, Trauma, Emergency and Critical Care Services
        </Subtitle>
        <InsuranceInfo>
          CGHS, CAPF, CMRF, Ayushman Card और सभी TPA के अन्तर्गत निःशुल्क ईलाज |
        </InsuranceInfo>

        <ButtonContainer>
          <StyledLink to="/about">READ MORE</StyledLink>
          <StyledLink to="/appointment" primary>Book Appointment</StyledLink>
        </ButtonContainer>
      </Content>

      <FormWrapper>
        <RequestAppointmentFormHero />
      </FormWrapper>
    </HeroContainer>
  );
}

export default Hero;

// -------------------- STYLES --------------------

const HeroContainer = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(to bottom, #2C4B98, #149BD2);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 4rem;
  gap: 2rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 2rem 1rem;
    min-height: auto;
  }
`;

const Content = styled.div`
  flex: 1;
  max-width: 55%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;

  @media (max-width: 1024px) {
    max-width: 100%;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

const FormWrapper = styled.div`
  flex: 1;
  max-width: 45%;
  
  border-radius: 16px;
  //box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
    height: auto;

  @media (max-width: 1024px) {
    max-width: 600px;
    width: 100%;
    padding: 10px;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0.8rem;
  }
`;

const Title = styled.h1`
  color: white;
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const Subtitle = styled.h2`
  color: white;
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0;
  line-height: 1.5;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const InsuranceInfo = styled.h2`
  color: #FFD700;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  line-height: 1.4;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;


  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
`;

const StyledLink = styled(Link)`
  background-color: ${props => props.primary ? '#FF6B35' : 'transparent'};
  color: white;
  padding: 10px 15px;
  text-decoration: none;
  border: 2px solid white;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  min-width: 180px;
  text-align: center;

  &:hover {
    background-color: ${props => props.primary ? '#E55A2B' : 'white'};
    color: ${props => props.primary ? 'white' : '#2C4B98'};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    min-width: 100px;
    padding: 5px 11px;
    flex-direction: row;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 250px;
    font-size: 10px;
    
  }
`;
