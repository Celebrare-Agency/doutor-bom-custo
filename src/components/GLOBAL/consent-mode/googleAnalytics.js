import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-KY3Q2TEGMB');
};

// Adiciona uma função para configurar as opções de consentimento
export const configureConsent = (consentOptions) => {
  ReactGA.set({ 'dimension1': consentOptions }); // Define uma dimensão personalizada com as opções de consentimento
};

export const consentModeDefault = () => {
  configureConsent({
    ad_storage: "denied",
    analytics_storage: "denied",
    functionality_storage: "true",
    personalization_storage: "true",
    security_storage: "true",
  });
};

// Remova a função consentModeGranted, pois agora ela será chamada no CookieConsentBanner
