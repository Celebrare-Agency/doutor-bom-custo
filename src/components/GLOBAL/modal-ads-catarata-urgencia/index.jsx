import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "../../modalForm/index";
import { MdWarning } from "react-icons/md"; // Importando o ícone de alerta do React Icons
import CustomButton from "../btn-ads-modal/index"; // Importe o componente de botão personalizado

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  z-index: 999; /* Ensure it stays below the form modal */
`;

const ModalWrapper = styled.div`
  background-color: var(--light); /* Cor de fundo do site */
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const UrgentText = styled.h2`
  color: var(--blue); /* Cor azul do site */
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const PersuasiveText = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  color: var(--black); /* Cor preta do site */
`;

const ModalComponent = ({ isFormModalOpen }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalShown, setModalShown] = useState(false);

  useEffect(() => {
    if (!isFormModalOpen) {
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isFormModalOpen]);

  // Função para lidar com beforeunload
  const handleBeforeUnload = (e) => {
    if (showModal && !modalShown) {
      const confirmationMessage =
        "Tem certeza que deseja sair? Você pode perder uma oferta especial!";
      e.returnValue = confirmationMessage;
      return confirmationMessage;
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalShown(true);
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  const [isModalVisible, setModalVisibility] = useState(false);

  const toggleModalVisibility = (modalId) => {
    setModalVisibility(!isModalVisible);
    // Lógica para lidar com o ID do modal se necessário
  };

  return (
    <>
      {isModalVisible && (
        <Modal
          display={isModalVisible}
          onClose={() => toggleModalVisibility()}
          modalId="1" // Você pode passar o modalId se necessário
        />
      )}
      {showModal && (
        <ModalBackground onClick={handleModalClick} id="conversion">
          <ModalWrapper>
            <UrgentText>
              <MdWarning size={32} style={{ marginRight: "10px" }} />
              ATENÇÃO!!!
            </UrgentText>
            <UrgentText>A promoção vai acabar em breve!</UrgentText>
            <PersuasiveText>
              Clique no botão abaixo para falar com um atendente e não perder a
              promoção. Haverá um aumento de 40% após o dia 30/05.
            </PersuasiveText>
            <CustomButton
              modalId="1"
              toggleModalVisibility={toggleModalVisibility}
            >
              Entrar em contato
            </CustomButton>
          </ModalWrapper>
        </ModalBackground>
      )}
    </>
  );
};

export default ModalComponent;
