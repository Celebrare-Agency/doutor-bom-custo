import React, { useState } from "react";
import * as Styled from "./style";
import Button from "../../GLOBAL/buttons";
import { useLocation } from "react-router-dom";
import Modal from "../../Forms/modal refrativa form/index.jsx";

export default function Questions() {
  const [ticketType, setTicketType] = useState(null); // Armazena o tipo de ingresso
  const location = useLocation();

  const [isModalVisible, setModalVisibility] = useState(false);

  const toggleModalVisibility = (modalId) => {
    setModalVisibility(!isModalVisible);
    // Lógica para lidar com o ID do modal se necessário
  };
  return (
    <Styled.Container>
      {isModalVisible && (
        <Modal
          display={isModalVisible}
          onClose={() => toggleModalVisibility()}
          modalId="1"
          ticketType={ticketType} // Passa o tipo de ingresso para o modal
        />
      )}
      <div className="container-questions">
        <h1 data-aos="fade-up">Você ainda está usando óculos ou lentes porque...</h1>
        <div className="container-check">
          <div className="auto" data-aos="fade-up">
            <div className="check">
              <label class="custom-checkbox">
                <input type="checkbox" id="scales" name="scales" />
                <span class="checkmark"></span>
              </label>
              <p>Não sabia da existência da cirurgia refrativa</p>
            </div>

            <div className="check">
              <label class="custom-checkbox">
                <input type="checkbox" id="scales" name="scales" />
                <span class="checkmark"></span>
              </label>
              <p>Não encontrou um local que se sinta seguro</p>
            </div>

            <div className="check">
              <label class="custom-checkbox">
                <input type="checkbox" id="scales" name="scales" />
                <span class="checkmark"></span>
              </label>
              <p>Acha que o procedimento não está ao seu alcance financeiro</p>
            </div>

            <div className="check">
              <label class="custom-checkbox">
                <input type="checkbox" id="scales" name="scales" />
                <span class="checkmark"></span>
              </label>
              <p>Ou simplesmente nunca parou pra pensar nisso?</p>
            </div>
          </div>
        </div>
        <p className="text-p" data-aos="fade-up">
          Caso tenha se identificado e deseja mudar essa realidade, você acaba
          de encontrar a solução perfeita para você!
        </p>
        <div data-aos="fade-up">
          <Button
            className="btn"
            text="Quero ME LIVRAR DOS ÓCULOS"
            display="none"            
            modalId="1" 
            toggleModalVisibility={toggleModalVisibility}        
          />
        </div>
      </div>
    </Styled.Container>
  );
}
