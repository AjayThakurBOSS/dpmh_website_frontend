import React from 'react';
import styled from 'styled-components';

// Styled Components
const TraumaSurgeryContainer = styled.section`
  background: linear-gradient(135deg, #fff5f5 0%, #ffe6e6 100%);
  padding: 2rem 0.8rem;
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;

  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.3rem;
  }
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

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    padding: 1.5rem;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    margin-bottom: 1.5rem;
    padding: 1rem;
    border-radius: 10px;
  }
`;

const Title = styled.h1`
  color: #d32f2f;
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
    background: linear-gradient(90deg, #d32f2f, #b71c1c);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 0.8rem;
    
    &::after {
      width: 80px;
      height: 3px;
      bottom: -8px;
    }
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
    margin-bottom: 0.6rem;
    
    &::after {
      width: 60px;
      height: 2px;
      bottom: -6px;
    }
  }
`;

const Subtitle = styled.p`
  color: #666;
  font-size: 1.2rem;
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.6;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.5;
    padding: 0;
  }
`;

const EmergencyAlert = styled.div`
  background: linear-gradient(135deg, #d32f2f, #b71c1c);
  color: white;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  margin: 2rem 0;
  box-shadow: 0 4px 15px rgba(211, 47, 47, 0.3);
  
  strong {
    font-size: 1.3rem;
    display: block;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 768px) {
    padding: 1.2rem;
    margin: 1.5rem 0;
    
    strong {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 8px;
    
    strong {
      font-size: 1rem;
      margin-bottom: 0.3rem;
    }
  }
`;

const Section = styled.div`
  background: white;
  border-radius: 15px;
  padding: 2.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  border-left: 5px solid #d32f2f;

  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 12px;
    margin-bottom: 1.5rem;
    border-left: 4px solid #d32f2f;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    border-radius: 10px;
    margin-bottom: 1rem;
    border-left: 3px solid #d32f2f;
  }
`;

const SectionTitle = styled.h2`
  color: #d32f2f;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 12px;
  
  &::before {
    content: '🚑';
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.2rem;
    gap: 10px;
    
    &::before {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    gap: 8px;
    flex-direction: column;
    text-align: center;
    
    &::before {
      font-size: 1.1rem;
    }
  }
`;

const Text = styled.p`
  color: #555;
  margin-bottom: 1.2rem;
  font-size: 1.1rem;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 0.8rem;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    margin: 1.5rem 0;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
    margin: 1rem 0;
  }
`;

const FeatureCard = styled.div`
  background: linear-gradient(135deg, #ffebee, #ffcdd2);
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid #d32f2f;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1.2rem;
    border-radius: 8px;
    border-left: 3px solid #d32f2f;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 6px;
  }
`;

const FeatureTitle = styled.h3`
  color: #d32f2f;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
    gap: 6px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.6rem;
    flex-direction: column;
    text-align: center;
    gap: 4px;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin: 1.5rem 0;
  }

  @media (max-width: 480px) {
    gap: 0.8rem;
    margin: 1rem 0;
  }
`;

const ServiceCard = styled.div`
  background: ${props => props.primary ? 'linear-gradient(135deg, #e3f2fd, #bbdefb)' : '#f8f9fa'};
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid ${props => props.primary ? '#1976d2' : '#d32f2f'};
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1.2rem;
    border-radius: 8px;
    border-left: 3px solid ${props => props.primary ? '#1976d2' : '#d32f2f'};
  }

  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 6px;
  }
`;

const ServiceTitle = styled.h4`
  color: ${props => props.primary ? '#1976d2' : '#d32f2f'};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
    gap: 6px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.6rem;
    flex-direction: column;
    text-align: center;
    gap: 4px;
  }
`;

const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;

  @media (max-width: 480px) {
    margin: 0.8rem 0;
  }
`;

const ServiceItem = styled.li`
  background: rgba(255, 255, 255, 0.8);
  padding: 0.8rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 8px;
  border-left: 3px solid ${props => props.primary ? '#1976d2' : '#d32f2f'};
  font-weight: 500;
  color: #333;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &::before {
    content: '✅';
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    padding: 0.7rem 0.9rem;
    margin-bottom: 0.4rem;
    font-size: 0.95rem;
    border-radius: 6px;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 0.8rem;
    margin-bottom: 0.3rem;
    font-size: 0.9rem;
    border-radius: 5px;
    gap: 6px;
    
    &::before {
      font-size: 0.8rem;
    }
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin: 1.5rem 0;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
    margin: 1rem 0;
  }
`;

const TeamCard = styled.div`
  background: linear-gradient(135deg, #f3e5f5, #e1bee7);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1.2rem;
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 6px;
  }
`;

const TeamIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
    margin-bottom: 0.6rem;
  }
`;

const FAQSection = styled.div`
  background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 12px;
    margin: 1.5rem 0;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 10px;
    margin: 1rem 0;
  }
`;

const FAQTitle = styled.h3`
  color: #2e7d32;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
`;

const FAQItem = styled.div`
  background: white;
  padding: 1.5rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  border-left: 4px solid #2e7d32;

  @media (max-width: 768px) {
    padding: 1.2rem;
    margin-bottom: 0.8rem;
    border-radius: 8px;
    border-left: 3px solid #2e7d32;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    margin-bottom: 0.6rem;
    border-radius: 6px;
  }
`;

const Question = styled.h4`
  color: #d32f2f;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.4rem;
    gap: 6px;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    flex-direction: column;
    text-align: center;
    gap: 4px;
  }
`;

const Answer = styled.p`
  color: #555;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    text-align: center;
  }
`;

const CTAButton = styled.button`
  background: linear-gradient(135deg, #d32f2f, #b71c1c);
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  border-radius: 50px;
  cursor: pointer;
  margin-top: 1rem;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(211, 47, 47, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(211, 47, 47, 0.4);
    background: linear-gradient(135deg, #b71c1c, #d32f2f);
  }

  @media (max-width: 768px) {
    padding: 0.9rem 2rem;
    font-size: 1rem;
    border-radius: 40px;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.95rem;
    border-radius: 30px;
    width: 100%;
    margin-top: 0.5rem;
    
    &:hover {
      transform: none;
    }
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
  text-align: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin: 1.5rem 0;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
    margin: 1rem 0;
  }
`;

const StatCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
  border: 2px solid #ffebee;

  @media (max-width: 768px) {
    padding: 1.2rem;
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 6px;
  }
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #d32f2f;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 0.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
    margin-bottom: 0.3rem;
  }
`;

const StatLabel = styled.div`
  color: #666;
  font-weight: 500;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

// React Component
const TraumaComponent = () => {
  const features = [
    { icon: '⏰', title: '24x7 Trauma Care', desc: 'Round-the-clock emergency services with dedicated trauma team' },
    { icon: '🏥', title: 'Advanced Trauma Center', desc: 'State-of-the-art emergency operation theater and rapid response ambulance' },
    { icon: '👨‍⚕️', title: 'Expert Trauma Management', desc: 'Specialized care for head injuries, chest injuries, fractures, and internal bleeding' },
    { icon: '🤝', title: 'Multi-disciplinary Team', desc: 'Collaboration with orthopedic surgeons, neurosurgeons, and critical care specialists' },
    { icon: '💓', title: 'Integrated Trauma Care', desc: 'Comprehensive cardio trauma, neuro trauma, and abdominal trauma management' },
    { icon: '🩸', title: '24x7 Blood Bank', desc: 'Immediate blood transfusion support during trauma resuscitation' }
  ];

  const traumaServices = [
    {
      title: '🚨 Immediate Emergency Care',
      items: [
        'First Aid & Resuscitation - Rapid stabilization of stress, breathing, circulation',
        'Advanced Trauma Life Support (ATLS) - Following global best practices',
        'Polytrauma Management - Handling multiple injuries in the same patient',
        'Medico-Legal Emergency Handling - Forensic documentation and police coordination'
      ]
    },
    {
      title: '🧠 Specialized Trauma Services',
      items: [
        'Neuro Trauma Care - Traumatic brain injuries, skull fractures, spinal injuries',
        'Cardio Thoracic Trauma - Chest injuries, cardiac tamponade, lung injuries',
        'Orthopedic Trauma Surgery - Fractures, joint dislocations, limb injuries',
        'Abdominal Trauma Surgery - Internal bleeding, organ injuries, bowel perforation',
        'Pediatric Trauma Care - Emergency care tailored for children'
      ]
    }
  ];

  const teamMembers = [
    { icon: '👨‍⚕️', title: 'Trauma Surgeons', desc: 'Expert emergency surgery specialists' },
    { icon: '🚑', title: 'Emergency Physicians', desc: '24/7 emergency care experts' },
    { icon: '🦴', title: 'Orthopedic Specialists', desc: 'Fracture and injury management' },
    { icon: '🧠', title: 'Neurosurgeons', desc: 'Head and spinal injury experts' },
    { icon: '💓', title: 'Cardiac Surgeons', desc: 'Chest and heart trauma care' },
    { icon: '🏥', title: 'Critical Care Specialists', desc: 'ICU and post-operative care' }
  ];

  const faqs = [
    {
      question: 'Which hospital is best for trauma care in Patna?',
      answer: 'Dr. Prabhat Memorial Hiramati Hospital is widely regarded as the best hospital in Patna for trauma care, offering 24x7 advanced emergency services and expert trauma surgery.'
    },
    {
      question: 'What types of trauma cases are handled?',
      answer: 'We handle road traffic accidents, head injuries, fractures, internal bleeding, chest trauma, spinal injuries, and multi-organ trauma, among others.'
    },
    {
      question: 'Is emergency surgery available at your hospital?',
      answer: 'Yes, we provide emergency surgery round-the-clock, including neuro surgery, orthopedic surgery, abdominal surgery, and thoracic surgery.'
    },
    {
      question: 'Do you offer neuro trauma care for head injuries?',
      answer: 'Yes, we have a specialized Neuro Trauma Unit with expert neurosurgeons to manage head injuries, skull fractures, and brain trauma.'
    },
    {
      question: 'How do you manage polytrauma cases?',
      answer: 'Our multi-disciplinary team simultaneously evaluates and stabilizes multiple injuries, ensuring the best possible outcomes for complex trauma cases.'
    },
    {
      question: 'Is ambulance service available for accident cases?',
      answer: 'Yes, our 24x7 ambulance service in Patna is fully equipped with advanced life support equipment to transport trauma patients safely.'
    },
    {
      question: 'Can medico-legal cases be handled?',
      answer: 'Yes, our hospital follows proper protocols to handle medico-legal emergencies, including documentation and coordination with police authorities.'
    },
    {
      question: 'Do you have a blood bank available during emergencies?',
      answer: 'Yes, we have a 24x7 blood bank to support trauma resuscitation and emergency surgeries.'
    }
  ];

  return (
    <TraumaSurgeryContainer>
      <ContentWrapper>
        <Header>
          <Title>Trauma Surgery Department</Title>
          <Subtitle>
            At Dr. Prabhat Memorial Hiramati Hospital, Patna - Your Trusted Partner in Emergency Trauma Care
          </Subtitle>
        </Header>

        <EmergencyAlert>
          <strong>🚨 EMERGENCY TRAUMA CARE AVAILABLE 24/7</strong>
          Immediate medical attention for accidents, injuries, and life-threatening conditions
        </EmergencyAlert>

        <Section>
          <SectionTitle>Life-Saving Trauma Care in Patna</SectionTitle>
          <Text>
            Our Trauma Surgery Department is committed to delivering immediate, urgent care for patients 
            suffering from severe injuries, accidents, and trauma-related conditions. Located in Bailey Road, 
            Patna, we provide the best trauma care with rapid response, advanced medical infrastructure, 
            and an expert team to ensure life-saving treatment when it matters most.
          </Text>
          
          <StatsContainer>
            <StatCard>
              <StatNumber>24/7</StatNumber>
              <StatLabel>Emergency Services</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>1000+</StatNumber>
              <StatLabel>Trauma Cases Handled</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>15min</StatNumber>
              <StatLabel>Average Response Time</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>50+</StatNumber>
              <StatLabel>Expert Team Members</StatLabel>
            </StatCard>
          </StatsContainer>
        </Section>

        <Section>
          <SectionTitle>Why Choose Our Trauma Surgery Department?</SectionTitle>
          <FeaturesGrid>
            {features.map((feature, index) => (
              <FeatureCard key={index}>
                <FeatureTitle>
                  {feature.icon} {feature.title}
                </FeatureTitle>
                <Text style={{ margin: 0, fontSize: '1rem' }}>{feature.desc}</Text>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </Section>

        <Section>
          <SectionTitle>Our Comprehensive Trauma Care Services</SectionTitle>
          <ServicesGrid>
            {traumaServices.map((service, index) => (
              <ServiceCard key={index} primary={index === 0}>
                <ServiceTitle primary={index === 0}>
                  {service.title}
                </ServiceTitle>
                <ServiceList>
                  {service.items.map((item, itemIndex) => (
                    <ServiceItem key={itemIndex} primary={index === 0}>
                      {item}
                    </ServiceItem>
                  ))}
                </ServiceList>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </Section>

        <Section>
          <SectionTitle>Our Expert Trauma Care Team</SectionTitle>
          <Text>
            Our Trauma Surgery team comprises experienced trauma surgeons, emergency physicians, 
            orthopedic specialists, neurosurgeons, and critical care specialists. This multi-disciplinary 
            approach ensures that patients with complex trauma receive holistic care.
          </Text>
          
          <TeamGrid>
            {teamMembers.map((member, index) => (
              <TeamCard key={index}>
                <TeamIcon>{member.icon}</TeamIcon>
                <ServiceTitle style={{ color: '#7b1fa2', fontSize: '1.1rem' }}>
                  {member.title}
                </ServiceTitle>
                <Text style={{ margin: 0, fontSize: '1rem' }}>{member.desc}</Text>
              </TeamCard>
            ))}
          </TeamGrid>
        </Section>

        <Section>
          <SectionTitle>Advanced Facilities & Infrastructure</SectionTitle>
          <FeaturesGrid>
            <FeatureCard>
              <FeatureTitle>🏥 Round-the-Clock Emergency Services</FeatureTitle>
              <Text style={{ margin: 0 }}>Immediate care, 365 days a year with no delays</Text>
            </FeatureCard>
            <FeatureCard>
              <FeatureTitle>🔬 Advanced Diagnostic Support</FeatureTitle>
              <Text style={{ margin: 0 }}>CT scan, MRI, X-ray, ultrasound available 24x7</Text>
            </FeatureCard>
            <FeatureCard>
              <FeatureTitle>⚡ Emergency Operation Theaters</FeatureTitle>
              <Text style={{ margin: 0 }}>Fully equipped theaters for immediate surgery</Text>
            </FeatureCard>
            <FeatureCard>
              <FeatureTitle>🚑 Rapid Transport Ambulance</FeatureTitle>
              <Text style={{ margin: 0 }}>Equipped with ventilation, defibrillators, and emergency kits</Text>
            </FeatureCard>
          </FeaturesGrid>
        </Section>

        <FAQSection>
          <FAQTitle>Frequently Asked Questions about Trauma Care in Patna</FAQTitle>
          {faqs.map((faq, index) => (
            <FAQItem key={index}>
              <Question>❓ {faq.question}</Question>
              <Answer>{faq.answer}</Answer>
            </FAQItem>
          ))}
        </FAQSection>

        <Section>
          <SectionTitle>Immediate Trauma Care When You Need It Most</SectionTitle>
          <Text>
            For any accident, injury, or trauma emergency, don't wait — visit Dr. Prabhat Memorial 
            Hiramati Hospital immediately. Our trauma care team is ready 24/7 to provide life-saving 
            treatment and comprehensive care.
          </Text>
          
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <CTAButton>
              🚨 Emergency Contact - Get Immediate Help
            </CTAButton>
            <Text style={{ color: '#d32f2f', fontWeight: '600', marginTop: '1rem' }}>
              📍 Dinkar Golambar, Rajendra Nagar, Patna • 📞 24/7 Emergency Helpline
            </Text>
          </div>
        </Section>
      </ContentWrapper>
    </TraumaSurgeryContainer>
  );
};

export default TraumaComponent;