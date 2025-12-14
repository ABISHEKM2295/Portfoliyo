import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: ${(props) => props.theme.fonts.primary};
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    line-height: ${(props) => props.theme.lineHeights.normal};
    overflow-x: hidden;
    position: relative;
    min-height: 100vh;
    font-weight: ${(props) => props.theme.fontWeights.normal};
  }

  /* Subtle noise texture for depth (optional) */
  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 9999;
    mix-blend-mode: overlay;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color ${(props) => props.theme.transitions.base};
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
    transition: all ${(props) => props.theme.transitions.base};
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Professional scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.backgroundSecondary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.surfaceLight};
    border-radius: ${(props) => props.theme.borderRadius.base};
    border: 2px solid ${(props) => props.theme.colors.backgroundSecondary};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.colors.surfaceHover};
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.fonts.heading};
    font-weight: ${(props) => props.theme.fontWeights.semibold};
    line-height: ${(props) => props.theme.lineHeights.tight};
    letter-spacing: -0.02em;
  }

  p {
    line-height: ${(props) => props.theme.lineHeights.relaxed};
  }

  /* Focus states */
  *:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.primary};
    outline-offset: 2px;
  }

  button:focus-visible,
  a:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.primary};
    outline-offset: 2px;
  }

  /* Selection */
  ::selection {
    background: ${(props) => props.theme.colors.primary};
    color: white;
  }

  ::-moz-selection {
    background: ${(props) => props.theme.colors.primary};
    color: white;
  }

  /* Utility classes */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${(props) => props.theme.spacing.lg};

    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      padding: 0 ${(props) => props.theme.spacing.md};
    }

    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      padding: 0 ${(props) => props.theme.spacing.sm};
    }
  }
`;

export default GlobalStyle;
