import * as Styled from "./style.js";
import oldMan from "../../../assets/landing page sell Opthalmologist/banner/oldMan.png";
import figureDiscount from "../../../assets/landing page sell Opthalmologist/banner/discountFigure.png";
import WppButton from "../../buttonWpp/index.jsx";
export default function Banner() {
  return (
    <Styled.Container>
      <div className="middlePartContainer col">
        <h1>
          Consulta com Oftalmologista em Clínica Particular com Valores
          Acessíveis em Taboão da Serra.
        </h1>
        <p>
          Agendamento disponível com preços especiais por tempo limitado.
          Aproveite!
          <br />
          <br />
          <b>Não atendemos convênios e planos de saúde.</b>
          <br />
          <br />
          Clique no botão abaixo e fale conosco pelo Whatsapp
        </p>
        <div className="buttonsContainer ">
          <WppButton />
        </div>
        <img
          className="figureImage"
          src={figureDiscount}
          alt="imagem de 19,90 desconto"
        />
      </div>
      <img
        src={oldMan}
        alt="senhor sorrindo e feliz por estar sendo ajudada por um médico"
        className="oldManImage"
      />
    </Styled.Container>
  );
}
