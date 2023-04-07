import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Background = styled.div`
  background-image: url('https://source.unsplash.com/random');
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
  position: relative;
  z-index: -1;
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 32px;
  z-index: 1;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: white;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 1.25rem;
  color: white;
  margin-bottom: 32px;
`;

const Button = styled(motion.button)`
  background-color: #ff9800;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #ff5722;
  }
`;

const LandingPage = () => {
  return (
    <Background>
      <Overlay />
      <Content>
        <Title>Your Stunning Landing Page</Title>
        <Description>
          Welcome to our visually stunning landing page, crafted with love and the latest design trends.
        </Description>
        <Link to="features" smooth={true} duration={500}>
          <Button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Features
          </Button>
        </Link>
      </Content>
    </Background>
  );
};

export default LandingPage;
