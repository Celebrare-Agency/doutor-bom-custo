import React, { useRef, useState } from "react";
import * as Styled from "./style.js";

export default function PaginaFormulario() {
  const modalRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSubmitButton, setShowSubmitButton] = useState(true);
  const [redirectMessage, setRedirectMessage] = useState("");
  const [telefone, setTelefone] = useState("");

  const formatTelefone = (value) => {
    let cleaned = value.replace(/\D/g, "");
    if (cleaned.length > 11) cleaned = cleaned.slice(0, 11);

    if (cleaned.length <= 2) {
      return `(${cleaned}`;
    } else if (cleaned.length <= 7) {
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
    } else if (cleaned.length <= 11) {
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
    }
    return value;
  };

  const handleTelefoneChange = (e) => {
    setTelefone(formatTelefone(e.target.value));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setShowSubmitButton(false);
    setRedirectMessage("Redirecionando você para o contato...");

    const formData = new FormData(event.target);

    const data = {
      nome: formData.get("Nome"),
      telefone: telefone,
      origem: "Google",
      observacoes: `Procedimento: Blefaroplastia. Região de interesse: ${
        formData.get("Regiao") || "Não informado"
      }`,
    };

    try {
      const response = await fetch("https://api.pipefy.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJQaXBlZnkiLCJpYXQiOjE3NTM4MDcxMDksImp0aSI6IjgwODg3NTlkLTg4ZmItNGVjOS05M2YwLTBkYTM3NWYyNWVhOSIsInN1YiI6MzA2ODg0MTYwLCJ1c2VyIjp7ImlkIjozMDY4ODQxNjAsImVtYWlsIjoiYnJ1bm8uY29zdGEuYzA2QGdtYWlsLmNvbSJ9fQ.JfH2uPiMjsQJxRjPtL7lc3BPLjDtG2uzHOsLpS61KcAN6EpqYTb52Djiuig5QDZrSOC66YUIUQGDeLYnBu-TuA`, // Substitua pelo token correto
        },
        body: JSON.stringify({
          query: `
          mutation CreateCard($pipe_id: ID!, $phase_id: ID!, $fields: [FieldValueInput!]!) {
            createCard(input: {
              pipe_id: $pipe_id,
              phase_id: $phase_id,
              fields_attributes: $fields
            }) {
              card {
                id
              }
            }
          }
        `,
          variables: {
            pipe_id: 305658430,
            phase_id: 333778386,
            fields: [
              { field_id: "nome", field_value: data.nome },
              { field_id: "telefone", field_value: data.telefone },
              { field_id: "origem", field_value: data.origem },
              {
                field_id: "regi_o_de_interesse_em_realizar_o_procedimento",
                field_value: data.observacoes,
              },
            ],
          },
        }),
      });

      const result = await response.json();
      console.log("Resposta da API Pipefy:", result);

      if (result.errors) {
        console.error("Erro na API Pipefy:", result.errors);
        alert("Erro ao enviar os dados para o Pipefy. Verifique os campos e tente novamente.");
        return;
      }

      let whatsappLink =
        "https://api.whatsapp.com/send?phone=5511945852272&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Eu%20vim%20pelo%20Instagram%20e%20gostaria%20de%20dar%20procedimento%20a%20minha%20cirurgia%20de%20blefaroplastia!";
      window.location.href = whatsappLink;
    } catch (error) {
      console.error("Erro ao conectar com a API do Pipefy:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Styled.Container>
      {redirectMessage && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          {redirectMessage}
        </div>
      )}
      <form ref={modalRef} onSubmit={handleSubmit}>
        <h3>
          Preencha o formulário <br />e fale com um consultor pelo Whatsapp!
        </h3>
        <input
          type="text"
          name="Nome"
          required
          placeholder="Nome"
          pattern="^[A-Za-zÀ-ú\s]+$"
        />
        <input
          type="tel"
          name="Telefone"
          required
          placeholder="Telefone"
          value={telefone}
          onChange={handleTelefoneChange}
          maxLength={16}
        />
        <div className="boxSection">
          <p>Em qual região você tem interesse em realizar o procedimento?</p>
          <select name="Regiao" required>
            <option value="">Selecione uma opção</option>
            <option value="Superior">Superior</option>
            <option value="Inferior">Inferior</option>
            <option value="Completo">Completo</option>
          </select>
        </div>
        {showSubmitButton && (
          <input
            className="Button"
            type="submit"
            value="Fale com um consultor"
            disabled={isSubmitting}
          />
        )}
      </form>
    </Styled.Container>
  );
}
