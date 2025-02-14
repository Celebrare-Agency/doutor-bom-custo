import * as Styled from "./style.js";
import React, { useState } from "react";
import BtnAds from "../../GLOBAL/btn-ads-modal/index.jsx";
import Modal from "../../Forms/modal blefaroplastia form/index.jsx";
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
      <div className="col centerSideContent">
        <h1>
          Diga Adeus às Palpebras Caídas e Rugas com a Cirurgia de
          Blefaroplastia!
        </h1>

        <div>
          <div>
            <h2>Oferta Exclusiva!</h2>
            <p>Parcelamento em até 12x</p>
            <p>Anestesista a parte</p>
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
