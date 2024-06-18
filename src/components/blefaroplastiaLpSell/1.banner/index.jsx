import * as Styled from "./style.js";
import React, { useState } from "react";
import BtnAds from "../../GLOBAL/btn-ads-modal/index.jsx";
import Modal from "../../modalForm/index.jsx";
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
          modalId="1" // Você pode passar o modalId se necessário
        />
      )}
      <div className="col centerSideContent">
        <h1>
          Renove Seu Olhar com a Cirurgia de Blefaroplastia! Apenas R$ 5.900,00
        </h1>

        <div>
          <div>
            <h2>Oferta Exclusiva até 30/06!</h2>
            <p>Parcelamento em até 12x</p>
          </div>

          <span className="centerText">
            *preço exclusivo para pálpebra superior <br />
          </span>
        </div>
        <BtnAds modalId="1" toggleModalVisibility={toggleModalVisibility} />
      </div>
    </Styled.Container>
  );
}
