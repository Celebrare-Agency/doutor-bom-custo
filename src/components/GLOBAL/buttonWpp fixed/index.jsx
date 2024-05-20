import React, { useState, useEffect } from "react";
import * as Styled from "./style.js";
import { AiOutlineWhatsApp } from "react-icons/ai";

export default function WppButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setShowButton(scrollTop > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    if (showButton) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // Lógica para ativar a animação no outro botão
      console.log("Botão destacado!");
    }
  };

  return (
    <>
      {showButton && (
        <Styled.Container
          aria-label="Botão para o número de contato"
          onClick={handleClick}
        >
          <AiOutlineWhatsApp className="BUttonwhatsApp" aria-label="" />
        </Styled.Container>
      )}
    </>
  );
}
