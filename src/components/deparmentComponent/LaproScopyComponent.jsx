import React from 'react';
import styled from 'styled-components';

// Styled Components
const LaparoscopicSurgeryContainer = styled.section`
  background: linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%);
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
  color: #0066cc;
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
    width: 120px;
    height: 4px;
    background: linear-gradient(90deg, #0066cc, #004499);
    border-radius: 2px;
  }
`;

const Subtitle = styled.p`
  color: #0080ff;
  font-size: 1.2rem;
  max-width: 900px;
  margin: 0 auto 1.5rem;
  line-height: 1.8;
  font-weight: 500;
`;

const SEOIntro = styled.div`
  background: linear-gradient(135deg, #e6f3ff, #cce7ff);
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  border-left: 5px solid #0066cc;
  text-align: center;
`;

const Section = styled.div`
  background: white;
  border-radius: 15px;
  padding: 2.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  border-left: 5px solid #0066cc;
  
  &:hover {
    transform: translateY(-3px);
    transition: transform 0.3s ease;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  }
`;

const SectionTitle = styled.h2`
  color: #0066cc;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 12px;
  
  &::before {
    content: '🔍';
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
  border: 2px solid #e6f3ff;
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #0066cc;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: #666;
  font-weight: 500;
  font-size: 0.9rem;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

const BenefitCard = styled.div`
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
`;

const BenefitIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const BenefitTitle = styled.h3`
  color: #2e7d32;
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const ProceduresGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const ProcedureCard = styled.div`
  background: ${props => props.primary ? 'linear-gradient(135deg, #e6f3ff, #cce7ff)' : '#f8fbff'};
  padding: 2rem;
  border-radius: 12px;
  border-left: 4px solid #0066cc;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ProcedureTitle = styled.h3`
  color: #0066cc;
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
  background: rgba(255, 255, 255, 0.9);
  padding: 0.8rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 8px;
  border-left: 3px solid #0066cc;
  font-weight: 500;
  color: #0066cc;
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
  background: linear-gradient(135deg, #fff3e0, #ffe0b2);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
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

const ComparisonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const ComparisonCard = styled.div`
  background: ${props => props.laparoscopic ? 'linear-gradient(135deg, #e8f5e9, #c8e6c9)' : 'linear-gradient(135deg, #ffebee, #ffcdd2)'};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const ComparisonTitle = styled.h3`
  color: ${props => props.laparoscopic ? '#2e7d32' : '#c62828'};
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1.3rem;
`;

const ComparisonList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

const ComparisonItem = styled.li`
  background: rgba(255, 255, 255, 0.8);
  padding: 0.8rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 8px;
  border-left: 3px solid ${props => props.laparoscopic ? '#2e7d32' : '#c62828'};
  font-weight: 500;
  color: ${props => props.laparoscopic ? '#2e7d32' : '#c62828'};
  display: flex;
  align-items: center;
  gap: 8px;
  
  &::before {
    content: '${props => props.laparoscopic ? '✅' : '❌'}';
    font-size: 0.9rem;
  }
`;

const Highlight = styled.span`
  color: #d32f2f;
  font-weight: 600;
`;

const CTAButton = styled.button`
  background: linear-gradient(135deg, #0066cc, #004499);
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  border-radius: 50px;
  cursor: pointer;
  margin-top: 1rem;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(0, 102, 204, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 102, 204, 0.4);
    background: linear-gradient(135deg, #0055aa, #0066cc);
  }
`;

const RecoveryInfo = styled.div`
  background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid #2e7d32;
  margin: 1.5rem 0;
  text-align: center;
`;

// React Component
const LaproScopyComponent = () => {
  const benefits = [
    { icon: '🔪', title: 'Smaller Incisions', desc: 'Tiny cuts instead of large openings' },
    { icon: '⚡', title: 'Faster Recovery', desc: 'Return to normal activities quickly' },
    { icon: '🏥', title: 'Shorter Hospital Stay', desc: 'Often same-day or 1-night stay' },
    { icon: '🎯', title: 'Less Pain', desc: 'Minimal postoperative discomfort' },
    { icon: '✨', title: 'Minimal Scarring', desc: 'Better cosmetic results' },
    { icon: '🩸', title: 'Less Blood Loss', desc: 'Reduced risk of complications' }
  ];

  const commonProcedures = [
    'Laparoscopic Cholecystectomy (Gallbladder Removal)',
    'Laparoscopic Appendectomy (Appendix Removal)',
    'Laparoscopic Hernia Repair (Inguinal, Umbilical)',
    'Laparoscopic Hysterectomy',
    'Laparoscopic Colectomy (Bowel Surgery)',
    'Laparoscopic Fundoplication (GERD Surgery)',
    'Laparoscopic Splenectomy (Spleen Removal)',
    'Laparoscopic Adrenalectomy'
  ];

  const advancedProcedures = [
    'Single Incision Laparoscopic Surgery (SILS)',
    'Robotic-Assisted Laparoscopic Surgery',
    'Laparoscopic Bariatric Surgery (Weight Loss)',
    'Laparoscopic Cancer Surgery',
    'Laparoscopic Diagnostic Procedures',
    'Laparoscopic Reconstructive Surgery'
  ];

  const technologies = [
    { icon: '🎥', title: 'High-Definition Camera', desc: 'Crystal clear visualization' },
    { icon: '🤖', title: 'Robotic Assistance', desc: 'Enhanced precision & control' },
    { icon: '💡', title: 'Fiber Optic Lighting', desc: 'Optimal illumination' },
    { icon: '📊', title: '3D Imaging', desc: 'Depth perception for complex procedures' }
  ];

  const surgicalProcess = [
    { number: '1', title: 'Preoperative Evaluation', desc: 'Comprehensive health assessment' },
    { number: '2', title: 'Anesthesia Administration', desc: 'Safe sedation management' },
    { number: '3', title: 'Minimal Incisions', desc: '3-4 small keyhole openings' },
    { number: '4', title: 'Camera Insertion', desc: 'Internal visualization' },
    { number: '5', title: 'Surgical Procedure', desc: 'Precise instrument manipulation' },
    { number: '6', title: 'Closure & Recovery', desc: 'Rapid healing process' }
  ];

  return (
    <LaparoscopicSurgeryContainer>
      <ContentWrapper>
        <Header>
          <Title>Laparoscopic Surgery Department</Title>
          <Subtitle>
            Advanced Minimally Invasive Surgery - Faster Recovery, Less Pain, Better Outcomes
          </Subtitle>
        </Header>

        <SEOIntro>
          <Text style={{ color: '#0066cc', fontWeight: '600', margin: 0, fontSize: '1.1rem' }}>
            🏆 <strong>Best Laparoscopic Surgery Center</strong> - Advanced keyhole surgery procedures including 
            gallbladder removal, hernia repair, appendectomy, and weight loss surgery. 
            Experience faster recovery with our state-of-the-art minimally invasive techniques.
          </Text>
        </SEOIntro>

        <Section>
          <SectionTitle>Revolutionary Minimally Invasive Surgery</SectionTitle>
          <Text>
            At Dr. Prabhat Memorial Hiramati Hospital, our <strong>Laparoscopic Surgery department</strong> 
            specializes in advanced minimally invasive procedures that revolutionize traditional surgery. 
            Using state-of-the-art technology, we perform complex operations through tiny incisions, 
            offering patients significant benefits over conventional open surgery.
          </Text>
          
          <StatsContainer>
            <StatCard>
              <StatNumber>3,000+</StatNumber>
              <StatLabel>Laparoscopic Procedures</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>99%</StatNumber>
              <StatLabel>Success Rate</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>70%</StatNumber>
              <StatLabel>Faster Recovery</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>24hrs</StatNumber>
              <StatLabel>Average Hospital Stay</StatLabel>
            </StatCard>
          </StatsContainer>
        </Section>

        <Section>
          <SectionTitle>Benefits of Laparoscopic Surgery</SectionTitle>
          <Text>
            Choose laparoscopic surgery for superior outcomes with minimal disruption to your life. 
            Our keyhole surgery techniques provide numerous advantages over traditional open procedures.
          </Text>
          
          <BenefitsGrid>
            {benefits.map((benefit, index) => (
              <BenefitCard key={index}>
                <BenefitIcon>{benefit.icon}</BenefitIcon>
                <BenefitTitle>{benefit.title}</BenefitTitle>
                <Text style={{ margin: 0, fontSize: '1rem' }}>{benefit.desc}</Text>
              </BenefitCard>
            ))}
          </BenefitsGrid>

          <RecoveryInfo>
            <Text style={{ color: '#2e7d32', fontWeight: '600', margin: 0 }}>
              ⚡ <strong>Rapid Recovery</strong> - Most patients return to normal activities within 
              1-2 weeks compared to 4-6 weeks with traditional surgery.
            </Text>
          </RecoveryInfo>
        </Section>

        <Section>
          <SectionTitle>Laparoscopic Procedures We Perform</SectionTitle>
          <Text>
            Our expert laparoscopic surgeons are trained in a wide range of minimally invasive 
            procedures across various surgical specialties.
          </Text>
          
          <ProceduresGrid>
            <ProcedureCard primary>
              <ProcedureTitle>🩺 Common Laparoscopic Procedures</ProcedureTitle>
              <Text>Routine minimally invasive surgeries with excellent outcomes and rapid recovery.</Text>
              <ProcedureList>
                {commonProcedures.map((procedure, index) => (
                  <ProcedureItem key={index}>
                    {procedure}
                  </ProcedureItem>
                ))}
              </ProcedureList>
            </ProcedureCard>

            <ProcedureCard>
              <ProcedureTitle>🔬 Advanced Laparoscopic Surgery</ProcedureTitle>
              <Text>Complex procedures using the latest minimally invasive technology and techniques.</Text>
              <ProcedureList>
                {advancedProcedures.map((procedure, index) => (
                  <ProcedureItem key={index}>
                    {procedure}
                  </ProcedureItem>
                ))}
              </ProcedureList>
            </ProcedureCard>
          </ProceduresGrid>
        </Section>

        <Section>
          <SectionTitle>Advanced Surgical Technology</SectionTitle>
          <Text>
            Our laparoscopic surgery suite is equipped with the latest technology to ensure 
            precision, safety, and optimal outcomes for every procedure.
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
          <SectionTitle>Laparoscopic vs Traditional Open Surgery</SectionTitle>
          <Text>
            Understand the significant differences between laparoscopic and traditional open surgery 
            to make an informed decision about your treatment.
          </Text>
          
          <ComparisonGrid>
            <ComparisonCard laparoscopic>
              <ComparisonTitle laparoscopic>✅ Laparoscopic Surgery</ComparisonTitle>
              <ComparisonList>
                <ComparisonItem laparoscopic>Small incisions (0.5-1 cm)</ComparisonItem>
                <ComparisonItem laparoscopic>Minimal blood loss</ComparisonItem>
                <ComparisonItem laparoscopic>1-2 day hospital stay</ComparisonItem>
                <ComparisonItem laparoscopic>Return to work in 1-2 weeks</ComparisonItem>
                <ComparisonItem laparoscopic>Minimal scarring</ComparisonItem>
                <ComparisonItem laparoscopic>Less postoperative pain</ComparisonItem>
              </ComparisonList>
            </ComparisonCard>

            <ComparisonCard>
              <ComparisonTitle>❌ Traditional Open Surgery</ComparisonTitle>
              <ComparisonList>
                <ComparisonItem>Large incision (6-8 inches)</ComparisonItem>
                <ComparisonItem>Significant blood loss</ComparisonItem>
                <ComparisonItem>4-7 day hospital stay</ComparisonItem>
                <ComparisonItem>Return to work in 4-6 weeks</ComparisonItem>
                <ComparisonItem>Large visible scar</ComparisonItem>
                <ComparisonItem>More postoperative pain</ComparisonItem>
              </ComparisonList>
            </ComparisonCard>
          </ComparisonGrid>
        </Section>

        <Section>
          <SectionTitle>The Laparoscopic Surgery Process</SectionTitle>
          <Text>
            From initial consultation to full recovery, we guide you through every step of your 
            laparoscopic surgery journey with care and expertise.
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
          <SectionTitle>Is Laparoscopic Surgery Right For You?</SectionTitle>
          <Text>
            Most patients are candidates for laparoscopic surgery. Our expert surgeons will 
            evaluate your condition, medical history, and specific needs to determine if 
            minimally invasive surgery is the best option for you.
          </Text>
          
          <ProcedureList>
            <ProcedureItem>Comprehensive preoperative evaluation</ProcedureItem>
            <ProcedureItem>Detailed explanation of procedure and expectations</ProcedureItem>
            <ProcedureItem>Discussion of risks and benefits</ProcedureItem>
            <ProcedureItem>Personalized recovery plan</ProcedureItem>
            <ProcedureItem>Continuous postoperative follow-up</ProcedureItem>
          </ProcedureList>

          <Text>
            <strong>Take the first step toward a faster recovery.</strong> Schedule a consultation 
            with our laparoscopic surgery specialists to explore your minimally invasive options.
          </Text>
          
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <CTAButton>
              Consult Our Laparoscopic Surgeon
            </CTAButton>
            <Text style={{ color: '#666', fontSize: '0.9rem', marginTop: '1rem' }}>
              💬 <strong>Free Second Opinion Available</strong> - Discuss your surgical options with our experts
            </Text>
          </div>
        </Section>
      </ContentWrapper>
    </LaparoscopicSurgeryContainer>
  );
};

export default LaproScopyComponent;

