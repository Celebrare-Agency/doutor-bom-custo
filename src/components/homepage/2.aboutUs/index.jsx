import * as Styled from "./style.js";
import imgHospital from "../../../assets/homepage/aboutUs/hospital.png";
import { Timeline } from "../../../mock/timelinestory.js";
export default function AboutUs() {
  return (
    <Styled.Container>
      <div className="topContainer">
        <img
          src={imgHospital}
          alt="imagem de dentro do nosso centro cirurgico"
        />
        <div className="containerTextTitle col">
          <h2>
            Dr. Bom Custo: <br />
            Saúde de Qualidade <br />
            ao Alcance de Todos{" "}
          </h2>
          <p>
            A Dr. Bom Custo nasceu de um sonho de trazer atendimento de
            qualidade com preço baixo.
          </p>
        </div>
      </div>
      <div className="timelineContainer col">
        <hr className="line" />
        {Timeline.map((item) => (
          <div className="timelineYears row">
            <span>{item.year}</span>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </Styled.Container>
  );
}
