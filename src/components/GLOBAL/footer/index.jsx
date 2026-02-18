import * as Styled from "./style";
import logo from "../../../assets/logoExtendBlue.svg";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";

export default function Footer() {
  return (
    <Styled.Footer>
      <div className="main-content">
        <div className="column brand-column">
          <img src={logo} alt="Doutor Bom Custo" className="footer-logo" />
          <p>
            A Doutor Bom Custo é uma intermediadora de serviços de saúde,
            estando apta apenas na intermediação entre clientes e entidades de
            saúde e não na prestação do mesmo.
          </p>
          <p>
            Pensando em manter nossos clientes conectados com a nossa missão e
            novidades, criamos nossas redes sociais, através delas você poderá
            acompanhar de perto todas as novidades e informações. Acesse já!
          </p>
        </div>

        <div className="column info-column">
          <div className="info-block">
            <h3>OAS CLINICA MEDICA LTDA.</h3>
            <p>28.674.798/0001-76</p>
          </div>

          <div className="info-block">
            <h3>CONTATO</h3>
            <p>contato@doutorbomcusto.com.br</p>
            <p>Whatsapp: (11) 94582-4194</p>
            <p>Ligação: (11) 4040-0219</p>
          </div>
        </div>

        <div className="column social-column">
          <h3>REDES SOCIAIS</h3>
          <div className="icons">
            <a
              href="https://www.facebook.com/doutorbomcusto/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/dr_bomcusto/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="bottom-bar">
        <div className="container-bottom-bar">
          <p>Copyright © Doutor Bom Custo 2026.</p>
          <Link to="/politica">Política de privacidade</Link>
        </div>
      </div>
    </Styled.Footer>
  );
}
