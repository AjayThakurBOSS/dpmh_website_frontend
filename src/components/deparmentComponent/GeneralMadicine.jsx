import React from 'react';
import styled from 'styled-components';

// Styled Components
const GeneralMedicineContainer = styled.section`
  background: linear-gradient(135deg, #f8fdf8 0%, #e8f5e8 100%);
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
  color: #2e7d32;
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
    background: linear-gradient(90deg, #4caf50, #2e7d32);
    border-radius: 2px;
  }
`;

const Subtitle = styled.p`
  color: #558b2f;
  font-size: 1.2rem;
  max-width: 900px;
  margin: 0 auto 1.5rem;
  line-height: 1.8;
  font-weight: 500;
`;

const SEOIntro = styled.div`
  background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  border-left: 5px solid #4caf50;

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
  border-left: 5px solid #4caf50;
  
  &:hover {
    transform: translateY(-3px);
    transition: transform 0.3s ease;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  }

    @media (max-width: 600px){
    padding: 0.5rem;
  }
`;

const SectionTitle = styled.h2`
  color: #2e7d32;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 12px;
  
  &::before {
    content: '🩺';
    font-size: 1.5rem;
  }
`;

const Text = styled.p`
  color: #555;
  margin-bottom: 1.2rem;
  font-size: 1.1rem;
  line-height: 1.7;
`;

const ConditionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

const ConditionCard = styled.div`
  background: ${props => props.primary ? 'linear-gradient(135deg, #e8f5e9, #c8e6c9)' : '#f8fdf8'};
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid #4caf50;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.12);
  }

    @media (max-width: 600px){
    padding: 0.5rem;
  }
`;

const ConditionTitle = styled.h3`
  color: #2e7d32;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.2rem;
`;

const ConditionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

const ConditionItem = styled.li`
  background: rgba(255, 255, 255, 0.8);
  padding: 0.8rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 8px;
  border-left: 3px solid #4caf50;
  font-weight: 500;
  color: #2e7d32;
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const ServiceCard = styled.div`
  background: linear-gradient(135deg, ${props => props.geriatric ? '#e3f2fd' : props.palliative ? '#fce4ec' : '#fff3e0'});
  padding: 2rem;
  border-radius: 12px;
  border-left: 4px solid ${props => props.geriatric ? '#1976d2' : props.palliative ? '#c2185b' : '#f57c00'};
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
  color: ${props => props.geriatric ? '#1976d2' : props.palliative ? '#c2185b' : '#f57c00'};
  margin-bottom: 1rem;
  font-size: 1.3rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

const TeamCard = styled.div`
  background: linear-gradient(135deg, #f3e5f5, #e1bee7);
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

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

const BenefitCard = styled.div`
  background: linear-gradient(135deg, #e0f2f1, #b2dfdb);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);

    @media (max-width: 600px){
    padding: 0.5rem;
  }
`;

const BenefitIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Highlight = styled.span`
  color: #d32f2f;
  font-weight: 600;
`;

const CTAButton = styled.button`
  background: linear-gradient(135deg, #4caf50, #2e7d32);
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  border-radius: 50px;
  cursor: pointer;
  margin-top: 1rem;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(76, 175, 80, 0.4);
    background: linear-gradient(135deg, #43a047, #4caf50);
  }

    @media (max-width: 600px){
    padding: 0.5rem;
  }
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

    @media (max-width: 600px){
    padding: 0.5rem;
  }
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #2e7d32;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: #666;
  font-weight: 500;
`;

// React Component
const GeneralMedicine = () => {
  const commonConditions = [
    'Pneumonia & Respiratory Infections',
    'Urinary Tract Infections (UTI)',
    'Gastrointestinal Disorders',
    'Hypertension & Heart Conditions',
    'Diabetes Management',
    'Thyroid Disorders',
    'Anemia & Blood Disorders',
    'Chronic Fatigue & Weakness'
  ];

  const acuteConditions = [
    'Fever & Viral Infections',
    'Acute Respiratory Illnesses',
    'Digestive System Disorders',
    'Musculoskeletal Pain',
    'Skin Infections & Rashes',
    'Allergic Reactions'
  ];

  const teamMembers = [
    { icon: '👨‍⚕️', title: 'Chief of Medicine', desc: 'Oversees quality care delivery' },
    { icon: '👩‍⚕️', title: 'General Physicians', desc: 'Expert diagnosis & treatment' },
    { icon: '💊', title: 'Medical Specialists', desc: 'Comprehensive care management' },
    { icon: '🏥', title: 'Nursing Staff', desc: '24/7 patient care & support' }
  ];

  const benefits = [
    { icon: '🎯', title: 'Precise Diagnosis', desc: 'Accurate identification of conditions' },
    { icon: '💝', title: 'Personalized Care', desc: 'Tailored treatment plans' },
    { icon: '🔄', title: 'Continuity of Care', desc: 'Ongoing health management' },
    { icon: '🏠', title: 'Holistic Approach', desc: 'Whole-person healthcare' }
  ];

  return (
    <GeneralMedicineContainer>
      <ContentWrapper>
        <Header>
        {/*   <Title>General Medicine Department</Title> */}
          <Subtitle>
            Comprehensive Primary Care for All Your Health Needs - Your First Stop for Quality Healthcare
          </Subtitle>
        </Header>

        <SEOIntro>
          <Text style={{ color: '#2e7d32', fontWeight: '600', margin: 0 }}>
            🏆 <strong>Best General Medicine Hospital</strong> - Expert care for acute & chronic conditions with 
            personalized treatment plans. Trust our experienced physicians for comprehensive primary healthcare 
            services including preventive care, diagnosis, and management of common medical conditions.
          </Text>
        </SEOIntro>

        <Section>
          <SectionTitle>Comprehensive Primary Care</SectionTitle>
          <Text>
            At Dr. Prabhat Memorial Hiramati Hospital, our <strong>General Medicine department</strong> provides 
            comprehensive care for patients with a wide range of acute and chronic illnesses. As your primary 
            healthcare providers, we serve as the first point of contact for medical concerns and coordinate 
            all aspects of your healthcare journey.
          </Text>
          
          <StatsContainer>
            <StatCard>
              <StatNumber>10,000+</StatNumber>
              <StatLabel>Patients Treated Annually</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>24/7</StatNumber>
              <StatLabel>Emergency Care Available</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>50+</StatNumber>
              <StatLabel>Years Combined Experience</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>95%</StatNumber>
              <StatLabel>Patient Satisfaction Rate</StatLabel>
            </StatCard>
          </StatsContainer>
        </Section>

        <Section>
          <SectionTitle>Conditions We Treat</SectionTitle>
          <Text>
            Our dedicated team of physicians, nurses, and healthcare professionals is committed to 
            addressing common medical conditions with expert care and compassion.
          </Text>
          
          <ConditionsGrid>
            <ConditionCard primary>
              <ConditionTitle>🩺 Chronic Conditions</ConditionTitle>
              <ConditionList>
                {commonConditions.map((condition, index) => (
                  <ConditionItem key={index}>
                    {condition}
                  </ConditionItem>
                ))}
              </ConditionList>
            </ConditionCard>

            <ConditionCard>
              <ConditionTitle>🌡️ Acute Illnesses</ConditionTitle>
              <ConditionList>
                {acuteConditions.map((condition, index) => (
                  <ConditionItem key={index}>
                    {condition}
                  </ConditionItem>
                ))}
              </ConditionList>
            </ConditionCard>
          </ConditionsGrid>
        </Section>

        <Section>
          <SectionTitle>Specialized Subspecialties</SectionTitle>
          <Text>
            In addition to general medical care, our department includes specialized services to 
            address the unique needs of different patient populations.
          </Text>
          
          <ServicesGrid>
            <ServiceCard geriatric>
              <ServiceIcon>👵</ServiceIcon>
              <ServiceTitle geriatric>Geriatric Medicine</ServiceTitle>
              <Text>
                Specialized care for elderly patients focusing on age-related health issues, 
                medication management, and maintaining quality of life in senior years.
              </Text>
              <ConditionList>
                <ConditionItem>Age-related chronic conditions</ConditionItem>
                <ConditionItem>Polypharmacy management</ConditionItem>
                <ConditionItem>Mobility and fall prevention</ConditionItem>
                <ConditionItem>Memory and cognitive care</ConditionItem>
              </ConditionList>
            </ServiceCard>

            <ServiceCard palliative>
              <ServiceIcon>💝</ServiceIcon>
              <ServiceTitle palliative>Palliative Care</ServiceTitle>
              <Text>
                Compassionate support for patients with serious illnesses, focusing on symptom 
                management, pain relief, and improving quality of life.
              </Text>
              <ConditionList>
                <ConditionItem>Pain and symptom management</ConditionItem>
                <ConditionItem>Emotional and spiritual support</ConditionItem>
                <ConditionItem>Quality of life enhancement</ConditionItem>
                <ConditionItem>Family counseling and support</ConditionItem>
              </ConditionList>
            </ServiceCard>
          </ServicesGrid>
        </Section>

        <Section>
          <SectionTitle>Our Expert Medical Team</SectionTitle>
          <Text>
            The department is led by a <Highlight>Chief of Medicine</Highlight> or <Highlight>Medical Director</Highlight> 
            who oversees the delivery of high-quality care. Our general medicine specialists are skilled in 
            diagnosing and managing a broad spectrum of health issues.
          </Text>
          
          <TeamGrid>
            {teamMembers.map((member, index) => (
              <TeamCard key={index}>
                <TeamIcon>{member.icon}</TeamIcon>
                <ServiceTitle style={{ color: '#7b1fa2', fontSize: '1.2rem' }}>
                  {member.title}
                </ServiceTitle>
                <Text style={{ margin: 0, fontSize: '1rem' }}>{member.desc}</Text>
              </TeamCard>
            ))}
          </TeamGrid>
        </Section>

        <Section>
          <SectionTitle>Benefits of Choosing Our General Medicine Department</SectionTitle>
          
          <BenefitsGrid>
            {benefits.map((benefit, index) => (
              <BenefitCard key={index}>
                <BenefitIcon>{benefit.icon}</BenefitIcon>
                <ServiceTitle style={{ color: '#00796b', fontSize: '1.2rem' }}>
                  {benefit.title}
                </ServiceTitle>
                <Text style={{ margin: 0, fontSize: '1rem' }}>{benefit.desc}</Text>
              </BenefitCard>
            ))}
          </BenefitsGrid>
        </Section>

        <Section>
          <SectionTitle>Medical Research & Education</SectionTitle>
          <Text>
            Our General Medicine department plays a vital role in <strong>medical research and education</strong>. 
            We are involved in training medical students and residents, contributing to the advancement 
            of medical knowledge and practices.
          </Text>
          <Text>
            By integrating research and education with patient care, we strive to improve outcomes 
            and foster a culture of continuous learning and innovation in general medicine.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Your Health is Our Priority</SectionTitle>
          <Text>
            At Dr. Prabhat Memorial Hiramati Hospital, our commitment to general medicine ensures that 
            patients receive <Highlight>exceptional care</Highlight> for a wide range of conditions. We aim to provide 
            a <strong>holistic approach to treatment</strong>, combining clinical expertise with compassionate care 
            to support the overall health and well-being of our patients.
          </Text>
          <Text>
            <strong>Why choose us?</strong> We offer comprehensive primary care, same-day appointments for urgent 
            concerns, preventive health screenings, chronic disease management, and coordinated care 
            with specialists when needed.
          </Text>
          <CTAButton>
            Book Your Appointment Today
          </CTAButton>
        </Section>
      </ContentWrapper>
    </GeneralMedicineContainer>
  );
};

export default GeneralMedicine;

