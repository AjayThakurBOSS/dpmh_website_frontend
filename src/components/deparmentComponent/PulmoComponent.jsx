import React from 'react';
import styled from 'styled-components';

// Styled Components
const PulmonologyContainer = styled.section`
  background: linear-gradient(135deg, #f0f8ff 0%, #e6f2ff 100%);
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
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    @media (max-width: 600px){
    padding: 0.5rem;
  }
`;

const Title = styled.h1`
  color: #0077b6;
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
    background: linear-gradient(90deg, #0077b6, #0096c7);
    border-radius: 2px;
  }
`;

const Subtitle = styled.p`
  color: #666;
  font-size: 1.2rem;
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.8;
`;

const SEOIntro = styled.div`
  background: linear-gradient(135deg, #e6f2ff, #cce7ff);
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  border-left: 5px solid #0077b6;
  text-align: center;

    @media (max-width: 600px){
    padding: 0.5rem;
  }
`;

const EmergencyAlert = styled.div`
  background: linear-gradient(135deg, #e63946, #d90429);
  color: white;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  margin: 2rem 0;
  box-shadow: 0 4px 15px rgba(230, 57, 70, 0.3);
  
  strong {
    font-size: 1.3rem;
    display: block;
    margin-bottom: 0.5rem;
  }

    @media (max-width: 600px){
    padding: 0.5rem;
  }
`;

const Section = styled.div`
  background: white;
  border-radius: 15px;
  padding: 2.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  border-left: 5px solid #0077b6;

    @media (max-width: 600px){
    padding: 0.5rem;
  }
`;

const SectionTitle = styled.h2`
  color: #0077b6;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 12px;
  
  &::before {
    content: '🫁';
    font-size: 1.5rem;
  }
`;

const Text = styled.p`
  color: #555;
  margin-bottom: 1.2rem;
  font-size: 1.1rem;
  line-height: 1.7;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
  text-align: center;
`;

const StatCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
  border: 2px solid #e6f2ff;

    @media (max-width: 600px){
    padding: 0.5rem;
  }
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #0077b6;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: #666;
  font-weight: 500;
  font-size: 0.9rem;
`;

const ConditionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const ConditionCard = styled.div`
  background: ${props => props.emergency ? 'linear-gradient(135deg, #ffe6e6, #ffcccc)' : 'linear-gradient(135deg, #e6f2ff, #cce7ff)'};
  padding: 2rem;
  border-radius: 12px;
  border-left: 4px solid ${props => props.emergency ? '#e63946' : '#0077b6'};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

    @media (max-width: 600px){
    padding: 0.5rem;
  }
`;

const ConditionTitle = styled.h3`
  color: ${props => props.emergency ? '#e63946' : '#0077b6'};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.3rem;
`;

const ConditionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

const ConditionItem = styled.li`
  background: rgba(255, 255, 255, 0.9);
  padding: 0.8rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 8px;
  border-left: 3px solid ${props => props.emergency ? '#e63946' : '#0077b6'};
  font-weight: 500;
  color: #333;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &::before {
    content: '✅';
    font-size: 0.9rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

const ServiceCard = styled.div`
  background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
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

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  color: #2e7d32;
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const TechnologyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

const TechCard = styled.div`
  background: linear-gradient(135deg, #fff3e0, #ffe0b2);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);

    @media (max-width: 600px){
    padding: 0.5rem;
  }
`;

const TechIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const TechTitle = styled.h4`
  color: #e65100;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;

const ProcessSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

const ProcessCard = styled.div`
  background: linear-gradient(135deg, #f3e5f5, #e1bee7);
  padding: 2rem 1.5rem;
  border-radius: 10px;
  text-align: center;
  position: relative;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);

    @media (max-width: 600px){
    padding: 0.5rem;
  }
`;

const ProcessNumber = styled.div`
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background: #7b1fa2;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const ProcessTitle = styled.h4`
  color: #7b1fa2;
  margin: 1rem 0 0.5rem 0;
  font-size: 1.1rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

const TeamCard = styled.div`
  background: linear-gradient(135deg, #e0f7fa, #b2ebf2);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
    @media (max-width: 600px){
    padding: 0.5rem;
  }
`;

const TeamIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Highlight = styled.span`
  color: #e63946;
  font-weight: 600;
`;

const CTAButton = styled.button`
  background: linear-gradient(135deg, #0077b6, #0096c7);
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  border-radius: 50px;
  cursor: pointer;
  margin-top: 1rem;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(0, 119, 182, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 119, 182, 0.4);
    background: linear-gradient(135deg, #0096c7, #0077b6);
  }
      @media (max-width: 600px){
    padding: 0.5rem;
  }
`;

const FAQSection = styled.div`
  background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
    @media (max-width: 600px){
    padding: 0.5rem;
  }
`;

const FAQTitle = styled.h3`
  color: #2e7d32;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.5rem;
`;

const FAQItem = styled.div`
  background: white;
  padding: 1.5rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  border-left: 4px solid #2e7d32;

    @media (max-width: 600px){
    padding: 0.5rem;
  }
`;

const Question = styled.h4`
  color: #0077b6;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Answer = styled.p`
  color: #555;
  margin: 0;
`;

// React Component
const PulmoComponent = () => {
  const emergencyConditions = [
    'Severe Pneumonia & Lung Infections',
    'Asthma Exacerbations & Acute Attacks',
    'Acute Respiratory Distress Syndrome (ARDS)',
    'Chronic Obstructive Pulmonary Disease (COPD) Flare-ups',
    'Pulmonary Embolism & Blood Clots',
    'Pleural Effusion (Fluid in Lungs)',
    'Respiratory Failure',
    'Lung Collapse (Pneumothorax)'
  ];

  const chronicConditions = [
    'Bronchial Asthma & Allergies',
    'Chronic Bronchitis & Emphysema',
    'Interstitial Lung Disease',
    'Pulmonary Fibrosis',
    'Sleep Apnea & Breathing Disorders',
    'Lung Cancer Screening & Management',
    'Tuberculosis & Respiratory Infections',
    'Occupational Lung Diseases'
  ];

  const services = [
    { icon: '🔍', title: 'Bronchoscopy', desc: 'Direct visualization and treatment of airways' },
    { icon: '💨', title: 'Pulmonary Function Tests', desc: 'Comprehensive breathing capacity assessment' },
    { icon: '🩺', title: 'Pleural Effusion Management', desc: 'Advanced fluid drainage techniques' },
    { icon: '🌬️', title: 'Oxygen Therapy', desc: 'Customized respiratory support' },
    { icon: '📊', title: 'Sleep Studies', desc: 'Diagnosis of sleep-related breathing disorders' },
    { icon: '💊', title: 'Asthma & COPD Management', desc: 'Personalized treatment plans' }
  ];

  const technologies = [
    { icon: '🖥️', title: 'Advanced Ventilators', desc: 'Life support for critical respiratory failure' },
    { icon: '📷', title: 'Video Bronchoscopy', desc: 'High-definition airway visualization' },
    { icon: '💨', title: 'PFT Machines', desc: 'Precise lung function measurement' },
    { icon: '🌡️', title: 'Blood Gas Analyzers', desc: 'Real-time oxygen level monitoring' },
    { icon: '🛌', title: 'Sleep Lab Equipment', desc: 'Comprehensive sleep disorder diagnosis' },
    { icon: '📡', title: 'CT Scan & X-Ray', desc: 'Advanced imaging for lung conditions' }
  ];

  const treatmentProcess = [
    { number: '1', title: 'Emergency Assessment', desc: 'Immediate evaluation of respiratory distress' },
    { number: '2', title: 'Rapid Stabilization', desc: 'Quick intervention to restore breathing' },
    { number: '3', title: 'Advanced Diagnosis', desc: 'Comprehensive testing and imaging' },
    { number: '4', title: 'Personalized Treatment', desc: 'Tailored therapy plans' },
    { number: '5', title: 'Continuous Monitoring', desc: '24/7 vital parameter tracking' },
    { number: '6', title: 'Follow-up Care', desc: 'Long-term management and recovery support' }
  ];

  const teamMembers = [
    { icon: '👨‍⚕️', title: 'Pulmonologists', desc: 'Lung and respiratory specialists' },
    { icon: '🚑', title: 'Emergency Physicians', desc: 'Critical care experts' },
    { icon: '💨', title: 'Respiratory Therapists', desc: 'Breathing treatment specialists' },
    { icon: '🩺', title: 'Critical Care Nurses', desc: '24/7 patient monitoring' },
    { icon: '🔬', title: 'Sleep Specialists', desc: 'Sleep disorder experts' },
    { icon: '📊', title: 'Allied Health Professionals', desc: 'Comprehensive support team' }
  ];

  const faqs = [
    {
      question: 'What are the common symptoms of pulmonary emergencies?',
      answer: 'Severe shortness of breath, chest pain, rapid breathing, bluish lips or face, confusion, and inability to speak in full sentences require immediate medical attention.'
    },
    {
      question: 'How quickly can I get treatment for a respiratory emergency?',
      answer: 'Our pulmonary emergency department provides immediate care 24/7 with an average response time of under 15 minutes for critical cases.'
    },
    {
      question: 'Do you treat COVID-19 related respiratory complications?',
      answer: 'Yes, we have specialized protocols and isolation facilities for managing COVID-19 pneumonia and other respiratory complications.'
    },
    {
      question: 'What is bronchoscopy and when is it needed?',
      answer: 'Bronchoscopy is a procedure that allows direct visualization of the airways. It is used for diagnosis, removing foreign objects, taking biopsies, and treating certain conditions.'
    },
    {
      question: 'Can you manage chronic conditions like asthma and COPD?',
      answer: 'Absolutely. We provide comprehensive management for chronic respiratory conditions including personalized treatment plans, education, and long-term follow-up care.'
    },
    {
      question: 'Do you offer sleep apnea testing and treatment?',
      answer: 'Yes, we have a fully equipped sleep lab for diagnosing sleep apnea and other sleep-related breathing disorders, with various treatment options available.'
    }
  ];

  return (
    <PulmonologyContainer>
      <ContentWrapper>
        <Header>
          <Title>Pulmonology & Respiratory Care Department</Title>
          <Subtitle>
            Expert Lung Care & Pulmonary Emergency Services in Patna - Breathing Life Back into Your Lungs
          </Subtitle>
        </Header>

        <SEOIntro>
          <Text style={{ color: '#0077b6', fontWeight: '600', margin: 0, fontSize: '1.1rem' }}>
            🏆 <strong>Best Pulmonology Hospital in Patna</strong> - Advanced respiratory care for asthma, 
            COPD, pneumonia, and pulmonary emergencies. Trust our expert pulmonologists for comprehensive 
            lung health management with state-of-the-art technology and 24/7 emergency care.
          </Text>
        </SEOIntro>

        <EmergencyAlert>
          <strong>🚨 PULMONARY EMERGENCY CARE AVAILABLE 24/7</strong>
          Immediate treatment for breathing difficulties, asthma attacks, pneumonia, and respiratory distress
        </EmergencyAlert>

        <Section>
          <SectionTitle>Advanced Pulmonary & Respiratory Care</SectionTitle>
          <Text>
            At Dr. Prabhat Memorial Hiramati Hospital in Patna, our specialized <strong>Pulmonary Emergency Department</strong> 
            is dedicated to managing urgent respiratory conditions with precision and expertise. Pulmonary emergencies, 
            including severe cases such as pneumonia, asthma exacerbations, and acute respiratory distress syndrome (ARDS), 
            require swift and effective intervention.
          </Text>
          
          <StatsContainer>
            <StatCard>
              <StatNumber>24/7</StatNumber>
              <StatLabel>Emergency Pulmonary Care</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>5000+</StatNumber>
              <StatLabel>Patients Treated Annually</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>98%</StatNumber>
              <StatLabel>Success Rate</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>15min</StatNumber>
              <StatLabel>Average Emergency Response</StatLabel>
            </StatCard>
          </StatsContainer>
        </Section>

        <Section>
          <SectionTitle>Conditions We Specialize In</SectionTitle>
          <Text>
            Our department is staffed with highly experienced pulmonologists and medical professionals 
            who are trained to address the unique challenges of critical respiratory conditions.
          </Text>
          
          <ConditionsGrid>
            <ConditionCard emergency>
              <ConditionTitle emergency>🚨 Pulmonary Emergencies</ConditionTitle>
              <Text>Immediate care for life-threatening respiratory conditions requiring urgent intervention.</Text>
              <ConditionList>
                {emergencyConditions.map((condition, index) => (
                  <ConditionItem key={index} emergency>
                    {condition}
                  </ConditionItem>
                ))}
              </ConditionList>
            </ConditionCard>

            <ConditionCard>
              <ConditionTitle>🩺 Chronic Respiratory Conditions</ConditionTitle>
              <Text>Comprehensive management of long-term lung diseases and breathing disorders.</Text>
              <ConditionList>
                {chronicConditions.map((condition, index) => (
                  <ConditionItem key={index}>
                    {condition}
                  </ConditionItem>
                ))}
              </ConditionList>
            </ConditionCard>
          </ConditionsGrid>
        </Section>

        <Section>
          <SectionTitle>Our Comprehensive Pulmonary Services</SectionTitle>
          <Text>
            We focus on rapid assessment, stabilization, and treatment, using the latest technology 
            and medical equipment to deliver high-quality care for all respiratory conditions.
          </Text>
          
          <ServicesGrid>
            {services.map((service, index) => (
              <ServiceCard key={index}>
                <ServiceIcon>{service.icon}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <Text style={{ margin: 0, fontSize: '1rem' }}>{service.desc}</Text>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </Section>

        <Section>
          <SectionTitle>Advanced Diagnostic & Treatment Technology</SectionTitle>
          <Text>
            We are equipped with advanced tools and techniques to manage pulmonary emergencies effectively. 
            Our state-of-the-art facilities ensure that we can provide prompt and accurate care.
          </Text>
          
          <TechnologyGrid>
            {technologies.map((tech, index) => (
              <TechCard key={index}>
                <TechIcon>{tech.icon}</TechIcon>
                <TechTitle>{tech.title}</TechTitle>
                <Text style={{ margin: 0, fontSize: '1rem' }}>{tech.desc}</Text>
              </TechCard>
            ))}
          </TechnologyGrid>
        </Section>

        <Section>
          <SectionTitle>Your Pulmonary Treatment Journey</SectionTitle>
          <Text>
            Our team understands the urgency and complexity involved in pulmonary emergencies. 
            Whether it's an acute respiratory episode or follow-up care need post-discharge, 
            we provide comprehensive services to ensure all aspects of your condition are addressed.
          </Text>
          
          <ProcessSteps>
            {treatmentProcess.map((step, index) => (
              <ProcessCard key={index}>
                <ProcessNumber>{step.number}</ProcessNumber>
                <ProcessTitle>{step.title}</ProcessTitle>
                <Text style={{ margin: 0, fontSize: '1rem' }}>{step.desc}</Text>
              </ProcessCard>
            ))}
          </ProcessSteps>
        </Section>

        <Section>
          <SectionTitle>Our Expert Pulmonary Care Team</SectionTitle>
          <Text>
            Our approach involves a collaborative effort among our team of pulmonologists, nurses, 
            and support staff to deliver personalized and compassionate care tailored to each patient's needs.
          </Text>
          
          <TeamGrid>
            {teamMembers.map((member, index) => (
              <TeamCard key={index}>
                <TeamIcon>{member.icon}</TeamIcon>
                <ServiceTitle style={{ color: '#006064', fontSize: '1.1rem' }}>
                  {member.title}
                </ServiceTitle>
                <Text style={{ margin: 0, fontSize: '1rem' }}>{member.desc}</Text>
              </TeamCard>
            ))}
          </TeamGrid>
        </Section>

        <Section>
          <SectionTitle>Comprehensive Follow-up & Chronic Care</SectionTitle>
          <Text>
            Our commitment extends beyond immediate treatment. We provide thorough follow-up care 
            to ensure continued recovery and management of chronic pulmonary conditions. We focus 
            on <Highlight>personalized care plans</Highlight>, patient education, and long-term health maintenance.
          </Text>
          
          <ServicesGrid>
            <ServiceCard>
              <ServiceIcon>📋</ServiceIcon>
              <ServiceTitle>Personalized Treatment Plans</ServiceTitle>
              <Text style={{ margin: 0, fontSize: '1rem' }}>Customized care strategies for individual patient needs</Text>
            </ServiceCard>
            <ServiceCard>
              <ServiceIcon>🎓</ServiceIcon>
              <ServiceTitle>Patient Education</ServiceTitle>
              <Text style={{ margin: 0, fontSize: '1rem' }}>Comprehensive understanding of condition and self-management</Text>
            </ServiceCard>
            <ServiceCard>
              <ServiceIcon>🔄</ServiceIcon>
              <ServiceTitle>Long-term Monitoring</ServiceTitle>
              <Text style={{ margin: 0, fontSize: '1rem' }}>Regular follow-ups and progress tracking</Text>
            </ServiceCard>
          </ServicesGrid>
        </Section>

        <FAQSection>
          <FAQTitle>Frequently Asked Questions about Pulmonary Care</FAQTitle>
          {faqs.map((faq, index) => (
            <FAQItem key={index}>
              <Question>❓ {faq.question}</Question>
              <Answer>{faq.answer}</Answer>
            </FAQItem>
          ))}
        </FAQSection>

        <Section>
          <SectionTitle>Breathe Easier with Expert Pulmonary Care</SectionTitle>
          <Text>
            For those in need of expert pulmonary emergency care, Dr. Prabhat Memorial Hiramati Hospital 
            offers a trusted and comprehensive solution. Our dedication to exceptional care ensures that 
            patients experiencing respiratory emergencies receive the highest standard of treatment and 
            support, aiming for the best possible outcomes and a return to optimal health.
          </Text>
          
          <Text>
            <strong>Why choose us?</strong> We combine <Highlight>cutting-edge technology</Highlight> with 
            <Highlight> compassionate care</Highlight>, offering comprehensive pulmonary services from 
            emergency intervention to long-term management of chronic conditions.
          </Text>
          
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <CTAButton>
              🫁 Schedule Pulmonary Consultation
            </CTAButton>
            <Text style={{ color: '#0077b6', fontWeight: '600', marginTop: '1rem' }}>
              📍 Bailey Road, Patna • 📞 24/7 Respiratory Emergency Helpline
            </Text>
          </div>
        </Section>
      </ContentWrapper>
    </PulmonologyContainer>
  );
};

export default PulmoComponent;

