import React from 'react';
import styled from 'styled-components';
 import  imageUrl from "../../assets/pedia.webp"; 

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
  /* Assuming the image in the screenshot is illustrative. In a real app, you'd use a proper <img> tag. */
  height: 350px; 
  background-color: #f0f0f0; /* Placeholder background */
  background-image: url('${props => props.src}');
  background-size: cover;
  background-position: center;
  margin-bottom: 25px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ContentBlock = styled.div`
  padding: 0 10px;
`;

const Heading = styled.h2`
  color: #007bff; /* A professional blue for emphasis */
  font-size: 24px;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  color: #555;
  margin-bottom: 20px;
  text-align: justify;
`;

const Highlight = styled.span`
  font-weight: bold;
  color: #007bff;
`;

const ContactText = styled(Paragraph)`
  margin-top: 30px;
  padding: 15px;
  border: 1px dashed #ccc;
  background-color: #f9f9f9;
  border-radius: 4px;
  font-style: italic;
`;


// --- Component ---

const PaediatricsNeonatology = () => {
  // Placeholder image source (replace with your actual image path)
 

  return (
    <Container>
      {/* Visual representation of the image from the screenshot */}
      <ImageContainer src={imageUrl} role="img" aria-label="A doctor examining a newborn baby with a stethoscope." /> 

      <ContentBlock>
        <Paragraph>
          At Dr. Prabhat Memorial Hiramati Hospital, our <Highlight>Paediatrics & Neonatology Department</Highlight> is dedicated to providing compassionate, comprehensive care for newborns, infants, children, and adolescents. We understand the unique needs of young patients and their families, offering specialized services to promote healthy growth and development. From routine check-ups and vaccinations to advanced neonatal care, our experienced pediatricians and neonatologists are committed to ensuring the well-being of every child.
        </Paragraph>

        <Heading>Our Neonatology Unit</Heading>
        <Paragraph>
          Our <Highlight>Neonatology Unit</Highlight> is equipped with state-of-the-art technology to care for premature and critically ill newborns. With advanced incubators, ventilators, and monitoring systems, we provide round-the-clock care for high-risk pregnancies and neonatal emergencies. Our team specializes in managing conditions like respiratory distress syndrome, low birth weight, neonatal jaundice, and congenital anomalies, ensuring the best possible outcomes for even the most fragile newborns.
        </Paragraph>

        <Paragraph>
          In addition to neonatal care, our department offers a wide range of pediatric services. From diagnosing and treating common illnesses to managing complex chronic conditions, our pediatricians provide personalized care for children at every stage of development. We also focus on preventive care, including routine immunizations, nutritional guidance, and developmental assessments, to help children lead healthy and active lives.
        </Paragraph>

        <Paragraph>
          Our <Highlight>family-centered approach</Highlight> ensures that parents are actively involved in their child's care. We believe in open communication, providing clear explanations and guidance to address concerns and support decision-making. Whether it's a routine consultation or managing a critical condition, our team is dedicated to creating a nurturing and supportive environment where young patients feel safe and cared for.
        </Paragraph>

        <ContactText>
          If you're looking for expert pediatric or neonatal care, <Highlight>Dr. Prabhat Memorial Hiramati Hospital</Highlight> is here to provide the highest standard of medical services. Our experienced team and advanced facilities are dedicated to supporting the health and happiness of your child, from their first moments to their teenage years. <Highlight as="a" style={{cursor: 'pointer', textDecoration: 'underline'}}>Contact us today</Highlight> to schedule a consultation or learn more about our comprehensive pediatric and neonatal care services.
        </ContactText>
      </ContentBlock>
    </Container>
  );
};

export default PaediatricsNeonatology;