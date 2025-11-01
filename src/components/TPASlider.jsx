import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import Client1 from '../assets/AYUSHMAN-BHARAT-4.webp';
import Client2 from '../assets/CHOLA-MS-GENERAL-INSURANCE-4.webp';
import Client3 from '../assets/ERICSON-INSURANCETPA-PVT.LTD_-4.webp';
import Client4 from '../assets/FAMILY-HEALTH-PLAN-TPA-LTD.-FHPLTPA-4.webp';
import Client5 from '../assets/HDFC-ERGO-GENERAL-INSURANCE-CO.LTD_-4.webp';
import Client6 from '../assets/ICICI-LOMBARD-GENERAL-INSURANCE-CO.LTD_-4.webp';
import Client7 from '../assets/MANIPAL-CIGNA-HEALTH-INSURANCE-4.webp';
import Client8 from '../assets/NIVA-BUPA-HEALTH-INSURANCE-CO.LTD_-4 (1).webp';
import Client9 from '../assets/SBI-GENERAL-INSURANCE-CO.LTD_-4.webp';
import Client10 from '../assets/STAR-HEALTH-AND-ALLIED-INSURANCE-CO.LTD_-4.webp';
import Client12 from '../assets/2d.jpeg';
import Client13 from '../assets/3d.jpeg';
import Client14 from '../assets/4d.jpeg';
import Client15 from '../assets/Dr2.jpeg';
import Client16 from '../assets/Dr3.jpeg';
import Client17 from '../assets/Dr1.jpeg';
import Client18 from '../assets/Dr2.jpeg';
import Client19 from '../assets/Dr3.jpeg';

const clientLogos = [
  { src: Client1, alt: 'Client Logo 1' },
  { src: Client2, alt: 'Client Logo 2' },
  { src: Client3, alt: 'Client Logo 3' },
  { src: Client4, alt: 'Client Logo 4' },
  { src: Client5, alt: 'Client Logo 5' },
  { src: Client6, alt: 'Client Logo 6' },
  { src: Client7, alt: 'Client Logo 7' },
  { src: Client8, alt: 'Client Logo 8' },
  { src: Client9, alt: 'Client Logo 9' },
  { src: Client10, alt: 'Client Logo 10' },
  { src: Client12, alt: 'Client Logo 12' },
  { src: Client13, alt: 'Client Logo 13' },
  { src: Client14, alt: 'Client Logo 14' },
 /*  { src: Client15, alt: 'Client Logo 15' },
  { src: Client16, alt: 'Client Logo 16' },
  { src: Client17, alt: 'Client Logo 17' },
  { src: Client18, alt: 'Client Logo 18' },
  { src: Client19, alt: 'Client Logo 19' }, */
];

const TPASlider = () => {
  return (
    <Container>
      <Title>Our Onboard TPAs</Title>
      <Track direction="left">
        {/* Original logos */}
        {clientLogos.map((logo, index) => (
          <Logo key={`left-${index}`}>
            <img src={logo.src} alt={logo.alt} />
          </Logo>
        ))}
        {/* Duplicate logos for seamless loop */}
        {clientLogos.map((logo, index) => (
          <Logo key={`left-dup-${index}`}>
            <img src={logo.src} alt={logo.alt} />
          </Logo>
        ))}
      </Track>

  {/*       <Track direction="left">
        {[...clientLogos, ...clientLogos].map((logo, index) => (
          <Logo key={`left-${index}`}>
            <img src={logo.src} alt={logo.alt} />
          </Logo>
        ))}
      </Track> */}
      
      {/* Right scrolling track (if needed) */}
      <Track direction="right">
        {[...clientLogos, ...clientLogos].map((logo, index) => (
          <Logo key={`right-${index}`}>
            <img src={logo.src} alt={logo.alt} />
          </Logo>
        ))}
      </Track>
    </Container>
  );
};

export default TPASlider;

const Title = styled.h1`
text-align: center;
  font-size: 3rem;
  margin-bottom: 20px;
  font-weight: 600;
  color: #004AAD;

  @media (max-width: 500px){
    font-size: 1.8rem;
  }

`
// Animation for left scroll
const scrollLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

// Container for the entire component
const Container = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
  width: 100%;
  overflow: hidden;
  padding: 2rem 0;
  background: #ffffff; /* Optional: Add background for better visibility */
`;

// Styled component for the track
/* const Track = styled.div`
  display: flex;
  white-space: nowrap;
  animation: ${scrollLeft} 25s linear infinite;
  width: max-content;

  &:hover {
    animation-play-state: paused;
  }
`; */

// Styled component for each individual logo
const Logo = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 3rem;
  flex-shrink: 0; /* Prevent logos from shrinking */

  img {
    height: 70px; /* Fixed height for consistency */
    width: auto;
    max-width: 120px; /* Maximum width */
    object-fit: contain;
    //filter: grayscale(100%);
    transition: all 0.3s ease;
    mix-blend-mode: multiply;
    &:hover {
      filter: grayscale(0%);
      transform: scale(1.1);
    }
  }
`;

const scrollRight = keyframes`
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
`;

// Then modify Track to handle direction prop:
const Track = styled.div`
  display: flex;
  white-space: nowrap;
  width: max-content;
  animation: ${props => props.direction === 'left' ? scrollLeft : scrollRight} 70s linear infinite;
  margin-bottom: 20px;
  
  &:hover {
    animation-play-state: paused;
  }
`;


