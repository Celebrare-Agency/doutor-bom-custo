import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./reset.css";
// import GA4React from "ga-4-react";
import TagManager from "react-gtm-module";
import { Router } from "./router";
import Footer from "./components/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Manager() {
  useEffect(() => {
    TagManager.initialize({ gtmId: "GTM-PQ2XPWNH" });
  }, []);
}

// try {
//   setTimeout((_) => {
//     const ga4react = new GA4React("G-5Y075YFGMZ");
//     ga4react.initialize().catch((err) => console.error(err));
//   }, 4000);
// } catch (err) {
//   console.error(err);
// }

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
      <Footer />
      <Manager />
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
