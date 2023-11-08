import styled from "styled-components";
const Media = {
  PhoneLarge: "@media(max-width:600px)",
  Laptop: "@media(max-width:1150px)",
  Tablet: "@media(max-width:1000px)",
  PhoneSmall: "@media(max-width:320px)",
};

export const Container = styled.section`
  min-height: 45rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin: auto;
  width: 85%;
  max-width: 80rem;
  position: relative;

  ${Media.Tablet} {
    flex-direction: column-reverse;
    align-items: flex-start;
    padding: 8rem 0;
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

  .middlePartContainer {
    width: 50%;
    margin: auto;
    align-items: flex-start;
    /* position: relative; */
    gap: 2rem;
    ${Media.Tablet} {
      order: 3;
      margin: 0;
      width: 100%;
      object-fit: contain;
      align-items: flex-start;
    }

    h1 {
      text-align: center;
      color: var(--black, #2f3947);
      text-align: left;
      font-family: Inter;
      font-weight: 800;
      text-transform: uppercase;
      white-space: pre;
    }

    p {
      width: 100%;
      color: var(--black);
      font-family: Inter;
    }

    h1,
    p {
      ${Media.Tablet} {
        text-align: left;
      }
    }
  }
  .oldManImage {
    height: 90%;
    /* width:50%: */
    z-index: -99;
    ${Media.Tablet} {
      display: none;
    }
  }
  .buttonsContainer {
    button {
      color: var(--light);
      font-family: Inter;
      font-size: 3rem;
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

  .figureImage {
    position: absolute;
    right: 1rem;
    width: 40rem;
    bottom: 11rem;
    ${Media.Tablet} {
      position: inherit;
      width: 110%;
      margin-left: -10%;
    }
  }
`;
