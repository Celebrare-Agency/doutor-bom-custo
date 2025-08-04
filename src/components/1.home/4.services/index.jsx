import Modal from "../../FormHome/index.jsx";
import React, { useState } from "react";
import * as Styled from "./style.js";
import { Link } from "react-router-dom";


export default function Services() {
  const [isModalVisible, setModalVisibility] = useState(false);

  const toggleModalVisibility = (modalId) => {
    setModalVisibility(!isModalVisible);
  };

  return (
    <Styled.Container id="services">
      {isModalVisible && (
        <Modal
          display={isModalVisible}
          onClose={() => toggleModalVisibility()}
          modalId="1"
        />
      )}
      <p data-aos="fade-up">
        Nossos parceiros estão à sua disposição! Projetados para sua segurança e
        comodidade, cada detalhe do centro cirúrgico e das clínicas é pensado
        para proporcionar uma experiência tranquila, com instalações de última
        geração e equipe dedicada, para que você se sinta seguro desde a chegada
        até a recuperação. 
      </p>
      <h3 data-aos="fade-up">
        Confira algumas das especialidades disponíveis nas nossas clínicas
        parceiras:
      </h3>
      <div className="formGroup">
        <a
          target="blanked"
          data-aos="fade-tight"
          onClick={() => toggleModalVisibility()}
        >
          <button className="row">Oftalmologia</button>
        </a>
        <Link to="/catarata" data-aos="fade-left">
          <button className="row">Catarata</button>
        </Link>
        <Link to="/blefaroplastia" data-aos="fade-right">
          <button className="row">Blefaroplastia</button>
        </Link>
        <Link to="/refrativa" data-aos="fade-left">
          <button className="row">Cirurgia Refrativa</button>
        </Link>
      </div>
    </Styled.Container>
  );
}
