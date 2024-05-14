import * as Styled from "./style.js";
import discountFlag from "../../../assets/catarataLpSell/1.banner/flagDisccount.png";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Modal from "../../modalForm/index.jsx";
import { useState } from "react";
export default function Banner() {
  const [modalDisplay, setModalDisplay] = useState(false);

  const handleModalToggle = () => {
    setModalDisplay(!modalDisplay);
  };
  return (
    <Styled.Container>
      <div className="col LeftSideContent">
        <h1>
          Cirurgia de catarata <br />
          por <b>R$ 2.900,00</b> em São Paulo.
        </h1>
        <p>
          Pacote Completo com Lente Importada e Exames. <br></br>Parcelamos em
          até <b>12x</b>.
        </p>
        <div>
          <h2>válido até dia 30/05!</h2>
          <span>*preço exclusivo por olho</span>
        </div>

        <button className="row" onClick={handleModalToggle}>
          <AiOutlineWhatsApp className="btnWpp" />
          Entre em contato
        </button>
        <img className="flags" src={discountFlag} alt="flag de desconto" />
      </div>
      <Modal display={modalDisplay} onClose={handleModalToggle} />
    </Styled.Container>
  );
}
