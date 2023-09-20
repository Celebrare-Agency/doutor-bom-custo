import styled from "styled-components";
const Media = {
  PhoneLarge: "@media(max-width:600px)",
  Laptop: "@media(max-width:1150px)",
  Tablet: "@media(max-width:1000px)",
  PhoneSmall: "@media(max-width:320px)",
};

export const Container = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: auto;
  width: 85%;
  max-width: 80rem;
  position: relative;

  ${Media.Tablet} {
    flex-direction: column-reverse;
    align-items: flex-start;
    padding: 3rem 0;
    min-height: 26rem;
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
  .DoctorSmilingImage {
    width: 20rem;
    max-width: 500px;
    padding-top: 10rem;
    height: auto;
    position: absolute;
    left: 0;
    ${Media.Tablet} {
      position: inherit;
      left: inherit;
      padding-top: 2rem;
      padding-bottom: 0rem;
      width: 30vw;
      min-width: 12rem;
      z-index: -1;
      padding-right: 5rem;
    }
    ${Media.PhoneSmall} {
      min-width: auto;
      width: 50vw;
    }
  }
  .middlePartContainer {
    width: 50%;
    margin: auto;
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
      text-align: center;
      font-family: Inter;
      font-weight: 800;
      text-transform: uppercase;
      white-space: pre;
    }

    .buttonsContainer {
      gap: 0.9rem;
      justify-content: space-around;
      width: 100%;
      ${Media.PhoneLarge} {
        justify-content: flex-start;
      }
      button {
        color: var(--light);
        font-family: Inter;
        font-size: 21px;
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
      .buttonContactUs {
        background: var(--blue);
        transition: 0.3s;
        &:hover {
          background-color: var(--blueHover);
        }
      }
      .buttonScroll {
        background: var(--greenBold);
        transition: 0.3s;
        &:hover {
          background-color: var(--greenHover);
        }
      }
    }

    hr {
      width: 100%;
      height: 1px;
      opacity: 0.2;
      background-color: var(--black);
    }

    p {
      width: 100%;
      color: var(--black);
      font-family: Inter;
      text-align: center;
    }

    h1,
    p {
      ${Media.Tablet} {
        text-align: left;
      }
    }
  }

  .oldWomanImage {
    width: 18rem;
    max-width: 500px;
    padding-bottom: 7rem;
    position: absolute;
    right: 0;
    ${Media.Tablet} {
      position: absolute;
      bottom: 0;
      padding-bottom: 0rem;
      right: 0;
      width: 30vw;
      min-width: 12rem;
      z-index: -1;
      padding-right: 5rem;
    }

    ${Media.PhoneLarge} {
      padding-bottom: 0rem;
      padding-right: 1rem;
    }
    ${Media.PhoneSmall} {
      min-width: auto;
      width: 50vw;
    }
  }
`;
