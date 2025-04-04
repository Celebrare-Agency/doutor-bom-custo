import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import * as Styled from "./style.js";

export default function Modal(props) {
  const { display, onClose, modalId } = props;
  const modalRef = useRef(null);
  const location = useLocation();
  const [redirectMessage, setRedirectMessage] = useState("");

  const handleCloseModal = () => {
    onClose();
  };

  const handleSubmit = (event) => {
    // Exibe mensagem antes do redirecionamento
    setRedirectMessage("Redirecionando você para o WhatsApp...");
    setTimeout(() => {
      window.location.href =
        "https://api.whatsapp.com/send?phone=5511950212678&text=Ol%C3%A1!%20Gostaria%20de%20marcar%20uma%20consulta%20com%20um%20m%C3%A9dico%20oftalmologista%20em%20Parais%C3%B3polis";
    }, 1000);
  };

  return (
    <Styled.Container style={{ display: display ? "flex" : "none" }}>
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
        className={`col formulario conversionForm-${modalId}`}
        action="https://api.sheetmonkey.io/form/jDBmMYdZsA9fUBNAYcYPoL"
        method="POST"
        onSubmit={handleSubmit}
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
        />

        <input
          type="text"
          name="Telefone"
          required
          placeholder="Telefone"
          pattern="^\+?(\d{1,3})?[-. (]?\d{3}[-. )]?\d{3}[-. ]?\d{4}$"
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

        <input type="hidden" name="Origem" value="Google" />
        <input
          type="hidden"
          name="Created"
          value="x-sheetmonkey-current-date-time"
        />

        <input className="Button" type="submit" value="Fale com um consultor" />
      </form>

      <button onClick={handleCloseModal}>X</button>
    </Styled.Container>
  );
}
