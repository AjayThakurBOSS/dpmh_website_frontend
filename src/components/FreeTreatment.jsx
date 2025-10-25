import { Descriptions } from 'antd'
import React, { useState } from 'react'
import styled from 'styled-components'
import RequestAppointmentFormHero from './RequestAppointmentFormHero'
import Img1 from '../assets/1d.jpeg'
import Img2 from '../assets/2d.jpeg'
import Img3 from '../assets/3d.jpeg'
import Img4 from '../assets/4d.jpeg'
import Img5 from '../assets/tpa-4.jpg'
import { IoCall } from "react-icons/io5";

import { Carousel } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

const FreeTreatment = () => {
    const [showForm, setShowForm] = useState(false)
    
    const freeProvider = [
        {
            image: Img1,
            name: "Ayushman",  
            description: "Comprehensive health insurance scheme providing free treatment coverage",
        },
        {  
            image: Img2,
            name: "CGHS",  
            description: "Central Government Health Scheme for government employees and pensioners",
        },
        {  
            image: Img4,
            name: "CAPF",  
            description: "Central Armed Police Forces health scheme for personnel and families",
        },
        {  
            image: Img3,
            name: "CMRF",  
            description: "Chief Minister's Relief Fund for emergency medical assistance",
        },
        {  
            image: Img5,
            name: "TPA",  
            description: "Third Party Administrator services for cashless treatment",
        },
    ]

    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <RightOutlined />,
        prevArrow: <LeftOutlined />,
    }

  return (
    <FreeTreatmentContainer>
        <FreeHead>Get Free Treatment</FreeHead>
        <FreeSubhead>We partner with various healthcare schemes to provide you with free treatment options</FreeSubhead>
        
        <CardsContainer>
            {/* Desktop View - Grid */}
            <DesktopView>
                {freeProvider.map((provider, index) => (
                    <FreeCard key={index}>
                        <Name>{provider.name}</Name>
                        <CardImage src={provider.image} alt={provider.name} />
                        
                        <DescriptionOverlay>
                           
                            <DescriptionText>{provider.description}</DescriptionText>
                        </DescriptionOverlay>
                    </FreeCard>
                ))}
            </DesktopView>

            {/* Mobile View - Carousel */}
            <MobileView>
                <StyledCarousel {...carouselSettings}>
                    {freeProvider.map((provider, index) => (
                        <div key={index}>
                            <FreeCard>
                                <CardImage src={provider.image} alt={provider.name} />
                                <CardContent>
                                    <Name>{provider.name}</Name>
                                    <Description>{provider.description}</Description>
                                </CardContent>
                            </FreeCard>
                        </div>
                    ))}
                </StyledCarousel>
            </MobileView>
        </CardsContainer>

        <ContactUsSection>
            <CallNow>
                <CallTitle>Call Now for Assistance</CallTitle>
                <PhoneLinks>
                    <PhoneLink href='tel:8406000555'><IoCall /> 8406000555</PhoneLink>
                   {/*  <PhoneLink href='tel:8406000444'>📞 8406000444</PhoneLink>
                    <PhoneLink href='tel:6124020100'>📞 612-4020100</PhoneLink> */}
                </PhoneLinks>
            </CallNow>
            
            <WritetoUs>
                <FormButton onClick={() => setShowForm(true)}>
                    Write to Us
                </FormButton>
            </WritetoUs>
        </ContactUsSection>

        {/* Modal for Form */}
        {showForm && (
            <FormModal>
                <ModalOverlay onClick={() => setShowForm(false)} />
                <ModalContent>
                    <CloseButton onClick={() => setShowForm(false)}>×</CloseButton>
                    <RequestAppointmentFormHero />
                </ModalContent>
            </FormModal>
        )}
    </FreeTreatmentContainer>
  )
}

export default FreeTreatment

// Styled Components
const FreeTreatmentContainer = styled.div`
    padding: 60px 20px;
    background: linear-gradient(135deg, #2C4B98 0%, #149BD2 100%);
    min-height: 100vh;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><polygon fill="rgba(255,255,255,0.05)" points="0,1000 1000,0 1000,1000"/></svg>');
        background-size: cover;
    }
`

const FreeHead = styled.h1`
    text-align: center;
    font-size: 3rem;
    color: white;
    margin-bottom: 1rem;
    font-weight: 700;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    position: relative;

    @media (max-width: 768px) {
        font-size: 2.2rem;
    }
`

const FreeSubhead = styled.p`
    text-align: center;
    font-size: 1.2rem;
    color: rgba(255,255,255,0.9);
    margin-bottom: 3rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    position: relative;

    @media (max-width: 768px) {
        font-size: 1rem;
        padding: 0 1rem;
    }
`

const CardsContainer = styled.div`
    max-width: 1500px;
    margin: 0 auto 4rem;
    position: relative;
`

const DesktopView = styled.div`
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    padding: 0 1rem;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        display: none;
    }
`

const MobileView = styled.div`
    display: none;
    
    @media (max-width: 768px) {
        display: block;
        padding: 0 1rem;
    }
`

const StyledCarousel = styled(Carousel)`
    .slick-dots li button {
        background: white;
        opacity: 0.5;
    }
    
    .slick-dots li.slick-active button {
        opacity: 1;
    }
    
    .slick-arrow {
        color: white;
        z-index: 1;
        
        &:before {
            font-size: 24px;
        }
    }
    
    .slick-prev {
        left: -35px;
    }
    
    .slick-next {
        right: -35px;
    }
`

const FreeCard = styled.div`
    background: white;
    border-radius: 20px;
    padding: 2rem;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    transition: all 0.3s ease;
    height: 280px;
    width: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 40px rgba(0,0,0,0.3);
    }

    @media (max-width: 768px) {
        margin: 0 10px;
        padding: 1.5rem;
        width: auto;
        height: auto;
        min-height: 300px;
    }
`

const CardImage = styled.img`
    width: 100px;
    height: 120px;
    border-radius: 10%;
    object-fit: cover;
    margin-bottom: 1.5rem;
    border: 3px solid #667eea;
    transition: all 0.3s ease;
    
    ${FreeCard}:hover & {
        transform: scale(1.1);
    }
`

const Name = styled.h3`
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 1rem;
    font-weight: 600;
    transition: all 0.3s ease;
    
    ${FreeCard}:hover & {
        color: white;
        z-index: 2;
        position: relative;
    }
`

const DescriptionOverlay = styled.div`
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #2C4B98,#149BD2 );
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease;
    
    ${FreeCard}:hover & {
        opacity: 1;
        transform: translateY(0);
    }
`

const DescriptionText = styled.p`
    color: white;
    line-height: 1.6;
    font-size: 1rem;
    text-align: center;
    font-weight: 500;
`

// Mobile view card content (unchanged from original)
const CardContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Description = styled.p`
    color: #666;
    line-height: 1.6;
    font-size: 0.95rem;
`

const ContactUsSection = styled.div`
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 3rem;
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid rgba(255,255,255,0.2);
    position: relative;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 2rem;
        padding: 2rem;
        text-align: center;
    }
`

const CallNow = styled.div`
    flex: 1;
`

const CallTitle = styled.h3`
    color: white;
    margin-bottom: 1rem;
    font-size: 1.3rem;
`

const PhoneLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    @media (max-width: 768px) {
        align-items: center;
    }
`

const PhoneLink = styled.a`
    color: white;
    text-decoration: none;
    font-size: 2.8rem;
    transition: color 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight:600;

    &:hover {
        color: #f0f0f0;
        text-decoration: underline;
    }

    @media (max-width: 768px) {
        justify-content: center;
    }
`

const WritetoUs = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 768px) {
        justify-content: center;
    }
`

const FormButton = styled.button`
    background: linear-gradient(45deg, #ff6b6b, #ee5a24);
    color: white;
    border: none;
    padding: 15px 30px;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0,0,0,0.3);
        background: linear-gradient(45deg, #ee5a24, #ff6b6b);
    }

    &:active {
        transform: translateY(0);
    }
`

const FormModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.7);
    backdrop-filter: blur(5px);
`

const ModalContent = styled.div`
    position: relative;
    background: white;
    border-radius: 20px;
    padding: 2rem;
    max-width: 90%;
    max-height: 90%;
    overflow-y: auto;
    z-index: 1001;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);

    @media (max-width: 768px) {
        padding: 1.5rem;
        max-width: 95%;
    }
`

const CloseButton = styled.button`
    position: absolute;
    top: 15px;
    right: 20px;
    background: none;
    border: none;
    font-size: 2rem;
    color: #666;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover {
        background: #f0f0f0;
        color: #333;
    }
`