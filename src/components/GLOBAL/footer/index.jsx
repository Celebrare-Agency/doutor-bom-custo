import * as Styled from "./style";
import logo from "../../../assets/logoExtendWhite.svg";
import {
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlineLinkedin,
  AiOutlineFacebook,
} from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Modal from "../../FormHome/index";
import React, { useState } from "react";

export default function Footer() {  
  const [isModalVisible, setModalVisibility] = useState(false);

  const toggleModalVisibility = (modalId) => {
    setModalVisibility(!isModalVisible);
  };

  return (
    <Styled.Footer>
      {isModalVisible && (
        <Modal
          display={isModalVisible}
          onClose={() => toggleModalVisibility()}
          modalId="1"
        />
      )}
      <div className="footer row">
        <div className="left col">
          <Link to="/">
            <img src={logo} alt="logo do doutor bom Custo" />
          </Link>
          <p>
            A dr bom custo é uma intermediadora de serviços de saúde, estando
            apta apenas na intermediação entre clientes e entidades de saúde e
            não na prestação do mesmo. <br />
            Pensando em manter nossos clientes conectados com a nossa missão e
            novidades, criamos nossas redes sociais, através delas você poderá
            acompanhar de perto todas as novidades e informações. Acesse já!
          </p>

          <p><strong>CNPJ:</strong> 28.674.798/0001-76</p>
        </div>
        <div className="socialGrid">
          <a href="https://www.instagram.com/dr_bomcusto/" target="blanked">
            <div className="socialContainer row">
              <AiOutlineInstagram className="icon" />
              <p>doutorbomcusto</p>
            </div>
          </a>

          <a
            target="blanked"
            onClick={() => toggleModalVisibility()}
          >
            <div className="socialContainer row">
              <AiOutlineWhatsApp className="icon" />
              <p>(11) 94582-4194</p>
            </div>
          </a>

          <a href="https://www.facebook.com/doutorbomcusto/" target="blanked">
            <div className="socialContainer row">
              <AiOutlineFacebook className="icon" />
              <p>Dr Bom Custo</p>
            </div>
          </a>

          <a href="tel:1140400219">
            <div className="socialContainer row">
              <FaPhoneAlt className="icon" />
              <p>(11) 4040-0219</p>
            </div>
          </a>
        </div>
      </div>
      <div className="privacypart row">
        <Link to="/politica" target="_blank">
          <p>Política de privacidade</p>
        </Link>
        <p>Copyright © 2025 Doutor BomCusto </p>
        {/* <p>Termos de serviço</p> */}
      </div>
    </Styled.Footer>
  );
}
