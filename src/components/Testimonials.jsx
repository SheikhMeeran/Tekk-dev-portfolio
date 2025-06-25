import { useState, useEffect } from 'react';
import GCS from "../assets/GCSS.png"
import Cmc from "../assets/CMS.png"
import Ict from "../assets/ICCT.png"
// import GCS from "../assets/GCS1.png";""
import {
  Box,
  Typography,
  Container,
  Avatar,
  Stack,
  IconButton,
  Fade,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaStar,
  FaArrowLeft,
  FaArrowRight,
} from 'react-icons/fa';

const testimonialsData = [
  {
    text:`GCS started its operations from USA and subsequently established its first office in Pakistan (2007). Over the years, GCS has become known as a leading provider of ICT integrations, diverse technology solutions and services in Pakistan, and expanded its operations in Turkey, Africa and UAE. With Saudi Arabia and China in the planning for the year 2025, our goal is to help our clients stay ahead of the curve and stay competitive in today's fast-paced digital world.`
,
    name: "GCS",
    image: GCS,
  },
  {
text: `• One of Pakistan’s largest IT companies
Integrates diverse hardware and software into unified solutions
Simplifies technology environments for clients
Helps businesses achieve their goals through smart IT alignment
Offers a full suite of solutions, services, and capabilities
Committed to excellence at every level`,

    name: "infocommtech",
    image: Ict,
  },
  {
text: `• Multi-disciplinary team: Engineers, Transport Economists, Geo-Tech Experts, Geologists, QC Specialists, Tech Experts & Technicians
• Delivering impactful professional consulting & engineering services
• Launched an ICT consulting division
• Partnered with leading global InfoSec & tech consulting firms`,
    name: "pakccl",
    role: "Global Brand Manager",
    image: "/images/testimonials/client-3.jpg",
  },
  {
    text: "Striving to remain Pakistan’s #1 company in the field of IT infrastructure by providing most advanced and premium-quality services to our customers.",
    name: "CMC",
    role: "CEO & Founder",
    image: Cmc,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (nextIndex) => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrent(nextIndex);
      setIsVisible(true);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const next = current === testimonialsData.length - 1 ? 0 : current + 1;
      handleChange(next);
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  const handlePrev = () => {
    const prev = current === 0 ? testimonialsData.length - 1 : current - 1;
    handleChange(prev);
  };

  const handleNext = () => {
    const next = current === testimonialsData.length - 1 ? 0 : current + 1;
    handleChange(next);
  };

  const { text, name, image } = testimonialsData[current];

  return (
    <Box
      component="section"
      sx={{
        textAlign: 'center',
        color: 'black',
        position: 'relative',
        background: 'linear-gradient(to right, rgba(255, 255, 255, 0.95))',
        width: '100%',
      }}
    >
      <Container maxWidth="xl" sx={{ py: 10 }}>
        <Typography
          variant="h5"
          fontWeight={600}
          color="black"
          sx={{ fontSize: '0.95rem' }}
        >
          Partners
        </Typography>
        <Box
          sx={{
            height: 4,
            width: 80,
            backgroundColor: 'black',
            mx: 'auto',
            my: 3,
            borderRadius: 2,
          }}
        />
        <Typography variant="subtitle1" sx={{ opacity: 0.8, mb: 6, fontSize: '0.95rem' }}>
          "Partners Who Believe in Our Vision"
        </Typography>

        {/* Testimonial Card */}
        <Fade in={isVisible} timeout={1000}>
          <Box
            sx={{
              backgroundColor: '#fff',
              color: 'black',
              px: 4,
              py: 6,
              borderRadius: 4,
              maxWidth: 800,
              mx: 'auto',
              minHeight: 200,
              position: 'relative',
              boxShadow: 6,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              fontSize: '0.95rem',
            }}
          >
            <Typography variant="body1" sx={{ lineHeight: 1.7, fontSize: '0.95rem' }}>
              <FaQuoteLeft style={{ marginRight: 8, color: 'black', fontSize: 24 }} />
              {text}
              <FaQuoteRight style={{ marginLeft: 8, color: 'black', fontSize: 24 }} />
            </Typography>

            {/* Stars */}
            <Stack direction="row" justifyContent="center" mt={3} spacing={0.5} color="black">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </Stack>

            {/* Avatar */}
            <Box
              sx={{
                position: 'absolute',
                left: '50%',
                transform: 'translate(-50%, 50%)',
                bottom: -10,
              }}
            >
              <Avatar
                src={image}
                alt={name}
                sx={{
                  width: isSm ? 64 : 80,
                  height: isSm ? 64 : 80,
                  // border: '1px solid black',
                  boxShadow: 3,
                }}
              />
            </Box>
          </Box>
        </Fade>

        {/* Name */}
        <Typography variant="h5" fontWeight={700} mt={10}>
          {name}
        </Typography>

        {/* Navigation Buttons */}
        <Stack direction="row" justifyContent="center" spacing={2} mt={4}>
          <IconButton onClick={handlePrev} sx={arrowButtonStyles}>
            <FaArrowLeft />
          </IconButton>
          <IconButton onClick={handleNext} sx={arrowButtonStyles}>
            <FaArrowRight />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
}

const arrowButtonStyles = {
  color: 'black',
  // border: '1px solid #ccc',
  width: 54,
  height: 54,
  transition: 'all 0.3s',
  '&:hover': {
    backgroundColor: 'black',
    color: '#fff',
  },
};






