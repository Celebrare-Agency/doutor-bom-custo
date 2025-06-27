import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./reset.css";
import { Router } from "./router";
import Footer from "./components/GLOBAL/footer";
import FixedButton from "./components/GLOBAL/buttonWpp fixed";
import TagManager from "react-gtm-module";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { injectContentsquareScript } from "@contentsquare/tag-sdk";

injectContentsquareScript({
  siteId: "5346266",
  async: true, // Optional: Set to false to wait for script execution until after document parsing.
  defer: false, // Optional: Set to true to defer script execution after document parsing.
});

const tagManagerArgs = {
  gtmId: "GTM-PQ2XPWNH",
};

AOS.refresh();
AOS.init({
  offset: 200,             
  duration: 1200,             
  easing: 'ease-out-cubic',   
  delay: 10,                 
  once: true,   
});

TagManager.initialize(tagManagerArgs);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <CookieConsentBanner /> */}
      <Router />
      <Footer />
      <FixedButton />
    </BrowserRouter>
  </React.StrictMode>
);
