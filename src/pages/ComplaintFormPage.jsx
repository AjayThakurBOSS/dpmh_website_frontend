import React from 'react';
import ComplaintForm from '../components/ComplaintForm';
import styled from 'styled-components';
import hospitalImage from '../assets/complaint.png'; 
import { FaArrowAltCircleRight } from "react-icons/fa";


const ComplaintFormPage = () => {
  return (
    <PageContainer>
      <HeroSection>
        <PageTitle>We're Here to Listen</PageTitle>
        <PageSubtitle>
          Your feedback is crucial in helping us improve our services and provide the best possible care.
        </PageSubtitle>
      </HeroSection>

      <ContentWrapper>
        {/* Left Side - Image & Supporting Content */}
        <LeftContentSection>
          <SupportImage src={hospitalImage} alt="Hospital Customer Service" />

        </LeftContentSection>
        


        {/* Right Side - Complaint Form */}
        <FormSection>
          <ComplaintForm />
        </FormSection>

      </ContentWrapper>
          <SupportContent>
            <h3>Our Commitment to You</h3>
            <p>
              At <strong>Dr. Prabhat Memorial Hiramati Hospital</strong>, we hold ourselves to the highest standards of patient care and service. We understand that sometimes things don't go as planned, and we sincerely value you bringing these matters to our attention.
            </p>
            <p>
              When you submit a complaint, our dedicated Patient Relations team will:
            </p>
            <ul>
              <li> <FaArrowAltCircleRight className='mr-3'/> Acknowledge your complaint within <strong>24 hours</strong>.</li>
              <li> <FaArrowAltCircleRight className='mr-3'/> Conduct a thorough and impartial investigation.</li>
              <li> <FaArrowAltCircleRight className='mr-3'/> Work with the relevant departments to address the issue.</li>
              <li> <FaArrowAltCircleRight className='mr-3'/> Provide you with a formal response and resolution.</li>
            </ul>
            <p className='text-center' style={{color:'brown', fontSize:'1.2rem', fontWeight: '600'}}>
              Your voice matters. Thank you for helping us serve you better.
            </p>
          </SupportContent>
    </PageContainer>
  );
};

export default ComplaintFormPage;

// Styled Components
const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 3rem;
  padding: 1rem;
`;

const PageTitle = styled.h1`
  color: #004AAD;
  margin-bottom: 0.5rem;
  font-size:3rem;
  font-weight: 700;
  @media (max-width: 500px){
    font-size: 1.8px;
  }
`;

const PageSubtitle = styled.p`
  font-size: 1.1rem;
  color: #555;
  max-width: 600px;
  margin: 0 auto;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const LeftContentSection = styled.aside``;

const SupportImage = styled.img`
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
`;

const SupportContent = styled.div`
  background-color: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #2c5aa0;
  margin-top: 2rem;
  font-size: 1rem;
  h3 {
    color: #2c5aa0;
    margin-top: 0;
    font-size: 1.8rem;
    font-weight: 600;
  }

  ul {
    padding-left: 1.5rem;
  }

  li {
  display: flex;
  align-items: center;
  
    margin-bottom: 0.5rem;
    font-weight: 600;
  }
`;

const FormSection = styled.section`
  background: #fff;
  padding: rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;