import React, { useState } from "react";
import * as Styled from "./style";
import logo from "../../../assets/logoWhite.svg";
import Video from "./video/index";
import Button from "../../GLOBAL/buttons";
import Modal from "../../Forms/modal refrativa form/index.jsx";

import { useLocation } from "react-router-dom";

export default function Declaration() {
  const [ticketType, setTicketType] = useState(null); // Armazena o tipo de ingresso
  const location = useLocation();

  const [isModalVisible, setModalVisibility] = useState(false);

  const toggleModalVisibility = (modalId) => {
    setModalVisibility(!isModalVisible);
    // Lógica para lidar com o ID do modal se necessário
  };
  return (
    <Styled.Container>
      {isModalVisible && (
        <Modal
          display={isModalVisible}
          onClose={() => toggleModalVisibility()}
          modalId="1"
          ticketType={ticketType} // Passa o tipo de ingresso para o modal
        />
      )}
      <div className="container-banner">
        <div className="logos">
          <img
            className="logoIntitutoKos"
            src={logo}
            alt="logo Instituto Kós"
          />
        </div>
        <h1 data-aos="fade-up">
          PARTICIPE DO MAIOR EVENTO DE LIBERDADE <br /> VISUAL JÁ REALIZADO NO
          BRASIL
        </h1>
        <p data-aos="fade-up">
          O Refrativa SP chega para quem deseja deixar de depender dos óculos ou
          das lentes de contato com segurança, tecnologia avançada e preços
          justos.
        </p>
        <Video embedId="n4iNP2e1T9U" />
        <div data-aos="fade-up"> 
          <Button
          className="btn"
          text="QUERO ACESSAR AGORA!"
          display="none"
          modalId="1" 
          toggleModalVisibility={toggleModalVisibility}
          />
        </div>

        <p className="finaltext" data-aos="fade-up">
          Liberte-se das amarras que os óculos te impõem e redescubra a sensação
          de enxergar a vida com os seus próprios olhos. A sua liberdade visual
          começa agora.
        </p>
      </div>
    </Styled.Container>
  );
}
