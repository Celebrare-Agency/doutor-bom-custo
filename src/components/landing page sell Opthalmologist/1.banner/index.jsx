import * as Styled from "./style.js";
import oldMan from "../../../assets/landing page sell Opthalmologist/banner/oldMan.png";
import figureDiscount from "../../../assets/landing page sell Opthalmologist/banner/discountFigure.png";
import WppButton from "../../buttonWpp/index.jsx";
export default function Banner() {
  return (
    <Styled.Container>
      <div className="middlePartContainer col">
        <h1>
          R$ 19,90 por uma consulta <br />
          oftalmológica
        </h1>
        <p>
          Você merece o melhor cuidado para os seus olhos e por apenas R$ 19,90,
          você terá acesso aos principais oftalmologistas da cidade de São
          Paulo! Essa é uma oportunidade imperdível que você não encontrará em
          nenhum outro lugar.
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
