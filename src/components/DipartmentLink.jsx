import React from 'react'
import styled, { keyframes } from 'styled-components'
import { 
  FaHeart, 
  FaAmbulance, 
  FaKidneys, 
  FaBaby,
  FaBone,
  FaStomach,
  FaBrain,
  FaChild,
  FaSkull,
  FaFlask,
  FaStethoscope,
  FaUserMd,
  FaProcedures,
  FaClinicMedical,
  FaLungs
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const DipartmentLink = () => {
    
  const departments = [
    { name: 'Emergency', link: '/departments/emergency', icon: FaAmbulance },
    { name: 'Trauma', link: '/departments/trauma', icon: FaAmbulance },
    { name: 'Critical Care', link: '/departments/critical-care', icon: FaAmbulance },
    { name: 'Cardiology', link: '/departments/cardiology', icon: FaHeart },
    { name: 'Nephrology', link: '/departments/nephrology', icon: FaBrain },
    { name: 'Gynecology + obstetrician', link: '/departments/gynecology-obstetrician', icon: FaBaby },
    { name: 'Orthopedic', link: '/departments/orthopedic', icon: FaBone },
    { name: 'Gastroenterology', link: '/departments/gastroenterology', icon: FaFlask },
    { name: 'Neurology', link: '/departments/neurology', icon: FaBrain },
    { name: 'Paediatrics', link: '/departments/paediatrics', icon: FaChild },
    { name: 'Neuro-surgery', link: '/departments/neuro-surgery', icon: FaSkull },
    { name: 'General Surgery', link: '/departments/general-surgery', icon: FaUserMd },
    { name: 'Laproscopic Surgery', link: '/departments/laproscopic-surgery', icon: FaProcedures },
    { name: 'Oncology + Chemotherapy', link: '/departments/oncology-chemotherapy', icon: FaFlask },
    { name: 'General Medicine', link: '/departments/general-medicine', icon: FaStethoscope },
    { name: 'Urology', link: '/departments/urology', icon: FaClinicMedical },
    { name: 'Pulmonology', link: '/departments/pulmonology', icon: FaLungs }
  ]

  // Same color palette as the navbar
  const departmentColors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', 
    '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9',
    '#F8C471', '#82E0AA', '#F1948A', '#85C1E9', '#D7BDE2',
    '#76D7C4', '#F9E79F'
  ]

  return (
    <div>              
      <AnimatedSection delay="0.3s">
        <SectionTitle>Our Departments</SectionTitle>
        <DepartmentsList>
          {departments.map((dept, index) => {
            const IconComponent = dept.icon
            return (
              <DepartmentItem 
                key={dept.name}
                bgColor={departmentColors[index]}
                borderColor={darkenColor(departmentColors[index], 0.2)}
                delay={`${0.4 + index * 0.05}s`}
              >
                <DepartmentLink to={dept.link}>
                  <IconWrapper color={darkenColor(departmentColors[index], 0.3)}>
                    <IconComponent />
                  </IconWrapper>
                  <DepartmentName>{dept.name}</DepartmentName>
                </DepartmentLink>
              </DepartmentItem>
            )
          })}
        </DepartmentsList>
      </AnimatedSection>
    </div>
  )
}

export default DipartmentLink

// Helper function for color manipulation (same as in navbar)
const darkenColor = (color, percent) => {
  const num = parseInt(color.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent * 100);
  const R = (num >> 16) - amt;
  const G = (num >> 8 & 0x00FF) - amt;
  const B = (num & 0x0000FF) - amt;
  return "#" + (0x1000000 + (R > 0 ? R > 255 ? 255 : R : 0) * 0x10000 +
          (G > 0 ? G > 255 ? 255 : G : 0) * 0x100 +
          (B > 0 ? B > 255 ? 255 : B : 0)).toString(16).slice(1);
};

const lightenColor = (color, percent) => {
  const num = parseInt(color.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent * 100);
  const R = (num >> 16) + amt;
  const G = (num >> 8 & 0x00FF) + amt;
  const B = (num & 0x0000FF) + amt;
  return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
          (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
          (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
};

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
`

const DepartmentsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.75rem;
`

const DepartmentItem = styled.li`
  background: ${props => props.bgColor || '#f8f9fa'};
  border: 2px solid ${props => props.borderColor || '#e9ecef'};
  border-radius: 10px;
  transition: all 0.3s ease;
  opacity: 0;
  animation: ${slideIn} 0.5s ease-out forwards;
  animation-delay: ${props => props.delay || '0s'};
  border-left: 4px solid ${props => props.borderColor || '#e9ecef'};

  &:hover {
    transform: translateX(8px) scale(1.02);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    background: ${props => props.bgColor ? lightenColor(props.bgColor, 0.1) : '#ffffff'};
  }
`

const DepartmentLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 1rem 1.25rem;
  color: #2c3e50;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  gap: 1rem;

  &:hover {
    color: #2c3e50;
  }
`

const IconWrapper = styled.div`
  font-size: 1.25rem;
  color: ${props => props.color || '#3498db'};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 30px;
  transition: transform 0.3s ease;

  ${DepartmentItem}:hover & {
    transform: scale(1.2);
  }
`

const DepartmentName = styled.span`
  flex: 1;
  font-weight: 600;
`