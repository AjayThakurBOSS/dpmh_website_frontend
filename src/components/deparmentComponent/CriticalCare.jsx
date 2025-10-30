import React from 'react';
import styled from 'styled-components';

// Styled Components
const CriticalCareContainer = styled.section`
  background: linear-gradient(135deg, #f0f8ff 0%, #e6f2ff 100%);
  padding: 4rem 2rem;
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0.5rem;
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
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #0066cc, #004499);
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
  background: linear-gradient(135deg, #0066cc, #004499);
  color: white;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  margin: 2rem 0;
  box-shadow: 0 4px 15px rgba(0, 102, 204, 0.3);
  
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
  border-left: 5px solid #0066cc;

  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 12px;
    margin-bottom: 1.5rem;
    border-left: 4px solid #0066cc;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    border-radius: 10px;
    margin-bottom: 1rem;
    border-left: 3px solid #0066cc;
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
    content: '🏥';
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
  background: linear-gradient(135deg, #e6f2ff, #cce7ff);
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid #0066cc;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1.2rem;
    border-radius: 8px;
    border-left: 3px solid #0066cc;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 6px;
  }
`;

const FeatureTitle = styled.h3`
  color: #0066cc;
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
  background: ${props => props.primary ? 'linear-gradient(135deg, #e6f2ff, #cce7ff)' : '#f8fbff'};
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid ${props => props.primary ? '#0066cc' : '#009688'};
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1.2rem;
    border-radius: 8px;
    border-left: 3px solid ${props => props.primary ? '#0066cc' : '#009688'};
  }

  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 6px;
  }
`;

const ServiceTitle = styled.h4`
  color: ${props => props.primary ? '#0066cc' : '#009688'};
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
  border-left: 3px solid ${props => props.primary ? '#0066cc' : '#009688'};
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
  background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
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

const ICUFacilitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
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

const FacilityCard = styled.div`
  background: linear-gradient(135deg, #fff3e0, #ffe0b2);
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

const FacilityIcon = styled.div`
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
  background: linear-gradient(135deg, #f3e5f5, #e1bee7);
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
  color: #7b1fa2;
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
  border-left: 4px solid #7b1fa2;

  @media (max-width: 768px) {
    padding: 1.2rem;
    margin-bottom: 0.8rem;
    border-radius: 8px;
    border-left: 3px solid #7b1fa2;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    margin-bottom: 0.6rem;
    border-radius: 6px;
  }
`;

const Question = styled.h4`
  color: #0066cc;
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
    background: linear-gradient(135deg, #004499, #0066cc);
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
  border: 2px solid #e6f2ff;

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
  color: #0066cc;
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

const ICUTypeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;

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

const ICUTypeCard = styled.div`
  background: linear-gradient(135deg, #e0f2f1, #b2dfdb);
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


// React Component
const CriticalCare = () => {
  const features = [
    { icon: '🏆', title: 'Best Critical Care Hospital in Patna', desc: 'Recognized as the top critical care facility with advanced ICUs' },
    { icon: '⏰', title: '24/7 Advanced Critical Care', desc: 'Round-the-clock intensive care with specialized monitoring' },
    { icon: '❤️', title: 'Specialized Cardiac & Neuro Care', desc: 'Expert management of cardiac, trauma, and respiratory emergencies' },
    { icon: '🏥', title: 'Fully Equipped ICU Units', desc: 'Comprehensive ICU, CCU (Cardiac Care Unit), and Neuro ICU facilities' },
    { icon: '🔬', title: 'State-of-the-Art Technology', desc: 'Advanced ventilators, monitors, dialysis machines, and infusion pumps' },
    { icon: '👨‍⚕️', title: 'Expert Critical Care Team', desc: 'Dedicated intensivists and critical care nurses available 24/7' }
  ];

  const criticalServices = [
    {
      title: '🫁 Advanced Respiratory Support',
      items: [
        'Mechanical ventilation for critical respiratory failure',
        'Oxygen therapy and non-invasive ventilation',
        'Advanced airway management',
        'Respiratory monitoring and support'
      ]
    },
    {
      title: '❤️ Cardiac Monitoring & Support',
      items: [
        'Management of heart attacks and arrhythmias',
        'Cardiac arrest resuscitation',
        'Heart failure management',
        'Continuous cardiac monitoring'
      ]
    },
    {
      title: '🧠 Neuro Critical Care',
      items: [
        'Stroke management and rehabilitation',
        'Head injury and trauma care',
        'Seizure management and control',
        'Brain infection treatment'
      ]
    },
    {
      title: '🩸 Renal & Multi-Organ Support',
      items: [
        'Hemodialysis and continuous renal replacement therapy (CRRT)',
        'Sepsis and multi-organ failure management',
        'Aggressive infection control protocols',
        'Advanced organ support systems'
      ]
    },
    {
      title: '🔄 Post-Surgical Critical Care',
      items: [
        'Intensive care for complex post-operative patients',
        'Vital parameter monitoring',
        'Pain management and recovery support',
        'Complication management'
      ]
    },
    {
      title: '🚑 Trauma & Emergency Care',
      items: [
        'Management of polytrauma cases',
        'Road traffic accident emergency care',
        'Multiple injury stabilization',
        'Poisoning and overdose management'
      ]
    }
  ];

  const icuTypes = [
    { icon: '🏥', title: 'Medical ICU', desc: 'General critical care for medical emergencies' },
    { icon: '❤️', title: 'Cardiac Care Unit (CCU)', desc: 'Specialized cardiac emergency care' },
    { icon: '🧠', title: 'Neuro ICU', desc: 'Advanced neurological critical care' },
    { icon: '👶', title: 'Neonatal ICU', desc: 'Critical care for newborns and infants' }
  ];

  const teamMembers = [
    { icon: '👨‍⚕️', title: 'Intensivists', desc: 'Critical care medicine specialists' },
    { icon: '💓', title: 'Cardiologists', desc: 'Heart and cardiac emergency experts' },
    { icon: '🧠', title: 'Neurologists', desc: 'Brain and nervous system specialists' },
    { icon: '🩺', title: 'Critical Care Nurses', desc: '24/7 specialized nursing care' },
    { icon: '🫁', title: 'Respiratory Therapists', desc: 'Ventilator and breathing support' },
    { icon: '🏥', title: 'Allied Healthcare', desc: 'Comprehensive support team' }
  ];

  const facilities = [
    { icon: '📊', title: 'Advanced Monitoring', desc: 'Real-time vital parameter tracking' },
    { icon: '🫁', title: 'Ventilator Support', desc: 'Advanced respiratory assistance' },
    { icon: '💓', title: 'Cardiac Monitors', desc: 'Continuous heart function monitoring' },
    { icon: '🩸', title: 'Dialysis Machines', desc: 'Renal support and blood purification' },
    { icon: '💉', title: 'Infusion Pumps', desc: 'Precise medication delivery' },
    { icon: '🚨', title: 'Defibrillators', desc: 'Emergency cardiac resuscitation' }
  ];

  const faqs = [
    {
      question: 'Which is the best hospital for ICU care in Patna?',
      answer: 'Dr. Prabhat Memorial Hiramati Hospital is regarded as one of the best hospitals in Patna for ICU care, offering advanced critical care units with 24/7 monitoring and expert medical staff.'
    },
    {
      question: 'What conditions are treated in the ICU?',
      answer: 'We manage all life-threatening and critical conditions including severe infections (sepsis), cardiac arrest, strokes, trauma injuries, kidney failure, and post-surgical complications.'
    },
    {
      question: 'Is advanced ventilator support available in your ICU?',
      answer: 'Yes, our ICU is equipped with modern ventilators for both invasive and non-invasive respiratory support, managed by expert respiratory therapists.'
    },
    {
      question: 'Do you provide neuro ICU and cardiac ICU services?',
      answer: 'Absolutely, we have specialized Neuro ICU for neurological emergencies (stroke, seizures, head injuries) and Cardiac ICU for heart-related critical care including heart attacks and cardiac arrest.'
    },
    {
      question: 'Can your ICU handle multiple organ failure cases?',
      answer: 'Yes, our multi-organ support system includes ventilators, dialysis, cardiac monitoring, and advanced drug therapies to manage complex cases like sepsis and multiple organ failure.'
    },
    {
      question: 'Do you offer dialysis in the ICU?',
      answer: 'Yes, we provide ICU dialysis (CRRT) and hemodialysis for patients with acute kidney failure as part of our comprehensive critical care services.'
    },
    {
      question: 'Is there a specialized team available round-the-clock?',
      answer: 'Yes, our team of intensivists, critical care nurses, and respiratory therapists are available 24/7 to provide continuous care and rapid response to emergencies.'
    },
    {
      question: 'Can families meet ICU patients and get updates?',
      answer: 'Yes, we offer family counseling and regular updates, maintaining transparency and compassionate communication during these critical times.'
    }
  ];

  return (
    <CriticalCareContainer>
      <ContentWrapper>
        <Header>
          <Title>Critical Care Department</Title>
          <Subtitle>
            Advanced ICU & Life-Saving Care at Dr. Prabhat Memorial Hiramati Hospital, Patna
          </Subtitle>
        </Header>

        <EmergencyAlert>
          <strong>🚨 24/7 CRITICAL CARE & ICU SERVICES AVAILABLE</strong>
          Immediate intensive care for life-threatening conditions and medical emergencies
        </EmergencyAlert>

        <Section>
          <SectionTitle>Life-Saving Critical Care Excellence</SectionTitle>
          <Text>
            At Dr. Prabhat Memorial Hiramati Hospital, our Critical Care Department is dedicated to 
            providing specialized life-saving care for critically ill and injured patients who require 
            intensive monitoring and advanced treatment. As one of the leading hospitals offering the 
            best clinical care in Patna, our Intensive Care Unit (ICU) and Acute Care units are proud 
            to offer comprehensive management with immediate expert attention.
          </Text>
          
          <StatsContainer>
            <StatCard>
              <StatNumber>24/7</StatNumber>
              <StatLabel>Critical Care Monitoring</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>50+</StatNumber>
              <StatLabel>ICU Beds</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>95%</StatNumber>
              <StatLabel>Success Rate</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>60+</StatNumber>
              <StatLabel>Expert Team Members</StatLabel>
            </StatCard>
          </StatsContainer>
        </Section>

        <Section>
          <SectionTitle>Why Choose Our Critical Care Department?</SectionTitle>
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
          <SectionTitle>Specialized ICU Facilities</SectionTitle>
          <ICUTypeGrid>
            {icuTypes.map((icu, index) => (
              <ICUTypeCard key={index}>
                <FacilityIcon>{icu.icon}</FacilityIcon>
                <ServiceTitle style={{ color: '#00796b', fontSize: '1.1rem' }}>
                  {icu.title}
                </ServiceTitle>
                <Text style={{ margin: 0, fontSize: '1rem' }}>{icu.desc}</Text>
              </ICUTypeCard>
            ))}
          </ICUTypeGrid>
        </Section>

        <Section>
          <SectionTitle>Our Comprehensive Critical Care Services</SectionTitle>
          <ServicesGrid>
            {criticalServices.map((service, index) => (
              <ServiceCard key={index} primary={index % 2 === 0}>
                <ServiceTitle primary={index % 2 === 0}>
                  {service.title}
                </ServiceTitle>
                <ServiceList>
                  {service.items.map((item, itemIndex) => (
                    <ServiceItem key={itemIndex} primary={index % 2 === 0}>
                      {item}
                    </ServiceItem>
                  ))}
                </ServiceList>
              </ServiceCard>   
            ))}
          </ServicesGrid>
        </Section>

        <Section>
          <SectionTitle>Advanced Medical Technology</SectionTitle>
          <Text>
            Our ICU units are designed with cutting-edge technology including heart monitors, 
            oxygen delivery systems, blood analyzers, and advanced safety protocols to ensure 
            optimal patient outcomes and safety.
          </Text>
          
          <ICUFacilitiesGrid>
            {facilities.map((facility, index) => (
              <FacilityCard key={index}>
                <FacilityIcon>{facility.icon}</FacilityIcon>
                <ServiceTitle style={{ color: '#e65100', fontSize: '1.1rem' }}>
                  {facility.title}
                </ServiceTitle>
                <Text style={{ margin: 0, fontSize: '1rem' }}>{facility.desc}</Text>
              </FacilityCard>
            ))}
          </ICUFacilitiesGrid>
        </Section>

        <Section>
          <SectionTitle>Our Expert Critical Care Team</SectionTitle>
          <Text>
            Our Critical Care team is led by highly experienced Intensivists (critical care specialists), 
            supported by a multidisciplinary team of dedicated doctors, nurses, respiratory therapists, 
            and allied healthcare professionals - all specifically trained in delivering comprehensive 
            critical care with precision and compassion.
          </Text>
          
          <TeamGrid>
            {teamMembers.map((member, index) => (
              <TeamCard key={index}>
                <TeamIcon>{member.icon}</TeamIcon>
                <ServiceTitle style={{ color: '#2e7d32', fontSize: '1.1rem' }}>
                  {member.title}
                </ServiceTitle>
                <Text style={{ margin: 0, fontSize: '1rem' }}>{member.desc}</Text>
              </TeamCard>
            ))}
          </TeamGrid>
        </Section>

        <Section>
          <SectionTitle>Why We Are Known for the Best Critical Care in Patna</SectionTitle>
          <FeaturesGrid>
            <FeatureCard>
              <FeatureTitle>📊 24/7 Intensive Monitoring</FeatureTitle>
              <Text style={{ margin: 0 }}>Real-time observation of vital parameters with advanced technology</Text>
            </FeatureCard>
            <FeatureCard>
              <FeatureTitle>🤝 Multi-disciplinary Expertise</FeatureTitle>
              <Text style={{ margin: 0 }}>Collaboration between cardiologists, neurologists, nephrologists, and intensivists</Text>
            </FeatureCard>
            <FeatureCard>
              <FeatureTitle>❤️ Best Cardiac & Neuro ICUs</FeatureTitle>
              <Text style={{ margin: 0 }}>Specialized and reliable intensive care management for critical conditions</Text>
            </FeatureCard>
            <FeatureCard>
              <FeatureTitle>🔬 Advanced Life Support</FeatureTitle>
              <Text style={{ margin: 0 }}>Ventilators, defibrillators, dialysis machines, and infusion pumps</Text>
            </FeatureCard>
            <FeatureCard>
              <FeatureTitle>👥 High Nurse-to-Patient Ratio</FeatureTitle>
              <Text style={{ margin: 0 }}>For intensive personalized attention and better outcomes</Text>
            </FeatureCard>
            <FeatureCard>
              <FeatureTitle>💬 Family Counseling & Support</FeatureTitle>
              <Text style={{ margin: 0 }}>Regular updates and compassionate communication with patients families</Text>
            </FeatureCard>
          </FeaturesGrid>
        </Section>

        <FAQSection>
          <FAQTitle>Frequently Asked Questions about Critical Care in Patna</FAQTitle>
          {faqs.map((faq, index) => (
            <FAQItem key={index}>
              <Question>❓ {faq.question}</Question>
              <Answer>{faq.answer}</Answer>
            </FAQItem>
          ))}
        </FAQSection>

        <Section>
          <SectionTitle>Your Partner in Critical Health Recovery</SectionTitle>
          <Text>
            Our primary mission is to stabilize critical patients quickly and guide them toward recovery 
            through carefully tailored treatment plans. By combining cutting-edge techniques with 
            compassionate care, we ensure that critical patients gain the best chance of successful recovery.
          </Text>
          
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <CTAButton>
              🏥 Emergency Critical Care - Immediate Assistance
            </CTAButton>
            <Text style={{ color: '#0066cc', fontWeight: '600', marginTop: '1rem' }}>
              📍 Dinkar Golamber, Rajendar Nagar, Patna • 📞 24/7 Critical Care Helpline
            </Text>
          </div>
        </Section>
      </ContentWrapper>
    </CriticalCareContainer>
  );
};

export default CriticalCare;
