import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./reset.css";
import { Router } from "./router";
import Footer from "./components/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
