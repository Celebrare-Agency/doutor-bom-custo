import * as Styled from "./style.js";
import React, { useState } from "react";
import photo from "../../../assets/1.home/contact/photo.png";
import WppButton from "../../GLOBAL/buttonWppForm/index.jsx";
import Modal from "../../FormHome/index.jsx";
export default function Contact() {  
  const [isModalVisible, setModalVisibility] = useState(false);

  const toggleModalVisibility = (modalId) => {
    setModalVisibility(!isModalVisible);
  };

  return (
    <Styled.Container id="aaaaasdada">
      {isModalVisible && (
        <Modal
          display={isModalVisible}
          onClose={() => toggleModalVisibility()}
          modalId="1"
        />
      )}
      <div className="containerText col" data-aos="fade-right">
        <h3>Entre em contato com um dos nossos especialistas!</h3>

        <WppButton 
          modalId="1" 
          toggleModalVisibility={toggleModalVisibility} 
        />
      </div>
      <div className="imgContainer row" data-aos="fade-left">
        <img src={photo} alt="alogmerado de fotos com doutores e pacientes" />
      </div>
    </Styled.Container>
  );
}
