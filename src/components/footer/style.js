import styled from "styled-components";
const Media = {
  PhoneLarge: "@media(max-width:600px)",
  Laptop: "@media(max-width:1150px)",
  Tablet: "@media(max-width:1000px)",
  PhoneSmall: "@media(max-width:320px)",
};

export const Footer = styled.footer`
  margin-top: 5rem;
  background-color: var(--blue);
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
  .footer {
    margin: auto;
    justify-content: space-between;
    width: 85%;
    max-width: 80rem;
    position: relative;
    min-height: 20rem;

    ${Media.Tablet} {
      min-height: 26rem;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 2rem;
    }
    ${Media.PhoneLarge} {
      width: 90%;
      max-width: 90rem;
    }
  }

  .left {
    width: 30%;
    align-items: flex-start;
    gap: 1rem;
    ${Media.Tablet} {
      width: 100%;
    }
    img {
      width: 60%;
      ${Media.Tablet} {
        width: 30%;
      }
    }
    p {
      width: 100%;

      color: var(--light);
      font-family: Poppins;
      font-size: 11.653px;
      font-style: normal;
      font-weight: 400;
      line-height: 22.142px;
      ${Media.Tablet} {
        width: 60%;
      }
    }
  }

  .socialGrid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 50px;

    .socialContainer {
      gap: 0.2rem;
      .icon {
        color: var(--light);
        width: 2rem;
        height: 2rem;
      }
      p {
        color: var(--light);
        font-family: Poppins;
        font-size: 11.653px;
        font-style: normal;
        font-weight: 400;
        line-height: 22.142px;
      }
    }
  }
  .privacypart {
    width: 90%;
    margin: auto;
    justify-content: space-between;
    p {
      color: #fff;
      font-family: Lato;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 22.8px;
      cursor: pointer;
    }
    ${Media.Tablet} {
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 1rem;
    }
  }
`;
