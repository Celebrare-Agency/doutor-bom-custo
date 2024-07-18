import * as Styled from "./style.js";
import doctorSmiling from "../../../assets/1.home/banner/doctorSmiling.png";
import { Link } from "react-router-dom";
import oldWoman from "../../../assets/1.home/banner/oldWoman.png";
import WppButton from "../../GLOBAL/buttonWpp/index.jsx";
export default function Banner() {
  return (
    <Styled.Container>
      <img
        src={doctorSmiling}
        alt="doutora sorrindo por estar feliz em atender pacientes"
        className="DoctorSmilingImage"
      />
      <div className="middlePartContainer col">
        <h1>
          Procurando por
          <br /> médico oftalmologista
          <br /> bom e barato?
        </h1>
        <div className="buttonsContainer row">
          <WppButton />
          <a href="#services">
            <button type="button" className="buttonScroll">
              Serviços
            </button>
          </a>
        </div>
        <hr />
        <p>
          A Doutor Bom Custo te conecta com os melhores médicos oftalmologistas
          e com os menores preços do mercado. Assim você pode cuidar da sua
          saúde sem se preocupar com a saúde do seu bolso e tudo isso sendo
          atendido pelos melhores médicos oftalmologistas de São Paulo!
        </p>
      </div>
      <img
        src={oldWoman}
        alt="senhora sorrindo e feliz por estar sendo ajudada por uma médica"
        className="oldWomanImage"
      />
    </Styled.Container>
  );
}
