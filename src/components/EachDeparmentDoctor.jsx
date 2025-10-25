import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DoctorPageBC from '../components/breadcrumbs/DoctorPageBC';

const EachDeparmentDoctor = ({ specialization = "All" }) => {
    const [doctors, setDoctors] = useState([])
    const [activeSpeciality, setActiveSpeciality] = useState(specialization)

    const fetchDoctorsList = async () => {
        try {
            const response = await axios.get(
                "https://app.prabhatmemorialhospital.com/api/doctors"
            )
            setDoctors(response.data)
        } catch {
            console.log('Error in getting Doctors list')
        }
    }

    useEffect(() => {
        fetchDoctorsList();
    }, [])

    // Update active speciality when specialization prop changes
    useEffect(() => {
        setActiveSpeciality(specialization);
    }, [specialization])

    // Get unique specializations for filter buttons
    const uniqueSpecializations = [...new Set(doctors.map(doctor => doctor.specialization))].filter(Boolean);

    const filteredDoctors = activeSpeciality === "All" ? doctors : doctors.filter((doc) => doc.specialization === activeSpeciality)

    console.log("Doctor List", doctors)

    return (
        <>
          
           <SliderContainer>
                {filteredDoctors.length === 0 ? (
                    <NoDoctorsMessage>
                        No doctors found for the selected speciality.
                    </NoDoctorsMessage>
                ) : (
                    <DoctorCardContainer>
                        {filteredDoctors.map((doctor) => (
                            <DoctorCard key={doctor.id}>
                              <DocImageContainer>
                                  <DoctorImage src={doctor.photo_url} alt={doctor.name} />
                              </DocImageContainer>
                                
                                <CardContent>
                                    <DoctorName>Dr. {doctor.name}</DoctorName>
                                    <DoctorQualification>{doctor.qualification}</DoctorQualification>
                                    <DoctorSpeciality>{doctor.specialization}</DoctorSpeciality>

                                    <DoctorInfo>
                                        <InfoItem>
                                            <InfoIcon>⭐</InfoIcon>
                                            <span>{doctor.rating || '4.5'}/5</span>
                                        </InfoItem>
                                        <InfoItem>
                                            <InfoIcon>🕒</InfoIcon>
                                            <span>{doctor.experience || '5'} Yrs</span>
                                        </InfoItem>
                                    </DoctorInfo>

                                    <BookButton>
                                        <Link to='/book-appointment'>Book Appointment</Link>
                                    </BookButton>
                                </CardContent>
                            </DoctorCard>
                        ))}
                    </DoctorCardContainer>
                )}
            </SliderContainer>
        </>
    );
};

export default EachDeparmentDoctor;

const DocImageContainer = styled.div`
  background-color: #228be6;
  display:flex;
  align-items: center;
  justify-content: center;
  height: 200px;

`
const DoctorImage = styled.img`
  width: 160px;
  height: 160px;
  object-fit: cover;
  border:2px solid #ff1010ff;
  border-radius: 50%;
`;

// Styled Components (remain the same)


const NoDoctorsMessage = styled.div`
  text-align: center;
  padding: 3rem;
  color: #64748b;
  font-size: 1.1rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 0 auto;
`;

const DoctorCardContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 1rem;
`;

const SliderContainer = styled.div`
  padding: 40px 20px;
  min-height: 500px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f8fafc;
`;

const DoctorCard = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 300px;
  max-width: 350px;
  margin: 0 auto;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;



const CardContent = styled.div`
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const DoctorName = styled.h3`
  font-size: 1.4rem;
  color: #1e293b;
  margin-bottom: 0.5rem;
  font-weight: 600;
  line-height: 1.3;
`;

const DoctorQualification = styled.p`
  font-size: 14px;
  opacity: 0.6;
  color: #000000;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const DoctorSpeciality = styled.p`
  color: #2563eb;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  letter-spacing: 0.5px;
`;

const DoctorInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  padding: 12px 0;
  border-top: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #64748b;
  font-size: 0.9rem;
  font-weight: 500;
`;

const InfoIcon = styled.span`
  font-size: 1rem;
`;

const BookButton = styled.button`
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  color: white;
  border: none;
  padding: 14px 24px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: auto;
  box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);

  a {
    color: white;
    text-decoration: none;
    display: block;
    width: 100%;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(37, 99, 235, 0.4);
    background: linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background: #cbd5e1;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;