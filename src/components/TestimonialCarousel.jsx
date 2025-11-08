import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const testimonials = [
  { id: 1, quote: "The design quality is unmatched. It boosted our conversion rate by 30% almost instantly!", name: "Sarah K.", title: "CEO, TechNova", rating: 5 },
  { id: 2, quote: "Truly exceptional service and attention to detail. The team delivered ahead of schedule.", name: "Mark L.", title: "Head of Marketing, Global Corp", rating: 5 },
  { id: 3, quote: "A seamless, beautiful integration. Our users love the new look and feel.", name: "Jenna T.", title: "Product Manager, CreativeFlow", rating: 4 },
  { id: 4, quote: "Highly recommend! Professional, responsive, and the results speak for themselves.", name: "Alex B.", title: "Founder, Startup Hub", rating: 5 },
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Section>
      <BackgroundPattern />
      <Container>
        <Header>
          <SectionTitle>Trusted by Industry Leaders</SectionTitle>
          <SectionSubtitle>Don't just take our word for it</SectionSubtitle>
        </Header>

        <ContentWrapper>
          <TestimonialDisplay>
            <QuoteMark>“</QuoteMark>
            <ActiveQuote>{testimonials[activeIndex].quote}</ActiveQuote>
            <AuthorSection>
              <Avatar>
                {testimonials[activeIndex].name.split(' ').map(n => n[0]).join('')}
              </Avatar>
              <AuthorInfo>
                <AuthorName>{testimonials[activeIndex].name}</AuthorName>
                <AuthorTitle>{testimonials[activeIndex].title}</AuthorTitle>
                <StarRating rating={testimonials[activeIndex].rating} />
              </AuthorInfo>
            </AuthorSection>
          </TestimonialDisplay>

          <Navigation>
            <NavButton onClick={prevSlide}>
              <ArrowIcon>←</ArrowIcon>
            </NavButton>
            
            <IndicatorContainer>
              {testimonials.map((_, index) => (
                <Indicator
                  key={index}
                  active={index === activeIndex}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </IndicatorContainer>
            
            <NavButton onClick={nextSlide}>
              <ArrowIcon>→</ArrowIcon>
            </NavButton>
          </Navigation>

         {/*  <TestimonialGrid>
            {testimonials.map((testimonial, index) => (
              <GridCard 
                key={testimonial.id}
                active={index === activeIndex}
                onClick={() => goToSlide(index)}
              >
                <GridQuote>"{testimonial.quote}"</GridQuote>
                <GridAuthor>
                  <GridName>{testimonial.name}</GridName>
                  <GridTitle>{testimonial.title}</GridTitle>
                </GridAuthor>
              </GridCard>
            ))}
          </TestimonialGrid> */}
        </ContentWrapper>

        <CTASection>
          <CTATitle>Ready to experience the difference?</CTATitle>
          <CTAButton>Get Started Today</CTAButton>
        </CTASection>
      </Container>
    </Section>
  );
};

const StarRating = ({ rating }) => (
  <StarContainer>
    {[1, 2, 3, 4, 5].map((star) => (
      <Star key={star} filled={star <= rating}>★</Star>
    ))}
  </StarContainer>
);

export default TestimonialCarousel;

// Styled Components
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Section = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 80px;
  animation: ${fadeIn} 0.8s ease-out;
`;

const SectionTitle = styled.h2`
  font-size: 3.5rem;
  color: white;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`;

const SectionSubtitle = styled.p`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.9);
  font-family: 'Inter', sans-serif;
  font-weight: 300;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  align-items: center;
`;

const TestimonialDisplay = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 60px 50px;
  text-align: center;
  position: relative;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.2);
  animation: ${fadeIn} 0.6s ease-out;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 
      0 30px 80px rgba(0, 0, 0, 0.15),
      0 0 0 1px rgba(255, 255, 255, 0.3);
  }
`;

const QuoteMark = styled.div`
  font-size: 8rem;
  color: #667eea;
  line-height: 1;
  margin-bottom: 20px;
  font-family: serif;
  opacity: 0.3;
`;

const ActiveQuote = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 40px;
  font-style: italic;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
`;

const AuthorSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Avatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  font-family: 'Poppins', sans-serif;
`;

const AuthorInfo = styled.div`
  text-align: left;
`;

const AuthorName = styled.h4`
  font-size: 1.2rem;
  color: #333;
  margin: 0 0 5px 0;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
`;

const AuthorTitle = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 0;
  font-family: 'Inter', sans-serif;
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const NavButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
    transform: scale(1.1);
  }
`;

const ArrowIcon = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

const IndicatorContainer = styled.div`
  display: flex;
  gap: 15px;
`;

const Indicator = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.3)'};
  transform: ${props => props.active ? 'scale(1.2)' : 'scale(1)'};
  
  &:hover {
    background: white;
    transform: scale(1.2);
  }
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const GridCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  ${props => props.active && `
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-5px);
  `}
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-3px);
  }
`;

const GridQuote = styled.p`
  color: white;
  font-style: italic;
  line-height: 1.5;
  margin-bottom: 20px;
  font-size: 0.95rem;
  font-family: 'Inter', sans-serif;
`;

const GridAuthor = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 15px;
`;

const GridName = styled.h5`
  color: white;
  margin: 0 0 5px 0;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
`;

const GridTitle = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  font-size: 0.85rem;
  font-family: 'Inter', sans-serif;
`;

const CTASection = styled.div`
  text-align: center;
  margin-top: 80px;
  animation: ${fadeIn} 0.8s ease-out;
`;

const CTATitle = styled.h3`
  font-size: 2rem;
  color: white;
  margin-bottom: 30px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
`;

const CTAButton = styled.button`
  background: white;
  color: #667eea;
  border: none;
  padding: 18px 40px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

const StarContainer = styled.div`
  display: flex;
  gap: 2px;
  margin-top: 8px;
`;

const Star = styled.span`
  color: ${props => props.filled ? '#FFD700' : '#ddd'};
  font-size: 0.9rem;
`;