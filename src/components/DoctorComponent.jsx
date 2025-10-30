import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Dr1 from '../assets/Dr1.jpeg'
import Dr2 from '../assets/Dr2.jpeg'
import Dr3 from '../assets/Dr3.jpeg'
import axios from 'axios';
import { Link } from 'react-router-dom';
import DoctorPageBC from '../components/breadcrumbs/DoctorPageBC';

// Mock doctor data - replace with actual data
const doctorsData = [
  {
    id: 1,
    name: "Dr Satish Kumar Singh",
    speciality: "Consultant Emergency Medicine",
    experience: "12 years",
    rating: 4.8,
    image: Dr1,
    nextAvailable: "Today, 4:00 PM"
  },
  {
    id: 2,
    name: "Dr. Atul Kumar Tiwari",
    speciality: "Consultant Emergency Medicine",
    experience: "15 years",
    rating: 4.9,
    image: Dr2,
    nextAvailable: "Tomorrow, 10:00 AM"
  },
  {
    id: 3,
    name: "Dr. Ghanshyam Timilsina",
    speciality: "Consultant Emergency Medicine",
    experience: "8 years",
    rating: 4.7,
    image: Dr3,
    nextAvailable: "Today, 2:30 PM"
  },
];

const DoctorComponent = () => {
    const [doctors, setDoctors] = useState([])
    const [activeSpeciality, setActiveSpeciality] = useState("All")

  const fetchDoctorsList = async () => {
    try{
        const response = await axios.get(
            "https://app.prabhatmemorialhospital.com/api/doctors"
        )
        setDoctors(response.data)
    }catch{
        console.log('Error in getting Doctors list')
    }
  }

  useEffect(() => {
    fetchDoctorsList();
  },[])

  // Get unique specializations for filter buttons
  const uniqueSpecializations = [...new Set(doctors.map(doctor => doctor.specialization))].filter(Boolean);

  const filteredDoctors = activeSpeciality === "All" ? doctors : doctors.filter((doc) => doc.specialization === activeSpeciality)

  console.log("Doctor List", doctors)
  
  return (
    <>
      
      <SpecialitySection>
        <FilterContainer>
         {/*  <FilterTitle>Filter by Speciality:</FilterTitle> */}
          <ButtonContainer>
            <FilterButton 
              active={activeSpeciality === "All"}
              onClick={() => setActiveSpeciality("All")}
            >
              All
            </FilterButton>
            {uniqueSpecializations.map((specialization) => (
              <FilterButton 
                key={specialization}
                active={activeSpeciality === specialization}
                onClick={() => setActiveSpeciality(specialization)}
              >
                {specialization}
              </FilterButton>
            ))}
          </ButtonContainer>
        </FilterContainer>
        
        {/* <ResultsCount>
          Showing {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? 's' : ''}
          {activeSpeciality !== "All" && ` in ${activeSpeciality}`}
        </ResultsCount> */}
      </SpecialitySection>
      
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

export default DoctorComponent;

// Styled Components

const DocImageContainer = styled.div`
  background-color: #228be6;
  display:flex;
  align-items: center;
  justify-content: center;
    height: 200px;
`
const DoctorImage = styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
  border:2px solid #ff1010ff;
  border-radius: 50%;
`;

const SpecialitySection = styled.div`
  padding: 2rem 1rem;
  

`;

const FilterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

const FilterTitle = styled.h3`
  font-size: 1.1rem;
  color: #374151;
  font-weight: 600;
  margin: 0;
  white-space: nowrap;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;
`;

const FilterButton = styled.button`
  background: ${(props) => (props.active ? "linear-gradient(to right, #4c6ef5, #228be6)" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#4a5568")};
  border: ${(props) => (props.active ? "none" : "1px solid #e2e8f0")};
  padding: 0.6rem 1.2rem;
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: ${(props) => (props.active ? "0 4px 10px rgba(76, 110, 245, 0.3)" : "0 2px 6px rgba(0, 0, 0, 0.05)")};
  
  &:hover {
    background: ${(props) => (props.active ? "linear-gradient(to right, #3b5bdb, #1971c2)" : "#f8f9fa")};
    transform: translateY(-2px);
    box-shadow: ${(props) => (props.active ? "0 6px 12px rgba(76, 110, 245, 0.4)" : "0 4px 8px rgba(0, 0, 0, 0.08)")};
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }
`;

const ResultsCount = styled.p`
  text-align: center;
  color: #64748b;
  font-size: 0.95rem;
  margin: 1.5rem 0 0 0;
  font-weight: 500;
`;

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
  justify-content: center;
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
  

  .swiper {
    padding: 20px 10px 60px;
    width: 100%;
    max-width: 1400px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #fff;
    background: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    
    &::after {
      font-size: 16px;
      font-weight: bold;
    }

    &:hover {
      background: #2563eb;
      color: white;
      transform: scale(1.1);
      box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
    }

    &.swiper-button-disabled {
      opacity: 0.3;
      cursor: not-allowed;
      
      &:hover {
        background: white;
        color: #2563eb;
        transform: none;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      }
    }
  }

  .swiper-button-next {
    right: 10px;
  }

  .swiper-button-prev {
    left: 10px;
  }

  .swiper-pagination-bullet {
    background: #cbd5e1;
    opacity: 1;
    width: 10px;
    height: 10px;
    
    &-active {
      background: #2563eb;
      transform: scale(1.2);
    }
  }

  .swiper-slide {
    height: auto;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 768px) {
    padding: 20px 10px;
    
    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }
  }
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

