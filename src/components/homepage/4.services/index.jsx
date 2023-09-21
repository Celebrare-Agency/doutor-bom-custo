import * as Styled from "./style.js";
import ophitalmologistIcon from "../../../assets/homepage/services/ophitalmologistIcon.svg";

export default function Services() {
  return (
    <Styled.Container>
      <p>
        Nossos parceiros estão à sua disposição! Projetados para sua segurança e
        comodidade, cada detalhe do centro cirúrgico e das clínicas é pensado
        para proporcionar uma experiência tranquila, com instalações de última
        geração e equipe dedicada, para que você se sinta seguro desde a chegada
        até a recuperação. 
      </p>
      <h3>
        Confira algumas das especialidades disponíveis nas nossas clínicas
        parceiras:
      </h3>
      <button className="row">
        <img src={ophitalmologistIcon} alt="icone de oftalmologia" />
        oftalmologia
      </button>
    </Styled.Container>
  );
}
