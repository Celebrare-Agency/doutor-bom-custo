import styled from "styled-components";
import bg from "../../../assets/landing page sell Opthalmologist/exames/background.png";
const Media = {
  PhoneLarge: "@media(max-width:600px)",
  Laptop: "@media(max-width:1150px)",
  Tablet: "@media(max-width:1000px)",
  PhoneSmall: "@media(max-width:320px)",
};

export const Container = styled.section`
  min-height: 70rem;
  width: 70%;
  max-width: 80rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  margin: auto;
  padding: 1rem 0;

  ${Media.Tablet} {
    align-items: flex-start;
    width: 90%;
    max-width: 90rem;
  }
  ${Media.PhoneLarge} {
    width: 90%;
    max-width: 90rem;
    min-height: 100rem;
  }

  .col {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .row {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }

  .text {
    color: var(--black);
    font-family: Inter;
    text-align: center;
    gap: 1rem;
    ${Media.Tablet} {
      align-items: flex-start;
      text-align: left;
    }

    h2 {
      font-weight: 500;
      text-transform: uppercase;
    }
    p {
      font-weight: 400;
      width: 80%;
      ${Media.Tablet} {
        width: 100%;
      }
    }
  }

  .cardsCont {
    width: 100%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    justify-items: center;
    background-image: url(${bg});
    background-size: 600px;
    background-position: center;
    background-repeat: no-repeat;

    ${Media.Tablet} {
      display: flex;
      flex-wrap: wrap;
      background-image: inherit;
    }
    .card {
      border-radius: 12.704px;
      border: 1.27px solid var(--Blue, #3b4ae2);
      background: #fefefe;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      max-width: 374.755px;
      flex-shrink: 0;
      gap: 1rem;
      aspect-ratio: 20/20;
      ${Media.Tablet} {
        max-width: 324.755px;
        aspect-ratio: 20/20;
      }

      ${Media.PhoneSmall} {
        max-width: 80vw;
        aspect-ratio: 20/20;
      }

      h3 {
        color: var(--black, #2f3947);
        font-family: Inter;
        font-size: 22.481px;
        font-weight: 700;
        text-transform: uppercase;
        width: 80%;
      }

      p {
        color: var(--black, #2f3947);
        font-family: Inter;
        font-size: 23.008px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        width: 80%;
        ${Media.PhoneSmall} {
          font-size: 18px;
        }
      }
    }
  }
`;
