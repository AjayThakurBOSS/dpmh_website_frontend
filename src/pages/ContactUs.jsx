import React, { useState } from "react";
import styled from "styled-components";
import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";
//import ContactUsImg from '../assets/cancerHeder.webp';
import axios from "axios";
import { FcEndCall } from "react-icons/fc";
import { MdAttachEmail, MdLocationOn } from "react-icons/md";
import { FaHospitalAlt, FaHome } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import ContactBC from "../components/ContactBC";


const ContactUs = () => {
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const token = "TA0IstytIOGOfRYyWQig2Ih4QmqzJr6RdKoIgyQpb2230672";
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const submitContactForm = async (formData) => {
    try {
      const response = await axios.post(
        "https://app.prabhatmemorialhospital.com/api/queries", formData, {
        headers: {
          "Content-Type": "application/json", 
          Authorization: `Bearer ${token}`, 
        },
        
      },
        
      );
      return response.data;
    } catch (error) {
      console.error("Error submitting the contact form:", error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message,
    };

    try {
      await submitContactForm(formData);
      setIsSubmitted(true);
    } catch (err) {
      console.log(err);
      alert("Failed to submit the form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <LegacyContainer>
      {/* Breadcrumbs */}


      {/* Hero Section */}
      <HeroSection>
        <HeroOverlay>
          <ContactBC/>
        </HeroOverlay>
       
      </HeroSection>

      <ContactUsForm>
        <SectionTitle>We are Available Round the Clock</SectionTitle>

        {isSubmitted ? (
          <ContactUsContainer>
            <ContactInfoDiv>
              <InfoCard>
                <CallDiv>
                  <FcEndCall className="info-icon" />
                  <InfoContent>
                    <InfoLabel>Call us on</InfoLabel>
                    <InfoValue>+91 63071 80154</InfoValue>
                  </InfoContent>
                </CallDiv>
              </InfoCard>
              
              <InfoCard>
                <EmailDiv>
                  <MdAttachEmail className="info-icon email-icon" />
                  <InfoContent>
                    <InfoLabel>Email us on</InfoLabel>
                    <InfoValue>info@mangalamhospitaldeoria.com</InfoValue>
                  </InfoContent>
                </EmailDiv>
              </InfoCard>
              
              <InfoCard>
                <AddressDiv>
                  <FaHospitalAlt className="info-icon address-icon" />
                  <InfoContent>
                    <InfoLabel>Our Address</InfoLabel>
                    <InfoValue>
                      Aura, near Polytechnic college, Aurachowri, 
                      Ruciapar, Deoria, UP 274001
                    </InfoValue>
                  </InfoContent>
                </AddressDiv>
              </InfoCard>
            </ContactInfoDiv>
            
            <ThankYouMessage>
              <SuccessIcon>✓</SuccessIcon>
              <ThankYouTitle>Thank You!</ThankYouTitle>
              <ThankYouText>
                We have received your message and will get back to you soon.
              </ThankYouText>
            </ThankYouMessage>
          </ContactUsContainer>
        ) : (
          <>
            <ContactUsContainer>
              <ContactInfoDiv>
                <InfoCard>
                  <CallDiv>
                    <FcEndCall className="info-icon" style={{color:'#ffffff'}} />
                    <InfoContent>
                      <InfoLabel>Call us on</InfoLabel>
                      <InfoValue>+91 8406000555</InfoValue>
                    </InfoContent>
                  </CallDiv>
                </InfoCard>
                
                <InfoCard>
                  <EmailDiv>
                    <MdAttachEmail className="info-icon email-icon" style={{color:'#fff'}}/>
                    <InfoContent>
                      <InfoLabel>Email us on</InfoLabel>
                      <InfoValue>info@prabhatmemorialhospital.com</InfoValue>
                    </InfoContent>
                  </EmailDiv>
                </InfoCard>
                
                <InfoCard>
                  <AddressDiv>
                    <FaHospitalAlt className="info-icon address-icon" style={{color:'#fff'}}/>
                    <InfoContent>
                      <InfoLabel>Our Address</InfoLabel>
                      <InfoValue>
                        107-B, Plot No-106, Road No. 2, neaoo.oomr, Dinkar Golamber, Rajendra Nagar, Patna, Bihar 800016
                      </InfoValue>
                    </InfoContent>
                  </AddressDiv>
                </InfoCard>
              </ContactInfoDiv>
              
              <ContactUsFormDiv onSubmit={handleSubmit}>
                <FormTitle>Your feedbacks are heartly welcome</FormTitle>
                <Fieldinput
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  required
                />
                <Fieldinput
                  type="email"
                  name="email"
                  placeholder="Email *"
                  required
                />
                <Fieldinput
                  type="text"
                  name="phone"
                  placeholder="Contact Number *"
                  required
                />
                <MessageTextarea
                  rows="4"
                  placeholder="Your Message *"
                  value={message}
                  onChange={handleChange}
                  required
                />
                <SubmitButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Submit Message"}
                </SubmitButton>
              </ContactUsFormDiv>
            </ContactUsContainer>
            
            <MapSection>
              <MapTitle>Find Us Here</MapTitle>
              <MapContainer>
                <iframe
                  src="https://maps.google.com/maps?q=${Dr. Prabhat Memorial Hiramati Hospital }&z=15&output=embed"
                  width="100%"
                  height="400"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mangalam Hospital Location"
                ></iframe>
              </MapContainer>
            </MapSection>
          </>
        )}
      </ContactUsForm>
    </LegacyContainer>
  );
};

export default ContactUs;

// Styled Components
const LegacyContainer = styled.div`
  margin-bottom: 2rem;
`;



const HeroSection = styled.div`
  position: relative;
  height: 400px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;



const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(25, 81, 248, 0.8) 0%, rgba(20, 155, 210, 0.8) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;



const ContactUsForm = styled.div`
  padding: 0 3%;
  
`;

const SectionTitle = styled.h1`
  text-align: center;
  margin: 3rem 0;
  color: #1951F8;
  font-size: 2.5rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin: 2rem 0;
  }
`;

const ContactUsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 3rem;
  margin-bottom: 4rem;
  

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

const ContactInfoDiv = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const InfoCard = styled.div`
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ContactInfoBase = styled.div`
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  min-height: 120px;

  &:hover {
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
`;

const CallDiv = styled(ContactInfoBase)`
  background: linear-gradient(180deg, rgba(25, 81, 248, 0.8) 0%, rgba(20, 155, 210, 0.8) 100%);
  color: white;
`;

const EmailDiv = styled(ContactInfoBase)`
 background: linear-gradient(180deg, rgba(25, 81, 248, 0.8) 0%, rgba(20, 155, 210, 0.8) 100%);
  color: white;
`;

const AddressDiv = styled(ContactInfoBase)`
 background: linear-gradient(180deg, rgba(25, 81, 248, 0.8) 0%, rgba(20, 155, 210, 0.8) 100%);
  color: white;
  min-height: 140px;
`;



const InfoContent = styled.div`
  flex: 1;
`;

const InfoLabel = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  opacity: 0.9;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const InfoValue = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.4;
`;

const ContactUsFormDiv = styled.form`
  width: 50%;
  background: linear-gradient(180deg, rgba(25, 81, 248, 0.8) 0%, rgba(20, 155, 210, 0.8) 100%);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(25, 81, 248, 0.3);

  @media (max-width: 900px) {
    width: 100%;
    padding: 2rem;
  }
`;

const FormTitle = styled.h3`
  color: white;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: 500;
`;

const Fieldinput = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;
  margin-bottom: 1.5rem;
  border: none;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.95);
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    background: white;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }

  &::placeholder {
    color: #6c757d;
  }
`;

const MessageTextarea = styled.textarea`
  width: 100%;
  padding: 1rem 1.5rem;
  margin-bottom: 1.5rem;
  border: none;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.95);
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  min-height: 120px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    background: white;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }

  &::placeholder {
    color: #6c757d;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem 2rem;
  background: white;
  color: #1951F8;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);

  &:hover:not(:disabled) {
    background: #f8f9fa;
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

const ThankYouMessage = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #1951F8 0%, #00f2fe 100%);
  border-radius: 20px;
  margin: 2rem auto;
  max-width: 600px;
  color: white;
  box-shadow: 0 15px 35px rgba(25, 81, 248, 0.3);
`;

const SuccessIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  color: #4ade80;
`;

const ThankYouTitle = styled.h1`
  color: white;
  margin-bottom: 1rem;
  font-size: 2.5rem;
  font-weight: 600;
`;

const ThankYouText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  opacity: 0.9;
`;

const MapSection = styled.div`
  margin-top: 4rem;
`;

const MapTitle = styled.h2`
  text-align: center;
  color: #1951F8;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 600;
`;

const MapContainer = styled.div`
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  
  iframe {
    border: none;
    display: block;
  }
`;


// Add CSS for icons
const style = document.createElement('style');
style.textContent = `
  .info-icon {
    font-size: 2.5rem;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
  }
  
  .email-icon {
    color: #dc2626;
  }
  
  .address-icon {
    color: #dc2626;
  }
  
  .breadcrumb-icon {
    font-size: 0.9rem;
  }
`;
document.head.appendChild(style);