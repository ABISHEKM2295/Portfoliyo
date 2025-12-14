import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiAward,
  FiCalendar,
  FiExternalLink,
  FiTarget,
  FiStar,
  FiX,
} from "react-icons/fi";

const CertificationsSection = styled.section`
  padding: ${(props) => props.theme.spacing["3xl"]} 0;
  background: transparent;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    width: 55%;
    height: 55%;
    bottom: 5%;
    left: 10%;
    background: ${(props) => props.theme.colors.gradientAurora};
    filter: blur(120px);
    opacity: 0.35;
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

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${(props) => props.theme.spacing["2xl"]};

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${(props) => props.theme.spacing.xl};
  }
`;

const SubSection = styled(motion.div)`
  background: ${(props) => props.theme.colors.glassLight};
  padding: ${(props) => props.theme.spacing.xl};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  border: 1px solid ${(props) => props.theme.colors.borderGlow};
  backdrop-filter: blur(22px);
  box-shadow: ${(props) => props.theme.shadows.md};
`;

const SubSectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.sm};
  margin-bottom: ${(props) => props.theme.spacing.lg};
`;

const SubSectionIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: ${(props) => props.theme.borderRadius.base};
  background: ${(props) => props.theme.colors.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: ${(props) => props.theme.fontSizes.xl};
`;

const SubSectionTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes["2xl"]};
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
`;

const CertificationCard = styled(motion.div)`
  background: ${(props) => props.theme.colors.glassHeavy};
  padding: ${(props) => props.theme.spacing.lg};
  border-radius: ${(props) => props.theme.borderRadius.base};
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: ${(props) => props.theme.spacing.md};
  transition: all ${(props) => props.theme.transitions.fast};
  backdrop-filter: blur(18px);

  &:hover {
    transform: translateY(-2px);
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: ${(props) => props.theme.shadows.md};
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const CertificationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${(props) => props.theme.spacing.sm};

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${(props) => props.theme.spacing.xs};
  }
`;

const CertificationTitle = styled.h4`
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: ${(props) => props.theme.spacing.xs};
`;

const CertificationIssuer = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 500;
  font-size: ${(props) => props.theme.fontSizes.base};
`;

const CertificationDate = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xs};
  color: ${(props) => props.theme.colors.textMuted};
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

const CertificationDescription = styled.p`
  color: ${(props) => props.theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: ${(props) => props.theme.spacing.sm};
`;

const CertificationLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xs};
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: 500;
  transition: color ${(props) => props.theme.transitions.fast};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.primaryLight};
  }
`;

const CertificationButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xs};
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: 500;
  transition: color ${(props) => props.theme.transitions.fast};
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  &:hover {
    color: ${(props) => props.theme.colors.primaryLight};
  }
`;

const AccomplishmentCard = styled(motion.div)`
  background: ${(props) => props.theme.colors.glassHeavy};
  padding: ${(props) => props.theme.spacing.lg};
  border-radius: ${(props) => props.theme.borderRadius.base};
  border-left: 4px solid ${(props) => props.theme.colors.primary};
  margin-bottom: ${(props) => props.theme.spacing.md};
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(18px);

  &:last-child {
    margin-bottom: 0;
  }
`;

const AccomplishmentTitle = styled.h4`
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: ${(props) => props.theme.spacing.xs};
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xs};
`;

const AccomplishmentDescription = styled.p`
  color: ${(props) => props.theme.colors.textSecondary};
  line-height: 1.6;
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.spacing.lg};
`;

const ModalContent = styled(motion.div)`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  background: ${(props) => props.theme.colors.surface};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
`;

const ModalImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 90vh;
  object-fit: contain;
  display: block;
`;

const ErrorMessage = styled.div`
  padding: ${(props) => props.theme.spacing.xl};
  text-align: center;
  color: ${(props) => props.theme.colors.textSecondary};
`;

const ErrorText = styled.p`
  font-size: ${(props) => props.theme.fontSizes.lg};
  margin-bottom: ${(props) => props.theme.spacing.sm};
  color: ${(props) => props.theme.colors.text};
`;

const ErrorHint = styled.p`
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.textMuted};
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: ${(props) => props.theme.spacing.md};
  right: ${(props) => props.theme.spacing.md};
  width: 40px;
  height: 40px;
  border-radius: ${(props) => props.theme.borderRadius.full};
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  font-size: ${(props) => props.theme.fontSizes.xl};
  transition: all ${(props) => props.theme.transitions.fast};

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: scale(1.1);
  }
`;

const Certifications = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [imageError, setImageError] = useState(false);

  const certificationsData = [
    {
      title: "Oracle Java SE 17 Certification",
      issuer: "Oracle",
      date: "May 2025",
      description:
        "Demonstrated expertise in object-oriented programming and modern Java development practices.",
      link: "#",
      image: "/java SE 17.pdf", // Served from public folder
    },
    {
      title: "MongoDB Associate Developer",
      issuer: "MongoDB University",
      date: "April 2025",
      description:
        "Hands-on experience in schema design, CRUD operations, indexing, and aggregation pipelines.",
      link: "#",
      image: "/abishek-mahesh-23csr011-mongodb-certificate.pdf", // Served from public folder
    },
  ];

  const accomplishmentsData = [
    {
      title: "Second Prize - AlgoArena'25 (CSE)",
      description:
        "Bagged second prize at AlgoArena'25 (CSE) for creating a Seva Track App for SIH 2K25.",
      icon: <FiAward />,
    },
    {
      title: "Finalist - Bytes India Hackathon AI Challenge",
      description:
        "Finalist at the Bytes India Hackathon (BIH) AI Challenge for presenting an innovative AI-driven solution.",
      icon: <FiStar />,
    },
    {
      title: "Second Prize - Hackathon 2025",
      description:
        "Won second prize in the Hackamooze 2025 CSD Hackathon for developing an intelligent campus solution.",
      icon: <FiTarget />,
    },
  ];

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
    <CertificationsSection id="education">
      <Container>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Certifications & Accomplishments
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Professional certifications and achievements that showcase my
            commitment to continuous learning
          </SectionSubtitle>
        </SectionHeader>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ContentGrid>
            <SubSection variants={itemVariants}>
              <SubSectionHeader>
                <SubSectionIcon>
                  <FiAward />
                </SubSectionIcon>
                <SubSectionTitle>Certifications</SubSectionTitle>
              </SubSectionHeader>

              {certificationsData.map((cert, index) => (
                <CertificationCard
                  key={cert.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <CertificationHeader>
                    <div>
                      <CertificationTitle>{cert.title}</CertificationTitle>
                      <CertificationIssuer>{cert.issuer}</CertificationIssuer>
                    </div>
                    <CertificationDate>
                      <FiCalendar />
                      {cert.date}
                    </CertificationDate>
                  </CertificationHeader>

                  <CertificationDescription>
                    {cert.description}
                  </CertificationDescription>

                  {cert.image ? (
                    <CertificationLink
                      href={cert.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        console.log("Opening certificate:", cert.image);
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <FiExternalLink />
                      View Certificate
                    </CertificationLink>
                  ) : (
                    <CertificationLink
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                    >
                      <FiExternalLink />
                      View Certificate
                    </CertificationLink>
                  )}
                </CertificationCard>
              ))}
            </SubSection>

            <SubSection variants={itemVariants}>
              <SubSectionHeader>
                <SubSectionIcon>
                  <FiStar />
                </SubSectionIcon>
                <SubSectionTitle>Accomplishments</SubSectionTitle>
              </SubSectionHeader>

              {accomplishmentsData.map((accomplishment, index) => (
                <AccomplishmentCard
                  key={accomplishment.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <AccomplishmentTitle>
                    {accomplishment.icon}
                    {accomplishment.title}
                  </AccomplishmentTitle>
                  <AccomplishmentDescription>
                    {accomplishment.description}
                  </AccomplishmentDescription>
                </AccomplishmentCard>
              ))}
            </SubSection>
          </ContentGrid>
        </motion.div>
      </Container>

      <AnimatePresence>
        {selectedCertificate && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setSelectedCertificate(null);
              setImageError(false);
            }}
          >
            <ModalContent
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton
                onClick={() => {
                  setSelectedCertificate(null);
                  setImageError(false);
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiX />
              </CloseButton>
              {imageError ? (
                <ErrorMessage>
                  <ErrorText>Certificate Image Not Found</ErrorText>
                  <ErrorHint>
                    Please ensure the image is saved as:
                    <br />
                    <code
                      style={{
                        color: "#6366F1",
                        marginTop: "8px",
                        display: "block",
                      }}
                    >
                      public/images/certificates/java-se-17.jpg
                    </code>
                  </ErrorHint>
                </ErrorMessage>
              ) : (
                <ModalImage
                  src={selectedCertificate}
                  alt="Certificate"
                  onError={(e) => {
                    console.error(
                      "Certificate image failed to load:",
                      selectedCertificate
                    );
                    setImageError(true);
                  }}
                  onLoad={() => {
                    console.log("Certificate image loaded successfully");
                    setImageError(false);
                  }}
                />
              )}
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </CertificationsSection>
  );
};

export default Certifications;
