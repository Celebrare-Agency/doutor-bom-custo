import * as Styled from "./style.js";
import photo from "../../../assets/1.home/contact/photo.png";
import WppButton from "../../GLOBAL/buttonWpp/index.jsx";
export default function Contact() {
  return (
    <Styled.Container id="aaaaasdada">
      <div className="containerText col" data-aos="fade-right">
        <h3>Entre em contato com um dos nossos especialistas!</h3>

        <WppButton />
      </div>
      <div className="imgContainer row" data-aos="fade-left">
        <img src={photo} alt="alogmerado de fotos com doutores e pacientes" />
      </div>
    </Styled.Container>
  );
}
