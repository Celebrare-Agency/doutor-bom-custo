import * as Styled from "./style.js";
import { AiOutlineWhatsApp } from "react-icons/ai";
export default function WppButton() {
  return (
    <Styled.Container aria-label="Botão para o numero de contato">
      <a
        href="https://api.whatsapp.com/send?phone=5511967681768&text=Ol%C3%A1!%20Eu%20gostaria%20de%20agendar%20uma%20com%20Oftalmologista.%20"
        target="blanked"
      >
        <AiOutlineWhatsApp className="btnWpp" />
        Entre em contato
      </a>
    </Styled.Container>
  );
}
