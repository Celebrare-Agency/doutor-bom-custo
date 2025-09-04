// index.jsx
import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import * as Styled from "./style.js";

export default function Index() {
  const modalRef = useRef(null);
  const location = useLocation();
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
      grau_aproximado: formData.get("Grau") || "Não informado",
      origem: "Google",
    };

    console.log("📤 Dados enviados para Pipefy:", data);

    try {
      const response = await fetch("https://api.pipefy.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJQaXBlZnkiLCJpYXQiOjE3NTM4MDcxMDksImp0aSI6IjgwODg3NTlkLTg4ZmItNGVjOS05M2YwLTBkYTM3NWYyNWVhOSIsInN1YiI6MzA2ODg0MTYwLCJ1c2VyIjp7ImlkIjozMDY4ODQxNjAsImVtYWlsIjoiYnJ1bm8uY29zdGEuYzA2QGdtYWlsLmNvbSJ9fQ.JfH2uPiMjsQJxRjPtL7lc3BPLjDtG2uzHOsLpS61KcAN6EpqYTb52Djiuig5QDZrSOC66YUIUQGDeLYnBu-TuA`, // Substitua pelo token correto
        },
        body: JSON.stringify({
          query: `
          mutation CreateCard($pipe_id: ID!, $fields: [FieldValueInput!]!) {
            createCard(input: {
              pipe_id: $pipe_id,
              fields_attributes: $fields
            }) {
              card {
                id
              }
            }
          }
        `,
          variables: {
            pipe_id: 305678356,
            fields: [
              { field_id: "nome", field_value: data.nome },
              { field_id: "telefone", field_value: data.telefone },
              {
                field_id: "qual_o_grau_aproximado",
                field_value: data.grau_aproximado,
              },
              { field_id: "origem", field_value: data.origem },
            ],
          },
        }),
      });

      const result = await response.json();
      console.log("✅ Resposta API:", result);

      if (result.errors) {
        alert("Erro ao enviar os dados. Tente novamente.");
        return;
      }

      // Redireciona para o WhatsApp
      window.location.href =
        "https://api.whatsapp.com/send?phone=5511945972641&text=Ol%C3%A1!%20Gostaria%20de%20dar%20procedimento%20a%20minha%20cirurgia%20refrativa.";
    } catch (error) {
      console.error("⚠️ Erro ao conectar com a API Pipefy:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Styled.Container>
      {redirectMessage && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
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

      <form ref={modalRef} onSubmit={handleSubmit} className="col formulario">
        <h3>
          Preencha o formulário <br />e fale com um consultor pelo Whatsapp!
        </h3>

        <input
          type="text"
          name="Nome"
          required
          placeholder="Nome"
          pattern="^[A-Za-zÀ-ú\\s]+$"
          className="Nome"
        />

        <input
          type="tel"
          name="Telefone"
          required
          placeholder="Telefone"
          value={telefone}
          onChange={handleTelefoneChange}
          maxLength={16}
          className="Telefone"
        />

        <div className="boxSection">
          <p>Qual o seu grau (aproximadamente)?</p>
          <select name="Grau" required>
            <option value="">Selecione uma opção</option>
            <option value="Até 3 graus">Até 3 graus</option>
            <option value="Até 5 graus">Até 5 graus</option>
            <option value="Acima de 10 graus">Acima de 10 graus</option>
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
