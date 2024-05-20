import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Modal from "../../modalForm/index.jsx";
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

  .BUttonwhatsApp {
    width: 2rem;
    height: 2rem;
  }

  @keyframes highlightAnimation {
    0% {
      background-color: #38af7e;
    }
    50% {
      background-color: yellow;
    }
    100% {
      background-color: #38af7e;
    }
  }
`;

export default function BtnAds() {
  const [modalDisplay, setModalDisplay] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const buttonRefs = useRef([]);

  const handleModalToggle = () => {
    setModalDisplay(!modalDisplay);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    buttonRefs.current.forEach((buttonRef) => {
      if (buttonRef.classList.contains("highlight")) {
        buttonRef.classList.remove("highlight");
      }
    });

    if (isAtTop) {
      buttonRefs.current[0].classList.add("highlight");
    }
  }, [isAtTop]);

  const handleButtonClick = () => {
    if (window.scrollY > 500) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      handleModalToggle();
    }
  };

  return (
    <Container
      ref={(ref) => (buttonRefs.current[0] = ref)}
      aria-label="Botão para o numero de contato"
      onClick={handleButtonClick}
    >
      <AiOutlineWhatsApp className="btnWpp" />
      Entre em contato
      <Modal display={modalDisplay} onClose={handleModalToggle} />
    </Container>
  );
}
