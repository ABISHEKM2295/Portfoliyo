import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FiHeart,
  FiCode,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUp,
} from "react-icons/fi";

const FooterSection = styled.footer`
  background: ${(props) => props.theme.colors.background};
  border-top: 1px solid ${(props) => props.theme.colors.border};
  padding: ${(props) => props.theme.spacing.lg} 0
    ${(props) => props.theme.spacing.sm};
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.spacing.md};

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 0 ${(props) => props.theme.spacing.sm};
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: ${(props) => props.theme.spacing.lg};
  align-items: center;
  margin-bottom: ${(props) => props.theme.spacing.lg};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: ${(props) => props.theme.spacing.md};
  }
`;

const FooterBrand = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.sm};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    align-items: center;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xs};
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
`;

const BrandText = styled.p`
  color: ${(props) => props.theme.colors.textMuted};
  font-size: ${(props) => props.theme.fontSizes.sm};
  max-width: 300px;
  line-height: 1.6;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: ${(props) => props.theme.spacing.md};
  justify-content: center;
`;

const SocialLink = styled(motion.a)`
  width: 45px;
  height: 45px;
  border-radius: ${(props) => props.theme.borderRadius.full};
  background: ${(props) => props.theme.colors.surface};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: ${(props) => props.theme.fontSizes.lg};
  transition: all ${(props) => props.theme.transitions.fast};

  &:hover {
    background: ${(props) => props.theme.colors.primary};
    color: white;
    transform: translateY(-2px);
  }
`;

const QuickLinks = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.sm};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    align-items: center;
  }
`;

const QuickLinksTitle = styled.h4`
  font-size: ${(props) => props.theme.fontSizes.base};
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: ${(props) => props.theme.spacing.xs};
`;

const QuickLink = styled(motion.a)`
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: ${(props) => props.theme.fontSizes.sm};
  transition: color ${(props) => props.theme.transitions.fast};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${(props) => props.theme.spacing.md};
  border-top: 1px solid ${(props) => props.theme.colors.border};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${(props) => props.theme.spacing.sm};
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: ${(props) => props.theme.colors.textMuted};
  font-size: ${(props) => props.theme.fontSizes.sm};
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xs};
`;

const HeartIcon = styled(motion.span)`
  color: ${(props) => props.theme.colors.error};
`;

const BackToTop = styled(motion.button)`
  width: 45px;
  height: 45px;
  border-radius: ${(props) => props.theme.borderRadius.full};
  background: ${(props) => props.theme.colors.gradient};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.theme.fontSizes.lg};
  transition: all ${(props) => props.theme.transitions.fast};
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.gradientHover};
    transform: translateY(-2px);
  }
`;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <FooterSection>
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <FooterContent>
            <FooterBrand variants={itemVariants}>
              <Logo>
                <FiCode />
                <span>Abishek Mahesh</span>
              </Logo>
              <BrandText>
                Full Stack Developer passionate about creating innovative
                solutions and building meaningful digital experiences.
              </BrandText>
            </FooterBrand>

            <SocialLinks variants={itemVariants}>
              <SocialLink
                href="https://github.com/ABISHEKM2295"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiGithub />
              </SocialLink>

              <SocialLink
                href="https://www.linkedin.com/in/abishek-mahesh-b99221329/-m"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiLinkedin />
              </SocialLink>

              <SocialLink
                href="mailto:abishekm2295@gmail.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiMail />
              </SocialLink>
            </SocialLinks>

            <QuickLinks variants={itemVariants}>
              <QuickLinksTitle>Quick Links</QuickLinksTitle>
              {quickLinks.map((link) => (
                <QuickLink
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  whileHover={{ x: 5 }}
                >
                  {link.name}
                </QuickLink>
              ))}
            </QuickLinks>
          </FooterContent>

          <FooterBottom>
            <Copyright>
              © 2025 Abishek Mahesh. Made with
              <HeartIcon
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FiHeart />
              </HeartIcon>
              and lots of coffee.
            </Copyright>

            <BackToTop
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title="Back to top"
            >
              <FiArrowUp />
            </BackToTop>
          </FooterBottom>
        </motion.div>
      </Container>
    </FooterSection>
  );
};

export default Footer;
