import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FiMenu, FiX, FiCode } from "react-icons/fi";

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${(props) =>
    props.scrolled ? "rgba(10, 10, 10, 0.98)" : "rgba(10, 10, 10, 0.9)"};
  backdrop-filter: blur(20px);
  border-bottom: ${(props) =>
    props.scrolled
      ? `1px solid rgba(99, 102, 241, 0.2)`
      : "1px solid rgba(255, 255, 255, 0.1)"};
  transition: all ${(props) => props.theme.transitions.base};
  box-shadow: ${(props) =>
    props.scrolled
      ? "0 8px 32px rgba(0, 0, 0, 0.3)"
      : "0 4px 16px rgba(0, 0, 0, 0.1)"};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 0;
  max-width: 1400px;
  margin: 0 auto;
  padding-left: ${(props) => props.theme.spacing.md};
  padding-right: ${(props) => props.theme.spacing.md};

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    padding-left: ${(props) => props.theme.spacing.sm};
    padding-right: ${(props) => props.theme.spacing.sm};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding-left: ${(props) => props.theme.spacing.xs};
    padding-right: ${(props) => props.theme.spacing.xs};
    padding: 0.25rem ${(props) => props.theme.spacing.xs};
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xs};
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: 700;
  background: ${(props) => props.theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${(props) => props.theme.colors.gradient};
    transition: width ${(props) => props.theme.transitions.fast};
  }

  &:hover::after {
    width: 100%;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.md};
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  padding: ${(props) => props.theme.spacing.xs}
    ${(props) => props.theme.spacing.sm};
  border-radius: ${(props) => props.theme.borderRadius.full};
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled(motion.a)`
  color: ${(props) => props.theme.colors.text};
  font-weight: 500;
  font-size: ${(props) => props.theme.fontSizes.sm};
  padding: ${(props) => props.theme.spacing.xs}
    ${(props) => props.theme.spacing.md};
  border-radius: ${(props) => props.theme.borderRadius.full};
  transition: all ${(props) => props.theme.transitions.fast};
  position: relative;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    background: rgba(99, 102, 241, 0.1);
    transform: translateY(-1px);
  }

  &.active {
    color: ${(props) => props.theme.colors.primary};
    background: rgba(99, 102, 241, 0.15);
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes.xl};
  width: 45px;
  height: 45px;
  border-radius: ${(props) => props.theme.borderRadius.base};
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all ${(props) => props.theme.transitions.fast};

  &:hover {
    background: rgba(99, 102, 241, 0.1);
    border-color: rgba(99, 102, 241, 0.3);
    transform: translateY(-1px);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 10, 10, 0.98);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xl};
  z-index: 999;
`;

const MobileNavLink = styled(motion.a)`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes["2xl"]};
  font-weight: 600;
  transition: color ${(props) => props.theme.transitions.fast};

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <HeaderContainer
      scrolled={scrolled}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Nav>
        <Logo
          onClick={() => scrollToSection("#home")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiCode />
          <span>ABISHEK</span>
          <span style={{ fontSize: "0.7em", fontWeight: 400, opacity: 0.8 }}>
            MAHESH
          </span>
        </Logo>

        <NavLinks>
          {navItems.map((item, index) => (
            <NavLink
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.name}
            </NavLink>
          ))}
        </NavLinks>

        <MobileMenuButton
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </MobileMenuButton>
      </Nav>

      {mobileMenuOpen && (
        <MobileMenu
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {navItems.map((item, index) => (
            <MobileNavLink
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.name}
            </MobileNavLink>
          ))}
        </MobileMenu>
      )}
    </HeaderContainer>
  );
};

export default Header;
