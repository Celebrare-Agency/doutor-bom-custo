import { useRef } from "react";
import { useLocation } from "react-router-dom";
import * as Styled from "./style.js";

export default function Modal(props) {
  const { display, onClose, modalId } = props;
  const modalRef = useRef(null);
  const location = useLocation();

  const handleCloseModal = () => {
    onClose();
  };

  const getFormActionUrl = () => {
    switch (location.pathname) {
      case "/catarata":
        return "https://api.sheetmonkey.io/form/hQULB84E4heetSowEh3mHb";
      case "/oftalmo-paraisopolis":
        return "https://api.sheetmonkey.io/form/jDBmMYdZsA9fUBNAYcYPoL";
      default:
        return "";
    }
  };

  return (
    <Styled.Container
      style={{
        display: display ? "flex" : "none",
      }}
    >
      {/* Adicione um id ao formulário para identificação no Tag Manager */}
      <form
        ref={modalRef}
        action={getFormActionUrl()}
        method="post"
        className={`col formulario conversionForm-${modalId}`}
        onClick={(e) => e.stopPropagation()}
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
        <input className="Button" type="submit" value="Fale com um consultor" />
      </form>

      <button onClick={handleCloseModal}>X</button>
    </Styled.Container>
  );
}
