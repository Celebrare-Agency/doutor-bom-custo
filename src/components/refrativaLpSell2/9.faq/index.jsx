import { Section } from "./style";
export default function Faq() {
  const questionsAnswer = [
    {
      question:
        "Quanto tempo dura a recuperação da cirurgia de prótese de mama?",
      answer:
        "A recuperação geralmente leva de 4 a 6 semanas, mas cada caso é único. Estamos aqui para te acompanhar em cada etapa do processo.",
      id: 1,
    },
    {
      question:
        "Quais são os tipos de incisão utilizados na cirurgia de prótese de mama?",
      answer:
        "Os tipos de incisão mais comuns são a incisão inframamária (sob a mama), periareolar (ao redor da aréola) e transaxilar (na axila). A escolha do tipo de incisão depende de vários fatores, incluindo a anatomia da paciente e as preferências do cirurgião.",
      id: 2,
    },
    {
      question:
        "Qual é a diferença entre as próteses de silicone e as de solução salina?",
      answer:
        "As próteses de silicone são preenchidas com gel de silicone e tendem a parecer mais naturais. As próteses de solução salina são preenchidas com água salgada estéril e podem ser ajustadas durante a cirurgia. A escolha entre os dois tipos depende das preferências pessoais e da recomendação do cirurgião.",
      id: 3,
    },
    {
      question: "As próteses de mama podem afetar a sensibilidade dos seios?",
      answer:
        "É possível que a cirurgia de prótese de mama afete temporariamente a sensibilidade dos seios. A maioria das pacientes recupera a sensibilidade com o tempo, mas em alguns casos, pode haver uma alteração permanente.",
      id: 4,
    },
    {
      question: "É necessário fazer manutenção ou troca das próteses?",
      answer:
        "As próteses modernas são projetadas para durar muitos anos, mas não são consideradas dispositivos vitalícios. Recomenda-se acompanhamento regular com o cirurgião para monitorar a condição das próteses e a saúde das mamas.",
      id: 5,
    },
    {
      question: "Posso escolher o tamanho das próteses?",
      answer:
        "Sim, você pode escolher o tamanho das próteses em consulta com o seu cirurgião. É importante escolher um tamanho que complemente sua anatomia e atenda às suas expectativas estéticas.",
      id: 6,
    },
    {
      question: "Como é a cicatriz após a cirurgia de prótese de mama?",
      answer:
        "As cicatrizes variam de acordo com o tipo de incisão escolhida. Com os cuidados adequados, as cicatrizes tendem a desvanecer-se com o tempo e podem ser minimizadas com técnicas cirúrgicas avançadas.",
      id: 7,
    },
    {
      question: "Posso fazer exercícios físicos após a cirurgia?",
      answer:
        "Você poderá retomar atividades leves dentro de uma semana, mas deve evitar exercícios intensos e levantamento de peso por cerca de 4 a 6 semanas. Sempre siga as orientações do seu cirurgião para garantir uma recuperação segura.",
      id: 8,
    },
    {
      question: "Quais são os riscos associados à cirurgia de prótese de mama?",
      answer:
        "Como qualquer cirurgia, a colocação de próteses de mama envolve riscos, incluindo infecção, sangramento, contratura capsular, e ruptura da prótese. É importante discutir todos os riscos e benefícios com seu cirurgião antes de decidir pelo procedimento.",
      id: 9,
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
