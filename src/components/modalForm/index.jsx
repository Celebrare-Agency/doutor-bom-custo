import { useRef } from "react";
import * as Styled from "./style.js";

export default function Modal(props) {
  const { display, onClose } = props;
  const modalRef = useRef(null);

  const handleCloseModal = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  return (
    <Styled.Container
      style={{
        display: display ? "flex" : "none",
      }}
      onClick={handleCloseModal}
    >
      <form
        ref={modalRef}
        action="https://api.sheetmonkey.io/form/hQULB84E4heetSowEh3mHb"
        method="post"
        className="col"
      >
        <h3>
          Preencha o formulário <br />e fale com um consultor pelo Whatsapp!
        </h3>
        <input
          type="text"
          id="Nome"
          name="Nome"
          required
          for="Nome"
          placeholder="Nome"
          pattern="^[A-Za-zÀ-ú\s]+$"
          className="Nome"
        />

        <input
          type="tel"
          id="Telefone"
          name="Telefone"
          required
          for="Telefone"
          placeholder="Telefone"
          className="Telefone"
          pattern="^\+?(\d{1,3})?[-. (]?\d{3}[-. )]?\d{3}[-. ]?\d{4}$"
        />

        <input className="Button" type="submit" value="Fale com um consultor" />
      </form>

      <button onClick={onClose}>X</button>
    </Styled.Container>
  );
}
