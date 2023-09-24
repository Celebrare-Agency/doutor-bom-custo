import * as Styled from "./style.js";
import photo from "../../../assets/homepage/contact/photo.png";
export default function Contact() {
  return (
    <Styled.Container id="aaaaasdada">
      <div className="containerText col">
        <h3>
          Agende sua consulta <br />
          clicando no botão abaixo!
        </h3>
        <button className="buttonCallToAction">
          Fale com um de nossos atendentes!
        </button>
      </div>
      <div className="imgContainer row">
        <img src={photo} alt="alogmerado de fotos com doutores e pacientes" />
      </div>
    </Styled.Container>
  );
}
