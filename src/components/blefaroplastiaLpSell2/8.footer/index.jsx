import * as Styled from "./style.js";
import brazil from "../../../assets/blefaroplastiaLpSell2/8.footer/brazil.svg";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <Styled.Container>
      <div className="initial-footer">
        <div className="container-initial-footer">
          <p className="address">
            Endereço: Av. Ipiranga, 344 - São Paulo - SP, 01046-010
          </p>

          <div className="contact">
            <h1>Contato</h1>
            <p>contato@doutorbomcusto.com.br</p>
            <p>Whatsapp: 11 94585-2272</p>
            {/* <p>Ligação: 11 5242-6486</p> */}
          </div>

          <div className="sociais">
            <h1>Redes sociais</h1>
            <div>
              <a
                href="https://www.facebook.com/doutorbomcusto/"
                target="blanked"
              >
                <FaFacebookF className="icon" />
              </a>
              {/* <a href="" target="blanked"><FaYoutube className="icon" /></a> */}
              <a
                href="https://api.whatsapp.com/send?phone=5511945852272&text=Ol%C3%A1!%20Eu%20gostaria%20de%20agendar%20uma%20consulta%20com%20Oftalmologista.%20"
                target="blanked"
              >
                <FaWhatsapp className="icon" />
              </a>
              <a href="https://www.instagram.com/dr_bomcusto/" target="blanked">
                <FaInstagram className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="end-footer">
        <div className="container-end-footer">
          <p>Copyright ©️ Doutor Bom Custo 2025.</p>
          <a href="">
            <p>Política de privacidade | Termos de serviço</p>
          </a>
          <p className="brazil">
            <img src={brazil} />
            PT/BR
          </p>
        </div>
      </div>
    </Styled.Container>
  );
}
