import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaArrowLeft, FaArrowRight, FaHeart, FaStar, FaGoogle, FaComments, FaShield } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const testimonials = [
    {
    text: "Dr. Prabhat Memorial Hiramati Hospital truly stands apart for its patient-centric care and transparent approach. From my very first visit, I felt a sense of comfort and trust. The doctors here explain every diagnosis, procedure, and test in a way that even a common person can easily understand. This kind of open communication makes a huge difference when you’re already anxious about your health. The entire staff — from reception to nursing — is polite, attentive, and genuinely caring. I appreciate how the hospital keeps patients informed at every stage of their treatment, ensuring complete peace of mind.",
    name: "— Pradeep Verma",
    rating: 4.2
  },
  {
    text: "I had a wonderful experience at Dr. Prabhat Memorial Hiramati Hospital. The doctors and staff here go above and beyond to ensure that every patient feels comfortable and cared for. What impressed me the most was their clarity in explaining each step of the treatment process. There was no confusion or hidden detail — everything was communicated openly. The hospital is also very clean and well-organized, which adds to the overall confidence a patient feels. I truly appreciate their human touch and professionalism. It’s rare to find such a perfect balance of medical expertise and empathy these days.",
    name: "— Sangeeta Sharma",
    rating: 4.2
  },
  {
    text: "My father was admitted to Dr. Prabhat Memorial Hiramati Hospital for cardiac treatment, and I must say the experience was exceptional. The doctors are not only knowledgeable but also extremely humble and patient while addressing our queries. Every nurse and support staff member treated us with utmost respect. The hospital keeps patients and families informed about every stage of the recovery process, which really helps in reducing anxiety. Their transparent approach builds so much trust. We are grateful to the entire team for their dedication and timely care. It truly feels like a hospital that puts patients first.",
    name: "— Ravi Kumar",
    rating: 4.2
  },
    {
    text: "I visited Dr. Prabhat Memorial Hiramati Hospital for my mother’s surgery, and I was amazed by the level of professionalism and compassion shown by the entire staff. From the admission process to post-surgery follow-ups, everything was handled smoothly and efficiently. The doctors made sure we understood every detail of the treatment plan, and that made us feel confident throughout the journey. Their transparent communication and ethical practices are commendable. The facilities are modern, and the hygiene standards are excellent. We left the hospital feeling truly grateful for the care we received. It’s a hospital that genuinely values its patients.",
    name: "— Anjali Mehta",
    rating: 4.2
  },
  {
    text: "What sets Dr. Prabhat Memorial Hiramati Hospital apart is the personal touch with which they treat every patient. The doctors here listen patiently, explain conditions clearly, and never rush consultations. I was particularly impressed by their transparent billing and communication — nothing is hidden or confusing. The nursing staff is caring and always ready to help, day or night. The hospital environment is positive and reassuring, which really helps in faster recovery. My family and I have complete faith in their medical team. I recommend this hospital to anyone seeking honest, compassionate, and quality healthcare.",
    name: "— Rohit Sinha",
    rating: 4.2
  },
  {
    text: "I recently underwent treatment at Dr. Prabhat Memorial Hiramati Hospital, and I must say the experience was outstanding. Every interaction — from registration to discharge — reflected professionalism and genuine care. The doctors here take the time to explain every report and procedure in simple terms, ensuring that patients are well-informed and confident about their treatment. Such transparency builds immense trust. The hospital is also well-equipped with modern technology and maintains a very hygienic environment. The staff’s politeness and readiness to assist make a huge difference. I truly felt I was in safe and caring hands.",
    name: "— Kavita Singh",
    rating: 4.2
  },
  {
    text: "Dr. Prabhat Memorial Hiramati Hospital’s commitment to transparent communication fosters a trusting patient-doctor relationship, keeping patients fully informed about their health journey.",
    name: "— Pradeep Verma",
    rating: 4.2
  },
  {
    text: "The doctors are very supportive and caring. They ensure patients feel comfortable throughout their treatment process.",
    name: "— Anjali Singh",
    rating: 4.2
  },
  {
    text: "State-of-the-art facilities and highly professional staff make Dr. Prabhat Memorial Hiramati Hospital the best choice for healthcare.",
    name: "— Rajesh Kumar",
    rating: 4.2
  }
];

// Animations
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

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const { text, name, rating } = testimonials[current];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="star filled" />);
    }
    
    if (hasHalfStar) {
      stars.push(<FaStar key="half" className="star half" />);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} className="star" />);
    }
    
    return stars;
  };

  return (
    <TestimonialContainer>
      <Container>
        <Header>
          <Subtitle>
            <FaHeart className="icon" /> YOUR HEALTH IS OUR TOP PRIORITY
          </Subtitle>
          <Title>What Our Patients Say</Title>
          <Divider />
        </Header>

        <Slider>
          <QuoteCard className={isAnimating ? 'animating' : ''}>
            <QuoteMark>“</QuoteMark>
            <blockquote>{text}</blockquote>
            <AuthorInfo>
              <AuthorName>- {name}</AuthorName>
              <StarRating>
                {renderStars(rating)}
                <span className="rating-value">{rating}/5</span>
              </StarRating>
            </AuthorInfo>
            <Buttons>
              <NavButton onClick={prevSlide}>
                <FaArrowLeft />
              </NavButton>
              <SlideIndicator>
                {testimonials.map((_, index) => (
                  <IndicatorDot 
                    key={index} 
                    active={index === current}
                    onClick={() => {
                      setIsAnimating(true);
                      setTimeout(() => {
                        setCurrent(index);
                        setIsAnimating(false);
                      }, 300);
                    }}
                  />
                ))}
              </SlideIndicator>
              <NavButton onClick={nextSlide}>
                <FaArrowRight />
              </NavButton>
            </Buttons>
          </QuoteCard>

          <RatingCard>
            <CardOne>
              <GoogleIcon>
                <FcGoogle />
              </GoogleIcon>
              <CardTitle className="text-2xl">AVERAGE GOOGLE </CardTitle>
              <CardTitle> RATINGS</CardTitle>
              <GoogleRating>
                <RatingValue>{rating}</RatingValue>
              </GoogleRating>
              
            </CardOne>  
            <CardTwo>
              <CardTitle>Share Your Experience</CardTitle>
              <CardDescription>
                Help others by sharing your journey with us
              </CardDescription>
              <TestimonialButton to='https://g.page/r/CcfZy0nmjEznEBM/review'>
                <FcGoogle  className="mr-2"/> Give Testimonials
              </TestimonialButton>
            </CardTwo>
          </RatingCard>
        </Slider>
      </Container>
      
    </TestimonialContainer>
  );
};

export default Testimonials;

// Styled Components
const TestimonialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px 20px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Container = styled.div`
  max-width: 1200px;
  text-align: center;
  padding: 40px;
  border-radius: 20px;
  animation: ${fadeIn} 1s ease-out;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Header = styled.div`
  margin-bottom: 50px;
`;

const Subtitle = styled.h4`
  color: #004AAD;
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 15px;

  .icon {
    color: #e74c3c;
    animation: ${pulse} 2s infinite;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 20px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Divider = styled.div`
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #004AAD, #3498db);
  margin: 0 auto;
  border-radius: 2px;
`;

const Slider = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 30px;
  flex-wrap: wrap;
  margin-bottom: 40px;

  @media (max-width: 968px) {
    flex-direction: column;
    align-items: center;
  }
`;

const QuoteCard = styled.div`
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  padding: 40px 30px;
  border-radius: 15px;
  max-width: 600px;
  flex: 1;
  text-align: left;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  position: relative;
 
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.5s ease-out;

  &.animating {
    opacity: 0.7;
    transform: translateX(10px);
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
  }

  blockquote {
    font-size: 1.1rem;
    line-height: 1.7;
    color: #555;
    font-style: italic;
    margin-bottom: 25px;
  }

  @media (max-width: 768px) {
    padding: 25px 20px;
  }
`;

const QuoteMark = styled.span`
  font-size: 4rem;
  color: #004AAD;
  position: absolute;
  top: 10px;
  left: 20px;
  opacity: 0.3;
  font-family: serif;
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: auto;
  
`;

const AuthorName = styled.p`
  font-weight: 600;
  color: #2c3e50;
  font-size: 1.1rem;
`;

const StarRating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  .star {
    color: #ddd;
    font-size: 1rem;

    &.filled {
      color: #ffc107;
    }

    &.half {
      color: #ffc107;
      position: relative;
      
      &:before {
        content: '★';
        position: absolute;
        left: 0;
        width: 50%;
        overflow: hidden;
        color: #ffc107;
      }
    }
  }

  .rating-value {
    margin-left: 8px;
    font-weight: 600;
    color: #666;
  }
`;

const Buttons = styled.div`
  
  bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  gap: 20px;

`;

const NavButton = styled.button`
  background: linear-gradient(135deg, #004AAD 0%, #3498db 100%);
  border: none;
  border-radius: 50%;
  padding: 12px;
  font-size: 1.2rem;
  color: white;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 74, 173, 0.3);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(0, 74, 173, 0.4);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const SlideIndicator = styled.div`
  display: flex;
  gap: 8px;
  flex: 1;
  justify-content: center;
`;

const IndicatorDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.active ? '#004AAD' : '#ddd'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.active ? '#004AAD' : '#bbb'};
    transform: scale(1.2);
  }
`;

const RatingCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  flex: 0 0 300px;

  @media (max-width: 968px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    flex: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CardOne = styled.div`
  background: linear-gradient(135deg, #ffffff 0%, #e3f2fd 100%);
  border-radius: 15px;
  padding: 30px 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  border: 1px solid #e1f5fe;
  transition: all 0.3s ease;
  animation: ${slideIn} 0.6s ease-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0,0,0,0.15);
  }
`;

const GoogleIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const CardTitle = styled.h3`
  font-size: 1.1rem;
  color: #2c3e50;
  
  text-align: center;
  font-weight: 600;
`;

const GoogleRating = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
 
`;

const RatingValue = styled.h2`
  font-size: 2.5rem;
  color: #004AAD;
  font-weight: 700;
`;

const StarsContainer = styled.div`
  display: flex;
  gap: 5px;

  .star {
    color: #ddd;
    font-size: 1.2rem;

    &.filled {
      color: #ffc107;
    }
  }
`;

const ViewReviews = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #004AAD;
  font-weight: 500;
  font-size: 0.9rem;
  margin-top: 10px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #3498db;
  }
`;

const CardTwo = styled.div`
  background: linear-gradient(135deg, #ffffff 0%, #e8f5e9 100%);
  border-radius: 15px;
  padding: 30px 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  border: 1px solid #e8f5e9;
  transition: all 0.3s ease;
  animation: ${slideIn} 0.8s ease-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0,0,0,0.15);
  }
`;

const CardIcon = styled.div`
  font-size: 2.5rem;
  color: #004AAD;
  margin-bottom: 15px;
`;

const CardDescription = styled.p`
  color: #666;
  font-size: 0.95rem;
  text-align: center;
  margin-bottom: 20px;
  line-height: 1.5;
  font-weight: 400;
`;

const TestimonialButton = styled(Link)`
  background: linear-gradient(135deg, #004AAD 0%, #3498db 100%);
  color: white;
  padding: 12px 25px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 74, 173, 0.3);
  text-align: center;
  width: 100%;
  display: flex;
  align-items: center;


  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 74, 173, 0.4);
    color: white;
  }
`;

const CardThree = styled.div`
  background: linear-gradient(135deg, #ffffff 0%, #fff3e0 100%);
  border-radius: 15px;
  padding: 30px;
  display: flex;
  align-items: center;
  gap: 25px;
  max-width: 800px;
  width: 100%;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  border-left: 5px solid #ff9800;
  transition: all 0.3s ease;
  animation: ${fadeIn} 1s ease-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0,0,0,0.15);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 25px 20px;
  }
`;

const ShieldIcon = styled.div`
  font-size: 3rem;
  color: #ff9800;
  animation: ${float} 3s ease-in-out infinite;
`;

const CardContent = styled.div`
  flex: 1;
`;

const ComplaintButton = styled(Link)`
  background: linear-gradient(135deg, #ff9800 0%, #ffb74d 100%);
  color: white;
  padding: 12px 25px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 152, 0, 0.3);
  display: inline-block;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 152, 0, 0.4);
    color: white;
  }
`;