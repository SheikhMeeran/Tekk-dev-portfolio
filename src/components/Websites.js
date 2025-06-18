import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Typography,
  IconButton,
  useMediaQuery,
  Box,
  Button,
  Container,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { motion, useInView } from "framer-motion";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import CallToAction from "./ui/CallToAction";
import TechStack from "./TechStack";

const Websites = (props) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const [expanded, setExpanded] = useState(false);

  const handleToggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Box sx={{ width: "100%", overflowX: "hidden", py: 0 }}>
      <Container
        maxWidth="lg"
        disableGutters
        sx={{ px: { xs: 2, sm: 4 }, py: 0 }}
      >
        <Grid container direction="column" spacing={6}>
          {/* Navigation Arrows */}
          {!isSmall && (
            <Grid
              item
              container
              justifyContent="space-between"
              alignItems="center"
            >
              <IconButton
                component={Link}
                to="/mobileapps"
                onClick={() => {
                  props.setValue(1);
                  props.setSelected(1);
                }}
                sx={{ "&:hover": { backgroundColor: "transparent" } }}
              >
                <img
                  src={backArrow}
                  alt="Back to Mobile App Development Page"
                />
              </IconButton>

              <IconButton
                component={Link}
                to="/services"
                onClick={() => {
                  props.setValue(1);
                  props.setSelected(null);
                }}
                sx={{ "&:hover": { backgroundColor: "transparent" } }}
              >
                <img src={forwardArrow} alt="Forward to Services Page" />
              </IconButton>
            </Grid>
          )}

          {/* Software Development Section */}
          <Grid item>
            <motion.div
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <Box sx={{ pl: 2 }}>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#000000",
                  }}
                  gutterBottom
                >
                  Software Development
                </Typography>

                <Typography
                  variant="body1"
                  paragraph
                  sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}
                >
                  “Blend of Technology Diversity, Product Scalability,
                  Innovative Design, Agile Development”
                </Typography>

                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8 }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      maxHeight: expanded ? "none" : 200,
                      overflow: "hidden",
                      transition: "max-height 0.5s ease",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="body1"
                        paragraph
                        sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}
                      >
                        At TekkDev, we offer in-house development services for
                        businesses, startups, enterprises with a strong emphasis
                        on business analysis, application design, robust
                        database architecture ensured through complete end to
                        end quality of the software.
                      </Typography>

                      <Typography
                        variant="body1"
                        paragraph
                        sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}
                      >
                        Our Software Development Methodology operates on
                        flexible, cost-effective engagement options, our
                        cross-functional professionals can function as short- or
                        long-term solutions for your development needs...
                      </Typography>

                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "0.95rem",
                          lineHeight: 1.6,
                          fontWeight: 500,
                        }}
                      >
                        Vertical - Healthcare
                      </Typography>

                      <Typography
                        variant="body1"
                        paragraph
                        sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}
                      >
                        We have in-house subject matter expert who has completed
                        specialized projects... built on best healthcare
                        practices, paperless, modular, interoperable...
                      </Typography>

                      <Typography
                        variant="h5"
                        sx={{
                          fontSize: "0.95rem",
                          lineHeight: 1.6,
                          fontWeight: 500,
                        }}
                      >
                        Vertical - NFT
                      </Typography>

                      <Typography
                        variant="body1"
                        paragraph
                        sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}
                      >
                        We create customized NFT marketplaces... platforms
                        according to your business requirements... where you can
                        create, buy, sell and store these NFTs...
                      </Typography>
                    </Box>

                    {!expanded && (
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: 60,
                          background: `linear-gradient(to top, ${theme.palette.background.default}, transparent)`,
                        }}
                      />
                    )}
                  </Box>

                  <Button
                    variant="text"
                    onClick={handleToggleExpand}
                    sx={{
                      mt: 1,
                      alignSelf: "flex-start",
                      color: theme.palette.primary.main,
                    }}
                  >
                    {expanded ? "Read Less" : "Read More"}
                  </Button>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>

          {/* Tech Stack Section */}
          <Grid item sx={{ mb: 0 }}>
            <TechStack />
            <Typography
              variant="body1"
              paragraph
              sx={{
                mb: 1,
                wordBreak: "break-word",
                fontSize: "0.95rem",
                marginBottom: "4rem",
              }}
            >
              Our team specilaizes in building you the robust yet flexible architecture, where application development is supported though modular architecture and built on scalable microservices components.  Our purpose built, client specific architecture covers on-premise as well as deployment based on cloud architecture. Our team has deployed, managed and developed a large scale multi-tenant architectures in past.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box sx={{ width: "100%", mt: { xs: 2, md: 3 } }}>
        <CallToAction
          setValue={props.setValue}
          setSelected={props.setSelected}
        />
      </Box>
    </Box>
  );
};

export default Websites;
