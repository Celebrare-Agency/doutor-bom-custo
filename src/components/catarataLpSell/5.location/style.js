import styled from "styled-components";
const Media = {
  PhoneLarge: "@media(max-width:600px)",
  Laptop: "@media(max-width:1150px)",
  Tablet: "@media(max-width:1000px)",
  PhoneSmall: "@media(max-width:320px)",
};

export const Container = styled.section`
  min-height: 34rem;
  margin-top: 5rem;
  ${Media.Tablet} {
    min-height: 25rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  ${Media.PhoneLarge} {
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
  .titlePart {
    width: 100%;
    gap: 0.5rem;

    h3 {
      font-weight: bold;
      text-transform: uppercase;
      font-size: calc(100% + 2.4rem);
      font-family: "inter";
      width: 80%;
      color: var(--black);
      text-align: center;
      ${Media.Tablet} {
        text-align: left;
        font-size: 2.4rem;
        font-weight: bold;
        width: 90%;
      }
    }
    p {
      font-weight: 600;
      text-transform: uppercase;
      font-family: "inter";
      color: var(--black);
      opacity: 0.6;
      width: 50%;
      text-align: center;
      ${Media.Tablet} {
        width: 90%;
        text-align: left;
      }
    }
  }
  .content {
    width: 85%;
    max-width: 80rem;
    gap: 2rem;
    margin: auto;
    ${Media.Tablet} {
      flex-direction: column;
    }
    .video {
      width: 100%;

      h3 {
        font-weight: bold;
        text-transform: uppercase;
        font-size: calc(100% + 2.4rem);
        font-family: "inter";
        color: var(--black);
        text-align: left;
        ${Media.PhoneLarge} {
          font-size: 2rem;
          font-weight: bold;
        }
        p {
          font-family: "inter";
          color: var(--black);
          text-align: left;
        }
      }

      .containerText {
        text-align: left;
        align-items: flex-start;
      }
    }
  }

  button {
    margin: auto;
    margin-top: 1rem;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      gap: 1rem;
      color: var(--light);
    }
    color: var(--light);
    font-family: Inter;
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding: 1rem;
    background: #38af7e;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 1rem;
    transition: 0.3s;
    &:hover {
      background-color: var(--blueHover);
    }
    ${Media.PhoneLarge} {
      font-size: 2rem;
      padding: 0.6rem;
    }
    ${Media.PhoneSmall} {
      font-size: 1.4rem;
    }

    .BUttonwhatsApp {
      width: 2rem;
      height: 2rem;
    }
  }
`;
