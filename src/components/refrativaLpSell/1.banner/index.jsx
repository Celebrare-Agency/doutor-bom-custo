import * as Styled from "./style.js";
import React, { useState } from "react";
import discountFlag from "../../../assets/catarataLpSell/1.banner/flagDisccount.png";
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
      <div className="col LeftSideContent">
        {/* <h2>recupere a alegria de enxergar com clareza!</h2> */}
        <h1>
          Cirurgia Refrativa <br /> A partir de
          <b> R$ 3.900,00</b> EM SÃO PAULO!
        </h1>
        <p>
          Pacote Completo com exames. <br></br> Fazemos parcelamento!
        </p>
        <div>
          <span>*preço exclusivo para os dois olhos</span>
        </div>
        <BtnAds modalId="1" toggleModalVisibility={toggleModalVisibility} />
        <img className="flags" src={discountFlag} alt="flag de desconto" />
      </div>
    </Styled.Container>
  );
}
