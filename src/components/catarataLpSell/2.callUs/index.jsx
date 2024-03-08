import * as Styled from "./style.js";
import photo from "../../../assets/catarataLpSell/2.callUs/photo.png";
import { AiOutlineWhatsApp } from "react-icons/ai";

export default function Contact() {
  return (
    <Styled.Container id="aaaaasdada">
      <div className="containerText col">
        <h3>
          Hospital de ponta com os melhores equipamentos e profissionais da
          atualidade.
        </h3>
        <a
          href="https://api.whatsapp.com/send?phone=5511950212678"
          target="blanked"
        >
          <button className="row">
            <AiOutlineWhatsApp className="btnWpp" />
            Entre em contato
          </button>
        </a>
      </div>
      <div className="imgContainer row">
        <img src={photo} alt="alogmerado de fotos com doutores e pacientes" />
      </div>
    </Styled.Container>
  );
}
