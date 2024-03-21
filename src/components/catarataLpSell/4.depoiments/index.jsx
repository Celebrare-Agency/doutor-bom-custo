import * as Styled from "./style.js";
import PrimeiroDepoimento from "./ytDepoimentsIframe/index.jsx";
import { AiOutlineWhatsApp } from "react-icons/ai";

export default function Depoiments() {
  return (
    <Styled.Container>
      <div className="titlePart col">
        <h3>excelência</h3>
        <p>Mais de 5mil pacientes operados e satisfeitos!</p>
      </div>
      <div className="content row">
        <div className="video col">
          <PrimeiroDepoimento embedId="5eSMXdDXJgs" />
          <div className="containerText col">
            <h3>Maria Neide</h3>
            <p>Veja como a cirurgia de catarata mudou a vida de Maria Neide</p>
          </div>
        </div>
        <div className="video col">
          <PrimeiroDepoimento embedId="EsUG8wezPiA" />
          <div className="containerText col">
            <h3>Maria Lucia</h3>
            <p>
              {" "}
              Maria Lucia, confiante e satisfeita com o resultado da cirurgia de
              catarata.
            </p>
          </div>
        </div>
      </div>
      <a
        href="https://api.whatsapp.com/send?phone=5511950212678&text=Ol%C3%A1,%20Gostaria%20de%20dar%20procedimento%20a%20minha%20cirurgia%20de%20catarata!"
        target="blanked"
      >
        <button className="row">
          <AiOutlineWhatsApp className="btnWpp" />
          Marque sua consulta!
        </button>
      </a>
    </Styled.Container>
  );
}
