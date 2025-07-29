import React, { useState } from "react";
import * as Styled from "./style.js";
import logo from "../../assets/logoExtendBlue.svg";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { PiTiktokLogoLight } from "react-icons/pi";
import ModalCatarata from "../../components/formsLinks/modal catarata form/index.jsx";
import ModalRefrativa from "../../components/formsLinks/modal refrativa form/index.jsx";
import ModalBlefaroplastia from "../../components/formsLinks/modal blefaroplastia form/index.jsx";

export default function Linktree() {
  const [isModalVisible, setModalVisibility] = useState(false);
  const [modalId, setModalId] = useState(null);

  const toggleModalVisibility = (id) => {
    setModalVisibility(!isModalVisible); 
    setModalId(id); 
  };

  return (
    <Styled.Container>
      {isModalVisible && modalId === "catarata" && (
        <ModalCatarata
          display={isModalVisible}
          onClose={() => toggleModalVisibility()}
          modalId="1"
        />
      )}
      {isModalVisible && modalId === "refrativa" && (
        <ModalRefrativa
          display={isModalVisible}
          onClose={() => toggleModalVisibility()}
          modalId="refrativa"
        />
      )}
      {isModalVisible && modalId === "blefaroplastia" && (
        <ModalBlefaroplastia
          display={isModalVisible}
          onClose={() => toggleModalVisibility()}
          modalId="blefaroplastia"
        />
      )}

      <section className="col">
        <div className="introductionContainer col">
          <img src={logo} alt="foto abstrata minha" />
          <h1>Doutor Bom Custo</h1>
        </div>

        <div className="iconRedes row">
          <FiFacebook
            className="icon"
            onClick={() =>
              window.open("https://www.facebook.com/doutorbomcusto/")
            }
          />
          <FaInstagram
            className="icon"
            onClick={() =>
              window.open("https://www.instagram.com/dr_bomcusto/")
            }
          />
          <PiTiktokLogoLight
            className="icon"
            onClick={() => window.open("https://www.tiktok.com/@dr.bomcusto")}
          />
        </div>

        <div className="linksContainer">
          <div
            className="link catarata"
            onClick={() => toggleModalVisibility("catarata")}
            style={{ cursor: "pointer" }}
          >
            <h3>Cirurgia de Catarata</h3>
            <p>Saiba mais sobre a cirurgia de catarata.</p>
          </div>

          <div
            className="link refrativa"
            onClick={() => toggleModalVisibility("refrativa")}
            style={{ cursor: "pointer" }}
          >
            <h3>Cirurgia Refrativa</h3>
            <p>Saiba mais sobre a cirurgia refrativa.</p>
          </div>

          <div
            className="link blefaroplastia"
            onClick={() => toggleModalVisibility("blefaroplastia")}
            style={{ cursor: "pointer" }}
          >
            <h3>Cirurgia de Blefaroplastia</h3>
            <p>Saiba mais sobre a cirurgia de blefaroplastia.</p>
          </div>

          <a
            href="https://doutorbomcusto.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="link site">
              <h3>Site Oficial</h3>
              <p>Visite nosso site oficial.</p>
            </div>
          </a>
        </div>
      </section>
    </Styled.Container>
  );
}
