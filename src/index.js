import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./reset.css";

import { Router } from "./router";
import Footer from "./components/GLOBAL/footer";
import FixedButton from "./components/GLOBAL/buttonWpp fixed";
import CookieConsentBanner from "./components/GLOBAL/CookieConsentBanner";
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'GTM-PQ2XPWNH',
};

const root = ReactDOM.createRoot(document.getElementById("root"));
TagManager.initialize(tagManagerArgs)

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
