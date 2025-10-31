import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Dr1 from '../assets/Dr1.jpeg'
import Dr2 from '../assets/Dr2.jpeg'
import Dr3 from '../assets/Dr3.jpeg'
import { Link } from 'react-router-dom';
import DoctorComponent from './DoctorComponent';
import DoctorsForHome from './DoctorsForHome';

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
  
/*   {
    id: 4,
    name: "Dr. Niraj Kumar",
    speciality: "Cardiologist",
    experience: "20 years",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
    nextAvailable: "Monday, 11:00 AM"
  }, */

];

const DoctorSlider = () => {
  const handleBookAppointment = (doctorId) => {
    // Handle appointment booking logic here
    console.log(`Booking appointment with doctor ${doctorId}`);
    alert(`Booking appointment with ${doctorsData.find(doc => doc.id === doctorId)?.name}`);
  };

  const swiperParams = {
    modules: [Navigation, Pagination, Autoplay],
    spaceBetween: 30,
    slidesPerView: 1,
    navigation: true,
    pagination: { 
      clickable: true,
      dynamicBullets: true 
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 4,
      },
    },
  };

  return (
    <SliderContainer>
      <SectionHeader>
        <SectionTitle>Our Team of Expert  Doctors</SectionTitle>
        <SectionSubtitle>Book appointments with our specialized healthcare professionals</SectionSubtitle>
      </SectionHeader>
      <DoctorsForHome/>
     {/*  <DoctorComponent/> */}
{/*     <Swiper {...swiperParams}>
        {doctorsData.map((doctor) => (
          <SwiperSlide key={doctor.id}>
            <DoctorCard>
              <DoctorImage src={doctor.image} alt={doctor.name} />
              <CardContent>
                <DoctorName>{doctor.name}</DoctorName>
                <DoctorSpeciality>{doctor.speciality}</DoctorSpeciality>
                
                <DoctorInfo>
                  <InfoItem>
                    <InfoIcon>⭐</InfoIcon>
                    <span>{doctor.rating}/5</span>
                  </InfoItem>
                  <InfoItem>
                    <InfoIcon>🕒</InfoIcon>
                    <span>{doctor.experience}</span>
                  </InfoItem>
                </DoctorInfo>

                <BookButton onClick={() => handleBookAppointment(doctor.id)}>
                  Book Appointment
                </BookButton>
              </CardContent>
            </DoctorCard>
          </SwiperSlide>
        ))}
      </Swiper> */}

      <ViewAllButton>
       <Link to='/doctors'> View All Doctors </Link>
      </ViewAllButton>
    </SliderContainer>
  );
};

export default DoctorSlider;

// Styled Components
const SliderContainer = styled.div`
  padding: 60px 20px;
  background-image: linear-gradient(to bottom, #2C4B98, #149BD2);
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
    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
  max-width: 800px;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  color: #fff;
  margin-bottom: 1rem;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: #ffffffff;
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1rem;
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
`;

const DoctorImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-bottom: 3px solid #2563eb;
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

const ViewAllButton = styled.button`
  background: transparent;
  color: #ffffffff;
  border: 2px solid #ffffffff;
  padding: 14px 32px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 20px;
  align-self: center;

  &:hover {
    background: #2563eb;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(37, 99, 235, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;