import React, { useState } from "react";

const perguntas = [
  {
    id: 1,
    pergunta: "Você usa óculos ou lentes de contato?",
    respostas: [
      { resposta: "Sim", proximo: 2 },
      { resposta: "Não", proximo: 3 },
    ],
  },
  {
    id: 2,
    pergunta: "Você tem mais de 40 anos?",
    respostas: [
      { resposta: "Sim", proximo: "https://exemplo.com/resultado1" },
      { resposta: "Não", proximo: "https://exemplo.com/resultado2" },
    ],
  },
  {
    id: 3,
    pergunta: "Você pratica esportes de contato?",
    respostas: [
      { resposta: "Sim", proximo: "https://exemplo.com/resultado3" },
      { resposta: "Não", proximo: "https://exemplo.com/resultado4" },
    ],
  },
];

export default function Ortoceratologia() {
  const [perguntaAtual, setPerguntaAtual] = useState(perguntas[0]);

  const handleRespostaClick = (proximo) => {
    if (typeof proximo === "string") {
      // Se o próximo for uma string, significa que é uma URL, então redirecionamos
      window.location.href = proximo;
    } else {
      // Caso contrário, avançamos para a próxima pergunta
      const proximaPergunta = perguntas.find((p) => p.id === proximo);
      setPerguntaAtual(proximaPergunta);
    }
  };

  return (
    <div>
      <h1>Formulário de Auto-Teste</h1>
      <div>
        <p>{perguntaAtual.pergunta}</p>
        {perguntaAtual.respostas.map((r, index) => (
          <button key={index} onClick={() => handleRespostaClick(r.proximo)}>
            {r.resposta}
          </button>
        ))}
      </div>
    </div>
  );
}
