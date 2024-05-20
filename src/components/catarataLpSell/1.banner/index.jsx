import * as Styled from "./style.js";
import discountFlag from "../../../assets/catarataLpSell/1.banner/flagDisccount.png";
import BtnAds from "../../GLOBAL/btn-ads-modal/index.jsx";
export default function Banner() {
  return (
    <Styled.Container>
      <div className="col LeftSideContent">
        <h2>A promoção está prestes a acabar! Aproveite agora!</h2>
        <h1>
          Cirurgia de catarata <br />
          por <b>R$ 2.900,00</b> em São Paulo.
        </h1>
        <p>
          Pacote Completo com Lente Importada e Exames. <br></br>Parcelamos em
          até <b>12x</b>.
        </p>
        <div>
          <span>*preço exclusivo por olho</span>
        </div>
        <BtnAds />
        <img className="flags" src={discountFlag} alt="flag de desconto" />
      </div>
    </Styled.Container>
  );
}
