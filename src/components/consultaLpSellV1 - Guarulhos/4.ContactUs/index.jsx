import * as Styled from "./style.js";
import photo from "../../../assets/consultaLpSellV1/contactUs/photo.png";
export default function ContactUs() {
  return (
    <Styled.Container>
      <div className="containerText col">
        <h3>Entre em contato!</h3>
        <p>Para mais informações sobre exames, entre em contato!</p>
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
