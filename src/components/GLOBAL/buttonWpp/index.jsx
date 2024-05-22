import * as Styled from "./style.js";
import { AiOutlineWhatsApp } from "react-icons/ai";
export default function WppButton() {
  return (
    <Styled.Container aria-label="Botão para o numero de contato">
      <a
        href="https://api.whatsapp.com/send?phone=5511950212678&text=Ol%C3%A1!%20Gostaria%20de%20marcar%20uma%20consulta%20com%20um%20m%C3%A9dico%20oftalmologista%20em%20Parais%C3%B3polis"
        target="blanked"
      >
        <AiOutlineWhatsApp className="btnWpp" />
        Entre em contato
      </a>
    </Styled.Container>
  );
}
