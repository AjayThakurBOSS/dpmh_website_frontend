import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components
const GynecologyContainer = styled.section`
  background: linear-gradient(135deg, #fce4ec 0%, #f8bbd9 100%);
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
  color: #c2185b;
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
    background: linear-gradient(90deg, #c2185b, #ad1457);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 0.8rem;
    
    &::after {
      width: 100px;
      height: 3px;
      bottom: -8px;
    }
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
    margin-bottom: 0.6rem;
    
    &::after {
      width: 80px;
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

const SEOIntro = styled.div`
  background: linear-gradient(135deg, #f8bbd9, #f48fb1);
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  border-left: 5px solid #c2185b;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 10px;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 1rem;
  }
`;

const EmergencyAlert = styled.div`
  background: linear-gradient(135deg, #e91e63, #c2185b);
  color: white;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  margin: 2rem 0;
  box-shadow: 0 4px 15px rgba(233, 30, 99, 0.3);
  
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
  border-left: 5px solid #c2185b;

  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 12px;
    margin-bottom: 1.5rem;
    border-left: 4px solid #c2185b;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    border-radius: 10px;
    margin-bottom: 1rem;
    border-left: 3px solid #c2185b;
  }
`;

const SectionTitle = styled.h2`
  color: #c2185b;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 12px;
  
  &::before {
    content: '👩‍⚕️';
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
  border: 2px solid #fce4ec;

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
  color: #c2185b;
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin: 1.5rem 0;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    margin: 1rem 0;
  }
`;

const ServiceCard = styled.div`
  background: ${props => props.primary ? 'linear-gradient(135deg, #f8bbd9, #f48fb1)' : 'linear-gradient(135deg, #e1bee7, #ce93d8)'};
  padding: 2rem;
  border-radius: 12px;
  border-left: 4px solid ${props => props.primary ? '#c2185b' : '#7b1fa2'};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
    border-radius: 8px;
  }
`;

const ServiceTitle = styled.h3`
  color: ${props => props.primary ? '#c2185b' : '#7b1fa2'};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.3rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
    gap: 8px;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 0.6rem;
    flex-direction: column;
    text-align: center;
    gap: 6px;
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
  background: rgba(255, 255, 255, 0.9);
  padding: 0.8rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 8px;
  border-left: 3px solid ${props => props.primary ? '#c2185b' : '#7b1fa2'};
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

const PregnancyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
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

const PregnancyCard = styled.div`
  background: linear-gradient(135deg, #c8e6c9, #a5d6a7);
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 10px;
    
    &:hover {
      transform: none;
    }
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
    border-radius: 8px;
  }
`;

const PregnancyIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 0.6rem;
  }
`;

const PregnancyTitle = styled.h3`
  color: #2e7d32;
  margin-bottom: 1rem;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.6rem;
  }
`;

const TechnologyGrid = styled.div`
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

const TechCard = styled.div`
  background: linear-gradient(135deg, #bbdefb, #90caf9);
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

const TechIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 0.6rem;
  }
`;

const TechTitle = styled.h4`
  color: #1565c0;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.4rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const ConditionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
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

const ConditionCard = styled.div`
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

const ConditionIcon = styled.div`
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

const TeamGrid = styled.div`
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

const TeamCard = styled.div`
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

const Highlight = styled.span`
  color: #d32f2f;
  font-weight: 600;
`;

const CTAButton = styled.button`
  background: linear-gradient(135deg, #c2185b, #ad1457);
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  border-radius: 50px;
  cursor: pointer;
  margin-top: 1rem;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(194, 24, 91, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(194, 24, 91, 0.4);
    background: linear-gradient(135deg, #ad1457, #c2185b);
  }

  a {
    color: white;
    text-decoration: none;
    display: block;
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
  color: #c2185b;
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

// React Component
const GyaneComponent = () => {
  const gynecologyServices = [
    'Annual Well-Woman Exams & Pap Smears',
    'PCOS (Polycystic Ovary Syndrome) Management',
    'Menstrual Disorders & Heavy Bleeding Treatment',
    'Endometriosis Diagnosis & Management',
    'Fibroids & Ovarian Cysts Treatment',
    'Menopause Management & HRT',
    'Contraception & Family Planning',
    'Minimally Invasive Gynecologic Surgery',
    'Fertility Evaluation & Treatment',
    'Pelvic Floor Disorders Treatment'
  ];

  const obstetricsServices = [
    'Preconception Counseling & Planning',
    'High-Risk Pregnancy Management',
    'Normal & Cesarean Deliveries',
    'Prenatal Genetic Testing & Counseling',
    'Fetal Medicine & Ultrasound',
    'Gestational Diabetes Management',
    'Postpartum Care & Recovery',
    'Lactation Consultation & Support',
    'Multiple Gestation Care',
    'Pregnancy-related Hypertension Management'
  ];

  const pregnancyCare = [
    { icon: '🤰', title: 'First Trimester Care', desc: 'Early pregnancy monitoring and support' },
    { icon: '👶', title: 'Second Trimester', desc: 'Anatomy scan and growth monitoring' },
    { icon: '🏥', title: 'Third Trimester', desc: 'Delivery preparation and final checks' },
    { icon: '💝', title: 'Postpartum Care', desc: 'Mother and baby wellness after delivery' }
  ];

  const technologies = [
    { icon: '📡', title: '3D/4D Ultrasound', desc: 'Advanced fetal imaging and monitoring' },
    { icon: '🔬', title: 'Colposcopy', desc: 'Detailed cervical examination' },
    { icon: '💻', title: 'Digital Fetal Monitoring', desc: 'Continuous baby heart rate tracking' },
    { icon: '🔄', title: 'Laparoscopy', desc: 'Minimally invasive gynecologic surgery' },
    { icon: '🧬', title: 'Genetic Screening', desc: 'Advanced prenatal testing' },
    { icon: '📊', title: 'Electronic Fetal Monitoring', desc: 'Labor progression tracking' }
  ];

  const conditions = [
    { icon: '🩺', title: 'PCOS', desc: 'Hormonal disorder management' },
    { icon: '🔴', title: 'Endometriosis', desc: 'Painful condition treatment' },
    { icon: '🎗️', title: 'Fibroids', desc: 'Non-cancerous growth treatment' },
    { icon: '🦋', title: 'Thyroid Disorders', desc: 'Hormonal imbalance care' },
    { icon: '💧', title: 'UTI & Infections', desc: 'Women\'s health infections' },
    { icon: '🔄', title: 'Menstrual Issues', desc: 'Cycle regulation and care' }
  ];

  const teamMembers = [
    { icon: '👩‍⚕️', title: 'Gynecologists', desc: 'Women\'s health specialists' },
    { icon: '🤰', title: 'Obstetricians', desc: 'Pregnancy and delivery experts' },
    { icon: '👶', title: 'Neonatologists', desc: 'Newborn care specialists' },
    { icon: '💝', title: 'Lactation Consultants', desc: 'Breastfeeding support' },
    { icon: '🧠', title: 'Fetal Medicine Specialists', desc: 'High-risk pregnancy care' },
    { icon: '🔪', title: 'Gynecologic Surgeons', desc: 'Minimally invasive surgery' }
  ];

  const faqs = [
    {
      question: 'When should I schedule my first prenatal visit?',
      answer: 'We recommend scheduling your first prenatal visit as soon as you suspect you\'re pregnant, typically around 8 weeks of gestation for comprehensive initial assessment and care planning.'
    },
    {
      question: 'What is the recommended frequency for well-woman exams?',
      answer: 'Annual well-woman exams are recommended for all women from adolescence through menopause, with Pap smears typically every 3 years for women aged 21-65 with normal results.'
    },
    {
      question: 'Do you offer minimally invasive surgical options?',
      answer: 'Yes, we specialize in laparoscopic and hysteroscopic procedures that offer faster recovery, less pain, and minimal scarring compared to traditional open surgery.'
    },
    {
      question: 'What fertility services do you provide?',
      answer: 'We offer comprehensive fertility evaluations, ovulation induction, intrauterine insemination (IUI), and work with advanced fertility centers for IVF referrals when needed.'
    },
    {
      question: 'How do you manage high-risk pregnancies?',
      answer: 'Our high-risk pregnancy team includes maternal-fetal medicine specialists who provide specialized monitoring, advanced testing, and coordinated care for complex pregnancy conditions.'
    },
    {
      question: 'What postpartum support services are available?',
      answer: 'We provide comprehensive postpartum care including breastfeeding support, mental health screening, physical recovery monitoring, and newborn care education for new mothers.'
    }
  ];

  return (
    <GynecologyContainer>
      <ContentWrapper>
        <Header>
          <Title>Gynecology & Obstetrics Department</Title>
          <Subtitle>
            Comprehensive Women's Healthcare - From Adolescence to Menopause and Beyond
          </Subtitle>
        </Header>

        <SEOIntro>
          <Text style={{ color: '#c2185b', fontWeight: '600', margin: 0, fontSize: '1.1rem' }}>
            🏆 <strong>Best Gynecology & Obstetrics Hospital in Patna</strong> - Complete women's healthcare 
            including pregnancy care, gynecological surgery, fertility treatments, and preventive care. 
            Trust our expert team for compassionate, comprehensive women's health services.
          </Text>
        </SEOIntro>

        <EmergencyAlert>
          <strong>🚨 24/7 MATERNITY & GYNECOLOGY EMERGENCY CARE</strong>
          Immediate care for labor, pregnancy complications, and gynecological emergencies
        </EmergencyAlert>

        <Section>
          <SectionTitle>Comprehensive Women's Healthcare</SectionTitle>
          <Text>
            At Dr. Prabhat Memorial Hiramati Hospital, our <strong>Gynecology & Obstetrics Department</strong> 
            is dedicated to providing exceptional healthcare for women at every stage of life. From 
            adolescent health to menopause management, pregnancy care to surgical interventions, 
            our team offers compassionate, comprehensive care tailored to each woman's unique needs.
          </Text>
          
          <StatsContainer>
            <StatCard>
              <StatNumber>5000+</StatNumber>
              <StatLabel>Successful Deliveries</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>99%</StatNumber>
              <StatLabel>Patient Satisfaction</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>24/7</StatNumber>
              <StatLabel>Labor & Delivery</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>20+</StatNumber>
              <StatLabel>Years Experience</StatLabel>
            </StatCard>
          </StatsContainer>
        </Section>

        <Section>
          <SectionTitle>Our Comprehensive Services</SectionTitle>
          <Text>
            We provide a full spectrum of gynecological and obstetrical care, ensuring that every 
            aspect of women's health is addressed with expertise and compassion.
          </Text>
          
          <ServicesGrid>
            <ServiceCard primary>
              <ServiceTitle primary>🌸 Gynecology Services</ServiceTitle>
              <Text>Comprehensive care for women's reproductive health and wellness throughout life.</Text>
              <ServiceList>
                {gynecologyServices.map((service, index) => (
                  <ServiceItem key={index} primary>
                    {service}
                  </ServiceItem>
                ))}
              </ServiceList>
            </ServiceCard>

            <ServiceCard>
              <ServiceTitle>🤰 Obstetrics & Pregnancy Care</ServiceTitle>
              <Text>Expert care for normal and high-risk pregnancies, delivery, and postpartum recovery.</Text>
              <ServiceList>
                {obstetricsServices.map((service, index) => (
                  <ServiceItem key={index}>
                    {service}
                  </ServiceItem>
                ))}
              </ServiceList>
            </ServiceCard>
          </ServicesGrid>
        </Section>

        <Section>
          <SectionTitle>Complete Pregnancy Journey Care</SectionTitle>
          <Text>
            We accompany you through every stage of your pregnancy journey, providing expert care, 
            support, and monitoring to ensure the health and well-being of both mother and baby.
          </Text>
          
          <PregnancyGrid>
            {pregnancyCare.map((stage, index) => (
              <PregnancyCard key={index}>
                <PregnancyIcon>{stage.icon}</PregnancyIcon>
                <PregnancyTitle>{stage.title}</PregnancyTitle>
                <Text style={{ margin: 0, fontSize: '1rem' }}>{stage.desc}</Text>
              </PregnancyCard>
            ))}
          </PregnancyGrid>
        </Section>

        <Section>
          <SectionTitle>Advanced Technology & Diagnostics</SectionTitle>
          <Text>
            Our department is equipped with state-of-the-art technology to provide accurate diagnoses, 
            advanced monitoring, and minimally invasive treatments for optimal patient outcomes.
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
          <SectionTitle>Common Conditions We Treat</SectionTitle>
          <Text>
            Our expert team manages a wide range of gynecological conditions with personalized 
            treatment plans and compassionate care.
          </Text>
          
          <ConditionsGrid>
            {conditions.map((condition, index) => (
              <ConditionCard key={index}>
                <ConditionIcon>{condition.icon}</ConditionIcon>
                <PregnancyTitle style={{ color: '#e65100', fontSize: '1.1rem' }}>
                  {condition.title}
                </PregnancyTitle>
                <Text style={{ margin: 0, fontSize: '1rem' }}>{condition.desc}</Text>
              </ConditionCard>
            ))}
          </ConditionsGrid>
        </Section>

        <Section>
          <SectionTitle>Our Expert Women's Health Team</SectionTitle>
          <Text>
            Our multidisciplinary team of specialists works together to provide comprehensive, 
            coordinated care for all your gynecological and obstetrical needs.
          </Text>
          
          <TeamGrid>
            {teamMembers.map((member, index) => (
              <TeamCard key={index}>
                <TeamIcon>{member.icon}</TeamIcon>
                <PregnancyTitle style={{ color: '#00695c', fontSize: '1.1rem' }}>
                  {member.title}
                </PregnancyTitle>
                <Text style={{ margin: 0, fontSize: '1rem' }}>{member.desc}</Text>
              </TeamCard>
            ))}
          </TeamGrid>
        </Section>

        <Section>
          <SectionTitle>Why Choose Our Women's Health Services?</SectionTitle>
          <ServicesGrid>
            <ServiceCard primary>
              <ServiceTitle primary>💝 Patient-Centered Approach</ServiceTitle>
              <ServiceList>
                <ServiceItem primary>Personalized care plans for every patient</ServiceItem>
                <ServiceItem primary>Respect for individual preferences and values</ServiceItem>
                <ServiceItem primary>Comprehensive patient education and support</ServiceItem>
                <ServiceItem primary>Continuity of care throughout life stages</ServiceItem>
              </ServiceList>
            </ServiceCard>

            <ServiceCard>
              <ServiceTitle>🏆 Excellence in Care</ServiceTitle>
              <ServiceList>
                <ServiceItem>Board-certified specialists with extensive experience</ServiceItem>
                <ServiceItem>Advanced technology and evidence-based practices</ServiceItem>
                <ServiceItem>Multidisciplinary team collaboration</ServiceItem>
                <ServiceItem>Focus on preventive care and wellness</ServiceItem>
              </ServiceList>
            </ServiceCard>
          </ServicesGrid>
        </Section>

        <FAQSection>
          <FAQTitle>Frequently Asked Questions about Women's Health</FAQTitle>
          {faqs.map((faq, index) => (
            <FAQItem key={index}>
              <Question>❓ {faq.question}</Question>
              <Answer>{faq.answer}</Answer>
            </FAQItem>
          ))}
        </FAQSection>

        <Section>
          <SectionTitle>Your Partner in Women's Health Journey</SectionTitle>
          <Text>
            Whether you're planning a family, navigating pregnancy, managing gynecological conditions, 
            or maintaining wellness through life's changes, our Gynecology & Obstetrics Department is 
            here to provide expert, compassionate care every step of the way.
          </Text>
          
          <Text>
            We believe in <Highlight>empowering women</Highlight> through education, supporting them 
            with advanced medical care, and partnering with them to achieve their health goals at 
            every stage of life.
          </Text>
          
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <CTAButton> <Link to='/book-appointment'>🌸 Schedule Your Appointment</Link>
            </CTAButton>
            <Text style={{ color: '#c2185b', fontWeight: '600', marginTop: '1rem' }}>
              📍 Rajendra Nagar, Patna • 📞 24/7 Maternity & Gynecology Helpline
            </Text>
            <Text style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.5rem' }}>
              💬 Confidential consultations available • 🏥 Modern labor and delivery suites
            </Text>
          </div>
        </Section>
      </ContentWrapper>
    </GynecologyContainer>
  );
};

export default GyaneComponent;

