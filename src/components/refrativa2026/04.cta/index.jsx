import * as Styled from "./style.js";
import React, { useState } from "react";
import { BsArrowDownCircle } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import Modal from "../../Forms/modal refrativa form/index.jsx";

export default function LocationAndFooter() {
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

      <div className="location-section">
        <div className="content-wrapper">
          <h3>
            A <b>Dr. Bom Custo</b> te oferece estrutura
            <br />
            moderna para o seu conforto absoluto.
          </h3>

          <h2>
            SUA CIRURGIA NO
            <br />
            CORAÇÃO DE SÃO PAULO
          </h2>

          <p className="sub-text">
            Atendimento humano com
            <br />
            médicos especialistas renomados.
          </p>

          <div className="address-box">
            <FaCircle size={16} color="#73e6a6" />
            <p>
              <b>Local:</b> Avenida Ipiranga, 344, 5° andar,
              <br />
              Edifício Itália - Centro de São Paulo
            </p>
          </div>

          <button onClick={() => toggleModalVisibility()}>
            GARANTIR MEU HORÁRIO <BsArrowDownCircle size={20} />
          </button>
        </div>
      </div>

      <div className="footer-section">
        <div className="container-Footer">
          <h2>Ficou alguma dúvida?</h2>
          <div className="contacts">
            <p>E-mail: contato@doutorbomcusto.com.br</p>
            <p>WhatsApp: (11) 94582-4194</p>
          </div>
        </div>
      </div>
    </Styled.Container>
  );
}
