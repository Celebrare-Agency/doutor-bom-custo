import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import "./reset.css";
import { Router } from "./router";
import Footer from "./components/GLOBAL/footer";
import FixedButton from "./components/GLOBAL/buttonWpp fixed";
// import TagManager from 'react-gtm-module'; 
import reportWebVitals from "./reportWebVitals";
import CookieConsentBanner from "./components/GLOBAL/consent-mode/CookieConsentBanner";

// const tagManagerArgs = {
//   gtmId: 'GTM-PQ2XPWNH',
// };
// TagManager.initialize(tagManagerArgs);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CookieConsentBanner />
      <Router />
      <Footer />
      <FixedButton />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
