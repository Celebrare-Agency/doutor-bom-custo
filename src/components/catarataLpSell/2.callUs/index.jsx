import * as Styled from "./style.js";
import photo from "../../../assets/catarataLpSell/2.callUs/photo.png";
import { useState } from "react";
import BtnAds from "../../GLOBAL/btn-ads-modal/index.jsx";
import Modal from "../../Forms/modal catarata form/index.jsx";

export default function Contact() {
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
      <div className="containerText col">
        <h3>
          Hospital de ponta com os melhores equipamentos e profissionais da
          atualidade.
        </h3>
        <BtnAds modalId="1" toggleModalVisibility={toggleModalVisibility} />
      </div>
      <div className="imgContainer row">
        <img src={photo} alt="alogmerado de fotos com doutores e pacientes" />
      </div>
    </Styled.Container>
  );
}
