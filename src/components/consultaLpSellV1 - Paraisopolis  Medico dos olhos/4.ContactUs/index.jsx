import * as Styled from "./style.js";
import photo from "../../../assets/consultaLpSellV1/contactUs/photo.png";
export default function ContactUs() {
  return (
    <Styled.Container>
      <div className="containerText col" data-aos="fade-right">
        <h3>Entre em contato!</h3>
        <p>Para mais informações sobre exames, entre em contato!</p>
        <a
          href="https://api.whatsapp.com/send?phone=5511945824194&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Eu%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta%20com%20Oftalmologista.%20"
          target="blanked"
        >
          <button className="buttonCallToAction">
            Fale com um de nossos atendentes!
          </button>
        </a>
      </div>
      <div className="imgContainer row" data-aos="fade-left">
        <img src={photo} alt="alogmerado de fotos com doutores e pacientes" />
      </div>
    </Styled.Container>
  );
}
