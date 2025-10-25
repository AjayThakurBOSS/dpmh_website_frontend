import React from 'react';
import styled from 'styled-components';
import { FaPlus, FaCheckCircle } from 'react-icons/fa'; 
import CardioImg from '../../assets/Cardiology-4.webp'


const HeroImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  color: #007bff; /* Primary blue color */
  font-size: 1.8rem;
  margin-top: 30px;
  margin-bottom: 15px;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SubTitle = styled.h3`
  color: #333;
  font-size: 1.4rem;
  margin-top: 25px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Paragraph = styled.p`
  line-height: 1.6;
  color: #555;
  margin-bottom: 15px;
`;

const ServicesList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 25px;
`;

const ServiceItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  color: #333;
  line-height: 1.5;

  & > svg {
    margin-right: 10px;
    color: ${props => props.$type === 'check' ? '#28a745' : '#007bff'};
    margin-top: 3px;
    font-size: 1.1rem;
    flex-shrink: 0;
  }
`;

// --- FAQ Styles ---

const FAQSection = styled.div`
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px dashed #ccc;
`;

const FAQItem = styled.div`
  margin-bottom: 25px;
`;

const FAQQuestion = styled.h3`
  font-size: 1.2rem;
  color: #007bff;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const FAQAnswer = styled.p`
  font-size: 1rem;
  color: #555;
  padding-left: 5px;
  border-left: 3px solid #f0f0f0;
`;

// --- Main Content Component ---

const CardiologyComponent = () => {
  return (
    <>
      {/* 1. Hero Image */}
  

      <SectionTitle>
        Cardiology & Cardiothoracic Vascular Surgery (CTVS) at Dr. Prabhat Memorial Hiramati Hospital, Patna
      </SectionTitle>
      
      <Paragraph>
        Dr. Prabhat Memorial Hospital is proud to offer a comprehensive range of cardiology and  Cardiothoracic Vascular Surgery (CTVS)  services in Patna. Our state-of-the-art facility, led by experienced cardiologists and surgeons, is dedicated to heart health and life-saving treatment.
      </Paragraph>

      {/* 2. Comprehensive Cardiology Services */}
      <SubTitle>Comprehensive Cardiology Services in Patna</SubTitle>
      <Paragraph>
        We provide a full spectrum of non-invasive, preventive, and interventional cardiac care, covering a wide range of heart diseases and conditions:
      </Paragraph>
      <ServicesList>
        <ServiceItem $type="plus">
          <FaPlus /> Coronary Artery Disease (CAD)
        </ServiceItem>
        <ServiceItem $type="plus">
          <FaPlus /> Heart Failure and Cardiomyopathies
        </ServiceItem>
        <ServiceItem $type="plus">
          <FaPlus /> Heart Rhythm & Electrophysiology
        </ServiceItem>
        <ServiceItem $type="plus">
          <FaPlus /> Structural Heart Disease Management
        </ServiceItem>
        <ServiceItem $type="plus">
          <FaPlus /> Valvular Heart Diseases
        </ServiceItem>
        <ServiceItem $type="plus">
          <FaPlus /> Pediatric Heart Conditions
        </ServiceItem>
      </ServicesList>

          <HeroImage src={CardioImg} alt="Cardiology Doctors with Heart Model" />

      {/* 3. Advanced Cardiac Diagnostic Facilities */}
      <SubTitle>Advanced Cardiac Diagnostic Facilities</SubTitle>
      <ServicesList>
        <ServiceItem $type="plus">
          <FaPlus /> Stress Echocardiogram (TMT)
        </ServiceItem>
        <ServiceItem $type="plus">
          <FaPlus /> Transesophageal Echo (TEE)
        </ServiceItem>
        <ServiceItem $type="plus">
          <FaPlus /> 2D Echo/Color Doppler
        </ServiceItem>
        <ServiceItem $type="plus">
          <FaPlus /> 12-lead ECG & Holter Monitoring
        </ServiceItem>
        <ServiceItem $type="plus">
          <FaPlus /> Cardiac CT Angiography
        </ServiceItem>
      </ServicesList>
      <Paragraph>
        Our comprehensive diagnostic facilities ensure accurate and timely diagnosis, providing the roadmap for the most effective treatment plan.
      </Paragraph>

      {/* 4. Expert Cardiothoracic Vascular Surgery (CTVS) */}
      <SubTitle>Expert Cardiothoracic Vascular Surgery (CTVS) in Patna</SubTitle>
      <Paragraph>
        As one of the leading hospitals, we excel in providing expert Cardiothoracic Vascular Surgery, including:
      </Paragraph>
      <ServicesList>
        <ServiceItem $type="plus">
          <FaPlus /> Coronary Artery Bypass Grafting (CABG) - On-pump and Off-pump
        </ServiceItem>
        <ServiceItem $type="plus">
          <FaPlus /> Heart Valve Repair and Replacement Surgery
        </ServiceItem>
        <ServiceItem $type="plus">
          <FaPlus /> Complex Vascular Surgeries (Aneurysm repair, bypasses)
        </ServiceItem>
        <ServiceItem $type="plus">
          <FaPlus /> Congenital Heart Defect (ASD, VSD, PDA)
        </ServiceItem>
        <ServiceItem $type="plus">
          <FaPlus /> Thoracic Surgery
        </ServiceItem>
        <ServiceItem $type="plus">
          <FaPlus /> Pacemaker Implantation
        </ServiceItem>
      </ServicesList>

      {/* 5. Key Features */}
      <SubTitle>Key Features of Our Cardiac Surgery Services:</SubTitle>
      <ServicesList>
        <ServiceItem $type="check">
          <FaCheckCircle /> Dedicated Hi-tech Cardiac Operation Theatres
        </ServiceItem>
        <ServiceItem $type="check">
          <FaCheckCircle /> Critical Care/CCU & SICU
        </ServiceItem>
        <ServiceItem $type="check">
          <FaCheckCircle /> Advanced Hemodynamic Monitor
        </ServiceItem>
        <ServiceItem $type="check">
          <FaCheckCircle /> Cardiac Rehabilitation Program
        </ServiceItem>
      </ServicesList>

      {/* 6. Why Choose */}
      <SectionTitle>Why Choose Dr. Prabhat Memorial Hiramati Hospital for Cardiac Care in Patna?</SectionTitle>
      <ServicesList>
        <ServiceItem $type="check">
          <FaCheckCircle /> Best Cardiologists & Cardiac Surgeons in Patna
        </ServiceItem>
        <ServiceItem $type="check">
          <FaCheckCircle /> State-of-the-Art Operation Theatres
        </ServiceItem>
        <ServiceItem $type="check">
          <FaCheckCircle /> Latest Cardiac Technology & Equipment
        </ServiceItem>
        <ServiceItem $type="check">
          <FaCheckCircle /> Comprehensive Diagnostic Services
        </ServiceItem>
        <ServiceItem $type="check">
          <FaCheckCircle /> Affordable Cardiac Surgery Packages
        </ServiceItem>
        <ServiceItem $type="check">
          <FaCheckCircle /> 24x7 Emergency Cardiac Care & Ambulance Service
        </ServiceItem>
      </ServicesList>
      <Paragraph>
        We give personalized care – from diagnostics to surgery to rehabilitation – so that you quickly resume a normal, healthy life.
      </Paragraph>
      
      {/* 7. FAQs */}
      <FAQSection>
        <SectionTitle>Frequently Asked Questions (FAQs) - Heart Care in Patna</SectionTitle>

        <FAQItem>
          <FAQQuestion>1. Who is the best cardiologist in Patna at your hospital?</FAQQuestion>
          <FAQAnswer>
            We have a team of highly qualified and experienced cardiologists. You can schedule a consultation to discuss your specific needs. Please check our  Related Doctors  section for detailed profiles.
          </FAQAnswer>
        </FAQItem>

        <FAQItem>
          <FAQQuestion>2. Is angioplasty and bypass surgery available at your hospital?</FAQQuestion>
          <FAQAnswer>
            Yes. We offer complex heart procedures, including  Coronary Artery Bypass Grafting (CABG)  – performed by our expert CTVS team – and minimally invasive procedures.
          </FAQAnswer>
        </FAQItem>

        <FAQItem>
          <FAQQuestion>3. Do you offer heart check-up packages in Patna?</FAQQuestion>
          <FAQAnswer>
            Yes. We provide comprehensive  Heart Check-up packages —covering ECG, Echo, TMT, and lab tests—at affordable prices.
          </FAQAnswer>
        </FAQItem>

        <FAQItem>
          <FAQQuestion>4. How much does bypass surgery cost in Patna at your hospital?</FAQQuestion>
          <FAQAnswer>
            The cost depends on individual patient needs, co-morbidities, specific procedures performed, and room type. Please contact our patient care coordinator for a detailed estimate.
          </FAQAnswer>
        </FAQItem>
        
        <FAQItem>
          <FAQQuestion>5. What symptoms indicate I should consult a cardiologist?</FAQQuestion>
          <FAQAnswer>
            If you experience persistent chest pain, shortness of breath, palpitations (irregular heartbeat), leg/foot swelling, or severe fatigue, you should consult a cardiologist immediately.
          </FAQAnswer>
        </FAQItem>

        <FAQItem>
          <FAQQuestion>6. Do you provide treatment for heart valve problems?</FAQQuestion>
          <FAQAnswer>
            Yes, our CTVS team specializes in  Heart Valve Repair and Replacement Surgery  for conditions like aortic or mitral valve stenosis/regurgitation.
          </FAQAnswer>
        </FAQItem>
        
        <FAQItem>
          <FAQQuestion>7. Do you have cardiac emergency services?</FAQQuestion>
          <FAQAnswer>
            Yes. We provide  24x7 Emergency Cardiac Care  with an ICU, ambulance, chest pain unit, and other essential services.
          </FAQAnswer>
        </FAQItem>
      </FAQSection>
      
      {/* 8. Contact Section - Styled as a call-to-action */}
      <ContactSection>
        <SectionTitle $contact={true}>Contact Us – Best Cardiology & Cardiac Surgery in Patna</SectionTitle>
        <Paragraph>
          For expert heart care and cardiac surgery, call us or book an appointment online today.
        </Paragraph>
        <ContactButton href="#">Book an Appointment</ContactButton>
      </ContactSection>
    </>
  );
};

// --- Contact Section Styles ---
const ContactSection = styled.div`
  margin-top: 40px;
  padding: 30px;
  background-color: #f7f9fc; /* Light background for separation */
  border-radius: 8px;
  text-align: center;
`;

// Modify SectionTitle for the contact block
SectionTitle.defaultProps = { $contact: false };

const ContactButton = styled.a`
  display: inline-block;
  padding: 12px 25px;
  background-color: #dc3545; /* Red/Crimson color for urgency */
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c82333;
  }
`;

export default CardiologyComponent