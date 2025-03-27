import * as Styled from "./style.js";
import React from "react";

import logo from "../../../assets/logoWhite.svg";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Banner() {

  return (
    <Styled.Container>
      <div className="container-header">
        <p>Acompanhe nossas redes:</p>
        
        <div className="sociais">            
          <a href="https://www.facebook.com/doutorbomcusto/" target="blanked"><FaFacebookF  className="icon" /></a>
          {/* <a href="" target="blanked"><FaYoutube className="icon" /></a> */}
          <a href="https://api.whatsapp.com/send?phone=5511950212678&text=Ol%C3%A1!%20Eu%20gostaria%20de%20agendar%20uma%20consulta%20com%20Oftalmologista.%20" target="blanked"><FaWhatsapp className="icon" /></a>
          <a href="https://www.instagram.com/dr_bomcusto/" target="blanked"><FaInstagram className="icon" /></a>
        </div>
      </div>

      <div className="banner">
        <img src={logo} alt="logotipo" />
        <h1>Faça a tão sonhada cirurgia das pálpebras
        com uma equipe de médicos especialistas
        em blefaroplastia</h1>
        <button>Agende a sua avaliação</button>
      </div>
    </Styled.Container>
  );
}
