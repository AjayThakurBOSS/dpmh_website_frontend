import React, { useState } from 'react';
import styled from 'styled-components';
import UroImage from '../../assets/Urology-4.webp'

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
  
  height: auto; 
  background-color: #f0f0f0; 
  background-size: cover;
  background-position: center;
  margin-bottom: 25px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  img{
    width:100%;
    height:100%;
  }
`;

const MainTitle = styled.h1`
  color: #004d99; /* A professional deep blue for medical services */
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
    color: #004d99; 
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
  background-color: ${props => (props.isOpen ? '#e6f7ff' : '#fff')}; /* Light blue background when open */
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
    background-color: #f0f8ff;
    border: 1px solid #cceeff;
    border-radius: 4px;
    margin-top: 40px;
    text-align: center;
`;

// --- FAQ Data ---
const faqs = [
  {
    question: '1. Which is the best hospital for urology treatment in Patna?',
    answer:
      'Dr. Prabhat Memorial Hiramati Hospital features a Urology Super-specialist team and hospital-grade equipment, including Minimally Invasive Surgery options, making it a leading choice for comprehensive and advanced urological care in Patna.'
  },
  {
    question: '2. How do I know if I need to see a urologist?',
    answer:
      'You should consult a urologist if you suffer from symptoms like frequent or painful urination, blood in the urine, recurrent urinary tract infections (UTIs), persistent kidney or flank pain, erectile dysfunction, or issues related to prostate health.'
  },
  {
    question: '3. What treatments are available for kidney stones in Patna?',
    answer:
      'We offer advanced, minimally invasive procedures for kidney stone removal, including    PCNL    (Percutaneous Nephrolithotomy) for large stones,    Ureteroscopy (URS)   , and    RIRS        (Retrograde Intrarenal Surgery), offering faster recovery compared to open surgery.'
  },
  {
    question: '4. Can prostate problems be treated without surgery?',
    answer:
      'Yes, BPH (Benign Prostatic Hyperplasia) can often be managed with medications and lifestyle changes in the initial stages. Surgery (like TURP) is usually reserved for cases where symptoms are severe or complications develop.'
  },
  {
    question: '5. Is erectile dysfunction treatable?',
    answer:
      'Yes, erectile dysfunction (ED) is highly treatable. Our urologists evaluate the underlying cause, which may involve lifestyle factors, diabetes, or cardiovascular issues, and offer a range of treatments from oral medications and lifestyle changes to advanced therapies like Penile Prosthesis and P-Shot (PRP). Our focus is on personalized recovery.'
  },
  {
    question: '6. What are common symptoms of bladder infections or UTIs?',
    answer:
      'Common symptoms include a strong, persistent urge to urinate, a burning sensation when urinating, passing frequent, small amounts of urine, and cloudy or strong-smelling urine. Severe cases may involve fever or lower abdominal pain.'
  },
  {
    question: "7. Are women's urinary problems treated in the urology department?",
    answer:
      "Yes, 'Female Urology' is a specialized area focusing on women's urinary health, including conditions like Stress Urinary Incontinence (SUI), overactive bladder (OAB), and recurrent UTIs."
  },
  {
    question: '8. How do I book an appointment with a urologist at Dr. Prabhat Memorial Hiramati Hospital?',
    answer:
      'You can easily book an appointment by calling our dedicated appointment helpline or by visiting the hospital’s official website for online booking. Please specify your ailment so we can schedule you with the most appropriate specialist.'
  },
];

// --- Component ---

const UrologyComponent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container>
      <ImageContainer role="img" aria-label="A doctor holding a model of kidneys." >
        <img src={UroImage} alt="uro Image" />  
      </ImageContainer>
      
      <MainTitle>Urology Department at Dr. Prabhat Memorial Hiramati Hospital, Patna</MainTitle>
      
      <Paragraph>
        The    Urology Department    at Dr. Prabhat Memorial Hiramati Hospital in Patna is committed to providing comprehensive, advanced, and compassionate care for disorders of the urinary tract in men and women, and the male reproductive system. Our highly experienced Urologists utilize    state-of-the-art diagnostic and therapeutic tools   , offering effective solutions for conditions ranging from common infections to complex urological cancers.
      </Paragraph>

      <Paragraph>
        We specialize in    Minimally Invasive Urology    and    Laparoscopic Surgery    to ensure quicker recovery, minimal scarring, and reduced post-operative pain for our patients.
      </Paragraph>

      <SectionTitle>Our Urology Specialties Include:</SectionTitle>
      
      <Subtitle>Kidney Stone Treatment & PCNL</Subtitle>
      <List>
        <ListItem>Advanced management of    Kidney, Ureter, and Bladder stones   .</ListItem>
        <ListItem>   PCNL    (Percutaneous Nephrolithotomy) for large kidney stones.</ListItem>
        <ListItem>   URS/RIRS    (Ureteroscopy/Retrograde Intrarenal Surgery) for precision stone removal.</ListItem>
      </List>

      <Subtitle>Prostate Health</Subtitle>
      <List>
        <ListItem>Comprehensive diagnosis and treatment for    BPH    (Benign Prostatic Hyperplasia).</ListItem>
        <ListItem>   TURP    (Transurethral Resection of the Prostate) and other advanced surgical options.</ListItem>
        <ListItem>Prostate Cancer Screening and Management.</ListItem>
      </List>

      <Subtitle>Uro-Oncology (Urological Cancers)</Subtitle>
      <List>
        <ListItem>Expert surgical and medical treatment for    Kidney, Bladder, Prostate, and Testicular Cancers   .</ListItem>
        <ListItem>Minimally invasive approaches for cancer surgery.</ListItem>
      </List>
      
      <Subtitle>Male Sexual & Reproductive Health</Subtitle>
      <List>
        <ListItem>Evaluation and treatment of    Erectile Dysfunction    (ED) and    Male Infertility   .</ListItem>
        <ListItem>P-Shot (PRP) and Penile Implant procedures.</ListItem>
      </List>

      <Subtitle>Female and Paediatric Urology</Subtitle>
      <List>
        <ListItem>Treatment for    Urinary Incontinence, UTIs, and Bladder disorders    in women.</ListItem>
        <ListItem>Surgical correction of congenital urological problems in children.</ListItem>
      </List>

      <SectionTitle>Why Choose Our Urology Department?</SectionTitle>
      <List>
        <ListItem>   Superspecialist Urologists:    Highly skilled and experienced surgeons trained in modern urology.</ListItem>
        <ListItem>   Minimally Invasive Treatments:    Less pain, faster recovery, and minimal scarring.</ListItem>
        <ListItem>   State-of-the-Art Technology:    Advanced endoscopy and surgical equipment.</ListItem>
        <ListItem>   Comprehensive Care:    Integrated diagnostic, surgical, and post-operative support under one roof.</ListItem>
      </List>
      
      <Paragraph>
        Our goal is to provide quality urology care tailored to each patient's unique needs, with professionalism, integrity, and patient comfort as our top priorities.
      </Paragraph>

      <SectionTitle>Frequently Asked Questions (FAQs) about Urology Care in Patna</SectionTitle>
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
        <SectionTitle style={{color: '#004d99', borderBottom: '1px solid #cceeff', paddingBottom: '10px'}}>
            Contact Us for the Best Urology Care in Patna
        </SectionTitle>
        <Paragraph style={{color: '#555'}}>
            If you or your loved one are facing any urological issue, contact Dr. Prabhat Memorial Hiramati Hospital today. Our team is ready to provide you with expert consultation, diagnosis, and personalized treatment options. Schedule your appointment to start your journey toward better health.
        </Paragraph>
      </ContactInfo>
    </Container>
  );
};

export default UrologyComponent;

