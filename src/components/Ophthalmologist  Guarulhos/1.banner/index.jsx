import * as Styled from "./style.js";
import photoDoctor from "../../../assets/ophthalmologist/banner/photo-doctor.png";
import backgroundVector from "../../../assets/ophthalmologist/banner/VectorBackground.svg";
import imgText from "../../../assets/ophthalmologist/banner/promotionTextImage.png";
import WppButton from "../../buttonWpp/index.jsx";
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
          <h1>Consulta com oftalmologista em Guarulhos por:</h1>
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
