import * as Styled from "./style.js";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Modal from "../../modalForm/index.jsx";
import Map from "./Map/maps";
import { useState } from "react";
export default function Location() {
  const [modalDisplay, setModalDisplay] = useState(false);

  const handleModalToggle = () => {
    setModalDisplay(!modalDisplay);
  };

  return (
    <Styled.Container>
      <div className="titlePart col">
        <h3>Estamos localizados no coração de São Paulo</h3>
        <p>
          Estamos aqui no edifício Itália, no quinto andar, a 5 minutos da
          estação republica.
        </p>
      </div>
      <Map />
      <button className="row" onClick={handleModalToggle}>
        <AiOutlineWhatsApp className="btnWpp" />
        Marque sua consulta!
      </button>
      <Modal display={modalDisplay} onClose={handleModalToggle} />
    </Styled.Container>
  );
}
