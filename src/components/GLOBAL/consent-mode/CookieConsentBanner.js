
import React, { useEffect, useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Cookies from "universal-cookie";
import PropTypes from "prop-types";

export default function ConsentForm({ color }) {
  const [decisionMade, setDecisionMade] = useState(false);
  const cookies = useMemo(() => new Cookies(), []);

  useEffect(() => {
    const cookie = cookies.get("consentimento_cookies");
    if (cookie !== undefined) {
      setDecisionMade(true);
    }
  }, [cookies]);

  const sendConsent = useCallback((consent) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'consentChange',
      consent: consent
    });
    window.dataLayer.push({ 'event': 'gtm.allowlist' });
  }, []);

  const handleDecision = (outcome) => {
    const consent = {
      'ad_storage': outcome,
      'analytics_storage': outcome,
      'ad_user_data': outcome,
      'ad_personalization': outcome,
    };

    cookies.set("consentimento_cookies", consent, {
      expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
      path: "/",
      domain: "doutorbomcusto.com.br"
    });

    sendConsent(consent);
    setDecisionMade(true);
  };
  const Media = {
    PhoneLarge: "@media(max-width:800px)",
  };

  const Container = styled.div`
    width: 100%;
    margin:auto;
    z-index: 999999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .cookie-consent-banner {
      width: 50%;
      height: 10rem;
      margin:auto;
      position: fixed;
      bottom: 2rem;
      background-color: #ffffffe3;
      padding: 20px;
      z-index: 999999;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      ${Media.PhoneLarge}{
        width: 80%;
        height:15rem;
      }
    }
    p {
      font-size: 1.21rem;
      margin-bottom: 10px;
      color: var(--black);
      text-align:center;
    }
    a {
      color: var(--blue);
    }
    .cookie-consent-button {
      margin-top: 10px;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1rem;
      transition: background-color 0.3s ease;
      &:hover {
        background-color: var(--blue);
        color: #fff;
      }
    }
  `;
  return (
    !decisionMade && (
      <Container>
        <div className="cookie-consent-banner">
          <p>
            <b>Doutor Bom Custo e os cookies:</b> Utilizamos cookies para personalizar anúncios e melhorar a sua experiência no site. Ao continuar navegando, você concorda com a nossa <Link to="/politica">Política de Privacidade</Link>.
          </p>
          <button
            type="button"
            className="cookie-consent-button btn-success"
            onClick={() => handleDecision("granted")}
          >
            Aceitar
          </button>
        </div>
      </Container>
    )
  );
}

ConsentForm.propTypes = {
  color: PropTypes.string.isRequired,
};

ConsentForm.defaultProps = {
  color: "blue",
};