import styled from "styled-components";
const Media = {
  PhoneLarge: "@media(max-width:600px)",
  Laptop: "@media(max-width:1150px)",
  Tablet: "@media(max-width:1000px)",
  PhoneSmall: "@media(max-width:320px)",
};

export const Container = styled.section`
  min-height: 30rem;
  width: 70%;
  max-width: 80rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  margin: auto;
  ${Media.Tablet} {
    align-items: flex-start;
    width: 90%;
    max-width: 90rem;
  }
  ${Media.PhoneLarge} {
    width: 90%;
    max-width: 90rem;
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

  p {
    color: var(--black);
    text-align: center;
    font-family: Lato;
    ${Media.Tablet} {
      white-space: pre-wrap;
      text-align: left;
    }
  }
  h3 {
    color: var(--blue);
    text-align: center;
    font-family: Inter;
    font-weight: 800;
    text-transform: uppercase;
    ${Media.Tablet} {
      white-space: pre-wrap;
      text-align: left;
    }
  }

  button {
    border-radius: 67px;
    background: #f1f8f9;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 0 1rem;
    gap: 1rem;
    color: var(--blue);
    text-align: center;
    font-family: Poppins;
    font-size: 27.481px;
    font-style: normal;
    font-weight: 700;
    text-transform: uppercase;
    ${Media.PhoneLarge} {
      font-size: 1rem;
      gap: 0.5rem;
      padding: 0 1rem;
      img {
        width: 30vw;
        max-width: 100px;
      }
    }
  }
`;
