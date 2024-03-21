import * as Styled from "./style.js";
import Header from "../../../components/GLOBAL/header/index.jsx";
import YoutubeEmbed from "./embed/YTEMBED.jsx";

export default function Catarata() {
  const CristalinoImg =
    "https://brascrs.com.br/src/uploads/2021/05/cristalino.png.webp";
  const FilaSus =
    "https://s2-g1.glbimg.com/VJqb4l7LQfsSFqoYSJD0MKmShIA=/0x74:1024x768/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/9/g/38T9pAQHamY5J2bxw8bA/mutirao-elaine.jpeg";
  const ComparativeCatarata =
    "https://s2-g1.glbimg.com/KgvPWA-FaXlxtcatGxf1o1z5jNY=/0x0:1200x765/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/S/8/AXfxe6Q5qQoZhBfm24Dg/visare-g1-01-23-fotos-corpo-da-materia-horizontais-02.jpg";

  return (
    <>
      <Header />
      <Styled.Container>
        <section>
          <h1>O que é catarata?</h1>
          <br />
          <p>É a opacificação do cristalino.</p>
          <p>
            <strong>Mas o que isso significa?</strong>
          </p>
          <p>
            Dentro do olho, existe uma estrutura que parece uma lente
            transparente e o processo de embaçamento dessa lente se chama
            catarata.
          </p>
          <br />
          <img
            className="fullImg"
            src={CristalinoImg}
            alt="Ilustração do cristalino do olho"
          />
        </section>
        <br />
        <br />
        <section>
          <h2>O que causa catarata?</h2>
          <br />

          <img
            className="fullImg"
            src={ComparativeCatarata}
            alt="Comparação de olho com catarata e olho saudável"
          />
          <br />
          <br />
          <p>
            A catarata pode ser causada por diversos fatores, sendo o principal
            o <strong>envelhecimento</strong>. Outras causas incluem o uso de
            certos medicamentos (esteroides), diabetes, tabagismo, traumas
            (pancadas) e outros.
          </p>
          <br />

          <p>
            No entanto, o envelhecimento continua sendo a principal causa. Por
            exemplo, a catarata afeta 25% das pessoas com mais de 50 anos.
          </p>
        </section>
        <br />
        <br />
        <section>
          <h2>Catarata pode causar cegueira?</h2>
          <br />
          <p>
            Sim, a catarata é a principal causa de cegueira reversível em todo o
            mundo.
          </p>
        </section>
        <br />
        <br />
        <section>
          <h2>Como saber se tenho catarata?</h2>

          <br />
          <p>
            A catarata é diagnosticada pelo exame de biomicroscopia realizado em
            toda consulta oftalmológica.
          </p>
          <br />

          <a href="https://api.whatsapp.com/send?phone=5511950212678&text=Ol%C3%A1!%20Eu%20gostaria%20de%20agendar%20uma%20consulta%20com%20Oftalmologista.%20">
            <button className="Button">Marque uma consulta!</button>
          </a>
        </section>
        <br />
        <br />
        <section>
          <h2>Tratamento de catarata:</h2>
          <br />

          <p>
            O tratamento é exclusivamente cirúrgico. Isso quer dizer que não tem
            colírios, óculos ou remédios para tratamento. Somente a cirurgia.
          </p>
        </section>
        <br />
        <br />
        <section>
          <h2>Como é feita a cirurgia de catarata:</h2>
          <br />

          <p>
            São feitas duas pequenas incisões no olho, por onde se introduz as
            cânulas que são do tamanho de um canudo de todynho.
            <br />
            Essas cânulas estão ligadas ao equipamento de facoemulsifição, esse
            equipamento quebra a catarata e depois aspira os pequenos
            fragmentos.
            <br />
            Depois se introduz uma lente dentro olho. A qual fica lá pro resto
            da vida.
          </p>
          <YoutubeEmbed embedId="R6SCGmtHg2w" />
        </section>
        <br />
        <br />
        <section>
          <h2>Quanto tempo demora a cirurgia de catarata?</h2>
          <br />

          <p>
            O tempo varia de 5 a 30 minutos, dependendo da experiência do
            cirurgião.
          </p>
        </section>
        <br />
        <br />
        <section>
          <h2>Tem risco na cirurgia de catarata?</h2>
          <br />

          <p>
            O sucesso depende da experiência do cirurgião, do equipamento
            utilizado entre outros fatores. Mas em geral é considerada uma
            cirurgia segura, que não é isenta de riscos.
          </p>
        </section>
        <br />
        <br />
        <section>
          <h2>Qual o preço de uma cirurgia de catarata:</h2>
          <br />

          <p>
            O preço varia de 3 mil reais a 20 mil reais. A variação se relaciona
            com a experiência ou renome do cirurgião, hospital onde é realizada
            e o tipo de lente intra ocular utilizada.
          </p>
        </section>
        <br />
        <br />
        <section>
          <h2>Como fazer a Cirurgia de Catarata pelo SUS:</h2>
          <br />

          <p>
            Aqui estamos falando da maior fila de espera do SUS na maioria dos
            Estados.
          </p>
          <br />

          <img className="fullImg" src={FilaSus} alt="Fila de espera do SUS" />
          <br />

          <p>
            Para fazer essa cirurgia pelo SUS, o paciente deve ir a uma UBS OU
            PSF, passar em consulta com o clínico geral, e pegar uma guia para o
            ambulatório de oftalmologia.
            <br />
            <br />
            Em algumas regiões esse processo pode ser um pouco demorado.
            <br />
            <br />
            Após conseguir a consulta com o médico oftalmologista do SUS, o
            paciente realizará exames para confirmação do diagnóstico e só então
            o paciente receberá uma indicação de cirurgia e entrará na famosa
            fila do SUS.
          </p>
        </section>
        <br />
        <br />
        <section>
          <h2>Quanto tempo demora para sair cirurgia de catarata pelo SUS?</h2>
          <br />

          <p>
            O tempo varia conforme o Estado e região, podendo chegar a 8 anos
            segundo relatos não oficiais.
          </p>
        </section>
        <br />
        <br />
        <section>
          <h2>Quem tem diabetes pode fazer cirurgia de catarata?</h2>
          <br />
          <p>
            Sim, mas é necessário uma correta avaliação prévia pelo médico
            oftalmologista.
          </p>
        </section>
        <br />
        <br />
        <section>
          <h2>Quem tem pressão alta pode fazer cirurgia de catarata?</h2>
          <br />
          <p>
            Sim, mas é necessário uma correta avaliação prévia pelo médico
            oftalmologista.
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
