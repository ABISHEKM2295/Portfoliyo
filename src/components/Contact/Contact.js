import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

const ContactSection = styled.section`
  padding: ${(props) => props.theme.spacing["3xl"]} 0;
  background: transparent;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    width: 65%;
    height: 65%;
    top: 5%;
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
  margin: 0 auto;
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${(props) => props.theme.spacing["2xl"]};

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${(props) => props.theme.spacing.xl};
  }
`;

const ContactInfo = styled(motion.div)`
  background: ${(props) => props.theme.colors.glassHeavy};
  padding: ${(props) => props.theme.spacing.xl};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  border: 1px solid ${(props) => props.theme.colors.borderGlow};
  backdrop-filter: blur(24px);
  box-shadow: ${(props) => props.theme.shadows.lg};
`;

const ContactForm = styled(motion.div)`
  background: ${(props) => props.theme.colors.glassHeavy};
  padding: ${(props) => props.theme.spacing.xl};
  border-radius: ${(props) => props.theme.borderRadius.lg};
  border: 1px solid ${(props) => props.theme.colors.borderGlow};
  backdrop-filter: blur(24px);
  box-shadow: ${(props) => props.theme.shadows.lg};
`;

const InfoTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes["2xl"]};
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: ${(props) => props.theme.spacing.lg};
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.md};
  margin-bottom: ${(props) => props.theme.spacing.lg};
  padding: ${(props) => props.theme.spacing.md};
  border-radius: ${(props) => props.theme.borderRadius.base};
  transition: all ${(props) => props.theme.transitions.fast};
  border: 1px solid rgba(255, 255, 255, 0.08);

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateX(4px);
    border-color: ${(props) => props.theme.colors.primary};
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const InfoIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: ${(props) => props.theme.borderRadius.base};
  background: ${(props) => props.theme.colors.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: ${(props) => props.theme.fontSizes.lg};
`;

const InfoDetails = styled.div`
  flex: 1;
`;

const InfoLabel = styled.p`
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.textMuted};
  margin-bottom: ${(props) => props.theme.spacing.xs};
`;

const InfoValue = styled.p`
  font-size: ${(props) => props.theme.fontSizes.base};
  color: ${(props) => props.theme.colors.text};
  font-weight: 500;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.md};
  margin-top: ${(props) => props.theme.spacing.xl};
`;

const SocialLink = styled(motion.a)`
  width: 50px;
  height: 50px;
  border-radius: ${(props) => props.theme.borderRadius.full};
  background: ${(props) => props.theme.colors.surfaceLight};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: ${(props) => props.theme.fontSizes.xl};
  transition: all ${(props) => props.theme.transitions.fast};

  &:hover {
    background: ${(props) => props.theme.colors.primary};
    color: white;
    transform: translateY(-2px);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};
`;

const FormTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes["2xl"]};
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: ${(props) => props.theme.spacing.lg};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.xs};
`;

const FormLabel = styled.label`
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.textSecondary};
  font-weight: 500;
`;

const FormInput = styled.input`
  padding: ${(props) => props.theme.spacing.md};
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: ${(props) => props.theme.borderRadius.base};
  background: rgba(255, 255, 255, 0.03);
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes.base};
  transition: all ${(props) => props.theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.textMuted};
  }
`;

const FormTextarea = styled.textarea`
  padding: ${(props) => props.theme.spacing.md};
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: ${(props) => props.theme.borderRadius.base};
  background: rgba(255, 255, 255, 0.03);
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes.base};
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: all ${(props) => props.theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.textMuted};
  }
`;

const SubmitButton = styled(motion.button)`
  background: ${(props) => props.theme.colors.gradient};
  color: white;
  padding: ${(props) => props.theme.spacing.md}
    ${(props) => props.theme.spacing.xl};
  border-radius: ${(props) => props.theme.borderRadius.base};
  font-weight: 600;
  font-size: ${(props) => props.theme.fontSizes.base};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.spacing.xs};
  transition: all ${(props) => props.theme.transitions.fast};
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.gradientHover};
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const StatusMessage = styled(motion.div)`
  padding: ${(props) => props.theme.spacing.md};
  border-radius: ${(props) => props.theme.borderRadius.base};
  margin-bottom: ${(props) => props.theme.spacing.md};
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: 500;
  text-align: center;
  background: ${(props) =>
    props.type === "success"
      ? "rgba(16, 185, 129, 0.1)"
      : "rgba(239, 68, 68, 0.1)"};
  border: 1px solid
    ${(props) =>
      props.type === "success"
        ? "rgba(16, 185, 129, 0.3)"
        : "rgba(239, 68, 68, 0.3)"};
  color: ${(props) =>
    props.type === "success"
      ? props.theme.colors.success
      : props.theme.colors.error};
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });

  // ============================================
  // ⚠️ IMPORTANT: SETUP REQUIRED ⚠️
  // ============================================
  // To enable email sending, you MUST replace the URL below with your Formspree endpoint
  //
  // Quick Setup (2 minutes):
  // 1. Go to https://formspree.io/ and sign up (FREE)
  // 2. Create a new form, set email to: abishekm2295@gmail.com
  // 3. Copy your form endpoint (looks like: https://formspree.io/f/abc123)
  // 4. Replace the URL below with your actual endpoint
  // 5. Save this file and restart your server
  //
  // See QUICK_SETUP.md for detailed step-by-step instructions
  // ============================================
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xldqzagl";

  // Check if Formspree is configured
  const isFormspreeConfigured =
    FORMSPREE_ENDPOINT !== "https://formspree.io/f/YOUR_FORM_ID";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear status message when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // Validate form
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setSubmitStatus({ type: "error", message: "Please fill in all fields." });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      setIsSubmitting(false);
      return;
    }

    // Check if Formspree is configured
    if (!isFormspreeConfigured) {
      setSubmitStatus({
        type: "error",
        message:
          "Form service not configured yet. Please email me directly at abishekm2295@gmail.com or set up Formspree (see instructions below).",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Send form data to Formspree
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email, // This sets the reply-to address
        }),
      });

      if (response.ok) {
        // Success
        setSubmitStatus({
          type: "success",
          message: "Thank you for your message! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        // Handle Formspree errors
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message: `Failed to send message: ${error.message}. Please try again or email me directly at abishekm2295@gmail.com`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <ContactSection id="contact">
      <Container>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I'm always open to discussing new opportunities and interesting
            projects
          </SectionSubtitle>
        </SectionHeader>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ContactContent>
            <ContactInfo variants={itemVariants}>
              <InfoTitle>Contact Information</InfoTitle>

              <InfoItem>
                <InfoIcon>
                  <FiMail />
                </InfoIcon>
                <InfoDetails>
                  <InfoLabel>Email</InfoLabel>
                  <InfoValue>abishekm2295@gmail.com</InfoValue>
                </InfoDetails>
              </InfoItem>

              <InfoItem>
                <InfoIcon>
                  <FiPhone />
                </InfoIcon>
                <InfoDetails>
                  <InfoLabel>Phone</InfoLabel>
                  <InfoValue>+91 8270808473</InfoValue>
                </InfoDetails>
              </InfoItem>

              <InfoItem>
                <InfoIcon>
                  <FiMapPin />
                </InfoIcon>
                <InfoDetails>
                  <InfoLabel>Location</InfoLabel>
                  <InfoValue>Erode, India</InfoValue>
                </InfoDetails>
              </InfoItem>

              <SocialLinks>
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
            </ContactInfo>

            <ContactForm variants={itemVariants}>
              <FormTitle>Send me a message</FormTitle>

              {submitStatus.message && (
                <StatusMessage
                  type={submitStatus.type}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {submitStatus.message}
                </StatusMessage>
              )}

              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <FormInput
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <FormInput
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <FormLabel htmlFor="subject">Subject</FormLabel>
                  <FormInput
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <FormLabel htmlFor="message">Message</FormLabel>
                  <FormTextarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hello!"
                    required
                  />
                </FormGroup>

                <SubmitButton
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FiSend />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </SubmitButton>
              </Form>
            </ContactForm>
          </ContactContent>
        </motion.div>
      </Container>
    </ContactSection>
  );
};

export default Contact;
