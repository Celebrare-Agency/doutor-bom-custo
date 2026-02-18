import * as Styled from "./style.js";
import React, { useState } from "react";
import { BsArrowDownCircle } from "react-icons/bs";
import logo from "../../../assets/logoWhite.svg";
import Modal from "../../Forms/modal refrativa form/index.jsx";
import imgComposite from "../../../assets/refrativa2026/03.pain/imagens.webp";

export default function PainSection() {
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
        <div className="top-section">
          <div className="image-wrapper">
            <img
              src={imgComposite}
              alt="Cirurgia refrativa e óculos quebrados"
            />
          </div>

          <div className="text-wrapper">
            <h2>
              CHEGA DE SOFRER
              <br />
              COM LENTES E ÓCULOS
              <br />
              QUEBRADOS
            </h2>
            <p>
              Quantas vezes você já pensou em se livrar
              <br />
              dos óculos, mas adiou essa decisão?
            </p>
            <p className="highlight">
              A cirurgia refrativa é um investimento
              <br />
              definitivo na sua qualidade de vida.
            </p>
          </div>
        </div>

        <div className="cards-grid">
          <div className="card">
            <img src={logo} />
            <span>Esqueça o embaçado e a dependência constante.</span>
          </div>
          <div className="card">
            <img src={logo} />
            <span>Viver sem limitações é um investimento inteligente.</span>
          </div>
          <div className="card">
            <img src={logo} />
            <span>Tenha o melhor custo benefício do mercado.</span>
          </div>
          <div className="card">
            <img src={logo} />
            <span>Recuperação rápida para você voltar à rotina.</span>
          </div>
        </div>

        <div className="cta-wrapper">
          <button onClick={() => toggleModalVisibility()}>
            QUERO MINHA LIBERDADE <BsArrowDownCircle size={24} />
          </button>
        </div>
      </div>
    </Styled.Container>
  );
}
