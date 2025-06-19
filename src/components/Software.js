import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

import grc from "../assets/a.GRC.jpeg";
import cloud from "../assets/Cloud Assessment.jpg";
import vapt from "../assets/c. VAPT copy.jpeg";
import incidence from "../assets/Incident Response .jpeg";
import consultancy from "../assets/Consultancy .jpg";
import transform from "../assets/g.Digital Transformation v2.jpg";
import manage from "../assets/Managed App Sec.jpeg";

const sections = [
  {
    title: "Governance, Risk and Compliance (GRC)",
    description: `Governance, Risk and Compliance (GRC) is the strategic and secure approach to manage the security risks, to help strategize and enable their business objectives to be compliant with regulatory requirements.

❖ Governance: Includes establishing a framework for organization technology infrastructure, covering policies, procedures, roles and responsibilities.

❖ Risk Management: Identify, assess, manage vulnerabilities and threats that can compromise.

❖ Compliance: Adhere to industry identified mandatory regulations, applicable laws and internal policies.

The benefits of GRC:
• Reduced Risk
• Improved Compliance
• Security Robustness
• Strategically aligning with business goals`,
    image: grc,
  },
  {
    title: "Cloud Assessment",
    description: `❖ Cloud-based business over the years is now the preferred modality of hosting applications. But as maturity is still in process, we “Do More”.

❖ Our Cloud Security Analysts perform complete, holistic mapping of your cloud architecture to prevent breaches, threats and ensure risks are mitigated.`,
    image: cloud,
  },
  {
    title: "Vulnerability Assessment & Penetration Testing",
    description: `Vulnerability assessment is not just identifying weaknesses within the system but laying the foundation to strengthen the entire business ecosystem.

Penetration Testing (Pen Test) is a simulated authorized challenge on a system to evaluate its security.

Our PenTest engineers are skilled to perform:
❖ Blackbox Pen Test
❖ GreyBox Pen Test
❖ WhiteBox Pen Test`,
    image: vapt,
  },
  {
    title: "Incident Response",
    description: `Unfortunately, incidents do occur. When they do, we ensure minimal interruptions and negligible recovery times.

Our Incident Response team:
❖ Works with C-suite, Security, Tech, Legal, and HR teams.
❖ Provide simplified written instructions, guidelines and maintain checklists to help build proactiveness to respond to a repeat incident..`,
    image: incidence,
  },
  {
    title: "Managed AppSec",
    description: `We will do it “just for you“ as your Managed Application Security Service partner in business.

❖ To plan extended capability to do continuous monitoring
❖ Business risk management
❖ Promptly responding with necessary action
❖ Security environment checks and perimeters
❖ Keep up-to-date with rules and compliances`,
    image: manage,
  },
  {
    title: "Consultancy & Advisory",
    description: `As your consultant and advisor partner to help secure your business:

❖ Test true capability of the system while working as the attacker and defender.
❖ Project and demonstrate area of weaknesses and vulnerabilities
❖ Proactively do measures to prevent software applications from near ominous or distant threats 
❖ List down potential security weakness to help develop security policies, rules and procedures.`,
    image: consultancy,
  },
  {
    title: "Digital Transformation",
    description: `New technologies, new CS languages, new requirements all lead to constant need for applications to be updated so risks and threats are outsmarted.

❖ Our Approach is practical and Case Centric
❖ Manage Gaps and focus to Remove redundancies
❖ Aligns your orchestration and automation program 
❖ Outline ways on utilizing optimal resources
❖ Scalable implementation methodologies 
❖ Focused to your specific business needs `,
    image: transform,
  },
];

// Animations
const fadeSlideVariant = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeSlideImageVariant = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
  },
};

const dropInHeading = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ServicesSections = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded((prev) => !prev);

  return (
    <Box sx={{ px: { xs: 2, md: 4 }, py: { xs: 6, md: 8 } }}>
      {/* Top Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={dropInHeading}
      >
        <Typography
          variant="h5"
          sx={{
            fontSize: "1rem",
            fontWeight: 800,
            mb: 5,
            mt: -6, // move up
            
            pl: { xs: 0, sm: 1, md:0}, // move left
            ml: { xs: 1, sm: 2 },
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              color: "#1976d2",
              fontSize: "1.15rem",
            },
          }}
        >
          Cyber Security
        </Typography>
      </motion.div>

      {/* Service Sections */}
      {sections.map((section, index) => {
        const isFirst = index === 0;
        const fullText = section.description;
        const shortText = fullText.split("\n").slice(0, 4).join("\n");

        return (
          <Grid
            container
            key={index}
            sx={{
              mb: { xs: 6, md: 10 },
              maxWidth: "1400px",
              mx: "auto",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            {/* Text Section */}
            <Grid
              item
              xs={12}
              sx={{
                width: { xs: "100%", md: "60%" },
                pr: { md: 4 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeSlideVariant}
              >
                <Typography variant="h5" sx={{ mb: 2, fontSize: "1rem" }}>
                  {section.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "0.95rem",
                    whiteSpace: "pre-line",
                    lineHeight: 1.5,
                  }}
                >
                  {isFirst && !expanded ? shortText : fullText}
                </Typography>

                {isFirst && (
                  <Box mt={2}>
                    <Typography
                      variant="body2"
                      onClick={handleToggle}
                      sx={{
                        color: "#1976d2",
                        cursor: "pointer",
                        fontWeight: 500,
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      {expanded ? "Read Less" : "Read More"}
                    </Typography>
                  </Box>
                )}
              </motion.div>
            </Grid>

            {/* Image Section */}
            <Grid
              item
              xs={12}
              sx={{
                width: { xs: "100%", md: "40%" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: { xs: 4, md: 0 },
              }}
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeSlideImageVariant}
              >
                <Box
                  component="img"
                  src={section.image}
                  alt={section.title}
                  sx={{
                    width: { xs: "100%", sm: 350, md: 300, lg: 350 },
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
        );
      })}
    </Box>
  );
};

export default ServicesSections;
