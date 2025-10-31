import React, { useEffect } from 'react'
import DepartmentHero from '../../components/breadcrumbs/CenterOfExcellanceBC'
import styled, { keyframes } from 'styled-components'
import DipartmentLink from '../../components/DipartmentLink'
import EachDeparmentDoctor from '../../components/EachDeparmentDoctor'
import RequestAppointmentFormHero from '../appointment/OnlineAppointment2'
import FreeTreatment from '../../components/FreeTreatment'
import LaproScopyComponent from '../../components/deparmentComponent/LaproScopyComponent'


const LaproscopicSurgery = () => {

  return (
    <PageContainer>
      <DiparmantContainer>
       	  <DepartmentHero
            breadcrumbs={[
              { label: "Home", href: "/" },
              { label: "Laproscopic Surgery", href: null }
            ]}
            title="Minimally Invasive. Maximum Recovery."
            subText="Advanced laparoscopic procedures that ensure less pain, quicker healing, and smaller scars."
          />
        <DepartmentBody>
          <MainContentWrapper>
            <ContentContainer>
              <AnimatedSection delay="0.1s">
                  <LaproScopyComponent/>
              </AnimatedSection>


            </ContentContainer>
            
            <RightSideContainer>
              <DiparmentsLink>
                <DipartmentLink/>
              </DiparmentsLink>
              
              <FotmContainer>
                <AnimatedSection delay="0.5s">
                  <SectionTitle>Book an OPD Now</SectionTitle>
                  <RequestAppointmentFormHero/>
                </AnimatedSection>
              </FotmContainer>
            </RightSideContainer>
          </MainContentWrapper>
          
          <RelatedDoctorsDiv>
            <AnimatedSection delay="0.6s">
              <SectionTitle>Our Laproscopic Surgery Specialists</SectionTitle>
              
             <EachDeparmentDoctor specialization="General Surgeon" />
            </AnimatedSection>
          </RelatedDoctorsDiv>
        </DepartmentBody>
      </DiparmantContainer>
      <FreeTreatment/>
    </PageContainer>
  )
}

export default LaproscopicSurgery

// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const pageTransition = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

// Styled Components
const PageContainer = styled.div`
  .page-transition {
    animation: ${pageTransition} 0.5s ease-in-out;
  }
`

const DiparmantContainer = styled.div`
  width: 100%;
  animation: ${fadeInUp} 0.8s ease-out;
`

const DepartmentBody = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding: 2rem 1rem;
`

const MainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const ContentContainer = styled.div`
  flex: 1;
  background: #fff;
  
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

  @media (min-width: 768px) {
    flex: 2;
  }
`

const RightSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    flex: 1;
  }
`

const DiparmentsLink = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  order: 1;

  @media (min-width: 768px) {
    order: 2;
  }
`

const FotmContainer = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  order: 3;

  @media (min-width: 768px) {
    order: 3;
  }
`

const RelatedDoctorsDiv = styled.div`
  width: 100%;
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  order: 4;
`

const AnimatedSection = styled.div`
  opacity: 0;
  animation: ${fadeInUp} 0.6s ease-out forwards;
  animation-delay: ${props => props.delay || '0s'};
`

const SectionTitle = styled.h2`
  color: #2c3e50;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #3498db;
  font-weight: 700;
`

// Additional Services Section
const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`

const ServiceItem = styled.div`
  text-align: center;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: #e9ecef;
  }
`

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`

const ServiceTitle = styled.h4`
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`

const ServiceDesc = styled.p`
  color: #7f8c8d;
  font-size: 0.9rem;
  line-height: 1.4;
`