import * as Styled from "./style.js";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { useLocation } from "react-router-dom";

export default function WppButton() {
  const location = useLocation();

  // Definindo a URL padrão do WhatsApp
  let whatsappLink =
    "https://api.whatsapp.com/send?phone=5511967681768&text=Ol%C3%A1!%20Eu%20gostaria%20de%20agendar%20uma%20consulta%20com%20Oftalmologista.%20";

  // Mudando a URL com base na rota
  if (location.pathname === "/paraisopolis-consulta") {
    whatsappLink =
      "https://api.whatsapp.com/send?phone=5511950212678&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20Oftalmologista%20em%20Parais%C3%B3polis%20-%20SP.";
  } else if (location.pathname === "/taboao-consulta") {
    whatsappLink =
      "https://api.whatsapp.com/send?phone=5511967681768&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20oftalmologista%20em%20Tabo%C3%A3o%20da%20Serra.";
  }
  return (
    <Styled.Container aria-label="Botão para o numero de contato">
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <AiOutlineWhatsApp className="btnWpp" />
        Entre em contato
      </a>
    </Styled.Container>
  );
}
