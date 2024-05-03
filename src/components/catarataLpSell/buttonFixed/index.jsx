import * as Styled from "./style.js";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Modal from "../../modalForm/index.jsx";
import { useState } from "react";
export default function WppButton() {
  const [modalDisplay, setModalDisplay] = useState(false);

  const handleModalToggle = () => {
    setModalDisplay(!modalDisplay);
  };

  return (
    <>
      <Styled.Container
        aria-label="Botão para o numero de contato"
        onClick={handleModalToggle}
      >
        <AiOutlineWhatsApp className="BUttonwhatsApp" aria-label="" />
      </Styled.Container>
      <Modal display={modalDisplay} onClose={handleModalToggle} />
    </>
  );
}
