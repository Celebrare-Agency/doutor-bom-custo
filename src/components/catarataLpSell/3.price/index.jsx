import * as Styled from "./style.js";

export default function Price() {
  return (
    <Styled.Container id="conversion">
      <div className="content col">
        <div className="titlePart col">
          <a href="#preco" data-aos="fade-right">
            <h3>O que está incluso</h3>
          </a>
          <p data-aos="fade-right">você vai receber mais de dois mil reais de desconto!</p>
        </div>
        <ol className="col">
          <li data-aos="fade-right">Médico cirurgião</li>
          <li data-aos="fade-right">Médico cirurgião auxiliar</li>
          <li data-aos="fade-right">Instrumentador </li>
          <li data-aos="fade-right">Aluguel do centro cirúrgico</li>
          <li data-aos="fade-right">Todos os insumos</li>
          <li data-aos="fade-right">lente intraocular</li>
          <li data-aos="fade-right">Consulta de pós operatório</li>
          <li data-aos="fade-right">Exame de ceratometria; Biometria; MEC;</li>
        </ol>
        <div className="pricePart col">
          <h2 data-aos="fade-right">TUDO ISSO POR:</h2>
          <p className="nonPrice" data-aos="fade-right">R$ 5.997,00</p>
          <p className="realPrice" data-aos="fade-right">R$ 2.900,00!!!</p>
        </div>
      </div>
    </Styled.Container>
  );
}
