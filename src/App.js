import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Certifications from "./components/Certifications/Certifications";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";

const AppContainer = styled.div`
  min-height: 100vh;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  position: relative;
  overflow: hidden;
`;

const ScrollProgress = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: ${(props) => props.theme.colors.gradient};
  transform-origin: left center;
  z-index: 2000;
`;

const BackgroundCanvas = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
`;

const GridLayer = styled(motion.div)`
  position: absolute;
  inset: -10%;
  background-image:
    linear-gradient(
      rgba(255, 255, 255, 0.035) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.035) 1px,
      transparent 1px
    );
  background-size: 120px 120px;
  filter: blur(0.5px);
  opacity: 0.18;
`;

const AuroraLayer = styled(motion.div)`
  position: absolute;
  width: 80vw;
  height: 80vw;
  top: -20%;
  right: -10%;
  background: ${(props) => props.theme.colors.gradientAurora};
  filter: blur(160px);
  opacity: 0.6;
`;

const GradientOrb = styled(motion.div)`
  position: absolute;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.gradient};
  filter: blur(120px);
  opacity: 0.35;
  mix-blend-mode: screen;
`;

const ShootingLine = styled(motion.div)`
  position: absolute;
  width: 180px;
  height: 2px;
  background: ${(props) => props.theme.colors.gradient};
  border-radius: ${(props) => props.theme.borderRadius.full};
  opacity: 0.4;
`;

const NoiseLayer = styled(motion.div)`
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
    rgba(255, 255, 255, 0.05) 1px,
    transparent 1px
  );
  background-size: 3px 3px;
  opacity: 0.12;
  mix-blend-mode: soft-light;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
`;

function App() {
  const { scrollYProgress } = useScroll();
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const auroraY = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const dotsY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);

  useEffect(() => {
    const handlePointerMove = (event) => {
      pointerX.set(event.clientX / window.innerWidth);
      pointerY.set(event.clientY / window.innerHeight);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [pointerX, pointerY]);

  const orbOffsetX = useTransform(pointerX, [0, 1], [-180, 180]);
  const orbOffsetY = useTransform(pointerY, [0, 1], [-120, 120]);
  const secondaryOrbX = useTransform(pointerX, [0, 1], [160, -160]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <AppContainer>
          <ScrollProgress style={{ scaleX: scrollYProgress }} />

          <BackgroundCanvas aria-hidden>
            <GridLayer style={{ y: gridY }} />
            <AuroraLayer style={{ y: auroraY }} />
            <GradientOrb
              style={{ x: orbOffsetX, y: orbOffsetY }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.4 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <GradientOrb
              style={{ x: secondaryOrbX, y: orbOffsetY }}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 0.25 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
            />
            <ShootingLine
              style={{ y: dotsY }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.6, 0], x: ["-35vw", "35vw"] }}
              transition={{
                repeat: Infinity,
                duration: 7,
                ease: "linear",
              }}
            />
            <NoiseLayer style={{ y: dotsY }} />
          </BackgroundCanvas>

          <ContentWrapper>
          <Header />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
          <Footer />
          </ContentWrapper>
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
