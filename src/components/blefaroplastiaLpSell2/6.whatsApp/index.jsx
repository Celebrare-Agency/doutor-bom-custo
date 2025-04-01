import * as Styled from "./style.js";
import Modal from "../../Forms/modal blefaroplastia form/index.jsx";
import BtnAds from "../../GLOBAL/btn-ads-modal/index.jsx";
import React, { useState } from "react";

import { FaWhatsapp } from "react-icons/fa";
import imagem1 from "../../../assets/blefaroplastiaLpSell2/6.whatsApp/image1.png";
import imagem2 from "../../../assets/blefaroplastiaLpSell2/6.whatsApp/image2.png";
import imagem3 from "../../../assets/blefaroplastiaLpSell2/6.whatsApp/image3.png";
import imagem4 from "../../../assets/blefaroplastiaLpSell2/6.whatsApp/image4.png";
import imagem5 from "../../../assets/blefaroplastiaLpSell2/6.whatsApp/image5.png";
import imagem6 from "../../../assets/blefaroplastiaLpSell2/6.whatsApp/image6.png";

export default function WhatsApp() {
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
      <div className="container-wtt">
        <p>
          Clique no botão ao lado e dê o primeiro passo para realizar seu sonho
          da blefaroplastia marcando uma avaliação
        </p>

        <BtnAds
          modalId="1"
          toggleModalVisibility={toggleModalVisibility}
          text="Contato"
        />
      </div>

      <div className="imagens">
        <img src={imagem1} />
        <img src={imagem2} />
        <img src={imagem3} />
        <img src={imagem4} />
        <img src={imagem5} />
        <img src={imagem6} />
      </div>
    </Styled.Container>
  );
}
