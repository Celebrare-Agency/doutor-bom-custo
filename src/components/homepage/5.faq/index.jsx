import * as Styled from "./style.js";

export default function Faq() {
  const questionsAnswer = [
    {
      question: "Como agendar uma consulta?",
      answer:
        "Para agendar uma consulta, você pode entrar em contato com a nossa equipe de atendimento via whatsapp, agendamento online. Nossa equipe de atendimento irá instruí-lo(a) em relação às nossas especialidades, médicos, datas e horários conforme às suas necessidades.",
      id: 1,
    },
    {
      question:
        "Qual é a localização das clínicas parceiras e como chegar até elas?",
      answer:
        "Nossa equipe de atendimento online te dará todos os direcionamentos necessários para que você chegue até a clínica de sua preferência.  ",

      id: 2,
    },
    {
      question: "Quais são as formas de pagamento aceitas nas clínicas?",
      answer:
        "Nossos parceiros aceitam pagamentos em dinheiro, cartões de débito e crédito.",
      id: 3,
    },
    {
      question: "Aceitam convênios médicos?",
      answer:
        "Não, a Doutor bom custo criou todos os facilitadores para você, desta forma fornecemos todos os serviços e procedimentos através de nossas parcerias, para que você não precise recorrer a convênios e médicos externos de alto custo.",
      id: 4,
    },
    {
      question: "Quanto tempo antes da consulta devo chegar?",
      answer:
        "Recomendamos que os pacientes cheguem pelo menos 15 minutos antes da consulta agendada para preencher formulários e garantir um atendimento pontual.",
      id: 5,
    },
    {
      question: "O que devo levar para minha consulta médica?",
      answer:
        "Documento de identificação, lista de medicamentos se houver e resultados de exames médicos anteriores, se disponíveis.",
      id: 6,
    },
    {
      question: "Como faço para obter resultados dos exames realizados?",
      answer:
        "Os resultados de exames estarão disponíveis para retirada presencial na recepção das clínicas parceiras dentro do período que será informado. Certifique-se de seguir as instruções fornecidas durante a consulta. ",
      id: 7,
    },
    {
      question: "É possível remarcar ou cancelar uma consulta agendada?",
      answer:
        "Sim, você pode remarcar ou cancelar sua consulta com antecedência de até 24 horas, entrando em contato conosco por telefone ou através do nosso sistema de agendamento online. ",
      id: 8,
    },
  ];
  return (
    <Styled.Container>
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
