import * as Styled from "./style.js";
import PrimeiroDepoimento from "./ytDepoimentsIframe/index.jsx";
import { AiOutlineWhatsApp } from "react-icons/ai";

export default function Depoiments() {
  return (
    <Styled.Container>
      <div className="titlePart col">
        <h3>excelência</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="content row">
        <div className="video col">
          <PrimeiroDepoimento embedId="5eSMXdDXJgs" />
          <div className="containerText col">
            <h3>Maria Neide</h3>
            <p>
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,
              velit praesentium iusto repellendus consectetur molestiae
              blanditiis dolor repudiandae
            </p>
          </div>
        </div>
        <div className="video col">
          <PrimeiroDepoimento embedId="EsUG8wezPiA" />
          <div className="containerText col">
            <h3>Maria Lucia</h3>
            <p>
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla,
              velit praesentium iusto repellendus consectetur molestiae
              blanditiis dolor repudiandae
            </p>
          </div>
        </div>
      </div>
      <a
        href="https://api.whatsapp.com/send?phone=5511950212678"
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
