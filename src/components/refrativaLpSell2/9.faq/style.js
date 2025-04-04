import styled from "styled-components";
const Media = {
  Nav: "@media(max-width:1000px)",
  PhoneLarge: "@media(max-width:600px)",
  Laptop: "@media(max-width:1150px)",
  Tablet: "@media(max-width:1000px)",
};

export const Section = styled.section`
  min-height: 90vh;
  width: 90%;
  max-width: 80rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  gap: 0.8rem;
  padding: 4rem 0;

  .column {
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
    font-family: "inter";
    font-weight: 700;
    color: var(--wine);
  }

  .questionImg {
    position: absolute;
    z-index: -1;
    width: 16rem;
    right: 10%;
    transform: rotate(34deg);

    ${Media.PhoneLarge} {
      display: none;
    }
    &:last-child {
      right: inherit;
      left: 10%;
      margin-top: 10rem;
      transform: rotate(-19deg);
    }
  }
  .faqContainer {
    background: var(--pink);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    width: 100%;
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
      background: var(--white);
      padding: 1.4rem 2em;
      font-family: "lato";
      transition: 0.3s all;
      font-style: normal;
      color: var(--black);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      ${Media.PhoneLarge} {
        padding: 1rem 0.5em;
      }
    }

    p {
      transition: 0.3s all;

      line-break: loose;
      padding: 0.8rem;
      max-width: 93%;
      margin: auto;
      background: var(--white);
      border-radius: 0 0 10px 10px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      font-family: "lato";
      font-weight: 400;
      color: var(--black);
    }
  }
`;
