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

const DoctorsForHome = () => {
    const [doctors, setDoctors] = useState([])
    const [activeSpeciality, setActiveSpeciality] = useState("All")
    const [loading, setLoading] = useState(true) 

  const fetchDoctorsList = async () => {
    try{
        setLoading(true); // Start loading
        const response = await axios.get(
            "https://app.prabhatmemorialhospital.com/api/doctors"
        )
        setDoctors(response.data)
    }catch{
        console.log('Error in getting Doctors list')
    } finally {
        setLoading(false); // Stop loading regardless of success/error
    }
  }

  useEffect(() => {
    fetchDoctorsList();
  },[])

  // Get unique specializations for filter buttons
  const uniqueSpecializations = [...new Set(doctors.map(doctor => doctor.specialization))].filter(Boolean);

  // Filter doctors by speciality and limit to first 8
  const filteredDoctors = (activeSpeciality === "All" 
    ? doctors 
    : doctors.filter((doc) => doc.specialization === activeSpeciality)
  ).slice(0, 10); // Only take first 8 doctors

  
  return (
    <>
      <SpecialitySection>
        <FilterContainer>
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
      </SpecialitySection>
      
      <SliderContainer>
        {loading ? (
          // Loader Section
          <LoaderContainer>
            <Loader>
              <Spinner />
              <LoaderText>Loading Doctors...</LoaderText>
            </Loader>
          </LoaderContainer>
        ) : filteredDoctors.length === 0 ? (
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
                      <InfoIcon>Exp:</InfoIcon>
                      <span>{doctor.experience || '5'} Yrs</span>
                    </InfoItem>
                  </DoctorInfo>

                  <BookButton>
                    <Link to='/book-appointment'>Book OPD</Link>
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

export default DoctorsForHome;

// Styled Components

// Add these new styled components for the loader
const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  width: 100%;
`;

const Loader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid #f3f4f6;
  border-top: 4px solid #2563eb;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const LoaderText = styled.p`
  font-size: 1.1rem;
  color: #64748b;
  font-weight: 500;
`;

const DocImageContainer = styled.div`
  background:linear-gradient(to right, #8fffff, #8cc9ff);
  display:flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  
  @media (max-width: 768px) {
    height: 160px;
  }
`

const DoctorImage = styled.img`
  width: 160px;
  height: 160px;
  object-fit: cover;
  border:2px solid #004AAD;
  border-radius: 50%;
  
  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

const SpecialitySection = styled.div`
  //padding: 2rem 1rem;
`;

const FilterContainer = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;

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
    padding: 5px 10px;
    font-size: 12px;
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18%, 1fr));
  gap: 1rem;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 0.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.4rem;
    padding: 8px;
  }
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
  width: 100%;
  max-width: 350px;
  margin: 0 auto;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    max-width: none;
    border-radius: 16px;
    min-width:160px;
    &:hover {
      transform: translateY(-4px);
    }
  }
`;

const CardContent = styled.div`
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const DoctorName = styled.h3`
  font-size: 1.4rem;
  color: #1e293b;
  margin-bottom: 0.5rem;
  font-weight: 600;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 0.3rem;
  }
`;

const DoctorQualification = styled.p`
  font-size: 14px;
  opacity: 0.6;
  color: #000000;
  font-weight: 600;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 10px;
    margin-bottom: 0.3rem;
  }
`;

const DoctorSpeciality = styled.p`
  color: #2563eb;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }
`;

const DoctorInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  padding: 12px 0;
  border-top: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    padding: 8px 0;
     padding: 5px 0;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #64748b;
  font-size: 0.9rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    gap: 6px;
  }
`;

const InfoIcon = styled.span`
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
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

  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 0.9rem;
    border-radius: 10px;
    
  }
`;