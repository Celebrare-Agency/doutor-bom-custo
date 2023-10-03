import * as Styled from "./style";
import logo from "../../assets/logoExtendWhite.svg";
import {
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlineLinkedin,
  AiOutlineFacebook,
} from "react-icons/ai";

export default function Footer() {
  return (
    <Styled.Footer>
      <div className="footer row">
        <div className="left col">
          <img src={logo} alt="logo do doutor bom Custo" />
          <p>
            Pensando em manter nossos clientes conectados com a nossa missão e
            novidades, selecionamos a melhor equipe de atendimento, através
            delas você poderá acompanhar de perto todas as novidades e
            informações. Entre em contato
          </p>
        </div>
        <div className="socialGrid">
          {/* <a href="https://www.instagram.com/doutorbomcusto/" target="blanked">
            <div className="socialContainer row">
              <AiOutlineInstagram className="icon" />
              <p>doutorbomcusto</p>
            </div>
          </a> */}

          <a
            href="https://api.whatsapp.com/send?phone=5511950212678&text=Ol%C3%A1!%20Eu%20gostaria%20de%20agendar%20uma%20consulta%20com%20Oftalmologista.%20"
            target="blanked"
          >
            <div className="socialContainer row">
              <AiOutlineWhatsApp className="icon" />
              <p>11 95021-2678</p>
            </div>
          </a>

          {/* <a
            href="https://www.facebook.com/people/Dr-Bom-Custo/61551555542534/"
            target="blanked"
          >
            <div className="socialContainer row">
              <AiOutlineFacebook className="icon" />
              <p>Dr Bom Custo</p>
            </div>
          </a> */}
        </div>
      </div>
      <div className="privacypart row">
        {/* <p>Política de privacidade</p> */}
        <p>Copyright © 2023 Doutor BomCusto </p>
        {/* <p>Termos de serviço</p> */}
      </div>
    </Styled.Footer>
  );
}
