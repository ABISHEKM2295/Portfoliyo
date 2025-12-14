import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FiMapPin, FiMail, FiPhone, FiBook, FiCalendar } from "react-icons/fi";

const AboutSection = styled.section`
  padding: ${(props) => props.theme.spacing["3xl"]} 0;
  background: transparent;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 10% 15%;
    border-radius: ${(props) => props.theme.borderRadius["2xl"]};
    background: ${(props) => props.theme.colors.gradientAurora};
    filter: blur(140px);
    opacity: 0.4;
    z-index: -1;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: ${(props) => props.theme.spacing["2xl"]} 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.spacing.md};

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 0 ${(props) => props.theme.spacing.sm};
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${(props) => props.theme.spacing["2xl"]};
`;

const SectionTitle = styled(motion.h2)`
  font-size: ${(props) => props.theme.fontSizes["4xl"]};
  font-weight: 700;
  margin-bottom: ${(props) => props.theme.spacing.md};
  background: ${(props) => props.theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.fontSizes["3xl"]};
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: ${(props) => props.theme.fontSizes.lg};
  color: ${(props) => props.theme.colors.textMuted};
  max-width: 600px;
  margin: 0 auto;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${(props) => props.theme.spacing["2xl"]};
  align-items: start;
  position: relative;
  z-index: 2;

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${(props) => props.theme.spacing.xl};
  }
`;

const AboutText = styled(motion.div)`
  background: ${(props) => props.theme.colors.glassHeavy};
  padding: ${(props) => props.theme.spacing.xl};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  border: 1px solid ${(props) => props.theme.colors.borderGlow};
  box-shadow: ${(props) => props.theme.shadows.lg};
  backdrop-filter: blur(24px);
  transform-style: preserve-3d;
  transition: transform 0.6s ease, border-color 0.4s ease;

  &:hover {
    transform: translateY(-6px) rotateX(1deg);
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

const AboutParagraph = styled.p`
  font-size: ${(props) => props.theme.fontSizes.base};
  color: ${(props) => props.theme.colors.textSecondary};
  line-height: 1.8;
  margin-bottom: ${(props) => props.theme.spacing.md};

  &:last-child {
    margin-bottom: 0;
  }
`;

const InfoCard = styled(motion.div)`
  background: ${(props) => props.theme.colors.glassHeavy};
  padding: ${(props) => props.theme.spacing.xl};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  border: 1px solid ${(props) => props.theme.colors.borderGlow};
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  backdrop-filter: blur(24px);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(99, 102, 241, 0.05) 0%,
      rgba(139, 92, 246, 0.05) 50%,
      rgba(6, 182, 212, 0.05) 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 15px 30px rgba(99, 102, 241, 0.15);
    border-color: ${(props) => props.theme.colors.primary};

    &::before {
      opacity: 1;
    }
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;

const InfoSection = styled.div`
  margin-bottom: ${(props) => props.theme.spacing.xl};

  &:last-child {
    margin-bottom: 0;
  }
`;

const InfoTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: ${(props) => props.theme.spacing.md};
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xs};
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.sm};
  margin-bottom: ${(props) => props.theme.spacing.sm};
  color: ${(props) => props.theme.colors.textSecondary};

  &:last-child {
    margin-bottom: 0;
  }
`;

const InfoIcon = styled.div`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.base};
`;

const InfoText = styled.span`
  font-size: ${(props) => props.theme.fontSizes.base};
`;

const EducationCard = styled.div`
  background: ${(props) => props.theme.colors.surfaceLight};
  padding: ${(props) => props.theme.spacing.md};
  border-radius: ${(props) => props.theme.borderRadius.base};
  border-left: 4px solid ${(props) => props.theme.colors.primary};
  margin-bottom: ${(props) => props.theme.spacing.md};

  &:last-child {
    margin-bottom: 0;
  }
`;

const EducationTitle = styled.h4`
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: ${(props) => props.theme.spacing.xs};
`;

const EducationInstitute = styled.p`
  font-size: ${(props) => props.theme.fontSizes.base};
  color: ${(props) => props.theme.colors.textSecondary};
  margin-bottom: ${(props) => props.theme.spacing.xs};
`;

const EducationDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.textMuted};

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${(props) => props.theme.spacing.xs};
  }
`;

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <AboutSection id="about">
      <Container>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Get to know more about my background, education, and passion for
            technology
          </SectionSubtitle>
        </SectionHeader>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AboutContent>
            <AboutText variants={itemVariants}>
              <AboutParagraph>
                I'm a passionate 3rd-year BE Computer Science student at Kongu
                Engineering College with a strong foundation in software
                development, AI/ML, and web technologies. My journey in
                technology began with a curiosity about how intelligent systems
                work, which led me to explore various programming languages and
                frameworks.
              </AboutParagraph>
              <AboutParagraph>
                I'm skilled in building intelligent systems and interactive
                applications using Python, JavaScript, Flask, and React. My
                experience spans from developing full-stack web applications to
                implementing AI-powered solutions for real-world problems.
              </AboutParagraph>
              <AboutParagraph>
                I'm actively involved in hands-on projects and hackathons, with
                a drive to solve real-world problems through innovative tech
                solutions. I believe in continuous learning and staying updated
                with the latest technologies and industry trends.
              </AboutParagraph>
            </AboutText>

            <InfoCard variants={itemVariants}>
              <InfoSection>
                <InfoTitle>
                  <FiMapPin />
                  Contact Information
                </InfoTitle>
                <InfoItem>
                  <InfoIcon>
                    <FiMail />
                  </InfoIcon>
                  <InfoText>abishekm2295@gmail.com</InfoText>
                </InfoItem>
                <InfoItem>
                  <InfoIcon>
                    <FiPhone />
                  </InfoIcon>
                  <InfoText>+91 8270808473</InfoText>
                </InfoItem>
                <InfoItem>
                  <InfoIcon>
                    <FiMapPin />
                  </InfoIcon>
                  <InfoText>Erode, India</InfoText>
                </InfoItem>
              </InfoSection>

              <InfoSection>
                <InfoTitle>
                  <FiBook />
                  Education
                </InfoTitle>
                <EducationCard>
                  <EducationTitle>
                    B.E Computer Science and Engineering
                  </EducationTitle>
                  <EducationInstitute>
                    Kongu Engineering College
                  </EducationInstitute>
                  <EducationDetails>
                    <span>CGPA: 8.34/10</span>
                    <span>
                      <FiCalendar style={{ marginRight: "4px" }} />
                      2023 - 2027
                    </span>
                  </EducationDetails>
                </EducationCard>
                <EducationCard>
                  <EducationTitle>
                    Higher Secondary School
                  </EducationTitle>
                  <EducationInstitute>
                    Bharani Vidhyalaya Sr.Sec School
                  </EducationInstitute>
                  <EducationDetails>
                    <span>Percentage: 89.6%</span>
                    <span>
                      <FiCalendar style={{ marginRight: "4px" }} />
                      2021 - 2022
                    </span>
                  </EducationDetails>
                </EducationCard>
              </InfoSection>
            </InfoCard>
          </AboutContent>
        </motion.div>
      </Container>
    </AboutSection>
  );
};

export default About;
