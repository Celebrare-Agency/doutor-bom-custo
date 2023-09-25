import styled from "styled-components";
const Media = {
  PhoneLarge: "@media(max-width:600px)",
  Laptop: "@media(max-width:1150px)",
  Tablet: "@media(max-width:1000px)",
  PhoneSmall: "@media(max-width:320px)",
};

export const Container = styled.section`
  min-height: 30rem;
  width: 90%;
  max-width: 90vw;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin: auto;
  gap: 2rem;
  padding: 5rem 0;
  ${Media.Tablet} {
    min-height: 25rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  ${Media.PhoneLarge} {
    width: 90%;
    max-width: 90rem;
    min-height: 20rem;
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

  h2 {
    color: var(--black, #2f3947);
    text-align: center;
    font-family: Inter;
    font-weight: 800;
    text-transform: uppercase;
    position: relative;
    ${Media.PhoneLarge} {
      font-size: 2.5rem;
    }
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2rem;
      top: 1.5rem;
      background-color: var(--greenThin);
      left: 0;
      z-index: -1;
      ${Media.PhoneLarge} {
      }
    }
  }

  .containerCard {
    flex-wrap: wrap;
    gap: 3rem;
  }

  .card {
    border-radius: 12.736px;
    border: 1.91px solid rgba(0, 16, 142, 0);
    background: linear-gradient(
      147deg,
      rgba(217, 217, 217, 0.4) 1.12%,
      rgba(217, 217, 217, 0) 100%
    );
    box-shadow: 0px 2.54715px 15.28289px -0.63679px rgba(0, 0, 0, 0.25);
    width: 500px;
    ${Media.PhoneLarge} {
      height: auto;
      width: 100%;
    }
    details {
      width: 100%;
    }
    summary {
      width: 100%;
      padding: 1rem 0;
      text-align: center;
      background-color: var(--Blue, #3b4ae2);
      border-radius: 12.736px 12px 0 0;
      color: #fff;
      font-family: Inter;
      font-weight: 800;
      font-size: 1.4rem;
      text-transform: uppercase;
      text-align: left;
      ${Media.PhoneLarge} {
        font-size: 1.5rem;
      }
    }
    p {
      width: 80%;
      color: var(--black);
      font-family: Lato;
      font-size: 25px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      margin: auto;
    }
  }
  .btnContainer {
    width: 80%;
    padding: 1rem 0;
  }
  button {
    color: var(--black, #2f3947);
    font-family: Lato;
    font-size: 25px;
    font-weight: 900;
    text-decoration-line: underline;
    background-color: inherit;
  }
`;
