import * as Styled from "./style.js";
import Map from "./Map/maps";
import React, { useState } from "react";

import BtnAds from "../../GLOBAL/btn-ads-modal/index.jsx";
import Modal from "../../Forms/modal blefaroplastia form/index.jsx";
export default function Location() {
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
        <h3>Estamos localizados no coração de São Paulo</h3>
        <p>
          Estamos aqui no edifício Itália, no quinto andar, a 5 minutos da
          estação republica.
        </p>
      </div>
      <Map />
      <BtnAds modalId="1" toggleModalVisibility={toggleModalVisibility} />
    </Styled.Container>
  );
}
