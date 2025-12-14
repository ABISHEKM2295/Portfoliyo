import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiCalendar } from "react-icons/fi";

const ProjectsSection = styled.section`
  padding: ${(props) => props.theme.spacing["3xl"]} 0;
  background: transparent;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    width: 70%;
    height: 70%;
    top: 15%;
    right: 5%;
    background: ${(props) => props.theme.colors.gradientAurora};
    filter: blur(140px);
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
  margin: 0 auto ${(props) => props.theme.spacing.xl};
`;

const FilterButtons = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: ${(props) => props.theme.spacing.sm};
  margin-bottom: ${(props) => props.theme.spacing["2xl"]};
  flex-wrap: wrap;
`;

const FilterButton = styled(motion.button)`
  padding: ${(props) => props.theme.spacing.sm}
    ${(props) => props.theme.spacing.md};
  border-radius: ${(props) => props.theme.borderRadius.full};
  font-weight: 500;
  font-size: ${(props) => props.theme.fontSizes.sm};
  transition: all ${(props) => props.theme.transitions.fast};
  border: 1px solid ${(props) => props.theme.colors.border};

  ${(props) =>
    props.active
      ? `
    background: ${props.theme.colors.gradient};
    color: white;
    border-color: transparent;
  `
      : `
    background: ${props.theme.colors.background};
    color: ${props.theme.colors.textSecondary};
    
    &:hover {
      background: ${props.theme.colors.primary};
      color: white;
      border-color: ${props.theme.colors.primary};
    }
  `}
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${(props) => props.theme.spacing.xl};

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${(props) => props.theme.spacing.md};
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${(props) => props.theme.colors.glassHeavy};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  border: 1px solid ${(props) => props.theme.colors.borderGlow};
  overflow: hidden;
  transition: all ${(props) => props.theme.transitions.base};
  position: relative;
  cursor: pointer;
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
      rgba(99, 102, 241, 0.1) 0%,
      rgba(139, 92, 246, 0.1) 50%,
      rgba(6, 182, 212, 0.1) 100%
    );
    opacity: 0;
    transition: all 0.4s ease;
    z-index: 1;
    pointer-events: none;
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
    transform: translateY(-12px) scale(1.03);
    box-shadow: 0 25px 50px rgba(99, 102, 241, 0.25);
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
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 250px;
  background: ${(props) =>
    props.image
      ? `url(${props.image})`
      : props.gradient || props.theme.colors.gradient};
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${(props) =>
      props.image ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0.1)"};
    transition: all ${(props) => props.theme.transitions.base};
  }

  &:hover::before {
    background: ${(props) =>
      props.image ? "rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 0.05)"};
  }
`;

const ProjectImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  transition: all ${(props) => props.theme.transitions.base};

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectMockup = styled.div`
  width: 80%;
  height: 70%;
  background: rgba(255, 255, 255, 0.95);
  border-radius: ${(props) => props.theme.borderRadius.lg};
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &::before {
    content: "";
    width: 100%;
    height: 30px;
    background: linear-gradient(90deg, #ff5f56 0%, #ffbd2e 50%, #27ca3f 100%);
    display: flex;
    align-items: center;
    padding: 0 15px;
  }

  &::after {
    content: "${(props) => props.title || "Project"}";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: ${(props) => props.theme.fontSizes.lg};
    font-weight: 600;
    color: ${(props) => props.theme.colors.primary};
    text-align: center;
  }
`;

const MobileFrame = styled.div`
  width: 60px;
  height: 100px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  position: relative;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  margin: 0 auto;

  &::before {
    content: "";
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 4px;
    background: #333;
    border-radius: 2px;
  }

  &::after {
    content: "${(props) => props.icon || "📱"}";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5rem;
  }
`;

const AIVisualization = styled.div`
  width: 80%;
  height: 70%;
  background: rgba(255, 255, 255, 0.95);
  border-radius: ${(props) => props.theme.borderRadius.lg};
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  padding: 15px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    height: 8px;
    background: linear-gradient(
      90deg,
      ${(props) => props.theme.colors.primary} 0%,
      ${(props) => props.theme.colors.secondary} 50%,
      ${(props) => props.theme.colors.accent} 100%
    );
    border-radius: 4px;
    opacity: 0.8;
  }

  &::after {
    content: "${(props) => props.icon || "🤖"}";
    position: absolute;
    bottom: 15px;
    right: 15px;
    font-size: 2rem;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  }
`;

const ChartBars = styled.div`
  position: absolute;
  bottom: 40px;
  left: 15px;
  right: 50px;
  height: 40px;
  display: flex;
  align-items: end;
  gap: 3px;

  &::before {
    content: "";
    width: 8px;
    height: 60%;
    background: ${(props) => props.theme.colors.primary};
    border-radius: 2px;
    opacity: 0.7;
  }

  &::after {
    content: "";
    width: 8px;
    height: 80%;
    background: ${(props) => props.theme.colors.secondary};
    border-radius: 2px;
    opacity: 0.7;
  }
`;

const ProjectContent = styled.div`
  padding: ${(props) => props.theme.spacing.xl};
  background: rgba(11, 11, 15, 0.65);
  backdrop-filter: blur(6px);
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${(props) => props.theme.spacing.md};
`;

const ProjectTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.xl};
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: ${(props) => props.theme.spacing.xs};
`;

const ProjectDate = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xs};
  color: ${(props) => props.theme.colors.textMuted};
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

const ProjectDescription = styled.p`
  color: ${(props) => props.theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: ${(props) => props.theme.spacing.md};
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing.xs};
  margin-bottom: ${(props) => props.theme.spacing.md};
`;

const TechTag = styled.span`
  background: ${(props) => props.theme.colors.surfaceLight};
  color: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.spacing.xs}
    ${(props) => props.theme.spacing.sm};
  border-radius: ${(props) => props.theme.borderRadius.base};
  font-size: ${(props) => props.theme.fontSizes.xs};
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.sm};
`;

const ProjectLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xs};
  padding: ${(props) => props.theme.spacing.sm}
    ${(props) => props.theme.spacing.md};
  border-radius: ${(props) => props.theme.borderRadius.base};
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: 500;
  transition: all ${(props) => props.theme.transitions.fast};

  ${(props) =>
    props.primary
      ? `
    background: ${props.theme.colors.gradient};
    color: white;
    
    &:hover {
      background: ${props.theme.colors.gradientHover};
    }
  `
      : `
    border: 1px solid ${props.theme.colors.border};
    color: ${props.theme.colors.textSecondary};
    
    &:hover {
      background: ${props.theme.colors.surfaceLight};
      color: ${props.theme.colors.text};
    }
  `}
`;

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [imageErrors, setImageErrors] = useState({});

  const filters = ["All", "Full-stack", "AI", "Web App", "Others"];

  const handleImageError = (projectTitle) => {
    setImageErrors((prev) => ({ ...prev, [projectTitle]: true }));
  };

  const projectsData = [
    {
      title: "Seva Track",
      description:
        "Created a React Native citizen reporting app with live issue submission, tracking, and notifications. Implemented a backend system for automated department routing, issue management, and data-driven municipal insights.",
      tech: ["React Native", "Node.js", "Firebase", "Real-time Notifications"],
      category: "Full-stack",
      date: "September 2025",
      github: "https://github.com/ABISHEKM2295/civic_admin",
      live: "https://www.youtube.com/playlist?list=PLtkaPxxgd0zFG0M8r5j1e6w_TPfhC51Zw",
      icon: "📱",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      mockupType: "mobile",
      image: "/images/projects/sevatrack.jpg",
    },
    {
      title: "Grocery Delivery App",
      description:
        "Built a full-stack grocery-delivery platform (React, Node.js/Express, MongoDB) featuring responsive product browsing, persistent cart, secure user authentication, and RESTful APIs for orders and inventory.",
      tech: ["React", "Node.js", "Express", "MongoDB", "RESTful APIs"],
      category: "Full-stack",
      date: "May 2025",
      github: "https://github.com/ABISHEKM2295/Grocery/tree/main/groceryapp",
      live: "#",
      icon: "🛒",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      mockupType: "web",
      image: "/images/projects/grocery.jpg",
    },
    {
      title: "Trust Review System",
      description:
        "Developed an AI-powered system to detect fake online reviews by analyzing linguistic patterns, user behavior, sentiment anomalies, and metadata features, improving review authenticity verification by 85%.",
      tech: ["Python", "Machine Learning", "NLP", "Scikit-learn", "BERT"],
      category: "AI",
      date: "April 2025",
      github: "https://github.com/ABISHEKM2295/Trust-Review",
      live: "#",
      icon: "🤖",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      mockupType: "ai",
      image: "/images/projects/trustreviw.jpg",
    },
    {
      title: "News Sentiment Analysis",
      description:
        "Developed an end-to-end NLP pipeline to classify over 4,800 news headlines into Positive, Negative, or Neutral sentiments using models like Naive Bayes and BERT.",
      tech: ["Python", "NLP", "BERT", "Naive Bayes", "Sentiment Analysis"],
      category: "AI",
      date: "March 2025",
      github: "https://github.com/ABISHEKM2295/News-Senti",
      live: "#",
      icon: "📰",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      mockupType: "ai",
      image: "/images/projects/sentimentanalysis.jpg",
    },
    {
      title: "Student Portal UI",
      description:
        "Designed a responsive, user-friendly student portal UI in Figma, integrating academic tracking, permission requests, and fee payments into a unified dashboard with dark/light mode and mobile compatibility.",
      tech: ["Figma", "UI/UX Design", "Responsive Design", "Prototyping"],
      category: "Web App",
      date: "February 2025",
      github: "https://github.com/ABISHEKM2295/student_portal_UI-UX",
      live: "https://www.figma.com/design/jz1EEmJRWVajwu8GQvTm4p/HACKATHON?node-id=69-2&p=f&t=DL55TK8qUklBQndj-0",
      icon: "🎓",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      mockupType: "mobile",
      image: "/images/projects/college.jpg",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A collection of my recent work across various technologies and
            domains. Each project represents unique challenges and solutions.
          </SectionSubtitle>
        </SectionHeader>

        <FilterButtons
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <FilterButton
              key={filter}
              active={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </FilterButton>
          ))}
        </FilterButtons>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ProjectsGrid>
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={`${project.title}-${activeFilter}`}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  layout
                  whileHover={{ scale: 1.02 }}
                >
                  <ProjectImage
                    gradient={project.gradient}
                    image={
                      project.image && !imageErrors[project.title]
                        ? project.image
                        : null
                    }
                  >
                    {project.image && !imageErrors[project.title] ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          position: "absolute",
                          top: 0,
                          left: 0,
                          zIndex: 1,
                        }}
                        onError={() => handleImageError(project.title)}
                      />
                    ) : null}
                    <ProjectImagePlaceholder
                      style={{
                        display:
                          project.image && !imageErrors[project.title]
                            ? "none"
                            : "flex",
                        position:
                          project.image && !imageErrors[project.title]
                            ? "absolute"
                            : "relative",
                        zIndex:
                          project.image && !imageErrors[project.title] ? 0 : 2,
                      }}
                    >
                      {project.mockupType === "web" && (
                        <ProjectMockup title={project.title.split(" ")[0]} />
                      )}
                      {project.mockupType === "mobile" && (
                        <MobileFrame icon={project.icon} />
                      )}
                      {project.mockupType === "ai" && (
                        <AIVisualization icon={project.icon}>
                          <ChartBars />
                        </AIVisualization>
                      )}
                    </ProjectImagePlaceholder>
                  </ProjectImage>
                  <ProjectContent>
                    <ProjectHeader>
                      <div>
                        <ProjectTitle>{project.title}</ProjectTitle>
                        <ProjectDate>
                          <FiCalendar />
                          {project.date}
                        </ProjectDate>
                      </div>
                    </ProjectHeader>

                    <ProjectDescription>
                      {project.description}
                    </ProjectDescription>

                    <ProjectTech>
                      {project.tech.map((tech) => (
                        <TechTag key={tech}>{tech}</TechTag>
                      ))}
                    </ProjectTech>

                    <ProjectLinks>
                      <ProjectLink
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiGithub />
                        Code
                      </ProjectLink>
                      <ProjectLink
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        primary
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiExternalLink />
                        Live Demo
                      </ProjectLink>
                    </ProjectLinks>
                  </ProjectContent>
                </ProjectCard>
              ))}
            </AnimatePresence>
          </ProjectsGrid>
        </motion.div>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
