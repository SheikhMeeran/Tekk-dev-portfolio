

import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { AnimatePresence } from "framer-motion";

import theme from "./components/ui/Theme";
import ScrollToTop from "./scripts/ScrollToTop";

// UI Components
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";

// Page Components
import LandingPage from "./components/LandingPage";
import Services from "./components/Services";
import Software from "./components/Software";
import MobileApp from "./components/MobileApp";
import Websites from "./components/Websites";
import Revolution from "./components/Revolution";
import About from "./components/About";
import Contact from "./components/Contact";
import Estimate from "./components/Estimate";

// Routes with Animation
const AnimatedRoutes = ({ pageProps }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage {...pageProps} />} />
        <Route path="/services" element={<Services {...pageProps} />} />
        <Route path="/software" element={<Software {...pageProps} />} />
        <Route path="/mobileapps" element={<MobileApp {...pageProps} />} />
        <Route path="/websites" element={<Websites {...pageProps} />} />
        <Route path="/revolution" element={<Revolution {...pageProps} />} />
        <Route path="/about" element={<About {...pageProps} />} />
        <Route path="/contact" element={<Contact {...pageProps} />} />
        <Route path="/estimate" element={<Estimate {...pageProps} />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [value, setValue] = useState(0);
  const [selected, setSelected] = useState(null);
  const pageProps = { setValue, setSelected };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollToTop />
        <Header value={value} setValue={setValue} selected={selected} setSelected={setSelected} />
        <AnimatedRoutes pageProps={pageProps} />
        <Footer setValue={setValue} setSelected={setSelected} />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;





