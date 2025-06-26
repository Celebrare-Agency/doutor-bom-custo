import * as Styled from "./style.js";

export default function Price() {
  return (
    <Styled.Container id="conversion">
      <div className="content col">
        <div className="titlePart col" data-aos="fade-right">
          <a href="#preco">
            <h3>O que está incluso</h3>
          </a>
          <p>você vai receber mais de dois mil reais de desconto!</p>
        </div>
        <ol className="col" data-aos="fade-right">
          <li>Médico cirurgião</li>
          <li>Médico cirurgião auxiliar</li>
          <li>Instrumentador </li>
          <li>Aluguel do centro cirúrgico</li>
          <li>Todos os insumos</li>
          <li>Consulta de pós operatório</li>
          <li>Todos os exames necessários</li>
        </ol>
        <div className="pricePart col" data-aos="fade-right">
          <h2>TUDO ISSO POR:</h2>
          <p className="nonPrice">R$ 5.997,00</p>
          <p className="realPrice">R$ 3.900,00!!!</p>
        </div>
      </div>
    </Styled.Container>
  );
}
