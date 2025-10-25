import React, { useState } from "react";
import styled from "styled-components";
import { FaArrowLeft, FaArrowRight, FaHeart } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const testimonials = [
  {
    text: "Dr. Prabhat Memorial Hiramati Hospital’s commitment to transparent communication fosters a trusting patient-doctor relationship, keeping patients fully informed about their health journey.",
    name: "Pradeep Verma",
    rating: 4.2
  },
  {
    text: "The doctors are very supportive and caring. They ensure patients feel comfortable throughout their treatment process.",
    name: "Anjali Singh",
    rating: 4.2
  },
  {
    text: "State-of-the-art facilities and highly professional staff make Dr. Prabhat Memorial Hiramati Hospital the best choice for healthcare.",
    name: "Rajesh Kumar",
    rating: 4.2
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const { text, name, rating } = testimonials[current];

  return (
    <TestimonialContainer>
    <Container>
      <Header>
        <h4>YOUR HEALTH IS OUR TOP PRIORITY</h4>
        <h1>What Our Patients Says ?</h1>
      </Header>

      <Slider>
        <QuoteCard>
          <blockquote>
            <span>“</span> {text}
          </blockquote>
          <Author>- {name}</Author>
        </QuoteCard>

        <RatingCard>

          <p>AVERAGE GOOGLE RATINGS </p>
          <FcGoogle style={{ fontSize:'40px'}}/>
          <GoogleRating>
            
             <h2>{rating}</h2>
          </GoogleRating>
         
        </RatingCard>
      </Slider>

      <Buttons>
        <NavButton onClick={prevSlide}>
          <FaArrowLeft />
        </NavButton>
        <NavButton onClick={nextSlide}>
          <FaArrowRight />
        </NavButton>
      </Buttons>
    </Container>
    </TestimonialContainer>
  );
};

export default Testimonials;

// Styled Components

const TestimonialContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items: center;
`

const Container = styled.div`

  background-image: linear-gradient(to bottom, #2C4B98, #2C4B98);
  max-width:1000px;
  text-align: center;
  padding: 40px 100px;
  font-family: Arial, sans-serif;
  margin-bottom:3rem;
  border-radius: 20px;

  @media (max-width:600px){
     padding: 40px 10px;
  }
`;

const GoogleRating = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
`

const Header = styled.div`
  h4 {
  color:#fff;
    font-weight: bold;
    font-size: 1rem;
  }
  h1 {
    font-size: 2rem;
    color: #ffffffff;
    margin-bottom: 30px;
  }
`;  

const Slider = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 20px;
  flex-wrap: wrap;
`;

const QuoteCard = styled.div`
  background: #d4fdd4;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  flex: 1;
  text-align: left;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);

  blockquote {
    font-size: 1rem;
    line-height: 1.6;
  }
  span {
    font-size: 2rem;
    color: #000;
  }
`;

const Author = styled.p`
  font-weight: bold;
  margin-top: 10px;
`;

const RatingCard = styled.div`
  background: #dcebf9ff;
  border-radius: 8px;
  padding: 20px;
  flex: 0 0 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);

  p {
    margin-bottom: 10px;
    font-size: 0.9rem;
  }
  h2 {
    font-size: 2rem;
    margin-top: 10px;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 15px;
`;

const NavButton = styled.button`
  background: #f0f0f0;
  border: none;
  border-radius: 50%;
  padding: 10px;
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  transition: background 0.3s ease;

  &:hover {
    background: #ddd;
  }
`;

// Make it responsive
const Responsive = styled.div`
  @media (max-width: 768px) {
    ${Slider} {
      flex-direction: column;
      align-items: center;
    }
  }
`;

