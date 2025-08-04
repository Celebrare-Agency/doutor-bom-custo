import * as Styled from "./style.js";
import { Services } from "../../../mock/servicesOftal.js";
import React, { useState } from "react";
import Modal from "../../FormHome/index.jsx";
export default function Exames() {    
  const [isModalVisible, setModalVisibility] = useState(false);

  const toggleModalVisibility = (modalId) => {
    setModalVisibility(!isModalVisible);
  };
  
  return (
    <Styled.Container>      
      {isModalVisible && (
        <Modal
          display={isModalVisible}
          onClose={() => toggleModalVisibility()}
          modalId="1"
        />
      )}
      <a href="#exames">
        <h2 data-aos="fade-up">Exames</h2>
      </a>
      <div className="containerCard row">
        {Services.map((item) => (
          <div className="card col" key={item.id} data-aos="fade-up">
            <details>
              <summary>{item.title}</summary>
              <p>{item.text}</p>
            </details>
            <div className="btnContainer">
              <a                
                target="blanked"
              >
                <button onClick={() => toggleModalVisibility()}>Entrar em contato</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </Styled.Container>
  );
}
