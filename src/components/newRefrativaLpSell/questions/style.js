import styled from "styled-components";

const Media = {
  PhoneLarge: "@media(max-width:610px)",
  Laptop: "@media(max-width:1150px)",
  Tablet: "@media(max-width:1000px)",
  PhoneSmall: "@media(max-width:450px)",
};
export const Container = styled.main`
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
  max-width: 85rem;
  margin: auto;
  text-align: center;
  color: #fff;
  img {
    border-radius: 20px;
  }

  ${Media.Tablet} {
    height: auto;
    padding-bottom: 50px;
  }

  ${Media.Tablet} {
    padding-bottom: 1rem;
  }

  .container-questions {
    width: 80%;
    margin: auto;
    color: #fff;
    display: flex;
    height: auto;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    border-radius: 20px;
    padding: 50px 50px;
    ${Media.Tablet} {
      padding: 50px 5px;
      width: 95%;
    }
    h1,
    h2 {
      font-style: normal;
      font-weight: 600;
      font-size: 2rem;
      color: var(--off-white);
      ${Media.Tablet} {
        font-size: 1.5rem;
      }
    }
    ${Media.Tablet} {
      flex-direction: column;
    }

    .text-p {
      margin: 20px;
      font-size: 1.2rem;
      color: #a0a4a8;
    }

    .container-check {
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: left;
      align-items: left;
      margin: auto;
      gap: 30px;
      padding-bottom: 30px;
      border-bottom: 1px solid #4b4a4a;

      .auto {
        margin: auto;
      }

      .check {
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: center;
        gap: 20px;
        margin: 20px 0;
        max-width: 700px;

        /* Esconde o checkbox nativo */
        .custom-checkbox input[type="checkbox"] {
          display: none;
        }

        .custom-checkbox .checkmark {
          display: inline-block;
          width: 40px;
          height: 40px;
          border: 2px solid #3b4ae2;
          border-radius: 6px;
          background-color: transparent;
          position: relative;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .custom-checkbox input[type="checkbox"]:checked + .checkmark::after {
          content: "";
          position: absolute;
          left: 10px;
          top: 4px;
          width: 10px;
          height: 20px;
          border: solid #3b4ae2;
          border-width: 0 3px 3px 0;
          transform: rotate(45deg);
        }

        p {
          text-align: left;
          font-style: normal;
          font-weight: 400;
          font-size: 17.8737px;
        }
      }
    }
  }
`;
