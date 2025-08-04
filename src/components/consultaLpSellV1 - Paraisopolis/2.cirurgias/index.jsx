import { SurgeryS } from "../../../mock/cirurgiasOftal.js";
import BtnAds from "../../GLOBAL/btn-ads-modal/index.jsx";
import WppButton from "../../GLOBAL/buttonWppForm/index.jsx";
import * as Styled from "./style.js";
import React, { useState } from "react";
import Modal from "../../FormHome/index.jsx";

export default function Surgery() {  
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
      <a href="#sobre">
        <h2 data-aos="fade-up">Cirurgias</h2>
      </a>
      <div className="containerCard row" data-aos="fade-up">
        {SurgeryS.map((item) => (
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
