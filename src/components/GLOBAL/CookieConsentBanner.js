import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import TagManager from 'react-gtm-module';
import { Link } from 'react-router-dom';

const CookieConsentBanner = ({ onAccept }) => {
  const [consentMode, setConsentMode] = useState(false);
  const [showBanner, setShowBanner] = useState(!consentMode);

  useEffect(() => {
    const storedConsent = JSON.parse(sessionStorage.getItem('consentMode'));
    setConsentMode(storedConsent);

    if (!storedConsent) {
      setShowBanner(true);
    }
  }, []);

  const setConsent = (consent) => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'consent',
        consentMode: consent
      }
    });
    sessionStorage.setItem('consentMode', JSON.stringify(consent));
    setShowBanner(false);
  };

  const handleAcceptAll = () => {
    const newConsent = {
      ad_storage: 'granted',
      analytics_storage: 'granted',
      functionality_storage: 'granted',
      personalization_storage: 'granted',
    };
    setConsent(newConsent);
    if (onAccept) {
      onAccept();
    }

    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const newConsent = {
      ad_storage: 'denied',
      analytics_storage: 'denied',
      functionality_storage: 'denied',
      personalization_storage: 'denied',
    };
    setConsent(newConsent);
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
.cookie-consent-banner{
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
 .cookie-consent-button {
        background-color:var(--blue);
      color: #fff;
    }
    }
}
    p {
      font-size: 1.21rem;
      margin-bottom: 10px;
      color: var(--black);
      text-align:center;
    }
    a{
      color: var(--blue);
    }

    .cookie-consent-button {
      margin-top: 10px;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1rem;
      transition: background-color 0.3s ease;
    }

    .cookie-consent-button:hover {
      background-color:var(--blue);
      color: #fff;
    }
  `;

  return (
    showBanner && (
      <Container >
        <div className="cookie-consent-banner">
          <p> <b>Doutor bom custo e os cookies:</b>  A gente usa cookies para personalizar anúncios e melhorar a sua experiência no site. Ao continuar navegando, voce concorda com a nossa <Link to="/politica">
            Política de privacidade </Link></p>
          <button
            type="button"
            className="cookie-consent-button btn-success"
            onClick={handleAcceptAll}
          >
            Aceitar
          </button>
        </div>
      </Container>
    )
  );
};

export default CookieConsentBanner;
