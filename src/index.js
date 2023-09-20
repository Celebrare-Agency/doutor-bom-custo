import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import "./reset.css";
import { Router } from "./router";
const PatternsStyles = styled.main`
  background: linear-gradient(
      251deg,
      rgba(241, 248, 249, 0.74) 0%,
      rgba(232, 232, 232, 0.74) 0.01%,
      rgba(241, 248, 249, 0.74) 48.8%,
      rgba(232, 232, 232, 0.72) 100%
    ),
    linear-gradient(109deg, #eaeaea 0%, #f1f8f9 50.36%, #eef7f9 100%);
  height: auto;
`;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PatternsStyles>
    <React.StrictMode>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </React.StrictMode>
  </PatternsStyles>
);

reportWebVitals();
