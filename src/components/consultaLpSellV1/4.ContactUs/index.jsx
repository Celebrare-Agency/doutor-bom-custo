import * as Styled from "./style.js";
import photo from "../../../assets/consultaLpSellV1/contactUs/photo.png";
import React, { useState } from "react";
import Modal from "../../FormHome/index.jsx";

export default function ContactUs() {      
  const [isModalVisible, setModalVisibility] = useState(false);

  const toggleModalVisibility = (modalId) => {
    setModalVisibility(!isModalVisible);
  };

  return (
    <Styled.Container>      
      {isModalVisible && (
        <Modal
          display={isModalVisible}
          onClose={() => toggleModalVisibility()}
          modalId="1"
        />
      )}
      <div className="containerText col" data-aos="fade-right">
        <h3>Entre em contato!</h3>
        <p>Para mais informações sobre exames, entre em contato!</p>
        <a target="blanked">
          <button className="buttonCallToAction" onClick={() => toggleModalVisibility()}>
            Fale com um de nossos atendentes!
          </button>
        </a>
      </div>
      <div className="imgContainer row" data-aos="fade-left">
        <img src={photo} alt="alogmerado de fotos com doutores e pacientes" />
      </div>
    </Styled.Container>
  );
}
