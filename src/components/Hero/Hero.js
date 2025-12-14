import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${(props) => props.theme.colors.background};
  overflow: hidden;
  padding-top: 80px;

  /* Animated geometric background pattern */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        135deg,
        transparent 25%,
        rgba(99, 102, 241, 0.03) 25%,
        rgba(99, 102, 241, 0.03) 50%,
        transparent 50%
      ),
      linear-gradient(
        45deg,
        transparent 25%,
        rgba(139, 92, 246, 0.02) 25%,
        rgba(139, 92, 246, 0.02) 50%,
        transparent 50%
      );
    background-size: 60px 60px;
    background-position: 0 0, 30px 30px;
    animation: backgroundShift 20s ease-in-out infinite;
    z-index: 1;
  }

  /* Professional floating accent */
  &::after {
    content: "";
    position: absolute;
    top: 20%;
    right: 10%;
    width: 200px;
    height: 200px;
    background: radial-gradient(
      circle,
      rgba(6, 182, 212, 0.08) 0%,
      transparent 70%
    );
    border-radius: 50%;
    animation: gentleFloat 8s ease-in-out infinite;
    z-index: 1;
  }

  @keyframes backgroundShift {
    0%,
    100% {
      background-position: 0 0, 30px 30px;
    }
    50% {
      background-position: 30px 30px, 0 0;
    }
  }

  @keyframes gentleFloat {
    0%,
    100% {
      transform: translateY(0px) scale(1);
      opacity: 0.6;
    }
    50% {
      transform: translateY(-20px) scale(1.1);
      opacity: 0.8;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding-top: 60px;
  }
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.spacing.md};
  text-align: center;
  z-index: 10;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 0 ${(props) => props.theme.spacing.sm};
  }
`;

const ProfileImageContainer = styled(motion.div)`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.gradient};
  padding: 8px;
  margin-bottom: ${(props) => props.theme.spacing.xl};
  position: relative;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  /* Professional glow effect */
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1),
    0 0 0 8px rgba(139, 92, 246, 0.05), 0 20px 40px rgba(0, 0, 0, 0.3),
    0 0 60px rgba(99, 102, 241, 0.1);

  &:hover {
    transform: scale(1.05) translateY(-5px);
    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.2),
      0 0 0 8px rgba(139, 92, 246, 0.1), 0 30px 60px rgba(0, 0, 0, 0.4),
      0 0 80px rgba(99, 102, 241, 0.2);
  }

  /* Elegant rotating border */
  &::before {
    content: "";
    position: absolute;
    top: -12px;
    left: -12px;
    right: -12px;
    bottom: -12px;
    border-radius: 50%;
    background: conic-gradient(
      from 0deg,
      ${(props) => props.theme.colors.primary},
      ${(props) => props.theme.colors.secondary},
      ${(props) => props.theme.colors.accent},
      ${(props) => props.theme.colors.primary}
    );
    opacity: 0.4;
    animation: elegantRotate 12s linear infinite;
    z-index: -1;
  }

  /* Subtle breathing effect */
  &::after {
    content: "";
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(99, 102, 241, 0.1) 0%,
      transparent 70%
    );
    animation: breathe 4s ease-in-out infinite;
    z-index: -2;
  }

  @keyframes elegantRotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes breathe {
    0%,
    100% {
      transform: scale(1);
      opacity: 0.3;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.6;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 220px;
    height: 220px;
  }
`;

const ProfileImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  background: ${(props) => props.theme.colors.surface};

  /* Clean highlight effect */
  &::after {
    content: "";
    position: absolute;
    top: 15%;
    left: 15%;
    width: 25%;
    height: 25%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.2) 0%,
      transparent 70%
    );
    border-radius: 50%;
    pointer-events: none;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
  z-index: 1;
`;

const ProfileFallback = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(
    145deg,
    ${(props) => props.theme.colors.surface} 0%,
    ${(props) => props.theme.colors.surfaceLight} 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.theme.fontSizes["4xl"]};
  color: ${(props) => props.theme.colors.primary};
  font-weight: 800;
  position: relative;
  z-index: 1;
`;

const Greeting = styled(motion.p)`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: 500;
  margin-bottom: ${(props) => props.theme.spacing.sm};
  text-transform: uppercase;
  letter-spacing: 3px;
  position: relative;

  &::before {
    content: "👋";
    margin-right: 8px;
  }
`;

const Name = styled(motion.h1)`
  font-size: clamp(3.5rem, 8vw, 7rem);
  font-weight: 800;
  margin-bottom: ${(props) => props.theme.spacing.md};
  background: ${(props) => props.theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  line-height: 1.1;
  position: relative;

  /* Clean text shadow for depth */
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
`;

const Title = styled(motion.h2)`
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 600;
  color: ${(props) => props.theme.colors.textSecondary};
  margin-bottom: ${(props) => props.theme.spacing.lg};
  text-align: center;
  line-height: 1.3;
`;

const Description = styled(motion.p)`
  font-size: ${(props) => props.theme.fontSizes.xl};
  color: ${(props) => props.theme.colors.textMuted};
  max-width: 700px;
  margin: 0 auto ${(props) => props.theme.spacing.xl};
  line-height: 1.7;
  text-align: center;
  font-weight: 400;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: ${(props) => props.theme.spacing.md};
  justify-content: center;
  margin-bottom: ${(props) => props.theme.spacing.xl};

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled(motion.a)`
  background: ${(props) => props.theme.colors.gradient};
  background-size: 200% 200%;
  color: white;
  padding: ${(props) => props.theme.spacing.md}
    ${(props) => props.theme.spacing.xl};
  border-radius: ${(props) => props.theme.borderRadius.full};
  font-weight: 600;
  font-size: ${(props) => props.theme.fontSizes.lg};
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xs};
  transition: all ${(props) => props.theme.transitions.base};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border: 2px solid transparent;
  box-shadow: ${(props) => props.theme.shadows.primary};
  text-transform: uppercase;
  letter-spacing: 1px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    transition: left 0.6s ease;
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: ${(props) => props.theme.colors.gradient};
    z-index: -1;
    transition: all 0.3s ease;
  }

  &:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: ${(props) => props.theme.shadows.glowHover};
    border-color: rgba(255, 255, 255, 0.2);

    &::before {
      left: 100%;
    }

    &::after {
      background: ${(props) => props.theme.colors.gradientHover};
      filter: brightness(1.2);
    }
  }

  &:active {
    transform: translateY(-2px) scale(1.02);
  }
`;

const SecondaryButton = styled(motion.a)`
  border: 2px solid ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.spacing.md}
    ${(props) => props.theme.spacing.xl};
  border-radius: ${(props) => props.theme.borderRadius.full};
  font-weight: 600;
  font-size: ${(props) => props.theme.fontSizes.lg};
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xs};
  transition: all ${(props) => props.theme.transitions.base};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background: rgba(26, 26, 35, 0.5);
  backdrop-filter: blur(10px);
  text-transform: uppercase;
  letter-spacing: 1px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.colors.gradient};
    transition: left 0.5s ease;
    z-index: -1;
  }

  &:hover {
    color: white;
    border-color: transparent;
    transform: translateY(-4px) scale(1.05);
    box-shadow: ${(props) => props.theme.shadows.primary};

    &::before {
      left: 0;
    }
  }

  &:active {
    transform: translateY(-2px) scale(1.02);
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: ${(props) => props.theme.spacing.lg};
  justify-content: center;
  margin-top: ${(props) => props.theme.spacing.md};
`;

const SocialLink = styled(motion.a)`
  width: 60px;
  height: 60px;
  border-radius: ${(props) => props.theme.borderRadius.full};
  background: rgba(26, 26, 35, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: ${(props) => props.theme.fontSizes["2xl"]};
  transition: all ${(props) => props.theme.transitions.base};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: ${(props) => props.theme.colors.gradient};
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  &:hover {
    color: white;
    transform: translateY(-4px) scale(1.1);
    box-shadow: ${(props) => props.theme.shadows.glow};
    border-color: rgba(255, 255, 255, 0.3);

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(-2px) scale(1.05);
  }
`;

// Professional floating elements
const FloatingElement = styled(motion.div)`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  background: ${(props) => props.gradient || props.theme.colors.gradient};
  opacity: ${(props) => props.opacity || 0.1};
  filter: blur(1px);
  z-index: 1;
`;

const FloatingIcon = styled(motion.div)`
  position: absolute;
  font-size: ${(props) => props.size || "1.5rem"};
  color: ${(props) => props.theme.colors.primary};
  opacity: 0.4;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(26, 26, 35, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const BackgroundElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 1;
  pointer-events: none;
`;

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    // Create a link to download resume
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // You'll need to add your resume PDF to the public folder
    link.download = "Abishek_Mahesh_Resume.pdf";
    link.click();
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(false);
  };

  return (
    <HeroSection id="home">
      {/* Professional Background Elements */}
      <BackgroundElements>
        {/* Subtle floating orbs */}
        <FloatingElement
          size={120}
          opacity={0.08}
          style={{ top: "15%", left: "8%" }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <FloatingElement
          size={80}
          opacity={0.06}
          style={{ top: "70%", right: "12%" }}
          animate={{
            y: [0, 25, 0],
            x: [0, -10, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Professional tech icons */}
        <FloatingIcon
          size="1.2rem"
          style={{ top: "25%", right: "15%" }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ⚡
        </FloatingIcon>

        <FloatingIcon
          size="1rem"
          style={{ top: "60%", left: "10%" }}
          animate={{
            y: [0, 12, 0],
            x: [0, 8, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          💡
        </FloatingIcon>

        <FloatingIcon
          size="1.1rem"
          style={{ top: "80%", right: "25%" }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ⚙️
        </FloatingIcon>
      </BackgroundElements>

      <HeroContainer>
        <ProfileImageContainer
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -8, 0],
          }}
          transition={{
            duration: 1,
            delay: 0.2,
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            },
          }}
          whileHover={{
            scale: 1.05,
            y: -10,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.98 }}
        >
          <ProfileImageWrapper>
            {!imageError ? (
              <ProfileImage
                src="/images/abishek-profile.jpg"
                alt="Abishek Mahesh - Full Stack Developer"
                onLoad={handleImageLoad}
                onError={handleImageError}
                style={{ display: imageLoaded ? "block" : "none" }}
              />
            ) : null}
            {(imageError || !imageLoaded) && (
              <ProfileFallback>AM</ProfileFallback>
            )}
          </ProfileImageWrapper>
        </ProfileImageContainer>

        <Greeting
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            type: "spring",
            stiffness: 100,
          }}
        >
          Hello, I'm
        </Greeting>

        <Name
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.7,
            type: "spring",
            stiffness: 80,
          }}
        >
          ABISHEK MAHESH
        </Name>

        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.9,
            ease: "easeOut",
          }}
        >
          Full Stack Developer & AI Enthusiast
        </Title>

        <Description
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.1,
            ease: "easeOut",
          }}
        >
          A passionate 3rd-year BE Computer Science student with a strong
          foundation in software development, AI/ML, and web technologies.
          Skilled in building intelligent systems and interactive applications.
        </Description>

        <ButtonGroup
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.3,
            type: "spring",
            stiffness: 100,
          }}
        >
          <PrimaryButton
            onClick={scrollToContact}
            whileHover={{
              scale: 1.05,
              y: -2,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <FiMail />
            Get In Touch
          </PrimaryButton>

          <SecondaryButton
            onClick={downloadResume}
            whileHover={{
              scale: 1.05,
              y: -2,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.7, duration: 0.5 }}
          >
            <FiDownload />
            Download Resume
          </SecondaryButton>
        </ButtonGroup>

        <SocialLinks
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.9,
            ease: "easeOut",
          }}
        >
          <SocialLink
            href="https://github.com/ABISHEKM2295"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.15,
              y: -3,
              rotate: 5,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.1, duration: 0.4 }}
          >
            <FiGithub />
          </SocialLink>

          <SocialLink
            href="https://www.linkedin.com/in/abishek-mahesh-b99221329/-m"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.15,
              y: -3,
              rotate: -5,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.3, duration: 0.4 }}
          >
            <FiLinkedin />
          </SocialLink>

          <SocialLink
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToContact();
            }}
            whileHover={{
              scale: 1.15,
              y: -3,
              rotate: 5,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.4 }}
          >
            <FiMail />
          </SocialLink>
        </SocialLinks>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
