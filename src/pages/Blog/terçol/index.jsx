import * as Styled from "./style.js";
import Header from "../../../components/GLOBAL/header/index.jsx";

export default function Tercol() {
  const InflamedEyeImg =
    "https://vivaoftalmologia.com.br/wp-content/uploads/2021/05/tercol-1.jpg";
  const PusTercolImg =
    "https://centrodecatarata.com.br/wp-content/uploads/2023/02/doencas_tipicas_de_verao_centro_de_catarata_madureia_blog_post.jpg";
  const EyelidSwellingImg =
    "https://www.saudebemestar.pt/media/88680/olho-inchado.jpg";

  return (
    <>
      <Header />
      <Styled.Container>
        <section>
          <h1>O que é o Terçol?</h1>
          <br />
          <p>
            O terçol é um problema ocular comum e incômodo, caracterizado por
            uma inflamação nas glândulas sebáceas na base dos cílios. Essa
            condição, também chamada de hordéolo, geralmente surge devido a uma
            infecção bacteriana.
          </p>
          <br />
          <img
            className="fullImg"
            src={InflamedEyeImg}
            alt="Imagem de olho inflamado"
          />
        </section>
        <br />
        <br />
        <section>
          <h2>Como e por que acontece?</h2>
          <br />

          <img
            className="fullImg"
            src={EyelidSwellingImg}
            alt="Imagem de pálpebra inchada devido ao terçol"
          />
          <br />
          <br />
          <p>
            Sua ocorrência é geralmente associada à obstrução das glândulas
            sebáceas, levando ao acúmulo de secreções e à formação de um nódulo
            doloroso e avermelhado na pálpebra, próximo aos cílios. Essa
            obstrução pode ser desencadeada por fatores como higiene ocular
            inadequada, coçar os olhos com frequência, além de estresse e
            condições de saúde subjacentes que comprometem o sistema
            imunológico.
          </p>
        </section>
        <br />
        <br />
        <section>
          <h2>Quais são os sintomas?</h2>
          <br />
          <p>
            Os sintomas do terçol incluem dor na pálpebra afetada, sensibilidade
            à luz, lacrimejamento excessivo e, às vezes, visão embaçada. À
            medida que a inflamação aumenta, pode ocorrer o desenvolvimento de
            pus no terçol.
          </p>
          <br />
          <img
            className="fullImg"
            src={PusTercolImg}
            alt="Imagem mostrando pus em um terçol"
          />
        </section>
        <br />
        <br />
        <section>
          <h2>Como é feito o diagnóstico?</h2>

          <br />
          <p>
            O diagnóstico do terçol geralmente é clínico, baseado na observação
            dos sintomas e do exame físico realizado por um oftalmologista.
            Raramente são necessários exames adicionais, a menos que haja
            complicações ou suspeita de outros problemas oculares.
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
            O tratamento costuma ser simples e envolve medidas como a aplicação
            de compressas mornas na área afetada várias vezes ao dia para
            aliviar a dor e promover a drenagem do conteúdo purulento. Em alguns
            casos, o médico pode prescrever pomadas antibióticas ou colírios
            para ajudar a combater a infecção. É fundamental evitar espremer ou
            tentar drenar o terçol, pois isso pode piorar a situação e aumentar
            o risco de disseminação da infecção.
          </p>
        </section>
        <br />
        <br />
        <section>
          <h2>Qual é o prognóstico?</h2>
          <br />

          <p>
            O prognóstico para o terçol geralmente é bom, com a maioria dos
            casos resolvendo-se sozinha dentro de alguns dias a algumas semanas,
            especialmente com o tratamento adequado. No entanto, em alguns casos
            raros, podem ocorrer complicações, como a formação de um calázio (um
            nódulo persistente na pálpebra devido à inflamação crônica), que
            pode exigir intervenção médica adicional.
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
