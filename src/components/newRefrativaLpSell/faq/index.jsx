import { useState } from "react";
import * as Styled from "./style.js";
import { FaWhatsapp } from "react-icons/fa";  
import YoutubeEmbed from "./embed/YTEMBED.jsx";

export default function Faqq() {  

  const questionsAnswer = [
    {
      question: "É necessário exames para realizar a blefaroplastia?",
      answer: "R6SCGmtHg2w",
      id: 10,
    },
    {
      question: "A blefaroplastia deixa cicatrizes?",
      answer: "R6SCGmtHg2w",
      id: 11,
    },
    {
      question: "Como é a cicatrização da blefaroplastia?",
      answer: "R6SCGmtHg2w",
      id: 12,
    },
    {
      question: "Quais as principais dicas para melhorar o pós-operatório?",
      answer: "R6SCGmtHg2w",
      id: 13,
    },
    {
      question: "Qual o valor da blefaroplastia?",
      answer: "R6SCGmtHg2w",
      id: 14,
    },
    {
      question: "Quando é atingido o resultado final da minha cirurgia de blefaroplastia?",
      answer: "R6SCGmtHg2w",
      id: 15,
    },
    {
      question: "Qual o tempo de recuperação da blefaroplastia?",
      answer: "R6SCGmtHg2w",
      id: 16,
    },
  ];

  return (
    <Styled.Container>

      <div className="container-faq">
        <div className="container-questions">          
          <div className="container-title" data-aos="fade-up">
            <h3>FAQ</h3>
          </div>

          <h1>Perguntas frequentes:</h1>      

          <div className="container-video">
            <YoutubeEmbed embedId="R6SCGmtHg2w" />  
          </div>

          <div className="doubts">
            <div className="container-doubts">
              <h2>Ainda tem dúvidas?</h2>
              <p>Entre em contato com nossa equipe!</p>     
              <button><FaWhatsapp /> WhatsApp</button>
            </div>
          </div>
        </div>

        <div className="container-response column">
          {questionsAnswer.map((item) => (
            <details className="column" key={item.id}>
              <summary className="question"><h3>{item.question}</h3></summary> 
              <div className="faq-video">
                <YoutubeEmbed embedId={item.answer} />,
              </div>             
            </details>
          ))}
        </div>
      </div>
    </Styled.Container>
  );
}
