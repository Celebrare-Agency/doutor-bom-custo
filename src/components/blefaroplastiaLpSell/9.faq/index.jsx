import { Section } from "./style";
export default function Faq() {
  const questionsAnswer = [
    {
      question: "O que é blefaroplastia?",
      answer:
        "A blefaroplastia é uma cirurgia plástica que corrige defeitos, deformidades e desfigurações das pálpebras, além de melhorar a aparência ao remover o excesso de pele e bolsas de gordura ao redor dos olhos.",
      id: 10,
    },
    {
      question: "Quem é um bom candidato para blefaroplastia?",
      answer:
        "Bons candidatos são pessoas saudáveis, sem condições médicas que possam prejudicar a cicatrização, e com expectativas realistas sobre os resultados. Normalmente, indivíduos com pálpebras caídas, bolsas sob os olhos ou excesso de pele nas pálpebras são candidatos ideais.",
      id: 11,
    },
    {
      question: "A blefaroplastia deixa cicatrizes?",
      answer:
        "Sim, como qualquer cirurgia, a blefaroplastia deixa cicatrizes. No entanto, as cicatrizes são geralmente bem disfarçadas nas linhas naturais das pálpebras e tendem a se tornar quase imperceptíveis com o tempo.",
      id: 12,
    },
    {
      question: "Qual é o tempo de recuperação da blefaroplastia?",
      answer:
        "A recuperação inicial geralmente leva de uma a duas semanas, durante as quais os pacientes podem apresentar inchaço e hematomas. A recuperação completa, com desaparecimento total do inchaço e cicatrização das cicatrizes, pode levar alguns meses.",
      id: 13,
    },
    {
      question: "A blefaroplastia é dolorosa?",
      answer:
        "A maioria dos pacientes relata apenas um leve desconforto após a cirurgia, que pode ser controlado com analgésicos prescritos. Durante o procedimento, a área é anestesiada para que o paciente não sinta dor.",
      id: 14,
    },
    {
      question: "Quanto tempo dura o resultado da blefaroplastia?",
      answer:
        "Os resultados da blefaroplastia podem durar muitos anos. Em alguns casos, os efeitos são permanentes, mas o processo natural de envelhecimento pode eventualmente afetar novamente a área ao redor dos olhos.",
      id: 15,
    },
    {
      question: "Quais são os riscos e complicações da blefaroplastia?",
      answer:
        "Como qualquer cirurgia, a blefaroplastia apresenta riscos, como infecção, sangramento, cicatrização inadequada, olho seco, e, raramente, perda temporária ou permanente da visão. É importante discutir todos os riscos com seu cirurgião antes do procedimento.",
      id: 16,
    },
    {
      question:
        "Posso combinar a blefaroplastia com outros procedimentos estéticos?",
      answer:
        "Sim, a blefaroplastia pode ser combinada com outros procedimentos, como lifting facial, lifting de sobrancelhas ou peelings químicos, para alcançar um rejuvenescimento facial mais completo.",
      id: 17,
    },
    {
      question: "Quais cuidados devo ter após a blefaroplastia?",
      answer:
        "Os cuidados pós-operatórios incluem evitar atividades extenuantes, não se expor ao sol diretamente nas primeiras semanas, usar colírios lubrificantes e seguir todas as orientações médicas para garantir uma boa recuperação.",
      id: 18,
    },
    {
      question:
        "Quando posso retomar minhas atividades normais após a blefaroplastia?",
      answer:
        "A maioria dos pacientes pode retomar atividades leves após uma semana e atividades normais, incluindo exercícios, após cerca de duas a quatro semanas, dependendo da recuperação individual e das recomendações do cirurgião.",
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
