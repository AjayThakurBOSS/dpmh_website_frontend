import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components
const GastroenterologyContainer = styled.section`
  background: linear-gradient(135deg, #f0f9ff 0%, #e6f4ff 100%);
  padding: 4rem 2rem;
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
`;

const Title = styled.h1`
  color: #00838f;
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
    background: linear-gradient(90deg, #00838f, #006064);
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
  background: linear-gradient(135deg, #e0f7fa, #b2ebf2);
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  border-left: 5px solid #00838f;
  text-align: center;
`;

const EmergencyAlert = styled.div`
  background: linear-gradient(135deg, #ff6f00, #e65100);
  color: white;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  margin: 2rem 0;
  box-shadow: 0 4px 15px rgba(255, 111, 0, 0.3);
  
  strong {
    font-size: 1.3rem;
    display: block;
    margin-bottom: 0.5rem;
  }
`;

const Section = styled.div`
  background: white;
  border-radius: 15px;
  padding: 2.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  border-left: 5px solid #00838f;
`;

const SectionTitle = styled.h2`
  color: #00838f;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 12px;
  
  &::before {
    content: '🌿';
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
  border: 2px solid #e0f7fa;
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #00838f;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: #666;
  font-weight: 500;
  font-size: 0.9rem;
`;

const OrgansGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

const OrganCard = styled.div`
  background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
`;

const OrganIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const OrganTitle = styled.h4`
  color: #2e7d32;
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

const ConditionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const ConditionCard = styled.div`
  background: ${props => props.chronic ? 'linear-gradient(135deg, #fff3e0, #ffe0b2)' : 'linear-gradient(135deg, #e3f2fd, #bbdefb)'};
  padding: 2rem;
  border-radius: 12px;
  border-left: 4px solid ${props => props.chronic ? '#ff6f00' : '#1976d2'};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const ConditionTitle = styled.h3`
  color: ${props => props.chronic ? '#ff6f00' : '#1976d2'};
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
  border-left: 3px solid ${props => props.chronic ? '#ff6f00' : '#1976d2'};
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

const ProceduresGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

const ProcedureCard = styled.div`
  background: linear-gradient(135deg, #f3e5f5, #e1bee7);
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ProcedureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const ProcedureTitle = styled.h3`
  color: #7b1fa2;
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
  background: linear-gradient(135deg, #e8eaf6, #c5cae9);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
`;

const TechIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const TechTitle = styled.h4`
  color: #303f9f;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;

const TreatmentApproach = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

const ApproachCard = styled.div`
  background: linear-gradient(135deg, #fff8e1, #ffecb3);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
`;

const ApproachIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

const TeamCard = styled.div`
  background: linear-gradient(135deg, #e0f2f1, #b2dfdb);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
`;

const TeamIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Highlight = styled.span`
  color: #d32f2f;
  font-weight: 600;
`;

const CTAButton = styled.button`
  background: linear-gradient(135deg, #00838f, #006064);
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  border-radius: 50px;
  cursor: pointer;
  margin-top: 1rem;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(0, 131, 143, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 131, 143, 0.4);
    background: linear-gradient(135deg, #006064, #00838f);
  }
`;

const FAQSection = styled.div`
  background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
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
`;

const Question = styled.h4`
  color: #00838f;
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
const GastroComponent = () => {
  const digestiveOrgans = [
    { icon: '🍽️', title: 'Esophagus', desc: 'Swallowing & food passage' },
    { icon: '🫀', title: 'Stomach', desc: 'Digestion & acid control' },
    { icon: '🌀', title: 'Intestines', desc: 'Nutrient absorption' },
    { icon: '🧬', title: 'Liver', desc: 'Detox & metabolism' },
    { icon: '💛', title: 'Pancreas', desc: 'Enzyme production' },
    { icon: '💧', title: 'Biliary Tract', desc: 'Bile drainage system' }
  ];

  const chronicConditions = [
    'Irritable Bowel Syndrome (IBS)',
    'Crohn’s Disease & Ulcerative Colitis',
    'Celiac Disease & Gluten Sensitivity',
    'Gastroesophageal Reflux Disease (GERD)',
    'Chronic Liver Disease & Cirrhosis',
    'Pancreatitis & Pancreatic Disorders',
    'Diverticular Disease',
    'Chronic Constipation & Diarrhea'
  ];

  const acuteConditions = [
    'Gastrointestinal Bleeding',
    'Acute Liver Failure',
    'Gallstones & Biliary Colic',
    'Acute Pancreatitis',
    'Appendicitis & Abdominal Emergencies',
    'Bowel Obstruction',
    'Peptic Ulcers',
    'Infectious Gastroenteritis'
  ];

  const procedures = [
    { icon: '🔍', title: 'Endoscopy', desc: 'Examination of upper GI tract including esophagus, stomach, and duodenum' },
    { icon: '📋', title: 'Colonoscopy', desc: 'Comprehensive examination of the entire colon and rectum' },
    { icon: '🔬', title: 'Sigmoidoscopy', desc: 'Focused examination of the lower colon and rectum' },
    { icon: '💊', title: 'Capsule Endoscopy', desc: 'Wireless camera pill for small intestine imaging' },
    { icon: '🔄', title: 'ERCP', desc: 'Endoscopic treatment of bile and pancreatic duct issues' },
    { icon: '📊', title: 'Liver Biopsy', desc: 'Precise diagnosis of liver conditions' }
  ];

  const technologies = [
    { icon: '📷', title: 'HD Video Endoscopes', desc: 'High-definition imaging for accurate diagnosis' },
    { icon: '💡', title: 'Narrow Band Imaging', desc: 'Enhanced visualization of mucosal patterns' },
    { icon: '⚡', title: 'Electrosurgical Units', desc: 'Precision polyp removal and tissue sampling' },
    { icon: '🔊', title: 'Ultrasound Endoscopy', desc: 'Combined imaging for deeper tissue evaluation' },
    { icon: '🧪', title: 'Advanced Lab Testing', desc: 'Comprehensive digestive health analysis' },
    { icon: '💻', title: 'Digital Reporting', desc: 'Electronic health records and image storage' }
  ];

  const treatmentApproaches = [
    { icon: '💊', title: 'Medical Management', desc: 'Targeted medications for symptom control' },
    { icon: '🥗', title: 'Nutritional Therapy', desc: 'Personalized diet plans and counseling' },
    { icon: '🔄', title: 'Lifestyle Modification', desc: 'Habit changes for long-term health' },
    { icon: '🔬', title: 'Minimally Invasive Procedures', desc: 'Advanced endoscopic treatments' }
  ];

  const teamMembers = [
    { icon: '👨‍⚕️', title: 'Gastroenterologists', desc: 'Digestive system specialists' },
    { icon: '🔪', title: 'GI Surgeons', desc: 'Surgical intervention experts' },
    { icon: '🥗', title: 'Dietitians', desc: 'Nutrition and dietary planning' },
    { icon: '💉', title: 'Endoscopy Nurses', desc: 'Procedure assistance and care' },
    { icon: '🔬', title: 'Pathologists', desc: 'Tissue analysis and diagnosis' },
    { icon: '🧠', title: 'Pain Management', desc: 'Comfort during procedures' }
  ];

  const faqs = [
    {
      question: 'What symptoms indicate I should see a gastroenterologist?',
      answer: 'Persistent abdominal pain, heartburn, bloating, changes in bowel habits, rectal bleeding, unexplained weight loss, or difficulty swallowing warrant a gastroenterology consultation.'
    },
    {
      question: 'How do I prepare for a colonoscopy?',
      answer: 'Preparation involves a clear liquid diet for 24 hours before the procedure and taking prescribed laxatives to cleanse the colon completely for optimal visualization.'
    },
    {
      question: 'Are endoscopic procedures painful?',
      answer: 'Most endoscopic procedures are performed under sedation to ensure comfort. Patients typically experience minimal discomfort and have no memory of the procedure.'
    },
    {
      question: 'What is the difference between IBS and IBD?',
      answer: 'IBS (Irritable Bowel Syndrome) is a functional disorder causing symptoms without inflammation, while IBD (Inflammatory Bowel Disease) includes Crohn\'s and Ulcerative Colitis with actual inflammation and tissue damage.'
    },
    {
      question: 'How often should I get a colonoscopy?',
      answer: 'For average-risk individuals, screening colonoscopy is recommended every 10 years starting at age 45-50. Those with family history or symptoms may need earlier and more frequent screening.'
    },
    {
      question: 'Can digestive issues be managed through diet alone?',
      answer: 'While diet plays a crucial role, many digestive conditions require medical management. Our team provides comprehensive care including dietary guidance, medications, and procedures when needed.'
    }
  ];

  return (
    <GastroenterologyContainer>
      <ContentWrapper>
        <Header>
          <Title>Gastroenterology & Digestive Health Department</Title>
          <Subtitle>
            Comprehensive Care for Your Digestive System - From Diagnosis to Treatment and Recovery
          </Subtitle>
        </Header>

        <SEOIntro>
          <Text style={{ color: '#00838f', fontWeight: '600', margin: 0, fontSize: '1.1rem' }}>
            🏆 <strong>Best Gastroenterology Hospital in Patna</strong> - Advanced digestive care for 
            IBS, liver disease, GERD, and gastrointestinal disorders. Expert endoscopy, colonoscopy, 
            and comprehensive GI treatments with state-of-the-art technology and compassionate care.
          </Text>
        </SEOIntro>

        <EmergencyAlert>
          <strong>🚨 GI EMERGENCY CARE AVAILABLE 24/7</strong>
          Immediate treatment for gastrointestinal bleeding, severe abdominal pain, and digestive emergencies
        </EmergencyAlert>

        <Section>
          <SectionTitle>Comprehensive Digestive Health Care</SectionTitle>
          <Text>
            At Dr. Prabhat Memorial Hiramati Hospital, our <strong>Gastroenterology department</strong> is 
            dedicated to diagnosing and treating a wide range of conditions related to the digestive system. 
            Our team of experienced gastroenterologists utilizes advanced technology and techniques to provide 
            comprehensive care for patients with gastrointestinal issues.
          </Text>
          
          <StatsContainer>
            <StatCard>
              <StatNumber>10,000+</StatNumber>
              <StatLabel>Procedures Performed</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>99%</StatNumber>
              <StatLabel>Accuracy Rate</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>24/7</StatNumber>
              <StatLabel>Emergency GI Care</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>15+</StatNumber>
              <StatLabel>Years Experience</StatLabel>
            </StatCard>
          </StatsContainer>
        </Section>

        <Section>
          <SectionTitle>Organs We Specialize In</SectionTitle>
          <Text>
            Our department specializes in managing disorders of the entire digestive system, 
            providing expert care for each organ's unique challenges and conditions.
          </Text>
          
          <OrgansGrid>
            {digestiveOrgans.map((organ, index) => (
              <OrganCard key={index}>
                <OrganIcon>{organ.icon}</OrganIcon>
                <OrganTitle>{organ.title}</OrganTitle>
                <Text style={{ margin: 0, fontSize: '0.9rem' }}>{organ.desc}</Text>
              </OrganCard>
            ))}
          </OrgansGrid>
        </Section>

        <Section>
          <SectionTitle>Conditions We Treat</SectionTitle>
          <Text>
            Whether you are dealing with chronic digestive conditions or acute gastrointestinal issues, 
            our skilled specialists are equipped to provide effective treatment and relief.
          </Text>
          
          <ConditionsGrid>
            <ConditionCard chronic>
              <ConditionTitle chronic>🩺 Chronic Digestive Conditions</ConditionTitle>
              <Text>Comprehensive management of long-term gastrointestinal disorders requiring ongoing care.</Text>
              <ConditionList>
                {chronicConditions.map((condition, index) => (
                  <ConditionItem key={index} chronic>
                    {condition}
                  </ConditionItem>
                ))}
              </ConditionList>
            </ConditionCard>

            <ConditionCard>
              <ConditionTitle>🚨 Acute GI Emergencies</ConditionTitle>
              <Text>Immediate care for sudden-onset digestive conditions requiring urgent medical attention.</Text>
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
          <SectionTitle>Advanced Diagnostic & Therapeutic Procedures</SectionTitle>
          <Text>
            We offer a range of diagnostic and therapeutic procedures to accurately diagnose and 
            treat gastrointestinal conditions. These minimally invasive procedures allow us to 
            evaluate and treat various issues with precision and minimal discomfort.
          </Text>
          
          <ProceduresGrid>
            {procedures.map((procedure, index) => (
              <ProcedureCard key={index}>
                <ProcedureIcon>{procedure.icon}</ProcedureIcon>
                <ProcedureTitle>{procedure.title}</ProcedureTitle>
                <Text style={{ margin: 0, fontSize: '1rem' }}>{procedure.desc}</Text>
              </ProcedureCard>
            ))}
          </ProceduresGrid>
        </Section>

        <Section>
          <SectionTitle>State-of-the-Art Technology</SectionTitle>
          <Text>
            Our gastroenterology department is equipped with the latest medical technology 
            to ensure accurate diagnoses and effective treatments for all digestive conditions.
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
          <SectionTitle>Comprehensive Treatment Approach</SectionTitle>
          <Text>
            In addition to diagnostic and procedural services, our gastroenterology team provides 
            personalized treatment plans tailored to each patient's needs. We focus on both medical 
            and lifestyle interventions to manage and improve gastrointestinal health.
          </Text>
          
          <TreatmentApproach>
            {treatmentApproaches.map((approach, index) => (
              <ApproachCard key={index}>
                <ApproachIcon>{approach.icon}</ApproachIcon>
                <ProcedureTitle style={{ color: '#5d4037', fontSize: '1.1rem' }}>
                  {approach.title}
                </ProcedureTitle>
                <Text style={{ margin: 0, fontSize: '1rem' }}>{approach.desc}</Text>
              </ApproachCard>
            ))}
          </TreatmentApproach>
        </Section>

        <Section>
          <SectionTitle>Our Expert Gastroenterology Team</SectionTitle>
          <Text>
            Our dedicated team of healthcare professionals works collaboratively to provide 
            comprehensive digestive health care with compassion and expertise.
          </Text>
          
          <TeamGrid>
            {teamMembers.map((member, index) => (
              <TeamCard key={index}>
                <TeamIcon>{member.icon}</TeamIcon>
                <ProcedureTitle style={{ color: '#00695c', fontSize: '1.1rem' }}>
                  {member.title}
                </ProcedureTitle>
                <Text style={{ margin: 0, fontSize: '1rem' }}>{member.desc}</Text>
              </TeamCard>
            ))}
          </TeamGrid>
        </Section>

        <Section>
          <SectionTitle>Our Commitment to Your Digestive Health</SectionTitle>
          <Text>
            Our goal is to offer compassionate care while addressing symptoms, enhancing quality of life, 
            and supporting long-term health. We believe in a <Highlight>patient-centered approach</Highlight> 
            that combines medical excellence with personalized attention.
          </Text>
          
          <ProceduresGrid>
            <ProcedureCard>
              <ProcedureIcon>💝</ProcedureIcon>
              <ProcedureTitle>Personalized Care Plans</ProcedureTitle>
              <Text style={{ margin: 0, fontSize: '1rem' }}>Treatment strategies tailored to your specific needs and lifestyle</Text>
            </ProcedureCard>
            <ProcedureCard>
              <ProcedureIcon>🔄</ProcedureIcon>
              <ProcedureTitle>Long-term Follow-up</ProcedureTitle>
              <Text style={{ margin: 0, fontSize: '1rem' }}>Continuous monitoring and adjustment of treatment plans</Text>
            </ProcedureCard>
            <ProcedureCard>
              <ProcedureIcon>🎓</ProcedureIcon>
              <ProcedureTitle>Patient Education</ProcedureTitle>
              <Text style={{ margin: 0, fontSize: '1rem' }}>Comprehensive understanding of your condition and self-care</Text>
            </ProcedureCard>
          </ProceduresGrid>
        </Section>

        <FAQSection>
          <FAQTitle>Frequently Asked Questions about Gastroenterology</FAQTitle>
          {faqs.map((faq, index) => (
            <FAQItem key={index}>
              <Question>❓ {faq.question}</Question>
              <Answer>{faq.answer}</Answer>
            </FAQItem>
          ))}
        </FAQSection>

        <Section>
          <SectionTitle>Take the First Step Toward Better Digestive Health</SectionTitle>
          <Text>
            If you or a loved one is experiencing digestive issues or requires specialized care 
            for a gastrointestinal condition, Dr. Prabhat Memorial Hiramati Hospital is here to 
            provide expert care. Our dedicated team is committed to delivering high-quality, 
            patient-centered treatment to help you achieve optimal digestive health and well-being.
          </Text>
          
          <Text>
            <strong>Why choose our Gastroenterology Department?</strong> We combine 
            <Highlight> advanced technology</Highlight> with <Highlight>compassionate care</Highlight>, 
            offering comprehensive digestive health services from routine screenings to complex 
            therapeutic procedures.
          </Text>
          
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <CTAButton> <Link to='/book-appointment'> 🌿 Schedule GI Consultation</Link>
            </CTAButton>
            <Text style={{ color: '#00838f', fontWeight: '600', marginTop: '1rem' }}>
              📍 Rajendra Nagar, Patna • 📞 24/7 Gastroenterology Helpline
            </Text>
          </div>
        </Section>
      </ContentWrapper>
    </GastroenterologyContainer>
  );
};

export default GastroComponent;

