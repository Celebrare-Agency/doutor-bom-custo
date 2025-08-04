import * as Styled from "./style.js";
import { Services } from "../../../mock/servicesOftal.js";
import BtnAds from "../../GLOBAL/btn-ads-modal/index.jsx";
import WppButton from "../../GLOBAL/buttonWppForm/index.jsx";
import React, { useState } from "react";
import Modal from "../../FormHome/index.jsx";

export default function Exames() {    
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
      <a href="#contato">
        <h2 data-aos="fade-up">Exames</h2>
      </a>
      <div className="containerCard row" data-aos="fade-up">
        {Services.map((item) => (
          <div className="card col" key={item.id}>
            <details>
              <summary>{item.title}</summary>
              <p>{item.text}</p>
            </details>
            <div className="btnContainer">
              <WppButton           
                modalId="1" 
                toggleModalVisibility={toggleModalVisibility}  
              />
            </div>
          </div>
        ))}
      </div>
    </Styled.Container>
  );
}
