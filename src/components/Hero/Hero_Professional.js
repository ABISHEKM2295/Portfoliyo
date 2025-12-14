import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiDownload,
  FiArrowRight,
} from "react-icons/fi";

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${(props) => props.theme.colors.background};
  padding: ${(props) => props.theme.spacing["4xl"]} 0;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: ${(props) => props.theme.spacing["3xl"]} 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.spacing.lg};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 0 ${(props) => props.theme.spacing.md};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${(props) => props.theme.spacing.xl};
  align-items: center;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: ${(props) => props.theme.spacing.lg};
  }
`;

const ContentColumn = styled.div`
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    order: 2;
  }
`;

const Label = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xs};
  padding: ${(props) => props.theme.spacing.xs}
    ${(props) => props.theme.spacing.md};
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: ${(props) => props.theme.borderRadius.full};
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  margin-bottom: ${(props) => props.theme.spacing.lg};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const Heading = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: ${(props) => props.theme.lineHeights.tight};
  color: ${(props) => props.theme.colors.text};
  margin-bottom: ${(props) => props.theme.spacing.md};
  letter-spacing: -0.02em;

  span {
    background: ${(props) => props.theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: ${(props) => props.theme.fontSizes.xl};
  line-height: ${(props) => props.theme.lineHeights.relaxed};
  color: ${(props) => props.theme.colors.textMuted};
  margin-bottom: ${(props) => props.theme.spacing.xl};
  max-width: 540px;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: ${(props) => props.theme.spacing.md};
  margin-bottom: ${(props) => props.theme.spacing.xl};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    justify-content: center;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const PrimaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.sm};
  padding: ${(props) => props.theme.spacing.md}
    ${(props) => props.theme.spacing.lg};
  background: ${(props) => props.theme.colors.primary};
  color: white;
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  border-radius: ${(props) => props.theme.borderRadius.md};
  cursor: pointer;
  transition: all ${(props) => props.theme.transitions.base};

  &:hover {
    background: ${(props) => props.theme.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(59, 130, 246, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const SecondaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.sm};
  padding: ${(props) => props.theme.spacing.md}
    ${(props) => props.theme.spacing.lg};
  background: transparent;
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.borderRadius.md};
  cursor: pointer;
  transition: all ${(props) => props.theme.transitions.base};

  &:hover {
    background: ${(props) => props.theme.colors.surfaceLight};
    border-color: ${(props) => props.theme.colors.borderLight};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: ${(props) => props.theme.spacing.md};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: ${(props) => props.theme.colors.surface};
  color: ${(props) => props.theme.colors.textSecondary};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.borderRadius.md};
  font-size: ${(props) => props.theme.fontSizes.xl};
  transition: all ${(props) => props.theme.transitions.base};
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.primary};
    color: white;
    border-color: ${(props) => props.theme.colors.primary};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const ImageColumn = styled.div`
  position: relative;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    order: 1;
    max-width: 400px;
    margin: 0 auto;
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  aspect-ratio: 1;
  border-radius: ${(props) => props.theme.borderRadius.xl};
  overflow: hidden;
  background: ${(props) => props.theme.colors.surface};
  border: 1px solid ${(props) => props.theme.colors.border};
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProfileFallback = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.theme.fontSizes["6xl"]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.surface};
`;

const AccentDecoration = styled.div`
  position: absolute;
  top: -20px;
  right: -20px;
  width: 120px;
  height: 120px;
  border-radius: ${(props) => props.theme.borderRadius.full};
  background: ${(props) => props.theme.colors.gradient};
  opacity: 0.1;
  filter: blur(40px);
  z-index: -1;
`;

const Hero = () => {
  const [imageError, setImageError] = React.useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Abishek_Mahesh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <HeroSection id="home">
      <Container>
        <Grid>
          <ContentColumn>
            <Label
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              👋 Available for opportunities
            </Label>

            <Heading
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Building intelligent <span>digital experiences</span>
            </Heading>

            <Subtitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Full-stack developer and AI enthusiast creating scalable
              applications that solve real-world problems. Passionate about
              machine learning and modern web technologies.
            </Subtitle>

            <ButtonGroup
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <PrimaryButton
                onClick={scrollToContact}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in touch <FiArrowRight />
              </PrimaryButton>

              <SecondaryButton
                onClick={downloadResume}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiDownload /> Resume
              </SecondaryButton>
            </ButtonGroup>

            <SocialLinks
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <SocialLink
                href="https://github.com/ABISHEKM2295"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiGithub />
              </SocialLink>

              <SocialLink
                href="https://www.linkedin.com/in/abishek-mahesh-b99221329/-m"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiLinkedin />
              </SocialLink>

              <SocialLink
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToContact();
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiMail />
              </SocialLink>
            </SocialLinks>
          </ContentColumn>

          <ImageColumn>
            <ImageContainer
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {!imageError ? (
                <ProfileImage
                  src="/images/profile.jpg"
                  alt="Abishek Mahesh"
                  onError={() => setImageError(true)}
                />
              ) : (
                <ProfileFallback>AM</ProfileFallback>
              )}
              <AccentDecoration />
            </ImageContainer>
          </ImageColumn>
        </Grid>
      </Container>
    </HeroSection>
  );
};

export default Hero;
