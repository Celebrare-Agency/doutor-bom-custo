import BtnAds from "../../GLOBAL/btn-ads-modal/index.jsx";
import React, { useState } from "react";
import * as Styled from "./style.js";
import PrimeiroDepoimento from "./ytDepoimentsIframe/index.jsx";
import Modal from "../../modalForm/index.jsx";

export default function Depoiments() {
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
          modalId="1" // Você pode passar o modalId se necessário
        />
      )}
      <div className="titlePart col">
        <h3>excelência</h3>
        <p>Mais de 5mil pacientes operados e satisfeitos!</p>
      </div>
      <div className="content row">
        <div className="video col">
          <PrimeiroDepoimento embedId="5eSMXdDXJgs" />
          <div className="containerText col">
            <h3>Maria Neide</h3>
            <p>Veja como a cirurgia de catarata mudou a vida de Maria Neide</p>
          </div>
        </div>
        <div className="video col">
          <PrimeiroDepoimento embedId="EsUG8wezPiA" />
          <div className="containerText col">
            <h3>Maria Lucia</h3>
            <p>
              {" "}
              Maria Lucia, confiante e satisfeita com o resultado da cirurgia de
              catarata.
            </p>
          </div>
        </div>
      </div>
      <BtnAds modalId="1" toggleModalVisibility={toggleModalVisibility} />
    </Styled.Container>
  );
}
