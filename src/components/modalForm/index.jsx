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

  const getObservacao = () => {
    if (location.pathname === "/catarata") {
      return "Lead de catarata";
    } else if (location.pathname === "/blefaroplastia") {
      return "Lead de blefaroplastia";
    } else {
      return "Lead de origem desconhecida";
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setShowSubmitButton(false);
    setRedirectMessage("Redirecionando você para o contato...");

    const formData = new FormData(event.target);
    const data = {
      nome: formData.get("Nome"),
      telefone: formData.get("Telefone"),
      origem: "Google",
      observacoes: getObservacao(),
    };

    try {
      const response = await fetch("https://api.pipefy.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJQaXBlZnkiLCJpYXQiOjE3MTg3MzAzMTMsImp0aSI6IjBlMGY5ZTk2LTVmMjEtNDhkOC1hMGQ0LTkzMTBkNjczZTYxYSIsInN1YiI6MzA0ODc2MTQ5LCJ1c2VyIjp7ImlkIjozMDQ4NzYxNDksImVtYWlsIjoiZmVybmFuZG9hbHZlcy5vY3Vwb3BAZ21haWwuY29tIn19.27xePP1Idj4DJ9-93-A7--Wi5-Wa_Qc8NIAUBYB4660P9WeWFtddL-ztyLPWbeBvDZJNSfWLE9kcV-oFlpm-kg`,
        },
        body: JSON.stringify({
          query: `
            mutation {
              createCard(input: {
                pipe_id: 304417557,
                fields_attributes: [
                  { field_id: "nome", field_value: "${data.nome}" },
                  { field_id: "telefone", field_value: "${data.telefone}" },
                  { field_id: "origem", field_value: "${data.origem}" },
                  { field_id: "observa_es_2", field_value: "${data.observacoes}" }
                ]
              }) {
                card {
                  id
                }
              }
            }
          `,
        }),
      });

      const result = await response.json();
      console.log(result);

      let whatsappLink;
      if (location.pathname === "/catarata") {
        whatsappLink = `https://api.whatsapp.com/send?phone=5511967681768&text=Ol%C3%A1,%20Gostaria%20de%20dar%20procedimento%20a%20minha%20cirurgia%20de%20catarata!`;
      } else if (location.pathname === "/blefaroplastia") {
        whatsappLink = `https://api.whatsapp.com/send?phone=5511967681768&text=Ol%C3%A1,%20Gostaria%20de%20dar%20procedimento%20a%20minha%20blefaroplastia!`;
      } else {
        whatsappLink = `https://api.whatsapp.com/send?phone=5511967681768&text=Ol%C3%A1,%20Gostaria%20de%20falar%20com%20um%20consultor!`;
      }
      window.location.href = whatsappLink;

      // Fecha o modal após o envio bem-sucedido
      handleCloseModal();
    } catch (error) {
      console.error("Erro ao enviar os dados para o Pipefy:", error);
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
