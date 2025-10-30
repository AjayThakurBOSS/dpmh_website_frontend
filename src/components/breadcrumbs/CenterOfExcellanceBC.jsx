import React from "react";
import styled from "styled-components";
import { ChevronRight } from "lucide-react";

// ===== Styled Components =====

const HeroContainer = styled.section`
  width: 100%;
  height: ${props => props.height || "60vh"};
  background-image: ${props => props.background || "linear-gradient(to bottom, #2C4B98, #149BD2)"};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: ${props => props.mobileHeight || "40vh"};
  }
`;

const Breadcrumb = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: ${props => props.breadcrumbMargin || "0"};

  a {
    color: #fff;
    text-decoration: none;
    transition: opacity 0.2s ease-in-out;

    &:hover {
      opacity: 0.8;
    }
  }

  span {
    opacity: 0.8;
  }
`;

const Title = styled.h1`
  font-size: ${props => props.titleSize || "2.8rem"};
  font-weight: 700;
  margin-bottom: 12px;
  max-width: ${props => props.titleMaxWidth || "1500px"};
  padding: 0 20px;

  @media (max-width: 768px) {
    font-size: ${props => props.mobileTitleSize || "2rem"};
  }
`;

const SubText = styled.p`
  font-size: ${props => props.subTextSize || "1.2rem"};
  opacity: 0.9;
  max-width: ${props => props.subTextMaxWidth || "1500px"};
  padding: 0 20px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: ${props => props.mobileSubTextSize || "1rem"};
  }
`;

// ===== React Component =====

const DepartmentHero = ({
  // Breadcrumb props
  breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Career", href: null }
  ],
  breadcrumbMargin = "0",
  
  // Title props
  title = "Let's Transform Healthcare Together",
  titleSize = "2.8rem",
  mobileTitleSize = "2rem",
  titleMaxWidth = "800px",
  
  // Subtext props
  subText = "Join Our Team at Mangalam Hospital and be part of our mission to provide exceptional healthcare through innovation, compassion, and excellence.",
  subTextSize = "1.2rem",
  mobileSubTextSize = "1rem",
  subTextMaxWidth = "600px",
  
  // Container props
  background = "linear-gradient(to bottom, #2C4B98, #149BD2)",
  height = "60vh",
  mobileHeight = "40vh",
  
  // Additional content
  children
}) => {
  return (
    <HeroContainer 
      background={background}
      height={height}
      mobileHeight={mobileHeight}
    >
      {breadcrumbs && breadcrumbs.length > 0 && (
        <Breadcrumb breadcrumbMargin={breadcrumbMargin}>
          {breadcrumbs.map((breadcrumb, index) => (
            <React.Fragment key={index}>
              {breadcrumb.href ? (
                <a href={breadcrumb.href}>{breadcrumb.label}</a>
              ) : (
                <span>{breadcrumb.label}</span>
              )}
              {index < breadcrumbs.length - 1 && <ChevronRight size={18} />}
            </React.Fragment>
          ))}
        </Breadcrumb>
      )}
      
      <Title 
        titleSize={titleSize}
        mobileTitleSize={mobileTitleSize}
        titleMaxWidth={titleMaxWidth}
      >
        {title}
      </Title>
      
      <SubText 
        subTextSize={subTextSize}
        mobileSubTextSize={mobileSubTextSize}
        subTextMaxWidth={subTextMaxWidth}
      >
        {subText}
      </SubText>
      
      {children}
    </HeroContainer>
  );
};

export default DepartmentHero;