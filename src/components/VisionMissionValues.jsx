import React from 'react'
import styled from 'styled-components'
import VisionImg from '../assets/vision_img.webp'
import MissionImg from '../assets/mission-img.webp'
import ValuesImg from '../assets/values-img.webp'

const VisionMissionValues = () => {
  return (
    <VisionMissionValuesContainer>
        <InnerContainer>
            <VisionDiv>
                <ImageContainer>
                    <img src={VisionImg} alt='Vision image'/>
                </ImageContainer>
                <Header>Our Vision</Header>
                <Text>To provide world-class healthcare accessible to all, establishing Dr. Prabhat Memorial Hiramati Hospital as a leading center for expert care and training in Bihar and beyond.</Text>
            </VisionDiv>

            <MissionDiv>
                <ImageContainer>
                    <img src={MissionImg} alt='Mission image'/>
                </ImageContainer>
                <Header>Our Mission</Header>
                <Text>To deliver top-quality healthcare up to rural areas, preserving human life and training skilled professionals for a healthier, happier India.</Text>
            </MissionDiv>

            <ValuesDiv>
                <ImageContainer>
                    <img src={ValuesImg} alt='Values image'/>
                </ImageContainer>
                <Header>Our Values</Header>
                <Text>Compassion, Excellence, Integrity, Collaboration, Accessibility, Education, and Community Focus guide our commitment to exceptional patient care and social impact.</Text>
            </ValuesDiv>
        </InnerContainer>
    </VisionMissionValuesContainer>
  )
}

export default VisionMissionValues

const VisionMissionValuesContainer = styled.div`
  padding: 4rem 1rem;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`

const InnerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const CardBase = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2.5rem 2rem;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e2e8f0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
  }
`

const VisionDiv = styled(CardBase)`
  border-top: 4px solid #3b82f6;

  &:hover {
    border-color: #2563eb;
  }
`

const MissionDiv = styled(CardBase)`
  border-top: 4px solid #10b981;

  &:hover {
    border-color: #059669;
  }
`

const ValuesDiv = styled(CardBase)`
  border-top: 4px solid #8b5cf6;

  &:hover {
    border-color: #7c3aed;
  }
`

const ImageContainer = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8fafc;
  border-radius: 10px;
  padding: 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    margin-bottom: 1.25rem;
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
    margin-bottom: 1rem;
  }
`

const Header = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.375rem;
    margin-bottom: 0.875rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }
`

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #475569;
  margin: 0;
  flex-grow: 1;
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    font-size: 1.05rem;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.5;
  }
`