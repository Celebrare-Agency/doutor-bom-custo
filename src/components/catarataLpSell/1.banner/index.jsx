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
        {/* <h2>A promoção está prestes a acabar! Aproveite agora!</h2> */}
        <h1>
          Cirurgia de catarata <br />
          por <b>R$ 2.900,00</b> em São Paulo.
        </h1>
        <p>
          Pacote Completo com Lente Importada e Exames. <br></br>Parcelamos em
          até <b>12x</b>.
        </p>
        <div>
          <span>*preço exclusivo por olho</span>
        </div>
        <BtnAds modalId="1" toggleModalVisibility={toggleModalVisibility} />
        <img className="flags" src={discountFlag} alt="flag de desconto" />
      </div>
    </Styled.Container>
  );
}
