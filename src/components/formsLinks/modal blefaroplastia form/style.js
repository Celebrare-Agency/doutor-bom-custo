import styled from "styled-components";

const Media = {
  PhoneLarge: "@media(max-width:600px)",
  Laptop: "@media(max-width:1150px)",
  Tablet: "@media(max-width:1000px)",
  PhoneSmall: "@media(max-width:320px)",
};

export const Container = styled.div`
  /* --- Posicionamento e Estrutura do Modal --- */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99999;

  /* Estilo do Card (Caixa Escura Flutuante) */
  width: 90%;
  max-width: 400px; // Largura do modal de exemplo
  background-color: #485aff; // Cor de fundo azul escuro
  padding: 40px 30px;
  border-radius: 10px; // Bordas levemente arredondadas
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5); // Sombra mais forte
  border: 1px solid #fff; // Borda sutil

  display: flex;
  flex-direction: column;
  align-items: center;

  /* --- Overlay (Fundo Escuro com Blur) --- */
  &::before {
    content: "";
    position: fixed;
    top: -100vh;
    left: -100vw;
    width: 300vw;
    height: 300vh;
    background-color: rgba(0, 0, 0, 0.7); // Fundo bem escuro
    z-index: -1;
  }

  /* Responsividade do Container */
  ${Media.PhoneLarge} {
    width: 95%;
    padding: 30px 20px;
  }

  /* --- Tipografia --- */
  h3 {
    color: #ffffff; // Título branco
    font-size: 1.8rem;
    font-weight: 700;
    text-align: center;
    line-height: 1.2;
    margin-bottom: 10px;
    width: 100%;

    span {
      font-style: italic; // Palavra "atendido" em itálico
      font-weight: 400;
    }

    ${Media.PhoneLarge} {
      font-size: 1.5rem;
    }
  }

  /* Subtítulo */
  .subtitle {
    color: #b0c4de; // Azul claro para o subtítulo
    font-size: 1rem;
    text-align: center;
    margin-bottom: 30px;
    font-weight: 400;
  }

  /* --- Botão de Fechar (X) --- */
  .close-btn {
    position: absolute;
    top: 15px;
    right: 15px;
    background: transparent;
    border: none;
    font-size: 1.5rem;
    color: #a0a0a0;
    cursor: pointer;
    transition: color 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: #ffffff;
    }
  }

  /* --- Formulário --- */
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px; // Espaçamento entre os campos

    /* Labels dos inputs (opcional, não visível na imagem) */
    .boxSection {
      display: flex;
      flex-direction: column;
      gap: 6px;

      p {
        font-size: 0.9rem;
        font-weight: 600;
        color: #fff;
        margin-left: 5px;
      }
    }

    /* --- Inputs e Selects (Estilo Escuro) --- */
    input,
    select {
      width: 100%;
      padding: 14px 15px;
      border-radius: 8px; // Bordas arredondadas
      border: 1px solid #6ad9ab; // Borda azul escura
      background-color: #0a1425; // Fundo azul escuro do input
      font-size: 1rem;
      color: #ffffff; // Texto branco
      outline: none;
      transition: all 0.3s ease;
      box-sizing: border-box;

      &::placeholder {
        color: #fff; // Placeholder azul claro
        font-weight: 400;
      }

      &:focus {
        border-color: #485aff; // Borda azul mais clara ao focar
        box-shadow: 0 0 0 2px rgba(72, 90, 255, 0.2);
      }
    }

    .boxSection {
      width: 100%;
    }

    /* Ajuste específico para o ícone do Select */
    select {
      appearance: none;
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
      background-repeat: no-repeat;
      background-position: right 15px center;
      background-size: 16px;
      cursor: pointer;
      color: #ffffff; // Garante que o texto selecionado seja branco

      option {
        background-color: #112240; // Fundo das opções
        color: #ffffff;
      }
    }

    /* --- Checkbox e Termos --- */
    .checkbox {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 10px;
      margin-top: 5px;
      padding: 0 5px;
      color: #fff; // Cor do texto dos termos

      input[type="checkbox"] {
        width: 18px;
        height: 18px;
        accent-color: #134e4a; // Cor do checkbox selecionado
        margin-top: 3px;
        cursor: pointer;
        border-radius: 4px;
        background-color: #112240;
        border: 1px solid #1f3a5e;
      }

      label,
      span,
      p {
        font-size: 0.85rem;
        margin: 0;
        line-height: 1.4;
        text-align: left;
      }
    }

    /* --- Botão de Enviar (Estilo Verde Petróleo) --- */
    button[type="submit"],
    .Button {
      margin-top: 10px;
      width: 100%;
      padding: 16px;
      border-radius: 8px; // Bordas arredondadas
      border: none;
      background: #134e4a; /* Verde petróleo */
      color: #ffffff; /* Texto branco */
      font-size: 1rem;
      font-weight: 700;
      text-transform: uppercase;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background: #0f3d3a; // Cor mais escura ao passar o mouse
        transform: translateY(-2px);
      }

      &:active {
        transform: scale(0.98);
      }
    }
  }
`;
