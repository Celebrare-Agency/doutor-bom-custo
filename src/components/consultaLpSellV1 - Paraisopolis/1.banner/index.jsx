import * as Styled from "./style.js";
import photoDoctor from "../../../assets/consultaLpSellV1/banner/photo-doctor.png";
import backgroundVector from "../../../assets/consultaLpSellV1/banner/VectorBackground.svg";
import imgText from "../../../assets/consultaLpSellV1/banner/promotionTextImage.png";
import WppButton from "../../GLOBAL/buttonWpp/index.jsx";
import { AiOutlineWhatsApp } from "react-icons/ai";
import BtnAds from "../../GLOBAL/btn-ads-modal/index.jsx";

export default function Banner() {
  return (
    <Styled.Container id="conversion">
      <div className="patterns">
        <img
          className="backgroundVector"
          src={backgroundVector}
          alt="linha onduladas verdes"
        />
        <div className="containerText col">
          <h1>Oftalmologista Preço Popular em Paraisópolis - SP:</h1>
          <img src={imgText} alt="Imagem de texto promocional" />
          <BtnAds />{" "}
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
