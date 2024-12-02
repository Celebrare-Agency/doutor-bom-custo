import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import * as Styled from "./style.js";

export default function Modal(props) {
  const { display, onClose, modalId } = props;
  const modalRef = useRef(null);
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSubmitButton, setShowSubmitButton] = useState(true);
  const [redirectMessage, setRedirectMessage] = useState("");

  const handleCloseModal = () => {
    onClose();
  };

  const getProcedimento = () => {
    if (location.pathname === "/catarata") {
      return "Catarata";
    } else if (location.pathname === "/blefaroplastia") {
      return "Blefaroplastia";
    } else if (location.pathname === "/refrativa") {
      return "Refrativa";
    } else {
      return "Origem desconhecida";
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setShowSubmitButton(false);
    setRedirectMessage("Redirecionando você para o contato...");

    const formData = new FormData(event.target);

    const diagnosticoCatarata =
      location.pathname === "/catarata"
        ? formData.get("Diagnostico") || "Não informado"
        : "";

    // Dados do formulário
    const data = {
      nome: formData.get("Nome"),
      telefone: formData.get("Telefone"),
      origem: formData.get("Origem do Lead") || "Google", // Valor padrão
      prazoContato:
        formData.get("Prazo para entrar em contato") ||
        new Date().toISOString(), // Padrão para o prazo
      observacoes: `Procedimento: ${getProcedimento()}. Diagnóstico de catarata: ${diagnosticoCatarata}.`,
    };

    try {
      const response = await fetch("https://api.pipefy.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJQaXBlZnkiLCJpYXQiOjE3MjUzODg0NzUsImp0aSI6Ijc0YTYyYTJiLTg4NzEtNDZiNy05MmRiLTdmNWMxMDUxYmE5OCIsInN1YiI6MzAzMjEzNDM3LCJ1c2VyIjp7ImlkIjozMDMyMTM0MzcsImVtYWlsIjoidGlhZ29hbG1laWRhc2FudG9zMDRAZ21haWwuY29tIn19.jJdEiAbINcjf0YmaNJMumP-B5iUaaff_EA8XgESCP-WSFEyyJmGgseOG_victBzPPlcO2vKv9o9O9JNn1mPNng`, // Substitua pelo token correto
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
            pipe_id: 304871975, // ID do Pipe
            phase_id: "329434707", // ID da fase "Novas Indicações"
            fields: [
              { field_id: "nome", field_value: data.nome },
              { field_id: "copy_of_nome", field_value: data.telefone },
              { field_id: "origem_do_lead", field_value: data.origem },
              {
                field_id: "prazo_para_entrar_em_contato",
                field_value: data.prazoContato,
              },
              { field_id: "observa_es", field_value: data.observacoes },
            ],
          },
        }),
      });

      const result = await response.json();
      console.log("Resposta da API Pipefy:", result);

      if (result.errors) {
        console.error("Erro na API Pipefy:", result.errors);
        alert(
          "Erro ao enviar os dados para o Pipefy. Verifique os campos e tente novamente."
        );
        return;
      }

      console.log("Card criado com sucesso:", result.data.createCard.card.id);

      // Redirecionar para o WhatsApp após sucesso
      let whatsappLink =
        "https://api.whatsapp.com/send?phone=5511967681768&text=Ol%C3%A1!%20Gostaria%20de%20dar%20procedimento%20a%20minha%20cirurgia!";
      window.location.href = whatsappLink;

      // Fecha o modal após o envio bem-sucedido
      handleCloseModal();
    } catch (error) {
      console.error("Erro ao conectar com a API do Pipefy:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Styled.Container
      className="teste"
      style={{
        display: display ? "flex" : "none",
      }}
    >
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
      <form
        ref={modalRef}
        onSubmit={handleSubmit}
        className={`col formulario conversionForm-${modalId}`}
      >
        <h3>
          Preencha o formulário <br />e fale com um consultor pelo Whatsapp!
        </h3>
        <input
          type="text"
          name="Nome"
          required
          placeholder="Nome"
          pattern="^[A-Za-zÀ-ú\s]+$"
          className="Nome"
          data-input-id={`nome-${modalId}`}
        />
        <input
          type="text"
          name="Telefone"
          required
          placeholder="Telefone"
          pattern="^\+?(\d{1,3})?[-. (]?\d{3}[-. )]?\d{3}[-. ]?\d{4}$"
          className="Telefone"
          data-input-id={`telefone-${modalId}`}
        />
        {location.pathname === "/catarata" && (
          <select name="Diagnostico" required>
            <option value="">Você já tem o diagnóstico de catarata?</option>
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
            <option value="Não sei">Não sei</option>
          </select>
        )}
        {showSubmitButton && (
          <input
            className="Button"
            type="submit"
            value="Fale com um consultor"
            disabled={isSubmitting}
          />
        )}
      </form>

      <button onClick={handleCloseModal}>X</button>
    </Styled.Container>
  );
}
