import styled from "styled-components";

const Media = {
  PhoneLarge: "@media(max-width:600px)",
  Laptop: "@media(max-width:1150px)",
  Tablet: "@media(max-width:1000px)",
  PhoneSmall: "@media(max-width:320px)",
};

export const Container = styled.section`
  max-width: 90rem;
  min-height: 35rem;
  margin: auto;
  width: 90%;
  height: auto;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1, h2, h3 {
    text-align: center; /* Ajuste para centralizar o título */
    font-family: Inter;
    font-weight: 800;
    text-transform: uppercase;
    color: var(--blue);
  }

  p {
    text-align: center; /* Ajuste para centralizar o texto */
    font-family: Inter;
    font-weight: regular;
    color: var(--blue);
    margin-bottom: 10px;
  }

  ul {
    list-style-type: none; /* Remover os marcadores de lista */
    padding: 0;
    margin: 0;
    text-align: center; /* Ajuste para centralizar a lista */
    ${Media.PhoneLarge}{
      gap:1rem;
    }
    li {
      font-family: Inter;
      font-weight: regular;
      text-transform: uppercase;
      color: var(--blue);
    }
  }

 button{
  border: none;
      background-color: var(--blue);
      padding: 1rem !important;
      font-size: 1rem !important;
      color: var(--light);
      text-align: center;
      font-family: Inter;
      font-weight: 800;
      text-transform: uppercase;
      border-radius: 10.94px !important;
 }
`;