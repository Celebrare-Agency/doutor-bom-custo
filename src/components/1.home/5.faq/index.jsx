import * as Styled from "./style.js";

export default function Faq() {
  const questionsAnswer = [
    {
      question: "Como agendar minha cirurgia?",
      answer:
        "Você pode iniciar seu agendamento pelo WhatsApp. Nossa equipe vai conversar com você, entender seu caso e te orientar sobre as etapas até o dia da cirurgia.",
      id: 1,
    },
    {
      question: "Onde acontecem as cirurgias?",
      answer:
        "As cirurgias são realizadas em clínicas parceiras especializadas, com infraestrutura moderna e equipe experiente. Após a triagem, nossa equipe vai te indicar o local mais próximo e apropriado para o seu caso.",
      id: 2,
    },
    {
      question: "Preciso de encaminhamento médico ou convênio?",
      answer:
        "Não! Aqui você não precisa de convênio nem de encaminhamento. Criamos um modelo direto e acessível, que facilita sua jornada até a cirurgia.",
      id: 3,
    },
    {
      question: "Quais são as formas de pagamento?",
      answer:
        "Aceitamos dinheiro, cartões de débito e crédito. Também oferecemos condições facilitadas para você realizar sua cirurgia com tranquilidade.",
      id: 4,
    },
    {
      question: "Como funciona a avaliação pré-cirúrgica?",
      answer:
        "Antes da cirurgia, você passará por uma avaliação detalhada com o especialista. Essa etapa é fundamental para garantir a segurança e o sucesso do procedimento.",
      id: 5,
    },
    {
      question: "Em quanto tempo acontece a cirurgia após a avaliação?",
      answer:
        "Após a avaliação, se estiver tudo certo, conseguimos agendar a cirurgia em poucos dias, conforme a sua disponibilidade e a agenda da clínica.",
      id: 6,
    },
    {
      question: "Como recebo as orientações do pós-operatório?",
      answer:
        "Todas as instruções são entregues por escrito e explicadas com cuidado pela equipe. Você também terá nosso suporte pelo WhatsApp para qualquer dúvida.",
      id: 7,
    },
    {
      question: "Posso remarcar minha cirurgia se necessário?",
      answer:
        "Sim! Basta avisar com antecedência de pelo menos 24 horas para que possamos ajustar a agenda sem prejuízos para você.",
      id: 8,
    },
  ];

  return (
    <Styled.Container id="duvidas">
      <h3>Ainda com dúvida?</h3>
      <p className="textQuestions">
        Separamos essa sessão para esclarecer as principais dúvidas.{" "}
      </p>
      <div className="faqContainer col">
        {questionsAnswer.map((item) => (
          <details className="col" key={item.id}>
            <summary className="question">{item.question}</summary>
            <p className="answer">{item.answer}</p>
          </details>
        ))}
      </div>
    </Styled.Container>
  );
}
