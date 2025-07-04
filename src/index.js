import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App.js";

import { ThemeProvider } from '@mui/styles'; // using makeStyles? Keep this
import { createTheme } from '@mui/material/styles';
import "./index.css"; // ← make sure global styles are imported here

const theme = createTheme();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
