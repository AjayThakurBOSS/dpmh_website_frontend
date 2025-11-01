import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components
const GeneralSurgeryContainer = styled.section`
  background: linear-gradient(135deg, #f8f9ff 0%, #e8ecff 100%);
  padding: 2rem 1.8rem;
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
  color: #1a237e;
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
    background: linear-gradient(90deg, #303f9f, #1a237e);
    border-radius: 2px;
  }
`;

const Subtitle = styled.p`
  color: #3949ab;
  font-size: 1.2rem;
  max-width: 900px;
  margin: 0 auto 1.5rem;
  line-height: 1.8;
  font-weight: 500;
`;

const SEOIntro = styled.div`
  background: linear-gradient(135deg, #e8eaf6, #c5cae9);
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  border-left: 5px solid #303f9f;
  text-align: center;
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
  border-left: 5px solid #303f9f;
  
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
  color: #1a237e;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 12px;
  
  &::before {
    content: '🔪';
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
  border: 2px solid #e8eaf6;

   @media (max-width: 600px){
      padding: 0.5rem;
    }
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #303f9f;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: #666;
  font-weight: 500;
  font-size: 0.9rem;
`;

const ProceduresGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const ProcedureCard = styled.div`
  background: ${props => props.primary ? 'linear-gradient(135deg, #e8eaf6, #c5cae9)' : '#f8f9ff'};
  padding: 2rem;
  border-radius: 12px;
  border-left: 4px solid #303f9f;
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

const ProcedureTitle = styled.h3`
  color: #1a237e;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.3rem;
`;

const ProcedureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

const ProcedureItem = styled.li`
  background: rgba(255, 255, 255, 0.8);
  padding: 0.8rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 8px;
  border-left: 3px solid #303f9f;
  font-weight: 500;
  color: #1a237e;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &::before {
    content: '✅';
    font-size: 0.9rem;
  }
`;

const TechnologyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

const TechCard = styled.div`
  background: linear-gradient(135deg, #e3f2fd, #bbdefb);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  }

   @media (max-width: 600px){
      padding: 0.5rem;
    }
`;

const TechIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const TechTitle = styled.h4`
  color: #1565c0;
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
  padding: 1.5rem;
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

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

const BenefitCard = styled.div`
  background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
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
  background: linear-gradient(135deg, #303f9f, #1a237e);
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  border-radius: 50px;
  cursor: pointer;
  margin-top: 1rem;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(48, 63, 159, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(48, 63, 159, 0.4);
    background: linear-gradient(135deg, #283593, #303f9f);
  }

   @media (max-width: 600px){
      padding: 0.5rem;
    }
`;

const EmergencyInfo = styled.div`
  background: linear-gradient(135deg, #ffebee, #ffcdd2);
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid #d32f2f;
  margin: 1.5rem 0;
  text-align: center;

   @media (max-width: 600px){
      padding: 0.5rem;
    }
`;


// React Component
const GeneralSurgeryComponent = () => {
  const abdominalProcedures = [
    'Appendectomy (Appendicitis)',
    'Hernia Repair (Inguinal, Umbilical, Incisional)',
    'Gallbladder Removal (Cholecystectomy)',
    'Bowel Resection Surgery',
    'Exploratory Laparotomy',
    'Peptic Ulcer Surgery'
  ];

  const softTissueProcedures = [
    'Benign Tumor Removal',
    'Malignant Tumor Excision',
    'Complex Wound Care & Reconstruction',
    'Skin Lesion Excision',
    'Lipoma Removal',
    'Abscess Drainage'
  ];

  const technologies = [
    { icon: '🔍', title: 'Laparoscopic Surgery', desc: 'Minimally invasive procedures' },
    { icon: '📊', title: 'Advanced Monitoring', desc: 'Real-time patient monitoring' },
    { icon: '⚡', title: 'Electrosurgical Units', desc: 'Precision cutting & coagulation' },
    { icon: '🌡️', title: 'Sterile Environment', desc: 'Infection control systems' }
  ];

  const surgicalProcess = [
    { number: '1', title: 'Preoperative Assessment', desc: 'Comprehensive evaluation & planning' },
    { number: '2', title: 'Surgical Procedure', desc: 'Expert surgical intervention' },
    { number: '3', title: 'Postoperative Care', desc: 'Immediate recovery monitoring' },
    { number: '4', title: 'Follow-up & Rehabilitation', desc: 'Long-term recovery support' }
  ];

  const benefits = [
    { icon: '🎯', title: 'Minimal Scarring', desc: 'Advanced techniques for better cosmetics' },
    { icon: '⚡', title: 'Faster Recovery', desc: 'Reduced hospital stay & quick return' },
    { icon: '💝', title: 'Personalized Care', desc: 'Customized treatment plans' },
    { icon: '🛡️', title: 'Safety First', desc: 'Highest safety standards' }
  ];

  return (
    <GeneralSurgeryContainer>
      <ContentWrapper>
        <Header>
          <Title>General Surgery Department</Title>
          <Subtitle>
            Expert Surgical Care with Precision and Compassion - Your Trusted Partner in Surgical Health
          </Subtitle>
        </Header>

        <SEOIntro>
          <Text style={{ color: '#1a237e', fontWeight: '600', margin: 0, fontSize: '1.1rem' }}>
            🏆 <strong>Best General Surgery Hospital</strong> - Advanced surgical procedures including 
            laparoscopic surgery, hernia repair, gallbladder surgery, and tumor removal. 
            Trust our board-certified surgeons for safe, effective surgical care with minimal recovery time.
          </Text>
        </SEOIntro>

        <Section>
          <SectionTitle>Comprehensive Surgical Excellence</SectionTitle>
          <Text>
            At Dr. Prabhat Memorial Hiramati Hospital, our <strong>General Surgery department</strong> is 
            committed to delivering comprehensive surgical care for a wide range of conditions. Our 
            experienced team of general surgeons employs advanced techniques and cutting-edge technology 
            to provide effective treatment for various surgical needs, ensuring the highest level of 
            patient care and safety.
          </Text>
          
          <StatsContainer>
            <StatCard>
              <StatNumber>5,000+</StatNumber>
              <StatLabel>Successful Surgeries</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>98%</StatNumber>
              <StatLabel>Success Rate</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>24/7</StatNumber>
              <StatLabel>Emergency Surgery</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>15+</StatNumber>
              <StatLabel>Years Experience</StatLabel>
            </StatCard>
          </StatsContainer>
        </Section>

        <Section>
          <SectionTitle>Surgical Procedures We Specialize In</SectionTitle>
          <Text>
            Our general surgeons specialize in performing a variety of procedures, from routine 
            surgeries to complex interventions. Each procedure is tailored to meet the individual 
            needs of our patients, aiming for optimal outcomes and minimal recovery time.
          </Text>
          
          <ProceduresGrid>
            <ProcedureCard primary>
              <ProcedureTitle>🩺 Abdominal Surgery</ProcedureTitle>
              <Text>Comprehensive surgical solutions for abdominal conditions and digestive system disorders.</Text>
              <ProcedureList>
                {abdominalProcedures.map((procedure, index) => (
                  <ProcedureItem key={index}>
                    {procedure}
                  </ProcedureItem>
                ))}
              </ProcedureList>
            </ProcedureCard>

            <ProcedureCard>
              <ProcedureTitle>🔬 Soft Tissue & Tumor Surgery</ProcedureTitle>
              <Text>Expert management of benign and malignant tumors with advanced surgical techniques.</Text>
              <ProcedureList>
                {softTissueProcedures.map((procedure, index) => (
                  <ProcedureItem key={index}>
                    {procedure}
                  </ProcedureItem>
                ))}
              </ProcedureList>
            </ProcedureCard>
          </ProceduresGrid>

          <EmergencyInfo>
            <Text style={{ color: '#d32f2f', fontWeight: '600', margin: 0 }}>
              🚨 <strong>Emergency Surgical Services Available 24/7</strong> - Immediate care for 
              appendicitis, trauma, intestinal obstructions, and other surgical emergencies.
            </Text>
          </EmergencyInfo>
        </Section>

        <Section>
          <SectionTitle>Advanced Surgical Technology</SectionTitle>
          <Text>
            We utilize state-of-the-art equipment and follow best practices to ensure precision 
            and safety during surgeries. Our facility is equipped with advanced surgical tools 
            and monitoring systems to support both routine and complex procedures.
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
          <SectionTitle>Your Surgical Journey</SectionTitle>
          <Text>
            From preoperative assessments to postoperative care, our team is dedicated to providing 
            a seamless and supportive experience throughout your surgical journey.
          </Text>
          
          <ProcessSteps>
            {surgicalProcess.map((step, index) => (
              <ProcessCard key={index}>
                <ProcessNumber>{step.number}</ProcessNumber>
                <ProcessTitle>{step.title}</ProcessTitle>
                <Text style={{ margin: 0, fontSize: '1rem' }}>{step.desc}</Text>
              </ProcessCard>
            ))}
          </ProcessSteps>
        </Section>

        <Section>
          <SectionTitle>Patient-Centered Care Approach</SectionTitle>
          <Text>
            Patient care is our top priority, and we emphasize a <Highlight>personalized approach</Highlight> to treatment. 
            Our general surgeons work closely with patients to develop customized care plans, 
            addressing both the immediate surgical needs and long-term health goals.
          </Text>
          
          <BenefitsGrid>
            {benefits.map((benefit, index) => (
              <BenefitCard key={index}>
                <BenefitIcon>{benefit.icon}</BenefitIcon>
                <TechTitle style={{ color: '#2e7d32' }}>{benefit.title}</TechTitle>
                <Text style={{ margin: 0, fontSize: '1rem' }}>{benefit.desc}</Text>
              </BenefitCard>
            ))}
          </BenefitsGrid>

          <Text>
            We are committed to providing <strong>compassionate care</strong>, detailed explanations of procedures, 
            and ongoing support to facilitate a smooth recovery process. Our team ensures you're 
            well-informed and comfortable at every step.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Why Choose Our General Surgery Department?</SectionTitle>
          <Text>
            If you or a loved one requires surgical intervention, trust Dr. Prabhat Memorial Hiramati 
            Hospital for expert general surgery services. Our skilled team is dedicated to delivering 
            high-quality care, ensuring the best possible outcomes, and supporting your overall health 
            and well-being.
          </Text>
          
          <ProcedureList>
            <ProcedureItem>Board-certified experienced surgeons</ProcedureItem>
            <ProcedureItem>Minimally invasive techniques preferred</ProcedureItem>
            <ProcedureItem>Comprehensive pre-and post-operative care</ProcedureItem>
            <ProcedureItem>Multidisciplinary approach for complex cases</ProcedureItem>
            <ProcedureItem>Patient education and counseling services</ProcedureItem>
            <ProcedureItem>Insurance and financial guidance support</ProcedureItem>
          </ProcedureList>

          <Text>
            <strong>Take the first step towards better health today.</strong> Schedule a consultation 
            with our expert surgical team to discuss your treatment options and recovery expectations.
          </Text>
          
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <CTAButton>
              <Link to='/book-appointment'>Schedule Surgical Consultation</Link>
            </CTAButton>
            <Text style={{ color: '#666', fontSize: '0.9rem', marginTop: '1rem' }}>
              📞 <strong>Emergency Hotline:</strong> Available 24/7 for urgent surgical needs
            </Text>
          </div>
        </Section>
      </ContentWrapper>
    </GeneralSurgeryContainer>
  );
};

export default GeneralSurgeryComponent;



