import * as Styled from "./style.js";
import photoDoctor from "../../../assets/consultaLpSellV1/banner/photo-doctor.png";
import backgroundVector from "../../../assets/consultaLpSellV1/banner/VectorBackground.svg";
import imgText from "../../../assets/consultaLpSellV1/banner/promotionTextImage.png";
import WppButton from "../../GLOBAL/buttonWpp/index.jsx";
import { AiOutlineWhatsApp } from "react-icons/ai";

export default function Banner() {
  return (
    <Styled.Container>
      <div className="patterns">
        <img
          className="backgroundVector"
          src={backgroundVector}
          alt="linha onduladas verdes"
        />
        <div className="containerText col">
          <h1>Oftalmologista Preço Popular em Paraisópolis - SP:</h1>
          <img src={imgText} alt="Imagem de texto promocional" />

          <a
            href="https://api.whatsapp.com/send?phone=5511950212678&text=Ol%C3%A1!%20Gostaria%20de%20marcar%20uma%20consulta%20com%20um%20m%C3%A9dico%20oftalmologista%20em%20Parais%C3%B3polis."
            target="blanked"
          >
            <button>
              <AiOutlineWhatsApp className="btnWpp" />
              Entre em contato
            </button>
          </a>
        </div>
        <div className="imgContainer">
          <img
            className="doctoPhoto"
            src={photoDoctor}
            alt="alogmerado de fotos com doutores e pacientes"
          />
        </div>
      </div>
    </Styled.Container>
  );
}
