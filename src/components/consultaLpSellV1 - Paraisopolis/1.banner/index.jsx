import * as Styled from "./style.js";
import photoDoctor from "../../../assets/consultaLpSellV1/banner/photo-doctor.png";
import backgroundVector from "../../../assets/consultaLpSellV1/banner/VectorBackground.svg";
import imgText from "../../../assets/consultaLpSellV1/banner/promotionTextImage.png";
import WppButton from "../../GLOBAL/buttonWppForm/index.jsx";
import { AiOutlineWhatsApp } from "react-icons/ai";
import BtnAds from "../../GLOBAL/btn-ads-modal/index.jsx";
import React, { useState } from "react";
import Modal from "../../FormHome/index.jsx";


export default function Banner() {
  const [isModalVisible, setModalVisibility] = useState(false);

  const toggleModalVisibility = (modalId) => {
    setModalVisibility(!isModalVisible);
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
      <div className="patterns">
        <img
          className="backgroundVector"
          src={backgroundVector}
          alt="linha onduladas verdes"
          data-aos="fade-right"
        />
        <div className="containerText col" data-aos="fade-right">
          <h1>Oftalmologista Preço Popular em Paraisópolis - SP:</h1>
          <img src={imgText} alt="Imagem de texto promocional" />
          <WppButton             
            modalId="1" 
            toggleModalVisibility={toggleModalVisibility}  
          />
        </div>
        <div className="imgContainer" data-aos="fade-left">
          <img
            className="doctoPhoto"
            src={photoDoctor}
            alt="alogmerado de fotos com doutores e pacientes"
          />
        </div>
      </div>
    </Styled.Container>
  );
}
