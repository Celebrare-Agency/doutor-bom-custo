import * as Styled from "./style.js";
import photo from "../../../assets/catarataLpSell/2.callUs/photo.png";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Modal from "../../modalForm/index.jsx";
import { useState } from "react";

export default function Contact() {
  const [modalDisplay, setModalDisplay] = useState(false);

  const handleModalToggle = () => {
    setModalDisplay(!modalDisplay);
  };

  return (
    <Styled.Container id="aaaaasdada">
      <div className="containerText col">
        <h3>
          Hospital de ponta com os melhores equipamentos e profissionais da
          atualidade.
        </h3>

        <button className="row" onClick={handleModalToggle}>
          <AiOutlineWhatsApp className="btnWpp" />
          Entre em contato
        </button>
      </div>
      <div className="imgContainer row">
        <img src={photo} alt="alogmerado de fotos com doutores e pacientes" />
      </div>
      <Modal display={modalDisplay} onClose={handleModalToggle} />
    </Styled.Container>
  );
}
