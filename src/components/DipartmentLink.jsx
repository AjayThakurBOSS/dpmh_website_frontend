import React, { useEffect } from 'react'
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
  FaLungs,
  FaClinicMedical
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const DipartmentLink = () => {
    
      const departments = [
        { name: 'Cardiology', link: '/departments/cardiology', icon: FaHeart },
        { name: 'Emergency', link: '/departments/emergency', icon: FaAmbulance },
        { name: 'Nephrology', link: '/departments/nephrology', icon: FaAmbulance },
        { name: 'Gynecology + obstetrician', link: '/departments/gynecology-obstetrician', icon: FaBaby },
        { name: 'Orthopedic', link: '/departments/orthopedic', icon: FaBone },
        { name: 'Gastroenterology', link: '/departments/gastroenterology', icon: FaBone },
        { name: 'Neurology', link: '/departments/neurology', icon: FaBrain },
        { name: 'Paediatrics', link: '/departments/paediatrics', icon: FaChild },
        { name: 'Neuro-surgery', link: '/departments/neuro-surgery', icon: FaSkull },
        { name: 'Oncology + Chemotherapy', link: '/departments/oncology-chemotherapy', icon: FaFlask },
        { name: 'General Medicine', link: '/departments/general-medicine', icon: FaStethoscope },
        { name: 'General Surgery', link: '/departments/general-surgery', icon: FaUserMd },
        { name: 'Laproscopic Surgery', link: '/departments/laproscopic-surgery', icon: FaProcedures },
        { name: 'Urology', link: '/departments/urology', icon: FaClinicMedical },
        { name: 'Pulmonology', link: '/departments/pulmonology', icon: FaLungs }
      ]
    
      // Different background colors for departments
      const departmentColors = [
        '#ffe8ec', '#fff3e0', '#e8f4f8', '#fce4ec', '#f3e5f5',
        '#e8f5e9', '#fff8e1', '#e3f2fd', '#fbe9e7', '#e8eaf6',
        '#e0f2f1', '#fff3e0', '#fce4ec', '#e3f2fd', '#e8f5e9'
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
                          borderColor={departmentColors[index]}
                          delay={`${0.4 + index * 0.05}s`}
                        >
                          <DepartmentLink to={dept.link}>
                            <IconWrapper>
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

  &:hover {
    transform: translateX(8px) scale(1.02);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
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
    color: #3498db;
  }
`

const IconWrapper = styled.div`
  font-size: 1.25rem;
  color: #3498db;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 30px;
`

const DepartmentName = styled.span`
  flex: 1;
`
