import React from 'react';
import styled from 'styled-components';

// Styled Components
const OncologyContainer = styled.section`
  background: linear-gradient(135deg, #fff3e0 0%, #ffecb3 100%);
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
    width: 120px;
    height: 4px;
    background: linear-gradient(90deg, #d32f2f, #b71c1c);
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
  background: linear-gradient(135deg, #ffcdd2, #ef9a9a);
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  border-left: 5px solid #d32f2f;
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
    content: '🎗️';
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

const CancerTypesGrid = styled.div`
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

const CancerTypeCard = styled.div`
  background: ${props => props.primary ? 'linear-gradient(135deg, #ffcdd2, #ef9a9a)' : 'linear-gradient(135deg, #f8bbd9, #f48fb1)'};
  padding: 2rem;
  border-radius: 12px;
  border-left: 4px solid ${props => props.primary ? '#d32f2f' : '#c2185b'};
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

const CancerTypeTitle = styled.h3`
  color: ${props => props.primary ? '#d32f2f' : '#c2185b'};
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

const CancerTypeList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;

  @media (max-width: 480px) {
    margin: 0.8rem 0;
  }
`;

const CancerTypeItem = styled.li`
  background: rgba(255, 255, 255, 0.9);
  padding: 0.8rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 8px;
  border-left: 3px solid ${props => props.primary ? '#d32f2f' : '#c2185b'};
  font-weight: 500;
  color: #333;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &::before {
    content: '🎗️';
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

const TreatmentGrid = styled.div`
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

const TreatmentCard = styled.div`
  background: linear-gradient(135deg, #e3f2fd, #bbdefb);
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

const TreatmentIcon = styled.div`
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

const TreatmentTitle = styled.h3`
  color: #1565c0;
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
  color: #2e7d32;
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

const ProcessSteps = styled.div`
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

const ProcessCard = styled.div`
  background: linear-gradient(135deg, #f3e5f5, #e1bee7);
  padding: 2rem 1.5rem;
  border-radius: 10px;
  text-align: center;
  position: relative;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    padding: 1.2rem 0.8rem;
    border-radius: 6px;
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

  @media (max-width: 480px) {
    width: 25px;
    height: 25px;
    top: -12px;
    font-size: 0.8rem;
  }
`;

const ProcessTitle = styled.h4`
  color: #7b1fa2;
  margin: 1rem 0 0.5rem 0;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 0.8rem 0 0.4rem 0;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin: 0.6rem 0 0.3rem 0;
  }
`;

const SupportGrid = styled.div`
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

const SupportCard = styled.div`
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

const SupportIcon = styled.div`
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
// React Component
const OncologyComponent = () => {
  const solidTumors = [
    'Breast Cancer',
    'Lung Cancer',
    'Prostate Cancer',
    'Colorectal Cancer',
    'Stomach Cancer',
    'Liver Cancer',
    'Pancreatic Cancer',
    'Ovarian Cancer',
    'Cervical Cancer',
    'Head & Neck Cancers'
  ];

  const hematologicalCancers = [
    'Leukemia (ALL, AML, CLL, CML)',
    'Lymphoma (Hodgkin & Non-Hodgkin)',
    'Multiple Myeloma',
    'Myelodysplastic Syndromes',
    'Myeloproliferative Neoplasms',
    'Aplastic Anemia',
    'Waldenstrom Macroglobulinemia'
  ];

  const treatments = [
    { icon: '💊', title: 'Chemotherapy', desc: 'Advanced drug therapies to destroy cancer cells' },
    { icon: '🎯', title: 'Targeted Therapy', desc: 'Precision medicines targeting specific cancer markers' },
    { icon: '🛡️', title: 'Immunotherapy', desc: 'Boosting immune system to fight cancer' },
    { icon: '📡', title: 'Radiation Therapy', desc: 'Precise radiation to eliminate tumors' },
    { icon: '🔬', title: 'Hormone Therapy', desc: 'Blocking hormones that fuel certain cancers' },
    { icon: '⚕️', title: 'Palliative Care', desc: 'Symptom management and quality of life improvement' }
  ];

  const technologies = [
    { icon: '🧬', title: 'Genomic Testing', desc: 'DNA analysis for personalized treatment' },
    { icon: '🔍', title: 'PET-CT Scan', desc: 'Advanced cancer imaging and staging' },
    { icon: '💻', title: 'Linear Accelerator', desc: 'Precision radiation delivery' },
    { icon: '🩸', title: 'Flow Cytometry', desc: 'Blood cancer diagnosis and monitoring' },
    { icon: '🧪', title: 'Molecular Pathology', desc: 'Tumor biomarker analysis' },
    { icon: '📊', title: 'Digital Pathology', desc: 'High-resolution tissue analysis' }
  ];

  const treatmentProcess = [
    { number: '1', title: 'Diagnosis & Staging', desc: 'Comprehensive cancer evaluation' },
    { number: '2', title: 'Multidisciplinary Review', desc: 'Team-based treatment planning' },
    { number: '3', title: 'Personalized Therapy', desc: 'Customized treatment protocol' },
    { number: '4', title: 'Treatment Delivery', desc: 'Expert administration and monitoring' },
    { number: '5', title: 'Side Effect Management', desc: 'Comprehensive supportive care' },
    { number: '6', title: 'Follow-up & Survivorship', desc: 'Long-term monitoring and support' }
  ];

  const supportServices = [
    { icon: '💝', title: 'Nutrition Counseling', desc: 'Diet planning during treatment' },
    { icon: '🧠', title: 'Psychological Support', desc: 'Mental health and coping strategies' },
    { icon: '🏥', title: 'Pain Management', desc: 'Advanced pain control techniques' },
    { icon: '👨‍👩‍👧‍👦', title: 'Family Counseling', desc: 'Support for patients and families' },
    { icon: '💇', title: 'Wig & Prosthesis', desc: 'Appearance-related support' },
    { icon: '📚', title: 'Patient Education', desc: 'Comprehensive information resources' }
  ];

  const teamMembers = [
    { icon: '👨‍⚕️', title: 'Medical Oncologists', desc: 'Chemotherapy and systemic therapy experts' },
    { icon: '📡', title: 'Radiation Oncologists', desc: 'Radiation therapy specialists' },
    { icon: '🔬', title: 'Onco-pathologists', desc: 'Cancer diagnosis and classification' },
    { icon: '🩺', title: 'Palliative Care Specialists', desc: 'Symptom and pain management' },
    { icon: '💊', title: 'Oncology Pharmacists', desc: 'Medication management experts' },
    { icon: '❤️', title: 'Oncology Nurses', desc: 'Specialized cancer care nursing' }
  ];

  const faqs = [
    {
      question: 'What is the difference between chemotherapy and targeted therapy?',
      answer: 'Chemotherapy attacks rapidly dividing cells throughout the body, while targeted therapy specifically targets cancer cells based on their genetic markers, causing fewer side effects.'
    },
    {
      question: 'How long does a typical chemotherapy session last?',
      answer: 'Chemotherapy sessions can range from 30 minutes to several hours, depending on the drugs used. Some treatments may require continuous infusion over multiple days.'
    },
    {
      question: 'What side effects are common with chemotherapy?',
      answer: 'Common side effects include fatigue, nausea, hair loss, low blood counts, and mouth sores. We provide comprehensive supportive care to manage these effects effectively.'
    },
    {
      question: 'Do you offer second opinions for cancer diagnosis?',
      answer: 'Yes, we encourage second opinions and provide comprehensive review of your diagnosis and treatment options through our multidisciplinary tumor board.'
    },
    {
      question: 'What is immunotherapy and who can benefit from it?',
      answer: 'Immunotherapy helps your immune system recognize and attack cancer cells. It benefits patients with specific cancer types that express certain biomarkers.'
    },
    {
      question: 'How do you manage pain during cancer treatment?',
      answer: 'We use a comprehensive pain management approach including medications, nerve blocks, complementary therapies, and palliative care interventions.'
    }
  ];

  return (
    <OncologyContainer>
      <ContentWrapper>
        <Header>
          <Title>Oncology & Chemotherapy Department</Title>
          <Subtitle>
            Advanced Cancer Care with Compassion - Comprehensive Treatment, Personalized Hope
          </Subtitle>
        </Header>

        <SEOIntro>
          <Text style={{ color: '#d32f2f', fontWeight: '600', margin: 0, fontSize: '1.1rem' }}>
            🏆 <strong>Best Cancer Care Hospital in Patna</strong> - Advanced oncology treatments including 
            chemotherapy, immunotherapy, targeted therapy, and radiation. Comprehensive cancer care with 
            state-of-the-art technology and compassionate support services.
          </Text>
        </SEOIntro>

        <EmergencyAlert>
          <strong>🚨 ONCOLOGY EMERGENCY CARE AVAILABLE 24/7</strong>
          Immediate care for chemotherapy complications, febrile neutropenia, and cancer-related emergencies
        </EmergencyAlert>

        <Section>
          <SectionTitle>Comprehensive Cancer Care Center</SectionTitle>
          <Text>
            At Dr. Prabhat Memorial Hiramati Hospital, our <strong>Oncology & Chemotherapy Department</strong> 
            is dedicated to providing world-class cancer care with compassion and expertise. We combine 
            advanced medical treatments with comprehensive supportive care to ensure the best possible 
            outcomes for our patients.
          </Text>
          
          <StatsContainer>
            <StatCard>
              <StatNumber>5000+</StatNumber>
              <StatLabel>Cancer Patients Treated</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>95%</StatNumber>
              <StatLabel>Patient Satisfaction</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>24/7</StatNumber>
              <StatLabel>Oncology Emergency Care</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>25+</StatNumber>
              <StatLabel>Years Experience</StatLabel>
            </StatCard>
          </StatsContainer>
        </Section>

        <Section>
          <SectionTitle>Cancer Types We Treat</SectionTitle>
          <Text>
            Our expert oncology team provides comprehensive care for all types of cancers, 
            from common solid tumors to complex hematological malignancies.
          </Text>
          
          <CancerTypesGrid>
            <CancerTypeCard primary>
              <CancerTypeTitle primary>🩺 Solid Tumors</CancerTypeTitle>
              <Text>Comprehensive management of organ-based cancers with advanced treatment protocols.</Text>
              <CancerTypeList>
                {solidTumors.map((cancer, index) => (
                  <CancerTypeItem key={index} primary>
                    {cancer}
                  </CancerTypeItem>
                ))}
              </CancerTypeList>
            </CancerTypeCard>

            <CancerTypeCard>
              <CancerTypeTitle>🩸 Blood Cancers</CancerTypeTitle>
              <Text>Specialized care for hematological malignancies with advanced diagnostic and treatment approaches.</Text>
              <CancerTypeList>
                {hematologicalCancers.map((cancer, index) => (
                  <CancerTypeItem key={index}>
                    {cancer}
                  </CancerTypeItem>
                ))}
              </CancerTypeList>
            </CancerTypeCard>
          </CancerTypesGrid>
        </Section>

        <Section>
          <SectionTitle>Advanced Treatment Modalities</SectionTitle>
          <Text>
            We offer a comprehensive range of cancer treatments, combining traditional approaches 
            with cutting-edge therapies to provide personalized care for each patient.
          </Text>
          
          <TreatmentGrid>
            {treatments.map((treatment, index) => (
              <TreatmentCard key={index}>
                <TreatmentIcon>{treatment.icon}</TreatmentIcon>
                <TreatmentTitle>{treatment.title}</TreatmentTitle>
                <Text style={{ margin: 0, fontSize: '1rem' }}>{treatment.desc}</Text>
              </TreatmentCard>
            ))}
          </TreatmentGrid>
        </Section>

        <Section>
          <SectionTitle>State-of-the-Art Technology</SectionTitle>
          <Text>
            Our department is equipped with the latest diagnostic and treatment technology 
            to ensure accurate diagnosis, precise treatment, and optimal outcomes.
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
          <SectionTitle>Your Cancer Treatment Journey</SectionTitle>
          <Text>
            We guide you through every step of your cancer journey, from diagnosis through 
            treatment and into survivorship, with compassion and expertise.
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
          <SectionTitle>Comprehensive Support Services</SectionTitle>
          <Text>
            We understand that cancer affects every aspect of life. Our comprehensive support 
            services address the physical, emotional, and practical needs of patients and their families.
          </Text>
          
          <SupportGrid>
            {supportServices.map((service, index) => (
              <SupportCard key={index}>
                <SupportIcon>{service.icon}</SupportIcon>
                <TreatmentTitle style={{ color: '#e65100', fontSize: '1.1rem' }}>
                  {service.title}
                </TreatmentTitle>
                <Text style={{ margin: 0, fontSize: '1rem' }}>{service.desc}</Text>
              </SupportCard>
            ))}
          </SupportGrid>
        </Section>

        <Section>
          <SectionTitle>Our Expert Oncology Team</SectionTitle>
          <Text>
            Our multidisciplinary team of cancer specialists works together to provide 
            comprehensive, coordinated care tailored to each patient's unique needs.
          </Text>
          
          <TeamGrid>
            {teamMembers.map((member, index) => (
              <TeamCard key={index}>
                <TeamIcon>{member.icon}</TeamIcon>
                <TreatmentTitle style={{ color: '#00695c', fontSize: '1.1rem' }}>
                  {member.title}
                </TreatmentTitle>
                <Text style={{ margin: 0, fontSize: '1rem' }}>{member.desc}</Text>
              </TeamCard>
            ))}
          </TeamGrid>
        </Section>

        <Section>
          <SectionTitle>Why Choose Our Cancer Center?</SectionTitle>
          <CancerTypesGrid>
            <CancerTypeCard primary>
              <CancerTypeTitle primary>💝 Patient-Centered Care</CancerTypeTitle>
              <CancerTypeList>
                <CancerTypeItem primary>Personalized treatment plans for every patient</CancerTypeItem>
                <CancerTypeItem primary>Multidisciplinary tumor board reviews</CancerTypeItem>
                <CancerTypeItem primary>Comprehensive supportive care services</CancerTypeItem>
                <CancerTypeItem primary>Focus on quality of life throughout treatment</CancerTypeItem>
              </CancerTypeList>
            </CancerTypeCard>

            <CancerTypeCard>
              <CancerTypeTitle>🏆 Clinical Excellence</CancerTypeTitle>
              <CancerTypeList>
                <CancerTypeItem>Board-certified oncology specialists</CancerTypeItem>
                <CancerTypeItem>Advanced technology and treatment protocols</CancerTypeItem>
                <CancerTypeItem>Clinical trials and research participation</CancerTypeItem>
                <CancerTypeItem>Continuous quality improvement initiatives</CancerTypeItem>
              </CancerTypeList>
            </CancerTypeCard>
          </CancerTypesGrid>
        </Section>

        <FAQSection>
          <FAQTitle>Frequently Asked Questions about Cancer Treatment</FAQTitle>
          {faqs.map((faq, index) => (
            <FAQItem key={index}>
              <Question>❓ {faq.question}</Question>
              <Answer>{faq.answer}</Answer>
            </FAQItem>
          ))}
        </FAQSection>

        <Section>
          <SectionTitle>Your Partner in the Fight Against Cancer</SectionTitle>
          <Text>
            Facing cancer can be overwhelming, but you don't have to face it alone. Our 
            Oncology & Chemotherapy Department is here to provide expert medical care, 
            emotional support, and hope throughout your cancer journey.
          </Text>
          
          <Text>
            We believe in <Highlight>treating the whole person, not just the disease</Highlight>, 
            and we are committed to providing compassionate, comprehensive care that addresses 
            your physical, emotional, and spiritual needs.
          </Text>
          
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <CTAButton>
              🎗️ Schedule Oncology Consultation
            </CTAButton>
            <Text style={{ color: '#d32f2f', fontWeight: '600', marginTop: '1rem' }}>
              📍 Bailey Road, Patna • 📞 24/7 Oncology Helpline
            </Text>
            <Text style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.5rem' }}>
              💬 Second opinions available • 🏥 Modern chemotherapy suites • 🌟 Hope and healing
            </Text>
          </div>
        </Section>
      </ContentWrapper>
    </OncologyContainer>
  );
};

export default OncologyComponent;

