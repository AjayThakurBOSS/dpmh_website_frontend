import React, { useState } from 'react';
import styled from 'styled-components';
import NephroImg from '../../assets/NEPHROLOGY-8.webp'

// --- Styled Components ---

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
`;

const ImageContainer = styled.div`
  width: 100%;
  /* Placeholder for the image of kidneys/nephrology */
  height: auto; 
  background-color: #f0f0f0; 
  background-size: cover;
  background-position: center;
  margin-bottom: 25px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  img{
    width: 100%;
    border-radius: 10px;
  }
`;

const MainTitle = styled.h1`
  color: #006064; /* A deep teal/blue for kidney-related services */
  font-size: 28px;
  margin-bottom: 15px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  color: #333;
  font-size: 22px;
  margin-top: 30px;
  margin-bottom: 15px;
  border-bottom: 2px solid #eee;
  padding-bottom: 5px;
`;

const Subtitle = styled.h3`
  color: #007bff;
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 10px;
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
    color: #006064; 
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
  background-color: ${props => (props.isOpen ? '#e0f7fa' : '#fff')}; /* Light cyan background when open */
  color: #333;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;

  &:hover {
    background-color: #f9f9f9;
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
  color: #007bff;
  transform: rotate(${props => (props.isOpen ? '180deg' : '0')});
  transition: transform 0.3s ease;
`;

const ContactInfo = styled.div`
    padding: 20px;
    background-color: #e0f7fa;
    border: 1px solid #b2ebf2;
    border-radius: 4px;
    margin-top: 40px;
    text-align: center;
`;

// --- FAQ Data ---
const faqs = [
  {
    question: '1. Which hospital is best for kidney treatment in Patna?',
    answer:
      'Dr. Prabhat Memorial Hiramati Hospital boasts a dedicated Nephrology Department with experienced specialists, advanced diagnostic tools, and comprehensive treatment options including dialysis and pre/post-transplant care, making it a leading choice for kidney treatment in Patna.'
  },
  {
    question: '2. What kidney diseases are treated at your hospital?',
    answer:
      'We treat a wide range of kidney diseases, including Chronic Kidney Disease (CKD), Acute Kidney Injury (AKI), glomerulonephritis, diabetic nephropathy, hypertension-related kidney disease, kidney stones, and polycystic kidney disease, among others.'
  },
  {
    question: '3. Is dialysis available at your hospital?',
    answer:
      'Yes, our hospital provides advanced     Hemodialysis     and     Peritoneal Dialysis     services with state-of-the-art equipment and experienced staff to ensure optimal care for patients with kidney failure.'
  },
  {
    question: '4. Do you perform kidney transplants?',
    answer:
      'While we do not perform kidney transplants directly, we provide comprehensive pre-transplant evaluation, patient workup, and crucial post-transplant care, including immunosuppression management and monitoring for complications.'
  },
  {
    question: '5. Can kidney disease be treated non-surgically?',
    answer:
      'Many kidney diseases can be managed effectively with medications, lifestyle modifications, and dietary changes, especially in their early stages. Our nephrologists focus on preventing disease progression and managing symptoms through non-surgical approaches.'
  },
  {
    question: '6. How is diabetic kidney disease managed?',
    answer:
      'Diabetic kidney disease (diabetic nephropathy) is managed through strict blood sugar and blood pressure control, specific medications (like SGLT2 inhibitors and ARBs), dietary changes, and regular monitoring of kidney function by our nephrologists.'
  },
  {
    question: '7. Is diet counseling available for kidney patients?',
    answer:
      'Yes, we provide personalized diet counseling services by experienced nutritionists who work closely with our nephrologists to create tailored meal plans that support kidney health and manage specific dietary restrictions for kidney patients.'
  },
  {
    question: '8. How often should I get my kidney function checked?',
    answer:
      'The frequency of kidney function checks depends on your risk factors. Individuals with diabetes, hypertension, a family history of kidney disease, or those on certain medications should get regular check-ups as advised by their doctor, typically annually or more frequently if needed.'
  },
];

// --- Component ---

const NepherologyComponent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container>
      <ImageContainer role="img" aria-label="A doctor pointing to a model of kidneys." > 
            <img src={NephroImg} alt='nephro image ' />
      </ImageContainer>
      
      <MainTitle>Nephrology Department at Dr. Prabhat Memorial Hiramati Hospital, Patna</MainTitle>
      
      <Paragraph>
        At Dr. Prabhat Memorial Hiramati Hospital, our     Nephrology Department     in Patna provides comprehensive, advanced, and compassionate care for patients with various kidney and urinary tract disorders. Our team of highly skilled     Nephrologists     is dedicated to the diagnosis, treatment, and management of kidney diseases, ranging from common conditions to complex renal failures, ensuring the best possible outcomes for our patients.
      </Paragraph>

      <Paragraph>
        We are equipped with state-of-the-art facilities for     dialysis (Hemodialysis & Peritoneal Dialysis)    , advanced diagnostic tools, and a multidisciplinary approach to kidney care, focusing on personalized treatment plans and preventive strategies.
      </Paragraph>

      <SectionTitle>Our Nephrology Specialties Include:</SectionTitle>
      
      <Subtitle>Chronic Kidney Disease (CKD) Management</Subtitle>
      <List>
        <ListItem>Early diagnosis and management of     CKD stages I-V    .</ListItem>
        <ListItem>Slowdown of disease progression.</ListItem>
        <ListItem>Management of     complications of CKD     (anemia, bone disease, etc.).</ListItem>
      </List>

      <Subtitle>Acute Kidney Injury (AKI)</Subtitle>
      <List>
        <ListItem>Prompt diagnosis and treatment of     acute renal failure    .</ListItem>
        <ListItem>Management of AKI due to various causes (infections, drug toxicity, trauma).</ListItem>
      </List>

      <Subtitle>Glomerular Diseases</Subtitle>
      <List>
        <ListItem>Diagnosis and treatment of     glomerulonephritis     and other inflammatory kidney diseases.</ListItem>
        <ListItem>Kidney biopsy and immunosuppressive therapy.</ListItem>
      </List>
      
      <Subtitle>Diabetic Nephropathy & Hypertension Related Kidney Disease</Subtitle>
      <List>
        <ListItem>Management of     kidney damage due to diabetes and high blood pressure    .</ListItem>
        <ListItem>Specialized care plans to prevent progression to kidney failure.</ListItem>
      </List>

      <Subtitle>Dialysis Services</Subtitle>
      <List>
        <ListItem>State-of-the-art     Hemodialysis Unit     with advanced machines.</ListItem>
        <ListItem>Training and support for     Peritoneal Dialysis    .</ListItem>
      </List>

      <Subtitle>Pre- & Post-Transplant Care</Subtitle>
      <List>
        <ListItem>Comprehensive evaluation and preparation for     kidney transplant    .</ListItem>
        <ListItem>Post-transplant follow-up and immunosuppression management.</ListItem>
      </List>

      <SectionTitle>Why Choose Our Nephrology Department?</SectionTitle>
      <List>
        <ListItem>    Experienced Nephrologists:     Our team comprises highly skilled and compassionate kidney specialists.</ListItem>
        <ListItem>    Advanced Dialysis Facilities:     Modern hemodialysis units and peritoneal dialysis support.</ListItem>
        <ListItem>    Comprehensive Diagnostic Services:     In-house lab and imaging for accurate diagnosis.</ListItem>
        <ListItem>    Holistic Patient Care:     Focusing on diet, lifestyle, and overall well-being in addition to medical treatment.</ListItem>
      </List>
      
      <Paragraph>
        We are committed to delivering the highest standards of kidney care, ensuring that our patients receive individualized and effective treatment plans.
      </Paragraph>

      <SectionTitle>Our Comprehensive Kidney Care Services Include:</SectionTitle>
      <List>
        <ListItem>    Kidney Disease Diagnosis & Management:     Early detection and comprehensive treatment for various kidney ailments.</ListItem>
        <ListItem>    Hemodialysis:     Regular, efficient, and safe hemodialysis sessions.</ListItem>
        <ListItem>    Peritoneal Dialysis:     Training, support, and monitoring for home-based peritoneal dialysis.</ListItem>
        <ListItem>    Dietary Counseling:     Personalized nutritional plans for kidney patients.</ListItem>
        <ListItem>    Hypertension & Diabetes Management:     Specialized care to protect kidneys from damage due to these conditions.</ListItem>
        <ListItem>    Electrolyte Management:     Correction of electrolyte imbalances associated with kidney disease.</ListItem>
        <ListItem>    Kidney Biopsy:     Diagnostic procedures for precise identification of kidney diseases.</ListItem>
        <ListItem>    AV Fistula Creation & Management:     Surgical creation and care of vascular access for hemodialysis.</ListItem>
        <ListItem>    Pre- & Post-Transplant Care:     Evaluation, preparation, and follow-up for kidney transplant patients.</ListItem>
      </List>

      <SectionTitle>Why We Are Known for the Best Kidney Care in Patna</SectionTitle>
      <List>
        <ListItem>Dedicated team of highly qualified and experienced Nephrologists.</ListItem>
        <ListItem>Advanced infrastructure for diagnostics and treatment.</ListItem>
        <ListItem>Patient-centric approach with personalized care plans.</ListItem>
        <ListItem>Excellent success rates in managing complex kidney conditions.</ListItem>
        <ListItem>Robust post-treatment support and follow-up programs.</ListItem>
      </List>

      <SectionTitle>Frequently Asked Questions (FAQs) about Kidney Care in Patna</SectionTitle>
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
        <SectionTitle style={{color: '#006064', borderBottom: '1px solid #b2ebf2', paddingBottom: '10px'}}>
            Contact Us for Kidney Care & Dialysis in Patna
        </SectionTitle>
        <Paragraph style={{color: '#555'}}>
            If you or your loved ones require expert kidney care, do not hesitate to contact Dr. Prabhat Memorial Hiramati Hospital. Our dedicated team is ready to provide you with the best medical advice and treatment. Schedule your appointment today.
        </Paragraph>
      </ContactInfo>
    </Container>
  );
};

export default NepherologyComponent;

