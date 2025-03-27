import * as Styled from "./style.js";
import React, { useState } from "react";
import logo from "../../../assets/logoWhite.svg";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import Modal from "../../Forms/modal blefaroplastia form/index.jsx";
import BtnAds from "../../GLOBAL/btn-ads-modal/index.jsx";

export default function Banner() {
  const [isModalVisible, setModalVisibility] = useState(false);

  const toggleModalVisibility = (modalId) => {
    setModalVisibility(!isModalVisible);
    // Lógica para lidar com o ID do modal se necessário
  };
  return (
    <Styled.Container id="conversion">
      {isModalVisible && (
        <Modal
          display={isModalVisible}
          onClose={() => toggleModalVisibility()}
          modalId="1"
        />
      )}
      <div className="container-header">
        <p>Acompanhe nossas redes:</p>

        <div className="sociais">
          <a href="https://www.facebook.com/doutorbomcusto/" target="blanked">
            <FaFacebookF className="icon" />
          </a>
          {/* <a href="" target="blanked"><FaYoutube className="icon" /></a> */}
          <a
            href="https://api.whatsapp.com/send?phone=5511950212678&text=Ol%C3%A1!%20Eu%20gostaria%20de%20agendar%20uma%20consulta%20com%20Oftalmologista.%20"
            target="blanked"
          >
            <FaWhatsapp className="icon" />
          </a>
          <a href="https://www.instagram.com/dr_bomcusto/" target="blanked">
            <FaInstagram className="icon" />
          </a>
        </div>
      </div>
      <div className="banner">
        <img src={logo} alt="logotipo" />
        <h1>
          Faça a tão sonhada cirurgia das pálpebras com uma equipe de médicos
          especialistas em <b>blefaroplastia</b>
        </h1>

        <BtnAds modalId="1" toggleModalVisibility={toggleModalVisibility} />
      </div>
    </Styled.Container>
  );
}
