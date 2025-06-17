import React from "react";
import {
  Box,
  Grid,
  Typography,
  useMediaQuery,
  Avatar,
  Container,
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
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

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
      <Container maxWidth="xl" sx={{ pb: 10 }}>
        {/* Heading */}
        <Box
          sx={{
            px: { xs: 3, sm: 6 },
            mt: { xs: 3, sm: 6 },
            mb: { xs: 2, sm: 4 },
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Typography
            variant="h2"
            gutterBottom
            sx={{ fontWeight: 600, fontSize: { xs: "2.5rem", md: "1.5rem", sm: "1rem" } }}
          >
            About Us
          </Typography>
        </Box>

        {/* About Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Grid container>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.8,
                maxWidth: "60em",
                px: { xs: 2, sm: 6 },
                mb: 8,
                textAlign: "left",
              }}
            >
              TekkDev, is a software development and cybersecurity company
              established as part of joint venture of Computer Marketing
              Company (CMC) and GCS Pvt Ltd. CMC and GCS are both leading
              companies in the field of Information & Communication Technology
              (ICT) in Pakistan where GCS has expanded operations internationally
              in Nigeria, South Africa, Turkey, UAE in the last few years.
              <br />
              <br />
              TekkDev, currently established operations in Pakistan, engages in
              designing of bespoke customized software solutions in private
              sector on latest technology stack. TekkDev solution design is on
              customers requirements to upgrade existing software through
              intelligent components with reduced development effort and on
              modular or microservices architecture. TekkDev has a range of
              seasoned subject matter experts for Healthcare vertical, to
              design, develop implement a seamless, end to end software solution
              or provide a world class patient centric hospital systems.
              <br />
              <br />
              TekkDev Cybersecurity professionals trained locally and
              internationally with years of established experience of building
              secure infrastructure for a large size national and multinational
              organizations. They excel in designing of the governance framework,
              performing vulnerability assessment and penetration testing,
              incident reporting, performing cloud assessments to design a
              scalable secure cloud based architecture, help client achieve
              ISO27001 and scaling up the organization capability through
              inducting of NIST framework. TekkDev Cybersecurity consultants
              have an established track record in helping organization’s evaluate
              and improve on designing and implementing of security controls and
              policies.
            </Typography>
          </Grid>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={4}
            sx={{ px: { xs: 2, sm: 6 }, mb: 10 }}
          >
            {isMd && (
              <Grid item lg sx={{ textAlign: "center", maxWidth: isXs ? "80%" : "30em" }}>
                <Box
                  component="img"
                  src={history}
                  alt="Company history infographic"
                  sx={{ maxWidth: "100%" }}
                />
              </Grid>
            )}

            <Grid
              item
              container
              direction="column"
              alignItems={isSm ? "center" : "flex-start"}
              lg
              sx={{ maxWidth: "50em" }}
            >
              <Typography variant="h3" gutterBottom>
                Mission
              </Typography>
              <Typography variant="body1" paragraph>
                TekkDev strives to deliver quality security assessment & consulting by:
              </Typography>
              <Typography variant="body1" paragraph>✔ Proactive security analysis</Typography>
              <Typography variant="body1" paragraph>✔ Instilling security awareness</Typography>
              <Typography variant="body1" paragraph>
                ✔ Developing robust security architectures for resilient systems
              </Typography>
            </Grid>

            {!isMd && (
              <Grid item lg sx={{ textAlign: "center", maxWidth: "30em" }}>
                <Box
                  component="img"
                  src={history}
                  alt="Company history infographic"
                  sx={{ maxWidth: "100%" }}
                />
              </Grid>
            )}

            <Testimonials />
          </Grid>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography variant="h3" sx={{ fontWeight: 600 }}>
              Team
            </Typography>
          </Box>

          <Grid
            container
            direction="row"
            justifyContent="center"
            spacing={4}
            sx={{ px: { xs: 2, sm: 6 }, flexWrap: "wrap", mb: 12 }}
          >
            {teamMembers.map((member, index) => (
              <Grid
                item
                key={index}
                sx={{
                  maxWidth: "22em",
                  textAlign: "center",
                  mx: "auto",
                }}
              >
                <StyledAvatar
                  src={member.image}
                  alt={`${member.name}'s profile`}
                  sx={{ mx: "auto" }}
                />
                <Typography variant="h5" sx={{ mt: 2, fontWeight: 600 }}>
                  {member.name}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  {member.title}
                </Typography>
                <Typography variant="body2" paragraph sx={{ mt: 2, textAlign: "justify" }}>
                  {member.bio}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {/* Call To Action Full Width Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Box sx={{ width: "100%", mt: 10 }}>
          <CallToAction setValue={props.setValue} setSelected={props.setSelected} />
        </Box>
      </motion.div>
    </>
  );
};

export default About;
