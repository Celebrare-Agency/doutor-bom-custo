import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Modal from "../../modalForm/index.jsx";

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

export default function BtnAds({ modalId, toggleModalVisibility }) {
  return (
    <>
      <Container
        aria-label="Botão para o número de contato"
        onClick={() => toggleModalVisibility(modalId)}
      >
        <AiOutlineWhatsApp className="btnWpp" />
        Entre em contato
      </Container>
    </>
  );
}
