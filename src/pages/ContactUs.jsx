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
import { PiPhoneCallFill } from "react-icons/pi";
import MetaTags from "../util/MetaTags";

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
            <MetaTags
              title="Book your Appointment | Team of Exprienced Doctor | Best Emergency Care | Best Critical Care | 24x7 Emergency Care | | Dr Prabhat memorial Hiramati Hospital, Rajendra Nager, Patna"
              description="Book your appointment at Dr. Prabhat Memorial Hiramati Hospital, Rajendra Nagar, Patna. 24x7 Emergency Care, ICU, Critical Care, expert doctors & advanced treatment."
              keywords="Dr Prabhat Memorial Hiramati Hospital Patna, Best hospital in Rajendra Nagar Patna, 24x7 emergency hospital in Patna, Critical care hospital in Patna, ICU and trauma care Patna, Book appointment Patna hospital, Best doctors in Patna, Emergency medical services Patna, Multispeciality hospital in Patna, Best critical care unit Patna, Best emergency care Patna, Ambulance and ICU services Patna"
              
              type="website"
            />
      {/* Breadcrumbs */}

      {/* Hero Section */}
      <HeroSection>
          <ContactBC/>
      </HeroSection>

      <ContactUsForm>
        <SectionTitle>Write to us...</SectionTitle>

        {isSubmitted ? (
          <ContactUsContainer>
            <ContactInfoDiv>
              <InfoCard>
                <CallDiv>

                  <PiPhoneCallFill className="info-icon" />
                  <InfoContent>
                    <InfoLabel>Call us on</InfoLabel>
                    <InfoValue>+91 8406000555</InfoValue>
                  </InfoContent>
                </CallDiv>
              </InfoCard>
              
              <InfoCard>
                <EmailDiv>
                  <MdAttachEmail className="info-icon email-icon" />
                  <InfoContent>
                    <InfoLabel>Email us on</InfoLabel>
                    <InfoValue>info@dpmhhospital.com</InfoValue>
                  </InfoContent>
                </EmailDiv>
              </InfoCard>
              
              <InfoCard>
                <AddressDiv>
                  <FaHospitalAlt className="info-icon address-icon" />
                  <InfoContent>
                    <InfoLabel>Our Address</InfoLabel>
                    <InfoValue>
                     Rajendra Nagar, Road no. 2, Near Dinkar Golamber, Patna - 800016
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
                    <PiPhoneCallFill className="info-icon" style={{color:'#ffffff'}} />
                    <InfoContent>
                      <InfoLabel>Call us on</InfoLabel>
                      <InfoValue> <a href='tel:+91 8406000555'>+91 8406 000 555</a> </InfoValue>
                      <InfoValue> <a href='tel:+91 8406000444'>+91 8406 000 444</a> </InfoValue>
                    </InfoContent>
                  </CallDiv>
                </InfoCard>
                
                <InfoCard>
                  <EmailDiv>
                    <MdAttachEmail className="info-icon email-icon" style={{color:'#fff'}}/>
                    <InfoContent>
                      <InfoLabel>Email us on</InfoLabel>
                      <InfoValue>info@dpmhhospital.com</InfoValue>
                    </InfoContent>
                  </EmailDiv>
                </InfoCard>
                
                <InfoCard>
                  <AddressDiv>
                    <FaHospitalAlt className="info-icon address-icon" style={{color:'#fff'}}/>
                    <InfoContent>
                      <InfoLabel>Our Address</InfoLabel>
                      <InfoValue>
                       Rajendra Nagar, Road no. 2, Near Dinkar Golamber, Patna - 800016
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
  background-color: #ffffffff;
`;

const HeroSection = styled.div`
  position: relative;
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
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const ContactUsForm = styled.div`
  padding: 0 3%;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SectionTitle = styled.h1`
  text-align: center;
  margin: 3rem 0;
  color: #000000;
  font-size: 2.5rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin: 2rem 0 1.5rem;
    line-height: 1.3;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin: 1.5rem 0 1rem;
  }
`;

const ContactUsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 3rem;
  margin-bottom: 4rem;

  @media (max-width: 1024px) {
    gap: 2rem;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const ContactInfoDiv = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 900px) {
    width: 100%;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    gap: 0.8rem;
  }
`;

const InfoCard = styled.div`
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    &:hover {
      transform: none;
    }
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

  @media (max-width: 1024px) {
    padding: 1.5rem;
    gap: 1.2rem;
    min-height: 110px;
  }

  @media (max-width: 768px) {
    padding: 1.2rem;
    gap: 1rem;
    min-height: auto;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    gap: 0.8rem;
    border-radius: 12px;
    flex-direction: column;
    text-align: center;
    align-items: center;
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

  @media (max-width: 768px) {
    min-height: auto;
  }
`;

const InfoContent = styled.div`
  flex: 1;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const InfoLabel = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  opacity: 0.9;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 0.85rem;
    margin-bottom: 0.3rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    letter-spacing: 0.3px;
  }
`;

const InfoValue = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.4;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.3;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const ContactUsFormDiv = styled.form`
  width: 50%;
  background: linear-gradient(180deg, rgba(25, 81, 248, 0.8) 0%, rgba(20, 155, 210, 0.8) 100%);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(25, 81, 248, 0.3);

  @media (max-width: 1024px) {
    padding: 2.5rem;
  }

  @media (max-width: 900px) {
    width: 100%;
    padding: 2rem;
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    border-radius: 12px;
  }
`;

const FormTitle = styled.h3`
  color: white;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 1.2rem;
    line-height: 1.4;
  }
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

  @media (max-width: 768px) {
    padding: 0.9rem 1.2rem;
    margin-bottom: 1.2rem;
    font-size: 0.95rem;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1rem;
    margin-bottom: 1rem;
    font-size: 0.9rem;
    border-radius: 8px;
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

  @media (max-width: 768px) {
    padding: 0.9rem 1.2rem;
    margin-bottom: 1.2rem;
    font-size: 0.95rem;
    border-radius: 10px;
    min-height: 100px;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1rem;
    margin-bottom: 1rem;
    font-size: 0.9rem;
    border-radius: 8px;
    min-height: 80px;
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

  @media (max-width: 768px) {
    padding: 0.9rem 1.5rem;
    font-size: 1rem;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1.2rem;
    font-size: 0.95rem;
    border-radius: 8px;
  }
`;

const ThankYouMessage = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #004AAD 0%, #00f2fe 100%);
  border-radius: 20px;
  margin: 2rem auto;
  max-width: 600px;
  color: white;
  box-shadow: 0 15px 35px rgba(25, 81, 248, 0.3);

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    margin: 1.5rem auto;
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
    margin: 1rem auto;
    border-radius: 12px;
  }
`;

const SuccessIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  color: #4ade80;

  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
    margin-bottom: 0.8rem;
  }
`;

const ThankYouTitle = styled.h1`
  color: white;
  margin-bottom: 1rem;
  font-size: 2.5rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 0.6rem;
  }
`;

const ThankYouText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.4;
  }
`;

const MapSection = styled.div`
  margin-top: 4rem;

  @media (max-width: 768px) {
    margin-top: 3rem;
  }

  @media (max-width: 480px) {
    margin-top: 2rem;
  }
`;

const MapTitle = styled.h2`
  text-align: center;
  color: #004AAD;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
`;

const MapContainer = styled.div`
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  
  iframe {
    border: none;
    display: block;
  }

  @media (max-width: 768px) {
    border-radius: 12px;
    
    iframe {
      height: 350px;
    }
  }

  @media (max-width: 480px) {
    border-radius: 8px;
    
    iframe {
      height: 300px;
    }
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

  @media (max-width: 768px) {
    .info-icon {
      font-size: 2rem;
      width: 50px;
    }
  }

  @media (max-width: 480px) {
    .info-icon {
      font-size: 1.8rem;
      width: 45px;
    }
  }
`;
document.head.appendChild(style);