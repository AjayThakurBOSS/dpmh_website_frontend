import React, { useState, useEffect, useCallback } from "react";
import styled, { keyframes, css } from "styled-components";

const testimonials = [
  {
    id: 1,
    name: "Jhone Wick",
    role: "Founder Of Company",
    text: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    rating: 5,
    image: "https://picsum.photos/200/200?random=1",
  },
  {
    id: 2,
    name: "Alice Johnson",
    role: "Marketing Director",
    text: "This service exceeded all my expectations. The results were delivered quickly and professionally. Highly recommended!",
    rating: 4,
    image: "https://picsum.photos/200/200?random=2",
  },
  {
    id: 3,
    name: "Bob Smith",
    role: "Lead Developer",
    text: "An absolute pleasure to work with. The team was responsive, creative, and nailed the design brief perfectly.",
    rating: 5,
    image: "https://picsum.photos/200/200?random=3",
  },
];


const TestimonialCard = styled.div`
  min-width: 400px;
  aspect-ratio: 1 / 1;
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  margin: 0 10px;
  height: 400px;
  border: 1px solid #004aad;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 20px;
  position: relative;
`;
const Title = styled.h2`
  font-family: "Playfair Display", serif;
  color: #4a90e2;
  font-size: 2.2em;
  margin: 0;
  line-height: 1;
`;
const Subtitle = styled.p`
  font-family: "Arial", sans-serif;
  color: #333;
  font-size: 1.5em;
  font-weight: bold;
  letter-spacing: 2px;
  margin-top: 5px;
  line-height: 1;
`;
const DottedLine = styled.div`
  position: absolute;
  top: 10px;
  width: 2px;
  height: 20px;
  border-left: 2px dotted #ccc;
  ${(props) => (props.left ? "left: 0;" : "right: 0;")}
`;
const CornerElement = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 70%;
    height: 70%;
    background-color: #e6f0ff;
    border-radius: 0 100% 0 0;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 55%;
    height: 55%;
    background-color: #004d66;
    border-radius: 0 100% 0 0;
  }
`;
const ContentArea = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-top: 30px;
`;
const TestimonialBubble = styled.div`
  background-color: #b0e0e6;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  margin-bottom: 20px;
  &::after {
    content: "";
    position: absolute;
    bottom: -15px;
    right: 80px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid #b0e0e6;
  }
`;
const TestimonialText = styled.p`
  color: #333;
  font-style: italic;
  font-size: 0.9em;
  margin: 0;
`;
const QuoteMark = styled.span`
  font-size: 2em;
  line-height: 0;
  color: #004d66;
  display: inline-block;
  ${(props) => (props.start ? "margin-right: 5px;" : "margin-left: 5px;")}
  position: relative;
  top: ${(props) => (props.start ? "-0.2em" : "0.2em")};
`;
const Rating = styled.div`
  color: #ffcc00;
  font-size: 1.5em;
  letter-spacing: 5px;
  text-align: right;
  margin-bottom: 20px;
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  justify-content: flex-end;
  transform: translateY(30px) translateX(-50px);
`;
const ProfileImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid #fff;
  box-shadow: 0 0 0 3px #4a90e2;
  z-index: 2;
`;
const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const ProfileInfo = styled.div`
  text-align: right;
  margin-left: 15px;
  transform: translateY(10px) translateX(-130px);
  z-index: 3;
`;
const Name = styled.h3`
  color: #333;
  font-size: 1.1em;
  margin: 0;
  font-weight: bold;
`;
const TitleRole = styled.p`
  color: #666;
  font-size: 0.8em;
  margin: 2px 0 0 0;
`;

const renderStars = (count) => {
  return Array(5)
    .fill()
    .map((_, i) => (
      <span key={i} role="img" aria-label="star">
        {i < count ? "⭐" : "☆"}
      </span>
    ));
};

const ClientTestimonial = ({ data }) => {
  return (
    <TestimonialCard>
      <CornerElement />

      <ContentArea>
        <TestimonialBubble>
          <TestimonialText>
            <QuoteMark start>“</QuoteMark>
            {data.text}
            <QuoteMark end>”</QuoteMark>
          </TestimonialText>
        </TestimonialBubble>
        <Rating>{renderStars(data.rating)}</Rating>
        <Profile>
          <ProfileImageWrapper>
            <ProfileImage src={data.image} alt={data.name} />
          </ProfileImageWrapper>
          <ProfileInfo>
            <Name>{data.name}</Name>
            <TitleRole>{data.role}</TitleRole>
          </ProfileInfo>
        </Profile>
      </ContentArea>
    </TestimonialCard>
  );
};


const CarouselWrapper = styled.div`
  max-width: 1200px; 
  overflow: hidden;
  position: relative;
  margin: 30px auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
`;

const CarouselContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  /* The number of items here is the original array + 1 (the duplicated first item) */
  width: ${({ itemCount }) => `${itemCount * 500}px`};
  /* Total width = (Number of Slides) * (Wrapper Width) */

  /* Applying the transform to move the slides */
  transform: translateX(${({ translateValue }) => `-${translateValue}px`});
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  z-index: 10;
  border-radius: 50%;
  opacity: 0.8;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }

  ${({ direction }) => (direction === "prev" ? "left: 10px;" : "right: 10px;")}
`;


const TestimonialCarousel = ({ interval = 5000 }) => {
  const slides = [...testimonials, testimonials[0]];
  const slideWidth = 400; 
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [isTransitioning, setIsTransitioning] = useState(false);

  const translateValue = currentIndex * slideWidth;

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    if (currentIndex < testimonials.length) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  }, [currentIndex, isTransitioning, testimonials.length]);

  const goToPrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    if (currentIndex === 0) {
      setCurrentIndex(testimonials.length); 
    }
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);

        if (currentIndex === slides.length - 1) {
          setCurrentIndex(0);
        }

        if (currentIndex === -1) {
          setCurrentIndex(slides.length - 2); 
        }
      }, 500); 
      return () => clearTimeout(timer);
    }
  }, [isTransitioning, currentIndex, slides.length]);

  useEffect(() => {
    const autoSlide = setInterval(goToNext, interval);
    return () => clearInterval(autoSlide);
  }, [goToNext, interval]);

  return (
    <CarouselWrapper>
      <Header>
        <DottedLine left />
        <Title>Patient</Title>
        <Subtitle>TESTIMONIAL</Subtitle>
        <DottedLine right />
      </Header>
      <CarouselContainer
        itemCount={slides.length}
        translateValue={translateValue}
        style={{
          transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
        }}
      >
        {slides.map((testimonial, index) => (
          <ClientTestimonial key={index} data={testimonial} />
        ))}
      </CarouselContainer>

      <NavigationButton direction="prev" onClick={goToPrev}>
        &#10094;
      </NavigationButton>
      <NavigationButton direction="next" onClick={goToNext}>
        &#10095;
      </NavigationButton>
    </CarouselWrapper>
  );
};

export default TestimonialCarousel;


