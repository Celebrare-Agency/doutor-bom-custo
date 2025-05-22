import * as Styled from "./style.js";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { useLocation } from "react-router-dom";

export default function WppButton() {
  let whatsappLink =
    "https://api.whatsapp.com/send?phone=5511945824194&text=Ol%C3%A1!%20Eu%20gostaria%20de%20agendar%20uma%20consulta%20com%20Oftalmologista.%20";

  return (
    <Styled.Container aria-label="Botão para o numero de contato">
      <a
        href="https://api.whatsapp.com/send?phone=5511945824194&text=Olá!%20Eu%20gostaria%20de%20falar%20com%20um%20especialista.%20"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineWhatsApp className="btnWpp" />
        Entre em contato
      </a>
      <></>
    </Styled.Container>
  );
}
