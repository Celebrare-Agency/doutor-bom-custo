import React from "react";
import styled from "styled-components";
import { AiOutlineWhatsApp } from "react-icons/ai";

const Media = {
  PhoneLarge: "@media(max-width:600px)",
  Laptop: "@media(max-width:1150px)",
  Tablet: "@media(max-width:1000px)",
  PhoneSmall: "@media(max-width:320px)",
};

const Container = styled.button`
  color: var(--light);
  font-family: Inter;
  font-size: 21px;
  font-weight: 600;
  padding: 1rem;
  background: #38af7e;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;
  transition: 0.3s;

  &:hover {
    background-color: var(--greenHover);
  }

  &.highlight {
    animation: highlightAnimation 5s linear;
  }

  ${Media.PhoneLarge} {
    font-size: 1.1rem;
    padding: 0.6rem;
  }

  ${Media.PhoneSmall} {
    font-size: 1rem;
  }

  .btnWpp {
    width: 2rem;
    height: 2rem;
  }

  @keyframes highlightAnimation {
    0%,
    100% {
      background-color: #38af7e;
    }
    50% {
      background-color: yellow;
    }
  }
`;

const BtnAds = ({ modalId, toggleModalVisibility, text }, props) => {
  const handleClick = () => {
    const currentUrl = window.location.href;
    const targetUrl =
      "https://api.whatsapp.com/send?phone=5511950212678&text=Ol%C3%A1!%20Gostaria%20de%20marcar%20uma%20consulta%20com%20um%20m%C3%A9dico%20oftalmologista%20em%20Parais%C3%B3polis";

    if (currentUrl.includes("oftalmo-paraisopolis")) {
      window.location.href = targetUrl;
    } else {
      toggleModalVisibility(modalId);
    }
  };

  return (
    <Container
      aria-label="Botão para o número de contato"
      onClick={handleClick}
    >
      {<AiOutlineWhatsApp className="btnWpp" />}
      {text}
    </Container>
  );
};

BtnAds.defaultProps = {
  text: "Entrar em contato",
};

export default BtnAds;
