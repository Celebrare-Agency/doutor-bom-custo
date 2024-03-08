import * as Styled from "./style.js";
import photo from "../../../assets/1.home/contact/photo.png";
export default function Contact() {
  return (
    <Styled.Container id="aaaaasdada">
      <div className="containerText col">
        <h3>
          Agende sua consulta <br />
          clicando no botão abaixo!
        </h3>
        <a
          href="https://api.whatsapp.com/send?phone=5511950212678&text=Olá!%20Eu%20gostaria%20de%20agendar%20uma%20consulta%20com%20Oftalmologista.%20"
          target="blanked"
        >
          <button className="buttonCallToAction">
            Fale com um de nossos atendentes!
          </button>
        </a>
      </div>
      <div className="imgContainer row">
        <img src={photo} alt="alogmerado de fotos com doutores e pacientes" />
      </div>
    </Styled.Container>
  );
}
