import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const blinkingAnimation = keyframes`
  0% { color: var(--blue); }
  50% { color: var(--blueHover); }
  100% { color: var(--blue); }
`;

const ModalContainer = styled.div`
  width: 100%;
  background-color: var(--light);
  padding: 20px 0;
  text-align: center;
  z-index: 9999;
  margin-top: 100px;
`;

const BlinkingText = styled.span`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  /* display: inline-block; */
  line-height: 1.2;
  animation: ${blinkingAnimation} 1s infinite;
`;

const PromotionModal = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      {showModal && (
        <ModalContainer>
          <BlinkingText>
            A promoção está prestes a acabar! Aproveite agora!
          </BlinkingText>
        </ModalContainer>
      )}
    </>
  );
};

export default PromotionModal;
