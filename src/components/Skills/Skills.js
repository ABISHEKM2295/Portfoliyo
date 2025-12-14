import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FiCode,
  FiLayers,
  FiDatabase,
  FiTool,
  FiMonitor,
  FiServer,
  FiCpu,
  FiGitBranch,
} from "react-icons/fi";

const SkillsSection = styled.section`
  padding: ${(props) => props.theme.spacing["3xl"]} 0;
  background: transparent;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    width: 60%;
    height: 60%;
    top: 10%;
    left: 20%;
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${(props) => props.theme.spacing.xl};
  perspective: 1200px;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${(props) => props.theme.spacing.md};
  }
`;

const SkillCategory = styled(motion.div)`
  background: ${(props) => props.theme.colors.glassLight};
  padding: ${(props) => props.theme.spacing.xl};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all ${(props) => props.theme.transitions.base};
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(22px);
  box-shadow: ${(props) => props.theme.shadows.md};

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
    transition: all 0.4s ease;
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(
      45deg,
      ${(props) => props.theme.colors.primary},
      ${(props) => props.theme.colors.secondary},
      ${(props) => props.theme.colors.accent},
      ${(props) => props.theme.colors.primary}
    );
    background-size: 400% 400%;
    border-radius: ${(props) => props.theme.borderRadius.lg};
    opacity: 0;
    z-index: -1;
    transition: all 0.4s ease;
    animation: gradientShift 3s ease infinite;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02) rotateX(2deg);
    box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
    border-color: transparent;

    &::before {
      opacity: 1;
    }

    &::after {
      opacity: 1;
    }
  }

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.sm};
  margin-bottom: ${(props) => props.theme.spacing.lg};
`;

const CategoryIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: ${(props) => props.theme.borderRadius.base};
  background: ${(props) => props.theme.colors.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: ${(props) => props.theme.fontSizes.xl};
  box-shadow: ${(props) => props.theme.shadows.primary};
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
`;

const CategoryTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing.sm};
`;

const SkillTag = styled(motion.span)`
  background: rgba(255, 255, 255, 0.05);
  color: ${(props) => props.theme.colors.textSecondary};
  padding: ${(props) => props.theme.spacing.xs}
    ${(props) => props.theme.spacing.sm};
  border-radius: ${(props) => props.theme.borderRadius.full};
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all ${(props) => props.theme.transitions.fast};

  &:hover {
    background: ${(props) => props.theme.colors.primary};
    color: white;
    transform: translateY(-2px);
  }
`;

const Skills = () => {
  const skillsData = [
    {
      icon: <FiMonitor />,
      title: "Frontend Technologies",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "React.js",
      ],
    },
    {
      icon: <FiLayers />,
      title: "Frameworks & Libraries",
      skills: [
        "React.js",
        "Tailwind CSS",
        "Bootstrap",
        "Flask",
        "Express.js",
      ],
    },
    {
      icon: <FiCode />,
      title: "Programming Languages",
      skills: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript"],
    },
    {
      icon: <FiDatabase />,
      title: "Databases & Cloud",
      skills: [
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "Firebase",
      ],
    },
    {
      icon: <FiServer />,
      title: "Backend & APIs",
      skills: [
        "Node.js",
        "Express.js",
        "Flask",
        "RESTful APIs",
      ],
    },
    {
      icon: <FiTool />,
      title: "Development Tools",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
      ],
    },
    {
      icon: <FiGitBranch />,
      title: "Design & Architecture",
      skills: [
        "Figma",
        "Adobe XD",
        "Responsive Design",
      ],
    },
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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <SkillsSection id="skills">
      <Container>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Skills & Expertise
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A comprehensive overview of my technical skills and areas of
            expertise
          </SectionSubtitle>
        </SectionHeader>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SkillsGrid>
            {skillsData.map((category, index) => (
              <SkillCategory
                key={category.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <CategoryHeader>
                  <CategoryIcon>{category.icon}</CategoryIcon>
                  <CategoryTitle>{category.title}</CategoryTitle>
                </CategoryHeader>

                <SkillsList>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillTag
                      key={skill}
                      variants={skillVariants}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </SkillTag>
                  ))}
                </SkillsList>
              </SkillCategory>
            ))}
          </SkillsGrid>
        </motion.div>
      </Container>
    </SkillsSection>
  );
};

export default Skills;
