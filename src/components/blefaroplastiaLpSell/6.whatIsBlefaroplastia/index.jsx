import * as Styled from "./style.js";
import photo from "../../../assets/blefaroplastiaLpSell/6. whatIsBlefaroplastia/photo-bg.png";
import { useState } from "react";
import BtnAds from "../../GLOBAL/btn-ads-modal/index.jsx";
import Modal from "../../modalForm/index.jsx";

export default function () {
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
      <div className="containerText  col">
        <h2>Como funciona a cirurgia de blefaroplastia?</h2>
        <p>
          A blefaroplastia, também conhecida como cirurgia das pálpebras, é um
          procedimento que visa rejuvenescer a região dos olhos, com a remoção
          do excesso de pele, bolsas de gordura e reposicionamento muscular,
          restaura a vitalidade no olhar, combatendo os sinais de
          envelhecimento, pálpebras caídas, olheiras e rugas
        </p>
      </div>
      <div className="imgContainer row">
        <img src={photo} alt="alogmerado de fotos com doutores e pacientes" />
      </div>
    </Styled.Container>
  );
}
