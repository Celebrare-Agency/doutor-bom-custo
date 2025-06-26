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
      <div className="container-header" data-aos="fade-up">
        <p>Acompanhe nossas redes:</p>

        <div className="sociais">
          <a href="https://www.facebook.com/doutorbomcusto/" target="blanked">
            <FaFacebookF className="icon" />
          </a>
          {/* <a href="" target="blanked"><FaYoutube className="icon" /></a> */}
          <a
            href="https://api.whatsapp.com/send?phone=5511945852272&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Eu%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta%20com%20Oftalmologista.%20"
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
        <img src={logo} alt="logotipo" data-aos="fade-up" />
        <h1 data-aos="fade-up">
          Faça a tão sonhada cirurgia das pálpebras com uma equipe de médicos
          especialistas em <b>blefaroplastia</b>
        </h1>

        <div data-aos="fade-up"><BtnAds modalId="1" toggleModalVisibility={toggleModalVisibility} /></div>
      </div>
    </Styled.Container>
  );
}
