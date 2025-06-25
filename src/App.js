import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { AnimatePresence } from "framer-motion";

import theme from "./components/ui/Theme";

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
import Testimonials from "./components/Testimonials";

// Scroll to Top on Route Change
import ScrollToTop from "./components/ScrollToTop";

// Animated Routes Component
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
        <Route path="/evolution" element={<Revolution {...pageProps} />} />
        <Route path="/about" element={<About {...pageProps} />} />
        <Route path="/contact" element={<Contact {...pageProps} />} />
        <Route path="/estimate" element={<Estimate {...pageProps} />} />
        <Route path="/testimonials" element={<Testimonials {...pageProps} />} />
      </Routes>
    </AnimatePresence>
  );
};

// Main App Component
const App = () => {
  const [value, setValue] = useState(0);
  const [selected, setSelected] = useState(null);
  const pageProps = { setValue, setSelected };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollToTop />
        <div className="main-container">
          <Header
            value={value}
            setValue={setValue}
            selected={selected}
            setSelected={setSelected}
          />
          <main className="content">
            <AnimatedRoutes pageProps={pageProps} />
          </main>
          <Footer setValue={setValue} setSelected={setSelected} />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;