import App from "./app";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from'react-router-dom';
import "./index.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#2563eb" }, // blue-600
    secondary: { main: "#06b6d4" }, // cyan-500
  },
  shape: { borderRadius: 12 },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
 <BrowserRouter>

    <App />

 
   </BrowserRouter>

 
    </ThemeProvider>
  </StrictMode>
);
