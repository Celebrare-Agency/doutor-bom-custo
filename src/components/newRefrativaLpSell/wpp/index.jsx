import * as Styled from "./style.js";
import Modal from "../../Forms/modal blefaroplastia form/index.jsx";
import BtnAds from "../../GLOBAL/btn-ads-modal";
import Button from "../../GLOBAL/buttons.jsx";
import React, { useState } from "react";

import { FaWhatsapp } from "react-icons/fa";
import imagem1 from "../../../assets/newRefrativaLpSell/wpp/imagem1.png";
import imagem2 from "../../../assets/newRefrativaLpSell/wpp/imagem2.png";
import imagem3 from "../../../assets/newRefrativaLpSell/wpp/imagem3.png";
import imagem4 from "../../../assets/newRefrativaLpSell/wpp/imagem4.png";
import imagem5 from "../../../assets/newRefrativaLpSell/wpp/imagem5.png";
import imagem6 from "../../../assets/newRefrativaLpSell/wpp/imagem6.png";

export default function WhatsApp() {
  const [isModalVisible, setModalVisibility] = useState(false);

  const toggleModalVisibility = (modalId) => {
    setModalVisibility(!isModalVisible);
  };

  return (
    <Styled.Container id="conversion">
      {isModalVisible && (
        <Modal
          display={isModalVisible}
          onClose={() => toggleModalVisibility()}
          modalId="1"
        />
      )}

      <div className="container-wtt" data-aos="fade-up">
        <p>
          Clique no botão ao lado e dê o primeiro passo para <br />
          realizar sua cirurgia refrativa!
        </p>

        <BtnAds
          modalId="1"
          toggleModalVisibility={toggleModalVisibility}
          text="Contato"
        />
      </div>

      <div className="why-am-i-doing-this">
        <div className="container-why">
          <h1 data-aos="fade-right">Por que estamos fazendo isso?</h1>
          <p data-aos="fade-left">
            Temos como propósito ajudar as 50 milhões de pessoas que usaram
            óculos durante toda a vida e agora deseja experimentar a vida com
            mais liberdade visual.
          </p>
        </div>
      </div>

      <div className="container-price" data-aos="fade-up">
        <h1>Agora é a sua vez</h1>

        <p>
          Você está a um passo de garantir a sua vaga no maior evento de
          liberdade visual do Brasil! Não perca a oportunidade de acordar e ver
          o mundo como ele realmente é.
        </p>

        <h1>
          LIBERTE-SE DOS ÓCULOS PELO VALOR MAIS <br /> ACESSÍVEL DE SÃO PAULO
        </h1>

        <Button
          className="btn"
          text="Acesse o mapa do meu sucesso agora"
          display="none"
          onClick={() => toggleModalVisibility("1", "vip")}
        />
      </div>

      <div className="imagens" data-aos="zoom-in">
        <img src={imagem1} />
        <img src={imagem2} />
        <img src={imagem3} />
        <img src={imagem4} />
        <img src={imagem5} />
        <img src={imagem6} />
      </div>
    </Styled.Container>
  );
}
