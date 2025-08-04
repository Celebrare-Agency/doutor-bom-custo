import * as Styled from "./style.js";
import { AiOutlineWhatsApp } from "react-icons/ai";

export default function WppButton({ toggleModalVisibility }) {
  let whatsappLink =
    "https://api.whatsapp.com/send?phone=5511945824194&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Eu%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta%20com%20Oftalmologista.%20";

  return (
    <Styled.Container aria-label="Botão para o numero de contato">
      <a
        href="https://api.whatsapp.com/send?phone=5511945824194&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Eu%20vim%20pelo%20site%20e%20gostaria%20de%20falar%20com%20um%20especialista.%20"
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          e.preventDefault(); 
          toggleModalVisibility();
        }}
      >
        <AiOutlineWhatsApp className="btnWpp" />
        Entre em contato
      </a>
    </Styled.Container>
  );
}