import React, { useState, useEffect } from "react";
import * as Styled from "./style.js";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Modal from "../../modalForm/index"; // Certifique-se de importar o modal corretamente

export default function WppButton() {
  const [showButton, setShowButton] = useState(false);
  const [isModalVisible, setModalVisibility] = useState(false);

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
    const currentUrl = window.location.pathname;
    const whatsappLink =
      "https://api.whatsapp.com/send?phone=5511950212678&text=Ol%C3%A1!%20Gostaria%20de%20marcar%20uma%20consulta%20com%20um%20m%C3%A9dico%20oftalmologista%20em%20Parais%C3%B3polis";

    if (currentUrl.includes("/Catarata")) {
      setModalVisibility(true);
    } else if (currentUrl.includes("/oftalmo-paraisopolis")) {
      window.location.href = whatsappLink;
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const toggleModalVisibility = () => {
    setModalVisibility(!isModalVisible);
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
      {isModalVisible && (
        <Modal
          display={isModalVisible}
          onClose={toggleModalVisibility}
          modalId="1" // Você pode passar o modalId se necessário
        />
      )}
    </>
  );
}
