import React, { useState } from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import CallToAction from "./ui/CallToAction";

import vision from "../assets/vision.svg";
import consultation from "../assets/consultationIcon.svg";
import mockup from "../assets/mockupIcon.svg";
import design from "../assets/designIcon.svg";
import review from "../assets/reviewIcon.svg";
import build from "../assets/buildIcon.svg";
import launch from "../assets/launchIcon.svg";
import maintain from "../assets/maintain.png";
import iterate from "../assets/iterateIcon.svg";
import glass from "../assets/glas.png";
import rocket from "../assets/rocket.png";
import technologyAnimation from "../animations/technologyAnimation/data.json";

const sections = [
  {
    title: "Vision",
    description: `Our vision is to be recognized as a strategic partner who not only meets 
expectations but consistently exceeds them.
We are committed to building long-term relationships by empowering our clients 
through innovation, integrity, and consistent performance.
 We will always deliver services that are professional and proactive, 
  ensuring our clients receive solutions that are:

❖ Reliable
❖ Knowledgeable
❖ Pragmatic
❖ Trusted`,
    image: vision,
  },
  {
    title: "Technology",
    description: `In 2013, Facebook invented a new way of building websites. This new system, React.js, completely revolutionizes the process and practice of website development.

Instead of chaining together long individual pages, like traditional websites, React websites are built with little chunks of code called components. These components are faster, easier to maintain, and are easily reused and customized, each serving a singular purpose.

Two years later they shocked the world by releasing a similar system, React Native, for producing iOS and Android apps. Instead of having to master two completely separate development platforms, you can leverage the knowledge you already possessed from building websites and reapply it directly! This was a huge leap forward.

This technology is now being used by companies like AirBnB, Microsoft, Netflix, Pinterest, Skype, Tesla, UberEats, and when Facebook purchased Instagram large portions of it were even rebuilt using React.

Developers have since built on top of these systems by automating project setup and deployment, allowing creators to focus as much as possible on their work itself.

These technical advancements translate into savings by significantly reducing the workload and streamlining the workflow for developing new pieces of software, while also lowering the barrier to entry for mobile app development.

This puts personalization in your pocket — faster, better, and more affordable than ever before.`,
    animation: technologyAnimation,
  },
  {
    title: "Consultation",
    description: `Our process begins the moment you realize you need a piece of technology for your business. Whether you already have an idea for where to start and what to do, or if you just know you want to step things up, our initial consultation will help you examine your business holistically to find the best solutions.`,
    image: consultation,
  },
  {
    title: "Mockup",
    description: `Then it’s time for us to start on your minimum viable product. That’s just a fancy term for a mockup, which doesn’t include colors, images, or any other polished design elements, but captures the essential layout structure and functionality.

This helps us understand and refine the solution itself before getting distracted by specifics and looks.`,
    image: mockup,
  },
  {
    title: "Design",
    description: `Using the mockups and notes taken during the consultation as guides, we will start ironing out what the final product will look like. This also involves using any brand material like fonts, colors, and logos to extend the experience you’re already familiar with.`,
    image: design,
  },
  {
    title: "Review",
    description: `A second round of review is essential to our goal of creating exactly what you want, exactly how you want it.

This time we’ll be going over the finalized designs in another fully interactive demonstration. Again this gives you an opportunity to tweak things and make sure we get everything right the first time.`,
    image: glass,
  },
  {
    title: "Build",
    description: `Here’s where we get down to business.

Engineering begins after your approval on the final designs. We start by scaffolding out the project on a high level, prioritizing some areas over others.

Each area is then developed in order of importance until ready to be connected to the next piece.

Typically the backend, behind the scenes operations are completed first. Once all the services are in place we can then create the front end, user side of things.

Finishing the application doesn’t mean we’re done though, because we use extensive testing to guarantee compatibility with all intended devices.

Only after our rigorous examinations will we accept a product as finished, then pushing it through the production pipeline. This produces an optimized, compressed, consumer version of the code and assets ready for deployment.`,
    image: build,
  },
  {
    title: "Launch",
    description: `The moment we’ve all been waiting for.

When construction comes to a close you’re the first one to know. We’ll give our final demonstration to show off your shiny new software in the wild so you know exactly how it will look to your users.

When you say the word, we press the button and launch your project out to the public. We’re there to ensure everything goes to plan so you can start reaping the rewards of your technological investment immediately.`,
    image: rocket,
  },
  {
    title: "Maintain",
    description: `Our work doesn’t end there.

After a successful launch we keep in close contact to listen to feedback and hear how the project is being received.

From there on out we make sure your application is kept up to date and taking advantage of the best features and practices available. When new developments arise or new techniques are discovered in future projects, we will implement those advancements in your project as part of our routine maintenance.`,
    image: maintain,
  },
  {
    title: "Iterate",
    description: `The cycle repeats whenever you come up with a new idea for extending your current project, or come up with a brand new system entirely.

By planning for future features and changes we can build and evolve your application over time. As new use cases and customer needs develop we can respond with continuous integration of new content.

Our iterative process will keep you current and competitive, allowing you to quickly implement changes instead of waiting months for a single update.`,
    image: iterate,
  },
];

const ServicesSections = () => {
  const [expanded, setExpanded] = useState(false);
  const [expandedTech, setExpandedTech] = useState(false);

  return (
    <Box sx={{ px: { xs: 2, md: 4 }, py: { xs: 6, md: 8 }, fontSize: "0.95rem" }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "1rem", sm: "1.1rem" },
              fontWeight: 800,
              mb: 5,
            }}
          >
            The Revolution
          </Typography>
        </motion.div>
      </Container>

      {sections.map((section, index) => {
        const isFirst = index === 0;
        const isTechnology = section.title === "Technology";
        const isLastThree = index >= sections.length - 3;
        const isBlue = [5, 7, 9].includes(index);
        const isConsultation = section.title === "Consultation";
        const isReview = section.title === "Review";

        const fullText = section.description;
        const shortText = fullText.split("\n").slice(0, 4).join("\n");

        return (
          <React.Fragment key={index}>
            {isConsultation && (
              <Container maxWidth="lg">
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.1rem" },
                      fontWeight: 800,
                      mb: 3,
                    }}
                  >
                    Process
                  </Typography>
                </motion.div>
              </Container>
            )}

            <Grid
              container
              component={Container}
              maxWidth="lg"
              sx={{
                mb: isLastThree ? 6 : { xs: 6, md: 10 },
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                backgroundColor: isBlue ? "#1976d2" : "transparent",
                borderRadius: isBlue ? 3 : 0,
                py: isBlue ? 4 : 0,
              }}
            >
              {/* Text */}
              <Grid
                item
                xs={12}
                md={7}
                sx={{
                  flexBasis: { xs: "100%", md: "60%" },
                  pr: { md: 4 },
                  py: isLastThree ? 2 : 4,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 2,
                      fontSize: "1rem",
                      color: isBlue ? "#fff" : "inherit",
                      fontWeight: 600,
                    }}
                  >
                    {section.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: isLastThree ? "0.85rem" : "0.95rem",
                      whiteSpace: "pre-line",
                      lineHeight: isLastThree ? 1.4 : 1.6,
                      color: isBlue ? "#fff" : "inherit",
                    }}
                  >
                    {isFirst && !expanded
                      ? shortText
                      : isTechnology && !expandedTech
                      ? fullText.split("\n").slice(0, 6).join("\n")
                      : fullText}
                  </Typography>

                  {isFirst && (
                    <Box mt={2}>
                      <Typography
                        variant="body2"
                        onClick={() => setExpanded((prev) => !prev)}
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

                  {isTechnology && (
                    <Box mt={2}>
                      <Typography
                        variant="body2"
                        onClick={() => setExpandedTech((prev) => !prev)}
                        sx={{
                          color: "#1976d2",
                          cursor: "pointer",
                          fontWeight: 500,
                          "&:hover": { textDecoration: "underline" },
                        }}
                      >
                        {expandedTech ? "Read Less" : "Read More"}
                      </Typography>
                    </Box>
                  )}
                </motion.div>
              </Grid>

              {/* Image or Animation */}
              <Grid
                item
                xs={12}
                md={5}
                sx={{
                  flexBasis: { xs: "100%", md: "40%" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: { xs: 4, md: 0 },
                }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                  {isTechnology ? (
                    <Box sx={{ width: { xs: 250, sm: 300, md: 350 } }}>
                      <Lottie animationData={section.animation} loop />
                    </Box>
                  ) : (
                    <Box
                      component="img"
                      src={section.image}
                      alt={section.title}
                      sx={{
                        width: isLastThree
                          ? { xs: "90%", sm: 220, md: 250 }
                          : { xs: "100%", sm: 300, md: 350 },
                        height: "auto",
                        maxHeight: isReview ? 180 : "none",
                        objectFit: "contain",
                        borderRadius: 2,
                      }}
                    />
                  )}
                </motion.div>
              </Grid>
            </Grid>
          </React.Fragment>
        );
      })}

      {/* Call to Action */}
      <Box
        sx={{
          width: "100vw",
          position: "relative",
          left: "50%",
          right: "50%",
          top: "65px", // reduced from 65px
          marginLeft: "-50vw",
          marginRight: "-50vw",
        }}
      >
        <CallToAction />
      </Box>
    </Box>
  );
};

export default ServicesSections;
