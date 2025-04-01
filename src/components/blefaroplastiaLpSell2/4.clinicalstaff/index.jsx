import React, { useState } from "react";
import * as Styled from "./style.js";
import Modal from "../../Forms/modal blefaroplastia form/index.jsx";
import BtnAds from "../../GLOBAL/btn-ads-modal/index.jsx";

import logo from "../../../assets/logoWhite.svg";
import imagem from "../../../assets/blefaroplastiaLpSell2/4.clinicalstaff/image1.png";
import imagem2 from "../../../assets/blefaroplastiaLpSell2/4.clinicalstaff/image2.png";
import imagem3 from "../../../assets/blefaroplastiaLpSell2/4.clinicalstaff/image3.png";
import imagem4 from "../../../assets/blefaroplastiaLpSell2/4.clinicalstaff/image4.png";
import imagem5 from "../../../assets/blefaroplastiaLpSell2/4.clinicalstaff/image5.png";
import imagem6 from "../../../assets/blefaroplastiaLpSell2/4.clinicalstaff/image6.png";

export default function ClinicalStaff() {
  const [isModalVisible, setModalVisibility] = useState(false);

  const toggleModalVisibility = (modalId) => {
    setModalVisibility(!isModalVisible);
    // Lógica para lidar com o ID do modal se necessário
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
      <div className="container-title">
        <img src={logo} />
        <h3>Corpo Clinico</h3>
      </div>

      <div className="hospital">
        <h1>Hospital especializada em blefaroplastia e face</h1>
        <p>
          Nosso corpo clínico é formado por médicos oftalmologistas
          especialistas em plástica ocular e um dermatologista especialista em
          cosmiatria e lasers. Acreditamos que “Quem faz de tudo um pouco, não
          faz nada direito”, por isso nossos profissionais são experts no
          assunto que dominam, afinal, a prática leva a perfeição.
        </p>

        <div className="imagens">
          <img src={imagem} />
          <img src={imagem2} />
          <img src={imagem3} />
          <img src={imagem4} />
          <img src={imagem5} />
          <img src={imagem6} />
        </div>
      </div>

      <div className="container-information">
        <div className="information">
          <h3>Atendimento humanizado</h3>
          <p>
            Não abrimos mão de criar um relacionamento verdadeiro e duradouro
            com nossas pacientes. Cada uma é única para nós!
          </p>
        </div>

        <div className="information">
          <h3>Excelência e sofisticação</h3>
          <p>
            Nossos médicos são comprometidos com a excelência e estão sempre
            atualizados com as técnicas mais sofisticadas que a medicina
            oferece.
          </p>
        </div>

        <div className="information">
          <h3>Médicos especialistas</h3>
          <p>
            A prática leva a perfeição. O corpo clínico é formado por médicos
            oftalmologistas e dermatologistas especialistas na sua área de
            atuação.
          </p>
        </div>

        <div className="information">
          <h3>+ 2000 cirurgias</h3>
          <p>
            Especialistas em blefaroplastia, nossos médicos já realizam mais de
            5.000 cirurgias de pálpebras. Realize seu sonho com tranquilidade.
          </p>
        </div>
      </div>
      <BtnAds
        modalId="1"
        toggleModalVisibility={toggleModalVisibility}
        text=" QUERO REALIZAR O SONHO DA BLEFAROPLASTIA"
      />
    </Styled.Container>
  );
}
