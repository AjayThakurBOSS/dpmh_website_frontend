import React, { useState } from 'react';
import styled from 'styled-components';
import EmergImg from '../../assets/Emeregncy-Medicine-4.webp'

// --- Styled Components ---

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  @media (max-width: 1430px){
    padding: 0 15px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  /* Placeholder for the image */
 

  background-size: cover;
  background-position: center;
  margin-bottom: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  img{
    border-radius: 10px;
  }
`;

const MainTitle = styled.h1`
  color: #007bff;
  font-size: 28px;
  margin-bottom: 15px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  color: #333;
  font-size: 22px;
  
  margin-bottom: 15px;
  border-bottom: 2px solid #eee;
  padding-bottom: 5px;
  font-weight: 700;
`;

const Paragraph = styled.p`
  color: #555;
  margin-bottom: 15px;
  text-align: justify;
`;

const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 20px;
`;

const ListItem = styled.li`
  color: #555;
  margin-bottom: 8px;
  position: relative;
  padding-left: 20px;

  &::before {
    content: '•';
    color: #dc3545; /* Red or emergency color for emphasis */
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;

const FAQSection = styled.div`
  margin-top: 40px;
`;

const FAQQuestion = styled.div`
  cursor: pointer;
  padding: 15px;
  border: 1px solid #ddd;
  margin-bottom: 5px;
  background-color: ${props => (props.isOpen ? '#fff3f4' : '#fff')}; /* Light red/pink for emergency theme */
  color: #333;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;

  &:hover {
    background-color: #f8f8f8;
  }
`;

const FAQAnswer = styled.div`
  padding: 10px 15px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-top: none;
  margin-bottom: 10px;
  color: #555;
  border-radius: 0 0 4px 4px;
  overflow: hidden;
  transition: max-height 0.3s ease-out, padding 0.3s ease-out;
  max-height: ${props => (props.isOpen ? '500px' : '0')}; 
  padding-top: ${props => (props.isOpen ? '10px' : '0')};
  padding-bottom: ${props => (props.isOpen ? '10px' : '0')};
  opacity: ${props => (props.isOpen ? '1' : '0')};
`;

const ToggleIcon = styled.span`
  font-size: 20px;
  color: #dc3545;
  transform: rotate(${props => (props.isOpen ? '180deg' : '0')});
  transition: transform 0.3s ease;
`;

const ContactInfo = styled.div`
    padding: 20px;
    background-color: #007bff;
    color: white;
    border-radius: 4px;
    margin-top: 40px;
    text-align: center;
`;

const ContactLink = styled.a`
    color: #ffc107;
    font-weight: bold;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;


// --- FAQ Data ---
const faqs = [
  {
    question: '1. Which is the best hospital for emergency care in Patna?',
    answer:
      'In modern superspeciality hospitals like Dr. Prabhat Memorial Hiramati Hospital, we provide 24x7 specialized emergency and trauma care. Our dedicated team of emergency physicians, surgeons, and nurses ensures immediate and expert treatment, making us a top choice for emergency services in Patna.'
  },
  {
    question: '2. What should I do in case of a medical emergency?',
    answer:
      'In a medical emergency, the immediate steps are to remain calm, call the emergency services/ambulance (if available) or quickly transport the patient to the nearest specialized emergency department. Informing the hospital in advance helps the emergency team prepare for your arrival.'
  },
  {
    question: '3. Does your hospital provide ambulance services?',
    answer:
      'Yes, we provide 24/7 advanced ambulance services equipped with necessary life support systems and trained medical personnel to ensure safe and swift transport of critically ill patients to our facility.'
  },
  {
    question: '4. Do you treat road accident and trauma cases?',
    answer:
      'Yes, our highly experienced team provides specialized treatment for all types of road accidents and trauma cases, involving orthopedic, neurosurgical, and critical care expertise, available round-the-clock.'
  },
  {
    question: '5. Can I visit your emergency department for chest pain or heart attack symptoms?',
    answer:
      'Absolutely. We have a dedicated, state-of-the-art emergency cardiology team and a Cath Lab backup to provide immediate diagnosis and intervention for heart attacks, severe chest pain, and other cardiac emergencies.'
  },
  {
    question: '6. Do you treat snake bites or poisoning cases?',
    answer:
      'Yes, our emergency and critical care department is fully equipped to handle and treat snake bites, various poisoning cases, and other toxicological emergencies with specialized protocols and anti-venom/antidotes.'
  },
  {
    question: '7. Are medico-legal cases accepted in your emergency department?',
    answer:
      'We accept all genuine medico-legal cases, including accident and assault cases, and follow necessary legal and police protocols as required by law.'
  },
  {
    question: '8. Is paediatric emergency care available at your hospital?',
    answer:
      'Yes, we have experienced paediatricians and neonatologists available to handle paediatric emergency cases, ensuring specialized care for children and infants.'
  },
];

// --- Component ---

const EmergencyComponent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container>
      <ImageContainer role="img" aria-label="Medical professional organizing emergency vials and medication." >
         <img src={EmergImg} alt="Emergency" />
      </ImageContainer>
      
      <MainTitle>Emergency Medicine Department at Dr Prabhat Memorial Hiramati Hospital, Patna</MainTitle>
      
      <Paragraph>
        At Dr. Prabhat Memorial Hiramati Hospital, our   Emergency Medicine Department   is dedicated to providing immediate, high-quality, and compassionate care for all life-threatening medical and surgical conditions, 24 hours a day, 7 days a week. Our department is the first point of care for critically ill and injured patients, staffed by experienced emergency physicians, nurses, and support personnel specializing in emergency and critical care.
      </Paragraph>

      <Paragraph>
        We are equipped with advanced life-saving equipment, specialized trauma bays, and immediate access to superspeciality services, ensuring that every patient receives prompt and definitive care. Our goal is to minimize morbidity and mortality through swift diagnosis and effective intervention.
      </Paragraph>

      <SectionTitle>Why Choose Our Emergency & Trauma Care?</SectionTitle>
      <List>
        <ListItem>  24x7 Specialized Emergency Care   for all medical and surgical emergencies.</ListItem>
        <ListItem>  Immediate Access to Superspecialists   (Cardiology, Neuro, Ortho, etc.).</ListItem>
        <ListItem>First hospital in the region to adopt the   TRIAGE   system for faster treatment prioritization.</ListItem>
        <ListItem>Dedicated   Trauma Bays   and minor emergency procedure rooms.</ListItem>
        <ListItem>  24x7 Advanced Ambulance Services   with life support systems.</ListItem>
      </List>

      <SectionTitle>Our Emergency Services Include:</SectionTitle>
      <List>
        <ListItem>  Cardiac Emergencies:   Heart attack (MI), heart failure, arrhythmias, cardiac arrest management.</ListItem>
        <ListItem>  Stroke and Neurological Emergencies:   Acute stroke care, seizures, severe headaches, coma.</ListItem>
        <ListItem>  Trauma and Accidents:   Management of road traffic accidents, fractures, head injuries, burns, and other critical trauma.</ListItem>
        <ListItem>  Critical Care and Respiratory Emergencies:   Management of severe asthma, COPD exacerbation, respiratory failure, and severe infections (sepsis).</ListItem>
        <ListItem>  Gastrointestinal Emergencies:   Severe abdominal pain, bleeding (GI Bleed), acute pancreatitis.</ListItem>
        <ListItem>  Toxicology Emergencies:   Poisoning, drug overdoses, and snake/insect bites.</ListItem>
        <ListItem>  Paediatric Emergencies:   High fever, infections, dehydration, and childhood trauma.</ListItem>
      </List>
      
      <Paragraph>
        We also provide immediate consultation with all super-speciality departments, ensuring seamless transition from emergency stabilization to definitive care.
      </Paragraph>

      <SectionTitle>What Makes Our Emergency Department the Best in Patna?</SectionTitle>
      <List>
        <ListItem>  Trained Emergency Team:   Dedicated full-time Emergency Medicine specialists, available 24 hours.</ListItem>
        <ListItem>  State-of-the-Art Equipment:   Including defibrillators, portable X-ray/USG, advanced monitoring, and ventilators.</ListItem>
        <ListItem>  In-house Labs and Imaging:   24x7 availability of CT Scan, MRI, X-ray, and comprehensive laboratory services for rapid diagnosis.</ListItem>
        <ListItem>  Integrated Trauma Management:   Coordinated care involving Orthopedics, Neurosurgery, and General Surgery for polytrauma cases.</ListItem>
      </List>

      <SectionTitle>Frequently Asked Questions (FAQs) about Emergency Care in Patna</SectionTitle>
      <FAQSection>
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index}>
              <FAQQuestion onClick={() => toggleFAQ(index)} isOpen={isOpen}>
                {faq.question}
                <ToggleIcon isOpen={isOpen}>▼</ToggleIcon>
              </FAQQuestion>
              <FAQAnswer isOpen={isOpen}>
                <Paragraph>{faq.answer}</Paragraph>
              </FAQAnswer>
            </div>
          );
        })}
      </FAQSection>

      <ContactInfo>
        <SectionTitle style={{color: 'white', borderBottom: '1px solid white', paddingBottom: '10px'}}>
            Contact Us for 24x7 Emergency Care in Patna
        </SectionTitle>
        <Paragraph style={{color: 'white'}}>
            For immediate assistance, please call the Dr. Prabhat Memorial Hiramati Hospital Emergency Helpline. Every second counts in an emergency, and our team is ready to provide life-saving care the moment you arrive.
        </Paragraph>
        <Paragraph style={{color: 'white', fontSize: '1.2em'}}>
            Emergency Helpline: <ContactLink href="tel:+918406000555">8406000555</ContactLink>
        </Paragraph>
      </ContactInfo>
    </Container>
  );
};

export default EmergencyComponent;

