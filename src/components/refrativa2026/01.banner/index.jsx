import * as Styled from "./style.js";
import React, { useState } from "react";
import logo from "../../../assets/refrativa2026/logo.svg";
import { BsArrowDownCircle } from "react-icons/bs";
import Modal from "../../Forms/modal refrativa form/index.jsx";
import img1 from "../../../assets/refrativa2026/01.banner/01.webp";

export default function HeroSection() {
  const [isModalVisible, setModalVisibility] = useState(false);

  const toggleModalVisibility = () => {
    setModalVisibility(!isModalVisible);
  };

  return (
    <Styled.Container>
      {isModalVisible && (
        <Modal
          display={isModalVisible}
          onClose={() => toggleModalVisibility()}
          modalId="1"
        />
      )}
      <div className="content-wrapper">
        <div className="text-section" data-aos="fade-right">
          <img src={logo} alt="Doutor Bom Custo" className="logo" />
          <h1>VIVA COM LIBERDADE E ENXERGUE TUDO SEM ÓCULOS</h1>
          <p>
            Acorde todos os dias com visão perfeita. Pratique esportes sem o
            incômodo das lentes. Trabalhe com conforto e total autonomia física.
            Tenha a segurança de uma estrutura hospitalar.
          </p>
          <button onClick={() => toggleModalVisibility()}>
            AGENDAR MINHA AVALIAÇÃO <BsArrowDownCircle size={24} />
          </button>
        </div>

        <div className="image-grid" data-aos="fade-left">
          <img src={img1} alt="Exame oftalmológico" />
        </div>
      </div>
    </Styled.Container>
  );
}
