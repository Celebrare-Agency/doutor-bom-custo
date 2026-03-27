import styled from "styled-components";
import background from "../../../assets/PagesForm/backgroundBlefaro.png";

const Media = {
  PhoneLarge: "@media(max-width:600px)",
  Laptop: "@media(max-width:1150px)",
  Tablet: "@media(max-width:1000px)",
};

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
      135deg,
      rgba(72, 83, 197, 0.5),
      rgba(32, 41, 124, 0.7)
    ),
    url(${background});
  background-size: cover;
  background-position: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    width: 90%;
    max-width: 520px;
    padding: 2.5rem 2rem;

    border-radius: 20px;
    background: rgba(40, 40, 40, 0.65);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.05);

    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);

    ${Media.PhoneLarge} {
      width: 95%;
      padding: 2rem 1rem;
      box-sizing: border-box;
    }

    img {
      max-width: 130px;
    }

    input,
    select {
      width: 100%;
      padding: 0.9rem 1rem;

      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.1);

      background: rgba(255, 255, 255, 0.05);
      color: var(--light);

      font-size: 1rem;

      transition: 0.25s;
      box-sizing: border-box;

      &:focus {
        outline: none;
        border: 1px solid var(--greenBold);
        box-shadow: 0 0 0 2px rgba(0, 255, 150, 0.15);
        background: rgba(255, 255, 255, 0.08);
      }
    }

    input::placeholder {
      color: rgba(255, 255, 255, 0.6);
      font-weight: 500;
    }

    .boxConsentimento {
      width: 100%;
    }

    .checkbox {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      width: 100%;
      padding: 0.7rem 0rem;

      border-radius: 10px;

      cursor: pointer;

      transition: 0.2s;

      &:hover {
        background: rgba(255, 255, 255, 0.05);
      }

      input[type="checkbox"] {
        min-width: 18px;
        height: 18px;
        width: auto;
        accent-color: var(--greenBold);
        cursor: pointer;
      }

      span {
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.85);
        line-height: 1.4;
      }
    }

    button {
      margin-top: 0.5rem;

      width: 100%;
      max-width: 280px;

      padding: 0.9rem;

      border: none;
      border-radius: 12px;

      background: linear-gradient(135deg, var(--greenBold), var(--greenHover));

      color: var(--black);

      font-weight: 800;
      font-size: 0.95rem;
      text-transform: uppercase;

      cursor: pointer;

      transition: all 0.25s ease;

      box-shadow: 0 5px 20px rgba(0, 255, 150, 0.2);

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0, 255, 150, 0.35);
      }

      &:active {
        transform: scale(0.98);
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }
  }

  h3 {
    width: 100%;
    text-align: center;

    font-size: 1.8rem;
    font-weight: 700;
    font-family: Inter;

    color: var(--light);

    line-height: 1.3;

    ${Media.PhoneLarge} {
      font-size: 1.4rem;
    }
  }
`;
