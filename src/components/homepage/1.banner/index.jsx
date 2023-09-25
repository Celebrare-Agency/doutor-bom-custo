import * as Styled from "./style.js";
import doctorSmiling from "../../../assets/homepage/banner/doctorSmiling.png";
import { Link } from "react-router-dom";
import oldWoman from "../../../assets/homepage/banner/oldWoman.png";
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
          Precisa de médico <br /> bom e barato?
        </h1>
        <div className="buttonsContainer row">
          <a href="https://www.google.com/" target="blanked">
            <button type="button" className="buttonContactUs">
              Entre em contato
            </button>
          </a>
          <Link to="/oftalmo">
            <button type="button" className="buttonScroll">
              Saiba mais
            </button>
          </Link>
        </div>
        <hr />
        <p>
          A Doutor Bom Custo te conecta com os melhores médicos e com os menores
          preços do mercado. Assim você pode cuidar da sua saúde sem se
          preocupar com a saúde do seu bolso e tudo isso sendo atendido pelos
          melhores médicos de São Paulo!
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
