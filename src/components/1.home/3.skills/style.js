import styled from "styled-components";
const Media = {
  PhoneLarge: "@media(max-width:600px)",
  Laptop: "@media(max-width:1150px)",
  Tablet: "@media(max-width:1000px)",
  PhoneSmall: "@media(max-width:320px)",
};

export const Container = styled.section`
  min-height: 40rem;
  width: 85%;
  max-width: 80rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin: auto;
  ${Media.Tablet} {
    min-height: 26rem;
    flex-direction: column-reverse;
    align-items: flex-start;
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

  .imgContainer {
    width: 50%;
    min-height: 40rem;
    margin: auto;

    ${Media.Tablet} {
      width: 50%;
      min-height: 10rem;
    }

    ${Media.PhoneLarge} {
      width: 80%;
      margin: 0;
    }
    img {
      width: 100%;
    }
  }
  button {
    color: #fff;
    font-family: inter;
    font-style: normal;
    padding: 1rem;
    font-weight: 700;
    line-height: normal;
    font-size: 2rem;
    transition: 0.3s;
    ${Media.PhoneLarge} {
      font-size: 1.5rem;
    }
  }
  .skillSideContainer {
    align-items: flex-start;
    justify-content: space-evenly;
    min-height: 66rem;
    gap: 1rem;
    width: 40%;
    margin: auto;
    ${Media.Tablet} {
      margin: 0;
      width: 100%;
    }
    h2 {
      color: var(--black);
      white-space: pre;
      font-family: Inter;
      font-weight: 800;
      text-transform: uppercase;
    }
    .itemsContainer {
      gap: 1rem;
      align-items: flex-start;
      img {
        max-width: 42px;
      }
      h3 {
        margin-top: -1rem;
        color: var(--black);
        font-family: inter;
        font-weight: 700;
      }
      p {
        color: var(--black);
        font-family: Lato;
        font-weight: 400;
      }
    }

    .buttonCallToAction {
      padding: 1rem;
      color: #fff;
      font-family: Inter;
      font-size: 26px;
      font-weight: 700;
      text-transform: uppercase;
      background: var(--blue);
      transition: 0.3s;
      &:hover {
        background-color: var(--blueHover);
      }
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      padding: 1rem;
      ${Media.PhoneLarge} {
        font-size: 1.1rem;
        padding: 0.6rem;
      }
      ${Media.PhoneSmall} {
        font-size: 1rem;
      }
    }
  }
`;
