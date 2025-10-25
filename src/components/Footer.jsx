// Footer.js
import React from 'react';
import styled from 'styled-components';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaAngleRight, FaRegCalendarAlt, FaUserMd, FaBriefcase, FaLock } from 'react-icons/fa';

// Assuming your logo path is correct
import Logo from '../../src/assets/logo-3.png'; // Update this path to your actual logo image

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        {/* Column 1: Logo & Description */}
        <Column>
          <LogoWrapper>
            {/* The image in the original screenshot seems to be a combination of the logo and text */}
            {/* For exact replication, you might need to use an image for this whole section,
                or carefully restyle the text here to match the image's font/layout.
                I'm using a simple img tag as per your previous logo usage. */}
            <img src={Logo} alt="Dr. Prabhat Memorial Hiramati Hospital Logo" />
          </LogoWrapper>
          <HospitalDescription>
            Dr. Prabhat Memorial Hiramati Hospital, one of Patna's leading superspeciality medical centers, renowned for  its advanced healthcare solutions and compassionate care.
          </HospitalDescription>
        </Column>

        {/* Column 2: Quick Links */}
        <Column>
          <ColumnTitle>Quick Links</ColumnTitle>
          <LinkList>
            <LinkItem><StyledFaAngleRight /> <FooterLink href="#">Home</FooterLink></LinkItem>
            <LinkItem><StyledFaAngleRight /> <FooterLink href="#">About</FooterLink></LinkItem>
            <LinkItem><StyledFaAngleRight /> <FooterLink href="#">Services</FooterLink></LinkItem>
            <LinkItem><StyledFaAngleRight /> <FooterLink href="#">Doctors</FooterLink></LinkItem>
            <LinkItem><StyledFaAngleRight /> <FooterLink href="#">Contact Us</FooterLink></LinkItem>
          </LinkList>
        </Column>

        {/* Column 3: Useful Links */}
        <Column>
          <ColumnTitle>Useful Links</ColumnTitle>
          <LinkList>
            <LinkItem><FaRegCalendarAlt /> <FooterLink href="#">Appointments</FooterLink></LinkItem>
            <LinkItem><FaUserMd /> <FooterLink href="#">Our Doctors</FooterLink></LinkItem>
            <LinkItem><FaBriefcase /> <FooterLink href="#">Careers</FooterLink></LinkItem>
            <LinkItem><FaLock /> <FooterLink href="#">Privacy Policy</FooterLink></LinkItem>
          </LinkList>
        </Column>

        {/* Column 4: Contact Us */}
        <Column>
          <ColumnTitle>Contact Us</ColumnTitle>
          <ContactInfo>
            <ContactItem><FaPhoneAlt /> +91-8612402010</ContactItem>
            <ContactItem><FaEnvelope /> info@prabhatmemorialhospital.com/</ContactItem>
            <ContactItem address>
              <FaMapMarkerAlt /> 
              <div>
                Plot No-106 & 107-B, Road No. 2, near<br />
                Dinkar Golamber, Rajendra Nagar, Patna,<br />
                Bihar 800016
              </div>
            </ContactItem>
          </ContactInfo>
          <SocialIcons>
            <SocialIcon href="#" target="_blank"><FaFacebookF /></SocialIcon>
            <SocialIcon href="#" target="_blank"><FaInstagram /></SocialIcon>
            <SocialIcon href="#" target="_blank"><FaYoutube /></SocialIcon>
            <SocialIcon href="#" target="_blank"><FaLinkedinIn /></SocialIcon>
          </SocialIcons>
        </Column>
      </FooterContent>

      {/* Copyright Section */}
      <CopyrightSection>
        <p>Copyright © 2025 Dr. Prabhat Memorial Hiramati Hospital. All Rights Reserved.</p>
        <ChatButtonWrapper>
            <ChatButton href="https://wa.me/91940000444" target="_blank">
                Need Help? Chat with us
                <FaWhatsapp />
            </ChatButton>
        </ChatButtonWrapper>
      </CopyrightSection>
    </FooterContainer>
  );
};

// --- Styled Components ---

const FooterContainer = styled.footer`
  background-color: #3b508f; 
  color: #fff;
  font-family: Arial, sans-serif; 
  padding-top: 50px; 
  position: relative; 
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 15px; 
  padding-bottom: 30px; 
  color: #fff;

  @media (max-width: 992px) {
    justify-content: center; 
  }
`;

const Column = styled.div`
  flex: 1; 
  min-width: 250px; 
  margin-bottom: 30px; 
  padding: 0 15px; 

  &:first-child {
    flex-basis: 30%; 
    min-width: 300px;
  }

  @media (max-width: 992px) {
    flex-basis: 100%;
    text-align: center;
    min-width: unset;

    &:first-child {
      flex-basis: 100%;
      min-width: unset;
      margin-bottom: 20px;
    }
  }
`;

const LogoWrapper = styled.div`
  margin-bottom: 20px;

  img {
    max-width: 100%;
    height: 80px; 
    display: block; 
    
    @media (max-width: 992px) {
        margin: 0 auto; 
    }
  }
`;

const HospitalDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #ffffff;


  @media (max-width: 992px) {
    padding: 0 20px; 
  }
`;

const ColumnTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 25px;
  color: #fff;
  position: relative;
  padding-bottom: 10px; 

  &::after {
    content: '';
    position: absolute;
    left: ${props => props.align === 'center' ? '50%' : '0'};
    transform: ${props => props.align === 'center' ? 'translateX(-50%)' : 'none'};
    bottom: 0;
    width: 50px; /* Shorter underline */
    height: 3px;
    background-color: #00bfff; /* Bright blue underline */
  }

  @media (max-width: 992px) {
    text-align: center;
    &::after {
        left: 50%;
        transform: translateX(-50%);
    }
  }
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  font-size: 0.9rem;
  color: #ffffff; /* Lighter text color */

  svg {
    margin-right: 10px;
    color: #00bfff; /* Bright blue icon */
    font-size: 0.8rem; /* Smaller icon for list items */
  }

  /* Specific style for address item */
  ${props => props.address && `
    align-items: flex-start; /* Align icon to top for multi-line address */
    line-height: 1.6;
    div {
        flex: 1; /* Allow address text to take remaining space */
    }
    svg {
        margin-top: 3px; /* Align icon better with first line of text */
    }
  `}

  @media (max-width: 992px) {
    justify-content: center;
    text-align: left; /* Keep text left aligned even if parent is centered */
  }
`;

// Specific style for the small arrow icon
const StyledFaAngleRight = styled(FaAngleRight)`
    font-size: 0.7rem !important; /* Smaller size for the arrow */
    margin-top: 2px; /* Slight adjustment */
`;


const FooterLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #00bfff; /* Bright blue on hover */
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 20px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 0.9rem;
  color: #ffffff;
  line-height: 1.4;

  svg {
    margin-right: 10px;
    color: #00bfff;
    font-size: 1.1rem;
    flex-shrink: 0; /* Prevent icon from shrinking */
  }

  ${props => props.address && `
    align-items: flex-start;
    svg {
      margin-top: 3px;
    }
  `}
  
  @media (max-width: 992px) {
    justify-content: center;
    text-align: left;
    padding: 0 20px; /* Add padding to prevent text from touching edges */
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 992px) {
    justify-content: center;
    margin-top: 20px; /* Add space above social icons on mobile */
  }
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 1.3rem;
  width: 35px;
  height: 35px;
  background-color: #3b508f; /* Slightly lighter dark blue for icon background */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #00bfff; /* Bright blue on hover */
    color: #fff;
  }
`;

const CopyrightSection = styled.div`
  background-color: #3b508f; /* Even darker blue for copyright strip */
  padding: 20px 5%;
  text-align: center;
  font-size: 0.85rem;
  color: #ffffff;
  position: relative; /* For the chat button to be positioned relative to this section */
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    margin: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 15px;
    font-size: 0.8rem;
  }
`;

const ChatButtonWrapper = styled.div`
  position: fixed; /* Fixed position for the chat button */
  bottom: 20px;
  right: 20px;
  z-index: 1000; /* Ensure it's above other content */

  @media (max-width: 768px) {
    bottom: 15px;
    right: 15px;
  }
`;

const ChatButton = styled.a`
  display: flex;
  align-items: center;
  background-color: #25d366; /* WhatsApp green */
  color: white;
  padding: 10px 15px;
  border-radius: 50px; /* Pill shape */
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s;
  white-space: nowrap;

  svg {
    margin-left: 10px;
    font-size: 1.5rem; /* Larger WhatsApp icon */
  }

  &:hover {
    background-color: #128c7e; /* Darker green on hover */
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 0.9rem;
    svg {
        font-size: 1.3rem;
    }
  }
`;

export default Footer;