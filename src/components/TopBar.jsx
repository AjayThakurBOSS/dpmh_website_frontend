// TopBar.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaAmbulance, FaFacebookF, FaInstagram, FaYoutube, FaBars, FaTimes } from 'react-icons/fa';
import { VscLocation } from "react-icons/vsc";
import { MdAddCall } from "react-icons/md";

const TopBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handlePhoneClick = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const handleEmailClick = () => {
    window.open('mailto:info@info@dpmhhospital.com', '_self');
  };

  const handleAmbulanceClick = () => {
    window.open('tel:+918406000555', '_self');
  };

  const handleLocationClick = () => {
    window.open('https://share.google/t9m45GaXpkdnObcsr', '_blank');
  };

  return (
    <>
      <TopBarContainer>
        {/* Desktop View */}
        <DesktopContactInfo>
          <ContactItem onClick={handleEmailClick} style={{ cursor: 'pointer' }}>
            <FaEnvelope /> info@dpmhhospital.com
          </ContactItem>
{/*           <SocialIcon href="https://share.google/t9m45GaXpkdnObcsr" onClick={handleLocationClick}>
            <FaMapMarkerAlt />
          </SocialIcon> */}
          <ContactItem  href="https://share.google/t9m45GaXpkdnObcsr" onClick={handleLocationClick}>
            <FaMapMarkerAlt />Rajendra Nagar,  Patna, Bihar
          </ContactItem>
          <ContactItem onClick={() => handlePhoneClick('+918406000555')} style={{ cursor: 'pointer' }}>
            <FaPhoneAlt /> +918406000555
          </ContactItem>
          <ContactItem onClick={() => handlePhoneClick('+918406000444')} style={{ cursor: 'pointer' }}>
            <FaPhoneAlt /> +91-8406000444
          </ContactItem>
          <ContactItem onClick={handleAmbulanceClick} style={{ cursor: 'pointer' }}>
            <FaAmbulance /> Call Ambulance
          </ContactItem>
        </DesktopContactInfo>

        {/* Social Icons - Always Visible on Both Desktop and Mobile */}
        <SocialIconsWrapper>
          <SocialIcon href="https://share.google/t9m45GaXpkdnObcsr" onClick={handleLocationClick}>
            <VscLocation />
          </SocialIcon>
          <SocialIcon href="https://www.facebook.com/Prabhatmemorialhiramati" target="_blank">
            <FaFacebookF />
          </SocialIcon>
          <SocialIcon href="https://www.instagram.com/dpmh_hospital/" target="_blank">
            <FaInstagram />
          </SocialIcon>
          <SocialIcon href="https://www.youtube.com/@drprabhatmemorialhospital" target="_blank">
            <FaYoutube />
          </SocialIcon>
        </SocialIconsWrapper>

        {/* Mobile View - Toggle Button */}
        <MobileToggleButton onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <MdAddCall /> : <MdAddCall />}
          <span style={{ fontSize: '0.8rem', marginLeft: '5px' }}>
            {isMobileMenuOpen ? 'Call' : 'Call'}
          </span>
        </MobileToggleButton>
      </TopBarContainer>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen}>
        <MobileContactInfo>
          <MobileContactItem onClick={handleEmailClick}>
            <FaEnvelope /> 
            <div>
              <div>info@dpmhhospital.com</div>
              <MobileContactHint>Click to send email</MobileContactHint>
            </div>
          </MobileContactItem>
          
          <MobileContactItem>
            <FaMapMarkerAlt /> 
            <div>
              <div>Rajendar Nagar, Patna, Bihar</div>
              <MobileContactHint>Hospital Location</MobileContactHint>
            </div>
          </MobileContactItem>
          
          <MobileContactItem onClick={() => handlePhoneClick('+918406000555')}>
            <FaPhoneAlt /> 
            <div>
              <div>+91-8406000555</div>
              <MobileContactHint>Click to call</MobileContactHint>
            </div>
          </MobileContactItem>
          
          <MobileContactItem onClick={() => handlePhoneClick('+9184060 00555')}>
            <FaPhoneAlt /> 
            <div>
              <div>+91-84060 00444</div>
              <MobileContactHint>Click to call</MobileContactHint>
            </div>
          </MobileContactItem>
          
          <MobileContactItem onClick={handleAmbulanceClick} className="ambulance">
            <FaAmbulance /> 
            <div>
              <div>Call Ambulance</div>
              <MobileContactHint>Emergency - Click to call</MobileContactHint>
            </div>
          </MobileContactItem>
        </MobileContactInfo>
      </MobileMenu>
    </>
  );
};

const TopBarContainer = styled.div`
  background-color: #00bfff;
  color: white;
  padding: 8px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  position: relative;
  z-index: 1000;

  @media (max-width: 1200px) {
    padding: 8px 15px;
  }
`;

const DesktopContactInfo = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 1200px) {
    display: none;
  }
`;

const SocialIconsWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  @media (max-width: 1200px) {
    gap: 10px;
    margin-left: auto;
    margin-right: 15px;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.85rem;
  font-weight: 500;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

  svg {
    margin-right: 6px;
  }
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.1rem;
  transition: transform 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;

  &:hover {
    transform: scale(1.1);
  }

  &:nth-child(1) { color: #ffffff; } /* Location - white */
  &:nth-child(2) { color: #ffffff; } /* Facebook - white */
  &:nth-child(3) { color: #ffffff; } /* Instagram - white */
  &:nth-child(4) { color: #ffffff; } /* YouTube - white */

  @media (max-width: 1200px) {
    font-size: 1rem;
    width: 20px;
    height: 20px;
  }
`;

// Mobile Styles
const MobileToggleButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  padding: 5px 10px;
  align-items: center;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 1200px) {
    display: flex;
  }
`;

const MobileMenu = styled.div`
  display: none;
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  background-color: #ffffff;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 999;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-10px)'};
  opacity: ${props => props.isOpen ? '1' : '0'};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease-in-out;

  @media (max-width: 1200px) {
    display: block;
  }
`;

const MobileContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  background-color: #fff;
  padding: 5px 15px;
  border-radius: 5px;
`;

const MobileContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 0.2s ease;
  gap: 12px;

  &:hover {
    background-color: rgba(200, 164, 164, 0.1);
    padding-left: 10px;
    padding-right: 10px;
    margin: 0 -10px;
    border-radius: 6px;
  }

  &.ambulance {
    color: #ff6b6b;
    font-weight: bold;
    background-color: rgba(255, 107, 107, 0.1);
    border-radius: 6px;
    padding: 12px 10px;
    margin: 0 -10px;

    &:hover {
      background-color: rgba(255, 107, 107, 0.2);
    }
  }

  svg {
    margin-top: 2px;
    min-width: 16px;
  }

  div {
    flex: 1;
  }
`;

const MobileContactHint = styled.div`
  font-size: 0.75rem;
  opacity: 0.8;
  font-weight: normal;
  margin-top: 2px;
`;

export default TopBar;