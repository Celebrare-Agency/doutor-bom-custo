import * as Styled from "./style.js";
import photoDoctor from "../../../assets/consultaLpSellV1/banner/photo-doctor.png";
import backgroundVector from "../../../assets/consultaLpSellV1/banner/VectorBackground.svg";
import imgText from "../../../assets/consultaLpSellV1/banner/promotionTextImage.png";
import WppButton from "../../GLOBAL/buttonWpp/index.jsx";

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
          <h1>Consulta com oftalmologista em Taboão da serra por:</h1>
          <img src={imgText} alt="Imagem de texto promocional" />
          <WppButton />
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
