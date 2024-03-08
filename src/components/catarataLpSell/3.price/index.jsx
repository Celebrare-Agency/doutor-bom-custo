import * as Styled from "./style.js";
import { Link } from "react-router-dom";
import discountFlag from "../../../assets/catarataLpSell/1.banner/flagDisccount.png";
import { AiOutlineWhatsApp } from "react-icons/ai";

export default function Price() {
  return (
    <Styled.Container>
      <div className="content col">
        <div className="titlePart col">
          <h3>O que está incluso</h3>
          <p>você vai receber mais de dois mil reais de desconto!</p>
        </div>
        <ol className="col">
          <li>Médico cirurgião</li>
          <li>Médico cirurgião auxiliar</li>
          <li>Instrumentador </li>
          <li>Aluguel do centro cirúrgico</li>
          <li>Todos os insumos</li>
          <li>lente intraocular</li>
          <li>Consulta de pós operatório</li>
          <li>Exame de ceratometria; Biometria; MEC;</li>
        </ol>
        <div className="pricePart col">
          <h2>TUDO ISSO POR:</h2>
          <p className="nonPrice">R$ 5.997,00</p>
          <p className="realPrice">R$ 2.900,00!!!</p>
        </div>
      </div>
    </Styled.Container>
  );
}
