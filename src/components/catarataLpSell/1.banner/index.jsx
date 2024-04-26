import * as Styled from "./style.js";
import { Link } from "react-router-dom";
import discountFlag from "../../../assets/catarataLpSell/1.banner/flagDisccount.png";
import { AiOutlineWhatsApp } from "react-icons/ai";

export default function Banner() {
  return (
    <Styled.Container>
      <div className="col LeftSideContent">
        <h1>
          Cirurgia de catarata <br />
          por <b>R$ 2.900,00</b>.
        </h1>
        <p>
          Pacote Completo com Lente Importada e Exames. <br></br>Parcelamos em
          até <b>12x</b>.
        </p>
        <div>
          <h2>válido até dia 30/05!</h2>
          <span>*preço exclusivo por olho</span>
        </div>
        <a
          href="https://api.whatsapp.com/send?phone=5511950212678"
          target="blanked"
        >
          <button className="row">
            <AiOutlineWhatsApp className="btnWpp" />
            Entre em contato
          </button>
        </a>
        <img className="flags" src={discountFlag} alt="flag de desconto" />
      </div>
    </Styled.Container>
  );
}
