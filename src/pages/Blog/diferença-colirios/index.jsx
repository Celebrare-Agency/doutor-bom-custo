import * as Styled from "./style.js";
import Header from "../../../components/GLOBAL/header/index.jsx";

export default function QueimadurasOculares() {
  const ThermalBurnImg =
    "https://meuserralheiro.com.br/wp-content/uploads/2020/04/queimadura-por-arco-de-solda-300x292.jpg.webp";
  const ChemicalBurnImg =
    "https://www.atlasdasaude.pt/sites/default/files/styles/medium/public/artigos_images/lesao_olho_visao_ocular_ss.jpg?itok=FyLZSMcp";
  const RetinalDamageImg =
    "https://clinicaroisman.com.br/wp-content/uploads/2021/11/mancha-algodonosas-por-retinopatia-diabetica.png";

  return (
    <>
      <Header />
      <Styled.Container>
        <section>
          <h1>Diferença de Colírios?</h1>
          <br />
          <p>
            As queimaduras oculares são emergências oftalmológicas, e a
            intervenção rápida é fundamental para minimizar a quantidade de
            tecido danificado. Podem ser classificadas em dois tipos: térmicas e
            químicas. A queimadura térmica, também conhecida como lesão
            retiniana solar, refere-se a danos causados na retina devido à
            exposição excessiva e direta à radiação ultravioleta (UV),
            principalmente proveniente da luz solar intensa ou fontes
            artificiais. Já a queimadura química ocorre quando substâncias
            corrosivas entram em contato com os olhos e causam danos na retina,
            a camada sensível à luz localizada na parte posterior do olho. Essas
            substâncias podem incluir ácidos, bases fortes, solventes ou
            produtos químicos industriais, como soda cáustica e cimento.
          </p>
          <br />
          <img
            className="fullImg"
            src={ThermalBurnImg}
            alt="Imagem de queimadura térmica nos olhos"
          />
        </section>
        <br />
        <br />
        <section>
          <h2>Como e por que acontece?</h2>
          <br />

          <img
            className="fullImg"
            src={ChemicalBurnImg}
            alt="Imagem de queimadura química nos olhos"
          />
          <br />
          <br />
          <p>
            No caso da queimadura térmica, acontece quando a radiação UV causa
            danos às células fotossensíveis da retina, que são responsáveis por
            capturar a luz e enviar sinais visuais ao cérebro. A exposição
            prolongada e não protegida a essa radiação pode resultar em lesões
            irreversíveis. Em se tratando da queimadura química, pode acontecer
            devido a acidentes envolvendo manuseio inadequado de produtos
            químicos, exposição a vapores nocivos ou até mesmo por contato
            direto com materiais perigosos.
          </p>
        </section>
        <br />
        <br />
        <section>
          <h2>Quais são os sintomas?</h2>
          <br />
          <p>
            Os sintomas de uma queimadura simples podem incluir visão embaçada,
            visão periférica comprometida, sensibilidade à luz, manchas escuras
            ou claras na visão central, dor nos olhos, lacrimejamento excessivo.
            Também é comum a sensação de ter algo preso nos olhos (tal sensação
            é causada pelo desfolhamento das camadas da córnea). Em casos mais
            graves, pode ocorrer além dos sintomas da queimadura simples, uma
            perda temporária ou permanente da visão, bem como dor intensa nos
            olhos.
          </p>
          <br />
          <img
            className="fullImg"
            src={RetinalDamageImg}
            alt="Imagem mostrando dano retiniano"
          />
        </section>
        <br />
        <br />
        <section>
          <h2>Como é feito o diagnóstico?</h2>

          <br />
          <p>
            O diagnóstico de queimadura na retina é realizado por um
            oftalmologista por meio de um exame ocular completo. O médico pode
            utilizar instrumentos específicos para avaliar a retina e
            identificar danos causados pela exposição à radiação UV ou pela
            substância química. Testes específicos podem ser realizados para
            avaliar o nível de lesão na retina e determinar o melhor plano de
            tratamento.
          </p>
          <br />

          <a href="https://api.whatsapp.com/send?phone=5511950212678&text=Ol%C3%A1!%20Eu%20gostaria%20de%20agendar%20uma%20consulta%20com%20Oftalmologista.%20">
            <button className="Button">Marque uma consulta!</button>
          </a>
        </section>
        <br />
        <br />
        <section>
          <h2>Qual é o tratamento?</h2>
          <br />

          <p>
            O tratamento para queimadura térmica geralmente consiste em medidas
            de suporte para aliviar os sintomas e permitir a cicatrização. Isso
            pode incluir o uso de colírios lubrificantes para aliviar o
            desconforto, óculos de sol para proteger os olhos da luz intensa, e,
            em alguns casos, a prescrição de medicamentos para reduzir a
            inflamação. Já o tratamento para queimadura química na retina é uma
            emergência médica. O objetivo imediato é lavar abundantemente os
            olhos com soro fisiológico ou solução salina para diluir e remover a
            substância química. É fundamental buscar atendimento médico imediato
            para evitar danos permanentes à visão. Dependendo da gravidade da
            queimadura, podem ser prescritos medicamentos específicos, como
            colírios ou pomadas, para reduzir a inflamação, prevenir infecções e
            promover a cicatrização.
          </p>
        </section>
        <br />
        <br />
        <section>
          <h2>Qual é o prognóstico?</h2>
          <br />

          <p>
            O prognóstico de uma queimadura na retina pode variar dependendo da
            gravidade da lesão. Em casos leves, a visão geralmente se recupera
            por completo dentro de alguns dias a semanas com o tratamento
            adequado e evitando futuras exposições à radiação UV. No entanto, em
            casos mais graves, a recuperação pode ser parcial ou resultar em
            danos permanentes e perda da visão.
          </p>
        </section>
        <br />
        <br />
        <section className="final col">
          <h4>
            Gostou do conteúdo? Marque uma consulta com um dos nossos atendentes
            para fazer sua avaliação!
          </h4>
          <a href="https://api.whatsapp.com/send?phone=5511950212678&text=Ol%C3%A1!%20Eu%20gostaria%20de%20agendar%20uma%20consulta%20com%20Oftalmologista.%20">
            <button className="Button">Marque uma consulta!</button>
          </a>
        </section>
      </Styled.Container>
    </>
  );
}
