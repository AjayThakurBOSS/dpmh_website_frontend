import React from "react";
import styled from "styled-components";
import { ChevronRight } from "lucide-react";

// ===== Styled Components =====

const HeroContainer = styled.section`
  width: 100%;
  height: 40vh;
  background-image: linear-gradient(to bottom, #2C4B98, #149BD2);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 40vh;
  }
`;

const Breadcrumb = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 1.1rem;
  font-weight: 500;

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
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const SubText = styled.p`
  font-size: 1.2rem;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// ===== React Component =====

const NewBlogBC = () => {
  return (
    <HeroContainer>
      <Breadcrumb>
        <a href="/">Home</a>
        <ChevronRight size={18} />
        <span>Blogs</span>
      </Breadcrumb>
      <Title>Stay updated with our Healthcare Blogs</Title>
    </HeroContainer>
  );
};

export default NewBlogBC;




