import * as Styled from "./style.js";
import PrimeiroDepoimento from "./ytDepoimentsIframe/index.jsx";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Modal from "../../modalForm/index.jsx";
import { useState } from "react";
export default function Depoiments() {
  const [modalDisplay, setModalDisplay] = useState(false);

  const handleModalToggle = () => {
    setModalDisplay(!modalDisplay);
  };

  return (
    <Styled.Container>
      <div className="titlePart col">
        <h3>excelência</h3>
        <p>Mais de 5mil pacientes operados e satisfeitos!</p>
      </div>
      <div className="content row">
        <div className="video col">
          <PrimeiroDepoimento embedId="5eSMXdDXJgs" />
          <div className="containerText col">
            <h3>Maria Neide</h3>
            <p>Veja como a cirurgia de catarata mudou a vida de Maria Neide</p>
          </div>
        </div>
        <div className="video col">
          <PrimeiroDepoimento embedId="EsUG8wezPiA" />
          <div className="containerText col">
            <h3>Maria Lucia</h3>
            <p>
              {" "}
              Maria Lucia, confiante e satisfeita com o resultado da cirurgia de
              catarata.
            </p>
          </div>
        </div>
      </div>

      <button className="row" onClick={handleModalToggle}>
        <AiOutlineWhatsApp className="btnWpp" />
        Marque sua consulta!
      </button>
      <Modal display={modalDisplay} onClose={handleModalToggle} />
    </Styled.Container>
  );
}
