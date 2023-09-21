import * as Styled from "./style.js";
import photoDoctor from "../../../assets/ophthalmologist/banner/photo-doctor.png";
import lines from "../../../assets/ophthalmologist/banner/lines.svg";
export default function Banner() {
  return (
    <Styled.Container>
      <div className="patterns">
        <img className="greenLine" src={lines} alt="linha onduladas verdes" />
        <div className="containerText col">
          <h1>Oftalmologia</h1>
          <p>
            A Doutor Bom Custo te conecta com os melhores médicos e com os
            menores preços do mercado.
          </p>
        </div>
        <div className="imgContainer">
          <img
            className="doctoPhoto"
            src={photoDoctor}
            alt="alogmerado de fotos com doutores e pacientes"
          />
        </div>
        <img className="greenLine" src={lines} alt="linha onduladas verdes" />
      </div>
    </Styled.Container>
  );
}
