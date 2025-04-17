import { Section } from "./style";
export default function Faq() {
  const questionsAnswer = [
    {
      question: "O que é cirurgia refrativa?",
      answer:
        "A cirurgia refrativa é um procedimento oftalmológico que corrige problemas de visão como miopia, hipermetropia, astigmatismo e presbiopia, eliminando ou reduzindo a necessidade de óculos ou lentes de contato.",
      id: 10,
    },
    {
      question: "Quem pode fazer cirurgia refrativa?",
      answer:
        "Pacientes com mais de 18 anos, com grau estabilizado há pelo menos um ano e que não tenham doenças oculares como catarata ou ceratocone, geralmente são bons candidatos. Uma avaliação completa é necessária para confirmar a indicação.",
      id: 11,
    },
    {
      question: "A cirurgia refrativa dói?",
      answer:
        "Não. O procedimento é feito com anestesia em forma de colírio e a maioria dos pacientes sente apenas um leve desconforto ou sensação de areia nos olhos nos primeiros dias após a cirurgia.",
      id: 12,
    },
    {
      question: "Quanto tempo dura a recuperação da cirurgia refrativa?",
      answer:
        "A recuperação visual costuma ser rápida. Muitos pacientes já percebem melhora significativa nas primeiras 24 a 48 horas, mas a recuperação total pode levar algumas semanas, dependendo da técnica utilizada.",
      id: 13,
    },
    {
      question: "Quais são os tipos de cirurgia refrativa?",
      answer:
        "As principais técnicas são o PRK, o LASIK e o SMILE. A escolha do método depende das características dos olhos do paciente, que são avaliadas em exames pré-operatórios.",
      id: 14,
    },
    {
      question: "A cirurgia refrativa tem riscos?",
      answer:
        "Sim, como qualquer procedimento, existem riscos, embora sejam baixos. Entre eles estão infecção, olho seco, visão embaçada temporária ou, em casos raros, regressão do grau. Escolher um profissional qualificado reduz esses riscos.",
      id: 15,
    },
    {
      question: "O resultado da cirurgia refrativa é permanente?",
      answer:
        "Na maioria dos casos, sim. Mas com o envelhecimento natural dos olhos, especialmente após os 40 anos, pode haver necessidade de óculos para leitura devido à presbiopia.",
      id: 16,
    },
    {
      question: "Vou enxergar bem logo após a cirurgia?",
      answer:
        "A maioria dos pacientes nota melhora já no primeiro dia, mas a visão pode variar nos primeiros dias. Em poucos dias, a visão tende a estabilizar e seguir melhorando com o tempo.",
      id: 17,
    },
    {
      question: "Quais cuidados devo ter após a cirurgia refrativa?",
      answer:
        "Evitar coçar os olhos, usar colírios conforme prescrição, não se expor ao sol sem proteção e evitar ambientes com muita poeira nas primeiras semanas são cuidados importantes para uma boa recuperação.",
      id: 18,
    },
    {
      question: "Quando posso voltar a trabalhar e dirigir?",
      answer:
        "Em muitos casos, o paciente pode voltar a trabalhar e dirigir em 2 a 5 dias, mas isso depende da técnica utilizada e da avaliação do médico no pós-operatório.",
      id: 19,
    },
  ];

  return (
    <Section id="questions">
      <h3>DÚVIDAS FREQUENTES</h3>

      <div className="faqContainer column">
        {questionsAnswer.map((item) => (
          <details className="column" key={item.id}>
            <summary className="question">{item.question}</summary>
            <p className="answer">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
