import React, { useState } from 'react';
import styled from 'styled-components';

// --- Styled Components ---

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  line-height: 1.6;
`;

const SectionTitle = styled.h2`
  color: #333;
  font-size: 24px;
  margin-top: 30px;
  margin-bottom: 15px;
  border-bottom: 2px solid #eee;
  padding-bottom: 5px;
`;

const SubHeading = styled.h3`
  color: #007bff; /* A prominent blue color often used for medical/professional sites */
  font-size: 20px;
  margin-top: 25px;
  margin-bottom: 15px;
`;

const Paragraph = styled.p`
  color: #555;
  margin-bottom: 15px;
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
    color: #007bff;
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
  margin-bottom: 10px;
  background-color: ${props => (props.isOpen ? '#f0f8ff' : '#fff')};
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
  max-height: ${props => (props.isOpen ? '500px' : '0')}; /* Arbitrarily large enough height */
  padding-top: ${props => (props.isOpen ? '10px' : '0')};
  padding-bottom: ${props => (props.isOpen ? '10px' : '0')};
  opacity: ${props => (props.isOpen ? '1' : '0')};
`;

const ToggleIcon = styled.span`
  font-size: 20px;
  transform: rotate(${props => (props.isOpen ? '180deg' : '0')});
  transition: transform 0.3s ease;
`;

// --- FAQ Data ---
const faqs = [
  {
    question: '1. How does robotic-assisted joint replacement work?',
    answer:
      "Robotic-assisted joint replacement uses advanced robotic technology to help guide the surgeon's tools with high precision during surgery, resulting in better recovery, less pain, and minimal tissue damage. It enables the surgeon to create a personalized surgical plan before the procedure."
  },
  {
    question: '2. How long is the recovery time after joint replacement surgery?',
    answer:
      'Recovery time varies based on the type of joint replacement and the patient\'s health. Generally, patients begin walking with support within a day or two and transition to normal activities within 6-8 weeks.'
  },
  {
    question: '3. Is orthopedic surgery always painful?',
    answer:
      'Orthopedic surgery is evolving to minimize bleeding, less pain and quicker recovery compared to conventional procedures. Advanced techniques, including nerve blocks and minimal incision surgery, significantly manage pain.'
  },
  {
    question: '4. What are the benefits of minimally invasive joint replacement?',
    answer:
      'Benefits include smaller incisions, reduction in tissue damage, faster recovery, and reduced post-operative pain.'
  },
  {
    question: '5. Do you offer sports injury treatments in Patna?',
    answer:
      'Yes, we provide specialized sports injury treatment for various ailments, including ACL injuries, meniscus tears, and rotator cuff surgeries, using arthroscopic techniques for quicker recovery.'
  },
  {
    question: '6. How do I know if I need joint replacement surgery?',
    answer:
      'Joint replacement is typically recommended when conservative treatments (like pain medications, physical therapy) no longer provide relief for severe joint pain or disability. Our orthopedic surgeons will guide you through the evaluation process.'
  },
  {
    question: '7. How much does joint replacement surgery cost in Patna?',
    answer:
      'The cost varies depending on the type of surgery, implant, and patient factors. We recommend consulting our billing department for an accurate cost estimation based on your specific needs and insurance plan.'
  },
  {
    question: '8. What types of joints can be replaced?',
    answer:
      'We specialize in the replacement of knee, hip, shoulder, and elbow joints using the latest technology and surgical practices.'
  }
];

// --- Component ---

const OrthopedicComponent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container>
      <SubHeading>Orthopaedics & Joint Replacement at Dr. Prabhat Memorial Hiramati Hospital, Patna</SubHeading>
      <Paragraph>
        (A Unit of Dr. Prabhat Memorial Hiramati Hospital)
      </Paragraph>
      <Paragraph>
        At Dr. Prabhat Memorial Hiramati Hospital, our Orthopaedics & Joint Replacement Department offers comprehensive care for all types of **bone, muscle, ligament, tendon, and joint disorders**, covering everything from sports injuries and joint disorders. Whether you're suffering from a minor injury or in need of complex joint replacement surgery, our team of expert orthopedic surgeons is here to provide the most advanced and personalized treatment options in Patna.
      </Paragraph>

      <SectionTitle>Comprehensive Orthopaedic Care in Patna</SectionTitle>
      <Paragraph>
        Our super-special team of **orthopedic specialists** offers diagnosis, treatment, and surgery for various musculoskeletal issues. Advanced facilities and world-class care are the hallmark of our orthopedic services, which include:
      </Paragraph>
      <List>
        <ListItem>Trauma Treatment (Bone fractures, dislocations, etc.)</ListItem>
        <ListItem>Sports Injuries (ACL, tears, meniscus damage, etc.)</ListItem>
        <ListItem>Joint Pain/Arthritis Management (Knee, Hip, Shoulder)</ListItem>
        <ListItem>Spinal Disorders (Protrusion of disc, nerve compression, etc.)</ListItem>
      </List>

      <SectionTitle>Advanced Joint Replacement Surgery in Patna</SectionTitle>
      <Paragraph>
        We are specialists in performing advanced and precise **Robotic-Assisted Joint Replacement** surgeries for **knee, hip, shoulder, and elbow joints**. Using robotic-assisted surgery ensures precise implant placement, quicker recovery, and less pain, offering the best outcomes for patients.
      </Paragraph>
      <List>
        <ListItem>Pain-free movements soon.</ListItem>
        <ListItem>Less post-operative pain.</ListItem>
        <ListItem>Faster return to normal activities.</ListItem>
      </List>
      <Paragraph>
        We also offer revision surgeries for failed or infected implants, ensuring that patients with complex joint replacement issues receive specialized care and expertise.
      </Paragraph>

      <SectionTitle>Sports Injury Treatment & Arthroscopic Procedures</SectionTitle>
      <Paragraph>
        Our orthopaedics department specializes in sports injury treatment, especially minimally invasive options for treating sports injuries with keyhole surgery, including:
      </Paragraph>
      <List>
        <ListItem>ACL/PCL Reconstruction</ListItem>
        <ListItem>Meniscus Repair</ListItem>
        <ListItem>Rotator Cuff Repairs (Shoulder Injuries)</ListItem>
        <ListItem>Shoulder Labrum Repair</ListItem>
      </List>

      <SectionTitle>Frequently Asked Questions (FAQs) – Orthopaedics & Joint Replacement</SectionTitle>
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
    </Container>
  );
};

export default OrthopedicComponent;
