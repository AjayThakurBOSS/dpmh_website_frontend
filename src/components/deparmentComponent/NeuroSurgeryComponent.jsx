import React from 'react';
import styled from 'styled-components';

// Styled Components
const NeuroSurgeryContainer = styled.section`
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
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
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #e74c3c, #c0392b);
    border-radius: 2px;
  }
`;

const Subtitle = styled.p`
  color: #7f8c8d;
  font-size: 1.2rem;
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.8;
`;

const Section = styled.div`
  background: white;
  border-radius: 15px;
  padding: 2.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  border-left: 5px solid #e74c3c;
  
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
    content: '🧠';
    font-size: 1.5rem;
  }
`;

const SpineSectionTitle = styled(SectionTitle)`
  &::before {
    content: '🦴';
  }
`;

const Text = styled.p`
  color: #555;
  margin-bottom: 1.2rem;
  font-size: 1.1rem;
  line-height: 1.7;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const ServiceCard = styled.div`
  background: ${props => props.brain ? 'linear-gradient(135deg, #e8f4f8, #d1e7f3)' : 'linear-gradient(135deg, #f9ebea, #f2d7d5)'};
  padding: 2rem;
  border-radius: 12px;
  border-left: 4px solid ${props => props.brain ? '#3498db' : '#e74c3c'};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }

   @media (max-width: 600px){
      padding: 0.5rem;
    }
`;

const ServiceTitle = styled.h3`
  color: ${props => props.brain ? '#2c3e50' : '#2c3e50'};
  font-size: 1.4rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ConditionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

const ConditionItem = styled.li`
  background: rgba(255, 255, 255, 0.7);
  padding: 0.8rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 8px;
  border-left: 3px solid ${props => props.brain ? '#3498db' : '#e74c3c'};
  font-weight: 500;
  color: #2c3e50;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &::before {
    content: '✓';
    color: ${props => props.brain ? '#3498db' : '#e74c3c'};
    font-weight: bold;
  }
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
`;

const TechItem = styled.div`
  background: linear-gradient(135deg, #e8f6f3, #d0ece7);
  padding: 1.2rem;
  border-radius: 10px;
  text-align: center;
  font-weight: 600;
  color: #1a5276;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);

   @media (max-width: 600px){
      padding: 0.5rem;
    }
`;

const SurgicalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
`;

const SurgicalItem = styled.div`
  background: linear-gradient(135deg, #fef9e7, #fcf3cf);
  padding: 1.2rem;
  border-radius: 10px;
  text-align: center;
  font-weight: 600;
  color: #7d6608;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  font-size: 0.95rem;

   @media (max-width: 600px){
      padding: 0.5rem;
    }
`;

const ApproachGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

const ApproachCard = styled.div`
  background: linear-gradient(135deg, #f4ecf7, #e8daef);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

   @media (max-width: 600px){
      padding: 0.5rem;
    }
`;

const ApproachIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const ApproachTitle = styled.h4`
  color: #6c3483;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;

const Highlight = styled.span`
  color: #e74c3c;
  font-weight: 600;
`;

const CTAButton = styled.button`
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  border-radius: 50px;
  cursor: pointer;
  margin-top: 1rem;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(231, 76, 60, 0.4);
    background: linear-gradient(135deg, #c0392b, #e74c3c);
  }
`;

// React Component
const NeuroSurgeryComponent = () => {
  const brainConditions = [
    'Brain Tumors',
    'Traumatic Brain Injuries',
    'Epilepsy',
    'Vascular Disorders'
  ];

  const spineConditions = [
    'Spinal Stenosis',
    'Herniated Discs',
    'Scoliosis',
    'Degenerative Disc Diseases'
  ];

  const diagnosticTools = [
    'MRI', 'CT Scans', 'EEG', 'Advanced Imaging'
  ];

  const surgicalTechniques = [
    'Microdiscectomy',
    'Spinal Fusion',
    'Kyphoplasty',
    'Minimally Invasive Procedures'
  ];

  const treatmentApproaches = [
    { icon: '💊', title: 'Medication Management', desc: 'Conservative drug therapies' },
    { icon: '🏃', title: 'Physiotherapy', desc: 'Rehabilitation exercises' },
    { icon: '🔬', title: 'Minimally Invasive', desc: 'Reduced recovery times' },
    { icon: '👨‍⚕️', title: 'Surgical Options', desc: 'When necessary for best outcomes' }
  ];

  return (
    <NeuroSurgeryContainer>
      <ContentWrapper>
        <Header>
          <Title>Neuro & Spine Surgery Department</Title>
          <Subtitle>
            At Dr. Prabhat Memorial Hiramati Hospital, our Neuro & Spine Surgery Department is 
            dedicated to providing advanced, comprehensive care for patients with neurological 
            and spinal disorders. Our team of experienced neurosurgeons, spine specialists, and 
            healthcare professionals is equipped with the latest technology and techniques.
          </Subtitle>
        </Header>

        <ServicesGrid>
          <ServiceCard brain>
            <ServiceTitle brain>
              🧠 Neurosurgery Services
            </ServiceTitle>
            <Text>
              Our Neurosurgery services include the treatment of brain conditions using 
              cutting-edge diagnostic tools to accurately diagnose neurological conditions 
              and create customized treatment plans.
            </Text>
            <strong>Conditions We Treat:</strong>
            <ConditionList>
              {brainConditions.map((condition, index) => (
                <ConditionItem key={index} brain>
                  {condition}
                </ConditionItem>
              ))}
            </ConditionList>
          </ServiceCard>

          <ServiceCard>
            <ServiceTitle>
              🦴 Spine Surgery Services
            </ServiceTitle>
            <Text>
              Our Spine Surgery team specializes in treating spinal disorders employing both 
              traditional and minimally invasive surgical techniques, ensuring reduced recovery 
              times and quicker return to normal activities.
            </Text>
            <strong>Conditions We Treat:</strong>
            <ConditionList>
              {spineConditions.map((condition, index) => (
                <ConditionItem key={index}>
                  {condition}
                </ConditionItem>
              ))}
            </ConditionList>
          </ServiceCard>
        </ServicesGrid>

        <Section>
          <SectionTitle>Advanced Diagnostic Technology</SectionTitle>
          <Text>
            We use cutting-edge diagnostic tools to accurately diagnose neurological and spinal 
            conditions, enabling us to create customized treatment plans for each patient.
          </Text>
          <TechGrid>
            {diagnosticTools.map((tech, index) => (
              <TechItem key={index}>
                {tech}
              </TechItem>
            ))}
          </TechGrid>
        </Section>

        <Section>
          <SpineSectionTitle>Surgical Techniques & Procedures</SpineSectionTitle>
          <Text>
            We employ both traditional and minimally invasive surgical techniques, ensuring 
            reduced recovery times, less pain, and quicker return to normal activities. Our 
            advanced imaging technology ensures precision in diagnosis and treatment.
          </Text>
          <SurgicalGrid>
            {surgicalTechniques.map((technique, index) => (
              <SurgicalItem key={index}>
                {technique}
              </SurgicalItem>
            ))}
          </SurgicalGrid>
        </Section>

        <Section>
          <SectionTitle>Personalized Treatment Approach</SectionTitle>
          <Text>
            Our approach emphasizes personalized care, with treatment plans designed to meet 
            each patient's specific needs. We focus on providing relief from pain and improving 
            functionality, allowing patients to regain their mobility and quality of life.
          </Text>
          
          <ApproachGrid>
            {treatmentApproaches.map((approach, index) => (
              <ApproachCard key={index}>
                <ApproachIcon>{approach.icon}</ApproachIcon>
                <ApproachTitle>{approach.title}</ApproachTitle>
                <Text style={{ fontSize: '1rem', margin: 0 }}>{approach.desc}</Text>
              </ApproachCard>
            ))}
          </ApproachGrid>

          <Text>
            From conservative treatments to more advanced interventions, our team works closely 
            with patients to guide them through every step of their care journey.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Your Path to Better Health</SectionTitle>
          <Text>
            If you or a loved one requires expert care for neurological or spinal conditions, 
            trust the Neuro & Spine Surgery Department at Dr. Prabhat Memorial Hiramati Hospital. 
            With our <Highlight>advanced facilities</Highlight>, <Highlight>expert surgeons</Highlight>, 
            and <Highlight>patient-focused approach</Highlight>, we are committed to helping you 
            achieve the best possible outcomes.
          </Text>
          <Text>
            Contact us today to schedule a consultation and take the first step toward better 
            neurological and spinal health.
          </Text>
          <CTAButton>
            Schedule Your Consultation
          </CTAButton>
        </Section>
      </ContentWrapper>
    </NeuroSurgeryContainer>
  );
};

export default NeuroSurgeryComponent;

