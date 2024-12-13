import styled from "styled-components";

const Media = {
  PhoneLarge: "@media(max-width:600px)",
  Laptop: "@media(max-width:1150px)",
  Tablet: "@media(max-width:1000px)",
  PhoneSmall: "@media(max-width:320px)",
};

export const Container = styled.main`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999; /* Garante que o modal ficará acima */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1); /* Sombra ao redor do formulário */
  border-radius: 10px;

  /* Ajustes para blur do fundo */
  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px); /* Aplica o desfoque no fundo */
    background: rgba(0, 0, 0, 0.5); /* Fundo semitransparente */
    z-index: -1; /* Garante que o blur fique atrás do modal */
  }

  ${Media.PhoneLarge} {
    width: 95%; /* Ajusta a largura para telas menores */
  }

  ${Media.PhoneSmall} {
    width: 100%; /* Ajusta para telas pequenas */
    top: 50%; /* Recentraliza */
    left: 50%; /* Recentraliza */
    transform: translate(-50%, -50%);
  }
`;
