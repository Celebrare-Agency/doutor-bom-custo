import * as Styled from "./style.js";
import React, { useState } from "react";
import { Skill } from "../../../mock/skillsItemns.js";
import doctor from "../../../assets/1.home/skills/photoDoctor.png";
import WppButton from "../../GLOBAL/buttonWppForm/index.jsx";
import BtnAds from "../../GLOBAL/btn-ads-modal/index.jsx";
import Modal from "../../FormHome/index.jsx";

export default function Skills() {  
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
      <div className="imgContainer row" data-aos="fade-right">
        <img src={doctor} alt="alogmerado de fotos com doutores e pacientes" />
      </div>
      <div className="skillSideContainer col">
        <a href="#diferenciais">
          <h2 data-aos="fade-left">
            Nossos Diferenciais <br />
            em Saúde Acessível
          </h2>
        </a>
        {Skill.map((item) => (
          <div key={item.id} className="itemsContainer col" data-aos="fade-left">
            <img src={item.img} alt={item.alt} />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
        <div data-aos="fade-left">
          <WppButton style={{ color: "black" }} modalId="1" toggleModalVisibility={toggleModalVisibility}  />
        </div>
      </div>
    </Styled.Container>
  );
}
