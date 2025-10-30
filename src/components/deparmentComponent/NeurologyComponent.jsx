import React from 'react';
import styled from 'styled-components';

// Styled Components
const NeurologyContainer = styled.section`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 2rem 0.8rem;
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #3498db, #2c3e50);
    border-radius: 2px;
  }
`;

const Subtitle = styled.p`
  color: #7f8c8d;
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Section = styled.div`
  background: white;
  border-radius: 15px;
  padding: 2.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  border-left: 5px solid #3498db;
  
  &:hover {
    transform: translateY(-5px);
    transition: transform 0.3s ease;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 600px){
  padding: 0.5rem;
  }
`;

const SectionTitle = styled.h2`
  color: #2c3e50;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 10px;
  
  &::before {
    content: '⚕️';
    font-size: 1.5rem;
  }
`;

const Text = styled.p`
  color: #555;
  margin-bottom: 1rem;
  font-size: 1.1rem;
`;

const ConditionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
`;

const ConditionItem = styled.div`
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  border-left: 3px solid #3498db;
  font-weight: 500;
  color: #2c3e50;
    @media (max-width: 600px){
  padding: 0.5rem;
  }
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
`;

const TechItem = styled.div`
  background: linear-gradient(135deg, #e3f2fd, #bbdefb);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  font-weight: 600;
  color: #1565c0;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
    @media (max-width: 600px){
  padding: 0.5rem;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
`;

const TeamItem = styled.div`
  background: #e8f5e9;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  font-weight: 600;
  color: #2e7d32;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);

    @media (max-width: 600px){
  padding: 0.5rem;
  }
`;

const Highlight = styled.span`
  color: #e74c3c;
  font-weight: 600;
`;

const CTAButton = styled.button`
  background: linear-gradient(135deg, #3498db, #2980b9);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 50px;
  cursor: pointer;
  margin-top: 1rem;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(52, 152, 219, 0.4);
    background: linear-gradient(135deg, #2980b9, #3498db);
  }

    @media (max-width: 600px){
  padding: 0.5rem;
  }
`;

// React Component
const NeurologyComponent = () => {
  const conditions = [
    'Stroke', 'Epilepsy', 'Parkinson’s Disease', 
    'Multiple Sclerosis', 'Migraines', 'Neurodegenerative Disorders'
  ];

  const technologies = [
    'MRI', 'CT Scans', 'EEG', 'EMG'
  ];

  const teamMembers = [
    'Neurologists', 'Neurosurgeons', 'Physical Therapists', 'Occupational Therapists'
  ];

  return (
    <NeurologyContainer>
      <ContentWrapper>
        <Header>
         {/*  <Title>Neurology Department</Title> */}
          <Subtitle>
            At Dr. Prabhat Memorial Hiramati Hospital, our Neurology department is dedicated to 
            diagnosing and treating a wide range of neurological disorders with precision and compassion.
          </Subtitle>
        </Header>

        <Section>
          <SectionTitle>Comprehensive Care</SectionTitle>
          <Text>
            Our team of experienced neurologists is committed to delivering advanced, 
            patient-centered care for conditions affecting the brain, spinal cord, nerves, and muscles.
          </Text>
          <Text>
            We provide comprehensive care for a variety of neurological conditions including:
          </Text>
          <ConditionsGrid>
            {conditions.map((condition, index) => (
              <ConditionItem key={index}>
                {condition}
              </ConditionItem>
            ))}
          </ConditionsGrid>
        </Section>

        <Section>
          <SectionTitle>Advanced Diagnostics</SectionTitle>
          <Text>
            Our department is equipped with state-of-the-art diagnostic tools to accurately 
            assess and diagnose neurological issues. These technologies enable us to develop 
            effective, personalized treatment plans based on each patient's unique condition.
          </Text>
          <TechGrid>
            {technologies.map((tech, index) => (
              <TechItem key={index}>
                {tech}
              </TechItem>
            ))}
          </TechGrid>
        </Section>

        <Section>
          <SectionTitle>Multidisciplinary Approach</SectionTitle>
          <Text>
            Our approach to neurological care involves a multidisciplinary team to ensure 
            a holistic approach to treatment. We offer a range of treatments and interventions, 
            including medication management, physical therapy, lifestyle modifications, and, 
            when necessary, surgical options.
          </Text>
          <TeamGrid>
            {teamMembers.map((member, index) => (
              <TeamItem key={index}>
                {member}
              </TeamItem>
            ))}
          </TeamGrid>
          <Text>
            Our goal is to <Highlight>enhance the quality of life</Highlight> for our patients by 
            managing symptoms effectively and addressing the root causes of neurological conditions.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Patient Support & Education</SectionTitle>
          <Text>
            We focus on patient education and support, helping individuals and their families 
            understand their conditions and treatment options. Our team is dedicated to providing 
            ongoing support and guidance throughout the treatment process, ensuring that patients 
            are well-informed and involved in their care decisions.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Research & Innovation</SectionTitle>
          <Text>
            Dr. Prabhat Memorial Hiramati Hospital is committed to advancing neurological care 
            through research and innovation. Our department is engaged in continuous learning and 
            application of the latest developments in neurology to provide cutting-edge treatments.
          </Text>
          <Text>
            If you or a loved one is experiencing neurological symptoms or requires specialized care, 
            trust our Neurology department to offer exceptional expertise and compassionate care.
          </Text>
          <CTAButton>
            Schedule a Consultation
          </CTAButton>
        </Section>
      </ContentWrapper>
    </NeurologyContainer>
  );
};

export default NeurologyComponent;

