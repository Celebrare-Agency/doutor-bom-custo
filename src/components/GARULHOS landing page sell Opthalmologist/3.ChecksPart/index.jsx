import * as Styled from "./style.js";
import photo from "../../../assets/landing page sell Opthalmologist/check/image.png";
import styled from "styled-components";
import WppButton from "../../GLOBAL/buttonWpp/index.jsx";
import { Items3 } from "../../../mock/itemSellerPage3.js";
import { useState } from "react";

export default function Check() {
  const [checkedStates, setCheckedStates] = useState(Items3.map(() => false));

  const CheckboxContainer = styled.label`
    display: flex;
    gap: 2rem;
    align-items: center;
    cursor: pointer;
    color: var(--black, #2f3947);
    font-family: Inter;
    font-size: 20.56px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    user-select: none;
  `;

  const HiddenCheckbox = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  `;

  const CustomCheckbox = styled.div`
    width: 50.991px;
    height: 50.991px;
    flex-shrink: 0;
  `;

  const Checkmark = styled.svg`
    width: 100%;
    height: 100%;
    fill: none;
  `;

  const HiddenCheckmark = styled.path`
    stroke-dasharray: 56.5;
    stroke-dashoffset: 56.5;
    transition: stroke-dashoffset 0.3s;
  `;

  const VisibleCheckmark = styled.path`
    stroke-dasharray: 56.5;
    stroke-dashoffset: 0;
    transition: stroke-dashoffset 0.3s;
  `;

  const handleCheckboxChange = (index) => {
    const newCheckedStates = [...checkedStates];
    newCheckedStates[index] = !newCheckedStates[index];
    setCheckedStates(newCheckedStates);
  };

  return (
    <Styled.Container>
      <div className="containerText col">
        <h2>O que você sente ao enxergar?</h2>
        <div className="items col">
          {Items3.map((item, index) => (
            <CheckboxContainer key={index}>
              <HiddenCheckbox
                type="checkbox"
                checked={checkedStates[index]}
                onChange={() => handleCheckboxChange(index)}
              />
              <CustomCheckbox className="icons">
                <Checkmark viewBox="0 0 51 52">
                  <rect
                    y="0.80542"
                    width="50.9915"
                    height="50.9915"
                    rx="9.94955"
                    fill={checkedStates[index] ? "#3B4AE2" : "#898989"}
                  />
                  <HiddenCheckmark
                    d="M35.077 16.3733C35.0112 16.4156 32.309 19.4467 29.0757 23.1029C25.8425 26.7591 23.1262 29.795 23.0463 29.842C22.91 29.9266 22.8818 29.9266 22.7173 29.8655C22.5999 29.8232 21.862 29.1794 20.4804 27.9246C18.6429 26.2469 18.3891 26.0307 18.0696 25.8803C17.7594 25.7347 17.6654 25.7112 17.2659 25.6971C16.5516 25.6689 16.0958 25.8333 15.6164 26.2892C15.3063 26.5853 15.0525 27.0411 14.9632 27.4594C14.8551 27.9904 14.9867 28.6671 15.2875 29.1089C15.3579 29.2123 16.7114 30.8853 18.2998 32.8309C20.5744 35.6177 21.2323 36.3978 21.425 36.5247C21.7915 36.769 22.1393 36.8724 22.5811 36.8724C23.192 36.8724 23.6901 36.6657 24.1084 36.2333C24.2353 36.1064 26.538 32.4408 30.0814 26.7356C33.2536 21.6226 35.8994 17.3555 35.9605 17.2521C36.0169 17.1487 36.0686 17.003 36.0686 16.9325C36.0686 16.7304 35.9323 16.4767 35.7678 16.378C35.5845 16.2652 35.2415 16.2605 35.077 16.3733Z"
                    fill="#F1F8F9"
                  />
                  {checkedStates[index] && (
                    <VisibleCheckmark d="M12 26.3l8.6 8.6L36 15" />
                  )}
                </Checkmark>
              </CustomCheckbox>
              <p>{item.text}</p>
            </CheckboxContainer>
          ))}
          <p>
            Se você se relacionou com alguma das situações mencionadas, não
            hesite em buscar ajuda de profissionais médicos altamente
            qualificados. Eles estão disponíveis para ajudar a lidar com os
            desafios da baixa visão. Apenas <strong>R$19,90</strong>, entre em
            contato!
          </p>
          <WppButton />
        </div>
      </div>
      <div className="imgContainer row">
        <img src={photo} alt="idoso olhando para o horizonte triste" />
      </div>
    </Styled.Container>
  );
}
