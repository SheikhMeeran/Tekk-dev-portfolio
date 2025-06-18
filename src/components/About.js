import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  useMediaQuery,
  Avatar,
  Container,
  Button,
} from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import { motion } from "framer-motion";

import CallToAction from "../components/ui/CallToAction";
import history from "../assets/history.svg";
import founder from "../assets/waleed-portrait.webp";
import founder2 from "../assets/founder2.jpeg";
import founder3 from "../assets/founder3.jpg";
import Testimonials from "./Testimonials";

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 250,
  height: 250,
  [theme.breakpoints.down("xs")]: {
    width: 200,
    height: 200,
  },
}));

const About = (props) => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const aboutText = `
TekkDev, is a software development and cybersecurity company established as part of joint venture of Computer Marketing Company (CMC) and GCS Pvt Ltd. CMC and GCS are both leading companies in the field of Information & Communication Technology (ICT) in Pakistan where GCS has expanded operations internationally in Nigeria, South Africa, Turkey, UAE in the last few years.

TekkDev, currently established operations in Pakistan, engages in designing of bespoke customized software solutions in private sector on latest technology stack. TekkDev solution design is on customers requirements to upgrade existing software through intelligent components with reduced development effort and on modular or microservices architecture. TekkDev has a range of seasoned subject matter experts for Healthcare vertical, to design, develop implement a seamless, end to end software solution or provide a world class patient centric hospital systems.

TekkDev Cybersecurity professionals trained locally and internationally with years of established experience of building secure infrastructure for a large size national and multinational organizations. They excel in designing of the governance framework, performing vulnerability assessment and penetration testing, incident reporting, performing cloud assessments to design a scalable secure cloud based architecture, help client achieve ISO27001 and scaling up the organization capability through inducting of NIST framework. TekkDev Cybersecurity consultants have an established track record in helping organization’s evaluate and improve on designing and implementing of security controls and policies.
`;

  const teamMembers = [
    {
      name: "Umer Azhar",
      title: "HOD",
      image: founder2,
      bio: `Umer is a strategic leader who helps bridge technology with cybersecurity operations.
        His experience includes managing high-risk security assessments and guiding enterprise-level compliance.`,
    },
    {
      name: "Waleed Ijaz",
      title: "Full Stack Developer",
      image: founder,
      bio: `Waleed specializes in scalable backend services and robust frontend frameworks. His development philosophy emphasizes modularity and performance.`,
    },
    {
      name: "Nofil Iqbal",
      title: "Frontend Developer",
      image: founder3,
      bio: `Nofil is passionate about crafting intuitive UI/UX interfaces with React and MUI. His designs focus on accessibility and responsiveness.`,
    },
  ];

  return (
    <>
      <Container maxWidth="xl" sx={{ pb: 4 }}>
        <Box sx={{ px: { xs: 3, sm: 6 }, mt: { xs: 3, sm: 6 }, mb: { xs: 2, sm: 4 }, textAlign: "left" }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, fontSize: "0.95rem" }}>
            About Us
          </Typography>
        </Box>

        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 400,
              fontSize: "0.95rem",
              lineHeight: 1.8,
              px: { xs: 2, sm: 6 },
              textAlign: "left",
              whiteSpace: "pre-line",
              display: "-webkit-box",
              WebkitLineClamp: expanded ? "none" : 8,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              transition: "all 0.3s ease-in-out",
            }}
          >
            {aboutText}
          </Typography>
          <Box sx={{ px: { xs: 2, sm: 6 }, mt: 2 }}>
            <Button onClick={handleToggle} sx={{ fontSize: "0.85rem", textTransform: "none", px: 0 }}>
              {expanded ? "Read Less" : "Read More"}
            </Button>
          </Box>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <Box sx={{ px: { xs: 2, sm: 6 }, my: 2, p: { xs: 3, md:5 }, backgroundColor: "#fff" }}>
            <Grid
              container
              spacing={{sm:10, md:35}}
              justifyContent="left"
              alignItems="center"
              flexDirection={{ xs: "column", md: "row" }}
            >
              <Grid item xs={12} md={7}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, fontSize: "0.95rem" }}>
                  Mission
                </Typography>
                <Typography variant="body2" paragraph sx={{ fontSize: "0.95rem" }}>
                  TekkDev strives to deliver quality security assessment & consulting by:
                </Typography>
                <Typography variant="body2" paragraph sx={{ fontSize: "0.95rem" }}>
                  ✔ Proactive security analysis
                </Typography>
                <Typography variant="body2" paragraph sx={{ fontSize: "0.95rem" }}>
                  ✔ Instilling security awareness
                </Typography>
                <Typography variant="body2" paragraph sx={{ fontSize: "0.95rem" }}>
                  ✔ Developing robust security architectures for resilient systems
                </Typography>
              </Grid>
              <Grid item xs={12} md={5} sx={{ textAlign: "center" }}>
                <Box
                  component="img"
                  src={history}
                  alt="Mission Illustration"
                  sx={{ maxWidth: 300, width: "100%", borderRadius: 2 }}
                />
              </Grid>
            </Grid>
          </Box>
        </motion.div>

        <Testimonials />

        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, fontSize: "0.95rem" }}>
              Team
            </Typography>
          </Box>
          <Grid container justifyContent="center" spacing={4} sx={{ px: { xs: 2, sm: 6 }, mb: 6 }}>
            {teamMembers.map((member, index) => (
              <Grid
                item
                key={index}
                sx={{
                  maxWidth: "22em",
                  mx: "auto",
                  textAlign: "center",
                  border: "1px solid #ccc",
                  boxShadow: 3,
                  borderRadius: 2,
                  p: 3,
                  backgroundColor: "#fff",
                }}
              >
                <StyledAvatar src={member.image} alt={`${member.name}'s profile`} sx={{ mx: "auto" }} />
                <Typography variant="h5" sx={{ mt: 2, fontWeight: 600, fontSize: "0.95rem" }}>
                  {member.name}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  {member.title}
                </Typography>
                <Typography
                  variant="body2"
                  paragraph
                  sx={{ mt: 2, textAlign: "justify", fontSize: "0.95rem" }}
                >
                  {member.bio}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {/* Partners Section (Call to Action) - moved up from the bottom with mb */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Box sx={{ width: "100%", mt: 4}}>
          <CallToAction setValue={props.setValue} setSelected={props.setSelected} />
        </Box>
      </motion.div>
    </>
  );
};

export default About;
