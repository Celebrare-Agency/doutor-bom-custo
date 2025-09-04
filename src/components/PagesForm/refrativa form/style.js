import styled from "styled-components";
import background from "../../../assets/PagesForm/backgroundRefrativa.png";

const Media = {
  PhoneLarge: "@media(max-width:600px)",
  Laptop: "@media(max-width:1150px)",
  Tablet: "@media(max-width:1000px)",
  PhoneSmall: "@media(max-width:320px)",
};

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(135deg, #1a1a1a, #2e2e2e);
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;  

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 90%;
    max-width: 600px;
    margin: auto;
    background: rgba(50, 50, 50, 0.7);
    padding: 2rem 0rem;
    border-radius: 20px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);

    .Button {
      border: none;
      background-color: var(--greenBold);
      cursor: pointer;
      padding: 1rem !important;
      font-size: 1rem !important;
      color: var(--black);
      text-align: center;
      font-family: Inter;
      font-weight: 800;
      text-transform: uppercase;
      border-radius: 10.94px !important;
      width: 100%;
      max-width: 300px;

      &:hover{
        background-color: var(--greenHover);
      }
    }

    .boxSection {
      width: 90% !important;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;

      p {
        width: 100%;
        color: white;
        text-align: left;
      }

      select {
        width: 100% !important;
        text-align: left;
      }
    }

    input,
    select {
      padding: 0.8rem 1rem;
      border: 1px solid #ccc;
      border-radius: 15px;
      width: 85% !important;
      font-size: 1.2rem;

      ${Media.PhoneLarge} {
        font-size: 1rem;
        width: 100%;
      }
    }

    input::placeholder {
      font-size: 1rem;
      text-align: left;
      color: var(--black);
      font-family: lato;
      font-weight: bold;
    }

    input:focus {
      outline: none;
      box-shadow: 0 0 2px 1px var(--blue);
    }
  }

  h3 {
    color: var(--light) !important;
    text-align: left;
    font-size: 2rem;
    font-family: Inter;
    font-weight: bold;
    text-transform: uppercase;
    white-space: pre-wrap;
    width: 90% !important;

    ${Media.PhoneLarge} {
      font-size: 1.5rem !important;
    }
  }
`;
