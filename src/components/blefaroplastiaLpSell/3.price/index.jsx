import * as Styled from "./style.js";

export default function Price() {
  return (
    <Styled.Container id="conversion">
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
          <li>Fio de sutura importado</li>
          <li>lente intraocular</li>
          <li>Consulta pré-operatória </li>
          <li>Consulta de pós operatório</li>
        </ol>
        <div className="pricePart col">
          <h2>TUDO ISSO POR:</h2>
          <p className="nonPrice">R$ 9.997,00</p>
          <p className="realPrice">R$ 5.900,00!!!</p>
        </div>
      </div>
    </Styled.Container>
  );
}
