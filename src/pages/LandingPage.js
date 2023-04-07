import React from 'react';
import styled from '@emotion/styled';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-scroll';
import { useInView } from 'react-intersection-observer';

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

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: bold;
  color: white;
  margin-bottom: 16px;
`;

const Description = styled(motion.p)`
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
  const animation = useAnimation();
  const [contentRef, inView] = useInView({
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      animation.start('visible');
    }
  }, [animation, inView]);

  const variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const staggerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const parallaxVariants = {
    hidden: { y: '-50%' },
    visible: {
      y: '-60%',
      transition: { ease: 'linear', duration: 30, loop: Infinity },
    },
  };

  return (
    <Background>
      <motion.div
        initial="hidden"
        animate={animation}
        variants={parallaxVariants}
      >
        <Overlay />
  </motion.div>
  <Content ref={contentRef}>
    <motion.div initial="hidden" animate={animation} variants={staggerVariants}>
      <Title variants={variants}>Abrar's Visually Stunning Landing Pages</Title>
        <Description variants={variants}>
        Welcome to our aesthetic focused landing page, crafted with vision and
          the latest design trends for your next start up
        </Description>
          <Link to="features" smooth={true} duration={500}>
            <Button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={variants}
            >
        Explore our Technology
      </Button>
    </Link>
  </motion.div>
</Content>

    </Background>
  );
};

export default LandingPage;
