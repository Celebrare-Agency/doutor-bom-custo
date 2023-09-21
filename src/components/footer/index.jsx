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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.
          </p>
        </div>
        <div className="socialGrid">
          <div className="socialContainer row">
            <AiOutlineInstagram className="icon" />
            <p>XXXXXXX</p>
          </div>
          <div className="socialContainer row">
            <AiOutlineWhatsApp className="icon" />
            <p>XXXXXXX</p>
          </div>
          <div className="socialContainer row">
            <AiOutlineFacebook className="icon" />
            <p>XXXXXXX</p>
          </div>
          <div className="socialContainer row">
            <AiOutlineLinkedin className="icon" />
            <p>XXXXXXX</p>
          </div>
        </div>
      </div>
      <div className="privacypart row">
        <p>Política de privacidade</p>
        <p>Copyright © 2023 Doutor BomCusto </p>
        <p>Termos de serviço</p>
      </div>
    </Styled.Footer>
  );
}
