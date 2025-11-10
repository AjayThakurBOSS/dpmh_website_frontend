import React, { useState } from 'react';
import styled from 'styled-components';

const testimonials = [
  {
    image: 'https://via.placeholder.com/150/0000FF/808080?text=John', // Placeholder image
    name: 'DR. JOHN SMITH',
    title: 'CEO, AGENCY',
    feedback: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.',
    rating: 4,
  },
  {
    image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Jane', // Placeholder image
    name: 'JANE DOE',
    title: 'MARKETING DIRECTOR',
    feedback: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.',
    rating: 5,
  },
  {
    image: 'https://via.placeholder.com/150/00FF00/000000?text=Peter', // Placeholder image
    name: 'PETER JONES',
    title: 'DEVELOPER',
    feedback: 'Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.',
    rating: 3,
  },
];

const TestimonialContainer = styled.div`
  background: linear-gradient(to bottom, #2a9d8f, #264653); /* Example gradient */
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
  color: white;
  min-height: 500px;
  position: relative;
  overflow: hidden;
`;

const Header = styled.h2`
  font-size: 2.5em;
  margin-bottom: 50px;
  text-align: center;
`;

const ContentWrapper = styled.div`
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  padding: 30px 40px;
  width: 70%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const ProfileImageWrapper = styled.div`
  position: absolute;
  top: -75px; /* Adjust to position above the white card */
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  object-fit: cover;
`;

const TestimonialContent = styled.div`
  color: #333;
  margin-top: 90px; /* Space for the image */
  text-align: center;
  transition: opacity 0.5s ease-in-out; /* For sliding/fading effect */
`;

const Name = styled.h3`
  font-size: 1.8em;
  margin-bottom: 5px;
  color: #264653;
`;

const Title = styled.p`
  font-size: 1em;
  color: #888;
  margin-bottom: 20px;
`;

const Feedback = styled.p`
  font-size: 1.1em;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const RatingStars = styled.div`
  color: #fca311; /* Gold color for stars */
  font-size: 1.5em;
  margin-bottom: 30px;
`;

const LearnMoreButton = styled.button`
  background-color: #2a9d8f;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 30px;
  font-size: 1.1em;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #264653;
  }
`;

const NavigationDots = styled.div`
  display: flex;
  margin-top: 30px;
`;

const Dot = styled.span`
  height: 10px;
  width: 10px;
  background-color: ${(props) => (props.active ? '#fff' : 'rgba(255, 255, 255, 0.5)')};
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #fff;
  }
`;

const ClientFeedback = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentTestimonial = testimonials[activeIndex];

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <TestimonialContainer>
      <Header>What Our Clients Say About Us ...</Header>
      <ContentWrapper>
        <ProfileImageWrapper>
          <ProfileImage src={currentTestimonial.image} alt={currentTestimonial.name} />
        </ProfileImageWrapper>
        <TestimonialContent key={activeIndex}> {/* Key for re-rendering and transition */}
          <Name>{currentTestimonial.name}</Name>
          <Title>{currentTestimonial.title}</Title>
          <Feedback>"{currentTestimonial.feedback}"</Feedback>
          <RatingStars>
            {'★'.repeat(currentTestimonial.rating)}
            {'☆'.repeat(5 - currentTestimonial.rating)}
          </RatingStars>
          <LearnMoreButton>LEARN MORE</LearnMoreButton>
        </TestimonialContent>
      </ContentWrapper>
      <NavigationDots>
        {testimonials.map((_, index) => (
          <Dot
            key={index}
            active={index === activeIndex}
            onClick={() => goToSlide(index)}
          />
        ))}
      </NavigationDots>
    </TestimonialContainer>
  );
};

export default ClientFeedback;
