import * as Styled from "./style.js";

import { FaWhatsapp } from "react-icons/fa";
import imagem from "../../../assets/blefaroplastiaLpSell2/6.whatsApp/imagem.png";

export default function WhatsApp() {

  return (
    <Styled.Container>
      <div className="container-wtt">
        <p>Clique no botão ao lado e dê o primeiro passo para realizar
        seu sonho da blefaroplastia marcando uma avaliação</p>        
        <button><FaWhatsapp /> WhatsApp</button>
      </div>

      <div className="imagens">
          <img src={imagem} />          
          <img src={imagem} />
          <img src={imagem} />
          <img src={imagem} />
          <img src={imagem} />
          <img src={imagem} />
        </div>
    </Styled.Container>
  );
}
