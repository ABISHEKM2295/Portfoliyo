export const theme = {
  colors: {
    // Professional dark palette
    background: "#0A0A0A",
    backgroundSecondary: "#111111",
    surface: "#1A1A1A",
    surfaceLight: "#222222",
    surfaceHover: "#2A2A2A",

    // Refined accent colors
    primary: "#3B82F6",
    primaryLight: "#60A5FA",
    primaryDark: "#2563EB",
    secondary: "#8B5CF6",
    secondaryLight: "#A78BFA",
    accent: "#10B981",
    accentLight: "#34D399",

    // Typography scale
    text: "#FFFFFF",
    textSecondary: "#D1D5DB",
    textMuted: "#9CA3AF",
    textDim: "#6B7280",

    // Status colors
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444",

    // Borders
    border: "rgba(255, 255, 255, 0.08)",
    borderLight: "rgba(255, 255, 255, 0.12)",
    borderFocus: "rgba(59, 130, 246, 0.4)",

    // Subtle gradients for accents only
    gradient: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)",
    gradientHover: "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",

    // Card styles
    cardBackground: "rgba(26, 26, 26, 0.6)",
    cardBorder: "rgba(255, 255, 255, 0.06)",

    // Glass effect (minimal)
    glassLight: "rgba(26, 26, 26, 0.4)",
    glassHeavy: "rgba(26, 26, 26, 0.7)",
    borderGlow: "rgba(59, 130, 246, 0.15)",
  },
  fonts: {
    primary:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace",
    heading: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  },
  fontSizes: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
    "6xl": "3.75rem", // 60px
    "7xl": "4.5rem", // 72px
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
  spacing: {
    xs: "0.5rem", // 8px
    sm: "1rem", // 16px
    md: "1.5rem", // 24px
    lg: "2rem", // 32px
    xl: "3rem", // 48px
    "2xl": "4rem", // 64px
    "3xl": "6rem", // 96px
    "4xl": "8rem", // 128px
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.3)",
    base: "0 2px 4px 0 rgba(0, 0, 0, 0.4)",
    md: "0 4px 8px 0 rgba(0, 0, 0, 0.5)",
    lg: "0 8px 16px 0 rgba(0, 0, 0, 0.6)",
    xl: "0 12px 24px 0 rgba(0, 0, 0, 0.7)",
    "2xl": "0 24px 48px 0 rgba(0, 0, 0, 0.8)",
    // Subtle focus shadows
    focus: "0 0 0 3px rgba(59, 130, 246, 0.2)",
  },
  borderRadius: {
    sm: "0.25rem", // 4px
    base: "0.375rem", // 6px
    md: "0.5rem", // 8px
    lg: "0.75rem", // 12px
    xl: "1rem", // 16px
    "2xl": "1.5rem", // 24px
    full: "9999px",
  },
  transitions: {
    fast: "150ms cubic-bezier(0.4, 0, 0.2, 1)",
    base: "200ms cubic-bezier(0.4, 0, 0.2, 1)",
    slow: "300ms cubic-bezier(0.4, 0, 0.2, 1)",
  },
};
