import * as Styled from "./style.js";
import React, { useState } from "react";
import discountFlag from "../../../assets/catarataLpSell/1.banner/flagDisccount.png";
import BtnAds from "../../GLOBAL/btn-ads-modal/index.jsx";
import Modal from "../../Forms/modal catarata form/index.jsx";
export default function Banner() {
  const [isModalVisible, setModalVisibility] = useState(false);

  const toggleModalVisibility = () => {
    setModalVisibility(!isModalVisible);
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
        <h2 data-aos="fade-right">recupere a alegria de enxergar com clareza!</h2>
        <h1 data-aos="fade-right">
          Cirurgia de catarata <br />
          por <b>R$ 2.900,00</b> em São Paulo.
        </h1>
        <p data-aos="fade-right">
          Pacote Completo com Lente Importada e Exames. <br></br>Parcelamos em
          até <b>12x</b>.
        </p>
        <div data-aos="fade-right">
          <span data-aos="fade-right">*preço exclusivo por olho</span>
        </div>
        <div data-aos="fade-right"><BtnAds modalId="1" toggleModalVisibility={toggleModalVisibility} /></div>

        <img className="flags" src={discountFlag} alt="flag de desconto" data-aos="fade-left" />
      </div>
    </Styled.Container>
  );
}
