import React from 'react'
import styled from 'styled-components'
import AboutUsComponent from '../components/AboutUsComponent'
import AboutUsDetails from '../components/AboutUsDetails'
import VisionMissionValues from '../components/VisionMissionValues'
import WhyChooseUs from '../components/WhyChooseUs'
import FreeTreatment from '../components/FreeTreatment'
import HeroBreadCrumb from '../components/HeroBreadCrumb'

const Aboutus = () => {
  return (
    <AboutusContainer>
        <HeroSection>
          <HeroBreadCrumb/>
        </HeroSection>
        <AboutUsComponent/>
        <AboutUsDetails/>
        <WhyChooseUs/>
        <VisionMissionValues/>
        <FreeTreatment/>
    </AboutusContainer>
  )
}

export default Aboutus

const AboutusContainer = styled.div``
const HeroSection = styled.div`
   background: linear-gradient(180deg, rgba(25, 81, 248, 0.8) 0%, rgba(20, 155, 210, 0.8) 100%);
`

