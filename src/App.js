import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Services from "./components/Services";
import Software from "./components/Software";
import MobileApp from "./components/MobileApp";
import Websites from "./components/Websites";
import Revolution from "./components/Revolution";
import About from "./components/About";
import Contact from "./components/Contact";
import Estimate from "./components/Estimate";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import ScrollToTop from "./scripts/ScrollToTop.js";
import { useState } from "react";
import { ThemeProvider } from '@mui/styles'; // using makeStyles? Keep this
import { createTheme } from '@mui/material/styles';
const theme = createTheme();
// Main App component
const App = () => {
  const [value, setValue] = useState(0);
  const [selected, setSelected] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollToTop />
        <Header value={value} setValue={setValue} selected={selected} setSelected={setSelected} />
        <Routes>
          <Route path="/" element={<LandingPage setValue={setValue} setSelected={setSelected} />} />
          <Route path="/services" element={<Services setValue={setValue} setSelected={setSelected} />} />
          <Route path="/software" element={<Software setValue={setValue} setSelected={setSelected} />} />
          <Route path="/mobileapps" element={<MobileApp setValue={setValue} setSelected={setSelected} />} />
          <Route path="/websites" element={<Websites setValue={setValue} setSelected={setSelected} />} />
          <Route path="/revolution" element={<Revolution setValue={setValue} setSelected={setSelected} />} />
          <Route path="/about" element={<About setValue={setValue} setSelected={setSelected} />} />
          <Route path="/contact" element={<Contact setValue={setValue} setSelected={setSelected} />} />
          <Route path="/estimate" element={<Estimate setValue={setValue} setSelected={setSelected} />} />
        </Routes>
        <Footer setValue={setValue} setSelected={setSelected} />
      </BrowserRouter>
    </ThemeProvider>
  );
};
export default App;