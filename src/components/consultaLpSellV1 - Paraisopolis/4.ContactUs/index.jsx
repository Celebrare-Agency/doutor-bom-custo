import * as Styled from "./style.js";
import photo from "../../../assets/consultaLpSellV1/contactUs/photo.png";
import BtnAds from "../../GLOBAL/btn-ads-modal/index.jsx";
import WppButton from "../../GLOBAL/buttonWpp/index.jsx";
export default function ContactUs() {
  return (
    <Styled.Container id="conversion">
      <div className="containerText col">
        <h3>Entre em contato!</h3>
        <p>Para mais informações sobre exames, entre em contato!</p>
        <WppButton />
      </div>
      <div className="imgContainer row">
        <img src={photo} alt="alogmerado de fotos com doutores e pacientes" />
      </div>
    </Styled.Container>
  );
}
