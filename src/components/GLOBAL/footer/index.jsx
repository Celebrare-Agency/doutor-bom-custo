import * as Styled from "./style";
import logo from "../../../assets/logoExtendWhite.svg";
import {
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlineLinkedin,
  AiOutlineFacebook,
} from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Styled.Footer>
      <div className="footer row">
        <div className="left col">
          <Link to="/">
            <img src={logo} alt="logo do doutor bom Custo" />
          </Link>
          <p>
            A dr bom custo é uma intermediadora de serviços de saúde, estando
            apta apenas na intermediação entre clientes e entidades de saúde e
            não na prestação do mesmo. <br />
            Pensando em manter nossos clientes conectados com a nossa missão e
            novidades, criamos nossas redes sociais, através delas você poderá
            acompanhar de perto todas as novidades e informações. Acesse já!
          </p>
        </div>
        <div className="socialGrid">
          <a href="https://www.instagram.com/dr_bomcusto/" target="blanked">
            <div className="socialContainer row">
              <AiOutlineInstagram className="icon" />
              <p>doutorbomcusto</p>
            </div>
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=5511950212678&text=Ol%C3%A1!%20Eu%20gostaria%20de%20agendar%20uma%20consulta%20com%20Oftalmologista.%20"
            target="blanked"
          >
            <div className="socialContainer row">
              <AiOutlineWhatsApp className="icon" />
              <p>11 95021-2678</p>
            </div>
          </a>

          <a href="https://www.facebook.com/doutorbomcusto/" target="blanked">
            <div className="socialContainer row">
              <AiOutlineFacebook className="icon" />
              <p>Dr Bom Custo</p>
            </div>
          </a>
        </div>
      </div>
      <div className="privacypart row">
        <Link to="/politica" target="_blank">
          <p>Política de privacidade</p>
        </Link>
        <p>Copyright © 2023 Doutor BomCusto </p>
        {/* <p>Termos de serviço</p> */}
      </div>
    </Styled.Footer>
  );
}
