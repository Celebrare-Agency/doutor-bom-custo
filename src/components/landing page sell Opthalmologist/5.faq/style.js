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
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  gap: 0.8rem;
  padding: 2rem 0;
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  h3 {
    color: var(--black);
    font-family: Inter;
    font-weight: 800;
    text-transform: uppercase;
    ${Media.Tablet} {
      text-align: left;
    }
  }
  .textQuestions {
    color: var(--black);
    margin-top: -1rem;
    text-align: center;
    font-family: Lato;
    font-weight: 300;
    ${Media.Tablet} {
      text-align: left;
    }
  }
  .faqContainer {
    border-radius: 20px;
    background: var(--Blue, #3b4ae2);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    width: 50rem;
    height: 100%;
    padding: 1rem 0;
    gap: 1rem;
    ${Media.Tablet} {
      width: 100%;
      height: 100%;
      padding: 1rem 0;
    }

    details {
      width: 90%;
      transition: 0.3s all;
    }

    summary {
      position: relative;
      background: var(--light);
      padding: 1.4rem 2em;
      font-family: lato;
      transition: 0.3s all;
      font-style: normal;
      color: var(--black);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      ${Media.PhoneLarge} {
        padding: 1rem 0.5em;
      }
    }

    .answer {
      transition: 0.3s all;
      line-break: loose;
      padding: 0.8rem;
      max-width: 93%;
      margin: auto;
      background: var(--light);
      border-radius: 0 0 10px 10px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      font-family: lato;
      font-weight: 400;
      color: var(--white);
    }
  }
`;
