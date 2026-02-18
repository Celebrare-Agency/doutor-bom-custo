import * as Styled from "./style.js";
import React, { useState } from "react";
import { BsArrowDownCircle } from "react-icons/bs";
import Modal from "../../Forms/modal refrativa form/index.jsx";
import img1 from "../../../assets/refrativa2026/02.tech/1.webp";
import img2 from "../../../assets/refrativa2026/02.tech/2.webp";
import img3 from "../../../assets/refrativa2026/02.tech/3.webp";

export default function TechnologySection() {
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
        <div className="header-text" data-aos="fade-up">
          <h2>
            Na <span>Dr. Bom Custo</span>, este é um procedimento
            <br />
            rápido e indolor com laser avançado.
          </h2>

          <p className="sub-text">
            Aqui, você tem especialistas em refrativa
            <br />
            cuidando do seu caso.
          </p>

          <p className="sub-text-small">
            Tecnologia alemã de alta precisão para você.
            <br />
            Segurança absoluta em cada etapa do processo.
          </p>

          <h3>
            TECNOLOGIA <i>SCHWIND AMARIS</i>
            <br />
            PARA SUA SEGURANÇA TOTAL
          </h3>

          <button onClick={() => toggleModalVisibility()}>
            FALAR COM ESPECIALISTA <BsArrowDownCircle size={20} />
          </button>
        </div>

        <div className="gallery-grid" data-aos="fade-up">
          <img src={img1} alt="Equipe médica e tecnologia" />
          <img src={img2} alt="Exame detalhado" />
          <img src={img3} alt="Procedimento seguro" />
        </div>
      </div>
    </Styled.Container>
  );
}
