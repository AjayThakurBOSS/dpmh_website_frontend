import React from 'react'
import styled from 'styled-components'
import AboutUsComponent from '../components/AboutUsComponent'
import AboutUsDetails from '../components/AboutUsDetails'
import VisionMissionValues from '../components/VisionMissionValues'
import WhyChooseUs from '../components/WhyChooseUs'
import FreeTreatment from '../components/FreeTreatment'
import HeroBreadCrumb from '../components/HeroBreadCrumb'
import MetaTags from '../util/MetaTags'

const Aboutus = () => {
  return (
    <AboutusContainer>
      <MetaTags
        title="Book your Appointment | Team of Exprienced Doctor | Best Emergency Care | Best Critical Care | 24x7 Emergency Care | | Dr Prabhat memorial Hiramati Hospital, Rajendra Nager, Patna"
        description="A leading multispeciality hospital in Rajendra Nager, Patna, Bihar offering advanced medical care, expert doctors, modern facilities, 24x7 emergency services, Trauma Care, Creitical Care and patient-focused treatment for all. Trusted for quality healthcare and successful outcomes."
        keywords="Dr Prabhat Memorial Hiramati Hospital Patna, Best hospital in Rajendra Nagar Patna, 24x7 emergency hospital in Patna, Critical care hospital in Patna, ICU and trauma care Patna, Book appointment Patna hospital, Best doctors in Patna, Emergency medical services Patna, Multispeciality hospital in Patna, Best critical care unit Patna, Best emergency care Patna, Ambulance and ICU services Patna"
        
        type="website"
      />
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

